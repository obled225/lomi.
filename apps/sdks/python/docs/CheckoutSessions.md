# CheckoutSessions

checkout sessions resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_coupon_code** | **bool** |  | [optional] 
**allow_quantity** | **bool** |  | [optional] 
**allowed_providers** | **str** |  | [optional] 
**amount** | **float** | Amount in the smallest currency unit (e.g., cents for USD, same for XOF) | [optional] 
**cancel_url** | **str** | URL/URI | [optional] 
**checkout_session_id** | **str** | Unique identifier (UUID format) | [optional] 
**created_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**created_by** | **str** |  | [optional] [readonly] 
**currency_code** | **str** | Three-letter ISO currency code (e.g., XOF, USD, EUR) | [optional] 
**customer_email** | **str** | Email address | [optional] 
**customer_id** | **str** | Unique identifier (UUID format) | [optional] 
**customer_name** | **str** |  | [optional] 
**customer_phone** | **str** |  | [optional] 
**environment** | **str** |  | [optional] 
**expires_at** | **datetime** | ISO 8601 datetime | [optional] 
**installment_plan_id** | **str** | Unique identifier (UUID format) | [optional] 
**is_pos** | **bool** |  | [optional] 
**is_spi** | **bool** |  | [optional] 
**metadata** | **object** | Set of key-value pairs for storing additional information | [optional] 
**organization_id** | **str** | Unique identifier (UUID format) | [optional] 
**payment_link_id** | **str** | Unique identifier (UUID format) | [optional] 
**payment_request_id** | **str** | Unique identifier (UUID format) | [optional] 
**price_id** | **str** | Unique identifier (UUID format) | [optional] 
**product_id** | **str** | Unique identifier (UUID format) | [optional] 
**public_description** | **str** |  | [optional] 
**qr_code_data** | **object** |  | [optional] 
**qr_code_type** | **str** |  | [optional] 
**quantity** | **float** |  | [optional] 
**spi_account_number** | **str** |  | [optional] 
**spi_qr_code_id** | **str** | Unique identifier (UUID format) | [optional] 
**status** | **str** | Current status of the resource | [optional] 
**subscription_id** | **str** | Unique identifier (UUID format) | [optional] 
**success_url** | **str** | URL/URI | [optional] 
**title** | **str** |  | [optional] 
**updated_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 

## Example

```python
from lomi_sdk.models.checkout_sessions import CheckoutSessions

# TODO update the JSON string below
json = "{}"
# create an instance of CheckoutSessions from a JSON string
checkout_sessions_instance = CheckoutSessions.from_json(json)
# print the JSON string representation of the object
print(CheckoutSessions.to_json())

# convert the object into a dict
checkout_sessions_dict = checkout_sessions_instance.to_dict()
# create an instance of CheckoutSessions from a dict
checkout_sessions_from_dict = CheckoutSessions.from_dict(checkout_sessions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


