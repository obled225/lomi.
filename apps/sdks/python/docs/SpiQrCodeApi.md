# lomi_sdk.SpiQrCodeApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**spi_qr_codes_get**](SpiQrCodeApi.md#spi_qr_codes_get) | **GET** /spi_qr_codes | List spi_qr_codes
[**spi_qr_codes_post**](SpiQrCodeApi.md#spi_qr_codes_post) | **POST** /spi_qr_codes | Create spi_qr_code
[**spi_qr_codes_qr_code_id_delete**](SpiQrCodeApi.md#spi_qr_codes_qr_code_id_delete) | **DELETE** /spi_qr_codes/{qr_code_id} | Delete spi_qr_code
[**spi_qr_codes_qr_code_id_get**](SpiQrCodeApi.md#spi_qr_codes_qr_code_id_get) | **GET** /spi_qr_codes/{qr_code_id} | Get spi_qr_code
[**spi_qr_codes_qr_code_id_patch**](SpiQrCodeApi.md#spi_qr_codes_qr_code_id_patch) | **PATCH** /spi_qr_codes/{qr_code_id} | Update spi_qr_code


# **spi_qr_codes_get**
> SpiQrCodesGet200Response spi_qr_codes_get(limit=limit, offset=offset, sort=sort)

List spi_qr_codes

Retrieve a paginated list of spi_qr_codes

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.spi_qr_codes_get200_response import SpiQrCodesGet200Response
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
    api_instance = lomi_sdk.SpiQrCodeApi(api_client)
    limit = 20 # int | Maximum number of items to return (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    sort = 'sort_example' # str | Sort order (e.g., created_at:desc) (optional)

    try:
        # List spi_qr_codes
        api_response = api_instance.spi_qr_codes_get(limit=limit, offset=offset, sort=sort)
        print("The response of SpiQrCodeApi->spi_qr_codes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpiQrCodeApi->spi_qr_codes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **sort** | **str**| Sort order (e.g., created_at:desc) | [optional] 

### Return type

[**SpiQrCodesGet200Response**](SpiQrCodesGet200Response.md)

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

# **spi_qr_codes_post**
> SpiQrCodes spi_qr_codes_post(spi_qr_codes_create)

Create spi_qr_code

Create a new spi_qr_code

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.spi_qr_codes import SpiQrCodes
from lomi_sdk.models.spi_qr_codes_create import SpiQrCodesCreate
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
    api_instance = lomi_sdk.SpiQrCodeApi(api_client)
    spi_qr_codes_create = lomi_sdk.SpiQrCodesCreate() # SpiQrCodesCreate | 

    try:
        # Create spi_qr_code
        api_response = api_instance.spi_qr_codes_post(spi_qr_codes_create)
        print("The response of SpiQrCodeApi->spi_qr_codes_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpiQrCodeApi->spi_qr_codes_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **spi_qr_codes_create** | [**SpiQrCodesCreate**](SpiQrCodesCreate.md)|  | 

### Return type

[**SpiQrCodes**](SpiQrCodes.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successfully created |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spi_qr_codes_qr_code_id_delete**
> spi_qr_codes_qr_code_id_delete(qr_code_id)

Delete spi_qr_code

Delete a specific spi_qr_code

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
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
    api_instance = lomi_sdk.SpiQrCodeApi(api_client)
    qr_code_id = 'qr_code_id_example' # str | The spi_qr_code ID

    try:
        # Delete spi_qr_code
        api_instance.spi_qr_codes_qr_code_id_delete(qr_code_id)
    except Exception as e:
        print("Exception when calling SpiQrCodeApi->spi_qr_codes_qr_code_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qr_code_id** | **str**| The spi_qr_code ID | 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successfully deleted |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spi_qr_codes_qr_code_id_get**
> SpiQrCodes spi_qr_codes_qr_code_id_get(qr_code_id)

Get spi_qr_code

Retrieve a specific spi_qr_code by ID

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.spi_qr_codes import SpiQrCodes
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
    api_instance = lomi_sdk.SpiQrCodeApi(api_client)
    qr_code_id = 'qr_code_id_example' # str | The spi_qr_code ID

    try:
        # Get spi_qr_code
        api_response = api_instance.spi_qr_codes_qr_code_id_get(qr_code_id)
        print("The response of SpiQrCodeApi->spi_qr_codes_qr_code_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpiQrCodeApi->spi_qr_codes_qr_code_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qr_code_id** | **str**| The spi_qr_code ID | 

### Return type

[**SpiQrCodes**](SpiQrCodes.md)

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

# **spi_qr_codes_qr_code_id_patch**
> SpiQrCodes spi_qr_codes_qr_code_id_patch(qr_code_id, spi_qr_codes_update)

Update spi_qr_code

Update a specific spi_qr_code

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.spi_qr_codes import SpiQrCodes
from lomi_sdk.models.spi_qr_codes_update import SpiQrCodesUpdate
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
    api_instance = lomi_sdk.SpiQrCodeApi(api_client)
    qr_code_id = 'qr_code_id_example' # str | The spi_qr_code ID
    spi_qr_codes_update = lomi_sdk.SpiQrCodesUpdate() # SpiQrCodesUpdate | 

    try:
        # Update spi_qr_code
        api_response = api_instance.spi_qr_codes_qr_code_id_patch(qr_code_id, spi_qr_codes_update)
        print("The response of SpiQrCodeApi->spi_qr_codes_qr_code_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpiQrCodeApi->spi_qr_codes_qr_code_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qr_code_id** | **str**| The spi_qr_code ID | 
 **spi_qr_codes_update** | [**SpiQrCodesUpdate**](SpiQrCodesUpdate.md)|  | 

### Return type

[**SpiQrCodes**](SpiQrCodes.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

