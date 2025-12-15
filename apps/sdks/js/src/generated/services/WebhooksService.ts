/**
 * WebhooksService
 * AUTO-GENERATED - Do not edit manually
 * 
 * Webhook configuration - receive real-time event notifications
 */

import { request } from '../core/request.js';
import type { Database } from '../types.js';

type WebhooksRow = Database['public']['Tables']['webhooks']['Row'];
type WebhooksInsert = Database['public']['Tables']['webhooks']['Insert'];
type WebhooksUpdate = Database['public']['Tables']['webhooks']['Update'];

export class WebhooksService {

    /**
     * List webhooks
     * Webhook configuration - receive real-time event notifications
     */
    public static async list(options?: {
        limit?: number;
        offset?: number;
        [key: string]: any;
    }): Promise<WebhooksRow[]> {
        return await request<WebhooksRow[]>({
            method: 'GET',
            url: '/webhooks',
            query: options,
        });
    }

    /**
     * Get a single webhook
     */
    public static async get(id: string): Promise<WebhooksRow> {
        return await request<WebhooksRow>({
            method: 'GET',
            url: '/webhooks/{id}',
            path: { id },
        });
    }

    /**
     * Update an existing webhook
     */
    public static async update(id: string, data: WebhooksUpdate): Promise<WebhooksRow> {
        return await request<WebhooksRow>({
            method: 'PATCH',
            url: '/webhooks/{id}',
            path: { id },
            body: data,
        });
    }
}
