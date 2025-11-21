/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { webhook_delivery_logs } from '../models/webhook_delivery_logs.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class WebhookDeliveryLogService {
    /**
     * List webhook_delivery_logs
     * Retrieve a paginated list of webhook_delivery_logs
     * @returns any Successful response
     * @throws ApiError
     */
    public static getWebhookDeliveryLogs({
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
        data?: Array<webhook_delivery_logs>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/webhook_delivery_logs',
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
     * Get webhook_delivery_log
     * Retrieve a specific webhook_delivery_log by ID
     * @returns webhook_delivery_logs Successful response
     * @throws ApiError
     */
    public static getWebhookDeliveryLogs1({
        logId,
    }: {
        /**
         * The webhook_delivery_log ID
         */
        logId: string,
    }): CancelablePromise<webhook_delivery_logs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/webhook_delivery_logs/{log_id}',
            path: {
                'log_id': logId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
