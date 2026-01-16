#!/usr/bin/env node
/**
 * Python SDK Generator
 * 
 * Generates Python SDK from TypeScript types using Pydantic models
 * - Modular structure: services/ and models/
 * - Comprehensive Tests generation
 * - No docs
 */

import { writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { parseApiConfig, parseSchema, toPascalCase, toSnakeCase } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = join(__dirname, '../python/lomi');
const testsDir = join(__dirname, '../python/tests');
const modelsDir = join(outputDir, 'models');
const servicesDir = join(outputDir, 'services');

console.log('🔨 Generating Python SDK...');

// First ensure pre-generate has run
console.log('📋 Running pre-generation...');
execSync('node scripts/pre-generate.js', {
    cwd: join(__dirname, '..'),
    stdio: 'inherit'
});

// Clean output dirs
if (existsSync(outputDir)) rmSync(outputDir, { recursive: true });
if (existsSync(testsDir)) rmSync(testsDir, { recursive: true });

mkdirSync(outputDir, { recursive: true });
mkdirSync(modelsDir, { recursive: true });
mkdirSync(servicesDir, { recursive: true });
mkdirSync(testsDir, { recursive: true });

// Parse config and schema
const resources = parseApiConfig();
const schema = parseSchema();

console.log(`✅ Found ${resources.length} API resources`);

// Helper to map TS types to Python types
function mapType(field) {
    let pyType = 'Any';

    if (field.isEnum) {
        pyType = toPascalCase(field.enumName || 'str');
    } else if (field.type === 'string') {
        pyType = 'str';
    } else if (field.type === 'number') {
        pyType = 'float';
    } else if (field.type === 'boolean') {
        pyType = 'bool';
    } else if (field.type === 'json') {
        pyType = 'Dict[str, Any]';
    } else if (field.type === 'array') {
        pyType = 'List[str]';
    }

    if (field.isOptional) {
        return `Optional[${pyType}]`;
    }
    return pyType;
}

// 1. Generate Models 
const allModelNames = [];

for (const r of resources) {
    const tableSchema = schema.tables[r.tableName];
    if (!tableSchema) continue;

    const className = toPascalCase(r.tableName);
    const snakeName = toSnakeCase(r.tableName);
    allModelNames.push(className);

    let content = `from __future__ import annotations
from typing import Optional, List, Dict, Any
from pydantic import BaseModel, Field

`;
    // -- Row Model
    content += `class ${className}(BaseModel):\n`;
    content += `    """${r.description || className} model"""\n`;
    for (const field of tableSchema.row) {
        content += `    ${field.name}: ${mapType(field)} = Field(default=None)\n`;
    }
    content += '\n';

    // -- Insert Model
    if (tableSchema.insert.length > 0) {
        content += `class ${className}Create(BaseModel):\n`;
        for (const field of tableSchema.insert) {
            const type = mapType(field);
            const defaultVal = field.isOptional ? ' = None' : '';
            content += `    ${field.name}: ${type}${defaultVal}\n`;
        }
        content += '\n';
    }

    // -- Update Model
    if (tableSchema.update.length > 0) {
        content += `class ${className}Update(BaseModel):\n`;
        for (const field of tableSchema.update) {
            const type = mapType({ ...field, isOptional: true });
            content += `    ${field.name}: ${type} = None\n`;
        }
        content += '\n';
    }

    writeFileSync(join(modelsDir, `${snakeName}.py`), content);
}

// Generate models/__init__.py 
let modelsInit = `"""
lomi. Models
"""
from typing import *

`;
for (const r of resources) {
    const snakeName = toSnakeCase(r.tableName);
    const className = toPascalCase(r.tableName);
    modelsInit += `from .${snakeName} import ${className}, ${className}Create, ${className}Update\n`;
}
writeFileSync(join(modelsDir, '__init__.py'), modelsInit);


// 2. Generate Services 
for (const r of resources) {
    const snakeName = toSnakeCase(r.tableName);
    const className = toPascalCase(r.tableName);
    const serviceName = `${className}Service`;

    let content = `from typing import List, Optional
from ..models import ${className}, ${className}Create, ${className}Update
from ..client_base import ClientBase

class ${serviceName}(ClientBase):
    """${r.tableName} API service"""
    
    ${r.operations.list ? `
    def list(self, **params) -> List[${className}]:
        """List ${r.tableName}"""
        return self._request("GET", "/${r.tableName.replace(/_/g, '-')}", model=${className}, params=params)
    ` : ''}
    ${r.operations.get ? `
    def get(self, id: str) -> ${className}:
        """Get a single ${r.tableName.slice(0, -1)}"""
        return self._request("GET", f"/${r.tableName.replace(/_/g, '-')}/{id}", model=${className})
    ` : ''}
    ${r.operations.create ? `
    def create(self, data: ${className}Create) -> ${className}:
        """Create a new ${r.tableName.slice(0, -1)}"""
        return self._request("POST", "/${r.tableName.replace(/_/g, '-')}", model=${className}, data=data)
    ` : ''}
    ${r.operations.update ? `
    def update(self, id: str, data: ${className}Update) -> ${className}:
        """Update a ${r.tableName.slice(0, -1)}"""
        return self._request("PATCH", f"/${r.tableName.replace(/_/g, '-')}/{id}", model=${className}, data=data)
    ` : ''}
    ${r.operations.delete ? `
    def delete(self, id: str) -> None:
        """Delete a ${r.tableName.slice(0, -1)}"""
        return self._request("DELETE", f"/${r.tableName.replace(/_/g, '-')}/{id}")
    ` : ''}
`;
    writeFileSync(join(servicesDir, `${snakeName}.py`), content);
}
// Generate services/__init__.py
let servicesInit = ``;
for (const r of resources) {
    servicesInit += `from .${toSnakeCase(r.tableName)} import ${toPascalCase(r.tableName)}Service\n`;
}
writeFileSync(join(servicesDir, '__init__.py'), servicesInit);

// 3. Generate Client Base 
const clientBaseContent = `
from typing import Optional, Dict, Any, List, Type, TypeVar, TYPE_CHECKING
import requests
from .exceptions import LomiError, LomiAuthError, LomiNotFoundError
from pydantic import BaseModel

if TYPE_CHECKING:
    from .client import LomiClient

T = TypeVar("T", bound=BaseModel)

class ClientBase:
    def __init__(self, client: 'LomiClient'):
        self._client = client

    def _request(self, method: str, path: str, model: Type[T] = None, params: Optional[Dict[str, Any]] = None, data: Optional[Dict[str, Any]] = None) -> Any:
        return self._client._request(method, path, model, params, data)
`;
writeFileSync(join(outputDir, 'client_base.py'), clientBaseContent);


// 4. Generate Main Client
const clientContent = `"""
lomi. Python SDK Client
AUTO-GENERATED - Do not edit manually
"""

import requests
from typing import Optional, Dict, Any, List, Type, TypeVar
from .exceptions import LomiError, LomiAuthError, LomiNotFoundError
from .models import *
from .services import *
from pydantic import BaseModel

T = TypeVar("T", bound=BaseModel)

class LomiClient:
    """Main lomi. SDK client"""
    
    def __init__(
        self,
        api_key: str,
        base_url: str = "https://api.lomi.africa",
        environment: str = "live"
    ):
        self.api_key = api_key
        self.base_url = base_url if environment != "test" else "https://sandbox.api.lomi.africa"
        self.session = requests.Session()
        self.session.headers.update({
            "X-API-KEY": api_key,
            "Content-Type": "application/json",
        })
        
        # Initialize service instances
${resources.map(r => `        self.${toSnakeCase(r.tableName)} = ${toPascalCase(r.tableName)}Service(self)`).join('\n')}
    
    def _request(
        self,
        method: str,
        path: str,
        model: Type[T] = None,
        params: Optional[Dict[str, Any]] = None,
        data: Optional[Dict[str, Any]] = None,
    ) -> Any:
        """Make an HTTP request to the API"""
        url = f"{self.base_url}{path}"
        
        # Convert Pydantic models to dict if passed as data
        json_data = data
        if hasattr(data, 'dict'):
             json_data = data.dict(exclude_unset=True)

        try:
            response = self.session.request(
                method=method,
                url=url,
                params=params,
                json=json_data,
            )
            
            if response.status_code == 401:
                raise LomiAuthError("Invalid API key", response.status_code, response.json())
            elif response.status_code == 404:
                raise LomiNotFoundError("Resource not found", response.status_code, response.json())
            elif response.status_code >= 400:
                raise LomiError(f"API error: {response.text}", response.status_code, response.json() if response.text else None)
            
            resp_data = response.json() if response.text else None
            
            # If model class provided, parse response
            if model and resp_data:
                if isinstance(resp_data, list):
                    return [model(**item) for item in resp_data]
                return model(**resp_data)
                
            return resp_data
            
        except requests.RequestException as e:
            raise LomiError(f"Request failed: {str(e)}")
`;
writeFileSync(join(outputDir, 'client.py'), clientContent);

// Generate Exceptions
const exceptionsContent = `"""
lomi. SDK Exceptions
AUTO-GENERATED - Do not edit manually
"""

class LomiError(Exception):
    """Base exception for lomi. SDK"""
    def __init__(self, message: str, status_code: int = None, body: dict = None):
        super().__init__(message)
        self.status_code = status_code
        self.body = body

class LomiAuthError(LomiError):
    """Authentication error"""
    pass

class LomiNotFoundError(LomiError):
    """Resource not found error"""
    pass
`;
writeFileSync(join(outputDir, 'exceptions.py'), exceptionsContent);

// Generate __init__.py
const initContent = `"""
lomi. Python SDK
AUTO-GENERATED - Do not edit manually
"""

from .client import LomiClient
from .exceptions import LomiError, LomiAuthError, LomiNotFoundError
from .models import *

__version__ = "1.0.0"
`;
writeFileSync(join(outputDir, '__init__.py'), initContent);
writeFileSync(join(outputDir, 'py.typed'), '');

// Generate Tests
// 1. Basic Client Test
const testClientContent = `import unittest
from lomi import LomiClient

class TestLomiClient(unittest.TestCase):
    def test_init(self):
        client = LomiClient(api_key="test_key")
        self.assertEqual(client.api_key, "test_key")
        self.assertEqual(client.base_url, "https://api.lomi.africa")

    def test_sandbox(self):
        client = LomiClient(api_key="test_key", environment="test")
        self.assertEqual(client.base_url, "https://sandbox.api.lomi.africa")

if __name__ == '__main__':
    unittest.main()
`;
writeFileSync(join(testsDir, 'test_client.py'), testClientContent);

// 2. Individual Service Tests
for (const r of resources) {
    const snakeName = toSnakeCase(r.tableName);
    const className = toPascalCase(r.tableName);

    const content = `import unittest
from lomi import LomiClient

class Test${className}Service(unittest.TestCase):
    def setUp(self):
        self.client = LomiClient(api_key="test_key")

    def test_service_initialized(self):
        self.assertIsNotNone(self.client.${snakeName})
        
    # TODO: Add mock tests for ${className} methods
`;
    writeFileSync(join(testsDir, `test_${snakeName}.py`), content);
}


console.log('✅ Python SDK generated successfully!');
