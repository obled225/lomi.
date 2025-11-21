# ProductsCreate

Create products input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_frequency** | **str** |  | [optional] 
**charge_day** | **float** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**created_by** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**display_on_storefront** | **bool** |  | [optional] 
**environment** | **str** |  | [optional] 
**failed_payment_action** | **str** |  | [optional] 
**first_payment_type** | **str** |  | [optional] 
**image_url** | **str** |  | [optional] 
**is_active** | **bool** |  | [optional] 
**metadata** | **object** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**product_type** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**usage_aggregation** | **str** |  | [optional] 
**usage_unit** | **str** |  | [optional] 

## Example

```python
from lomi_sdk.models.products_create import ProductsCreate

# TODO update the JSON string below
json = "{}"
# create an instance of ProductsCreate from a JSON string
products_create_instance = ProductsCreate.from_json(json)
# print the JSON string representation of the object
print(ProductsCreate.to_json())

# convert the object into a dict
products_create_dict = products_create_instance.to_dict()
# create an instance of ProductsCreate from a dict
products_create_from_dict = ProductsCreate.from_dict(products_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


