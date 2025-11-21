# PayoutsCreate

Request body for creating a payouts object. System-managed fields like `created_at`, `organization_id`, and IDs are automatically set.

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
from lomi_sdk.models.payouts_create import PayoutsCreate

# TODO update the JSON string below
json = "{}"
# create an instance of PayoutsCreate from a JSON string
payouts_create_instance = PayoutsCreate.from_json(json)
# print the JSON string representation of the object
print(PayoutsCreate.to_json())

# convert the object into a dict
payouts_create_dict = payouts_create_instance.to_dict()
# create an instance of PayoutsCreate from a dict
payouts_create_from_dict = PayoutsCreate.from_dict(payouts_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


