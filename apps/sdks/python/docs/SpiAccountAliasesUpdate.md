# SpiAccountAliasesUpdate

Update spi_account_aliases input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** |  | [optional] 
**alias_id** | **str** |  | [optional] 
**alias_key** | **str** |  | [optional] 
**alias_type** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**is_active** | **bool** |  | [optional] 
**is_default** | **bool** |  | [optional] 
**metadata** | **object** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from lomi_sdk.models.spi_account_aliases_update import SpiAccountAliasesUpdate

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


