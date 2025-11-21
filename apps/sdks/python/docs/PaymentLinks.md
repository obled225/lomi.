# PaymentLinks

payment links resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_coupon_code** | **bool** |  | [optional] 
**allow_quantity** | **bool** |  | [optional] 
**allowed_providers** | **str** |  | [optional] 
**amount** | **float** | Amount in the smallest currency unit (e.g., cents for USD, same for XOF) | [optional] 
**cancel_url** | **str** | URL/URI | [optional] 
**created_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**created_by** | **str** |  | [optional] [readonly] 
**currency_code** | **str** | Three-letter ISO currency code (e.g., XOF, USD, EUR) | [optional] 
**environment** | **str** |  | [optional] 
**expires_at** | **datetime** | ISO 8601 datetime | [optional] 
**is_active** | **bool** | Whether this resource is currently active | [optional] 
**link_id** | **str** | Unique identifier (UUID format) | [optional] 
**link_type** | **str** |  | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**organization_id** | **str** | Unique identifier (UUID format) | [optional] 
**price_id** | **str** | Unique identifier (UUID format) | [optional] 
**private_description** | **str** |  | [optional] 
**product_id** | **str** | Unique identifier (UUID format) | [optional] 
**public_description** | **str** |  | [optional] 
**quantity** | **float** |  | [optional] 
**success_url** | **str** | URL/URI | [optional] 
**title** | **str** |  | [optional] 
**updated_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**url** | **str** | URL/URI | [optional] 

## Example

```python
from lomi_sdk.models.payment_links import PaymentLinks

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentLinks from a JSON string
payment_links_instance = PaymentLinks.from_json(json)
# print the JSON string representation of the object
print(PaymentLinks.to_json())

# convert the object into a dict
payment_links_dict = payment_links_instance.to_dict()
# create an instance of PaymentLinks from a dict
payment_links_from_dict = PaymentLinks.from_dict(payment_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


