# SubscriptionsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Subscriptions]**](Subscriptions.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.subscriptions_get200_response import SubscriptionsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionsGet200Response from a JSON string
subscriptions_get200_response_instance = SubscriptionsGet200Response.from_json(json)
# print the JSON string representation of the object
print(SubscriptionsGet200Response.to_json())

# convert the object into a dict
subscriptions_get200_response_dict = subscriptions_get200_response_instance.to_dict()
# create an instance of SubscriptionsGet200Response from a dict
subscriptions_get200_response_from_dict = SubscriptionsGet200Response.from_dict(subscriptions_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


