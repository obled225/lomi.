import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { SupabaseService } from '../../../utils/supabase/supabase.service';
import { WebhookSenderService } from '../../webhook-sender.service';
import { WebhookEvent } from '../../../utils/types/api';

@Injectable()
export class FreeWebhookService {
  private readonly logger = new Logger(FreeWebhookService.name);

  constructor(
    private readonly supabase: SupabaseService,
    private readonly webhookSender: WebhookSenderService,
  ) {}

  /**
   * Trigger merchant webhook for a free transaction (100% discount)
   * This mirrors the Wave webhook flow but for FREE provider transactions
   */
  async triggerFreeTransactionWebhook(transactionId: string): Promise<void> {
    this.logger.log(
      `Triggering webhook for free transaction: ${transactionId}`,
    );

    try {
      // Get transaction data for webhook payload
      const { data: txnData, error: txnError } = await this.supabase
        .getClient()
        .from('transactions')
        .select('*')
        .eq('transaction_id', transactionId)
        .single();

      if (txnError || !txnData) {
        this.logger.error(
          'Failed to fetch free transaction for webhook:',
          txnError,
        );
        throw new NotFoundException(
          `Transaction ${transactionId} not found for webhook`,
        );
      }

      // Cast to any to access properties (similar to Wave webhook service pattern)
      const transaction = txnData as any;

      // Validate this is indeed a free transaction
      if (transaction.provider_code !== 'FREE') {
        this.logger.warn(
          `Transaction ${transactionId} is not a FREE transaction (provider: ${transaction.provider_code})`,
        );
        throw new Error(
          `Transaction ${transactionId} is not a FREE provider transaction`,
        );
      }

      // Validate transaction is completed
      if (transaction.status !== 'completed') {
        this.logger.warn(
          `Transaction ${transactionId} is not completed (status: ${transaction.status})`,
        );
        // Don't throw error - just log and return
        // Free transactions should be auto-completed, but we don't want to fail webhook if status is pending
        return;
      }

      this.logger.log(
        `Sending PAYMENT_SUCCEEDED webhook for free transaction ${transactionId} to org ${transaction.organization_id}`,
      );

      // Use webhookSender.notifyOrganization to send webhooks
      // This is the same method used by Wave webhooks
      await this.webhookSender.notifyOrganization(
        transaction.organization_id,
        'PAYMENT_SUCCEEDED' as WebhookEvent,
        transaction,
      );

      this.logger.log(
        `Successfully triggered merchant webhook for free transaction ${transactionId}`,
      );
    } catch (error) {
      this.logger.error(
        `Error triggering webhook for free transaction ${transactionId}:`,
        error,
      );
      // Don't throw - webhook failures shouldn't fail the transaction
      // The transaction is already completed and recorded
    }
  }
}
