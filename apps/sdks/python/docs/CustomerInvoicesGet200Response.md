# CustomerInvoicesGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[CustomerInvoices]**](CustomerInvoices.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.customer_invoices_get200_response import CustomerInvoicesGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerInvoicesGet200Response from a JSON string
customer_invoices_get200_response_instance = CustomerInvoicesGet200Response.from_json(json)
# print the JSON string representation of the object
print(CustomerInvoicesGet200Response.to_json())

# convert the object into a dict
customer_invoices_get200_response_dict = customer_invoices_get200_response_instance.to_dict()
# create an instance of CustomerInvoicesGet200Response from a dict
customer_invoices_get200_response_from_dict = CustomerInvoicesGet200Response.from_dict(customer_invoices_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


