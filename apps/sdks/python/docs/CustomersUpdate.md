# CustomersUpdate

Request body for updating a customers object. Only include fields you want to modify.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**email** | **str** | Email address | [optional] 
**is_business** | **bool** |  | [optional] 
**is_deleted** | **bool** | Soft deletion flag | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**name** | **str** |  | [optional] 
**phone_number** | **str** |  | [optional] 
**postal_code** | **str** |  | [optional] 
**spi_alias_mbno** | **str** |  | [optional] 
**spi_alias_shid** | **str** |  | [optional] 
**spi_primary_alias** | **str** |  | [optional] 
**whatsapp_number** | **str** |  | [optional] 

## Example

```python
from lomi_sdk.models.customers_update import CustomersUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of CustomersUpdate from a JSON string
customers_update_instance = CustomersUpdate.from_json(json)
# print the JSON string representation of the object
print(CustomersUpdate.to_json())

# convert the object into a dict
customers_update_dict = customers_update_instance.to_dict()
# create an instance of CustomersUpdate from a dict
customers_update_from_dict = CustomersUpdate.from_dict(customers_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


