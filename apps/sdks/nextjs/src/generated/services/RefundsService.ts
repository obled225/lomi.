/**
 * RefundsService
 * AUTO-GENERATED - Do not edit manually
 * 
 * Refund management - process and track refunds
 */

import { request } from '../core/request.js';
import type { Database } from '../types.js';

type RefundsRow = Database['public']['Tables']['refunds']['Row'];
type RefundsInsert = Database['public']['Tables']['refunds']['Insert'];
type RefundsUpdate = Database['public']['Tables']['refunds']['Update'];

export class RefundsService {

    /**
     * List refunds
     * Refund management - process and track refunds
     */
    public static async list(options?: {
        limit?: number;
        offset?: number;
        [key: string]: any;
    }): Promise<RefundsRow[]> {
        return await request<RefundsRow[]>({
            method: 'GET',
            url: '/refunds',
            query: options,
        });
    }

    /**
     * Get a single refund
     */
    public static async get(id: string): Promise<RefundsRow> {
        return await request<RefundsRow>({
            method: 'GET',
            url: '/refunds/{id}',
            path: { id },
        });
    }

    /**
     * Create a new refund
     */
    public static async create(data: RefundsInsert): Promise<RefundsRow> {
        return await request<RefundsRow>({
            method: 'POST',
            url: '/refunds',
            body: data,
        });
    }
}
