/**
 * WebhookDeliveryLogsService
 * AUTO-GENERATED - Do not edit manually
 * 
 * Webhook event log - history of webhook deliveries
 */

import { request } from '../core/request.js';
import type { Database } from '../types.js';

type WebhookDeliveryLogsRow = Database['public']['Tables']['webhook_delivery_logs']['Row'];
type WebhookDeliveryLogsInsert = Database['public']['Tables']['webhook_delivery_logs']['Insert'];
type WebhookDeliveryLogsUpdate = Database['public']['Tables']['webhook_delivery_logs']['Update'];

export class WebhookDeliveryLogsService {

    /**
     * List webhook_delivery_logs
     * Webhook event log - history of webhook deliveries
     */
    public static async list(options?: {
        limit?: number;
        offset?: number;
        [key: string]: any;
    }): Promise<WebhookDeliveryLogsRow[]> {
        return await request<WebhookDeliveryLogsRow[]>({
            method: 'GET',
            url: '/webhook-delivery-logs',
            query: options,
        });
    }

    /**
     * Get a single webhook_delivery_log
     */
    public static async get(id: string): Promise<WebhookDeliveryLogsRow> {
        return await request<WebhookDeliveryLogsRow>({
            method: 'GET',
            url: '/webhook-delivery-logs/{id}',
            path: { id },
        });
    }
}
