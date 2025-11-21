# CustomersGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Customers]**](Customers.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.customers_get200_response import CustomersGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CustomersGet200Response from a JSON string
customers_get200_response_instance = CustomersGet200Response.from_json(json)
# print the JSON string representation of the object
print(CustomersGet200Response.to_json())

# convert the object into a dict
customers_get200_response_dict = customers_get200_response_instance.to_dict()
# create an instance of CustomersGet200Response from a dict
customers_get200_response_from_dict = CustomersGet200Response.from_dict(customers_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


