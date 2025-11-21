# PricesCreate

Create prices input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** |  | [optional] 
**billing_interval** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**currency_code** | **str** |  | [optional] 
**environment** | **str** |  | [optional] 
**is_active** | **bool** |  | [optional] 
**is_default** | **bool** |  | [optional] 
**maximum_amount** | **float** |  | [optional] 
**metadata** | **object** |  | [optional] 
**minimum_amount** | **float** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**price_id** | **str** |  | [optional] 
**pricing_model** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**provider_price_id** | **str** |  | [optional] 
**provider_product_id** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from lomi_sdk.models.prices_create import PricesCreate

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


