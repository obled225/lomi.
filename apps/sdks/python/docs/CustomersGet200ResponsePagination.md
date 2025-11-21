# CustomersGet200ResponsePagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** |  | [optional] 
**offset** | **int** |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from lomi_sdk.models.customers_get200_response_pagination import CustomersGet200ResponsePagination

# TODO update the JSON string below
json = "{}"
# create an instance of CustomersGet200ResponsePagination from a JSON string
customers_get200_response_pagination_instance = CustomersGet200ResponsePagination.from_json(json)
# print the JSON string representation of the object
print(CustomersGet200ResponsePagination.to_json())

# convert the object into a dict
customers_get200_response_pagination_dict = customers_get200_response_pagination_instance.to_dict()
# create an instance of CustomersGet200ResponsePagination from a dict
customers_get200_response_pagination_from_dict = CustomersGet200ResponsePagination.from_dict(customers_get200_response_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


