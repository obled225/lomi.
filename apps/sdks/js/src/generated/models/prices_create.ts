/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Create prices input
 */
export type prices_create = {
    amount?: number;
    billing_interval?: string;
    created_at?: string;
    currency_code?: string;
    environment?: string;
    is_active?: boolean;
    is_default?: boolean;
    maximum_amount?: number;
    metadata?: Record<string, any>;
    minimum_amount?: number;
    organization_id?: string;
    price_id?: string;
    pricing_model?: string;
    product_id?: string;
    provider_price_id?: string;
    provider_product_id?: string;
    updated_at?: string;
};

