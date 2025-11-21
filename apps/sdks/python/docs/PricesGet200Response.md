# PricesGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Prices]**](Prices.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.prices_get200_response import PricesGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PricesGet200Response from a JSON string
prices_get200_response_instance = PricesGet200Response.from_json(json)
# print the JSON string representation of the object
print(PricesGet200Response.to_json())

# convert the object into a dict
prices_get200_response_dict = prices_get200_response_instance.to_dict()
# create an instance of PricesGet200Response from a dict
prices_get200_response_from_dict = PricesGet200Response.from_dict(prices_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


