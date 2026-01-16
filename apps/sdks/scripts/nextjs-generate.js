#!/usr/bin/env node
/**
 * Next.js SDK Generator
 * 
 * Generates Next.js SDK wrapper around @lomi./sdk
 */

import { execSync } from 'child_process';
import { writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextjsDir = join(__dirname, '../nextjs');
const nextjsSrcDir = join(nextjsDir, 'src');

console.log('🔨 Generating Next.js SDK...');

// Step 1: Make sure TypeScript SDK is generated first
console.log('📋 Ensuring TypeScript SDK is generated...');
execSync('node scripts/typescript-generate.js', {
    cwd: join(__dirname, '..'),
    stdio: 'inherit'
});

// Step 2: Clean and prepare src directory
console.log('🧹 Cleaning Next.js SDK source...');
if (existsSync(nextjsSrcDir)) {
    rmSync(nextjsSrcDir, { recursive: true });
}
mkdirSync(nextjsSrcDir, { recursive: true });

// Step 3: Generate Next.js specific hooks
console.log('📋 Generating Next.js hooks...');
const hooksContent = `/**
 * Next.js React Hooks for lomi. SDK
 * AUTO-GENERATED - Do not edit manually
 */

'use client';

import { useState, useCallback, useEffect } from 'react';
import { LomiSDK, type LomiConfig } from '@lomi./sdk';

// Singleton instance for client-side usage
let sdkInstance: LomiSDK | null = null;

/**
 * Initialize or get the SDK instance
 * 
 * Usage:
 * const sdk = useLomiSDK({ apiKey: '...' });
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
`;

writeFileSync(join(nextjsSrcDir, 'hooks.ts'), hooksContent);

// Step 4: Generate index.ts
// Re-export everything from @lomi./sdk + hooks
const indexContent = `/**
 * Next.js SDK Entry Point
 * AUTO-GENERATED - Do not edit manually
 */

// Re-export everything from base SDK
export * from '@lomi./sdk';

// Export Next.js specific hooks
export * from './hooks.js';
`;

writeFileSync(join(nextjsSrcDir, 'index.ts'), indexContent);

// Step 5: Build
console.log('📋 Building Next.js SDK...');
try {
    execSync('npm install', { cwd: nextjsDir, stdio: 'inherit' });
    execSync('npm run build', { cwd: nextjsDir, stdio: 'inherit' });
} catch (error) {
    console.warn('⚠️ Build step warning (check if package.json dependencies are correct)');
}

console.log('✅ Next.js SDK generated successfully!');
