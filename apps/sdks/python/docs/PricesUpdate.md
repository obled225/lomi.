# PricesUpdate

Request body for updating a prices object. Only include fields you want to modify.

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
from lomi_sdk.models.prices_update import PricesUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of PricesUpdate from a JSON string
prices_update_instance = PricesUpdate.from_json(json)
# print the JSON string representation of the object
print(PricesUpdate.to_json())

# convert the object into a dict
prices_update_dict = prices_update_instance.to_dict()
# create an instance of PricesUpdate from a dict
prices_update_from_dict = PricesUpdate.from_dict(prices_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


