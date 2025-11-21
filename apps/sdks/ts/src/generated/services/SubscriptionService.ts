/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { subscriptions } from '../models/subscriptions.js';
import type { subscriptions_create } from '../models/subscriptions_create.js';
import type { subscriptions_update } from '../models/subscriptions_update.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class SubscriptionService {
    /**
     * List subscriptions
     * Retrieve a paginated list of subscriptions
     * @returns any Successful response
     * @throws ApiError
     */
    public static getSubscriptions({
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
        data?: Array<subscriptions>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions',
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
     * Create subscription
     * Create a new subscription
     * @returns subscriptions Successfully created
     * @throws ApiError
     */
    public static postSubscriptions({
        requestBody,
    }: {
        requestBody: subscriptions_create,
    }): CancelablePromise<subscriptions> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscriptions',
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
     * Get subscription
     * Retrieve a specific subscription by ID
     * @returns subscriptions Successful response
     * @throws ApiError
     */
    public static getSubscriptions1({
        subscriptionId,
    }: {
        /**
         * The subscription ID
         */
        subscriptionId: string,
    }): CancelablePromise<subscriptions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscriptions/{subscription_id}',
            path: {
                'subscription_id': subscriptionId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Update subscription
     * Update a specific subscription
     * @returns subscriptions Successfully updated
     * @throws ApiError
     */
    public static patchSubscriptions({
        subscriptionId,
        requestBody,
    }: {
        /**
         * The subscription ID
         */
        subscriptionId: string,
        requestBody: subscriptions_update,
    }): CancelablePromise<subscriptions> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/subscriptions/{subscription_id}',
            path: {
                'subscription_id': subscriptionId,
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
     * Delete subscription
     * Delete a specific subscription
     * @returns void
     * @throws ApiError
     */
    public static deleteSubscriptions({
        subscriptionId,
    }: {
        /**
         * The subscription ID
         */
        subscriptionId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscriptions/{subscription_id}',
            path: {
                'subscription_id': subscriptionId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
