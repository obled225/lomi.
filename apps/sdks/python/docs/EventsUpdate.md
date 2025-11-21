# EventsUpdate

Request body for updating a events object. Only include fields you want to modify.

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
from lomi_sdk.models.events_update import EventsUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of EventsUpdate from a JSON string
events_update_instance = EventsUpdate.from_json(json)
# print the JSON string representation of the object
print(EventsUpdate.to_json())

# convert the object into a dict
events_update_dict = events_update_instance.to_dict()
# create an instance of EventsUpdate from a dict
events_update_from_dict = EventsUpdate.from_dict(events_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


