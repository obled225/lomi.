/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payouts } from '../models/payouts.js';
import type { payouts_create } from '../models/payouts_create.js';
import type { payouts_update } from '../models/payouts_update.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class PayoutService {
    /**
     * List payouts
     * Retrieve a paginated list of payouts
     * @returns any Successful response
     * @throws ApiError
     */
    public static getPayouts({
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
        data?: Array<payouts>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payouts',
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
     * Create payout
     * Create a new payout
     * @returns payouts Successfully created
     * @throws ApiError
     */
    public static postPayouts({
        requestBody,
    }: {
        requestBody: payouts_create,
    }): CancelablePromise<payouts> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/payouts',
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
     * Get payout
     * Retrieve a specific payout by ID
     * @returns payouts Successful response
     * @throws ApiError
     */
    public static getPayouts1({
        payoutId,
    }: {
        /**
         * The payout ID
         */
        payoutId: string,
    }): CancelablePromise<payouts> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payouts/{payout_id}',
            path: {
                'payout_id': payoutId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Update payout
     * Update a specific payout
     * @returns payouts Successfully updated
     * @throws ApiError
     */
    public static patchPayouts({
        payoutId,
        requestBody,
    }: {
        /**
         * The payout ID
         */
        payoutId: string,
        requestBody: payouts_update,
    }): CancelablePromise<payouts> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/payouts/{payout_id}',
            path: {
                'payout_id': payoutId,
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
     * Delete payout
     * Delete a specific payout
     * @returns void
     * @throws ApiError
     */
    public static deletePayouts({
        payoutId,
    }: {
        /**
         * The payout ID
         */
        payoutId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/payouts/{payout_id}',
            path: {
                'payout_id': payoutId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
