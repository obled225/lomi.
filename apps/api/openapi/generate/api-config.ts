/**
 * API Resource Configuration
 *
 * Define which database tables to expose as REST API endpoints
 * and how they should be configured
 */

export interface APIResourceConfig {
  /** Database table name */
  tableName: string;

  /** API endpoint path (defaults to tableName if not specified) */
  path?: string;

  /** Display name for documentation (defaults to tableName without 's') */
  displayName?: string;

  /** ID field name (defaults to {singularName}_id) */
  idField?: string;

  /** Whether to expose this resource in the API */
  enabled: boolean;

  /** Operations to enable for this resource */
  operations?: {
    list?: boolean; // GET /resources
    get?: boolean; // GET /resources/:id
    create?: boolean; // POST /resources
    update?: boolean; // PATCH /resources/:id
    delete?: boolean; // DELETE /resources/:id
  };

  /** Tag for grouping in documentation */
  tag?: string;

  /** Custom description for the resource */
  description?: string;
}

/**
 * All available API resources
 *
 * CUSTOMIZE THIS ARRAY to control which tables are exposed in your API
 */
export const API_RESOURCES: APIResourceConfig[] = [
  // ============================================
  // CORE PAYMENT RESOURCES
  // ============================================
  {
    tableName: 'customers',
    enabled: true,
    tag: 'Core',
    description: 'Customer management - create and manage customer profiles',
  },
  {
    tableName: 'payment_requests',
    enabled: true,
    tag: 'Core',
    idField: 'request_id',
    description: 'Payment requests - create payment intents and track status',
  },
  {
    tableName: 'transactions',
    enabled: true,
    tag: 'Core',
    idField: 'transaction_id',
    description:
      'Transaction history - view completed and pending transactions',
    operations: {
      list: true,
      get: true,
      create: false, // Transactions are created via payment_requests
      update: false,
      delete: false,
    },
  },
  {
    tableName: 'refunds',
    enabled: true,
    tag: 'Core',
    idField: 'refund_id',
    description: 'Refund management - process and track refunds',
  },

  // ============================================
  // SUBSCRIPTION & PRODUCTS
  // ============================================
  {
    tableName: 'products',
    enabled: true,
    tag: 'Products',
    idField: 'product_id',
    description: 'Product catalog - manage one-time and recurring products',
  },
  {
    tableName: 'prices',
    enabled: true,
    tag: 'Products',
    idField: 'price_id',
    description: 'Pricing tiers - manage product pricing',
  },
  {
    tableName: 'subscriptions',
    enabled: true,
    tag: 'Subscriptions',
    idField: 'subscription_id',
    description:
      'Subscription management - create and manage recurring billing',
  },
  {
    tableName: 'discount_coupons',
    enabled: true,
    tag: 'Subscriptions',
    idField: 'coupon_id',
    description: 'Discount coupons - create and manage promotional codes',
  },
  {
    tableName: 'customer_invoices',
    enabled: true,
    tag: 'Subscriptions',
    idField: 'invoice_id',
    description: 'Customer invoices - view subscription invoices',
    operations: {
      list: true,
      get: true,
      create: false, // Invoices are auto-generated
      update: false,
      delete: false,
    },
  },

  // ============================================
  // CHECKOUT & PAYMENT LINKS
  // ============================================
  {
    tableName: 'checkout_sessions',
    enabled: true,
    tag: 'Checkout',
    idField: 'session_id',
    description: 'Checkout sessions - create hosted payment pages',
  },
  {
    tableName: 'payment_links',
    enabled: true,
    tag: 'Checkout',
    idField: 'link_id',
    description: 'Payment links - shareable payment URLs',
  },

  // ============================================
  // PAYOUTS
  // ============================================
  {
    tableName: 'payouts',
    enabled: true,
    tag: 'Payouts',
    idField: 'payout_id',
    description: 'Payout management - transfer funds to beneficiaries',
  },
  {
    tableName: 'payout_methods',
    enabled: true,
    tag: 'Payouts',
    idField: 'payout_method_id',
    description: 'Payout methods - manage beneficiary payout details',
    operations: {
      list: true,
      get: true,
      create: false,
      update: false,
      delete: false,
    },
  },
  {
    tableName: 'beneficiary_payouts',
    enabled: true,
    tag: 'Payouts',
    idField: 'payout_id',
    description: 'Beneficiary payouts - track individual payout transfers',
    operations: {
      list: true,
      get: true,
      create: true,
      update: false,
      delete: false,
    },
  },

  // ============================================
  // BNPL (Buy Now Pay Later)
  // ============================================
  {
    tableName: 'installment_payments',
    enabled: true,
    tag: 'BNPL',
    idField: 'payment_id',
    description: 'BNPL installment payments - track installment payments',
    operations: {
      list: true,
      get: true,
      create: false,
      update: false,
      delete: false,
    },
  },

  // ============================================
  // SPI (SENEGAL INTERBANK PAYMENT SYSTEM)
  // ============================================
  {
    tableName: 'spi_qr_codes',
    enabled: true,
    tag: 'SPI',
    idField: 'qr_code_id',
    description: 'SPI QR codes - generate and manage SPI QR payment codes',
  },
  {
    tableName: 'spi_account_aliases',
    enabled: true,
    tag: 'SPI',
    idField: 'alias_id',
    description: 'SPI account aliases - manage SPI payment aliases',
    operations: {
      list: true,
      get: true,
      create: false,
      update: false,
      delete: false,
    },
  },

  // ============================================
  // WEBHOOKS & EVENTS
  // ============================================
  {
    tableName: 'webhooks',
    enabled: true,
    tag: 'Webhooks',
    idField: 'webhook_id',
    description:
      'Webhook configuration - receive real-time event notifications',
  },
  {
    tableName: 'webhook_delivery_logs',
    enabled: true,
    tag: 'Webhooks',
    idField: 'log_id',
    description: 'Webhook event log - history of webhook deliveries',
    operations: {
      list: true,
      get: true,
      create: false,
      update: false,
      delete: false,
    },
  },
  {
    tableName: 'events',
    enabled: true,
    tag: 'Events',
    idField: 'event_id',
    description: 'Events - view account activity events',
    operations: {
      list: true,
      get: true,
      create: false,
      update: false,
      delete: false,
    },
  },

  // ============================================
  // USAGE-BASED BILLING
  // ============================================
  {
    tableName: 'meters',
    enabled: true,
    tag: 'Usage Billing',
    idField: 'meter_id',
    description: 'Usage meters - track usage for usage-based billing',
  },
  {
    tableName: 'meter_balances',
    enabled: true,
    tag: 'Usage Billing',
    idField: 'balance_id',
    description: 'Meter balances - view current usage balances',
    operations: {
      list: true,
      get: true,
      create: false,
      update: false,
      delete: false,
    },
  },
];

