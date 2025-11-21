/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { transactions } from '../models/transactions.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class TransactionService {
    /**
     * List transactions
     * Retrieve a paginated list of transactions
     * @returns any Successful response
     * @throws ApiError
     */
    public static getTransactions({
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
        data?: Array<transactions>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transactions',
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
     * Get transaction
     * Retrieve a specific transaction by ID
     * @returns transactions Successful response
     * @throws ApiError
     */
    public static getTransactions1({
        transactionId,
    }: {
        /**
         * The transaction ID
         */
        transactionId: string,
    }): CancelablePromise<transactions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transactions/{transaction_id}',
            path: {
                'transaction_id': transactionId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
