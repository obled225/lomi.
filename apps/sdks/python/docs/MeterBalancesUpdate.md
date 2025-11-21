# MeterBalancesUpdate

Request body for updating a meter balances object. Only include fields you want to modify.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | **float** |  | [optional] 
**balance_id** | **str** | Unique identifier (UUID format) | [optional] 
**billable_organization_id** | **str** | Unique identifier (UUID format) | [optional] 
**consumed_units** | **float** |  | [optional] 
**credited_units** | **float** |  | [optional] 
**customer_id** | **str** | Unique identifier (UUID format) | [optional] 
**last_event_id** | **str** | Unique identifier (UUID format) | [optional] 
**meter_id** | **str** | Unique identifier (UUID format) | [optional] 

## Example

```python
from lomi.models.meter_balances_update import MeterBalancesUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of MeterBalancesUpdate from a JSON string
meter_balances_update_instance = MeterBalancesUpdate.from_json(json)
# print the JSON string representation of the object
print(MeterBalancesUpdate.to_json())

# convert the object into a dict
meter_balances_update_dict = meter_balances_update_instance.to_dict()
# create an instance of MeterBalancesUpdate from a dict
meter_balances_update_from_dict = MeterBalancesUpdate.from_dict(meter_balances_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


