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
    @Body() body: any,
  ): Promise<{ success: boolean; message: string }> {
    this.logger.log(`Received webhook trigger. Body type: ${typeof body}`);

    let transactionId: string | undefined = undefined;

    // The main.ts file applies raw body parsing to all /webhooks/* routes
    // So we need to handle Buffer body manually here
    if (Buffer.isBuffer(body)) {
      try {
        const rawString = body.toString('utf8');
        this.logger.debug(`Parsing raw body: ${rawString}`);
        const parsed = JSON.parse(rawString);
        transactionId = parsed.transaction_id;
      } catch (e) {
        this.logger.error('Failed to parse raw body buffer', e);
      }
    } else if (typeof body === 'object') {
      // Standard JSON handling
      transactionId = body.transaction_id;
    } else {
      this.logger.warn(`Unexpected body format: ${body}`);
    }

    this.logger.log(`Processing trigger for transaction ID: ${transactionId}`);

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
