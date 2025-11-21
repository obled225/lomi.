#!/usr/bin/env node
/**
 * Post-generation script
 *
 * This script runs after OpenAPI code generation to set up the SDK properly.
 * It updates the OpenAPI base URL and configuration.
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = join(__dirname, '..');
const generatedOpenAPIPath = join(rootDir, 'src/generated/core/OpenAPI.ts');
const generatedDir = join(rootDir, 'src/generated');

/**
 * Fix ES module imports by adding .js extensions
 */
function fixImports(dir) {
    const files = readdirSync(dir);

    for (const file of files) {
        const filePath = join(dir, file);
        const stat = statSync(filePath);

        if (stat.isDirectory()) {
            fixImports(filePath);
        } else if (file.endsWith('.ts')) {
            let content = readFileSync(filePath, 'utf-8');
            let modified = false;

            // Fix relative imports: add .js extension
            // Matches: from './something' or from '../something'
            const importRegex = /(from\s+['"])(\.[^'"]+)(['"])/g;
            content = content.replace(importRegex, (match, prefix, path, suffix) => {
                // Don't add .js if it already has an extension
                if (!path.endsWith('.js') && !path.includes('.json')) {
                    modified = true;
                    return `${prefix}${path}.js${suffix}`;
                }
                return match;
            });

            if (modified) {
                writeFileSync(filePath, content, 'utf-8');
            }
        }
    }
}

try {
    if (!existsSync(generatedOpenAPIPath)) {
        console.log('⚠️  Generated OpenAPI.ts not found yet, skipping post-processing');
        process.exit(0);
    }

    console.log('🔧 Updating OpenAPI configuration...');

    let content = readFileSync(generatedOpenAPIPath, 'utf-8');

    // Update the default BASE URL to match lomi. API
    content = content.replace(/BASE: '.*'/, "BASE: 'https://api.lomi.africa/v1'");

    // Update VERSION if present
    content = content.replace(/VERSION: '.*'/, "VERSION: '1.0.0'");

    writeFileSync(generatedOpenAPIPath, content, 'utf-8');
    console.log('✅ Updated OpenAPI configuration');

    console.log('🔧 Fixing ES module imports...');
    fixImports(generatedDir);
    console.log('✅ Fixed ES module imports');

} catch (error) {
    console.warn('⚠️  Could not update OpenAPI.ts:', error.message);
    console.log("   This is okay if the file doesn't exist yet.");
}

console.log('✅ Post-generation setup complete');
