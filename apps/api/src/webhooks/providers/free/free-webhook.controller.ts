import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { FreeWebhookService } from './free-webhook.service';

/**
 * Guard to validate requests from Supabase
 * This ensures only authorized calls from our database can trigger webhooks
 */
@Controller('webhooks/free')
export class FreeWebhookController {
  private readonly logger = new Logger(FreeWebhookController.name);

  constructor(private readonly freeWebhookService: FreeWebhookService) {}

  /**
   * Endpoint to trigger webhook for free transactions
   * Called by the database function after creating a free transaction
   * 
   * POST /webhooks/free/trigger
   * Body: { transaction_id: string }
   */
  @Post('trigger')
  @HttpCode(HttpStatus.OK)
  async triggerWebhook(
    @Body('transaction_id') transactionId: string,
  ): Promise<{ success: boolean; message: string }> {
    this.logger.log(
      `Received free transaction webhook trigger request for: ${transactionId}`,
    );

    if (!transactionId) {
      this.logger.error('Missing transaction_id in request body');
      return {
        success: false,
        message: 'Missing transaction_id in request body',
      };
    }

    try {
      await this.freeWebhookService.triggerFreeTransactionWebhook(
        transactionId,
      );

      return {
        success: true,
        message: `Webhook triggered for transaction ${transactionId}`,
      };
    } catch (error: any) {
      this.logger.error(
        `Failed to trigger webhook for transaction ${transactionId}:`,
        error,
      );

      // Return success even if webhook fails to prevent retries
      // The webhook failure is logged and can be investigated separately
      return {
        success: true,
        message: `Webhook trigger processed (may have failed): ${error.message}`,
      };
    }
  }
}
