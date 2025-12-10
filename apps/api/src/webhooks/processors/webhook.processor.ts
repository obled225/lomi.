import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Logger } from '@nestjs/common';
import { WebhookSenderService } from '../webhook-sender.service';
import { WebhookEvent } from '../../utils/types/api';

@Processor('webhooks')
export class WebhookQueueProcessor extends WorkerHost {
  private readonly logger = new Logger(WebhookQueueProcessor.name);

  constructor(private readonly webhookSender: WebhookSenderService) {
    super();
  }

  async process(job: Job<any, any, string>): Promise<any> {
    this.logger.log(
      `Processing webhook job ${job.id} (attempt ${job.attemptsMade + 1}/${job.opts.attempts || 1})`,
    );

    try {
      const { webhook, event, data } = job.data;
      const success = await this.webhookSender.sendWebhook(
        webhook,
        event as WebhookEvent,
        data,
      );

      if (!success) {
        throw new Error(`Webhook delivery failed for ${webhook.id}`);
      }

      return { success: true, webhookId: webhook.id };
    } catch (error: any) {
      this.logger.error(
        `Webhook job ${job.id} failed: ${error.message}`,
        error.stack,
      );
      throw error; // Re-throw to trigger BullMQ retry
    }
  }
}
