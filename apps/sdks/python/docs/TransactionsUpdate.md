# TransactionsUpdate

Update transactions input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkout_session_id** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**currency_code** | **str** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**discount_amount** | **float** |  | [optional] 
**environment** | **str** |  | [optional] 
**fee_amount** | **float** |  | [optional] 
**fee_structure_id** | **str** |  | [optional] 
**gross_amount** | **float** |  | [optional] 
**is_bnpl** | **bool** |  | [optional] 
**is_pos** | **bool** |  | [optional] 
**metadata** | **object** |  | [optional] 
**net_amount** | **float** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**payment_method_code** | **str** |  | [optional] 
**price_id** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**provider_code** | **str** |  | [optional] 
**quantity** | **float** |  | [optional] 
**spi_account_number** | **str** |  | [optional] 
**spi_bulk_instruction_id** | **str** |  | [optional] 
**spi_date_envoi** | **str** |  | [optional] 
**spi_date_irrevocabilite** | **str** |  | [optional] 
**spi_discount_amount** | **float** |  | [optional] 
**spi_discount_rate** | **float** |  | [optional] 
**spi_end2end_id** | **str** |  | [optional] 
**spi_payment_category** | **str** |  | [optional] 
**spi_payment_flow_type** | **str** |  | [optional] 
**spi_payment_status** | **str** |  | [optional] 
**spi_rejection_reason** | **str** |  | [optional] 
**spi_tx_id** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**subscription_id** | **str** |  | [optional] 
**transaction_id** | **str** |  | [optional] 
**transaction_type** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from lomi_sdk.models.transactions_update import TransactionsUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionsUpdate from a JSON string
transactions_update_instance = TransactionsUpdate.from_json(json)
# print the JSON string representation of the object
print(TransactionsUpdate.to_json())

# convert the object into a dict
transactions_update_dict = transactions_update_instance.to_dict()
# create an instance of TransactionsUpdate from a dict
transactions_update_from_dict = TransactionsUpdate.from_dict(transactions_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


