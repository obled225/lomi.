# # CustomerInvoices

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in the smallest currency unit (e.g., cents for USD, same for XOF) | [optional]
**created_at** | **\DateTime** | ISO 8601 datetime | [optional] [readonly]
**created_by** | **string** |  | [optional] [readonly]
**currency_code** | **string** | Three-letter ISO currency code (e.g., XOF, USD, EUR) | [optional]
**customer_id** | **string** | Unique identifier (UUID format) | [optional]
**customer_invoice_id** | **string** | Unique identifier (UUID format) | [optional]
**description** | **string** |  | [optional]
**due_date** | **string** |  | [optional]
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional]
**organization_id** | **string** | Unique identifier (UUID format) | [optional]
**status** | **string** | Current status of the resource | [optional]
**updated_at** | **\DateTime** | ISO 8601 datetime | [optional] [readonly]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
