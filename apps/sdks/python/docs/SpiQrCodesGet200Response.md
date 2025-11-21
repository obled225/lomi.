# SpiQrCodesGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[SpiQrCodes]**](SpiQrCodes.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.spi_qr_codes_get200_response import SpiQrCodesGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SpiQrCodesGet200Response from a JSON string
spi_qr_codes_get200_response_instance = SpiQrCodesGet200Response.from_json(json)
# print the JSON string representation of the object
print(SpiQrCodesGet200Response.to_json())

# convert the object into a dict
spi_qr_codes_get200_response_dict = spi_qr_codes_get200_response_instance.to_dict()
# create an instance of SpiQrCodesGet200Response from a dict
spi_qr_codes_get200_response_from_dict = SpiQrCodesGet200Response.from_dict(spi_qr_codes_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


