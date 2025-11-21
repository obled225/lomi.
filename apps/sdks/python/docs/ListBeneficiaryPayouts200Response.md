# ListBeneficiaryPayouts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BeneficiaryPayouts]**](BeneficiaryPayouts.md) |  | [optional] 
**pagination** | [**ListCustomers200ResponsePagination**](ListCustomers200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.list_beneficiary_payouts200_response import ListBeneficiaryPayouts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListBeneficiaryPayouts200Response from a JSON string
list_beneficiary_payouts200_response_instance = ListBeneficiaryPayouts200Response.from_json(json)
# print the JSON string representation of the object
print(ListBeneficiaryPayouts200Response.to_json())

# convert the object into a dict
list_beneficiary_payouts200_response_dict = list_beneficiary_payouts200_response_instance.to_dict()
# create an instance of ListBeneficiaryPayouts200Response from a dict
list_beneficiary_payouts200_response_from_dict = ListBeneficiaryPayouts200Response.from_dict(list_beneficiary_payouts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


