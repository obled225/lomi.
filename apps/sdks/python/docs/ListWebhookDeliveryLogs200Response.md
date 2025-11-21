# ListWebhookDeliveryLogs200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[WebhookDeliveryLogs]**](WebhookDeliveryLogs.md) |  | [optional] 
**pagination** | [**ListCustomers200ResponsePagination**](ListCustomers200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi.models.list_webhook_delivery_logs200_response import ListWebhookDeliveryLogs200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListWebhookDeliveryLogs200Response from a JSON string
list_webhook_delivery_logs200_response_instance = ListWebhookDeliveryLogs200Response.from_json(json)
# print the JSON string representation of the object
print(ListWebhookDeliveryLogs200Response.to_json())

# convert the object into a dict
list_webhook_delivery_logs200_response_dict = list_webhook_delivery_logs200_response_instance.to_dict()
# create an instance of ListWebhookDeliveryLogs200Response from a dict
list_webhook_delivery_logs200_response_from_dict = ListWebhookDeliveryLogs200Response.from_dict(list_webhook_delivery_logs200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


