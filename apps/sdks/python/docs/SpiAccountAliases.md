# SpiAccountAliases

spi account aliases resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** |  | [optional] 
**alias_id** | **str** | Unique identifier (UUID format) | [optional] 
**alias_key** | **str** |  | [optional] 
**alias_type** | **str** |  | [optional] 
**created_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**is_active** | **bool** | Whether this resource is currently active | [optional] 
**is_default** | **bool** |  | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**organization_id** | **str** | Unique identifier (UUID format) | [optional] 
**updated_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 

## Example

```python
from lomi.models.spi_account_aliases import SpiAccountAliases

# TODO update the JSON string below
json = "{}"
# create an instance of SpiAccountAliases from a JSON string
spi_account_aliases_instance = SpiAccountAliases.from_json(json)
# print the JSON string representation of the object
print(SpiAccountAliases.to_json())

# convert the object into a dict
spi_account_aliases_dict = spi_account_aliases_instance.to_dict()
# create an instance of SpiAccountAliases from a dict
spi_account_aliases_from_dict = SpiAccountAliases.from_dict(spi_account_aliases_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


