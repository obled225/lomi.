# CheckoutSessionsCreate

Create checkout_sessions input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_coupon_code** | **bool** |  | [optional] 
**allow_quantity** | **bool** |  | [optional] 
**allowed_providers** | **str** |  | [optional] 
**amount** | **float** |  | [optional] 
**cancel_url** | **str** |  | [optional] 
**checkout_session_id** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**created_by** | **str** |  | [optional] 
**currency_code** | **str** |  | [optional] 
**customer_email** | **str** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**customer_name** | **str** |  | [optional] 
**customer_phone** | **str** |  | [optional] 
**environment** | **str** |  | [optional] 
**expires_at** | **datetime** |  | [optional] 
**installment_plan_id** | **str** |  | [optional] 
**is_pos** | **bool** |  | [optional] 
**is_spi** | **bool** |  | [optional] 
**metadata** | **object** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**payment_link_id** | **str** |  | [optional] 
**payment_request_id** | **str** |  | [optional] 
**price_id** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**public_description** | **str** |  | [optional] 
**qr_code_data** | **object** |  | [optional] 
**qr_code_type** | **str** |  | [optional] 
**quantity** | **float** |  | [optional] 
**spi_account_number** | **str** |  | [optional] 
**spi_qr_code_id** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**subscription_id** | **str** |  | [optional] 
**success_url** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from lomi_sdk.models.checkout_sessions_create import CheckoutSessionsCreate

# TODO update the JSON string below
json = "{}"
# create an instance of CheckoutSessionsCreate from a JSON string
checkout_sessions_create_instance = CheckoutSessionsCreate.from_json(json)
# print the JSON string representation of the object
print(CheckoutSessionsCreate.to_json())

# convert the object into a dict
checkout_sessions_create_dict = checkout_sessions_create_instance.to_dict()
# create an instance of CheckoutSessionsCreate from a dict
checkout_sessions_create_from_dict = CheckoutSessionsCreate.from_dict(checkout_sessions_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


