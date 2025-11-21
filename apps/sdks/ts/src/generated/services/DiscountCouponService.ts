/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { discount_coupons } from '../models/discount_coupons.js';
import type { discount_coupons_create } from '../models/discount_coupons_create.js';
import type { discount_coupons_update } from '../models/discount_coupons_update.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class DiscountCouponService {
    /**
     * List discount_coupons
     * Retrieve a paginated list of discount_coupons
     * @returns any Successful response
     * @throws ApiError
     */
    public static getDiscountCoupons({
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
        data?: Array<discount_coupons>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/discount_coupons',
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
     * Create discount_coupon
     * Create a new discount_coupon
     * @returns discount_coupons Successfully created
     * @throws ApiError
     */
    public static postDiscountCoupons({
        requestBody,
    }: {
        requestBody: discount_coupons_create,
    }): CancelablePromise<discount_coupons> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/discount_coupons',
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
     * Get discount_coupon
     * Retrieve a specific discount_coupon by ID
     * @returns discount_coupons Successful response
     * @throws ApiError
     */
    public static getDiscountCoupons1({
        couponId,
    }: {
        /**
         * The discount_coupon ID
         */
        couponId: string,
    }): CancelablePromise<discount_coupons> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/discount_coupons/{coupon_id}',
            path: {
                'coupon_id': couponId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Update discount_coupon
     * Update a specific discount_coupon
     * @returns discount_coupons Successfully updated
     * @throws ApiError
     */
    public static patchDiscountCoupons({
        couponId,
        requestBody,
    }: {
        /**
         * The discount_coupon ID
         */
        couponId: string,
        requestBody: discount_coupons_update,
    }): CancelablePromise<discount_coupons> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/discount_coupons/{coupon_id}',
            path: {
                'coupon_id': couponId,
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
     * Delete discount_coupon
     * Delete a specific discount_coupon
     * @returns void
     * @throws ApiError
     */
    public static deleteDiscountCoupons({
        couponId,
    }: {
        /**
         * The discount_coupon ID
         */
        couponId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/discount_coupons/{coupon_id}',
            path: {
                'coupon_id': couponId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
