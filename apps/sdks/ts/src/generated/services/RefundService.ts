/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { refunds } from '../models/refunds.js';
import type { refunds_create } from '../models/refunds_create.js';
import type { refunds_update } from '../models/refunds_update.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class RefundService {
    /**
     * List refunds
     * Retrieve a paginated list of refunds
     * @returns any Successful response
     * @throws ApiError
     */
    public static getRefunds({
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
        data?: Array<refunds>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/refunds',
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
     * Create refund
     * Create a new refund
     * @returns refunds Successfully created
     * @throws ApiError
     */
    public static postRefunds({
        requestBody,
    }: {
        requestBody: refunds_create,
    }): CancelablePromise<refunds> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/refunds',
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
     * Get refund
     * Retrieve a specific refund by ID
     * @returns refunds Successful response
     * @throws ApiError
     */
    public static getRefunds1({
        refundId,
    }: {
        /**
         * The refund ID
         */
        refundId: string,
    }): CancelablePromise<refunds> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/refunds/{refund_id}',
            path: {
                'refund_id': refundId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Update refund
     * Update a specific refund
     * @returns refunds Successfully updated
     * @throws ApiError
     */
    public static patchRefunds({
        refundId,
        requestBody,
    }: {
        /**
         * The refund ID
         */
        refundId: string,
        requestBody: refunds_update,
    }): CancelablePromise<refunds> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/refunds/{refund_id}',
            path: {
                'refund_id': refundId,
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
     * Delete refund
     * Delete a specific refund
     * @returns void
     * @throws ApiError
     */
    public static deleteRefunds({
        refundId,
    }: {
        /**
         * The refund ID
         */
        refundId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/refunds/{refund_id}',
            path: {
                'refund_id': refundId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
