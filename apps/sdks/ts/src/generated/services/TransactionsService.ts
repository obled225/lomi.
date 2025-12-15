/**
 * TransactionsService
 * AUTO-GENERATED - Do not edit manually
 * 
 * Transaction history - view completed and pending transactions
 */

import { request } from '../core/request.js';
import type { Database } from '../types.js';

type TransactionsRow = Database['public']['Tables']['transactions']['Row'];
type TransactionsInsert = Database['public']['Tables']['transactions']['Insert'];
type TransactionsUpdate = Database['public']['Tables']['transactions']['Update'];

export class TransactionsService {

    /**
     * List transactions
     * Transaction history - view completed and pending transactions
     */
    public static async list(options?: {
        limit?: number;
        offset?: number;
        [key: string]: any;
    }): Promise<TransactionsRow[]> {
        return await request<TransactionsRow[]>({
            method: 'GET',
            url: '/transactions',
            query: options,
        });
    }

    /**
     * Get a single transaction
     */
    public static async get(id: string): Promise<TransactionsRow> {
        return await request<TransactionsRow>({
            method: 'GET',
            url: '/transactions/{id}',
            path: { id },
        });
    }
}
