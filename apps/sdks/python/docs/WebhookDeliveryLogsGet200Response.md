# WebhookDeliveryLogsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[WebhookDeliveryLogs]**](WebhookDeliveryLogs.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.webhook_delivery_logs_get200_response import WebhookDeliveryLogsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookDeliveryLogsGet200Response from a JSON string
webhook_delivery_logs_get200_response_instance = WebhookDeliveryLogsGet200Response.from_json(json)
# print the JSON string representation of the object
print(WebhookDeliveryLogsGet200Response.to_json())

# convert the object into a dict
webhook_delivery_logs_get200_response_dict = webhook_delivery_logs_get200_response_instance.to_dict()
# create an instance of WebhookDeliveryLogsGet200Response from a dict
webhook_delivery_logs_get200_response_from_dict = WebhookDeliveryLogsGet200Response.from_dict(webhook_delivery_logs_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


