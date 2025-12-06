import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { WebhookSenderService } from '../webhook-sender.service';
import { WebhookEvent } from '../../utils/types/api';

@Injectable()
export class WebhookListener {
  private readonly logger = new Logger(WebhookListener.name);

  constructor(
    private readonly webhookSender: WebhookSenderService,
    @InjectQueue('webhooks') private readonly webhookQueue: Queue,
  ) {}

  @OnEvent('PAYMENT_SUCCEEDED')
  async handlePaymentSucceeded(payload: any) {
    this.logger.log(
      `Handling PAYMENT_SUCCEEDED event for transaction ${payload.id}`,
    );
    await this.queueWebhook(
      payload.organization_id,
      'PAYMENT_SUCCEEDED',
      payload,
    );
  }

  @OnEvent('PAYMENT_FAILED')
  async handlePaymentFailed(payload: any) {
    this.logger.log(
      `Handling PAYMENT_FAILED event for transaction ${payload.id}`,
    );
    await this.queueWebhook(payload.organization_id, 'PAYMENT_FAILED', payload);
  }

  @OnEvent('REFUND_CREATED')
  async handleRefundCreated(payload: any) {
    this.logger.log(`Handling REFUND_CREATED event for refund ${payload.id}`);
    await this.queueWebhook(payload.organization_id, 'REFUND_CREATED', payload);
  }

  @OnEvent('REFUND_COMPLETED')
  async handleRefundCompleted(payload: any) {
    this.logger.log(`Handling REFUND_COMPLETED event for refund ${payload.id}`);
    await this.queueWebhook(
      payload.organization_id,
      'REFUND_COMPLETED',
      payload,
    );
  }

  @OnEvent('REFUND_FAILED')
  async handleRefundFailed(payload: any) {
    this.logger.log(`Handling REFUND_FAILED event for refund ${payload.id}`);
    await this.queueWebhook(payload.organization_id, 'REFUND_FAILED', payload);
  }

  @OnEvent('SUBSCRIPTION_CREATED')
  async handleSubscriptionCreated(payload: any) {
    this.logger.log(
      `Handling SUBSCRIPTION_CREATED event for subscription ${payload.id}`,
    );
    await this.queueWebhook(
      payload.organization_id,
      'SUBSCRIPTION_CREATED',
      payload,
    );
  }

  @OnEvent('SUBSCRIPTION_RENEWED')
  async handleSubscriptionRenewed(payload: any) {
    this.logger.log(
      `Handling SUBSCRIPTION_RENEWED event for subscription ${payload.id}`,
    );
    await this.queueWebhook(
      payload.organization_id,
      'SUBSCRIPTION_RENEWED',
      payload,
    );
  }

  @OnEvent('SUBSCRIPTION_CANCELED')
  async handleSubscriptionCanceled(payload: any) {
    this.logger.log(
      `Handling SUBSCRIPTION_CANCELED event for subscription ${payload.id}`,
    );
    await this.queueWebhook(
      payload.organization_id,
      'SUBSCRIPTION_CANCELED',
      payload,
    );
  }

  private async queueWebhook(
    organizationId: string,
    event: WebhookEvent,
    data: any,
  ) {
    // We still need to fetch relevant webhooks first to know which ones to queue
    // Ideally this logic should be moved to a service method that returns webhooks
    // For now, we'll use the sender service to fetch and then queue individual jobs

    // NOTE: Refactoring notifyOrganization to return webhooks instead of sending would be cleaner
    // But to minimize changes, let's just queue the organization notification job
    // and let the processor handle the fan-out or fetching.

    // Actually, better approach:
    // 1. Fetch webhooks here (or via service)
    // 2. Queue a job for EACH webhook

    // Let's modify WebhookSenderService to expose a method to get webhooks
    // For now, I'll implement a simple fetch here using the existing service if possible,
    // or just queue a "notify-organization" job and let the processor handle it.
    // However, the processor is set up to take a specific webhook.

    // Let's change the strategy: The listener will fetch webhooks and queue jobs.
    await this.webhookSender.queueWebhooksForOrganization(
      organizationId,
      event,
      data,
      this.webhookQueue,
    );
  }
}
