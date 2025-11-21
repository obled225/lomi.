# ProductsCreate

Request body for creating a products object. System-managed fields like `created_at`, `organization_id`, and IDs are automatically set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_frequency** | **str** |  | [optional] 
**charge_day** | **float** |  | [optional] 
**description** | **str** |  | [optional] 
**display_on_storefront** | **bool** |  | [optional] 
**failed_payment_action** | **str** |  | [optional] 
**first_payment_type** | **str** |  | [optional] 
**image_url** | **str** | URL/URI | [optional] 
**is_active** | **bool** | Whether this resource is currently active | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**name** | **str** |  | [optional] 
**product_type** | **str** |  | [optional] 
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


