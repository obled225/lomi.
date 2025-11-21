# lomi.SPIAccountAliasesApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_spi_account_aliases**](SPIAccountAliasesApi.md#list_spi_account_aliases) | **GET** /spi_account_aliases | List spi account aliases
[**retrieve_spi_account_aliase**](SPIAccountAliasesApi.md#retrieve_spi_account_aliase) | **GET** /spi_account_aliases/{alias_id} | Retrieve spi account aliase


# **list_spi_account_aliases**
> ListSpiAccountAliases200Response list_spi_account_aliases(limit=limit, offset=offset, sort=sort)

List spi account aliases

SPI account aliases - manage SPI payment aliases

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.list_spi_account_aliases200_response import ListSpiAccountAliases200Response
from lomi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lomi.africa/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = lomi.Configuration(
    host = "https://api.lomi.africa/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with lomi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = lomi.SPIAccountAliasesApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List spi account aliases
        api_response = api_instance.list_spi_account_aliases(limit=limit, offset=offset, sort=sort)
        print("The response of SPIAccountAliasesApi->list_spi_account_aliases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SPIAccountAliasesApi->list_spi_account_aliases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListSpiAccountAliases200Response**](ListSpiAccountAliases200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with paginated data |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_spi_account_aliase**
> SpiAccountAliases retrieve_spi_account_aliase(alias_id)

Retrieve spi account aliase

Retrieve a specific spi account aliase by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.spi_account_aliases import SpiAccountAliases
from lomi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lomi.africa/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = lomi.Configuration(
    host = "https://api.lomi.africa/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with lomi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = lomi.SPIAccountAliasesApi(api_client)
    alias_id = 'alias_id_example' # str | Unique identifier for the spi account aliase

    try:
        # Retrieve spi account aliase
        api_response = api_instance.retrieve_spi_account_aliase(alias_id)
        print("The response of SPIAccountAliasesApi->retrieve_spi_account_aliase:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SPIAccountAliasesApi->retrieve_spi_account_aliase: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias_id** | **str**| Unique identifier for the spi account aliase | 

### Return type

[**SpiAccountAliases**](SpiAccountAliases.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Spi_account_aliase retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

