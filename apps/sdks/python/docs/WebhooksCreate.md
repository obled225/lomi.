# WebhooksCreate

Request body for creating a webhooks object. System-managed fields like `created_at`, `organization_id`, and IDs are automatically set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized_events** | **str** |  | [optional] 
**is_active** | **bool** | Whether this resource is currently active | [optional] 
**last_payload** | **object** |  | [optional] 
**last_response_body** | **str** |  | [optional] 
**last_response_status** | **float** |  | [optional] 
**last_triggered_at** | **datetime** | ISO 8601 datetime | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**retry_count** | **float** |  | [optional] 
**spi_event_types** | **str** |  | [optional] 
**supports_spi** | **bool** |  | [optional] 
**url** | **str** | URL/URI | [optional] 
**verification_token** | **str** |  | [optional] 
**webhook_id** | **str** | Unique identifier (UUID format) | [optional] 

## Example

```python
from lomi_sdk.models.webhooks_create import WebhooksCreate

# TODO update the JSON string below
json = "{}"
# create an instance of WebhooksCreate from a JSON string
webhooks_create_instance = WebhooksCreate.from_json(json)
# print the JSON string representation of the object
print(WebhooksCreate.to_json())

# convert the object into a dict
webhooks_create_dict = webhooks_create_instance.to_dict()
# create an instance of WebhooksCreate from a dict
webhooks_create_from_dict = WebhooksCreate.from_dict(webhooks_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


