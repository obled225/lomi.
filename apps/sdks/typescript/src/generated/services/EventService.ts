/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { events } from '../models/events.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class EventService {
    /**
     * List events
     * Retrieve a paginated list of events
     * @returns any Successful response
     * @throws ApiError
     */
    public static getEvents({
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
        data?: Array<events>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events',
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
     * Get event
     * Retrieve a specific event by ID
     * @returns events Successful response
     * @throws ApiError
     */
    public static getEvents1({
        eventId,
    }: {
        /**
         * The event ID
         */
        eventId: string,
    }): CancelablePromise<events> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/events/{event_id}',
            path: {
                'event_id': eventId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
