/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Create transactions input
 */
export type transactions_create = {
    checkout_session_id?: string;
    created_at?: string;
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
    metadata?: Record<string, any>;
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
    updated_at?: string;
};

