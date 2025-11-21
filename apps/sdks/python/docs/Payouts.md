# Payouts

payouts resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Unique identifier (UUID format) | [optional] 
**amount** | **float** | Amount in the smallest currency unit (e.g., cents for USD, same for XOF) | [optional] 
**created_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**created_by** | **str** |  | [optional] [readonly] 
**currency_code** | **str** | Three-letter ISO currency code (e.g., XOF, USD, EUR) | [optional] 
**environment** | **str** |  | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**organization_id** | **str** | Unique identifier (UUID format) | [optional] 
**payment_method_code** | **str** |  | [optional] 
**payout_id** | **str** | Unique identifier (UUID format) | [optional] 
**payout_method_id** | **str** | Unique identifier (UUID format) | [optional] 
**provider_code** | **str** |  | [optional] 
**status** | **str** | Current status of the resource | [optional] 
**updated_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 

## Example

```python
from lomi.models.payouts import Payouts

# TODO update the JSON string below
json = "{}"
# create an instance of Payouts from a JSON string
payouts_instance = Payouts.from_json(json)
# print the JSON string representation of the object
print(Payouts.to_json())

# convert the object into a dict
payouts_dict = payouts_instance.to_dict()
# create an instance of Payouts from a dict
payouts_from_dict = Payouts.from_dict(payouts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


