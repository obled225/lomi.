#!/usr/bin/env node
/**
 * PHP SDK Generator
 * 
 * Generates PHP SDK from TypeScript types
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const apiConfigPath = join(__dirname, '../api-config.ts');
const outputDir = join(__dirname, '../php/src');

console.log('🔨 Generating PHP SDK...');

// First ensure pre-generate has run
console.log('📋 Running pre-generation...');
execSync('node scripts/pre-generate.js', {
    cwd: join(__dirname, '..'),
    stdio: 'inherit'
});

function toPascalCase(str) {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

function toCamelCase(str) {
    const pascal = toPascalCase(str);
    return pascal.charAt(0).toLowerCase() + pascal.slice(1);
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
                propertyName: toCamelCase(tableNameMatch[1]),
            });
        }
    }
    return resources;
}

// Create output directory
if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
}

// Read config
const apiConfigContent = readFileSync(apiConfigPath, 'utf-8');
const resources = parseApiConfig(apiConfigContent);

console.log(`✅ Found ${resources.length} API resources`);

// Generate LomiClient.php
const clientContent = `<?php
/**
 * lomi. PHP SDK Client
 * AUTO-GENERATED - Do not edit manually
 */

namespace Lomi;

use GuzzleHttp\\Client;
use GuzzleHttp\\Exception\\RequestException;

class LomiClient
{
    private string $apiKey;
    private string $baseUrl;
    private Client $httpClient;

${resources.map(r => `    public ${r.className} $${r.propertyName};`).join('\n')}

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
${resources.map(r => `        $this->${r.propertyName} = new ${r.className}($this);`).join('\n')}
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

${resources.map(r => `
class ${r.className}
{
    private LomiClient $client;
    
    public function __construct(LomiClient $client)
    {
        $this->client = $client;
    }
    
    /**
     * List ${r.tableName}
     */
    public function list(array $params = []): array
    {
        return $this->client->request('GET', '/${r.tableName.replace(/_/g, '-')}', [
            'query' => $params
        ]);
    }
    
    /**
     * Get a single ${r.tableName.slice(0, -1)}
     */
    public function get(string $id): array
    {
        return $this->client->request('GET', "/${r.tableName.replace(/_/g, '-')}/{$id}");
    }
}
`).join('\n')}
`;

writeFileSync(join(outputDir, 'LomiClient.php'), clientContent);

// Generate composer.json if not exists
const composerPath = join(__dirname, '../php/composer.json');
if (!existsSync(composerPath)) {
    const composerContent = {
        name: "lomiafrica/lomi-php",
        description: "PHP SDK for lomi. payment processing API",
        type: "library",
        license: "MIT",
        autoload: {
            "psr-4": {
                "Lomi\\\\": "src/"
            }
        },
        require: {
            "php": ">=8.0",
            "guzzlehttp/guzzle": "^7.0"
        }
    };
    writeFileSync(composerPath, JSON.stringify(composerContent, null, 4));
}

console.log('✅ PHP SDK generated successfully!');
console.log(`   📁 Output: ${outputDir}`);
