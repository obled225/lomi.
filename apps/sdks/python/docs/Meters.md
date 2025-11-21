# Meters

meters object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | **object** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**filter** | **object** |  | [optional] 
**is_active** | **bool** |  | [optional] 
**meter_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from lomi_sdk.models.meters import Meters

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


