# ListInstallmentPayments200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[InstallmentPayments]**](InstallmentPayments.md) |  | [optional] 
**pagination** | [**ListCustomers200ResponsePagination**](ListCustomers200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.list_installment_payments200_response import ListInstallmentPayments200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListInstallmentPayments200Response from a JSON string
list_installment_payments200_response_instance = ListInstallmentPayments200Response.from_json(json)
# print the JSON string representation of the object
print(ListInstallmentPayments200Response.to_json())

# convert the object into a dict
list_installment_payments200_response_dict = list_installment_payments200_response_instance.to_dict()
# create an instance of ListInstallmentPayments200Response from a dict
list_installment_payments200_response_from_dict = ListInstallmentPayments200Response.from_dict(list_installment_payments200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


