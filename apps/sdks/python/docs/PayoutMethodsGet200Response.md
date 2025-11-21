# PayoutMethodsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PayoutMethods]**](PayoutMethods.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.payout_methods_get200_response import PayoutMethodsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PayoutMethodsGet200Response from a JSON string
payout_methods_get200_response_instance = PayoutMethodsGet200Response.from_json(json)
# print the JSON string representation of the object
print(PayoutMethodsGet200Response.to_json())

# convert the object into a dict
payout_methods_get200_response_dict = payout_methods_get200_response_instance.to_dict()
# create an instance of PayoutMethodsGet200Response from a dict
payout_methods_get200_response_from_dict = PayoutMethodsGet200Response.from_dict(payout_methods_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


