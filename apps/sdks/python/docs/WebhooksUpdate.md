# WebhooksUpdate

Update webhooks input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized_events** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**created_by** | **str** |  | [optional] 
**deleted_at** | **datetime** |  | [optional] 
**environment** | **str** |  | [optional] 
**is_active** | **bool** |  | [optional] 
**last_payload** | **object** |  | [optional] 
**last_response_body** | **str** |  | [optional] 
**last_response_status** | **float** |  | [optional] 
**last_triggered_at** | **datetime** |  | [optional] 
**metadata** | **object** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**retry_count** | **float** |  | [optional] 
**spi_event_types** | **str** |  | [optional] 
**supports_spi** | **bool** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**url** | **str** |  | [optional] 
**verification_token** | **str** |  | [optional] 
**webhook_id** | **str** |  | [optional] 

## Example

```python
from lomi_sdk.models.webhooks_update import WebhooksUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of WebhooksUpdate from a JSON string
webhooks_update_instance = WebhooksUpdate.from_json(json)
# print the JSON string representation of the object
print(WebhooksUpdate.to_json())

# convert the object into a dict
webhooks_update_dict = webhooks_update_instance.to_dict()
# create an instance of WebhooksUpdate from a dict
webhooks_update_from_dict = WebhooksUpdate.from_dict(webhooks_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


