# SpiAccountAliasesGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[SpiAccountAliases]**](SpiAccountAliases.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.spi_account_aliases_get200_response import SpiAccountAliasesGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SpiAccountAliasesGet200Response from a JSON string
spi_account_aliases_get200_response_instance = SpiAccountAliasesGet200Response.from_json(json)
# print the JSON string representation of the object
print(SpiAccountAliasesGet200Response.to_json())

# convert the object into a dict
spi_account_aliases_get200_response_dict = spi_account_aliases_get200_response_instance.to_dict()
# create an instance of SpiAccountAliasesGet200Response from a dict
spi_account_aliases_get200_response_from_dict = SpiAccountAliasesGet200Response.from_dict(spi_account_aliases_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


