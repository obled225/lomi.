# MetersGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Meters]**](Meters.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.meters_get200_response import MetersGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of MetersGet200Response from a JSON string
meters_get200_response_instance = MetersGet200Response.from_json(json)
# print the JSON string representation of the object
print(MetersGet200Response.to_json())

# convert the object into a dict
meters_get200_response_dict = meters_get200_response_instance.to_dict()
# create an instance of MetersGet200Response from a dict
meters_get200_response_from_dict = MetersGet200Response.from_dict(meters_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


