#!/usr/bin/env node
/**
 * Master SDK Generator
 * 
 * Generates SDKs for all languages from the OpenAPI spec
 * Run: npm run generate:all
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const log = {
    info: (msg) => console.log(`ℹ️  ${msg}`),
    success: (msg) => console.log(`✅ ${msg}`),
    error: (msg) => console.error(`❌ ${msg}`),
    warn: (msg) => console.warn(`⚠️  ${msg}`),
    step: (msg) => console.log(`\n🔨 ${msg}`),
};

function exec(command, options = {}) {
    try {
        execSync(command, {
            stdio: 'inherit',
            ...options,
        });
        return true;
    } catch (error) {
        log.error(`Failed to execute: ${command}`);
        return false;
    }
}

const SDKS = [
    {
        name: 'TypeScript',
        dir: 'typescript',
        command: 'cd typescript && npm run generate && npm run build',
    },
    {
        name: 'JavaScript',
        dir: 'javascript',
        command: 'cd javascript && npm run generate && npm run build',
    },
    {
        name: 'Python',
        dir: 'python',
        command: 'cd python && pip install -e .',
    },
    {
        name: 'Go',
        dir: 'go',
        command: 'cd go && go mod tidy',
    },
    {
        name: 'PHP',
        dir: 'php',
        command: 'cd php && composer install',
    },
];

async function generateAll() {
    console.log('🚀 lomi. Multi-Language SDK Generation\n');
    console.log('='.repeat(60));

    const results = {};
    let successCount = 0;
    let failureCount = 0;

    for (const sdk of SDKS) {
        log.step(`Generating ${sdk.name} SDK...`);

        const success = exec(sdk.command, {
            cwd: path.join(__dirname, '..'),
        });

        results[sdk.name] = success;
        if (success) {
            successCount++;
            log.success(`${sdk.name} SDK generated successfully!`);
        } else {
            failureCount++;
            log.error(`Failed to generate ${sdk.name} SDK`);
        }
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('\n📊 Generation Summary:\n');

    Object.entries(results).forEach(([name, success]) => {
        const status = success ? '✅' : '❌';
        console.log(`${status} ${name.padEnd(15)} ${success ? 'SUCCESS' : 'FAILED'}`);
    });

    console.log(`\n✅ ${successCount} SDKs generated successfully`);
    if (failureCount > 0) {
        console.log(`❌ ${failureCount} SDKs failed to generate`);
    }

    console.log('\n💡 Next steps:');
    console.log('   1. Review generated SDKs in apps/sdks/');
    console.log('   2. Test each SDK');
    console.log('   3. Publish to package managers\n');

    return failureCount === 0;
}

if (import.meta.url === `file://${process.argv[1]}`) {
    generateAll()
        .then(success => process.exit(success ? 0 : 1))
        .catch(error => {
            console.error(error);
            process.exit(1);
        });
}

export { generateAll };
