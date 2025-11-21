# Webhooks

webhooks resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized_events** | **str** |  | [optional] 
**created_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**created_by** | **str** |  | [optional] [readonly] 
**deleted_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**environment** | **str** |  | [optional] 
**is_active** | **bool** | Whether this resource is currently active | [optional] 
**last_payload** | **object** |  | [optional] 
**last_response_body** | **str** |  | [optional] 
**last_response_status** | **float** |  | [optional] 
**last_triggered_at** | **datetime** | ISO 8601 datetime | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**organization_id** | **str** | Unique identifier (UUID format) | [optional] 
**retry_count** | **float** |  | [optional] 
**spi_event_types** | **str** |  | [optional] 
**supports_spi** | **bool** |  | [optional] 
**updated_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**url** | **str** | URL/URI | [optional] 
**verification_token** | **str** |  | [optional] 
**webhook_id** | **str** | Unique identifier (UUID format) | [optional] 

## Example

```python
from lomi.models.webhooks import Webhooks

# TODO update the JSON string below
json = "{}"
# create an instance of Webhooks from a JSON string
webhooks_instance = Webhooks.from_json(json)
# print the JSON string representation of the object
print(Webhooks.to_json())

# convert the object into a dict
webhooks_dict = webhooks_instance.to_dict()
# create an instance of Webhooks from a dict
webhooks_from_dict = Webhooks.from_dict(webhooks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


