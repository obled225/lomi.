# ListSpiAccountAliases200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[SpiAccountAliases]**](SpiAccountAliases.md) |  | [optional] 
**pagination** | [**ListCustomers200ResponsePagination**](ListCustomers200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.list_spi_account_aliases200_response import ListSpiAccountAliases200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListSpiAccountAliases200Response from a JSON string
list_spi_account_aliases200_response_instance = ListSpiAccountAliases200Response.from_json(json)
# print the JSON string representation of the object
print(ListSpiAccountAliases200Response.to_json())

# convert the object into a dict
list_spi_account_aliases200_response_dict = list_spi_account_aliases200_response_instance.to_dict()
# create an instance of ListSpiAccountAliases200Response from a dict
list_spi_account_aliases200_response_from_dict = ListSpiAccountAliases200Response.from_dict(list_spi_account_aliases200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


