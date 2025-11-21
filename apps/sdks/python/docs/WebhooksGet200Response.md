# WebhooksGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Webhooks]**](Webhooks.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.webhooks_get200_response import WebhooksGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of WebhooksGet200Response from a JSON string
webhooks_get200_response_instance = WebhooksGet200Response.from_json(json)
# print the JSON string representation of the object
print(WebhooksGet200Response.to_json())

# convert the object into a dict
webhooks_get200_response_dict = webhooks_get200_response_instance.to_dict()
# create an instance of WebhooksGet200Response from a dict
webhooks_get200_response_from_dict = WebhooksGet200Response.from_dict(webhooks_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


