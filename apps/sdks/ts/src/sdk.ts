/**
 * Main lomi. SDK class
 */

import type { LomiConfig } from './config.js';
import { DEFAULT_CONFIG } from './config.js';
import { OpenAPI } from './generated/index.js';

// Import all generated services
import {
  CustomerService,
  PaymentRequestService,
  TransactionService,
  RefundService,
  ProductService,
  PriceService,
  SubscriptionService,
  CustomerInvoiceService,
  DiscountCouponService,
  CheckoutSessionService,
  PaymentLinkService,
  PayoutService,
  PayoutMethodService,
  BeneficiaryPayoutService,
  InstallmentPaymentService,
  SpiQrCodeService,
  SpiAccountAliaseService,
  WebhookService,
  WebhookDeliveryLogService,
  EventService,
  MeterService,
  MeterBalanceService,
} from './generated/index.js';

export class LomiSDK {
  // Core payment resources
  public readonly customers: typeof CustomerService;
  public readonly paymentRequests: typeof PaymentRequestService;
  public readonly transactions: typeof TransactionService;
  public readonly refunds: typeof RefundService;

  // Products & subscriptions
  public readonly products: typeof ProductService;
  public readonly prices: typeof PriceService;
  public readonly subscriptions: typeof SubscriptionService;
  public readonly invoices: typeof CustomerInvoiceService;
  public readonly coupons: typeof DiscountCouponService;

  // Checkout & payment links
  public readonly checkoutSessions: typeof CheckoutSessionService;
  public readonly paymentLinks: typeof PaymentLinkService;

  // Payouts
  public readonly payouts: typeof PayoutService;
  public readonly payoutMethods: typeof PayoutMethodService;
  public readonly beneficiaryPayouts: typeof BeneficiaryPayoutService;

  // BNPL
  public readonly installmentPayments: typeof InstallmentPaymentService;

  // SPI (Senegal Interbank Payment System)
  public readonly spiQrCodes: typeof SpiQrCodeService;
  public readonly spiAliases: typeof SpiAccountAliaseService;

  // Webhooks & events
  public readonly webhooks: typeof WebhookService;
  public readonly webhookLogs: typeof WebhookDeliveryLogService;
  public readonly events: typeof EventService;

  // Usage-based billing
  public readonly meters: typeof MeterService;
  public readonly meterBalances: typeof MeterBalanceService;

  /**
   * Initialize the lomi. SDK
   */
  constructor(config: LomiConfig) {
    const baseUrl = config.environment === 'test' 
      ? 'https://sandbox.api.lomi.africa/v1'
      : config.baseUrl || DEFAULT_CONFIG.baseUrl;

    // Configure OpenAPI client
    OpenAPI.BASE = baseUrl;
    OpenAPI.HEADERS = {
      'X-API-KEY': config.apiKey,
      ...config.headers,
    };

    // Assign all generated services
    this.customers = CustomerService;
    this.paymentRequests = PaymentRequestService;
    this.transactions = TransactionService;
    this.refunds = RefundService;
    this.products = ProductService;
    this.prices = PriceService;
    this.subscriptions = SubscriptionService;
    this.invoices = CustomerInvoiceService;
    this.coupons = DiscountCouponService;
    this.checkoutSessions = CheckoutSessionService;
    this.paymentLinks = PaymentLinkService;
    this.payouts = PayoutService;
    this.payoutMethods = PayoutMethodService;
    this.beneficiaryPayouts = BeneficiaryPayoutService;
    this.installmentPayments = InstallmentPaymentService;
    this.spiQrCodes = SpiQrCodeService;
    this.spiAliases = SpiAccountAliaseService;
    this.webhooks = WebhookService;
    this.webhookLogs = WebhookDeliveryLogService;
    this.events = EventService;
    this.meters = MeterService;
    this.meterBalances = MeterBalanceService;
  }

  /**
   * Update the API key
   */
  setApiKey(apiKey: string): void {
    OpenAPI.HEADERS = {
      ...OpenAPI.HEADERS,
      'X-API-KEY': apiKey,
    };
  }

  /**
   * Get the current base URL
   */
  getBaseUrl(): string {
    return OpenAPI.BASE;
  }
}
