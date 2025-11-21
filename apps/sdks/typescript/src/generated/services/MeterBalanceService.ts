/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { meter_balances } from '../models/meter_balances.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class MeterBalanceService {
    /**
     * List meter_balances
     * Retrieve a paginated list of meter_balances
     * @returns any Successful response
     * @throws ApiError
     */
    public static getMeterBalances({
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
        data?: Array<meter_balances>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/meter_balances',
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
     * Get meter_balance
     * Retrieve a specific meter_balance by ID
     * @returns meter_balances Successful response
     * @throws ApiError
     */
    public static getMeterBalances1({
        balanceId,
    }: {
        /**
         * The meter_balance ID
         */
        balanceId: string,
    }): CancelablePromise<meter_balances> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/meter_balances/{balance_id}',
            path: {
                'balance_id': balanceId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
