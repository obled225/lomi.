# MeterBalances

meter_balances object

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
from lomi_sdk.models.meter_balances import MeterBalances

# TODO update the JSON string below
json = "{}"
# create an instance of MeterBalances from a JSON string
meter_balances_instance = MeterBalances.from_json(json)
# print the JSON string representation of the object
print(MeterBalances.to_json())

# convert the object into a dict
meter_balances_dict = meter_balances_instance.to_dict()
# create an instance of MeterBalances from a dict
meter_balances_from_dict = MeterBalances.from_dict(meter_balances_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


