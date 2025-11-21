# ProductsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Products]**](Products.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.products_get200_response import ProductsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductsGet200Response from a JSON string
products_get200_response_instance = ProductsGet200Response.from_json(json)
# print the JSON string representation of the object
print(ProductsGet200Response.to_json())

# convert the object into a dict
products_get200_response_dict = products_get200_response_instance.to_dict()
# create an instance of ProductsGet200Response from a dict
products_get200_response_from_dict = ProductsGet200Response.from_dict(products_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


