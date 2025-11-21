# CustomersUpdate

Update customers input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**created_by** | **str** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**deleted_at** | **datetime** |  | [optional] 
**email** | **str** |  | [optional] 
**environment** | **str** |  | [optional] 
**is_business** | **bool** |  | [optional] 
**is_deleted** | **bool** |  | [optional] 
**metadata** | **object** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**phone_number** | **str** |  | [optional] 
**postal_code** | **str** |  | [optional] 
**spi_alias_mbno** | **str** |  | [optional] 
**spi_alias_shid** | **str** |  | [optional] 
**spi_primary_alias** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
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


