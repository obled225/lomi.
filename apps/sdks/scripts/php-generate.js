#!/usr/bin/env node
/**
 * PHP SDK Generator
 * 
 * Generates PHP SDK from TypeScript types using strongly-typed Classes
 * - Modular Services in src/Services/
 * - Comprehensive Test generation
 * - No docs
 */

import { writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { parseApiConfig, parseSchema, toPascalCase, toCamelCase } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = join(__dirname, '../php/src');
const modelsDir = join(outputDir, 'Models');
const servicesDir = join(outputDir, 'Services');
const testsDir = join(__dirname, '../php/tests');

console.log('🔨 Generating PHP SDK...');

// First ensure pre-generate has run
console.log('📋 Running pre-generation...');
execSync('node scripts/pre-generate.js', {
    cwd: join(__dirname, '..'),
    stdio: 'inherit'
});

// Clean and create output directory
if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
}
if (existsSync(modelsDir)) rmSync(modelsDir, { recursive: true });
if (existsSync(servicesDir)) rmSync(servicesDir, { recursive: true });
if (existsSync(testsDir)) rmSync(testsDir, { recursive: true });

mkdirSync(modelsDir, { recursive: true });
mkdirSync(servicesDir, { recursive: true });
mkdirSync(testsDir, { recursive: true });

// Parse config and schema
const resources = parseApiConfig();
const schema = parseSchema();

console.log(`✅ Found ${resources.length} API resources`);

function mapType(field) {
    let phpType = 'mixed';

    if (field.isEnum) {
        phpType = 'string';
    } else if (field.type === 'string') {
        phpType = 'string';
    } else if (field.type === 'number') {
        phpType = 'float';
    } else if (field.type === 'boolean') {
        phpType = 'bool';
    } else if (field.type === 'json') {
        phpType = 'array';
    } else if (field.type === 'array') {
        phpType = 'array';
    }

    if (field.isOptional) {
        return `?${phpType}`;
    }
    return phpType;
}

// Generate Models
for (const r of resources) {
    const tableSchema = schema.tables[r.tableName];
    if (!tableSchema) continue;

    const className = toPascalCase(r.tableName);

    // -- Row Model
    let classContent = `<?php
/**
 * ${className} Model
 * AUTO-GENERATED - Do not edit manually
 */

namespace Lomi\\Models;

class ${className}
{
`;
    // Properties
    for (const field of tableSchema.row) {
        classContent += `    public ${mapType(field)} $${toCamelCase(field.name)};\n`;
    }

    // Constructor
    classContent += `\n    public function __construct(array $data = [])\n    {\n`;
    for (const field of tableSchema.row) {
        const propName = toCamelCase(field.name);
        classContent += `        $this->${propName} = $data['${field.name}'] ?? null;\n`;
    }
    classContent += `    }\n`;

    classContent += `}\n`;
    writeFileSync(join(modelsDir, `${className}.php`), classContent);
}

// Generate Services
for (const r of resources) {
    const className = toPascalCase(r.tableName);
    const serviceName = `${className}Service`;

    let content = `<?php

namespace Lomi\\Services;

use Lomi\\LomiClient;
use Lomi\\Models\\${className};

class ${serviceName}
{
    private LomiClient $client;
    
    public function __construct(LomiClient $client)
    {
        $this->client = $client;
    }
    
    ${r.operations.list ? `
    /**
     * List ${r.tableName}
     * @return \\Lomi\\Models\\${className}[]
     */
    public function list(array $params = []): array
    {
        $response = $this->client->request('GET', '/${r.tableName.replace(/_/g, '-')}', [
            'query' => $params
        ]);
        
        return array_map(function ($item) {
            return new \\Lomi\\Models\\${className}($item);
        }, $response);
    }` : ''}
    
    ${r.operations.get ? `
    /**
     * Get a single ${r.tableName}
     */
    public function get(string $id): \\Lomi\\Models\\${className}
    {
        $response = $this->client->request('GET', "/${r.tableName.replace(/_/g, '-')}/{$id}");
        return new \\Lomi\\Models\\${className}($response);
    }` : ''}

    ${r.operations.create ? `
    /**
     * Create a new ${r.tableName}
     */
    public function create(array $data): \\Lomi\\Models\\${className}
    {
        $response = $this->client->request('POST', "/${r.tableName.replace(/_/g, '-')}", [
            'json' => $data
        ]);
        return new \\Lomi\\Models\\${className}($response);
    }` : ''}
    
    ${r.operations.update ? `
    /**
     * Update a ${r.tableName}
     */
    public function update(string $id, array $data): \\Lomi\\Models\\${className}
    {
        $response = $this->client->request('PATCH', "/${r.tableName.replace(/_/g, '-')}/{$id}", [
            'json' => $data
        ]);
        return new \\Lomi\\Models\\${className}($response);
    }` : ''}

}
`;
    writeFileSync(join(servicesDir, `${serviceName}.php`), content);
}


