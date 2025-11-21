/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Create webhooks input
 */
export type webhooks_create = {
    authorized_events?: string;
    created_at?: string;
    created_by?: string;
    deleted_at?: string;
    environment?: string;
    is_active?: boolean;
    last_payload?: Record<string, any>;
    last_response_body?: string;
    last_response_status?: number;
    last_triggered_at?: string;
    metadata?: Record<string, any>;
    organization_id?: string;
    retry_count?: number;
    spi_event_types?: string;
    supports_spi?: boolean;
    updated_at?: string;
    url?: string;
    verification_token?: string;
    webhook_id?: string;
};

