/**
 * AccountsService
 * AUTO-GENERATED - Do not edit manually
 * 
 * Account balances - view organization account balances and SPI account information
 */

import { request } from '../core/request.js';
import type { Database } from '../types.js';

type AccountsRow = Database['public']['Tables']['accounts']['Row'];
type AccountsInsert = Database['public']['Tables']['accounts']['Insert'];
type AccountsUpdate = Database['public']['Tables']['accounts']['Update'];

export class AccountsService {

    /**
     * List accounts
     * Account balances - view organization account balances and SPI account information
     */
    public static async list(options?: {
        limit?: number;
        offset?: number;
        [key: string]: any;
    }): Promise<AccountsRow[]> {
        return await request<AccountsRow[]>({
            method: 'GET',
            url: '/accounts',
            query: options,
        });
    }

    /**
     * Get a single account
     */
    public static async get(id: string): Promise<AccountsRow> {
        return await request<AccountsRow>({
            method: 'GET',
            url: '/accounts/{id}',
            path: { id },
        });
    }
}
