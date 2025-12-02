import { Module } from '@nestjs/common';
import { WebhookDeliveryLogsController } from './webhook-delivery-logs.controller';
import { WebhookDeliveryLogsService } from './webhook-delivery-logs.service';

@Module({
  controllers: [WebhookDeliveryLogsController],
  providers: [WebhookDeliveryLogsService],
})
export class WebhookDeliveryLogsModule {}
