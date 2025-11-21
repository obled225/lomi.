# PayoutsUpdate

Request body for updating a payouts object. Only include fields you want to modify.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Unique identifier (UUID format) | [optional] 
**amount** | **float** | Amount in the smallest currency unit (e.g., cents for USD, same for XOF) | [optional] 
**currency_code** | **str** | Three-letter ISO currency code (e.g., XOF, USD, EUR) | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**payment_method_code** | **str** |  | [optional] 
**payout_id** | **str** | Unique identifier (UUID format) | [optional] 
**payout_method_id** | **str** | Unique identifier (UUID format) | [optional] 
**provider_code** | **str** |  | [optional] 
**status** | **str** | Current status of the resource | [optional] 

## Example

```python
from lomi_sdk.models.payouts_update import PayoutsUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of PayoutsUpdate from a JSON string
payouts_update_instance = PayoutsUpdate.from_json(json)
# print the JSON string representation of the object
print(PayoutsUpdate.to_json())

# convert the object into a dict
payouts_update_dict = payouts_update_instance.to_dict()
# create an instance of PayoutsUpdate from a dict
payouts_update_from_dict = PayoutsUpdate.from_dict(payouts_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


