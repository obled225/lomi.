export interface APIResourceConfig {
  tableName: string;
  path?: string;
  displayName?: string;
  idField?: string;
  enabled: boolean;
  tag?: string;
  description?: string;
}

export const API_RESOURCES: APIResourceConfig[] = [
  {
    tableName: 'customers',
    enabled: true,
    tag: 'Customers',
    description: 'Customer management - create and manage customer profiles',
  },
  {
    tableName: 'payment_requests',
    enabled: true,
    tag: 'Payment Requests',
    idField: 'request_id',
    description: 'Payment requests - create payment intents and track status',
  },
  {
    tableName: 'transactions',
    enabled: true,
    tag: 'Transactions',
    idField: 'transaction_id',
    description:
      'Transaction history - view completed and pending transactions',
  },
  {
    tableName: 'refunds',
    enabled: true,
    tag: 'Refunds',
    idField: 'refund_id',
    description: 'Refund management - process and track refunds',
  },
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
    tag: 'Prices',
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
    tag: 'Discount Coupons',
    idField: 'coupon_id',
    description: 'Discount coupons - create and manage promotional codes',
  },
  {
    tableName: 'customer_invoices',
    enabled: true,
    tag: 'Customer Invoices',
    idField: 'invoice_id',
    description: 'Customer invoices - view subscription invoices',
  },
  {
    tableName: 'checkout_sessions',
    enabled: true,
    tag: 'Checkout Sessions',
    idField: 'session_id',
    description: 'Checkout sessions - create hosted payment pages',
  },
  {
    tableName: 'payment_links',
    enabled: true,
    tag: 'Payment Links',
    idField: 'link_id',
    description: 'Payment links - shareable payment URLs',
  },
  {
    tableName: 'payouts',
    enabled: true,
    tag: 'Payouts',
    idField: 'payout_id',
    description: 'Payout management - transfer funds to beneficiaries',
  },
  {
    tableName: 'beneficiary_payouts',
    enabled: true,
    tag: 'Beneficiary Payouts',
    idField: 'payout_id',
    description: 'Beneficiary payouts - track individual payout transfers',
  },
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
    tag: 'Webhook Delivery Logs',
    idField: 'log_id',
    description: 'Webhook event log - history of webhook deliveries',
  },
  {
    tableName: 'events',
    enabled: true,
    tag: 'Events',
    idField: 'event_id',
    description: 'Events - view account activity events',
  },
];

export function getEnabledResources(): APIResourceConfig[] {
  return API_RESOURCES.filter((r) => r.enabled);
}
