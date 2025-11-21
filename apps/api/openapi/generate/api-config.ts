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
    tableName: 'installment_plans',
    enabled: false,
    tag: 'BNPL',
    idField: 'plan_id',
    description: 'BNPL installment plans - create installment payment plans',
    operations: {
      list: true,
      get: true,
      create: false,
      update: false,
      delete: false,
    },
  },
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

  // ============================================
  // API MANAGEMENT
  // ============================================
  {
    tableName: 'api_keys',
    enabled: false,
    tag: 'API Management',
    description: 'API key management - create and manage API credentials',
  },

  // ============================================
  // SUPPORT & FEEDBACK
  // ============================================
  {
    tableName: 'support_requests',
    enabled: false,
    tag: 'Support',
    idField: 'request_id',
    description: 'Support requests - create and manage support tickets',
  },
  {
    tableName: 'feedback',
    enabled: false,
    tag: 'Support',
    idField: 'feedback_id',
    description: 'Feedback - submit product feedback',
  },

  // ============================================
  // INTERNAL TABLES (NOT EXPOSED)
  // ============================================
  {
    tableName: 'accounts',
    enabled: false, // Internal financial accounts
    description: 'Internal use only - merchant financial accounts',
  },
  {
    tableName: 'account_balance_history',
    enabled: false, // Internal financial tracking
    description: 'Internal use only - balance change audit log',
  },
  {
    tableName: 'merchants',
    enabled: false, // Internal user management
    description: 'Internal use only - merchant authentication',
  },
  {
    tableName: 'organizations',
    enabled: false, // Internal org management
    description: 'Internal use only - organization structure',
  },
  {
    tableName: 'merchant_organization_links',
    enabled: false, // Internal relationship
    description: 'Internal use only - merchant-org relationships',
  },
  {
    tableName: 'organization_kyc',
    enabled: false, // Internal KYC data
    description: 'Internal use only - KYC verification data',
  },
  {
    tableName: 'organization_addresses',
    enabled: false, // Internal org data
    description: 'Internal use only - organization addresses',
  },
  {
    tableName: 'organization_checkout_settings',
    enabled: false, // Internal settings
    description: 'Internal use only - checkout configuration',
  },
  {
    tableName: 'organization_providers_settings',
    enabled: false, // Internal provider config
    description: 'Internal use only - payment provider settings',
  },
  {
    tableName: 'organization_fees',
    enabled: false, // Internal fee tracking
    description: 'Internal use only - organization fee records',
  },
  {
    tableName: 'organization_fee_structure',
    enabled: false, // Internal fee config
    description: 'Internal use only - fee structure configuration',
  },
  {
    tableName: 'organization_fee_links',
    enabled: false, // Internal fee relationships
    description: 'Internal use only - fee linking',
  },
  {
    tableName: 'organization_fraud_settings',
    enabled: false, // Internal fraud config
    description: 'Internal use only - fraud prevention settings',
  },
  {
    tableName: 'api_error_logs',
    enabled: false, // Internal logging
    description: 'Internal use only - error tracking',
  },
  {
    tableName: 'api_interactions',
    enabled: false, // Internal analytics
    description: 'Internal use only - API usage analytics',
  },
  {
    tableName: 'api_rate_limits',
    enabled: false, // Internal rate limiting
    description: 'Internal use only - rate limit tracking',
  },
  {
    tableName: 'api_usage',
    enabled: false, // Internal usage tracking
    description: 'Internal use only - API usage metrics',
  },
  {
    tableName: 'fraud_alerts',
    enabled: false, // Internal fraud system
    description: 'Internal use only - fraud alert data',
  },
  {
    tableName: 'fraud_rules',
    enabled: false, // Internal fraud rules
    description: 'Internal use only - fraud detection rules',
  },
  {
    tableName: 'stripe_connect',
    enabled: false, // Internal provider data
    description: 'Internal use only - Stripe Connect integration',
  },
  {
    tableName: 'providers',
    enabled: false, // Internal provider list
    description: 'Internal use only - payment providers',
  },
  {
    tableName: 'providers_transactions',
    enabled: false, // Internal transaction mapping
    description: 'Internal use only - provider transaction mapping',
  },
  {
    tableName: 'payment_methods',
    enabled: false, // Internal method list
    description: 'Internal use only - payment methods',
  },
  {
    tableName: 'currencies',
    enabled: false, // Internal currency list
    description: 'Internal use only - supported currencies',
  },
  {
    tableName: 'currency_conversion_rates',
    enabled: false, // Internal exchange rates
    description: 'Internal use only - currency exchange rates',
  },
  {
    tableName: 'currency_conversion_history',
    enabled: false, // Internal rate history
    description: 'Internal use only - historical exchange rates',
  },
  {
    tableName: 'platform_main_account',
    enabled: false, // Platform internal
    description: 'Internal use only - platform account',
  },
  {
    tableName: 'platform_provider_balance',
    enabled: false, // Platform internal
    description: 'Internal use only - platform provider balances',
  },
  {
    tableName: 'platform_provider_balance_history',
    enabled: false, // Platform internal
    description: 'Internal use only - provider balance history',
  },
  {
    tableName: 'platform_invoices',
    enabled: false, // Platform internal
    description: 'Internal use only - platform invoices',
  },
  {
    tableName: 'platform_metrics',
    enabled: false, // Platform internal
    description: 'Internal use only - platform metrics',
  },
  {
    tableName: 'platform_default_fees',
    enabled: false, // Platform internal
    description: 'Internal use only - default platform fees',
  },
  {
    tableName: 'disputes',
    enabled: false,
    description: 'Dispute management - handle payment disputes and chargebacks',
  },
  {
    tableName: 'storefronts',
    enabled: false,
    description: 'Storefronts - create custom product storefronts',
  },
  {
    tableName: 'logs',
    enabled: false, // Internal logging
    description: 'Internal use only - system logs',
  },
  {
    tableName: 'notifications',
    enabled: false, // Internal notifications
    description: 'Internal use only - system notifications',
  },
  {
    tableName: 'assistant_conversations',
    enabled: false, // Internal AI assistant
    description: 'Internal use only - AI assistant conversations',
  },
  {
    tableName: 'assistant_messages',
    enabled: false, // Internal AI assistant
    description: 'Internal use only - AI assistant messages',
  },
  {
    tableName: 'assistant_feedback',
    enabled: false, // Internal AI feedback
    description: 'Internal use only - AI assistant feedback',
  },
  {
    tableName: 'token_cache',
    enabled: false, // Internal caching
    description: 'Internal use only - token caching',
  },
  {
    tableName: 'spi_payment_cancellation_requests',
    enabled: false, // Internal SPI operations
    description: 'Internal use only - SPI cancellation tracking',
  },
  {
    tableName: 'withdrawal_notifications',
    enabled: false, // Internal notifications
    description: 'Internal use only - withdrawal notification config',
  },
  {
    tableName: 'outstanding_balances',
    enabled: false, // Internal accounting
    description: 'Internal use only - outstanding balance tracking',
  },
  {
    tableName: 'coupon_usage',
    enabled: false, // Internal tracking
    description: 'Internal use only - coupon usage tracking',
  },
  {
    tableName: 'coupon_product_links',
    enabled: false, // Internal relationships
    description: 'Internal use only - coupon-product relationships',
  },
  {
    tableName: 'integration_clicks',
    enabled: false, // Internal analytics
    description: 'Internal use only - integration click tracking',
  },
  {
    tableName: 'bnpl_fee_tracking',
    enabled: false, // Internal fee tracking
    description: 'Internal use only - BNPL fee tracking',
  },
  {
    tableName: 'bnpl_configurations',
    enabled: false,
    description: 'BNPL configuration - manage BNPL settings and limits',
  },
  {
    tableName: 'cli_device_requests',
    enabled: false, // Internal CLI tool
    description: 'Internal use only - CLI device authentication',
  },
  {
    tableName: 'jobs',
    enabled: false, // HR/recruiting
    description: 'Internal use only - job postings',
  },
  {
    tableName: 'job_applications',
    enabled: false, // HR/recruiting
    description: 'Internal use only - job applications',
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
