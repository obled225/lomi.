# ListProducts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Products]**](Products.md) |  | [optional] 
**pagination** | [**ListCustomers200ResponsePagination**](ListCustomers200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi.models.list_products200_response import ListProducts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListProducts200Response from a JSON string
list_products200_response_instance = ListProducts200Response.from_json(json)
# print the JSON string representation of the object
print(ListProducts200Response.to_json())

# convert the object into a dict
list_products200_response_dict = list_products200_response_instance.to_dict()
# create an instance of ListProducts200Response from a dict
list_products200_response_from_dict = ListProducts200Response.from_dict(list_products200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


