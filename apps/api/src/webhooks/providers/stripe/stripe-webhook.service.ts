import {
  Injectable,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { SupabaseService } from '@/utils/supabase/supabase.service';
import { WebhookSenderService } from '../../webhook-sender.service';
import { WebhookEvent } from '@/utils/types/api';
import Stripe from 'stripe';

@Injectable()
export class StripeWebhookService {
  private readonly logger = new Logger(StripeWebhookService.name);
  private readonly webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  private readonly stripe: Stripe;

  constructor(
    private readonly supabase: SupabaseService,
    private readonly webhookSender: WebhookSenderService,
  ) {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeSecretKey) {
      throw new Error('STRIPE_SECRET_KEY is not configured');
    }

    this.stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2025-11-17.clover',
    });
  }

  /**
   * Main webhook handler
   */
  async handleWebhook(signature: string, rawBody: Buffer | string) {
    // Verify webhook signature
    const event = this.verifyWebhook(signature, rawBody);

    this.logger.log(`Processing Stripe webhook: ${event.type}`);
    this.logger.debug(`Event data: ${JSON.stringify(event.data, null, 2)}`);

    // Handle different event types
    switch (event.type) {
      // ========================================================================
      // PAYMENT EVENTS
      // ========================================================================
      case 'payment_intent.succeeded':
        return await this.handlePaymentSuccess(event.data.object as Stripe.PaymentIntent);

      case 'payment_intent.payment_failed':
        return await this.handlePaymentFailure(event.data.object as Stripe.PaymentIntent);

      case 'payment_intent.processing':
        return await this.handlePaymentProcessing(event.data.object as Stripe.PaymentIntent);

      // ========================================================================
      // DISPUTE EVENTS
      // ========================================================================
      case 'charge.dispute.created':
        return await this.handleDisputeCreated(event.data.object as Stripe.Dispute);

      case 'charge.dispute.updated':
        return await this.handleDisputeUpdated(event.data.object as Stripe.Dispute);

      case 'charge.dispute.closed':
        return await this.handleDisputeClosed(event.data.object as Stripe.Dispute);

      // ========================================================================
      // REFUND EVENTS
      // ========================================================================
      case 'charge.refunded':
        return await this.handleRefund(event.data.object as Stripe.Charge);

      // ========================================================================
      // CHECKOUT EVENTS
      // ========================================================================
      case 'checkout.session.completed':
        return await this.handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);

      case 'checkout.session.async_payment_succeeded':
        return await this.handleAsyncPaymentSuccess(event.data.object as Stripe.Checkout.Session);

      case 'checkout.session.async_payment_failed':
        return await this.handleAsyncPaymentFailure(event.data.object as Stripe.Checkout.Session);

      default:
        this.logger.warn(`Unhandled event type: ${event.type}`);
        return { message: `Event type ${event.type} not handled`, eventType: event.type };
    }
  }

  /**
   * Verify webhook signature using Stripe's library
   */
  private verifyWebhook(signature: string, rawBody: Buffer | string): Stripe.Event {
    if (!this.webhookSecret) {
      this.logger.warn(
        'Stripe webhook secret not configured - ACCEPTING ALL REQUESTS IN DEV MODE',
      );
      
      if (process.env.NODE_ENV === 'production') {
        throw new BadRequestException('Webhook secret not configured');
      }

      // In dev mode, try to parse the body as JSON
      try {
        const bodyString = rawBody.toString();
        return JSON.parse(bodyString) as Stripe.Event;
      } catch {
        throw new BadRequestException('Invalid webhook payload');
      }
    }

    try {
      const event = this.stripe.webhooks.constructEvent(
        rawBody,
        signature,
        this.webhookSecret,
      );

      this.logger.log('Stripe signature verification successful');
      return event;
    } catch (error) {
      this.logger.error('Stripe signature verification failed:', error);
      throw new BadRequestException(`Webhook Error: ${error.message}`);
    }
  }

  /**
   * Handle payment_intent.succeeded event
   */
  private async handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
    this.logger.log('Processing payment success:', {
      payment_intent_id: paymentIntent.id,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    });

    const metadata = paymentIntent.metadata || {};
    
    // Update transaction status using RPC
    // Get charge ID from latest_charge field
    const chargeId = typeof paymentIntent.latest_charge === 'string' 
      ? paymentIntent.latest_charge 
      : paymentIntent.latest_charge?.id || null;
    
    await this.updateStripeCheckoutStatus(
      paymentIntent.id,
      chargeId,
      'succeeded',
    );

    // If we have transaction metadata, trigger merchant webhook
    if (metadata.organization_id) {
      await this.triggerMerchantWebhook(
        paymentIntent.id,
        metadata.organization_id,
        'PAYMENT_SUCCEEDED',
      );
    }

    return {
      eventType: 'payment_intent.succeeded',
      payment_intent_id: paymentIntent.id,
    };
  }

  /**
   * Handle payment_intent.payment_failed event
   */
  private async handlePaymentFailure(paymentIntent: Stripe.PaymentIntent) {
    this.logger.log('Processing payment failure:', {
      payment_intent_id: paymentIntent.id,
      error: paymentIntent.last_payment_error?.message,
    });

    const metadata = paymentIntent.metadata || {};
    const errorCode = paymentIntent.last_payment_error?.code || 'unknown';
    const errorMessage = paymentIntent.last_payment_error?.message || 'Payment failed';

    // Update transaction status using RPC
    await this.updateStripeCheckoutStatus(
      paymentIntent.id,
      null,
      'cancelled',
      errorCode,
      errorMessage,
    );

    // Trigger merchant webhook if organization exists
    if (metadata.organization_id) {
      await this.triggerMerchantWebhook(
        paymentIntent.id,
        metadata.organization_id,
        'PAYMENT_FAILED',
      );
    }

    return {
      eventType: 'payment_intent.payment_failed',
      payment_intent_id: paymentIntent.id,
    };
  }

  /**
   * Handle payment_intent.processing event
   */
  private async handlePaymentProcessing(paymentIntent: Stripe.PaymentIntent) {
    this.logger.log('Processing payment processing:', {
      payment_intent_id: paymentIntent.id,
    });

    await this.updateStripeCheckoutStatus(
      paymentIntent.id,
      null,
      'processing',
    );

    return {
      eventType: 'payment_intent.processing',
      payment_intent_id: paymentIntent.id,
    };
  }

  /**
   * Handle charge.dispute.created event
   */
  private async handleDisputeCreated(dispute: Stripe.Dispute) {
    this.logger.log('Processing dispute created:', {
      dispute_id: dispute.id,
      charge_id: dispute.charge,
      amount: dispute.amount,
      reason: dispute.reason,
    });

    try {
      // Get payment intent from charge
      const charge = await this.stripe.charges.retrieve(dispute.charge as string);
      const paymentIntentId = charge.payment_intent as string;

      // Create dispute record using RPC
      const { error } = await (this.supabase.getClient() as any).rpc(
        'handle_stripe_dispute_created',
        {
          p_stripe_dispute_id: dispute.id,
          p_stripe_charge_id: dispute.charge,
          p_payment_intent_id: paymentIntentId,
          p_amount: dispute.amount / 100, // Convert cents to currency units
          p_currency: dispute.currency.toUpperCase(),
          p_reason: dispute.reason,
          p_dispute_data: {
            status: dispute.status,
            evidence: dispute.evidence,
            evidence_details: dispute.evidence_details,
            is_charge_refundable: dispute.is_charge_refundable,
          },
        },
      );

      if (error) {
        this.logger.error('Error creating dispute record:', error);
        throw new Error('Failed to create dispute record');
      }

      this.logger.log('Successfully created dispute record');
    } catch (error) {
      this.logger.error('Error handling dispute creation:', error);
      throw error;
    }

    return {
      eventType: 'charge.dispute.created',
      dispute_id: dispute.id,
    };
  }

  /**
   * Handle charge.dispute.updated event
   */
  private async handleDisputeUpdated(dispute: Stripe.Dispute) {
    this.logger.log('Processing dispute updated:', {
      dispute_id: dispute.id,
      status: dispute.status,
    });

    try {
      const { error } = await (this.supabase.getClient() as any).rpc(
        'handle_stripe_dispute_updated',
        {
          p_stripe_dispute_id: dispute.id,
          p_status: dispute.status,
          p_dispute_data: {
            status: dispute.status,
            evidence: dispute.evidence,
            evidence_details: dispute.evidence_details,
          },
        },
      );

      if (error) {
        this.logger.error('Error updating dispute record:', error);
        throw new Error('Failed to update dispute record');
      }

      this.logger.log('Successfully updated dispute record');
    } catch (error) {
      this.logger.error('Error handling dispute update:', error);
      throw error;
    }

    return {
      eventType: 'charge.dispute.updated',
      dispute_id: dispute.id,
    };
  }

  /**
   * Handle charge.dispute.closed event
   */
  private async handleDisputeClosed(dispute: Stripe.Dispute) {
    this.logger.log('Processing dispute closed:', {
      dispute_id: dispute.id,
      status: dispute.status,
    });

    // Same as dispute.updated but with final status
    await this.handleDisputeUpdated(dispute);

    return {
      eventType: 'charge.dispute.closed',
      dispute_id: dispute.id,
    };
  }

  /**
   * Handle charge.refunded event
   */
  private async handleRefund(charge: Stripe.Charge) {
    this.logger.log('Processing refund:', {
      charge_id: charge.id,
      amount_refunded: charge.amount_refunded,
    });

    try {
      const paymentIntentId = charge.payment_intent as string;
      const refund = charge.refunds?.data[0];

      if (!refund) {
        this.logger.warn('No refund data found in charge');
        return {
          eventType: 'charge.refunded',
          charge_id: charge.id,
        };
      }

      const { error } = await (this.supabase.getClient() as any).rpc(
        'handle_stripe_refund',
        {
          p_stripe_charge_id: charge.id,
          p_payment_intent_id: paymentIntentId,
          p_refund_amount: refund.amount / 100,
          p_refund_id: refund.id,
          p_reason: refund.reason || null,
        },
      );

      if (error) {
        this.logger.error('Error handling refund:', error);
        throw new Error('Failed to handle refund');
      }

      this.logger.log('Successfully processed refund');
    } catch (error) {
      this.logger.error('Error handling refund:', error);
      throw error;
    }

    return {
      eventType: 'charge.refunded',
      charge_id: charge.id,
    };
  }

  /**
   * Handle checkout.session.completed event
   */
  private async handleCheckoutCompleted(session: Stripe.Checkout.Session) {
    this.logger.log('Processing checkout session completed:', {
      session_id: session.id,
      payment_intent: session.payment_intent,
    });

    // Checkout completion is handled by payment_intent.succeeded
    // This is just a notification that checkout UI was completed

    return {
      eventType: 'checkout.session.completed',
      session_id: session.id,
    };
  }

  /**
   * Handle checkout.session.async_payment_succeeded event
   */
  private async handleAsyncPaymentSuccess(session: Stripe.Checkout.Session) {
    this.logger.log('Processing async payment success:', {
      session_id: session.id,
      payment_intent: session.payment_intent,
    });

    if (session.payment_intent) {
      await this.updateStripeCheckoutStatus(
        session.payment_intent as string,
        null,
        'succeeded',
      );
    }

    return {
      eventType: 'checkout.session.async_payment_succeeded',
      session_id: session.id,
    };
  }

  /**
   * Handle checkout.session.async_payment_failed event
   */
  private async handleAsyncPaymentFailure(session: Stripe.Checkout.Session) {
    this.logger.log('Processing async payment failure:', {
      session_id: session.id,
      payment_intent: session.payment_intent,
    });

    if (session.payment_intent) {
      await this.updateStripeCheckoutStatus(
        session.payment_intent as string,
        null,
        'cancelled',
      );
    }

    return {
      eventType: 'checkout.session.async_payment_failed',
      session_id: session.id,
    };
  }

  /**
   * Update Stripe checkout status using RPC
   */
  private async updateStripeCheckoutStatus(
    paymentIntentId: string,
    chargeId: string | null,
    status: string,
    errorCode?: string,
    errorMessage?: string,
  ) {
    try {
      this.logger.log(`Updating Stripe checkout status: ${paymentIntentId} -> ${status}`);

      const { error } = await (this.supabase.getClient() as any).rpc(
        'update_stripe_checkout_status',
        {
          p_stripe_payment_intent_id: paymentIntentId,
          p_stripe_charge_id: chargeId,
          p_payment_status: status,
          p_error_code: errorCode || null,
          p_error_message: errorMessage || null,
          p_metadata: null,
        },
      );

      if (error) {
        this.logger.error('Error updating Stripe checkout status:', error);
        throw new Error('Failed to update checkout status');
      }

      this.logger.log('Successfully updated Stripe checkout status');
    } catch (error) {
      this.logger.error('Error updating checkout status:', error);
      throw error;
    }
  }

  /**
   * Trigger merchant webhook notification
   */
  private async triggerMerchantWebhook(
    paymentIntentId: string,
    organizationId: string,
    event: string,
  ) {
    try {
      this.logger.log(
        `Triggering merchant webhook: ${event} for payment ${paymentIntentId}`,
      );

      // Get transaction data for webhook payload
      const { data: txnData, error: txnError } = await this.supabase
        .getClient()
        .from('transactions')
        .select('*')
        .eq('stripe_payment_intent_id', paymentIntentId)
        .single();

      if (txnError || !txnData) {
        this.logger.error('Failed to fetch transaction for webhook:', txnError);
        return;
      }

      await this.webhookSender.notifyOrganization(
        organizationId,
        event as WebhookEvent,
        txnData,
      );

      this.logger.log('Successfully triggered merchant webhook');
    } catch (error) {
      this.logger.error('Error triggering merchant webhook:', error);
      // Don't throw - webhook failures shouldn't fail the Stripe webhook
    }
  }
}

