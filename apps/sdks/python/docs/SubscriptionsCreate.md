# SubscriptionsCreate

Request body for creating a subscriptions object. System-managed fields like `created_at`, `organization_id`, and IDs are automatically set.

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
from lomi.models.subscriptions_create import SubscriptionsCreate

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


