// Generated TypeScript types from OpenAPI specification

export enum bnpl_status {
  pending = 'pending',
  collected = 'collected',
  waived = 'waived',
  refunded = 'refunded',
}

export enum checkout_session_status {
  open = 'open',
  completed = 'completed',
  expired = 'expired',
}

export enum currency_code {
  XOF = 'XOF',
  USD = 'USD',
  EUR = 'EUR',
}

export enum frequency {
  weekly = 'weekly',
  bi_weekly = 'bi-weekly',
  monthly = 'monthly',
  bi_monthly = 'bi-monthly',
  quarterly = 'quarterly',
  semi_annual = 'semi-annual',
  yearly = 'yearly',
}

export enum invoice_status {
  sent = 'sent',
  paid = 'paid',
  overdue = 'overdue',
  cancelled = 'cancelled',
}

export enum payment_method_code {
  CARDS = 'CARDS',
  MOBILE_MONEY = 'MOBILE_MONEY',
  BANK_TRANSFER = 'BANK_TRANSFER',
  BNPL = 'BNPL',
  FREE = 'FREE',
}

export enum payout_status {
  pending = 'pending',
  processing = 'processing',
  completed = 'completed',
  failed = 'failed',
}

export enum pricing_model_enum {
  standard = 'standard',
  pay_what_you_want = 'pay_what_you_want',
  tiered = 'tiered',
  volume = 'volume',
}

export enum product_type_enum {
  one_time = 'one_time',
  recurring = 'recurring',
  usage_based = 'usage_based',
}

export enum provider_code {
  WAVE = 'WAVE',
  JUMBO = 'JUMBO',
  MTN = 'MTN',
  STRIPE = 'STRIPE',
  SPI = 'SPI',
  CYBERSOURCE = 'CYBERSOURCE',
  FREE = 'FREE',
}

export enum refund_status {
  pending = 'pending',
  completed = 'completed',
  failed = 'failed',
}

export enum spi_account_status {
  OUVERT = 'OUVERT',
  BLOQUE = 'BLOQUE',
  CLOTURE = 'CLOTURE',
}

export enum spi_account_type {
  CACC = 'CACC',
  CARD = 'CARD',
  CASH = 'CASH',
  CHAR = 'CHAR',
  CISH = 'CISH',
  CURR = 'CURR',
  DPST = 'DPST',
  SVGS = 'SVGS',
  ULAA = 'ULAA',
}

export enum spi_payment_status {
  INITIE = 'INITIE',
  ENVOYE = 'ENVOYE',
  IRREVOCABLE = 'IRREVOCABLE',
  REJETE = 'REJETE',
}

export enum subscription_status {
  pending = 'pending',
  active = 'active',
  paused = 'paused',
  cancelled = 'cancelled',
  expired = 'expired',
  past_due = 'past_due',
  trial = 'trial',
}

export enum transaction_status {
  pending = 'pending',
  completed = 'completed',
  failed = 'failed',
  refunded = 'refunded',
  expired = 'expired',
}

export enum webhook_event {
  PAYMENT_CREATED = 'PAYMENT_CREATED',
  PAYMENT_SUCCEEDED = 'PAYMENT_SUCCEEDED',
  PAYMENT_FAILED = 'PAYMENT_FAILED',
  PAYMENT_CANCELED = 'PAYMENT_CANCELED',
  REFUND_CREATED = 'REFUND_CREATED',
  REFUND_COMPLETED = 'REFUND_COMPLETED',
  REFUND_FAILED = 'REFUND_FAILED',
  SUBSCRIPTION_CREATED = 'SUBSCRIPTION_CREATED',
  SUBSCRIPTION_RENEWED = 'SUBSCRIPTION_RENEWED',
  SUBSCRIPTION_CANCELED = 'SUBSCRIPTION_CANCELED',
  CHECKOUT_COMPLETED = 'CHECKOUT_COMPLETED',
  PROVIDER_STATUS_CHANGED = 'PROVIDER_STATUS_CHANGED',
}

