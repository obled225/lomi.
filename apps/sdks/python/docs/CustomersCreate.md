# CustomersCreate

Request body for creating a customers object. System-managed fields like `created_at`, `organization_id`, and IDs are automatically set.

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
from lomi.models.customers_create import CustomersCreate

# TODO update the JSON string below
json = "{}"
# create an instance of CustomersCreate from a JSON string
customers_create_instance = CustomersCreate.from_json(json)
# print the JSON string representation of the object
print(CustomersCreate.to_json())

# convert the object into a dict
customers_create_dict = customers_create_instance.to_dict()
# create an instance of CustomersCreate from a dict
customers_create_from_dict = CustomersCreate.from_dict(customers_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


