# PayoutMethods

payout methods resource object

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
**created_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**is_default** | **bool** |  | [optional] 
**is_spi_enabled** | **bool** |  | [optional] 
**is_uemoa** | **bool** |  | [optional] 
**is_valid** | **bool** |  | [optional] 
**organization_id** | **str** | Unique identifier (UUID format) | [optional] 
**payout_method_id** | **str** | Unique identifier (UUID format) | [optional] 
**payout_method_type** | **str** |  | [optional] 
**spi_account_number** | **str** |  | [optional] 
**spi_alias_mbno** | **str** |  | [optional] 
**spi_alias_shid** | **str** |  | [optional] 
**spi_alias_type** | **str** |  | [optional] 
**updated_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 

## Example

```python
from lomi.models.payout_methods import PayoutMethods

# TODO update the JSON string below
json = "{}"
# create an instance of PayoutMethods from a JSON string
payout_methods_instance = PayoutMethods.from_json(json)
# print the JSON string representation of the object
print(PayoutMethods.to_json())

# convert the object into a dict
payout_methods_dict = payout_methods_instance.to_dict()
# create an instance of PayoutMethods from a dict
payout_methods_from_dict = PayoutMethods.from_dict(payout_methods_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


