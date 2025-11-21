# PayoutMethodsUpdate

Update payout_methods input

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
**created_at** | **datetime** |  | [optional] 
**is_default** | **bool** |  | [optional] 
**is_spi_enabled** | **bool** |  | [optional] 
**is_uemoa** | **bool** |  | [optional] 
**is_valid** | **bool** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**payout_method_id** | **str** |  | [optional] 
**payout_method_type** | **str** |  | [optional] 
**spi_account_number** | **str** |  | [optional] 
**spi_alias_mbno** | **str** |  | [optional] 
**spi_alias_shid** | **str** |  | [optional] 
**spi_alias_type** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from lomi_sdk.models.payout_methods_update import PayoutMethodsUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of PayoutMethodsUpdate from a JSON string
payout_methods_update_instance = PayoutMethodsUpdate.from_json(json)
# print the JSON string representation of the object
print(PayoutMethodsUpdate.to_json())

# convert the object into a dict
payout_methods_update_dict = payout_methods_update_instance.to_dict()
# create an instance of PayoutMethodsUpdate from a dict
payout_methods_update_from_dict = PayoutMethodsUpdate.from_dict(payout_methods_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


