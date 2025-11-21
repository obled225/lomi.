# Prices

prices resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in the smallest currency unit (e.g., cents for USD, same for XOF) | [optional] 
**billing_interval** | **str** |  | [optional] 
**created_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**currency_code** | **str** | Three-letter ISO currency code (e.g., XOF, USD, EUR) | [optional] 
**environment** | **str** |  | [optional] 
**is_active** | **bool** | Whether this resource is currently active | [optional] 
**is_default** | **bool** |  | [optional] 
**maximum_amount** | **float** |  | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**minimum_amount** | **float** |  | [optional] 
**organization_id** | **str** | Unique identifier (UUID format) | [optional] 
**price_id** | **str** | Unique identifier (UUID format) | [optional] 
**pricing_model** | **str** |  | [optional] 
**product_id** | **str** | Unique identifier (UUID format) | [optional] 
**provider_price_id** | **str** | Unique identifier (UUID format) | [optional] 
**provider_product_id** | **str** | Unique identifier (UUID format) | [optional] 
**updated_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 

## Example

```python
from lomi_sdk.models.prices import Prices

# TODO update the JSON string below
json = "{}"
# create an instance of Prices from a JSON string
prices_instance = Prices.from_json(json)
# print the JSON string representation of the object
print(Prices.to_json())

# convert the object into a dict
prices_dict = prices_instance.to_dict()
# create an instance of Prices from a dict
prices_from_dict = Prices.from_dict(prices_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


