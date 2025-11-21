# Refunds

refunds object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**environment** | **str** |  | [optional] 
**fee_amount** | **float** |  | [optional] 
**metadata** | **object** |  | [optional] 
**reason** | **str** |  | [optional] 
**refund_id** | **str** |  | [optional] 
**refunded_amount** | **float** |  | [optional] 
**spi_account_number** | **str** |  | [optional] 
**spi_end2end_id** | **str** |  | [optional] 
**spi_fund_return_status** | **str** |  | [optional] 
**spi_motif_code** | **str** |  | [optional] 
**spi_rejection_reason** | **str** |  | [optional] 
**spi_retour_date_demande** | **str** |  | [optional] 
**spi_retour_date_irrevocabilite** | **str** |  | [optional] 
**spi_tx_id** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**transaction_id** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from lomi_sdk.models.refunds import Refunds

# TODO update the JSON string below
json = "{}"
# create an instance of Refunds from a JSON string
refunds_instance = Refunds.from_json(json)
# print the JSON string representation of the object
print(Refunds.to_json())

# convert the object into a dict
refunds_dict = refunds_instance.to_dict()
# create an instance of Refunds from a dict
refunds_from_dict = Refunds.from_dict(refunds_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


