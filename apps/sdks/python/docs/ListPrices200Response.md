# ListPrices200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Prices]**](Prices.md) |  | [optional] 
**pagination** | [**ListCustomers200ResponsePagination**](ListCustomers200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi.models.list_prices200_response import ListPrices200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListPrices200Response from a JSON string
list_prices200_response_instance = ListPrices200Response.from_json(json)
# print the JSON string representation of the object
print(ListPrices200Response.to_json())

# convert the object into a dict
list_prices200_response_dict = list_prices200_response_instance.to_dict()
# create an instance of ListPrices200Response from a dict
list_prices200_response_from_dict = ListPrices200Response.from_dict(list_prices200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


