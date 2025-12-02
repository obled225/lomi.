import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Logger } from '@nestjs/common';
import { WebhookSenderService } from '../webhook-sender.service';
import { WebhookEvent } from '@/utils/types/api';

@Processor('webhooks')
export class WebhookQueueProcessor extends WorkerHost {
  private readonly logger = new Logger(WebhookQueueProcessor.name);

  constructor(private readonly webhookSender: WebhookSenderService) {
    super();
  }

  async process(job: Job<any, any, string>): Promise<any> {
    this.logger.log(`Processing webhook job ${job.id}`);
    const { webhook, event, data } = job.data;

    await this.webhookSender.sendWebhook(webhook, event as WebhookEvent, data);
  }
}
