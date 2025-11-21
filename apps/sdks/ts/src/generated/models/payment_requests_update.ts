/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Update payment_requests input
 */
export type payment_requests_update = {
    amount?: number;
    created_at?: string;
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
    updated_at?: string;
};

