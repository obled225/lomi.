import { Module } from '@nestjs/common';
import { WaveWebhookController } from './wave-webhook.controller';
import { WaveWebhookService } from './wave-webhook.service';
import { SupabaseModule } from '../../../utils/supabase/supabase.module';
import { WebhookSenderService } from '../../webhook-sender.service';

@Module({
  imports: [SupabaseModule],
  controllers: [WaveWebhookController],
  providers: [WaveWebhookService, WebhookSenderService],
  exports: [WaveWebhookService],
})
export class WaveWebhookModule {}
