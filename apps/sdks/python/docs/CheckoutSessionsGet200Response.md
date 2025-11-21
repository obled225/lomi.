# CheckoutSessionsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[CheckoutSessions]**](CheckoutSessions.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.checkout_sessions_get200_response import CheckoutSessionsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CheckoutSessionsGet200Response from a JSON string
checkout_sessions_get200_response_instance = CheckoutSessionsGet200Response.from_json(json)
# print the JSON string representation of the object
print(CheckoutSessionsGet200Response.to_json())

# convert the object into a dict
checkout_sessions_get200_response_dict = checkout_sessions_get200_response_instance.to_dict()
# create an instance of CheckoutSessionsGet200Response from a dict
checkout_sessions_get200_response_from_dict = CheckoutSessionsGet200Response.from_dict(checkout_sessions_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