/**
 * Get all enabled API resources
 */
export function getEnabledResources(): APIResourceConfig[] {
  return API_RESOURCES.filter((r) => r.enabled);
}

/**
 * Get resource configuration by table name
 */
export function getResourceConfig(
  tableName: string,
): APIResourceConfig | undefined {
  return API_RESOURCES.find((r) => r.tableName === tableName);
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const tags = new Set<string>();
  API_RESOURCES.filter((r) => r.enabled).forEach((r) => {
    if (r.tag) tags.add(r.tag);
  });
  return Array.from(tags);
}

/**
 * Enums to expose in the public API
 *
 * CUSTOMIZE THIS ARRAY to control which database enums are exposed
 * Only include enums that API consumers actually need
 */
export const EXPOSED_ENUMS = [
  // Currency & Payment
  'currency_code', // XOF, USD, EUR
  'payment_method_code', // CARDS, MOBILE_MONEY, BANK_TRANSFER, BNPL, FREE
  'provider_code', // WAVE, JUMBO, MTN, STRIPE, SPI, etc.

  // Transaction Statuses
  'transaction_status', // pending, completed, failed, refunded, expired
  'refund_status', // pending, completed, failed
  'payout_status', // pending, processing, completed, failed

  // Subscription & Products
  'subscription_status', // pending, active, paused, cancelled, expired, past_due, trial
  'product_type_enum', // one_time, recurring, usage_based
  'pricing_model_enum', // standard, pay_what_you_want, tiered, volume
  'frequency', // weekly, monthly, yearly, etc.

  // Checkout & Sessions
  'checkout_session_status', // open, completed, expired
  'invoice_status', // sent, paid, overdue, cancelled

  // Webhooks
  'webhook_event', // PAYMENT_CREATED, PAYMENT_SUCCEEDED, etc.

  // SPI (Senegal Interbank Payment)
  'spi_payment_status', // INITIE, ENVOYE, IRREVOCABLE, REJETE
  'spi_account_status', // OUVERT, BLOQUE, CLOTURE
  'spi_account_type', // CACC, CARD, CASH, etc.

  // BNPL
  'bnpl_status', // pending, collected, waived, refunded
];

/**
 * Check if an enum should be exposed in the API
 */
export function isEnumExposed(enumName: string): boolean {
  return EXPOSED_ENUMS.includes(enumName);
}
