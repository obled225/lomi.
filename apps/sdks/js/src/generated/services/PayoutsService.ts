/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { beneficiary_payouts } from '../models/beneficiary_payouts.js';
import type { beneficiary_payouts_create } from '../models/beneficiary_payouts_create.js';
import type { payout_methods } from '../models/payout_methods.js';
import type { payouts } from '../models/payouts.js';
import type { payouts_create } from '../models/payouts_create.js';
import type { payouts_update } from '../models/payouts_update.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class PayoutsService {
    /**
     * List payouts
     * Payout management - transfer funds to beneficiaries
     * @returns any Successful response with paginated data
     * @throws ApiError
     */
    public static listPayouts({
        limit = 20,
        offset,
        sort,
    }: {
        /**
         * Maximum number of items to return (1-100)
         */
        limit?: number,
        /**
         * Number of items to skip for pagination
         */
        offset?: number,
        /**
         * Sort order. Format: `field:direction` (e.g., `created_at:desc`)
         */
        sort?: string,
    }): CancelablePromise<{
        data?: Array<payouts>;
        pagination?: {
            /**
             * Number of items per page
             */
            limit?: number;
            /**
             * Number of items skipped
             */
            offset?: number;
            /**
             * Total number of items available
             */
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
     * Payout management - transfer funds to beneficiaries
     * @returns payouts Payout successfully created
     * @throws ApiError
     */
    public static createPayout({
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
     * Retrieve payout
     * Retrieve a specific payout by its unique identifier.
     * @returns payouts Payout retrieved successfully
     * @throws ApiError
     */
    public static retrievePayout({
        payoutId,
    }: {
        /**
         * Unique identifier for the payout
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
     * Update a specific payout. Only provided fields will be updated.
     * @returns payouts Payout successfully updated
     * @throws ApiError
     */
    public static updatePayout({
        payoutId,
        requestBody,
    }: {
        /**
         * Unique identifier for the payout
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
     * Delete a specific payout. This action cannot be undone.
     * @returns void
     * @throws ApiError
     */
    public static deletePayout({
        payoutId,
    }: {
        /**
         * Unique identifier for the payout
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
    /**
     * List payout methods
     * Payout methods - manage beneficiary payout details
     * @returns any Successful response with paginated data
     * @throws ApiError
     */
    public static listPayoutMethods({
        limit = 20,
        offset,
        sort,
    }: {
        /**
         * Maximum number of items to return (1-100)
         */
        limit?: number,
        /**
         * Number of items to skip for pagination
         */
        offset?: number,
        /**
         * Sort order. Format: `field:direction` (e.g., `created_at:desc`)
         */
        sort?: string,
    }): CancelablePromise<{
        data?: Array<payout_methods>;
        pagination?: {
            /**
             * Number of items per page
             */
            limit?: number;
            /**
             * Number of items skipped
             */
            offset?: number;
            /**
             * Total number of items available
             */
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
     * Retrieve payout method
     * Retrieve a specific payout method by its unique identifier.
     * @returns payout_methods Payout_method retrieved successfully
     * @throws ApiError
     */
    public static retrievePayoutMethod({
        payoutMethodId,
    }: {
        /**
         * Unique identifier for the payout method
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
    /**
     * List beneficiary payouts
     * Beneficiary payouts - track individual payout transfers
     * @returns any Successful response with paginated data
     * @throws ApiError
     */
    public static listBeneficiaryPayouts({
        limit = 20,
        offset,
        sort,
    }: {
        /**
         * Maximum number of items to return (1-100)
         */
        limit?: number,
        /**
         * Number of items to skip for pagination
         */
        offset?: number,
        /**
         * Sort order. Format: `field:direction` (e.g., `created_at:desc`)
         */
        sort?: string,
    }): CancelablePromise<{
        data?: Array<beneficiary_payouts>;
        pagination?: {
            /**
             * Number of items per page
             */
            limit?: number;
            /**
             * Number of items skipped
             */
            offset?: number;
            /**
             * Total number of items available
             */
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/beneficiary_payouts',
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
     * Create beneficiary payout
     * Beneficiary payouts - track individual payout transfers
     * @returns beneficiary_payouts Beneficiary_payout successfully created
     * @throws ApiError
     */
    public static createBeneficiaryPayout({
        requestBody,
    }: {
        requestBody: beneficiary_payouts_create,
    }): CancelablePromise<beneficiary_payouts> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/beneficiary_payouts',
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
     * Retrieve beneficiary payout
     * Retrieve a specific beneficiary payout by its unique identifier.
     * @returns beneficiary_payouts Beneficiary_payout retrieved successfully
     * @throws ApiError
     */
    public static retrieveBeneficiaryPayout({
        payoutId,
    }: {
        /**
         * Unique identifier for the beneficiary payout
         */
        payoutId: string,
    }): CancelablePromise<beneficiary_payouts> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/beneficiary_payouts/{payout_id}',
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
