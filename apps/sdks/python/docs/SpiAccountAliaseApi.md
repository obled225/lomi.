# lomi_sdk.SpiAccountAliaseApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**spi_account_aliases_alias_id_get**](SpiAccountAliaseApi.md#spi_account_aliases_alias_id_get) | **GET** /spi_account_aliases/{alias_id} | Get spi_account_aliase
[**spi_account_aliases_get**](SpiAccountAliaseApi.md#spi_account_aliases_get) | **GET** /spi_account_aliases | List spi_account_aliases


# **spi_account_aliases_alias_id_get**
> SpiAccountAliases spi_account_aliases_alias_id_get(alias_id)

Get spi_account_aliase

Retrieve a specific spi_account_aliase by ID

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.spi_account_aliases import SpiAccountAliases
from lomi_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lomi.africa/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = lomi_sdk.Configuration(
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
with lomi_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = lomi_sdk.SpiAccountAliaseApi(api_client)
    alias_id = 'alias_id_example' # str | The spi_account_aliase ID

    try:
        # Get spi_account_aliase
        api_response = api_instance.spi_account_aliases_alias_id_get(alias_id)
        print("The response of SpiAccountAliaseApi->spi_account_aliases_alias_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpiAccountAliaseApi->spi_account_aliases_alias_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias_id** | **str**| The spi_account_aliase ID | 

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
**200** | Successful response |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spi_account_aliases_get**
> SpiAccountAliasesGet200Response spi_account_aliases_get(limit=limit, offset=offset, sort=sort)

List spi_account_aliases

Retrieve a paginated list of spi_account_aliases

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.spi_account_aliases_get200_response import SpiAccountAliasesGet200Response
from lomi_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lomi.africa/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = lomi_sdk.Configuration(
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
with lomi_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = lomi_sdk.SpiAccountAliaseApi(api_client)
    limit = 20 # int | Maximum number of items to return (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    sort = 'sort_example' # str | Sort order (e.g., created_at:desc) (optional)

    try:
        # List spi_account_aliases
        api_response = api_instance.spi_account_aliases_get(limit=limit, offset=offset, sort=sort)
        print("The response of SpiAccountAliaseApi->spi_account_aliases_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpiAccountAliaseApi->spi_account_aliases_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **sort** | **str**| Sort order (e.g., created_at:desc) | [optional] 

### Return type

[**SpiAccountAliasesGet200Response**](SpiAccountAliasesGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

