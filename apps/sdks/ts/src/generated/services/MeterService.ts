/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { meters } from '../models/meters.js';
import type { meters_create } from '../models/meters_create.js';
import type { meters_update } from '../models/meters_update.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class MeterService {
    /**
     * List meters
     * Retrieve a paginated list of meters
     * @returns any Successful response
     * @throws ApiError
     */
    public static getMeters({
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
        data?: Array<meters>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/meters',
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
     * Create meter
     * Create a new meter
     * @returns meters Successfully created
     * @throws ApiError
     */
    public static postMeters({
        requestBody,
    }: {
        requestBody: meters_create,
    }): CancelablePromise<meters> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/meters',
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
     * Get meter
     * Retrieve a specific meter by ID
     * @returns meters Successful response
     * @throws ApiError
     */
    public static getMeters1({
        meterId,
    }: {
        /**
         * The meter ID
         */
        meterId: string,
    }): CancelablePromise<meters> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/meters/{meter_id}',
            path: {
                'meter_id': meterId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Update meter
     * Update a specific meter
     * @returns meters Successfully updated
     * @throws ApiError
     */
    public static patchMeters({
        meterId,
        requestBody,
    }: {
        /**
         * The meter ID
         */
        meterId: string,
        requestBody: meters_update,
    }): CancelablePromise<meters> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/meters/{meter_id}',
            path: {
                'meter_id': meterId,
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
     * Delete meter
     * Delete a specific meter
     * @returns void
     * @throws ApiError
     */
    public static deleteMeters({
        meterId,
    }: {
        /**
         * The meter ID
         */
        meterId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/meters/{meter_id}',
            path: {
                'meter_id': meterId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
