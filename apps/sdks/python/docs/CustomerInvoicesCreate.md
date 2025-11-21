# CustomerInvoicesCreate

Request body for creating a customer invoices object. System-managed fields like `created_at`, `organization_id`, and IDs are automatically set.

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
from lomi_sdk.models.customer_invoices_create import CustomerInvoicesCreate

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerInvoicesCreate from a JSON string
customer_invoices_create_instance = CustomerInvoicesCreate.from_json(json)
# print the JSON string representation of the object
print(CustomerInvoicesCreate.to_json())

# convert the object into a dict
customer_invoices_create_dict = customer_invoices_create_instance.to_dict()
# create an instance of CustomerInvoicesCreate from a dict
customer_invoices_create_from_dict = CustomerInvoicesCreate.from_dict(customer_invoices_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


