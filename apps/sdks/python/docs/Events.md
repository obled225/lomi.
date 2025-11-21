# Events

events resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**created_by** | **str** |  | [optional] [readonly] 
**customer_id** | **str** | Unique identifier (UUID format) | [optional] 
**event_data** | **object** |  | [optional] 
**event_id** | **str** | Unique identifier (UUID format) | [optional] 
**event_name** | **str** |  | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**organization_id** | **str** | Unique identifier (UUID format) | [optional] 
**product_id** | **str** | Unique identifier (UUID format) | [optional] 

## Example

```python
from lomi_sdk.models.events import Events

# TODO update the JSON string below
json = "{}"
# create an instance of Events from a JSON string
events_instance = Events.from_json(json)
# print the JSON string representation of the object
print(Events.to_json())

# convert the object into a dict
events_dict = events_instance.to_dict()
# create an instance of Events from a dict
events_from_dict = Events.from_dict(events_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


