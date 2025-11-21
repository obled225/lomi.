# MeterBalancesGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[MeterBalances]**](MeterBalances.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.meter_balances_get200_response import MeterBalancesGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of MeterBalancesGet200Response from a JSON string
meter_balances_get200_response_instance = MeterBalancesGet200Response.from_json(json)
# print the JSON string representation of the object
print(MeterBalancesGet200Response.to_json())

# convert the object into a dict
meter_balances_get200_response_dict = meter_balances_get200_response_instance.to_dict()
# create an instance of MeterBalancesGet200Response from a dict
meter_balances_get200_response_from_dict = MeterBalancesGet200Response.from_dict(meter_balances_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


