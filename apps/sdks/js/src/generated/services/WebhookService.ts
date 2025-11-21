/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { webhooks } from '../models/webhooks.js';
import type { webhooks_create } from '../models/webhooks_create.js';
import type { webhooks_update } from '../models/webhooks_update.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class WebhookService {
    /**
     * List webhooks
     * Retrieve a paginated list of webhooks
     * @returns any Successful response
     * @throws ApiError
     */
    public static getWebhooks({
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
        data?: Array<webhooks>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/webhooks',
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
     * Create webhook
     * Create a new webhook
     * @returns webhooks Successfully created
     * @throws ApiError
     */
    public static postWebhooks({
        requestBody,
    }: {
        requestBody: webhooks_create,
    }): CancelablePromise<webhooks> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/webhooks',
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
     * Get webhook
     * Retrieve a specific webhook by ID
     * @returns webhooks Successful response
     * @throws ApiError
     */
    public static getWebhooks1({
        webhookId,
    }: {
        /**
         * The webhook ID
         */
        webhookId: string,
    }): CancelablePromise<webhooks> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/webhooks/{webhook_id}',
            path: {
                'webhook_id': webhookId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Update webhook
     * Update a specific webhook
     * @returns webhooks Successfully updated
     * @throws ApiError
     */
    public static patchWebhooks({
        webhookId,
        requestBody,
    }: {
        /**
         * The webhook ID
         */
        webhookId: string,
        requestBody: webhooks_update,
    }): CancelablePromise<webhooks> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/webhooks/{webhook_id}',
            path: {
                'webhook_id': webhookId,
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
     * Delete webhook
     * Delete a specific webhook
     * @returns void
     * @throws ApiError
     */
    public static deleteWebhooks({
        webhookId,
    }: {
        /**
         * The webhook ID
         */
        webhookId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/webhooks/{webhook_id}',
            path: {
                'webhook_id': webhookId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
