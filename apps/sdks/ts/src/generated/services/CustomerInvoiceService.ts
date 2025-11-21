/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customer_invoices } from '../models/customer_invoices.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class CustomerInvoiceService {
    /**
     * List customer_invoices
     * Retrieve a paginated list of customer_invoices
     * @returns any Successful response
     * @throws ApiError
     */
    public static getCustomerInvoices({
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
        data?: Array<customer_invoices>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/customer_invoices',
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
     * Get customer_invoice
     * Retrieve a specific customer_invoice by ID
     * @returns customer_invoices Successful response
     * @throws ApiError
     */
    public static getCustomerInvoices1({
        invoiceId,
    }: {
        /**
         * The customer_invoice ID
         */
        invoiceId: string,
    }): CancelablePromise<customer_invoices> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/customer_invoices/{invoice_id}',
            path: {
                'invoice_id': invoiceId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
