/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * checkout_sessions object
 */
export type checkout_sessions = {
    allow_coupon_code?: boolean;
    allow_quantity?: boolean;
    allowed_providers?: string;
    amount?: number;
    cancel_url?: string;
    checkout_session_id?: string;
    created_at?: string;
    created_by?: string;
    currency_code?: string;
    customer_email?: string;
    customer_id?: string;
    customer_name?: string;
    customer_phone?: string;
    environment?: string;
    expires_at?: string;
    installment_plan_id?: string;
    is_pos?: boolean;
    is_spi?: boolean;
    metadata?: Record<string, any>;
    organization_id?: string;
    payment_link_id?: string;
    payment_request_id?: string;
    price_id?: string;
    product_id?: string;
    public_description?: string;
    qr_code_data?: Record<string, any>;
    qr_code_type?: string;
    quantity?: number;
    spi_account_number?: string;
    spi_qr_code_id?: string;
    status?: string;
    subscription_id?: string;
    success_url?: string;
    title?: string;
    updated_at?: string;
};

