#!/usr/bin/env node
/**
 * Python SDK Generator
 * 
 * Generates Python SDK from TypeScript types
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const apiTypesPath = join(__dirname, '../api-types.ts');
const apiConfigPath = join(__dirname, '../api-config.ts');
const outputDir = join(__dirname, '../python/lomi');

console.log('🔨 Generating Python SDK...');

// First ensure pre-generate has run
console.log('📋 Running pre-generation...');
execSync('node scripts/pre-generate.js', {
    cwd: join(__dirname, '..'),
    stdio: 'inherit'
});

/**
 * Convert TypeScript type to Python type
 */
function tsToPython(tsType) {
    if (!tsType) return 'Any';

    // Handle basic types
    const typeMap = {
        'string': 'str',
        'number': 'float',
        'boolean': 'bool',
        'Json': 'Dict[str, Any]',
        'undefined': 'None',
        'null': 'None',
    };

    // Handle arrays
    if (tsType.endsWith('[]')) {
        const baseType = tsType.slice(0, -2);
        return `List[${tsToPython(baseType)}]`;
    }

    // Handle unions with null
    if (tsType.includes(' | null')) {
        const baseType = tsType.replace(' | null', '').trim();
        return `Optional[${tsToPython(baseType)}]`;
    }

    // Handle APIEnums
    if (tsType.includes('APIEnums[')) {
        const enumName = tsType.match(/APIEnums\["(\w+)"\]/)?.[1];
        return enumName ? `${toPascalCase(enumName)}` : 'str';
    }

    return typeMap[tsType] || 'Any';
}

function toPascalCase(str) {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

function toSnakeCase(str) {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}

/**
 * Parse API config for resources
 */
function parseApiConfig(content) {
    const resourcesMatch = content.match(/export const API_RESOURCES[^=]*=\s*\[([\s\S]*?)\];/);
    if (!resourcesMatch) return [];

    const resources = [];
    const resourceBlocks = resourcesMatch[1].split(/\},\s*\{/);

    for (const block of resourceBlocks) {
        const tableNameMatch = block.match(/tableName:\s*['"](\w+)['"]/);
        const enabledMatch = block.match(/enabled:\s*(true|false)/);

        if (tableNameMatch && enabledMatch && enabledMatch[1] === 'true') {
            resources.push({
                tableName: tableNameMatch[1],
                className: toPascalCase(tableNameMatch[1]) + 'Service',
            });
        }
    }
    return resources;
}

// Clean and create output directory
if (existsSync(outputDir)) {
    rmSync(outputDir, { recursive: true });
}
mkdirSync(outputDir, { recursive: true });

// Read config
const apiConfigContent = readFileSync(apiConfigPath, 'utf-8');
const resources = parseApiConfig(apiConfigContent);

console.log(`✅ Found ${resources.length} API resources`);

// Generate __init__.py
const initContent = `"""
lomi. Python SDK
AUTO-GENERATED - Do not edit manually
"""

from .client import LomiClient
from .exceptions import LomiError, LomiAuthError, LomiNotFoundError

__version__ = "1.0.0"
__all__ = [
    "LomiClient",
    "LomiError",
    "LomiAuthError", 
    "LomiNotFoundError",
${resources.map(r => `    "${r.className}",`).join('\n')}
]
`;
writeFileSync(join(outputDir, '__init__.py'), initContent);

// Generate exceptions.py
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


class LomiRateLimitError(LomiError):
    """Rate limit exceeded error"""
    pass
`;
writeFileSync(join(outputDir, 'exceptions.py'), exceptionsContent);

// Generate client.py
const clientContent = `"""
lomi. Python SDK Client
AUTO-GENERATED - Do not edit manually
"""

import requests
from typing import Optional, Dict, Any
from .exceptions import LomiError, LomiAuthError, LomiNotFoundError


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
${resources.map(r => `        self.${toSnakeCase(r.tableName)} = ${r.className}(self)`).join('\n')}
    
    def _request(
        self,
        method: str,
        path: str,
        params: Optional[Dict[str, Any]] = None,
        data: Optional[Dict[str, Any]] = None,
    ) -> Any:
        """Make an HTTP request to the API"""
        url = f"{self.base_url}{path}"
        
        try:
            response = self.session.request(
                method=method,
                url=url,
                params=params,
                json=data,
            )
            
            if response.status_code == 401:
                raise LomiAuthError("Invalid API key", response.status_code, response.json())
            elif response.status_code == 404:
                raise LomiNotFoundError("Resource not found", response.status_code, response.json())
            elif response.status_code >= 400:
                raise LomiError(f"API error: {response.text}", response.status_code, response.json() if response.text else None)
            
            return response.json() if response.text else None
            
        except requests.RequestException as e:
            raise LomiError(f"Request failed: {str(e)}")


${resources.map(r => `
class ${r.className}:
    """${r.tableName} API service"""
    
    def __init__(self, client: LomiClient):
        self._client = client
    
    def list(self, **params) -> list:
        """List ${r.tableName}"""
        return self._client._request("GET", "/${r.tableName.replace(/_/g, '-')}", params=params)
    
    def get(self, id: str) -> dict:
        """Get a single ${r.tableName.slice(0, -1)}"""
        return self._client._request("GET", f"/${r.tableName.replace(/_/g, '-')}/{id}")
`).join('\n')}
`;
writeFileSync(join(outputDir, 'client.py'), clientContent);

// Generate py.typed marker
writeFileSync(join(outputDir, 'py.typed'), '');

console.log('✅ Python SDK generated successfully!');
console.log(`   📁 Output: ${outputDir}`);
