#!/usr/bin/env node
/**
 * Laravel SDK Generator
 */

import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const specPath = join(__dirname, '../spec.yaml');
const outputDir = join(__dirname, '../laravel');

console.log('🔨 Generating Laravel SDK...');

try {
    execSync(
        `npx @openapitools/openapi-generator-cli generate \\
      -i ${specPath} \\
      -g php \\
      -o ${outputDir} \\
      --invoker-package Lomi\\\\Laravel \\
      --package-name lomi/sdk-laravel \\
      --git-repo-id sdk-laravel \\
      --git-user-id lomi \\
      --additional-properties=packageVersion=1.0.0 \\
      --skip-validate-spec`,
        { stdio: 'inherit' }
    );

    console.log('✅ Laravel SDK generated successfully!');
} catch (error) {
    console.error('❌ Failed to generate Laravel SDK');
    process.exit(1);
}
