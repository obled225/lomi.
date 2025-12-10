import { Module } from '@nestjs/common';
import { FreeWebhookController } from './free-webhook.controller';
import { FreeWebhookService } from './free-webhook.service';
import { WebhookSenderService } from '../../webhook-sender.service';
import { SupabaseService } from '../../../utils/supabase/supabase.service';

@Module({
  controllers: [FreeWebhookController],
  providers: [FreeWebhookService, WebhookSenderService, SupabaseService],
  exports: [FreeWebhookService],
})
export class FreeWebhookModule {}
