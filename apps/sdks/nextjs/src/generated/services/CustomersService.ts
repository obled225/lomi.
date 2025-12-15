/**
 * CustomersService
 * AUTO-GENERATED - Do not edit manually
 * 
 * Customer management - create and manage customer profiles
 */

import { request } from '../core/request.js';
import type { Database } from '../types.js';

type CustomersRow = Database['public']['Tables']['customers']['Row'];
type CustomersInsert = Database['public']['Tables']['customers']['Insert'];
type CustomersUpdate = Database['public']['Tables']['customers']['Update'];

export class CustomersService {

    /**
     * List customers
     * Customer management - create and manage customer profiles
     */
    public static async list(options?: {
        limit?: number;
        offset?: number;
        [key: string]: any;
    }): Promise<CustomersRow[]> {
        return await request<CustomersRow[]>({
            method: 'GET',
            url: '/customers',
            query: options,
        });
    }

    /**
     * Get a single customer
     */
    public static async get(id: string): Promise<CustomersRow> {
        return await request<CustomersRow>({
            method: 'GET',
            url: '/customers/{id}',
            path: { id },
        });
    }

    /**
     * Create a new customer
     */
    public static async create(data: CustomersInsert): Promise<CustomersRow> {
        return await request<CustomersRow>({
            method: 'POST',
            url: '/customers',
            body: data,
        });
    }

    /**
     * Update an existing customer
     */
    public static async update(id: string, data: CustomersUpdate): Promise<CustomersRow> {
        return await request<CustomersRow>({
            method: 'PATCH',
            url: '/customers/{id}',
            path: { id },
            body: data,
        });
    }

    /**
     * Delete a customer
     */
    public static async delete(id: string): Promise<void> {
        return await request<void>({
            method: 'DELETE',
            url: '/customers/{id}',
            path: { id },
        });
    }
}
