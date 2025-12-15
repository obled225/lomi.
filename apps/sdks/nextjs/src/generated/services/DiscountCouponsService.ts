/**
 * DiscountCouponsService
 * AUTO-GENERATED - Do not edit manually
 * 
 * Discount coupons - create and manage promotional codes
 */

import { request } from '../core/request.js';
import type { Database } from '../types.js';

type DiscountCouponsRow = Database['public']['Tables']['discount_coupons']['Row'];
type DiscountCouponsInsert = Database['public']['Tables']['discount_coupons']['Insert'];
type DiscountCouponsUpdate = Database['public']['Tables']['discount_coupons']['Update'];

export class DiscountCouponsService {

    /**
     * List discount_coupons
     * Discount coupons - create and manage promotional codes
     */
    public static async list(options?: {
        limit?: number;
        offset?: number;
        [key: string]: any;
    }): Promise<DiscountCouponsRow[]> {
        return await request<DiscountCouponsRow[]>({
            method: 'GET',
            url: '/discount-coupons',
            query: options,
        });
    }

    /**
     * Get a single discount_coupon
     */
    public static async get(id: string): Promise<DiscountCouponsRow> {
        return await request<DiscountCouponsRow>({
            method: 'GET',
            url: '/discount-coupons/{id}',
            path: { id },
        });
    }

    /**
     * Create a new discount_coupon
     */
    public static async create(data: DiscountCouponsInsert): Promise<DiscountCouponsRow> {
        return await request<DiscountCouponsRow>({
            method: 'POST',
            url: '/discount-coupons',
            body: data,
        });
    }
}
