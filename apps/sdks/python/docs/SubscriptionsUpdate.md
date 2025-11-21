# SubscriptionsUpdate

Request body for updating a subscriptions object. Only include fields you want to modify.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **str** | Unique identifier (UUID format) | [optional] 
**end_date** | **str** |  | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**next_billing_date** | **str** |  | [optional] 
**price_id** | **str** | Unique identifier (UUID format) | [optional] 
**product_id** | **str** | Unique identifier (UUID format) | [optional] 
**start_date** | **str** |  | [optional] 
**status** | **str** | Current status of the resource | [optional] 

## Example

```python
from lomi_sdk.models.subscriptions_update import SubscriptionsUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionsUpdate from a JSON string
subscriptions_update_instance = SubscriptionsUpdate.from_json(json)
# print the JSON string representation of the object
print(SubscriptionsUpdate.to_json())

# convert the object into a dict
subscriptions_update_dict = subscriptions_update_instance.to_dict()
# create an instance of SubscriptionsUpdate from a dict
subscriptions_update_from_dict = SubscriptionsUpdate.from_dict(subscriptions_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


