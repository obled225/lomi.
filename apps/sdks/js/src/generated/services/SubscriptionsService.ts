/**
 * SubscriptionsService
 * AUTO-GENERATED - Do not edit manually
 * 
 * Subscription management - create and manage recurring billing
 */

import { request } from '../core/request.js';
import type { Database } from '../types.js';

type SubscriptionsRow = Database['public']['Tables']['subscriptions']['Row'];
type SubscriptionsInsert = Database['public']['Tables']['subscriptions']['Insert'];
type SubscriptionsUpdate = Database['public']['Tables']['subscriptions']['Update'];

export class SubscriptionsService {

    /**
     * List subscriptions
     * Subscription management - create and manage recurring billing
     */
    public static async list(options?: {
        limit?: number;
        offset?: number;
        [key: string]: any;
    }): Promise<SubscriptionsRow[]> {
        return await request<SubscriptionsRow[]>({
            method: 'GET',
            url: '/subscriptions',
            query: options,
        });
    }

    /**
     * Get a single subscription
     */
    public static async get(id: string): Promise<SubscriptionsRow> {
        return await request<SubscriptionsRow>({
            method: 'GET',
            url: '/subscriptions/{id}',
            path: { id },
        });
    }

    /**
     * Update an existing subscription
     */
    public static async update(id: string, data: SubscriptionsUpdate): Promise<SubscriptionsRow> {
        return await request<SubscriptionsRow>({
            method: 'PATCH',
            url: '/subscriptions/{id}',
            path: { id },
            body: data,
        });
    }
}
