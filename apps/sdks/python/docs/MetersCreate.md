# MetersCreate

Request body for creating a meters object. System-managed fields like `created_at`, `organization_id`, and IDs are automatically set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | **object** |  | [optional] 
**filter** | **object** |  | [optional] 
**is_active** | **bool** | Whether this resource is currently active | [optional] 
**meter_id** | **str** | Unique identifier (UUID format) | [optional] 
**name** | **str** |  | [optional] 
**product_id** | **str** | Unique identifier (UUID format) | [optional] 

## Example

```python
from lomi_sdk.models.meters_create import MetersCreate

# TODO update the JSON string below
json = "{}"
# create an instance of MetersCreate from a JSON string
meters_create_instance = MetersCreate.from_json(json)
# print the JSON string representation of the object
print(MetersCreate.to_json())

# convert the object into a dict
meters_create_dict = meters_create_instance.to_dict()
# create an instance of MetersCreate from a dict
meters_create_from_dict = MetersCreate.from_dict(meters_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


