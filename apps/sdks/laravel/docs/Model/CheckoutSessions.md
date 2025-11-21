# # CheckoutSessions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_coupon_code** | **bool** |  | [optional]
**allow_quantity** | **bool** |  | [optional]
**allowed_providers** | **string** |  | [optional]
**amount** | **float** | Amount in the smallest currency unit (e.g., cents for USD, same for XOF) | [optional]
**cancel_url** | **string** | URL/URI | [optional]
**checkout_session_id** | **string** | Unique identifier (UUID format) | [optional]
**created_at** | **\DateTime** | ISO 8601 datetime | [optional] [readonly]
**created_by** | **string** |  | [optional] [readonly]
**currency_code** | **string** | Three-letter ISO currency code (e.g., XOF, USD, EUR) | [optional]
**customer_email** | **string** | Email address | [optional]
**customer_id** | **string** | Unique identifier (UUID format) | [optional]
**customer_name** | **string** |  | [optional]
**customer_phone** | **string** |  | [optional]
**environment** | **string** |  | [optional]
**expires_at** | **\DateTime** | ISO 8601 datetime | [optional]
**installment_plan_id** | **string** | Unique identifier (UUID format) | [optional]
**is_pos** | **bool** |  | [optional]
**is_spi** | **bool** |  | [optional]
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional]
**organization_id** | **string** | Unique identifier (UUID format) | [optional]
**payment_link_id** | **string** | Unique identifier (UUID format) | [optional]
**payment_request_id** | **string** | Unique identifier (UUID format) | [optional]
**price_id** | **string** | Unique identifier (UUID format) | [optional]
**product_id** | **string** | Unique identifier (UUID format) | [optional]
**public_description** | **string** |  | [optional]
**qr_code_data** | **object** |  | [optional]
**qr_code_type** | **string** |  | [optional]
**quantity** | **float** |  | [optional]
**spi_account_number** | **string** |  | [optional]
**spi_qr_code_id** | **string** | Unique identifier (UUID format) | [optional]
**status** | **string** | Current status of the resource | [optional]
**subscription_id** | **string** | Unique identifier (UUID format) | [optional]
**success_url** | **string** | URL/URI | [optional]
**title** | **string** |  | [optional]
**updated_at** | **\DateTime** | ISO 8601 datetime | [optional] [readonly]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
