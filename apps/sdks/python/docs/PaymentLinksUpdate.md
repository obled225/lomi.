# PaymentLinksUpdate

Update payment_links input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_coupon_code** | **bool** |  | [optional] 
**allow_quantity** | **bool** |  | [optional] 
**allowed_providers** | **str** |  | [optional] 
**amount** | **float** |  | [optional] 
**cancel_url** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**created_by** | **str** |  | [optional] 
**currency_code** | **str** |  | [optional] 
**environment** | **str** |  | [optional] 
**expires_at** | **datetime** |  | [optional] 
**is_active** | **bool** |  | [optional] 
**link_id** | **str** |  | [optional] 
**link_type** | **str** |  | [optional] 
**metadata** | **object** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**price_id** | **str** |  | [optional] 
**private_description** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**public_description** | **str** |  | [optional] 
**quantity** | **float** |  | [optional] 
**success_url** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from lomi_sdk.models.payment_links_update import PaymentLinksUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentLinksUpdate from a JSON string
payment_links_update_instance = PaymentLinksUpdate.from_json(json)
# print the JSON string representation of the object
print(PaymentLinksUpdate.to_json())

# convert the object into a dict
payment_links_update_dict = payment_links_update_instance.to_dict()
# create an instance of PaymentLinksUpdate from a dict
payment_links_update_from_dict = PaymentLinksUpdate.from_dict(payment_links_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


