/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { installment_payments } from '../models/installment_payments.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class InstallmentPaymentService {
    /**
     * List installment_payments
     * Retrieve a paginated list of installment_payments
     * @returns any Successful response
     * @throws ApiError
     */
    public static getInstallmentPayments({
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
        data?: Array<installment_payments>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/installment_payments',
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
     * Get installment_payment
     * Retrieve a specific installment_payment by ID
     * @returns installment_payments Successful response
     * @throws ApiError
     */
    public static getInstallmentPayments1({
        paymentId,
    }: {
        /**
         * The installment_payment ID
         */
        paymentId: string,
    }): CancelablePromise<installment_payments> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/installment_payments/{payment_id}',
            path: {
                'payment_id': paymentId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
