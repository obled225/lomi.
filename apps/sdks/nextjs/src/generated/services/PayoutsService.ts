/**
 * PayoutsService
 * AUTO-GENERATED - Do not edit manually
 * 
 * Payout management - transfer funds to beneficiaries
 */

import { request } from '../core/request.js';
import type { Database } from '../types.js';

type PayoutsRow = Database['public']['Tables']['payouts']['Row'];
type PayoutsInsert = Database['public']['Tables']['payouts']['Insert'];
type PayoutsUpdate = Database['public']['Tables']['payouts']['Update'];

export class PayoutsService {

    /**
     * List payouts
     * Payout management - transfer funds to beneficiaries
     */
    public static async list(options?: {
        limit?: number;
        offset?: number;
        [key: string]: any;
    }): Promise<PayoutsRow[]> {
        return await request<PayoutsRow[]>({
            method: 'GET',
            url: '/payouts',
            query: options,
        });
    }

    /**
     * Get a single payout
     */
    public static async get(id: string): Promise<PayoutsRow> {
        return await request<PayoutsRow>({
            method: 'GET',
            url: '/payouts/{id}',
            path: { id },
        });
    }

    /**
     * Create a new payout
     */
    public static async create(data: PayoutsInsert): Promise<PayoutsRow> {
        return await request<PayoutsRow>({
            method: 'POST',
            url: '/payouts',
            body: data,
        });
    }
}
