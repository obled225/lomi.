# SpiAccountAliasesCreate

Request body for creating a spi account aliases object. System-managed fields like `created_at`, `organization_id`, and IDs are automatically set.

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
from lomi.models.spi_account_aliases_create import SpiAccountAliasesCreate

# TODO update the JSON string below
json = "{}"
# create an instance of SpiAccountAliasesCreate from a JSON string
spi_account_aliases_create_instance = SpiAccountAliasesCreate.from_json(json)
# print the JSON string representation of the object
print(SpiAccountAliasesCreate.to_json())

# convert the object into a dict
spi_account_aliases_create_dict = spi_account_aliases_create_instance.to_dict()
# create an instance of SpiAccountAliasesCreate from a dict
spi_account_aliases_create_from_dict = SpiAccountAliasesCreate.from_dict(spi_account_aliases_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


