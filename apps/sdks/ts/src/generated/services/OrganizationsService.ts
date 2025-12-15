/**
 * OrganizationsService
 * AUTO-GENERATED - Do not edit manually
 * 
 * Organization metrics - view MRR, ARR, total revenue, merchant lifetime value, and other organization metrics
 */

import { request } from '../core/request.js';
import type { Database } from '../types.js';

type OrganizationsRow = Database['public']['Tables']['organizations']['Row'];
type OrganizationsInsert = Database['public']['Tables']['organizations']['Insert'];
type OrganizationsUpdate = Database['public']['Tables']['organizations']['Update'];

export class OrganizationsService {

    /**
     * List organizations
     * Organization metrics - view MRR, ARR, total revenue, merchant lifetime value, and other organization metrics
     */
    public static async list(options?: {
        limit?: number;
        offset?: number;
        [key: string]: any;
    }): Promise<OrganizationsRow[]> {
        return await request<OrganizationsRow[]>({
            method: 'GET',
            url: '/organizations',
            query: options,
        });
    }

    /**
     * Get a single organization
     */
    public static async get(id: string): Promise<OrganizationsRow> {
        return await request<OrganizationsRow>({
            method: 'GET',
            url: '/organizations/{id}',
            path: { id },
        });
    }
}
