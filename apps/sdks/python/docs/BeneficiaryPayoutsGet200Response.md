# BeneficiaryPayoutsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BeneficiaryPayouts]**](BeneficiaryPayouts.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.beneficiary_payouts_get200_response import BeneficiaryPayoutsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BeneficiaryPayoutsGet200Response from a JSON string
beneficiary_payouts_get200_response_instance = BeneficiaryPayoutsGet200Response.from_json(json)
# print the JSON string representation of the object
print(BeneficiaryPayoutsGet200Response.to_json())

# convert the object into a dict
beneficiary_payouts_get200_response_dict = beneficiary_payouts_get200_response_instance.to_dict()
# create an instance of BeneficiaryPayoutsGet200Response from a dict
beneficiary_payouts_get200_response_from_dict = BeneficiaryPayoutsGet200Response.from_dict(beneficiary_payouts_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


