# BeneficiaryPayouts

beneficiary payouts resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Unique identifier (UUID format) | [optional] 
**amount** | **float** | Amount in the smallest currency unit (e.g., cents for USD, same for XOF) | [optional] 
**created_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**created_by** | **str** |  | [optional] [readonly] 
**currency_code** | **str** | Three-letter ISO currency code (e.g., XOF, USD, EUR) | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**organization_id** | **str** | Unique identifier (UUID format) | [optional] 
**payment_method_code** | **str** |  | [optional] 
**payout_id** | **str** | Unique identifier (UUID format) | [optional] 
**payout_method_id** | **str** | Unique identifier (UUID format) | [optional] 
**provider_code** | **str** |  | [optional] 
**spi_bulk_instruction_id** | **str** | Unique identifier (UUID format) | [optional] 
**status** | **str** | Current status of the resource | [optional] 
**updated_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 

## Example

```python
from lomi.models.beneficiary_payouts import BeneficiaryPayouts

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


