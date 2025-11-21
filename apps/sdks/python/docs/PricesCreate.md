# PricesCreate

Request body for creating a prices object. System-managed fields like `created_at`, `organization_id`, and IDs are automatically set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in the smallest currency unit (e.g., cents for USD, same for XOF) | [optional] 
**billing_interval** | **str** |  | [optional] 
**currency_code** | **str** | Three-letter ISO currency code (e.g., XOF, USD, EUR) | [optional] 
**is_active** | **bool** | Whether this resource is currently active | [optional] 
**is_default** | **bool** |  | [optional] 
**maximum_amount** | **float** |  | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**minimum_amount** | **float** |  | [optional] 
**price_id** | **str** | Unique identifier (UUID format) | [optional] 
**pricing_model** | **str** |  | [optional] 
**product_id** | **str** | Unique identifier (UUID format) | [optional] 
**provider_price_id** | **str** | Unique identifier (UUID format) | [optional] 
**provider_product_id** | **str** | Unique identifier (UUID format) | [optional] 

## Example

```python
from lomi.models.prices_create import PricesCreate

# TODO update the JSON string below
json = "{}"
# create an instance of PricesCreate from a JSON string
prices_create_instance = PricesCreate.from_json(json)
# print the JSON string representation of the object
print(PricesCreate.to_json())

# convert the object into a dict
prices_create_dict = prices_create_instance.to_dict()
# create an instance of PricesCreate from a dict
prices_create_from_dict = PricesCreate.from_dict(prices_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


