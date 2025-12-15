#!/usr/bin/env node
/**
 * Next.js SDK Generator
 * 
 * Generates Next.js SDK with React hooks and server components
 */

import { execSync } from 'child_process';
import { writeFileSync, mkdirSync, existsSync, copyFileSync, readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tsDir = join(__dirname, '../ts');
const nextjsDir = join(__dirname, '../nextjs');
const nextjsSrcDir = join(nextjsDir, 'src');

console.log('🔨 Generating Next.js SDK...');

// Step 1: Make sure TypeScript SDK is generated first
console.log('📋 Ensuring TypeScript SDK is generated...');
execSync('node scripts/typescript-generate.js', {
    cwd: join(__dirname, '..'),
    stdio: 'inherit'
});

// Step 2: Copy TypeScript SDK as base
console.log('📋 Copying TypeScript SDK as base...');
if (!existsSync(nextjsSrcDir)) {
    mkdirSync(nextjsSrcDir, { recursive: true });
}

// Copy generated files
const generatedSrc = join(tsDir, 'src/generated');
const generatedDest = join(nextjsSrcDir, 'generated');
if (existsSync(generatedSrc)) {
    execSync(`cp -r ${generatedSrc} ${nextjsSrcDir}/`, { stdio: 'inherit' });
}

// Copy core SDK files
const coreFiles = ['sdk.ts', 'config.ts', 'errors.ts', 'error-handler.ts', 'index.ts'];
for (const file of coreFiles) {
    const srcFile = join(tsDir, 'src', file);
    if (existsSync(srcFile)) {
        copyFileSync(srcFile, join(nextjsSrcDir, file));
    }
}

// Step 3: Generate Next.js specific hooks
console.log('📋 Generating Next.js hooks...');
const hooksContent = `/**
 * Next.js React Hooks for lomi. SDK
 * AUTO-GENERATED - Do not edit manually
 */

'use client';

import { useState, useCallback, useEffect } from 'react';
import { LomiSDK } from './sdk.js';
import type { LomiConfig } from './config.js';

let sdkInstance: LomiSDK | null = null;

/**
 * Initialize or get the SDK instance
 */
export function useLomiSDK(config?: LomiConfig): LomiSDK | null {
    const [sdk, setSDK] = useState<LomiSDK | null>(sdkInstance);

    useEffect(() => {
        if (config && !sdkInstance) {
            sdkInstance = new LomiSDK(config);
            setSDK(sdkInstance);
        }
    }, [config]);

    return sdk;
}

/**
 * Generic hook for API requests with loading and error states
 */
export function useLomiRequest<T>(
    requestFn: () => Promise<T>,
    dependencies: any[] = []
) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const execute = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await requestFn();
            setData(result);
            return result;
        } catch (err) {
            setError(err as Error);
            throw err;
        } finally {
            setLoading(false);
        }
    }, dependencies);

    return { data, loading, error, execute };
}

/**
 * Provider component for SDK context
 */
export { LomiSDK } from './sdk.js';
export type { LomiConfig } from './config.js';
`;

writeFileSync(join(nextjsSrcDir, 'hooks.ts'), hooksContent);

// Step 4: Update index to include hooks
const indexContent = `/**
 * Next.js SDK Entry Point
 * AUTO-GENERATED - Do not edit manually
 */

// Re-export everything from base SDK
export * from './sdk.js';
export * from './config.js';
export * from './errors.js';
export * from './generated/index.js';

// Export Next.js specific hooks
export * from './hooks.js';
`;

writeFileSync(join(nextjsSrcDir, 'index.ts'), indexContent);

// Step 5: Build if possible
console.log('📋 Building Next.js SDK...');
try {
    execSync('npm install', { cwd: nextjsDir, stdio: 'inherit' });
    execSync('npm run build', { cwd: nextjsDir, stdio: 'inherit' });
} catch (error) {
    console.warn('⚠️ Build step skipped - package.json may need updating');
}

console.log('✅ Next.js SDK generated successfully!');
