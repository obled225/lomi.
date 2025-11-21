/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_requests } from '../models/payment_requests.js';
import type { payment_requests_create } from '../models/payment_requests_create.js';
import type { payment_requests_update } from '../models/payment_requests_update.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class PaymentRequestService {
    /**
     * List payment_requests
     * Retrieve a paginated list of payment_requests
     * @returns any Successful response
     * @throws ApiError
     */
    public static getPaymentRequests({
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
        data?: Array<payment_requests>;
        pagination?: {
            limit?: number;
            offset?: number;
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
     * Create payment_request
     * Create a new payment_request
     * @returns payment_requests Successfully created
     * @throws ApiError
     */
    public static postPaymentRequests({
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
     * Get payment_request
     * Retrieve a specific payment_request by ID
     * @returns payment_requests Successful response
     * @throws ApiError
     */
    public static getPaymentRequests1({
        requestId,
    }: {
        /**
         * The payment_request ID
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
     * Update payment_request
     * Update a specific payment_request
     * @returns payment_requests Successfully updated
     * @throws ApiError
     */
    public static patchPaymentRequests({
        requestId,
        requestBody,
    }: {
        /**
         * The payment_request ID
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
     * Delete payment_request
     * Delete a specific payment_request
     * @returns void
     * @throws ApiError
     */
    public static deletePaymentRequests({
        requestId,
    }: {
        /**
         * The payment_request ID
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
}
