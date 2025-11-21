# DiscountCouponsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[DiscountCoupons]**](DiscountCoupons.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.discount_coupons_get200_response import DiscountCouponsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DiscountCouponsGet200Response from a JSON string
discount_coupons_get200_response_instance = DiscountCouponsGet200Response.from_json(json)
# print the JSON string representation of the object
print(DiscountCouponsGet200Response.to_json())

# convert the object into a dict
discount_coupons_get200_response_dict = discount_coupons_get200_response_instance.to_dict()
# create an instance of DiscountCouponsGet200Response from a dict
discount_coupons_get200_response_from_dict = DiscountCouponsGet200Response.from_dict(discount_coupons_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


