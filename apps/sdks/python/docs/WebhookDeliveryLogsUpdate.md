# WebhookDeliveryLogsUpdate

Update webhook_delivery_logs input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt_number** | **float** |  | [optional] 
**compte_paye** | **str** |  | [optional] 
**compte_payeur** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**event_type** | **str** |  | [optional] 
**headers** | **object** |  | [optional] 
**ip_address** | **str** |  | [optional] 
**log_id** | **str** |  | [optional] 
**montant** | **float** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**payload** | **object** |  | [optional] 
**request_duration_ms** | **float** |  | [optional] 
**response_body** | **str** |  | [optional] 
**response_status** | **float** |  | [optional] 
**spi_event_code** | **str** |  | [optional] 
**spi_tx_id** | **str** |  | [optional] 
**success** | **bool** |  | [optional] 
**user_agent** | **str** |  | [optional] 
**webhook_id** | **str** |  | [optional] 

## Example

```python
from lomi_sdk.models.webhook_delivery_logs_update import WebhookDeliveryLogsUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookDeliveryLogsUpdate from a JSON string
webhook_delivery_logs_update_instance = WebhookDeliveryLogsUpdate.from_json(json)
# print the JSON string representation of the object
print(WebhookDeliveryLogsUpdate.to_json())

# convert the object into a dict
webhook_delivery_logs_update_dict = webhook_delivery_logs_update_instance.to_dict()
# create an instance of WebhookDeliveryLogsUpdate from a dict
webhook_delivery_logs_update_from_dict = WebhookDeliveryLogsUpdate.from_dict(webhook_delivery_logs_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


