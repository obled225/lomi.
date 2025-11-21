/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { prices } from '../models/prices.js';
import type { prices_create } from '../models/prices_create.js';
import type { prices_update } from '../models/prices_update.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class PriceService {
    /**
     * List prices
     * Retrieve a paginated list of prices
     * @returns any Successful response
     * @throws ApiError
     */
    public static getPrices({
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
        data?: Array<prices>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/prices',
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
     * Create price
     * Create a new price
     * @returns prices Successfully created
     * @throws ApiError
     */
    public static postPrices({
        requestBody,
    }: {
        requestBody: prices_create,
    }): CancelablePromise<prices> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/prices',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request - Invalid input`,
                401: `Unauthorized - Invalid or missing API key`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Get price
     * Retrieve a specific price by ID
     * @returns prices Successful response
     * @throws ApiError
     */
    public static getPrices1({
        priceId,
    }: {
        /**
         * The price ID
         */
        priceId: string,
    }): CancelablePromise<prices> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/prices/{price_id}',
            path: {
                'price_id': priceId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Update price
     * Update a specific price
     * @returns prices Successfully updated
     * @throws ApiError
     */
    public static patchPrices({
        priceId,
        requestBody,
    }: {
        /**
         * The price ID
         */
        priceId: string,
        requestBody: prices_update,
    }): CancelablePromise<prices> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/prices/{price_id}',
            path: {
                'price_id': priceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request - Invalid input`,
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Delete price
     * Delete a specific price
     * @returns void
     * @throws ApiError
     */
    public static deletePrices({
        priceId,
    }: {
        /**
         * The price ID
         */
        priceId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/prices/{price_id}',
            path: {
                'price_id': priceId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
