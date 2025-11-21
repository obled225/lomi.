# MetersUpdate

Update meters input

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
from lomi_sdk.models.meters_update import MetersUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of MetersUpdate from a JSON string
meters_update_instance = MetersUpdate.from_json(json)
# print the JSON string representation of the object
print(MetersUpdate.to_json())

# convert the object into a dict
meters_update_dict = meters_update_instance.to_dict()
# create an instance of MetersUpdate from a dict
meters_update_from_dict = MetersUpdate.from_dict(meters_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


