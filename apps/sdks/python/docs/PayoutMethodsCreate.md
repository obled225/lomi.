# PayoutMethodsCreate

Request body for creating a payout methods object. System-managed fields like `created_at`, `organization_id`, and IDs are automatically set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** |  | [optional] 
**account_number** | **str** |  | [optional] 
**auto_withdrawal_day** | **float** |  | [optional] 
**auto_withdrawal_enabled** | **bool** |  | [optional] 
**auto_withdrawal_last_run** | **str** |  | [optional] 
**auto_withdrawal_method** | **str** |  | [optional] 
**auto_withdrawal_mobile_provider** | **str** |  | [optional] 
**bank_code** | **str** |  | [optional] 
**bank_name** | **str** |  | [optional] 
**branch_code** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**is_default** | **bool** |  | [optional] 
**is_spi_enabled** | **bool** |  | [optional] 
**is_uemoa** | **bool** |  | [optional] 
**is_valid** | **bool** |  | [optional] 
**payout_method_id** | **str** | Unique identifier (UUID format) | [optional] 
**payout_method_type** | **str** |  | [optional] 
**spi_account_number** | **str** |  | [optional] 
**spi_alias_mbno** | **str** |  | [optional] 
**spi_alias_shid** | **str** |  | [optional] 
**spi_alias_type** | **str** |  | [optional] 

## Example

```python
from lomi.models.payout_methods_create import PayoutMethodsCreate

# TODO update the JSON string below
json = "{}"
# create an instance of PayoutMethodsCreate from a JSON string
payout_methods_create_instance = PayoutMethodsCreate.from_json(json)
# print the JSON string representation of the object
print(PayoutMethodsCreate.to_json())

# convert the object into a dict
payout_methods_create_dict = payout_methods_create_instance.to_dict()
# create an instance of PayoutMethodsCreate from a dict
payout_methods_create_from_dict = PayoutMethodsCreate.from_dict(payout_methods_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


