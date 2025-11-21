/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { products } from '../models/products.js';
import type { products_create } from '../models/products_create.js';
import type { products_update } from '../models/products_update.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class ProductService {
    /**
     * List products
     * Retrieve a paginated list of products
     * @returns any Successful response
     * @throws ApiError
     */
    public static getProducts({
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
        data?: Array<products>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products',
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
     * Create product
     * Create a new product
     * @returns products Successfully created
     * @throws ApiError
     */
    public static postProducts({
        requestBody,
    }: {
        requestBody: products_create,
    }): CancelablePromise<products> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products',
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
     * Get product
     * Retrieve a specific product by ID
     * @returns products Successful response
     * @throws ApiError
     */
    public static getProducts1({
        productId,
    }: {
        /**
         * The product ID
         */
        productId: string,
    }): CancelablePromise<products> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/{product_id}',
            path: {
                'product_id': productId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Update product
     * Update a specific product
     * @returns products Successfully updated
     * @throws ApiError
     */
    public static patchProducts({
        productId,
        requestBody,
    }: {
        /**
         * The product ID
         */
        productId: string,
        requestBody: products_update,
    }): CancelablePromise<products> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/products/{product_id}',
            path: {
                'product_id': productId,
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
     * Delete product
     * Delete a specific product
     * @returns void
     * @throws ApiError
     */
    public static deleteProducts({
        productId,
    }: {
        /**
         * The product ID
         */
        productId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/products/{product_id}',
            path: {
                'product_id': productId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
