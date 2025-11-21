# SubscriptionsUpdate

Update subscriptions input

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


