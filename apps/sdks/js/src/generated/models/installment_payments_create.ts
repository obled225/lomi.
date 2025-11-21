/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Create installment_payments input
 */
export type installment_payments_create = {
    amount?: number;
    created_at?: string;
    due_date?: string;
    installment_id?: string;
    interest_amount?: number;
    paid_at?: string;
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
    updated_at?: string;
};

