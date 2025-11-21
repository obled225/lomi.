# Subscriptions

subscriptions object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] 
**created_by** | **str** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**end_date** | **str** |  | [optional] 
**environment** | **str** |  | [optional] 
**metadata** | **object** |  | [optional] 
**next_billing_date** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**price_id** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**start_date** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**subscription_id** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from lomi_sdk.models.subscriptions import Subscriptions

# TODO update the JSON string below
json = "{}"
# create an instance of Subscriptions from a JSON string
subscriptions_instance = Subscriptions.from_json(json)
# print the JSON string representation of the object
print(Subscriptions.to_json())

# convert the object into a dict
subscriptions_dict = subscriptions_instance.to_dict()
# create an instance of Subscriptions from a dict
subscriptions_from_dict = Subscriptions.from_dict(subscriptions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


