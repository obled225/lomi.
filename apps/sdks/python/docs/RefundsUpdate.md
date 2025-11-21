# RefundsUpdate

Request body for updating a refunds object. Only include fields you want to modify.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in the smallest currency unit (e.g., cents for USD, same for XOF) | [optional] 
**fee_amount** | **float** |  | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**reason** | **str** |  | [optional] 
**refund_id** | **str** | Unique identifier (UUID format) | [optional] 
**refunded_amount** | **float** |  | [optional] 
**spi_account_number** | **str** |  | [optional] 
**spi_end2end_id** | **str** | Unique identifier (UUID format) | [optional] 
**spi_fund_return_status** | **str** |  | [optional] 
**spi_motif_code** | **str** |  | [optional] 
**spi_rejection_reason** | **str** |  | [optional] 
**spi_retour_date_demande** | **str** |  | [optional] 
**spi_retour_date_irrevocabilite** | **str** |  | [optional] 
**spi_tx_id** | **str** | Unique identifier (UUID format) | [optional] 
**status** | **str** | Current status of the resource | [optional] 
**transaction_id** | **str** | Unique identifier (UUID format) | [optional] 

## Example

```python
from lomi.models.refunds_update import RefundsUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of RefundsUpdate from a JSON string
refunds_update_instance = RefundsUpdate.from_json(json)
# print the JSON string representation of the object
print(RefundsUpdate.to_json())

# convert the object into a dict
refunds_update_dict = refunds_update_instance.to_dict()
# create an instance of RefundsUpdate from a dict
refunds_update_from_dict = RefundsUpdate.from_dict(refunds_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


