/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { payment_links } from '../models/payment_links.js';
import type { payment_links_create } from '../models/payment_links_create.js';
import type { payment_links_update } from '../models/payment_links_update.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class PaymentLinkService {
    /**
     * List payment_links
     * Retrieve a paginated list of payment_links
     * @returns any Successful response
     * @throws ApiError
     */
    public static getPaymentLinks({
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
        data?: Array<payment_links>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payment_links',
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
     * Create payment_link
     * Create a new payment_link
     * @returns payment_links Successfully created
     * @throws ApiError
     */
    public static postPaymentLinks({
        requestBody,
    }: {
        requestBody: payment_links_create,
    }): CancelablePromise<payment_links> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/payment_links',
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
     * Get payment_link
     * Retrieve a specific payment_link by ID
     * @returns payment_links Successful response
     * @throws ApiError
     */
    public static getPaymentLinks1({
        linkId,
    }: {
        /**
         * The payment_link ID
         */
        linkId: string,
    }): CancelablePromise<payment_links> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payment_links/{link_id}',
            path: {
                'link_id': linkId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Update payment_link
     * Update a specific payment_link
     * @returns payment_links Successfully updated
     * @throws ApiError
     */
    public static patchPaymentLinks({
        linkId,
        requestBody,
    }: {
        /**
         * The payment_link ID
         */
        linkId: string,
        requestBody: payment_links_update,
    }): CancelablePromise<payment_links> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/payment_links/{link_id}',
            path: {
                'link_id': linkId,
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
     * Delete payment_link
     * Delete a specific payment_link
     * @returns void
     * @throws ApiError
     */
    public static deletePaymentLinks({
        linkId,
    }: {
        /**
         * The payment_link ID
         */
        linkId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/payment_links/{link_id}',
            path: {
                'link_id': linkId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
