# PaymentLinksCreate

Request body for creating a payment links object. System-managed fields like `created_at`, `organization_id`, and IDs are automatically set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_coupon_code** | **bool** |  | [optional] 
**allow_quantity** | **bool** |  | [optional] 
**allowed_providers** | **str** |  | [optional] 
**amount** | **float** | Amount in the smallest currency unit (e.g., cents for USD, same for XOF) | [optional] 
**cancel_url** | **str** | URL/URI | [optional] 
**currency_code** | **str** | Three-letter ISO currency code (e.g., XOF, USD, EUR) | [optional] 
**expires_at** | **datetime** | ISO 8601 datetime | [optional] 
**is_active** | **bool** | Whether this resource is currently active | [optional] 
**link_id** | **str** | Unique identifier (UUID format) | [optional] 
**link_type** | **str** |  | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**price_id** | **str** | Unique identifier (UUID format) | [optional] 
**private_description** | **str** |  | [optional] 
**product_id** | **str** | Unique identifier (UUID format) | [optional] 
**public_description** | **str** |  | [optional] 
**quantity** | **float** |  | [optional] 
**success_url** | **str** | URL/URI | [optional] 
**title** | **str** |  | [optional] 
**url** | **str** | URL/URI | [optional] 

## Example

```python
from lomi.models.payment_links_create import PaymentLinksCreate

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentLinksCreate from a JSON string
payment_links_create_instance = PaymentLinksCreate.from_json(json)
# print the JSON string representation of the object
print(PaymentLinksCreate.to_json())

# convert the object into a dict
payment_links_create_dict = payment_links_create_instance.to_dict()
# create an instance of PaymentLinksCreate from a dict
payment_links_create_from_dict = PaymentLinksCreate.from_dict(payment_links_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


