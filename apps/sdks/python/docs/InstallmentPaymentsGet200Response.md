# InstallmentPaymentsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[InstallmentPayments]**](InstallmentPayments.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.installment_payments_get200_response import InstallmentPaymentsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of InstallmentPaymentsGet200Response from a JSON string
installment_payments_get200_response_instance = InstallmentPaymentsGet200Response.from_json(json)
# print the JSON string representation of the object
print(InstallmentPaymentsGet200Response.to_json())

# convert the object into a dict
installment_payments_get200_response_dict = installment_payments_get200_response_instance.to_dict()
# create an instance of InstallmentPaymentsGet200Response from a dict
installment_payments_get200_response_from_dict = InstallmentPaymentsGet200Response.from_dict(installment_payments_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


