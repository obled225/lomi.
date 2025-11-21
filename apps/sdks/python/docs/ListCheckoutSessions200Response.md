# ListCheckoutSessions200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[CheckoutSessions]**](CheckoutSessions.md) |  | [optional] 
**pagination** | [**ListCustomers200ResponsePagination**](ListCustomers200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi.models.list_checkout_sessions200_response import ListCheckoutSessions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListCheckoutSessions200Response from a JSON string
list_checkout_sessions200_response_instance = ListCheckoutSessions200Response.from_json(json)
# print the JSON string representation of the object
print(ListCheckoutSessions200Response.to_json())

# convert the object into a dict
list_checkout_sessions200_response_dict = list_checkout_sessions200_response_instance.to_dict()
# create an instance of ListCheckoutSessions200Response from a dict
list_checkout_sessions200_response_from_dict = ListCheckoutSessions200Response.from_dict(list_checkout_sessions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


