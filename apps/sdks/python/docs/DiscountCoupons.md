# DiscountCoupons

discount coupons resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applies_to_product_types** | **str** |  | [optional] 
**code** | **str** |  | [optional] 
**coupon_id** | **str** | Unique identifier (UUID format) | [optional] 
**created_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**current_uses** | **float** |  | [optional] 
**customer_type** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**discount_fixed_amount** | **float** |  | [optional] 
**discount_percentage** | **float** |  | [optional] 
**discount_type** | **str** |  | [optional] 
**environment** | **str** |  | [optional] 
**expires_at** | **datetime** | ISO 8601 datetime | [optional] 
**is_active** | **bool** | Whether this resource is currently active | [optional] 
**is_organization_wide** | **bool** |  | [optional] 
**max_quantity_per_use** | **float** |  | [optional] 
**max_uses** | **float** |  | [optional] 
**organization_id** | **str** | Unique identifier (UUID format) | [optional] 
**scope_type** | **str** |  | [optional] 
**updated_at** | **datetime** | ISO 8601 datetime | [optional] [readonly] 
**usage_frequency_limit** | **str** |  | [optional] 
**usage_limit_value** | **float** |  | [optional] 
**valid_from** | **str** |  | [optional] 

## Example

```python
from lomi.models.discount_coupons import DiscountCoupons

# TODO update the JSON string below
json = "{}"
# create an instance of DiscountCoupons from a JSON string
discount_coupons_instance = DiscountCoupons.from_json(json)
# print the JSON string representation of the object
print(DiscountCoupons.to_json())

# convert the object into a dict
discount_coupons_dict = discount_coupons_instance.to_dict()
# create an instance of DiscountCoupons from a dict
discount_coupons_from_dict = DiscountCoupons.from_dict(discount_coupons_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


