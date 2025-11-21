# BeneficiaryPayoutsCreate

Request body for creating a beneficiary payouts object. System-managed fields like `created_at`, `organization_id`, and IDs are automatically set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Unique identifier (UUID format) | [optional] 
**amount** | **float** | Amount in the smallest currency unit (e.g., cents for USD, same for XOF) | [optional] 
**currency_code** | **str** | Three-letter ISO currency code (e.g., XOF, USD, EUR) | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**payment_method_code** | **str** |  | [optional] 
**payout_id** | **str** | Unique identifier (UUID format) | [optional] 
**payout_method_id** | **str** | Unique identifier (UUID format) | [optional] 
**provider_code** | **str** |  | [optional] 
**spi_bulk_instruction_id** | **str** | Unique identifier (UUID format) | [optional] 
**status** | **str** | Current status of the resource | [optional] 

## Example

```python
from lomi.models.beneficiary_payouts_create import BeneficiaryPayoutsCreate

# TODO update the JSON string below
json = "{}"
# create an instance of BeneficiaryPayoutsCreate from a JSON string
beneficiary_payouts_create_instance = BeneficiaryPayoutsCreate.from_json(json)
# print the JSON string representation of the object
print(BeneficiaryPayoutsCreate.to_json())

# convert the object into a dict
beneficiary_payouts_create_dict = beneficiary_payouts_create_instance.to_dict()
# create an instance of BeneficiaryPayoutsCreate from a dict
beneficiary_payouts_create_from_dict = BeneficiaryPayoutsCreate.from_dict(beneficiary_payouts_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


