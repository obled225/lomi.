# Meters

meters resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | **object** |  | [optional] 
**created_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**filter** | **object** |  | [optional] 
**is_active** | **bool** | Whether this resource is currently active | [optional] 
**meter_id** | **str** | Unique identifier (UUID format) | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** | Unique identifier (UUID format) | [optional] 
**product_id** | **str** | Unique identifier (UUID format) | [optional] 
**updated_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 

## Example

```python
from lomi.models.meters import Meters

# TODO update the JSON string below
json = "{}"
# create an instance of Meters from a JSON string
meters_instance = Meters.from_json(json)
# print the JSON string representation of the object
print(Meters.to_json())

# convert the object into a dict
meters_dict = meters_instance.to_dict()
# create an instance of Meters from a dict
meters_from_dict = Meters.from_dict(meters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


