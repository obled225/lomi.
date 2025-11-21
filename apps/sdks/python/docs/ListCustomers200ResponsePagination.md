# ListCustomers200ResponsePagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | Number of items per page | [optional] 
**offset** | **int** | Number of items skipped | [optional] 
**total** | **int** | Total number of items available | [optional] 

## Example

```python
from lomi.models.list_customers200_response_pagination import ListCustomers200ResponsePagination

# TODO update the JSON string below
json = "{}"
# create an instance of ListCustomers200ResponsePagination from a JSON string
list_customers200_response_pagination_instance = ListCustomers200ResponsePagination.from_json(json)
# print the JSON string representation of the object
print(ListCustomers200ResponsePagination.to_json())

# convert the object into a dict
list_customers200_response_pagination_dict = list_customers200_response_pagination_instance.to_dict()
# create an instance of ListCustomers200ResponsePagination from a dict
list_customers200_response_pagination_from_dict = ListCustomers200ResponsePagination.from_dict(list_customers200_response_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


