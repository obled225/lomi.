import { Controller, UseGuards, Get, Param } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
} from '@nestjs/swagger';
import { WebhookDeliveryLogsService } from './webhook-delivery-logs.service';
import { WebhookDeliveryLogResponseDto } from './dto/webhook-delivery-log-response.dto';
import { ApiKeyGuard } from '@core/common/guards/api-key.guard';
import {
  CurrentUser,
  type AuthContext,
} from '@core/common/decorators/current-user.decorator';

@ApiTags('Webhook Delivery Logs')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('webhook_delivery_logs')
export class WebhookDeliveryLogsController {
  constructor(private readonly service: WebhookDeliveryLogsService) {}

  @Get()
  @ApiOperation({ summary: 'List all webhook_delivery_logs' })
  @ApiResponse({
    status: 200,
    description: 'List of webhook_delivery_logs',
    type: [WebhookDeliveryLogResponseDto],
  })
  findAll(@CurrentUser() user: AuthContext) {
    return this.service.findAll(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a webhook_delivery_log by ID' })
  @ApiResponse({
    status: 200,
    description: 'The webhook_delivery_log',
    type: WebhookDeliveryLogResponseDto,
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
