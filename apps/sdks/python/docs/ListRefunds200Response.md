# ListRefunds200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Refunds]**](Refunds.md) |  | [optional] 
**pagination** | [**ListCustomers200ResponsePagination**](ListCustomers200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi.models.list_refunds200_response import ListRefunds200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListRefunds200Response from a JSON string
list_refunds200_response_instance = ListRefunds200Response.from_json(json)
# print the JSON string representation of the object
print(ListRefunds200Response.to_json())

# convert the object into a dict
list_refunds200_response_dict = list_refunds200_response_instance.to_dict()
# create an instance of ListRefunds200Response from a dict
list_refunds200_response_from_dict = ListRefunds200Response.from_dict(list_refunds200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


