# CustomerInvoicesCreate

Create customer_invoices input

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


