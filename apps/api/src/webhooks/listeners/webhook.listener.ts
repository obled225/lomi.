import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { WebhookSenderService } from '../webhook-sender.service';
import { WebhookEvent } from '@/utils/types/api';

@Injectable()
export class WebhookListener {
  private readonly logger = new Logger(WebhookListener.name);

  constructor(
    private readonly webhookSender: WebhookSenderService,
    @InjectQueue('webhooks') private readonly webhookQueue: Queue,
  ) {}

  @OnEvent('payment.succeeded')
  async handlePaymentSucceeded(payload: any) {
    this.logger.log(
      `Handling payment.succeeded event for transaction ${payload.id}`,
    );
    await this.queueWebhook(
      payload.organization_id,
      'PAYMENT_SUCCEEDED',
      payload,
    );
  }

  @OnEvent('payment.failed')
  async handlePaymentFailed(payload: any) {
    this.logger.log(
      `Handling payment.failed event for transaction ${payload.id}`,
    );
    await this.queueWebhook(payload.organization_id, 'PAYMENT_FAILED', payload);
  }

  @OnEvent('refund.created')
  async handleRefundCreated(payload: any) {
    this.logger.log(`Handling refund.created event for refund ${payload.id}`);
    await this.queueWebhook(payload.organization_id, 'REFUND_CREATED', payload);
  }

  @OnEvent('refund.completed')
  async handleRefundCompleted(payload: any) {
    this.logger.log(`Handling refund.completed event for refund ${payload.id}`);
    await this.queueWebhook(
      payload.organization_id,
      'REFUND_COMPLETED',
      payload,
    );
  }

  @OnEvent('refund.failed')
  async handleRefundFailed(payload: any) {
    this.logger.log(`Handling refund.failed event for refund ${payload.id}`);
    await this.queueWebhook(payload.organization_id, 'REFUND_FAILED', payload);
  }

  @OnEvent('subscription.created')
  async handleSubscriptionCreated(payload: any) {
    this.logger.log(
      `Handling subscription.created event for subscription ${payload.id}`,
    );
    await this.queueWebhook(
      payload.organization_id,
      'SUBSCRIPTION_CREATED',
      payload,
    );
  }

  @OnEvent('subscription.renewed')
  async handleSubscriptionRenewed(payload: any) {
    this.logger.log(
      `Handling subscription.renewed event for subscription ${payload.id}`,
    );
    await this.queueWebhook(
      payload.organization_id,
      'SUBSCRIPTION_RENEWED',
      payload,
    );
  }

  @OnEvent('subscription.canceled')
  async handleSubscriptionCanceled(payload: any) {
    this.logger.log(
      `Handling subscription.canceled event for subscription ${payload.id}`,
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
