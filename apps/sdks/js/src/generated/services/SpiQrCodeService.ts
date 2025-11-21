/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { spi_qr_codes } from '../models/spi_qr_codes.js';
import type { spi_qr_codes_create } from '../models/spi_qr_codes_create.js';
import type { spi_qr_codes_update } from '../models/spi_qr_codes_update.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import { OpenAPI } from '../core/OpenAPI.js';
import { request as __request } from '../core/request.js';
export class SpiQrCodeService {
    /**
     * List spi_qr_codes
     * Retrieve a paginated list of spi_qr_codes
     * @returns any Successful response
     * @throws ApiError
     */
    public static getSpiQrCodes({
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
        data?: Array<spi_qr_codes>;
        pagination?: {
            limit?: number;
            offset?: number;
            total?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/spi_qr_codes',
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
     * Create spi_qr_code
     * Create a new spi_qr_code
     * @returns spi_qr_codes Successfully created
     * @throws ApiError
     */
    public static postSpiQrCodes({
        requestBody,
    }: {
        requestBody: spi_qr_codes_create,
    }): CancelablePromise<spi_qr_codes> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/spi_qr_codes',
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
     * Get spi_qr_code
     * Retrieve a specific spi_qr_code by ID
     * @returns spi_qr_codes Successful response
     * @throws ApiError
     */
    public static getSpiQrCodes1({
        qrCodeId,
    }: {
        /**
         * The spi_qr_code ID
         */
        qrCodeId: string,
    }): CancelablePromise<spi_qr_codes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/spi_qr_codes/{qr_code_id}',
            path: {
                'qr_code_id': qrCodeId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Update spi_qr_code
     * Update a specific spi_qr_code
     * @returns spi_qr_codes Successfully updated
     * @throws ApiError
     */
    public static patchSpiQrCodes({
        qrCodeId,
        requestBody,
    }: {
        /**
         * The spi_qr_code ID
         */
        qrCodeId: string,
        requestBody: spi_qr_codes_update,
    }): CancelablePromise<spi_qr_codes> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/spi_qr_codes/{qr_code_id}',
            path: {
                'qr_code_id': qrCodeId,
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
     * Delete spi_qr_code
     * Delete a specific spi_qr_code
     * @returns void
     * @throws ApiError
     */
    public static deleteSpiQrCodes({
        qrCodeId,
    }: {
        /**
         * The spi_qr_code ID
         */
        qrCodeId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/spi_qr_codes/{qr_code_id}',
            path: {
                'qr_code_id': qrCodeId,
            },
            errors: {
                401: `Unauthorized - Invalid or missing API key`,
                404: `Not found - Resource does not exist`,
                500: `Internal server error`,
            },
        });
    }
}
