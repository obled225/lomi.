# PaymentRequestsCreate

Request body for creating a payment requests object. System-managed fields like `created_at`, `organization_id`, and IDs are automatically set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in the smallest currency unit (e.g., cents for USD, same for XOF) | [optional] 
**currency_code** | **str** | Three-letter ISO currency code (e.g., XOF, USD, EUR) | [optional] 
**customer_id** | **str** | Unique identifier (UUID format) | [optional] 
**description** | **str** |  | [optional] 
**expiry_date** | **str** |  | [optional] 
**payment_link** | **str** |  | [optional] 
**payment_reference** | **str** |  | [optional] 
**spi_account_number** | **str** |  | [optional] 
**spi_bulk_instruction_id** | **str** | Unique identifier (UUID format) | [optional] 
**spi_confirmation** | **bool** |  | [optional] 
**spi_date_envoi** | **str** |  | [optional] 
**spi_date_irrevocabilite** | **str** |  | [optional] 
**spi_date_limite_paiement** | **str** |  | [optional] 
**spi_date_limite_reponse** | **str** |  | [optional] 
**spi_date_rejet** | **str** |  | [optional] 
**spi_debit_differe** | **bool** |  | [optional] 
**spi_end2end_id** | **str** | Unique identifier (UUID format) | [optional] 
**spi_payeur_alias** | **str** |  | [optional] 
**spi_payeur_nom** | **str** |  | [optional] 
**spi_payeur_pays** | **str** |  | [optional] 
**spi_payment_request_category** | **str** |  | [optional] 
**spi_payment_status** | **str** |  | [optional] 
**spi_ref_doc_numero** | **str** |  | [optional] 
**spi_ref_doc_type** | **str** |  | [optional] 
**spi_rejection_reason** | **str** |  | [optional] 
**spi_remise_amount** | **float** |  | [optional] 
**spi_remise_rate** | **float** |  | [optional] 
**spi_tx_id** | **str** | Unique identifier (UUID format) | [optional] 
**status** | **str** | Current status of the resource | [optional] 

## Example

```python
from lomi_sdk.models.payment_requests_create import PaymentRequestsCreate

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestsCreate from a JSON string
payment_requests_create_instance = PaymentRequestsCreate.from_json(json)
# print the JSON string representation of the object
print(PaymentRequestsCreate.to_json())

# convert the object into a dict
payment_requests_create_dict = payment_requests_create_instance.to_dict()
# create an instance of PaymentRequestsCreate from a dict
payment_requests_create_from_dict = PaymentRequestsCreate.from_dict(payment_requests_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


