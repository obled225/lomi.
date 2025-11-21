# CustomerInvoicesUpdate

Request body for updating a customer invoices object. Only include fields you want to modify.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in the smallest currency unit (e.g., cents for USD, same for XOF) | [optional] 
**currency_code** | **str** | Three-letter ISO currency code (e.g., XOF, USD, EUR) | [optional] 
**customer_id** | **str** | Unique identifier (UUID format) | [optional] 
**customer_invoice_id** | **str** | Unique identifier (UUID format) | [optional] 
**description** | **str** |  | [optional] 
**due_date** | **str** |  | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**status** | **str** | Current status of the resource | [optional] 

## Example

```python
from lomi_sdk.models.customer_invoices_update import CustomerInvoicesUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerInvoicesUpdate from a JSON string
customer_invoices_update_instance = CustomerInvoicesUpdate.from_json(json)
# print the JSON string representation of the object
print(CustomerInvoicesUpdate.to_json())

# convert the object into a dict
customer_invoices_update_dict = customer_invoices_update_instance.to_dict()
# create an instance of CustomerInvoicesUpdate from a dict
customer_invoices_update_from_dict = CustomerInvoicesUpdate.from_dict(customer_invoices_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


