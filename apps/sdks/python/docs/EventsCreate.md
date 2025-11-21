# EventsCreate

Request body for creating a events object. System-managed fields like `created_at`, `organization_id`, and IDs are automatically set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **str** | Unique identifier (UUID format) | [optional] 
**event_data** | **object** |  | [optional] 
**event_id** | **str** | Unique identifier (UUID format) | [optional] 
**event_name** | **str** |  | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**product_id** | **str** | Unique identifier (UUID format) | [optional] 

## Example

```python
from lomi_sdk.models.events_create import EventsCreate

# TODO update the JSON string below
json = "{}"
# create an instance of EventsCreate from a JSON string
events_create_instance = EventsCreate.from_json(json)
# print the JSON string representation of the object
print(EventsCreate.to_json())

# convert the object into a dict
events_create_dict = events_create_instance.to_dict()
# create an instance of EventsCreate from a dict
events_create_from_dict = EventsCreate.from_dict(events_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


