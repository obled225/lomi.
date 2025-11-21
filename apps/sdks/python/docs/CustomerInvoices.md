# CustomerInvoices

customer invoices resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in the smallest currency unit (e.g., cents for USD, same for XOF) | [optional] 
**created_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**created_by** | **str** |  | [optional] [readonly] 
**currency_code** | **str** | Three-letter ISO currency code (e.g., XOF, USD, EUR) | [optional] 
**customer_id** | **str** | Unique identifier (UUID format) | [optional] 
**customer_invoice_id** | **str** | Unique identifier (UUID format) | [optional] 
**description** | **str** |  | [optional] 
**due_date** | **str** |  | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**organization_id** | **str** | Unique identifier (UUID format) | [optional] 
**status** | **str** | Current status of the resource | [optional] 
**updated_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 

## Example

```python
from lomi.models.customer_invoices import CustomerInvoices

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerInvoices from a JSON string
customer_invoices_instance = CustomerInvoices.from_json(json)
# print the JSON string representation of the object
print(CustomerInvoices.to_json())

# convert the object into a dict
customer_invoices_dict = customer_invoices_instance.to_dict()
# create an instance of CustomerInvoices from a dict
customer_invoices_from_dict = CustomerInvoices.from_dict(customer_invoices_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


