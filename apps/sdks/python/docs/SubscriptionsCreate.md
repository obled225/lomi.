# SubscriptionsCreate

Create subscriptions input

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
from lomi_sdk.models.subscriptions_create import SubscriptionsCreate

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionsCreate from a JSON string
subscriptions_create_instance = SubscriptionsCreate.from_json(json)
# print the JSON string representation of the object
print(SubscriptionsCreate.to_json())

# convert the object into a dict
subscriptions_create_dict = subscriptions_create_instance.to_dict()
# create an instance of SubscriptionsCreate from a dict
subscriptions_create_from_dict = SubscriptionsCreate.from_dict(subscriptions_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


