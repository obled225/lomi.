/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customers } from '../models/customers.js';
import type { customers_create } from '../models/customers_create.js';
import type { customers_update } from '../models/customers_update.js';
import type { payment_requests } from '../models/payment_requests.js';
import type { payment_requests_create } from '../models/payment_requests_create.js';
import type { payment_requests_update } from '../models/payment_requests_update.js';
import type { refunds } from '../models/refunds.js';
import type { refunds_create } from '../models/refunds_create.js';
import type { refunds_update } from '../models/refunds_update.js';
import type { transactions } from '../models/transactions.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class CoreService {
    /**
     * List customers
     * Customer management - create and manage customer profiles
     * @returns any Successful response with paginated data
     * @throws ApiError
     */
    public static listCustomers({
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
        data?: Array<customers>;
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
            url: '/customers',
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
     * Create customer
     * Customer management - create and manage customer profiles
     * @returns customers Customer successfully created
     * @throws ApiError
     */
    public static createCustomer({
        requestBody,
    }: {
        requestBody: customers_create,
    }): CancelablePromise<customers> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/customers',
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
     * Retrieve customer
     * Retrieve a specific customer by its unique identifier.
     * @returns customers Customer retrieved successfully
     * @throws ApiError
     */
    public static retrieveCustomer({
        customerId,
    }: {
        /**
         * Unique identifier for the customer
         */
        customerId: string,
    }): CancelablePromise<customers> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/customers/{customer_id}',
            path: {
                'customer_id': customerId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Update customer
     * Update a specific customer. Only provided fields will be updated.
     * @returns customers Customer successfully updated
     * @throws ApiError
     */
    public static updateCustomer({
        customerId,
        requestBody,
    }: {
        /**
         * Unique identifier for the customer
         */
        customerId: string,
        requestBody: customers_update,
    }): CancelablePromise<customers> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/customers/{customer_id}',
            path: {
                'customer_id': customerId,
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
     * Delete customer
     * Delete a specific customer. This action cannot be undone.
     * @returns void
     * @throws ApiError
     */
    public static deleteCustomer({
        customerId,
    }: {
        /**
         * Unique identifier for the customer
         */
        customerId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/customers/{customer_id}',
            path: {
                'customer_id': customerId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * List payment requests
     * Payment requests - create payment intents and track status
     * @returns any Successful response with paginated data
     * @throws ApiError
     */
    public static listPaymentRequests({
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
        data?: Array<payment_requests>;
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
            url: '/payment_requests',
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
     * Create payment request
     * Payment requests - create payment intents and track status
     * @returns payment_requests Payment_request successfully created
     * @throws ApiError
     */
    public static createPaymentRequest({
        requestBody,
    }: {
        requestBody: payment_requests_create,
    }): CancelablePromise<payment_requests> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/payment_requests',
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
     * Retrieve payment request
     * Retrieve a specific payment request by its unique identifier.
     * @returns payment_requests Payment_request retrieved successfully
     * @throws ApiError
     */
    public static retrievePaymentRequest({
        requestId,
    }: {
        /**
         * Unique identifier for the payment request
         */
        requestId: string,
    }): CancelablePromise<payment_requests> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payment_requests/{request_id}',
            path: {
                'request_id': requestId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Update payment request
     * Update a specific payment request. Only provided fields will be updated.
     * @returns payment_requests Payment_request successfully updated
     * @throws ApiError
     */
    public static updatePaymentRequest({
        requestId,
        requestBody,
    }: {
        /**
         * Unique identifier for the payment request
         */
        requestId: string,
        requestBody: payment_requests_update,
    }): CancelablePromise<payment_requests> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/payment_requests/{request_id}',
            path: {
                'request_id': requestId,
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
     * Delete payment request
     * Delete a specific payment request. This action cannot be undone.
     * @returns void
     * @throws ApiError
     */
    public static deletePaymentRequest({
        requestId,
    }: {
        /**
         * Unique identifier for the payment request
         */
        requestId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/payment_requests/{request_id}',
            path: {
                'request_id': requestId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * List transactions
     * Transaction history - view completed and pending transactions
     * @returns any Successful response with paginated data
     * @throws ApiError
     */
    public static listTransactions({
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
        data?: Array<transactions>;
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
     * Retrieve transaction
     * Retrieve a specific transaction by its unique identifier.
     * @returns transactions Transaction retrieved successfully
     * @throws ApiError
     */
    public static retrieveTransaction({
        transactionId,
    }: {
        /**
         * Unique identifier for the transaction
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
    /**
     * List refunds
     * Refund management - process and track refunds
     * @returns any Successful response with paginated data
     * @throws ApiError
     */
    public static listRefunds({
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
        data?: Array<refunds>;
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
     * Refund management - process and track refunds
     * @returns refunds Refund successfully created
     * @throws ApiError
     */
    public static createRefund({
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
     * Retrieve refund
     * Retrieve a specific refund by its unique identifier.
     * @returns refunds Refund retrieved successfully
     * @throws ApiError
     */
    public static retrieveRefund({
        refundId,
    }: {
        /**
         * Unique identifier for the refund
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
     * Update a specific refund. Only provided fields will be updated.
     * @returns refunds Refund successfully updated
     * @throws ApiError
     */
    public static updateRefund({
        refundId,
        requestBody,
    }: {
        /**
         * Unique identifier for the refund
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
     * Delete a specific refund. This action cannot be undone.
     * @returns void
     * @throws ApiError
     */
    public static deleteRefund({
        refundId,
    }: {
        /**
         * Unique identifier for the refund
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
