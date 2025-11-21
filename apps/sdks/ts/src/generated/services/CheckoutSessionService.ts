/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { checkout_sessions } from '../models/checkout_sessions.js';
import type { checkout_sessions_create } from '../models/checkout_sessions_create.js';
import type { checkout_sessions_update } from '../models/checkout_sessions_update.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class CheckoutSessionService {
    /**
     * List checkout_sessions
     * Retrieve a paginated list of checkout_sessions
     * @returns any Successful response
     * @throws ApiError
     */
    public static getCheckoutSessions({
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
        data?: Array<checkout_sessions>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/checkout_sessions',
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
     * Create checkout_session
     * Create a new checkout_session
     * @returns checkout_sessions Successfully created
     * @throws ApiError
     */
    public static postCheckoutSessions({
        requestBody,
    }: {
        requestBody: checkout_sessions_create,
    }): CancelablePromise<checkout_sessions> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/checkout_sessions',
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
     * Get checkout_session
     * Retrieve a specific checkout_session by ID
     * @returns checkout_sessions Successful response
     * @throws ApiError
     */
    public static getCheckoutSessions1({
        sessionId,
    }: {
        /**
         * The checkout_session ID
         */
        sessionId: string,
    }): CancelablePromise<checkout_sessions> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/checkout_sessions/{session_id}',
            path: {
                'session_id': sessionId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Update checkout_session
     * Update a specific checkout_session
     * @returns checkout_sessions Successfully updated
     * @throws ApiError
     */
    public static patchCheckoutSessions({
        sessionId,
        requestBody,
    }: {
        /**
         * The checkout_session ID
         */
        sessionId: string,
        requestBody: checkout_sessions_update,
    }): CancelablePromise<checkout_sessions> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/checkout_sessions/{session_id}',
            path: {
                'session_id': sessionId,
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
     * Delete checkout_session
     * Delete a specific checkout_session
     * @returns void
     * @throws ApiError
     */
    public static deleteCheckoutSessions({
        sessionId,
    }: {
        /**
         * The checkout_session ID
         */
        sessionId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/checkout_sessions/{session_id}',
            path: {
                'session_id': sessionId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
