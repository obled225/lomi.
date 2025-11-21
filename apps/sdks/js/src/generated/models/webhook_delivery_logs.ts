/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * webhook_delivery_logs object
 */
export type webhook_delivery_logs = {
    attempt_number?: number;
    compte_paye?: string;
    compte_payeur?: string;
    created_at?: string;
    event_type?: string;
    headers?: Record<string, any>;
    ip_address?: string;
    log_id?: string;
    montant?: number;
    organization_id?: string;
    payload?: Record<string, any>;
    request_duration_ms?: number;
    response_body?: string;
    response_status?: number;
    spi_event_code?: string;
    spi_tx_id?: string;
    success?: boolean;
    user_agent?: string;
    webhook_id?: string;
};

