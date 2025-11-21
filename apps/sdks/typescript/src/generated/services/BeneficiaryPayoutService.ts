/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { beneficiary_payouts } from '../models/beneficiary_payouts.js';
import type { beneficiary_payouts_create } from '../models/beneficiary_payouts_create.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class BeneficiaryPayoutService {
    /**
     * List beneficiary_payouts
     * Retrieve a paginated list of beneficiary_payouts
     * @returns any Successful response
     * @throws ApiError
     */
    public static getBeneficiaryPayouts({
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
        data?: Array<beneficiary_payouts>;
        pagination?: {
            limit?: number;
            offset?: number;
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
     * Create beneficiary_payout
     * Create a new beneficiary_payout
     * @returns beneficiary_payouts Successfully created
     * @throws ApiError
     */
    public static postBeneficiaryPayouts({
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
     * Get beneficiary_payout
     * Retrieve a specific beneficiary_payout by ID
     * @returns beneficiary_payouts Successful response
     * @throws ApiError
     */
    public static getBeneficiaryPayouts1({
        payoutId,
    }: {
        /**
         * The beneficiary_payout ID
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
