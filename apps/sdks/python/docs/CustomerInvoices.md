# CustomerInvoices

customer_invoices object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**created_by** | **str** |  | [optional] 
**currency_code** | **str** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**customer_invoice_id** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**due_date** | **str** |  | [optional] 
**metadata** | **object** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from lomi_sdk.models.customer_invoices import CustomerInvoices

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


