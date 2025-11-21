/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customers } from '../models/customers.js';
import type { customers_create } from '../models/customers_create.js';
import type { customers_update } from '../models/customers_update.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class CustomerService {
    /**
     * List customers
     * Retrieve a paginated list of customers
     * @returns any Successful response
     * @throws ApiError
     */
    public static getCustomers({
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
        data?: Array<customers>;
        pagination?: {
            limit?: number;
            offset?: number;
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
     * Create a new customer
     * @returns customers Successfully created
     * @throws ApiError
     */
    public static postCustomers({
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
     * Get customer
     * Retrieve a specific customer by ID
     * @returns customers Successful response
     * @throws ApiError
     */
    public static getCustomers1({
        customerId,
    }: {
        /**
         * The customer ID
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
     * Update a specific customer
     * @returns customers Successfully updated
     * @throws ApiError
     */
    public static patchCustomers({
        customerId,
        requestBody,
    }: {
        /**
         * The customer ID
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
     * Delete a specific customer
     * @returns void
     * @throws ApiError
     */
    public static deleteCustomers({
        customerId,
    }: {
        /**
         * The customer ID
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
}
