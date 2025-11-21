/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Create payment_links input
 */
export type payment_links_create = {
    allow_coupon_code?: boolean;
    allow_quantity?: boolean;
    allowed_providers?: string;
    amount?: number;
    cancel_url?: string;
    created_at?: string;
    created_by?: string;
    currency_code?: string;
    environment?: string;
    expires_at?: string;
    is_active?: boolean;
    link_id?: string;
    link_type?: string;
    metadata?: Record<string, any>;
    organization_id?: string;
    price_id?: string;
    private_description?: string;
    product_id?: string;
    public_description?: string;
    quantity?: number;
    success_url?: string;
    title?: string;
    updated_at?: string;
    url?: string;
};

