/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Create discount_coupons input
 */
export type discount_coupons_create = {
    applies_to_product_types?: string;
    code?: string;
    coupon_id?: string;
    created_at?: string;
    current_uses?: number;
    customer_type?: string;
    description?: string;
    discount_fixed_amount?: number;
    discount_percentage?: number;
    discount_type?: string;
    environment?: string;
    expires_at?: string;
    is_active?: boolean;
    is_organization_wide?: boolean;
    max_quantity_per_use?: number;
    max_uses?: number;
    organization_id?: string;
    scope_type?: string;
    updated_at?: string;
    usage_frequency_limit?: string;
    usage_limit_value?: number;
    valid_from?: string;
};

