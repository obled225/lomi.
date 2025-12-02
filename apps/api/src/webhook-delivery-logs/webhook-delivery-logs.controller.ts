import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiSecurity } from '@nestjs/swagger';
import { WebhookDeliveryLogsService } from './webhook-delivery-logs.service';
import { CreateWebhookDeliveryLogDto } from './dto/create-webhook-delivery-log.dto';
import { WebhookDeliveryLogResponseDto } from './dto/webhook-delivery-log-response.dto';
import { ApiKeyGuard } from '../common/guards/api-key.guard';
import { CurrentUser, type AuthContext } from '../common/decorators/current-user.decorator';

@ApiTags('Webhook Delivery Logs')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('webhook_delivery_logs')
export class WebhookDeliveryLogsController {
  constructor(private readonly service: WebhookDeliveryLogsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new webhook_delivery_log' })
  @ApiResponse({
    status: 201,
    description: 'The webhook_delivery_log has been successfully created.',
    type: WebhookDeliveryLogResponseDto,
  })
  create(@Body() createDto: CreateWebhookDeliveryLogDto, @CurrentUser() user: AuthContext) {
    return this.service.create(createDto, user);
  }

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
  @ApiOperation({ summary: 'Get a webhook_delivery_log' })
  @ApiResponse({
    status: 200,
    description: 'The webhook_delivery_log',
    type: WebhookDeliveryLogResponseDto,
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }
}
