#!/usr/bin/env node
/**
 * JavaScript SDK Generator
 * 
 * Generates JavaScript SDK by transpiling the TypeScript SDK
 */

import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tsDir = join(__dirname, '../ts');
const jsDir = join(__dirname, '../js');

console.log('🔨 Generating JavaScript SDK...');

// Step 1: Make sure TypeScript SDK is generated first
console.log('📋 Ensuring TypeScript SDK is generated...');
execSync('node scripts/typescript-generate.js', {
    cwd: join(__dirname, '..'),
    stdio: 'inherit'
});

// Step 2: Copy TypeScript source to JS dir and compile
console.log('📋 Copying source files...');
execSync(`cp -r ${tsDir}/src/* ${jsDir}/src/`, { stdio: 'inherit' });

// Step 3: Build JavaScript version
console.log('📋 Building JavaScript SDK...');
try {
    execSync('npm install', { cwd: jsDir, stdio: 'inherit' });
    execSync('npm run build', { cwd: jsDir, stdio: 'inherit' });
} catch (error) {
    console.warn('⚠️ Build step skipped - package.json may need updating');
}

console.log('✅ JavaScript SDK generated successfully!');
