# SpiAccountAliasesUpdate

Request body for updating a spi account aliases object. Only include fields you want to modify.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** |  | [optional] 
**alias_id** | **str** | Unique identifier (UUID format) | [optional] 
**alias_key** | **str** |  | [optional] 
**alias_type** | **str** |  | [optional] 
**is_active** | **bool** | Whether this resource is currently active | [optional] 
**is_default** | **bool** |  | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 

## Example

```python
from lomi.models.spi_account_aliases_update import SpiAccountAliasesUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of SpiAccountAliasesUpdate from a JSON string
spi_account_aliases_update_instance = SpiAccountAliasesUpdate.from_json(json)
# print the JSON string representation of the object
print(SpiAccountAliasesUpdate.to_json())

# convert the object into a dict
spi_account_aliases_update_dict = spi_account_aliases_update_instance.to_dict()
# create an instance of SpiAccountAliasesUpdate from a dict
spi_account_aliases_update_from_dict = SpiAccountAliasesUpdate.from_dict(spi_account_aliases_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


