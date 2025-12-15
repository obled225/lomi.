/**
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
    BASE: 'https://api.lomi.africa/v1',
    VERSION: '1',
    WITH_CREDENTIALS: false,
    CREDENTIALS: 'include',
    TOKEN: undefined,
    USERNAME: undefined,
    PASSWORD: undefined,
    HEADERS: undefined,
    ENCODE_PATH: undefined,
};
