/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { spi_account_aliases } from '../models/spi_account_aliases.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class SpiAccountAliaseService {
    /**
     * List spi_account_aliases
     * Retrieve a paginated list of spi_account_aliases
     * @returns any Successful response
     * @throws ApiError
     */
    public static getSpiAccountAliases({
        limit = 20,
        offset,
        sort,
    }: {
        /**
         * Maximum number of items to return
         */
        limit?: number,
        /**
         * Number of items to skip
         */
        offset?: number,
        /**
         * Sort order (e.g., created_at:desc)
         */
        sort?: string,
    }): CancelablePromise<{
        data?: Array<spi_account_aliases>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/spi_account_aliases',
            query: {
                'limit': limit,
                'offset': offset,
                'sort': sort,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Get spi_account_aliase
     * Retrieve a specific spi_account_aliase by ID
     * @returns spi_account_aliases Successful response
     * @throws ApiError
     */
    public static getSpiAccountAliases1({
        aliasId,
    }: {
        /**
         * The spi_account_aliase ID
         */
        aliasId: string,
    }): CancelablePromise<spi_account_aliases> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/spi_account_aliases/{alias_id}',
            path: {
                'alias_id': aliasId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
