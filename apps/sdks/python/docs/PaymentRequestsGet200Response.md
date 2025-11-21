# PaymentRequestsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PaymentRequests]**](PaymentRequests.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.payment_requests_get200_response import PaymentRequestsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentRequestsGet200Response from a JSON string
payment_requests_get200_response_instance = PaymentRequestsGet200Response.from_json(json)
# print the JSON string representation of the object
print(PaymentRequestsGet200Response.to_json())

# convert the object into a dict
payment_requests_get200_response_dict = payment_requests_get200_response_instance.to_dict()
# create an instance of PaymentRequestsGet200Response from a dict
payment_requests_get200_response_from_dict = PaymentRequestsGet200Response.from_dict(payment_requests_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


