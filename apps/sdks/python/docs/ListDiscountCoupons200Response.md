# ListDiscountCoupons200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[DiscountCoupons]**](DiscountCoupons.md) |  | [optional] 
**pagination** | [**ListCustomers200ResponsePagination**](ListCustomers200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi.models.list_discount_coupons200_response import ListDiscountCoupons200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListDiscountCoupons200Response from a JSON string
list_discount_coupons200_response_instance = ListDiscountCoupons200Response.from_json(json)
# print the JSON string representation of the object
print(ListDiscountCoupons200Response.to_json())

# convert the object into a dict
list_discount_coupons200_response_dict = list_discount_coupons200_response_instance.to_dict()
# create an instance of ListDiscountCoupons200Response from a dict
list_discount_coupons200_response_from_dict = ListDiscountCoupons200Response.from_dict(list_discount_coupons200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


