# EventsUpdate

Update events input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] 
**created_by** | **str** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**event_data** | **object** |  | [optional] 
**event_id** | **str** |  | [optional] 
**event_name** | **str** |  | [optional] 
**metadata** | **object** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 

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


