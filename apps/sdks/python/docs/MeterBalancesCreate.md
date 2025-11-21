# MeterBalancesCreate

Create meter_balances input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | **float** |  | [optional] 
**balance_id** | **str** |  | [optional] 
**billable_organization_id** | **str** |  | [optional] 
**consumed_units** | **float** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**credited_units** | **float** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**last_event_id** | **str** |  | [optional] 
**meter_id** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from lomi_sdk.models.meter_balances_create import MeterBalancesCreate

# TODO update the JSON string below
json = "{}"
# create an instance of MeterBalancesCreate from a JSON string
meter_balances_create_instance = MeterBalancesCreate.from_json(json)
# print the JSON string representation of the object
print(MeterBalancesCreate.to_json())

# convert the object into a dict
meter_balances_create_dict = meter_balances_create_instance.to_dict()
# create an instance of MeterBalancesCreate from a dict
meter_balances_create_from_dict = MeterBalancesCreate.from_dict(meter_balances_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


