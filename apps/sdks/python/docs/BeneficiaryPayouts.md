# BeneficiaryPayouts

beneficiary_payouts object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** |  | [optional] 
**amount** | **float** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**created_by** | **str** |  | [optional] 
**currency_code** | **str** |  | [optional] 
**metadata** | **object** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**payment_method_code** | **str** |  | [optional] 
**payout_id** | **str** |  | [optional] 
**payout_method_id** | **str** |  | [optional] 
**provider_code** | **str** |  | [optional] 
**spi_bulk_instruction_id** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from lomi_sdk.models.beneficiary_payouts import BeneficiaryPayouts

# TODO update the JSON string below
json = "{}"
# create an instance of BeneficiaryPayouts from a JSON string
beneficiary_payouts_instance = BeneficiaryPayouts.from_json(json)
# print the JSON string representation of the object
print(BeneficiaryPayouts.to_json())

# convert the object into a dict
beneficiary_payouts_dict = beneficiary_payouts_instance.to_dict()
# create an instance of BeneficiaryPayouts from a dict
beneficiary_payouts_from_dict = BeneficiaryPayouts.from_dict(beneficiary_payouts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


