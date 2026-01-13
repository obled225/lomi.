#!/usr/bin/env node
/**
 * Type-Based SDK Generator
 * 
 * Generates SDK code from api.ts types and api-config.ts resource definitions.
 * This replaces the OpenAPI-based code generation approach.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Paths
const apiTypesPath = join(__dirname, '../api-types.ts');
const apiConfigPath = join(__dirname, '../api-config.ts');
const outputDir = join(__dirname, '../ts/src/generated');

/**
 * Parse API config to get resource definitions
 */
function parseApiConfig(content) {
    // Extract API_RESOURCES array
    const resourcesMatch = content.match(/export const API_RESOURCES[^=]*=\s*\[([\s\S]*?)\];/);
    if (!resourcesMatch) {
        throw new Error('Could not find API_RESOURCES in config');
    }

    const resources = [];
    const resourceBlocks = resourcesMatch[1].split(/\},\s*\{/);

    for (const block of resourceBlocks) {
        const tableNameMatch = block.match(/tableName:\s*['"](\w+)['"]/);
        const enabledMatch = block.match(/enabled:\s*(true|false)/);
        const tagMatch = block.match(/tag:\s*['"]([^'"]+)['"]/);
        const idFieldMatch = block.match(/idField:\s*['"](\w+)['"]/);
        const descriptionMatch = block.match(/description:\s*['"]([^'"]+)['"]/);

        // Parse operations
        const operationsMatch = block.match(/operations:\s*\{([^}]+)\}/);
        const operations = {
            list: true,
            get: true,
            create: false,
            update: false,
            delete: false,
        };

        if (operationsMatch) {
            const opsContent = operationsMatch[1];
            const listMatch = opsContent.match(/list:\s*(true|false)/);
            const getMatch = opsContent.match(/get:\s*(true|false)/);
            const createMatch = opsContent.match(/create:\s*(true|false)/);
            const updateMatch = opsContent.match(/update:\s*(true|false)/);
            const deleteMatch = opsContent.match(/delete:\s*(true|false)/);

            if (listMatch) operations.list = listMatch[1] === 'true';
            if (getMatch) operations.get = getMatch[1] === 'true';
            if (createMatch) operations.create = createMatch[1] === 'true';
            if (updateMatch) operations.update = updateMatch[1] === 'true';
            if (deleteMatch) operations.delete = deleteMatch[1] === 'true';
        }

        if (tableNameMatch && enabledMatch && enabledMatch[1] === 'true') {
            resources.push({
                tableName: tableNameMatch[1],
                tag: tagMatch ? tagMatch[1] : tableNameMatch[1],
                idField: idFieldMatch ? idFieldMatch[1] : `${tableNameMatch[1].slice(0, -1)}_id`,
                description: descriptionMatch ? descriptionMatch[1] : '',
                operations,
            });
        }
    }

    return resources;
}

/**
 * Convert snake_case to PascalCase
 */
function toPascalCase(str) {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

/**
 * Convert snake_case to camelCase
 */
function toCamelCase(str) {
    const pascal = toPascalCase(str);
    return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

/**
 * Generate the types file
 */
function generateTypesFile(apiTypesContent) {
    return `/**
 * API Types
 * AUTO-GENERATED - Do not edit manually
 * 
 * Re-exports types from the API module
 */

${apiTypesContent}
`;
}

/**
 * Generate the OpenAPI compatibility layer
 */
function generateOpenAPIFile() {
    return `/**
 * OpenAPI Configuration
 * AUTO-GENERATED - Do not edit manually
 */

export type OpenAPIConfig = {
    BASE: string;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    CREDENTIALS: 'include' | 'omit' | 'same-origin';
    TOKEN?: string | ((options: { url: string; method: string }) => Promise<string>);
    USERNAME?: string;
    PASSWORD?: string;
    HEADERS?: Record<string, string>;
    ENCODE_PATH?: (path: string) => string;
};

export const OpenAPI: OpenAPIConfig = {
    BASE: 'https://api.lomi.africa',
    VERSION: '1',
    WITH_CREDENTIALS: false,
    CREDENTIALS: 'include',
    TOKEN: undefined,
    USERNAME: undefined,
    PASSWORD: undefined,
    HEADERS: undefined,
    ENCODE_PATH: undefined,
};
`;
}

/**
 * Generate the request helper
 */
function generateRequestFile() {
    return `/**
 * HTTP Request Helper
 * AUTO-GENERATED - Do not edit manually
 */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { OpenAPI } from './OpenAPI.js';

export type ApiRequestOptions = {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    url: string;
    path?: Record<string, string | number>;
    query?: Record<string, any>;
    body?: any;
    headers?: Record<string, string>;
};

export class ApiError extends Error {
    public readonly url: string;
    public readonly status: number;
    public readonly statusText: string;
    public readonly body: any;

    constructor(response: AxiosResponse, message: string) {
        super(message);
        this.url = response.config.url || '';
        this.status = response.status;
        this.statusText = response.statusText;
        this.body = response.data;
    }
}

function getUrl(options: ApiRequestOptions): string {
    let url = \`\${OpenAPI.BASE}\${options.url}\`;
    
    if (options.path) {
        for (const [key, value] of Object.entries(options.path)) {
            url = url.replace(\`{\${key}}\`, String(value));
        }
    }
    
    return url;
}

function getHeaders(options: ApiRequestOptions): Record<string, string> {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...OpenAPI.HEADERS,
        ...options.headers,
    };
    
    return headers;
}

export async function request<T>(options: ApiRequestOptions): Promise<T> {
    const url = getUrl(options);
    const headers = getHeaders(options);
    
    const config: AxiosRequestConfig = {
        method: options.method,
        url,
        headers,
        params: options.query,
        data: options.body,
    };
    
    try {
        const response = await axios(config);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw new ApiError(error.response, error.message);
        }
        throw error;
    }
}
`;
}

/**
 * Generate a service file for a resource
 */
function generateServiceFile(resource) {
    const serviceName = `${toPascalCase(resource.tableName)}Service`;
    const typeName = toPascalCase(resource.tableName);
    const idField = resource.idField;
    const path = resource.tableName.replace(/_/g, '-');

    let methods = [];

    if (resource.operations.list) {
        methods.push(`
    /**
     * List ${resource.tableName}
     * ${resource.description}
     */
    public static async list(options?: {
        limit?: number;
        offset?: number;
        [key: string]: any;
    }): Promise<${typeName}Row[]> {
        return await request<${typeName}Row[]>({
            method: 'GET',
            url: '/${path}',
            query: options,
        });
    }`);
    }

    if (resource.operations.get) {
        methods.push(`
    /**
     * Get a single ${resource.tableName.slice(0, -1)}
     */
    public static async get(id: string): Promise<${typeName}Row> {
        return await request<${typeName}Row>({
            method: 'GET',
            url: '/${path}/{id}',
            path: { id },
        });
    }`);
    }

    if (resource.operations.create) {
        methods.push(`
    /**
     * Create a new ${resource.tableName.slice(0, -1)}
     */
    public static async create(data: ${typeName}Insert): Promise<${typeName}Row> {
        return await request<${typeName}Row>({
            method: 'POST',
            url: '/${path}',
            body: data,
        });
    }`);
    }

    if (resource.operations.update) {
        methods.push(`
    /**
     * Update an existing ${resource.tableName.slice(0, -1)}
     */
    public static async update(id: string, data: ${typeName}Update): Promise<${typeName}Row> {
        return await request<${typeName}Row>({
            method: 'PATCH',
            url: '/${path}/{id}',
            path: { id },
            body: data,
        });
    }`);
    }

    if (resource.operations.delete) {
        methods.push(`
    /**
     * Delete a ${resource.tableName.slice(0, -1)}
     */
    public static async delete(id: string): Promise<void> {
        return await request<void>({
            method: 'DELETE',
            url: '/${path}/{id}',
            path: { id },
        });
    }`);
    }

    return `/**
 * ${serviceName}
 * AUTO-GENERATED - Do not edit manually
 * 
 * ${resource.description}
 */

import { request } from '../core/request.js';
import type { Database } from '../types.js';

type ${typeName}Row = Database['public']['Tables']['${resource.tableName}']['Row'];
type ${typeName}Insert = Database['public']['Tables']['${resource.tableName}']['Insert'];
type ${typeName}Update = Database['public']['Tables']['${resource.tableName}']['Update'];

export class ${serviceName} {
${methods.join('\n')}
}
`;
}

/**
 * Generate the main index file
 */
function generateIndexFile(resources) {
    const serviceImports = resources.map(r =>
        `export { ${toPascalCase(r.tableName)}Service } from './services/${toPascalCase(r.tableName)}Service.js';`
    ).join('\n');

    return `/**
 * Generated SDK Exports
 * AUTO-GENERATED - Do not edit manually
 */

// Core exports
export { OpenAPI } from './core/OpenAPI.js';
export type { OpenAPIConfig } from './core/OpenAPI.js';
export { request, ApiError } from './core/request.js';
export type { ApiRequestOptions } from './core/request.js';

// Type exports
export * from './types.js';

// Service exports
${serviceImports}
`;
}

/**
 * Main generation function
 */
function main() {
    console.log('🔧 Starting type-based SDK generation...');

    // Read source files
    console.log('📖 Reading API types...');
    const apiTypesContent = readFileSync(apiTypesPath, 'utf-8');

    console.log('📖 Reading API config...');
    const apiConfigContent = readFileSync(apiConfigPath, 'utf-8');

    // Parse resources from config
    console.log('🔍 Parsing API resources...');
    const resources = parseApiConfig(apiConfigContent);
    console.log(`✅ Found ${resources.length} API resources`);

    // Clean output directory
    if (existsSync(outputDir)) {
        console.log('🧹 Cleaning output directory...');
        rmSync(outputDir, { recursive: true });
    }

    // Create directory structure
    console.log('📁 Creating directory structure...');
    mkdirSync(join(outputDir, 'core'), { recursive: true });
    mkdirSync(join(outputDir, 'services'), { recursive: true });

    // Generate core files
    console.log('📝 Generating core files...');
    writeFileSync(join(outputDir, 'types.ts'), generateTypesFile(apiTypesContent));
    writeFileSync(join(outputDir, 'core/OpenAPI.ts'), generateOpenAPIFile());
    writeFileSync(join(outputDir, 'core/request.ts'), generateRequestFile());

    // Generate service files
    console.log('📝 Generating service files...');
    for (const resource of resources) {
        const serviceName = `${toPascalCase(resource.tableName)}Service`;
        const serviceContent = generateServiceFile(resource);
        writeFileSync(join(outputDir, `services/${serviceName}.ts`), serviceContent);
        console.log(`   ✅ ${serviceName}`);
    }

    // Generate index file
    console.log('📝 Generating index file...');
    writeFileSync(join(outputDir, 'index.ts'), generateIndexFile(resources));

    console.log('\\n✅ SDK generation complete!');
    console.log(`   📊 Generated ${resources.length} service files`);
    console.log(`   📁 Output: ${outputDir}`);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    try {
        main();
    } catch (error) {
        console.error('❌ Error generating SDK:', error);
        process.exit(1);
    }
}

export { main as generateTypesSDK };
