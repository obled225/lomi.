# PayoutsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Payouts]**](Payouts.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.payouts_get200_response import PayoutsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PayoutsGet200Response from a JSON string
payouts_get200_response_instance = PayoutsGet200Response.from_json(json)
# print the JSON string representation of the object
print(PayoutsGet200Response.to_json())

# convert the object into a dict
payouts_get200_response_dict = payouts_get200_response_instance.to_dict()
# create an instance of PayoutsGet200Response from a dict
payouts_get200_response_from_dict = PayoutsGet200Response.from_dict(payouts_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


