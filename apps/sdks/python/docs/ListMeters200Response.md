# ListMeters200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Meters]**](Meters.md) |  | [optional] 
**pagination** | [**ListCustomers200ResponsePagination**](ListCustomers200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi.models.list_meters200_response import ListMeters200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListMeters200Response from a JSON string
list_meters200_response_instance = ListMeters200Response.from_json(json)
# print the JSON string representation of the object
print(ListMeters200Response.to_json())

# convert the object into a dict
list_meters200_response_dict = list_meters200_response_instance.to_dict()
# create an instance of ListMeters200Response from a dict
list_meters200_response_from_dict = ListMeters200Response.from_dict(list_meters200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


