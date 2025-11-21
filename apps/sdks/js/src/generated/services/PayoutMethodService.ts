/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payout_methods } from '../models/payout_methods.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class PayoutMethodService {
    /**
     * List payout_methods
     * Retrieve a paginated list of payout_methods
     * @returns any Successful response
     * @throws ApiError
     */
    public static getPayoutMethods({
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
        data?: Array<payout_methods>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payout_methods',
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
     * Get payout_method
     * Retrieve a specific payout_method by ID
     * @returns payout_methods Successful response
     * @throws ApiError
     */
    public static getPayoutMethods1({
        payoutMethodId,
    }: {
        /**
         * The payout_method ID
         */
        payoutMethodId: string,
    }): CancelablePromise<payout_methods> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payout_methods/{payout_method_id}',
            path: {
                'payout_method_id': payoutMethodId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
