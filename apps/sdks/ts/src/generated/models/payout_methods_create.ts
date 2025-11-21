/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Create payout_methods input
 */
export type payout_methods_create = {
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
    created_at?: string;
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
    updated_at?: string;
};

