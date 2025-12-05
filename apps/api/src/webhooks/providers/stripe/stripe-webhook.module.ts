import { Module } from '@nestjs/common';
import { StripeWebhookController } from './stripe-webhook.controller';
import { StripeWebhookService } from './stripe-webhook.service';
import { SupabaseModule } from '../../../utils/supabase/supabase.module';
import { WebhookSenderService } from '../../webhook-sender.service';

@Module({
  imports: [SupabaseModule],
  controllers: [StripeWebhookController],
  providers: [StripeWebhookService, WebhookSenderService],
  exports: [StripeWebhookService],
})
export class StripeWebhookModule {}
