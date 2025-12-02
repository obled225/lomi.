import { Injectable, Logger } from '@nestjs/common';
import { SupabaseService } from '@/utils/supabase/supabase.service';
import axios from 'axios';
import * as crypto from 'crypto';
import { WebhookEvent } from '@/utils/types/api';
import { Queue } from 'bullmq';

export interface Webhook {
  id: string;
  url: string;
  events: WebhookEvent[];
  secret: string;
  active: boolean;
  organization_id: string;
}

@Injectable()
export class WebhookSenderService {
  private readonly logger = new Logger(WebhookSenderService.name);

  constructor(private readonly supabase: SupabaseService) {}

  /**
   * Prepares the webhook payload based on the event type and data
   */
  prepareWebhookPayload(event: WebhookEvent, data: any): any {
    const timestamp = new Date().toISOString();

    return {
      id: crypto.randomUUID(),
      event,
      timestamp,
      data,
      lomi_environment: process.env.NODE_ENV || 'development',
    };
  }

  /**
   * Generates a signature for the webhook payload using the webhook secret
   */
  generateSignature(payloadString: string, secret: string): string {
    return crypto
      .createHmac('sha256', secret)
      .update(payloadString)
      .digest('hex');
  }

  /**
   * Sends a webhook to the specified URL with retry logic
   */
  async sendWebhook(
    webhook: Webhook,
    event: WebhookEvent,
    data: any,
    maxRetries = 3,
    retryDelay = 5000,
  ): Promise<boolean> {
    this.logger.log({
      message: 'Attempting to send webhook',
      webhookId: webhook.id,
      event,
      url: webhook.url,
    });

    if (!webhook.active) {
      this.logger.log(`Webhook ${webhook.id} is not active`);
      return false;
    }

    if (!webhook.events.includes(event)) {
      this.logger.log(
        `Webhook ${webhook.id} does not subscribe to event ${event}`,
      );
      return false;
    }

    const payload = this.prepareWebhookPayload(event, data);
    const payloadString = JSON.stringify(payload);
    const signature = this.generateSignature(payloadString, webhook.secret);

    let retries = 0;
    let lastResponseStatus: number | undefined;
    let lastResponseBody: any;

    while (retries <= maxRetries) {
      try {
        const response = await axios.post(webhook.url, payloadString, {
          headers: {
            'Content-Type': 'application/json',
            'X-Lomi-Signature': signature,
            'X-Lomi-Event': event,
            'User-Agent': 'Lomi-Webhook/1.0',
          },
          timeout: 10000,
        });

        lastResponseStatus = response.status;
        lastResponseBody = response.data;

        if (response.status >= 200 && response.status < 300) {
          await this.logDelivery(
            webhook.id,
            response.status,
            lastResponseBody,
            payload,
          );
          this.logger.log(`Webhook ${webhook.id} delivered successfully`);
          return true;
        }
      } catch (error: any) {
        lastResponseStatus = error.response?.status;
        lastResponseBody = error.response?.data || error.message;

        this.logger.warn(
          `Webhook delivery failed (attempt ${retries + 1}/${maxRetries + 1}): ${error.message}`,
        );
      }

      retries++;
      if (retries <= maxRetries) {
        await new Promise((resolve) =>
          setTimeout(resolve, retryDelay * Math.pow(2, retries - 1)),
        );
      }
    }

    await this.logDelivery(
      webhook.id,
      lastResponseStatus || 0,
      lastResponseBody,
      payload,
    );

    this.logger.error(
      `Webhook ${webhook.id} delivery failed after ${maxRetries} retries`,
    );
    return false;
  }

  private async logDelivery(
    webhookId: string,
    status: number,
    responseBody: any,
    payload: any,
  ) {
    try {
      const { error } = await this.supabase.rpc('log_webhook_delivery', {
        p_webhook_id: webhookId,
        p_merchant_id:
          payload.data?.merchant_id || payload.data?.organization_id,
        p_organization_id: payload.data?.organization_id,
        p_event_type: payload.event,
        p_payload: payload,
        p_response_status: status,
        p_response_body:
          typeof responseBody === 'string'
            ? responseBody
            : JSON.stringify(responseBody),
        p_attempt_number: 1,
        p_headers: null,
        p_request_duration_ms: undefined,
      });

      if (error) {
        this.logger.error(`Failed to log webhook delivery: ${error.message}`);
      }
    } catch (err: any) {
      this.logger.error(`Failed to log webhook delivery: ${err.message}`);
    }
  }

  async queueWebhooksForOrganization(
    organizationId: string,
    event: WebhookEvent,
    data: any,
    queue: Queue,
  ) {
    // Fetch webhooks for organization
    const { data: webhooks, error } = await this.supabase
      .getClient()
      .from('webhooks')
      .select('*')
      .eq('organization_id', organizationId)
      .eq('is_active', true);

    if (error) {
      this.logger.error(
        `Failed to fetch webhooks for org ${organizationId}: ${error.message}`,
      );
      return;
    }

    if (!webhooks || webhooks.length === 0) return;

    // Map to Webhook interface and filter by event
    const relevantWebhooks = webhooks
      .map((w: any) => ({
        id: w.webhook_id,
        url: w.url,
        events: w.authorized_events as WebhookEvent[],
        secret: w.verification_token,
        active: w.is_active,
        organization_id: w.organization_id,
      }))
      .filter((w) => w.events.includes(event));

    // Add jobs to queue
    const jobs = relevantWebhooks.map((webhook) => ({
      name: 'send-webhook',
      data: { webhook, event, data },
      opts: {
        attempts: 5,
        backoff: {
          type: 'exponential',
          delay: 5000,
        },
      },
    }));

    await queue.addBulk(jobs);
    this.logger.log(
      `Queued ${jobs.length} webhook jobs for org ${organizationId}`,
    );
  }

  async notifyOrganization(
    organizationId: string,
    event: WebhookEvent,
    data: any,
  ) {
    // Fetch webhooks for organization
    const { data: webhooks, error } = await this.supabase
      .getClient()
      .from('webhooks')
      .select('*')
      .eq('organization_id', organizationId)
      .eq('is_active', true);

    if (error) {
      this.logger.error(
        `Failed to fetch webhooks for org ${organizationId}: ${error.message}`,
      );
      return;
    }

    if (!webhooks || webhooks.length === 0) return;

    // Map to Webhook interface and filter by event
    const relevantWebhooks = webhooks
      .map((w: any) => ({
        id: w.webhook_id,
        url: w.url,
        events: w.authorized_events as WebhookEvent[],
        secret: w.verification_token,
        active: w.is_active,
        organization_id: w.organization_id,
      }))
      .filter((w) => w.events.includes(event));

    await Promise.allSettled(
      relevantWebhooks.map((w) => this.sendWebhook(w, event, data)),
    );
  }
}
