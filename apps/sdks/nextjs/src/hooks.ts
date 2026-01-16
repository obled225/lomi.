/**
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
