# Products

products resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_frequency** | **str** |  | [optional] 
**charge_day** | **float** |  | [optional] 
**created_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**created_by** | **str** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**display_on_storefront** | **bool** |  | [optional] 
**environment** | **str** |  | [optional] 
**failed_payment_action** | **str** |  | [optional] 
**first_payment_type** | **str** |  | [optional] 
**image_url** | **str** | URL/URI | [optional] 
**is_active** | **bool** | Whether this resource is currently active | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** | Unique identifier (UUID format) | [optional] 
**product_id** | **str** | Unique identifier (UUID format) | [optional] [readonly] 
**product_type** | **str** |  | [optional] 
**updated_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**usage_aggregation** | **str** |  | [optional] 
**usage_unit** | **str** |  | [optional] 

## Example

```python
from lomi.models.products import Products

# TODO update the JSON string below
json = "{}"
# create an instance of Products from a JSON string
products_instance = Products.from_json(json)
# print the JSON string representation of the object
print(Products.to_json())

# convert the object into a dict
products_dict = products_instance.to_dict()
# create an instance of Products from a dict
products_from_dict = Products.from_dict(products_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


