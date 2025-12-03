import {
  Controller,
  Post,
  Body,
  Headers,
  HttpCode,
  HttpStatus,
  Logger,
  Req,
} from '@nestjs/common';
import type { RawBodyRequest } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { WaveWebhookService } from './wave-webhook.service';
import type { Request } from 'express';

@ApiTags('Webhooks - Providers')
@Controller('webhooks/wave')
export class WaveWebhookController {
  private readonly logger = new Logger(WaveWebhookController.name);

  constructor(private readonly waveWebhookService: WaveWebhookService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Receive Wave webhook events',
    description:
      'Endpoint for Wave to send payment notifications. Verifies signature and processes events.',
  })
  @ApiResponse({
    status: 200,
    description: 'Webhook received and processed successfully',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid webhook signature',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error processing webhook',
  })
  async handleWebhook(
    @Headers() headers: Record<string, string>,
    @Body() body: any,
    @Req() request: RawBodyRequest<Request>,
  ) {
    this.logger.log('Received Wave webhook request');

    try {
      // Get raw body for signature verification
      const rawBody = (request as any).rawBody || JSON.stringify(body);

      // Process the webhook
      const result = await this.waveWebhookService.handleWebhook(
        headers,
        body,
        rawBody,
      );

      this.logger.log(`Webhook processed successfully: ${body.type || 'unknown'}`);

      return { received: true, ...result };
    } catch (error) {
      this.logger.error(`Webhook processing error: ${error.message}`, error.stack);
      throw error;
    }
  }
}

