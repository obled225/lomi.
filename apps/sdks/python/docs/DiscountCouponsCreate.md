# DiscountCouponsCreate

Create discount_coupons input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applies_to_product_types** | **str** |  | [optional] 
**code** | **str** |  | [optional] 
**coupon_id** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**current_uses** | **float** |  | [optional] 
**customer_type** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**discount_fixed_amount** | **float** |  | [optional] 
**discount_percentage** | **float** |  | [optional] 
**discount_type** | **str** |  | [optional] 
**environment** | **str** |  | [optional] 
**expires_at** | **datetime** |  | [optional] 
**is_active** | **bool** |  | [optional] 
**is_organization_wide** | **bool** |  | [optional] 
**max_quantity_per_use** | **float** |  | [optional] 
**max_uses** | **float** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**scope_type** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**usage_frequency_limit** | **str** |  | [optional] 
**usage_limit_value** | **float** |  | [optional] 
**valid_from** | **str** |  | [optional] 

## Example

```python
from lomi_sdk.models.discount_coupons_create import DiscountCouponsCreate

# TODO update the JSON string below
json = "{}"
# create an instance of DiscountCouponsCreate from a JSON string
discount_coupons_create_instance = DiscountCouponsCreate.from_json(json)
# print the JSON string representation of the object
print(DiscountCouponsCreate.to_json())

# convert the object into a dict
discount_coupons_create_dict = discount_coupons_create_instance.to_dict()
# create an instance of DiscountCouponsCreate from a dict
discount_coupons_create_from_dict = DiscountCouponsCreate.from_dict(discount_coupons_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


