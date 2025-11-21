# RefundsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Refunds]**](Refunds.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.refunds_get200_response import RefundsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of RefundsGet200Response from a JSON string
refunds_get200_response_instance = RefundsGet200Response.from_json(json)
# print the JSON string representation of the object
print(RefundsGet200Response.to_json())

# convert the object into a dict
refunds_get200_response_dict = refunds_get200_response_instance.to_dict()
# create an instance of RefundsGet200Response from a dict
refunds_get200_response_from_dict = RefundsGet200Response.from_dict(refunds_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


