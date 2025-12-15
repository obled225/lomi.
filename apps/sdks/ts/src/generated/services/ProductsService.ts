/**
 * ProductsService
 * AUTO-GENERATED - Do not edit manually
 * 
 * Products - manage one-time and recurring products
 */

import { request } from '../core/request.js';
import type { Database } from '../types.js';

type ProductsRow = Database['public']['Tables']['products']['Row'];
type ProductsInsert = Database['public']['Tables']['products']['Insert'];
type ProductsUpdate = Database['public']['Tables']['products']['Update'];

export class ProductsService {

    /**
     * List products
     * Products - manage one-time and recurring products
     */
    public static async list(options?: {
        limit?: number;
        offset?: number;
        [key: string]: any;
    }): Promise<ProductsRow[]> {
        return await request<ProductsRow[]>({
            method: 'GET',
            url: '/products',
            query: options,
        });
    }

    /**
     * Get a single product
     */
    public static async get(id: string): Promise<ProductsRow> {
        return await request<ProductsRow>({
            method: 'GET',
            url: '/products/{id}',
            path: { id },
        });
    }

    /**
     * Create a new product
     */
    public static async create(data: ProductsInsert): Promise<ProductsRow> {
        return await request<ProductsRow>({
            method: 'POST',
            url: '/products',
            body: data,
        });
    }
}
