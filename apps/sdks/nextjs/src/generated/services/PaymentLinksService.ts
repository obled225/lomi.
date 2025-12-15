/**
 * PaymentLinksService
 * AUTO-GENERATED - Do not edit manually
 * 
 * Payment links - shareable payment URLs
 */

import { request } from '../core/request.js';
import type { Database } from '../types.js';

type PaymentLinksRow = Database['public']['Tables']['payment_links']['Row'];
type PaymentLinksInsert = Database['public']['Tables']['payment_links']['Insert'];
type PaymentLinksUpdate = Database['public']['Tables']['payment_links']['Update'];

export class PaymentLinksService {

    /**
     * List payment_links
     * Payment links - shareable payment URLs
     */
    public static async list(options?: {
        limit?: number;
        offset?: number;
        [key: string]: any;
    }): Promise<PaymentLinksRow[]> {
        return await request<PaymentLinksRow[]>({
            method: 'GET',
            url: '/payment-links',
            query: options,
        });
    }

    /**
     * Get a single payment_link
     */
    public static async get(id: string): Promise<PaymentLinksRow> {
        return await request<PaymentLinksRow>({
            method: 'GET',
            url: '/payment-links/{id}',
            path: { id },
        });
    }

    /**
     * Create a new payment_link
     */
    public static async create(data: PaymentLinksInsert): Promise<PaymentLinksRow> {
        return await request<PaymentLinksRow>({
            method: 'POST',
            url: '/payment-links',
            body: data,
        });
    }
}
