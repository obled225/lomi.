/**
 * PaymentRequestsService
 * AUTO-GENERATED - Do not edit manually
 * 
 * Payment requests - create payment intents and track status
 */

import { request } from '../core/request.js';
import type { Database } from '../types.js';

type PaymentRequestsRow = Database['public']['Tables']['payment_requests']['Row'];
type PaymentRequestsInsert = Database['public']['Tables']['payment_requests']['Insert'];
type PaymentRequestsUpdate = Database['public']['Tables']['payment_requests']['Update'];

export class PaymentRequestsService {

    /**
     * List payment_requests
     * Payment requests - create payment intents and track status
     */
    public static async list(options?: {
        limit?: number;
        offset?: number;
        [key: string]: any;
    }): Promise<PaymentRequestsRow[]> {
        return await request<PaymentRequestsRow[]>({
            method: 'GET',
            url: '/payment-requests',
            query: options,
        });
    }

    /**
     * Get a single payment_request
     */
    public static async get(id: string): Promise<PaymentRequestsRow> {
        return await request<PaymentRequestsRow>({
            method: 'GET',
            url: '/payment-requests/{id}',
            path: { id },
        });
    }

    /**
     * Create a new payment_request
     */
    public static async create(data: PaymentRequestsInsert): Promise<PaymentRequestsRow> {
        return await request<PaymentRequestsRow>({
            method: 'POST',
            url: '/payment-requests',
            body: data,
        });
    }
}
