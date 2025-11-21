# SpiQrCodesCreate

Request body for creating a spi qr codes object. System-managed fields like `created_at`, `organization_id`, and IDs are automatically set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categorie** | **str** |  | [optional] 
**checkout_session_id** | **str** | Unique identifier (UUID format) | [optional] 
**compte_paye** | **str** |  | [optional] 
**expires_at** | **datetime** | ISO 8601 datetime | [optional] 
**is_active** | **bool** | Whether this resource is currently active | [optional] 
**is_used** | **bool** |  | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**montant** | **float** |  | [optional] 
**name** | **str** |  | [optional] 
**payeur_alias** | **str** |  | [optional] 
**payment_request_id** | **str** | Unique identifier (UUID format) | [optional] 
**plan_id** | **str** | Unique identifier (UUID format) | [optional] 
**product_id** | **str** | Unique identifier (UUID format) | [optional] 
**qr_code_data** | **str** |  | [optional] 
**qr_code_id** | **str** | Unique identifier (UUID format) | [optional] 
**qr_code_image_data** | **str** |  | [optional] 
**qr_code_image_url** | **str** | URL/URI | [optional] 
**qr_code_type** | **str** |  | [optional] 

## Example

```python
from lomi_sdk.models.spi_qr_codes_create import SpiQrCodesCreate

# TODO update the JSON string below
json = "{}"
# create an instance of SpiQrCodesCreate from a JSON string
spi_qr_codes_create_instance = SpiQrCodesCreate.from_json(json)
# print the JSON string representation of the object
print(SpiQrCodesCreate.to_json())

# convert the object into a dict
spi_qr_codes_create_dict = spi_qr_codes_create_instance.to_dict()
# create an instance of SpiQrCodesCreate from a dict
spi_qr_codes_create_from_dict = SpiQrCodesCreate.from_dict(spi_qr_codes_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


