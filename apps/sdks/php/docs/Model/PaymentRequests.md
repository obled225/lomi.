# # PaymentRequests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in the smallest currency unit (e.g., cents for USD, same for XOF) | [optional]
**created_at** | **\DateTime** | ISO 8601 datetime | [optional] [readonly]
**created_by** | **string** |  | [optional] [readonly]
**currency_code** | **string** | Three-letter ISO currency code (e.g., XOF, USD, EUR) | [optional]
**customer_id** | **string** | Unique identifier (UUID format) | [optional]
**description** | **string** |  | [optional]
**environment** | **string** |  | [optional]
**expiry_date** | **string** |  | [optional]
**organization_id** | **string** | Unique identifier (UUID format) | [optional]
**payment_link** | **string** |  | [optional]
**payment_reference** | **string** |  | [optional]
**request_id** | **string** | Unique identifier (UUID format) | [optional] [readonly]
**spi_account_number** | **string** |  | [optional]
**spi_bulk_instruction_id** | **string** | Unique identifier (UUID format) | [optional]
**spi_confirmation** | **bool** |  | [optional]
**spi_date_envoi** | **string** |  | [optional]
**spi_date_irrevocabilite** | **string** |  | [optional]
**spi_date_limite_paiement** | **string** |  | [optional]
**spi_date_limite_reponse** | **string** |  | [optional]
**spi_date_rejet** | **string** |  | [optional]
**spi_debit_differe** | **bool** |  | [optional]
**spi_end2end_id** | **string** | Unique identifier (UUID format) | [optional]
**spi_payeur_alias** | **string** |  | [optional]
**spi_payeur_nom** | **string** |  | [optional]
**spi_payeur_pays** | **string** |  | [optional]
**spi_payment_request_category** | **string** |  | [optional]
**spi_payment_status** | **string** |  | [optional]
**spi_ref_doc_numero** | **string** |  | [optional]
**spi_ref_doc_type** | **string** |  | [optional]
**spi_rejection_reason** | **string** |  | [optional]
**spi_remise_amount** | **float** |  | [optional]
**spi_remise_rate** | **float** |  | [optional]
**spi_tx_id** | **string** | Unique identifier (UUID format) | [optional]
**status** | **string** | Current status of the resource | [optional]
**updated_at** | **\DateTime** | ISO 8601 datetime | [optional] [readonly]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
