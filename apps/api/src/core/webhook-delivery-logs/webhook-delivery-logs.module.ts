import { Module } from '@nestjs/common';
import { WebhookDeliveryLogsController } from './webhook-delivery-logs.controller';
import { WebhookDeliveryLogsService } from './webhook-delivery-logs.service';
import { SupabaseModule } from '@/utils/supabase/supabase.module';

@Module({
  imports: [SupabaseModule],
  controllers: [WebhookDeliveryLogsController],
  providers: [WebhookDeliveryLogsService],
  exports: [WebhookDeliveryLogsService],
})
export class WebhookDeliveryLogsModule {}
