# DiscountCouponsUpdate

Request body for updating a discount coupons object. Only include fields you want to modify.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applies_to_product_types** | **str** |  | [optional] 
**code** | **str** |  | [optional] 
**coupon_id** | **str** | Unique identifier (UUID format) | [optional] 
**current_uses** | **float** |  | [optional] 
**customer_type** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**discount_fixed_amount** | **float** |  | [optional] 
**discount_percentage** | **float** |  | [optional] 
**discount_type** | **str** |  | [optional] 
**expires_at** | **datetime** | ISO 8601 datetime | [optional] 
**is_active** | **bool** | Whether this resource is currently active | [optional] 
**is_organization_wide** | **bool** |  | [optional] 
**max_quantity_per_use** | **float** |  | [optional] 
**max_uses** | **float** |  | [optional] 
**scope_type** | **str** |  | [optional] 
**usage_frequency_limit** | **str** |  | [optional] 
**usage_limit_value** | **float** |  | [optional] 
**valid_from** | **str** |  | [optional] 

## Example

```python
from lomi_sdk.models.discount_coupons_update import DiscountCouponsUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of DiscountCouponsUpdate from a JSON string
discount_coupons_update_instance = DiscountCouponsUpdate.from_json(json)
# print the JSON string representation of the object
print(DiscountCouponsUpdate.to_json())

# convert the object into a dict
discount_coupons_update_dict = discount_coupons_update_instance.to_dict()
# create an instance of DiscountCouponsUpdate from a dict
discount_coupons_update_from_dict = DiscountCouponsUpdate.from_dict(discount_coupons_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


