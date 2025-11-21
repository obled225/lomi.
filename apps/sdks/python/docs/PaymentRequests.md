# PaymentRequests

payment requests resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in the smallest currency unit (e.g., cents for USD, same for XOF) | [optional] 
**created_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**created_by** | **str** |  | [optional] [readonly] 
**currency_code** | **str** | Three-letter ISO currency code (e.g., XOF, USD, EUR) | [optional] 
**customer_id** | **str** | Unique identifier (UUID format) | [optional] 
**description** | **str** |  | [optional] 
**environment** | **str** |  | [optional] 
**expiry_date** | **str** |  | [optional] 
**organization_id** | **str** | Unique identifier (UUID format) | [optional] 
**payment_link** | **str** |  | [optional] 
**payment_reference** | **str** |  | [optional] 
**request_id** | **str** | Unique identifier (UUID format) | [optional] [readonly] 
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
**updated_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 

## Example

```python
from lomi_sdk.models.payment_requests import PaymentRequests

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequests from a JSON string
payment_requests_instance = PaymentRequests.from_json(json)
# print the JSON string representation of the object
print(PaymentRequests.to_json())

# convert the object into a dict
payment_requests_dict = payment_requests_instance.to_dict()
# create an instance of PaymentRequests from a dict
payment_requests_from_dict = PaymentRequests.from_dict(payment_requests_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