export interface beneficiary_payouts extends Record<string, unknown> {
  account_id?: string;
  amount?: number;
  created_at?: Date;
  created_by?: string;
  currency_code?: string;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  payment_method_code?: string;
  payout_id?: string;
  payout_method_id?: string;
  provider_code?: string;
  spi_bulk_instruction_id?: string;
  status?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface beneficiary_payouts_create extends Record<string, unknown> {
  account_id?: string;
  amount?: number;
  created_at?: Date;
  created_by?: string;
  currency_code?: string;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  payment_method_code?: string;
  payout_id?: string;
  payout_method_id?: string;
  provider_code?: string;
  spi_bulk_instruction_id?: string;
  status?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface beneficiary_payouts_update extends Record<string, unknown> {
  account_id?: string;
  amount?: number;
  created_at?: Date;
  created_by?: string;
  currency_code?: string;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  payment_method_code?: string;
  payout_id?: string;
  payout_method_id?: string;
  provider_code?: string;
  spi_bulk_instruction_id?: string;
  status?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface checkout_sessions extends Record<string, unknown> {
  allow_coupon_code?: boolean;
  allow_quantity?: boolean;
  allowed_providers?: string;
  amount?: number;
  cancel_url?: string;
  checkout_session_id?: string;
  created_at?: Date;
  created_by?: string;
  currency_code?: string;
  customer_email?: string;
  customer_id?: string;
  customer_name?: string;
  customer_phone?: string;
  environment?: string;
  expires_at?: Date;
  installment_plan_id?: string;
  is_pos?: boolean;
  is_spi?: boolean;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  payment_link_id?: string;
  payment_request_id?: string;
  price_id?: string;
  product_id?: string;
  public_description?: string;
  qr_code_data?: Record<string, unknown>;
  qr_code_type?: string;
  quantity?: number;
  spi_account_number?: string;
  spi_qr_code_id?: string;
  status?: string;
  subscription_id?: string;
  success_url?: string;
  title?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface checkout_sessions_create extends Record<string, unknown> {
  allow_coupon_code?: boolean;
  allow_quantity?: boolean;
  allowed_providers?: string;
  amount?: number;
  cancel_url?: string;
  checkout_session_id?: string;
  created_at?: Date;
  created_by?: string;
  currency_code?: string;
  customer_email?: string;
  customer_id?: string;
  customer_name?: string;
  customer_phone?: string;
  environment?: string;
  expires_at?: Date;
  installment_plan_id?: string;
  is_pos?: boolean;
  is_spi?: boolean;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  payment_link_id?: string;
  payment_request_id?: string;
  price_id?: string;
  product_id?: string;
  public_description?: string;
  qr_code_data?: Record<string, unknown>;
  qr_code_type?: string;
  quantity?: number;
  spi_account_number?: string;
  spi_qr_code_id?: string;
  status?: string;
  subscription_id?: string;
  success_url?: string;
  title?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface checkout_sessions_update extends Record<string, unknown> {
  allow_coupon_code?: boolean;
  allow_quantity?: boolean;
  allowed_providers?: string;
  amount?: number;
  cancel_url?: string;
  checkout_session_id?: string;
  created_at?: Date;
  created_by?: string;
  currency_code?: string;
  customer_email?: string;
  customer_id?: string;
  customer_name?: string;
  customer_phone?: string;
  environment?: string;
  expires_at?: Date;
  installment_plan_id?: string;
  is_pos?: boolean;
  is_spi?: boolean;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  payment_link_id?: string;
  payment_request_id?: string;
  price_id?: string;
  product_id?: string;
  public_description?: string;
  qr_code_data?: Record<string, unknown>;
  qr_code_type?: string;
  quantity?: number;
  spi_account_number?: string;
  spi_qr_code_id?: string;
  status?: string;
  subscription_id?: string;
  success_url?: string;
  title?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface customer_invoices extends Record<string, unknown> {
  amount?: number;
  created_at?: Date;
  created_by?: string;
  currency_code?: string;
  customer_id?: string;
  customer_invoice_id?: string;
  description?: string;
  due_date?: string;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  status?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface customer_invoices_create extends Record<string, unknown> {
  amount?: number;
  created_at?: Date;
  created_by?: string;
  currency_code?: string;
  customer_id?: string;
  customer_invoice_id?: string;
  description?: string;
  due_date?: string;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  status?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface customer_invoices_update extends Record<string, unknown> {
  amount?: number;
  created_at?: Date;
  created_by?: string;
  currency_code?: string;
  customer_id?: string;
  customer_invoice_id?: string;
  description?: string;
  due_date?: string;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  status?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface customers extends Record<string, unknown> {
  address?: string;
  city?: string;
  country?: string;
  created_at?: Date;
  created_by?: string;
  customer_id?: string;
  deleted_at?: Date;
  email?: string;
  environment?: string;
  is_business?: boolean;
  is_deleted?: boolean;
  metadata?: Record<string, unknown>;
  name?: string;
  organization_id?: string;
  phone_number?: string;
  postal_code?: string;
  spi_alias_mbno?: string;
  spi_alias_shid?: string;
  spi_primary_alias?: string;
  updated_at?: Date;
  whatsapp_number?: string;
  [key: string]: unknown;
}

export interface customers_create extends Record<string, unknown> {
  address?: string;
  city?: string;
  country?: string;
  created_at?: Date;
  created_by?: string;
  customer_id?: string;
  deleted_at?: Date;
  email?: string;
  environment?: string;
  is_business?: boolean;
  is_deleted?: boolean;
  metadata?: Record<string, unknown>;
  name?: string;
  organization_id?: string;
  phone_number?: string;
  postal_code?: string;
  spi_alias_mbno?: string;
  spi_alias_shid?: string;
  spi_primary_alias?: string;
  updated_at?: Date;
  whatsapp_number?: string;
  [key: string]: unknown;
}

export interface customers_update extends Record<string, unknown> {
  address?: string;
  city?: string;
  country?: string;
  created_at?: Date;
  created_by?: string;
  customer_id?: string;
  deleted_at?: Date;
  email?: string;
  environment?: string;
  is_business?: boolean;
  is_deleted?: boolean;
  metadata?: Record<string, unknown>;
  name?: string;
  organization_id?: string;
  phone_number?: string;
  postal_code?: string;
  spi_alias_mbno?: string;
  spi_alias_shid?: string;
  spi_primary_alias?: string;
  updated_at?: Date;
  whatsapp_number?: string;
  [key: string]: unknown;
}

export interface discount_coupons extends Record<string, unknown> {
  applies_to_product_types?: string;
  code?: string;
  coupon_id?: string;
  created_at?: Date;
  current_uses?: number;
  customer_type?: string;
  description?: string;
  discount_fixed_amount?: number;
  discount_percentage?: number;
  discount_type?: string;
  environment?: string;
  expires_at?: Date;
  is_active?: boolean;
  is_organization_wide?: boolean;
  max_quantity_per_use?: number;
  max_uses?: number;
  organization_id?: string;
  scope_type?: string;
  updated_at?: Date;
  usage_frequency_limit?: string;
  usage_limit_value?: number;
  valid_from?: string;
  [key: string]: unknown;
}

export interface discount_coupons_create extends Record<string, unknown> {
  applies_to_product_types?: string;
  code?: string;
  coupon_id?: string;
  created_at?: Date;
  current_uses?: number;
  customer_type?: string;
  description?: string;
  discount_fixed_amount?: number;
  discount_percentage?: number;
  discount_type?: string;
  environment?: string;
  expires_at?: Date;
  is_active?: boolean;
  is_organization_wide?: boolean;
  max_quantity_per_use?: number;
  max_uses?: number;
  organization_id?: string;
  scope_type?: string;
  updated_at?: Date;
  usage_frequency_limit?: string;
  usage_limit_value?: number;
  valid_from?: string;
  [key: string]: unknown;
}

export interface discount_coupons_update extends Record<string, unknown> {
  applies_to_product_types?: string;
  code?: string;
  coupon_id?: string;
  created_at?: Date;
  current_uses?: number;
  customer_type?: string;
  description?: string;
  discount_fixed_amount?: number;
  discount_percentage?: number;
  discount_type?: string;
  environment?: string;
  expires_at?: Date;
  is_active?: boolean;
  is_organization_wide?: boolean;
  max_quantity_per_use?: number;
  max_uses?: number;
  organization_id?: string;
  scope_type?: string;
  updated_at?: Date;
  usage_frequency_limit?: string;
  usage_limit_value?: number;
  valid_from?: string;
  [key: string]: unknown;
}

export interface events extends Record<string, unknown> {
  created_at?: Date;
  created_by?: string;
  customer_id?: string;
  event_data?: Record<string, unknown>;
  event_id?: string;
  event_name?: string;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  product_id?: string;
  [key: string]: unknown;
}

export interface events_create extends Record<string, unknown> {
  created_at?: Date;
  created_by?: string;
  customer_id?: string;
  event_data?: Record<string, unknown>;
  event_id?: string;
  event_name?: string;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  product_id?: string;
  [key: string]: unknown;
}

export interface events_update extends Record<string, unknown> {
  created_at?: Date;
  created_by?: string;
  customer_id?: string;
  event_data?: Record<string, unknown>;
  event_id?: string;
  event_name?: string;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  product_id?: string;
  [key: string]: unknown;
}

export interface installment_payments extends Record<string, unknown> {
  amount?: number;
  created_at?: Date;
  due_date?: string;
  installment_id?: string;
  interest_amount?: number;
  paid_at?: Date;
  payment_link?: string;
  payment_method_code?: string;
  plan_id?: string;
  principal_amount?: number;
  processing_fee?: number;
  provider_code?: string;
  sequence_number?: number;
  spi_payment_request_id?: string;
  spi_tx_id?: string;
  status?: string;
  transaction_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface installment_payments_create extends Record<string, unknown> {
  amount?: number;
  created_at?: Date;
  due_date?: string;
  installment_id?: string;
  interest_amount?: number;
  paid_at?: Date;
  payment_link?: string;
  payment_method_code?: string;
  plan_id?: string;
  principal_amount?: number;
  processing_fee?: number;
  provider_code?: string;
  sequence_number?: number;
  spi_payment_request_id?: string;
  spi_tx_id?: string;
  status?: string;
  transaction_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface installment_payments_update extends Record<string, unknown> {
  amount?: number;
  created_at?: Date;
  due_date?: string;
  installment_id?: string;
  interest_amount?: number;
  paid_at?: Date;
  payment_link?: string;
  payment_method_code?: string;
  plan_id?: string;
  principal_amount?: number;
  processing_fee?: number;
  provider_code?: string;
  sequence_number?: number;
  spi_payment_request_id?: string;
  spi_tx_id?: string;
  status?: string;
  transaction_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface meter_balances extends Record<string, unknown> {
  balance?: number;
  balance_id?: string;
  billable_organization_id?: string;
  consumed_units?: number;
  created_at?: Date;
  credited_units?: number;
  customer_id?: string;
  last_event_id?: string;
  meter_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface meter_balances_create extends Record<string, unknown> {
  balance?: number;
  balance_id?: string;
  billable_organization_id?: string;
  consumed_units?: number;
  created_at?: Date;
  credited_units?: number;
  customer_id?: string;
  last_event_id?: string;
  meter_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface meter_balances_update extends Record<string, unknown> {
  balance?: number;
  balance_id?: string;
  billable_organization_id?: string;
  consumed_units?: number;
  created_at?: Date;
  credited_units?: number;
  customer_id?: string;
  last_event_id?: string;
  meter_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface meters extends Record<string, unknown> {
  aggregation?: Record<string, unknown>;
  created_at?: Date;
  filter?: Record<string, unknown>;
  is_active?: boolean;
  meter_id?: string;
  name?: string;
  organization_id?: string;
  product_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface meters_create extends Record<string, unknown> {
  aggregation?: Record<string, unknown>;
  created_at?: Date;
  filter?: Record<string, unknown>;
  is_active?: boolean;
  meter_id?: string;
  name?: string;
  organization_id?: string;
  product_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface meters_update extends Record<string, unknown> {
  aggregation?: Record<string, unknown>;
  created_at?: Date;
  filter?: Record<string, unknown>;
  is_active?: boolean;
  meter_id?: string;
  name?: string;
  organization_id?: string;
  product_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface payment_links extends Record<string, unknown> {
  allow_coupon_code?: boolean;
  allow_quantity?: boolean;
  allowed_providers?: string;
  amount?: number;
  cancel_url?: string;
  created_at?: Date;
  created_by?: string;
  currency_code?: string;
  environment?: string;
  expires_at?: Date;
  is_active?: boolean;
  link_id?: string;
  link_type?: string;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  price_id?: string;
  private_description?: string;
  product_id?: string;
  public_description?: string;
  quantity?: number;
  success_url?: string;
  title?: string;
  updated_at?: Date;
  url?: string;
  [key: string]: unknown;
}

export interface payment_links_create extends Record<string, unknown> {
  allow_coupon_code?: boolean;
  allow_quantity?: boolean;
  allowed_providers?: string;
  amount?: number;
  cancel_url?: string;
  created_at?: Date;
  created_by?: string;
  currency_code?: string;
  environment?: string;
  expires_at?: Date;
  is_active?: boolean;
  link_id?: string;
  link_type?: string;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  price_id?: string;
  private_description?: string;
  product_id?: string;
  public_description?: string;
  quantity?: number;
  success_url?: string;
  title?: string;
  updated_at?: Date;
  url?: string;
  [key: string]: unknown;
}

export interface payment_links_update extends Record<string, unknown> {
  allow_coupon_code?: boolean;
  allow_quantity?: boolean;
  allowed_providers?: string;
  amount?: number;
  cancel_url?: string;
  created_at?: Date;
  created_by?: string;
  currency_code?: string;
  environment?: string;
  expires_at?: Date;
  is_active?: boolean;
  link_id?: string;
  link_type?: string;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  price_id?: string;
  private_description?: string;
  product_id?: string;
  public_description?: string;
  quantity?: number;
  success_url?: string;
  title?: string;
  updated_at?: Date;
  url?: string;
  [key: string]: unknown;
}

export interface payment_requests extends Record<string, unknown> {
  amount?: number;
  created_at?: Date;
  created_by?: string;
  currency_code?: string;
  customer_id?: string;
  description?: string;
  environment?: string;
  expiry_date?: string;
  organization_id?: string;
  payment_link?: string;
  payment_reference?: string;
  request_id?: string;
  spi_account_number?: string;
  spi_bulk_instruction_id?: string;
  spi_confirmation?: boolean;
  spi_date_envoi?: string;
  spi_date_irrevocabilite?: string;
  spi_date_limite_paiement?: string;
  spi_date_limite_reponse?: string;
  spi_date_rejet?: string;
  spi_debit_differe?: boolean;
  spi_end2end_id?: string;
  spi_payeur_alias?: string;
  spi_payeur_nom?: string;
  spi_payeur_pays?: string;
  spi_payment_request_category?: string;
  spi_payment_status?: string;
  spi_ref_doc_numero?: string;
  spi_ref_doc_type?: string;
  spi_rejection_reason?: string;
  spi_remise_amount?: number;
  spi_remise_rate?: number;
  spi_tx_id?: string;
  status?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface payment_requests_create extends Record<string, unknown> {
  amount?: number;
  created_at?: Date;
  created_by?: string;
  currency_code?: string;
  customer_id?: string;
  description?: string;
  environment?: string;
  expiry_date?: string;
  organization_id?: string;
  payment_link?: string;
  payment_reference?: string;
  request_id?: string;
  spi_account_number?: string;
  spi_bulk_instruction_id?: string;
  spi_confirmation?: boolean;
  spi_date_envoi?: string;
  spi_date_irrevocabilite?: string;
  spi_date_limite_paiement?: string;
  spi_date_limite_reponse?: string;
  spi_date_rejet?: string;
  spi_debit_differe?: boolean;
  spi_end2end_id?: string;
  spi_payeur_alias?: string;
  spi_payeur_nom?: string;
  spi_payeur_pays?: string;
  spi_payment_request_category?: string;
  spi_payment_status?: string;
  spi_ref_doc_numero?: string;
  spi_ref_doc_type?: string;
  spi_rejection_reason?: string;
  spi_remise_amount?: number;
  spi_remise_rate?: number;
  spi_tx_id?: string;
  status?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface payment_requests_update extends Record<string, unknown> {
  amount?: number;
  created_at?: Date;
  created_by?: string;
  currency_code?: string;
  customer_id?: string;
  description?: string;
  environment?: string;
  expiry_date?: string;
  organization_id?: string;
  payment_link?: string;
  payment_reference?: string;
  request_id?: string;
  spi_account_number?: string;
  spi_bulk_instruction_id?: string;
  spi_confirmation?: boolean;
  spi_date_envoi?: string;
  spi_date_irrevocabilite?: string;
  spi_date_limite_paiement?: string;
  spi_date_limite_reponse?: string;
  spi_date_rejet?: string;
  spi_debit_differe?: boolean;
  spi_end2end_id?: string;
  spi_payeur_alias?: string;
  spi_payeur_nom?: string;
  spi_payeur_pays?: string;
  spi_payment_request_category?: string;
  spi_payment_status?: string;
  spi_ref_doc_numero?: string;
  spi_ref_doc_type?: string;
  spi_rejection_reason?: string;
  spi_remise_amount?: number;
  spi_remise_rate?: number;
  spi_tx_id?: string;
  status?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface payout_methods extends Record<string, unknown> {
  account_name?: string;
  account_number?: string;
  auto_withdrawal_day?: number;
  auto_withdrawal_enabled?: boolean;
  auto_withdrawal_last_run?: string;
  auto_withdrawal_method?: string;
  auto_withdrawal_mobile_provider?: string;
  bank_code?: string;
  bank_name?: string;
  branch_code?: string;
  country?: string;
  created_at?: Date;
  is_default?: boolean;
  is_spi_enabled?: boolean;
  is_uemoa?: boolean;
  is_valid?: boolean;
  organization_id?: string;
  payout_method_id?: string;
  payout_method_type?: string;
  spi_account_number?: string;
  spi_alias_mbno?: string;
  spi_alias_shid?: string;
  spi_alias_type?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface payout_methods_create extends Record<string, unknown> {
  account_name?: string;
  account_number?: string;
  auto_withdrawal_day?: number;
  auto_withdrawal_enabled?: boolean;
  auto_withdrawal_last_run?: string;
  auto_withdrawal_method?: string;
  auto_withdrawal_mobile_provider?: string;
  bank_code?: string;
  bank_name?: string;
  branch_code?: string;
  country?: string;
  created_at?: Date;
  is_default?: boolean;
  is_spi_enabled?: boolean;
  is_uemoa?: boolean;
  is_valid?: boolean;
  organization_id?: string;
  payout_method_id?: string;
  payout_method_type?: string;
  spi_account_number?: string;
  spi_alias_mbno?: string;
  spi_alias_shid?: string;
  spi_alias_type?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface payout_methods_update extends Record<string, unknown> {
  account_name?: string;
  account_number?: string;
  auto_withdrawal_day?: number;
  auto_withdrawal_enabled?: boolean;
  auto_withdrawal_last_run?: string;
  auto_withdrawal_method?: string;
  auto_withdrawal_mobile_provider?: string;
  bank_code?: string;
  bank_name?: string;
  branch_code?: string;
  country?: string;
  created_at?: Date;
  is_default?: boolean;
  is_spi_enabled?: boolean;
  is_uemoa?: boolean;
  is_valid?: boolean;
  organization_id?: string;
  payout_method_id?: string;
  payout_method_type?: string;
  spi_account_number?: string;
  spi_alias_mbno?: string;
  spi_alias_shid?: string;
  spi_alias_type?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface payouts extends Record<string, unknown> {
  account_id?: string;
  amount?: number;
  created_at?: Date;
  created_by?: string;
  currency_code?: string;
  environment?: string;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  payment_method_code?: string;
  payout_id?: string;
  payout_method_id?: string;
  provider_code?: string;
  status?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface payouts_create extends Record<string, unknown> {
  account_id?: string;
  amount?: number;
  created_at?: Date;
  created_by?: string;
  currency_code?: string;
  environment?: string;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  payment_method_code?: string;
  payout_id?: string;
  payout_method_id?: string;
  provider_code?: string;
  status?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface payouts_update extends Record<string, unknown> {
  account_id?: string;
  amount?: number;
  created_at?: Date;
  created_by?: string;
  currency_code?: string;
  environment?: string;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  payment_method_code?: string;
  payout_id?: string;
  payout_method_id?: string;
  provider_code?: string;
  status?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface prices extends Record<string, unknown> {
  amount?: number;
  billing_interval?: string;
  created_at?: Date;
  currency_code?: string;
  environment?: string;
  is_active?: boolean;
  is_default?: boolean;
  maximum_amount?: number;
  metadata?: Record<string, unknown>;
  minimum_amount?: number;
  organization_id?: string;
  price_id?: string;
  pricing_model?: string;
  product_id?: string;
  provider_price_id?: string;
  provider_product_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface prices_create extends Record<string, unknown> {
  amount?: number;
  billing_interval?: string;
  created_at?: Date;
  currency_code?: string;
  environment?: string;
  is_active?: boolean;
  is_default?: boolean;
  maximum_amount?: number;
  metadata?: Record<string, unknown>;
  minimum_amount?: number;
  organization_id?: string;
  price_id?: string;
  pricing_model?: string;
  product_id?: string;
  provider_price_id?: string;
  provider_product_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface prices_update extends Record<string, unknown> {
  amount?: number;
  billing_interval?: string;
  created_at?: Date;
  currency_code?: string;
  environment?: string;
  is_active?: boolean;
  is_default?: boolean;
  maximum_amount?: number;
  metadata?: Record<string, unknown>;
  minimum_amount?: number;
  organization_id?: string;
  price_id?: string;
  pricing_model?: string;
  product_id?: string;
  provider_price_id?: string;
  provider_product_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface products extends Record<string, unknown> {
  billing_frequency?: string;
  charge_day?: number;
  created_at?: Date;
  created_by?: string;
  description?: string;
  display_on_storefront?: boolean;
  environment?: string;
  failed_payment_action?: string;
  first_payment_type?: string;
  image_url?: string;
  is_active?: boolean;
  metadata?: Record<string, unknown>;
  name?: string;
  organization_id?: string;
  product_id?: string;
  product_type?: string;
  updated_at?: Date;
  usage_aggregation?: string;
  usage_unit?: string;
  [key: string]: unknown;
}

export interface products_create extends Record<string, unknown> {
  billing_frequency?: string;
  charge_day?: number;
  created_at?: Date;
  created_by?: string;
  description?: string;
  display_on_storefront?: boolean;
  environment?: string;
  failed_payment_action?: string;
  first_payment_type?: string;
  image_url?: string;
  is_active?: boolean;
  metadata?: Record<string, unknown>;
  name?: string;
  organization_id?: string;
  product_id?: string;
  product_type?: string;
  updated_at?: Date;
  usage_aggregation?: string;
  usage_unit?: string;
  [key: string]: unknown;
}

export interface products_update extends Record<string, unknown> {
  billing_frequency?: string;
  charge_day?: number;
  created_at?: Date;
  created_by?: string;
  description?: string;
  display_on_storefront?: boolean;
  environment?: string;
  failed_payment_action?: string;
  first_payment_type?: string;
  image_url?: string;
  is_active?: boolean;
  metadata?: Record<string, unknown>;
  name?: string;
  organization_id?: string;
  product_id?: string;
  product_type?: string;
  updated_at?: Date;
  usage_aggregation?: string;
  usage_unit?: string;
  [key: string]: unknown;
}

export interface refunds extends Record<string, unknown> {
  amount?: number;
  created_at?: Date;
  environment?: string;
  fee_amount?: number;
  metadata?: Record<string, unknown>;
  reason?: string;
  refund_id?: string;
  refunded_amount?: number;
  spi_account_number?: string;
  spi_end2end_id?: string;
  spi_fund_return_status?: string;
  spi_motif_code?: string;
  spi_rejection_reason?: string;
  spi_retour_date_demande?: string;
  spi_retour_date_irrevocabilite?: string;
  spi_tx_id?: string;
  status?: string;
  transaction_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface refunds_create extends Record<string, unknown> {
  amount?: number;
  created_at?: Date;
  environment?: string;
  fee_amount?: number;
  metadata?: Record<string, unknown>;
  reason?: string;
  refund_id?: string;
  refunded_amount?: number;
  spi_account_number?: string;
  spi_end2end_id?: string;
  spi_fund_return_status?: string;
  spi_motif_code?: string;
  spi_rejection_reason?: string;
  spi_retour_date_demande?: string;
  spi_retour_date_irrevocabilite?: string;
  spi_tx_id?: string;
  status?: string;
  transaction_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface refunds_update extends Record<string, unknown> {
  amount?: number;
  created_at?: Date;
  environment?: string;
  fee_amount?: number;
  metadata?: Record<string, unknown>;
  reason?: string;
  refund_id?: string;
  refunded_amount?: number;
  spi_account_number?: string;
  spi_end2end_id?: string;
  spi_fund_return_status?: string;
  spi_motif_code?: string;
  spi_rejection_reason?: string;
  spi_retour_date_demande?: string;
  spi_retour_date_irrevocabilite?: string;
  spi_tx_id?: string;
  status?: string;
  transaction_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface spi_account_aliases extends Record<string, unknown> {
  account_number?: string;
  alias_id?: string;
  alias_key?: string;
  alias_type?: string;
  created_at?: Date;
  is_active?: boolean;
  is_default?: boolean;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface spi_account_aliases_create extends Record<string, unknown> {
  account_number?: string;
  alias_id?: string;
  alias_key?: string;
  alias_type?: string;
  created_at?: Date;
  is_active?: boolean;
  is_default?: boolean;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface spi_account_aliases_update extends Record<string, unknown> {
  account_number?: string;
  alias_id?: string;
  alias_key?: string;
  alias_type?: string;
  created_at?: Date;
  is_active?: boolean;
  is_default?: boolean;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface spi_qr_codes extends Record<string, unknown> {
  categorie?: string;
  checkout_session_id?: string;
  compte_paye?: string;
  created_at?: Date;
  created_by?: string;
  environment?: string;
  expires_at?: Date;
  is_active?: boolean;
  is_used?: boolean;
  metadata?: Record<string, unknown>;
  montant?: number;
  name?: string;
  organization_id?: string;
  payeur_alias?: string;
  payment_request_id?: string;
  plan_id?: string;
  product_id?: string;
  qr_code_data?: string;
  qr_code_id?: string;
  qr_code_image_data?: string;
  qr_code_image_url?: string;
  qr_code_type?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface spi_qr_codes_create extends Record<string, unknown> {
  categorie?: string;
  checkout_session_id?: string;
  compte_paye?: string;
  created_at?: Date;
  created_by?: string;
  environment?: string;
  expires_at?: Date;
  is_active?: boolean;
  is_used?: boolean;
  metadata?: Record<string, unknown>;
  montant?: number;
  name?: string;
  organization_id?: string;
  payeur_alias?: string;
  payment_request_id?: string;
  plan_id?: string;
  product_id?: string;
  qr_code_data?: string;
  qr_code_id?: string;
  qr_code_image_data?: string;
  qr_code_image_url?: string;
  qr_code_type?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface spi_qr_codes_update extends Record<string, unknown> {
  categorie?: string;
  checkout_session_id?: string;
  compte_paye?: string;
  created_at?: Date;
  created_by?: string;
  environment?: string;
  expires_at?: Date;
  is_active?: boolean;
  is_used?: boolean;
  metadata?: Record<string, unknown>;
  montant?: number;
  name?: string;
  organization_id?: string;
  payeur_alias?: string;
  payment_request_id?: string;
  plan_id?: string;
  product_id?: string;
  qr_code_data?: string;
  qr_code_id?: string;
  qr_code_image_data?: string;
  qr_code_image_url?: string;
  qr_code_type?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface subscriptions extends Record<string, unknown> {
  created_at?: Date;
  created_by?: string;
  customer_id?: string;
  end_date?: string;
  environment?: string;
  metadata?: Record<string, unknown>;
  next_billing_date?: string;
  organization_id?: string;
  price_id?: string;
  product_id?: string;
  start_date?: string;
  status?: string;
  subscription_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface subscriptions_create extends Record<string, unknown> {
  created_at?: Date;
  created_by?: string;
  customer_id?: string;
  end_date?: string;
  environment?: string;
  metadata?: Record<string, unknown>;
  next_billing_date?: string;
  organization_id?: string;
  price_id?: string;
  product_id?: string;
  start_date?: string;
  status?: string;
  subscription_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface subscriptions_update extends Record<string, unknown> {
  created_at?: Date;
  created_by?: string;
  customer_id?: string;
  end_date?: string;
  environment?: string;
  metadata?: Record<string, unknown>;
  next_billing_date?: string;
  organization_id?: string;
  price_id?: string;
  product_id?: string;
  start_date?: string;
  status?: string;
  subscription_id?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface transactions extends Record<string, unknown> {
  checkout_session_id?: string;
  created_at?: Date;
  currency_code?: string;
  customer_id?: string;
  description?: string;
  discount_amount?: number;
  environment?: string;
  fee_amount?: number;
  fee_structure_id?: string;
  gross_amount?: number;
  is_bnpl?: boolean;
  is_pos?: boolean;
  metadata?: Record<string, unknown>;
  net_amount?: number;
  organization_id?: string;
  payment_method_code?: string;
  price_id?: string;
  product_id?: string;
  provider_code?: string;
  quantity?: number;
  spi_account_number?: string;
  spi_bulk_instruction_id?: string;
  spi_date_envoi?: string;
  spi_date_irrevocabilite?: string;
  spi_discount_amount?: number;
  spi_discount_rate?: number;
  spi_end2end_id?: string;
  spi_payment_category?: string;
  spi_payment_flow_type?: string;
  spi_payment_status?: string;
  spi_rejection_reason?: string;
  spi_tx_id?: string;
  status?: string;
  subscription_id?: string;
  transaction_id?: string;
  transaction_type?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface transactions_create extends Record<string, unknown> {
  checkout_session_id?: string;
  created_at?: Date;
  currency_code?: string;
  customer_id?: string;
  description?: string;
  discount_amount?: number;
  environment?: string;
  fee_amount?: number;
  fee_structure_id?: string;
  gross_amount?: number;
  is_bnpl?: boolean;
  is_pos?: boolean;
  metadata?: Record<string, unknown>;
  net_amount?: number;
  organization_id?: string;
  payment_method_code?: string;
  price_id?: string;
  product_id?: string;
  provider_code?: string;
  quantity?: number;
  spi_account_number?: string;
  spi_bulk_instruction_id?: string;
  spi_date_envoi?: string;
  spi_date_irrevocabilite?: string;
  spi_discount_amount?: number;
  spi_discount_rate?: number;
  spi_end2end_id?: string;
  spi_payment_category?: string;
  spi_payment_flow_type?: string;
  spi_payment_status?: string;
  spi_rejection_reason?: string;
  spi_tx_id?: string;
  status?: string;
  subscription_id?: string;
  transaction_id?: string;
  transaction_type?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface transactions_update extends Record<string, unknown> {
  checkout_session_id?: string;
  created_at?: Date;
  currency_code?: string;
  customer_id?: string;
  description?: string;
  discount_amount?: number;
  environment?: string;
  fee_amount?: number;
  fee_structure_id?: string;
  gross_amount?: number;
  is_bnpl?: boolean;
  is_pos?: boolean;
  metadata?: Record<string, unknown>;
  net_amount?: number;
  organization_id?: string;
  payment_method_code?: string;
  price_id?: string;
  product_id?: string;
  provider_code?: string;
  quantity?: number;
  spi_account_number?: string;
  spi_bulk_instruction_id?: string;
  spi_date_envoi?: string;
  spi_date_irrevocabilite?: string;
  spi_discount_amount?: number;
  spi_discount_rate?: number;
  spi_end2end_id?: string;
  spi_payment_category?: string;
  spi_payment_flow_type?: string;
  spi_payment_status?: string;
  spi_rejection_reason?: string;
  spi_tx_id?: string;
  status?: string;
  subscription_id?: string;
  transaction_id?: string;
  transaction_type?: string;
  updated_at?: Date;
  [key: string]: unknown;
}

export interface webhook_delivery_logs extends Record<string, unknown> {
  attempt_number?: number;
  compte_paye?: string;
  compte_payeur?: string;
  created_at?: Date;
  event_type?: string;
  headers?: Record<string, unknown>;
  ip_address?: string;
  log_id?: string;
  montant?: number;
  organization_id?: string;
  payload?: Record<string, unknown>;
  request_duration_ms?: number;
  response_body?: string;
  response_status?: number;
  spi_event_code?: string;
  spi_tx_id?: string;
  success?: boolean;
  user_agent?: string;
  webhook_id?: string;
  [key: string]: unknown;
}

export interface webhook_delivery_logs_create extends Record<string, unknown> {
  attempt_number?: number;
  compte_paye?: string;
  compte_payeur?: string;
  created_at?: Date;
  event_type?: string;
  headers?: Record<string, unknown>;
  ip_address?: string;
  log_id?: string;
  montant?: number;
  organization_id?: string;
  payload?: Record<string, unknown>;
  request_duration_ms?: number;
  response_body?: string;
  response_status?: number;
  spi_event_code?: string;
  spi_tx_id?: string;
  success?: boolean;
  user_agent?: string;
  webhook_id?: string;
  [key: string]: unknown;
}

export interface webhook_delivery_logs_update extends Record<string, unknown> {
  attempt_number?: number;
  compte_paye?: string;
  compte_payeur?: string;
  created_at?: Date;
  event_type?: string;
  headers?: Record<string, unknown>;
  ip_address?: string;
  log_id?: string;
  montant?: number;
  organization_id?: string;
  payload?: Record<string, unknown>;
  request_duration_ms?: number;
  response_body?: string;
  response_status?: number;
  spi_event_code?: string;
  spi_tx_id?: string;
  success?: boolean;
  user_agent?: string;
  webhook_id?: string;
  [key: string]: unknown;
}

export interface webhooks extends Record<string, unknown> {
  authorized_events?: string;
  created_at?: Date;
  created_by?: string;
  deleted_at?: Date;
  environment?: string;
  is_active?: boolean;
  last_payload?: Record<string, unknown>;
  last_response_body?: string;
  last_response_status?: number;
  last_triggered_at?: Date;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  retry_count?: number;
  spi_event_types?: string;
  supports_spi?: boolean;
  updated_at?: Date;
  url?: string;
  verification_token?: string;
  webhook_id?: string;
  [key: string]: unknown;
}

export interface webhooks_create extends Record<string, unknown> {
  authorized_events?: string;
  created_at?: Date;
  created_by?: string;
  deleted_at?: Date;
  environment?: string;
  is_active?: boolean;
  last_payload?: Record<string, unknown>;
  last_response_body?: string;
  last_response_status?: number;
  last_triggered_at?: Date;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  retry_count?: number;
  spi_event_types?: string;
  supports_spi?: boolean;
  updated_at?: Date;
  url?: string;
  verification_token?: string;
  webhook_id?: string;
  [key: string]: unknown;
}

export interface webhooks_update extends Record<string, unknown> {
  authorized_events?: string;
  created_at?: Date;
  created_by?: string;
  deleted_at?: Date;
  environment?: string;
  is_active?: boolean;
  last_payload?: Record<string, unknown>;
  last_response_body?: string;
  last_response_status?: number;
  last_triggered_at?: Date;
  metadata?: Record<string, unknown>;
  organization_id?: string;
  retry_count?: number;
  spi_event_types?: string;
  supports_spi?: boolean;
  updated_at?: Date;
  url?: string;
  verification_token?: string;
  webhook_id?: string;
  [key: string]: unknown;
}

export interface Error extends Record<string, unknown> {
  error?: Record<string, unknown>;
  [key: string]: unknown;
}

