# PayoutsCreate

Create payouts input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** |  | [optional] 
**amount** | **float** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**created_by** | **str** |  | [optional] 
**currency_code** | **str** |  | [optional] 
**environment** | **str** |  | [optional] 
**metadata** | **object** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**payment_method_code** | **str** |  | [optional] 
**payout_id** | **str** |  | [optional] 
**payout_method_id** | **str** |  | [optional] 
**provider_code** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

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


