# TransactionsUpdate

Request body for updating a transactions object. Only include fields you want to modify.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkout_session_id** | **str** | Unique identifier (UUID format) | [optional] 
**currency_code** | **str** | Three-letter ISO currency code (e.g., XOF, USD, EUR) | [optional] 
**customer_id** | **str** | Unique identifier (UUID format) | [optional] 
**description** | **str** |  | [optional] 
**discount_amount** | **float** |  | [optional] 
**fee_amount** | **float** |  | [optional] 
**fee_structure_id** | **str** | Unique identifier (UUID format) | [optional] 
**gross_amount** | **float** |  | [optional] 
**is_bnpl** | **bool** |  | [optional] 
**is_pos** | **bool** |  | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**net_amount** | **float** |  | [optional] 
**payment_method_code** | **str** |  | [optional] 
**price_id** | **str** | Unique identifier (UUID format) | [optional] 
**product_id** | **str** | Unique identifier (UUID format) | [optional] 
**provider_code** | **str** |  | [optional] 
**quantity** | **float** |  | [optional] 
**spi_account_number** | **str** |  | [optional] 
**spi_bulk_instruction_id** | **str** | Unique identifier (UUID format) | [optional] 
**spi_date_envoi** | **str** |  | [optional] 
**spi_date_irrevocabilite** | **str** |  | [optional] 
**spi_discount_amount** | **float** |  | [optional] 
**spi_discount_rate** | **float** |  | [optional] 
**spi_end2end_id** | **str** | Unique identifier (UUID format) | [optional] 
**spi_payment_category** | **str** |  | [optional] 
**spi_payment_flow_type** | **str** |  | [optional] 
**spi_payment_status** | **str** |  | [optional] 
**spi_rejection_reason** | **str** |  | [optional] 
**spi_tx_id** | **str** | Unique identifier (UUID format) | [optional] 
**status** | **str** | Current status of the resource | [optional] 
**subscription_id** | **str** | Unique identifier (UUID format) | [optional] 
**transaction_type** | **str** |  | [optional] 

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