// Generate LomiClient.php
const clientContent = `<?php
/**
 * lomi. PHP SDK Client
 * AUTO-GENERATED - Do not edit manually
 */

namespace Lomi;

use GuzzleHttp\\Client;
use GuzzleHttp\\Exception\\RequestException;
${resources.map(r => `use Lomi\\Services\\${toPascalCase(r.tableName)}Service;`).join('\n')}

class LomiClient
{
    private string $apiKey;
    private string $baseUrl;
    private Client $httpClient;

${resources.map(r => `    public ${toPascalCase(r.tableName)}Service $${toCamelCase(r.tableName)};`).join('\n')}

    public function __construct(string $apiKey, array $options = [])
    {
        $this->apiKey = $apiKey;
        $this->baseUrl = $options['base_url'] ?? 'https://api.lomi.africa';
        
        if (($options['environment'] ?? 'live') === 'test') {
            $this->baseUrl = 'https://sandbox.api.lomi.africa';
        }
        
        $this->httpClient = new Client([
            'base_uri' => $this->baseUrl,
            'headers' => [
                'X-API-KEY' => $this->apiKey,
                'Content-Type' => 'application/json',
            ],
        ]);

        // Initialize services
${resources.map(r => `        $this->${toCamelCase(r.tableName)} = new ${toPascalCase(r.tableName)}Service($this);`).join('\n')}
    }

    public function request(string $method, string $path, array $options = []): array
    {
        try {
            $response = $this->httpClient->request($method, $path, $options);
            $body = $response->getBody()->getContents();
            return json_decode($body, true) ?? [];
        } catch (RequestException $e) {
            if ($e->hasResponse()) {
                $response = $e->getResponse();
                throw new LomiException(
                    $e->getMessage(),
                    $response->getStatusCode(),
                    json_decode($response->getBody()->getContents(), true)
                );
            }
            throw new LomiException($e->getMessage());
        }
    }
}

class LomiException extends \\Exception
{
    public ?array $body;
    
    public function __construct(string $message, int $code = 0, ?array $body = null)
    {
        parent::__construct($message, $code);
        $this->body = $body;
    }
}
`;
writeFileSync(join(outputDir, 'LomiClient.php'), clientContent);

// Generate Basic Tests
const testContent = `<?php

namespace Lomi\\Tests;

use Lomi\\LomiClient;
use PHPUnit\\Framework\\TestCase;

class LomiClientTest extends TestCase
{
    public function testInitialization()
    {
        $client = new LomiClient('test_key');
        $this->assertInstanceOf(LomiClient::class, $client);
    }
}
`;
writeFileSync(join(testsDir, 'LomiClientTest.php'), testContent);

// Generate Per-Service Tests
for (const r of resources) {
    const className = toPascalCase(r.tableName);
    const content = `<?php

namespace Lomi\\Tests;

use Lomi\\LomiClient;
use PHPUnit\\Framework\\TestCase;

class ${className}Test extends TestCase
{
    public function testServiceInitialization()
    {
        $client = new LomiClient('test_key');
        $this->assertNotNull($client->${toCamelCase(r.tableName)});
    }
}
`;
    writeFileSync(join(testsDir, `${className}Test.php`), content);
}

console.log('✅ PHP SDK generated successfully!');
