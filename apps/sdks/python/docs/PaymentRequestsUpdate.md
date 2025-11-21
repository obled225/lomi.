# PaymentRequestsUpdate

Update payment_requests input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**created_by** | **str** |  | [optional] 
**currency_code** | **str** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**environment** | **str** |  | [optional] 
**expiry_date** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**payment_link** | **str** |  | [optional] 
**payment_reference** | **str** |  | [optional] 
**request_id** | **str** |  | [optional] 
**spi_account_number** | **str** |  | [optional] 
**spi_bulk_instruction_id** | **str** |  | [optional] 
**spi_confirmation** | **bool** |  | [optional] 
**spi_date_envoi** | **str** |  | [optional] 
**spi_date_irrevocabilite** | **str** |  | [optional] 
**spi_date_limite_paiement** | **str** |  | [optional] 
**spi_date_limite_reponse** | **str** |  | [optional] 
**spi_date_rejet** | **str** |  | [optional] 
**spi_debit_differe** | **bool** |  | [optional] 
**spi_end2end_id** | **str** |  | [optional] 
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
**spi_tx_id** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from lomi_sdk.models.payment_requests_update import PaymentRequestsUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestsUpdate from a JSON string
payment_requests_update_instance = PaymentRequestsUpdate.from_json(json)
# print the JSON string representation of the object
print(PaymentRequestsUpdate.to_json())

# convert the object into a dict
payment_requests_update_dict = payment_requests_update_instance.to_dict()
# create an instance of PaymentRequestsUpdate from a dict
payment_requests_update_from_dict = PaymentRequestsUpdate.from_dict(payment_requests_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


