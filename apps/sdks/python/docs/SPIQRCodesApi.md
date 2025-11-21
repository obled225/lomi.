# lomi.SPIQRCodesApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_spi_qr_code**](SPIQRCodesApi.md#create_spi_qr_code) | **POST** /spi_qr_codes | Create spi qr code
[**delete_spi_qr_code**](SPIQRCodesApi.md#delete_spi_qr_code) | **DELETE** /spi_qr_codes/{qr_code_id} | Delete spi qr code
[**list_spi_qr_codes**](SPIQRCodesApi.md#list_spi_qr_codes) | **GET** /spi_qr_codes | List spi qr codes
[**retrieve_spi_qr_code**](SPIQRCodesApi.md#retrieve_spi_qr_code) | **GET** /spi_qr_codes/{qr_code_id} | Retrieve spi qr code
[**update_spi_qr_code**](SPIQRCodesApi.md#update_spi_qr_code) | **PATCH** /spi_qr_codes/{qr_code_id} | Update spi qr code


# **create_spi_qr_code**
> SpiQrCodes create_spi_qr_code(spi_qr_codes_create)

Create spi qr code

SPI QR codes - generate and manage SPI QR payment codes

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.spi_qr_codes import SpiQrCodes
from lomi.models.spi_qr_codes_create import SpiQrCodesCreate
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
    api_instance = lomi.SPIQRCodesApi(api_client)
    spi_qr_codes_create = {"amount":5000,"currency_code":"XOF","description":"QR code for in-store payment","expires_at":"2024-12-31T23:59:59Z"} # SpiQrCodesCreate | 

    try:
        # Create spi qr code
        api_response = api_instance.create_spi_qr_code(spi_qr_codes_create)
        print("The response of SPIQRCodesApi->create_spi_qr_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SPIQRCodesApi->create_spi_qr_code: %s\n" % e)
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
**201** | Spi_qr_code successfully created |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_spi_qr_code**
> delete_spi_qr_code(qr_code_id)

Delete spi qr code

Delete a specific spi qr code. This action cannot be undone.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
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
    api_instance = lomi.SPIQRCodesApi(api_client)
    qr_code_id = 'qr_code_id_example' # str | Unique identifier for the spi qr code

    try:
        # Delete spi qr code
        api_instance.delete_spi_qr_code(qr_code_id)
    except Exception as e:
        print("Exception when calling SPIQRCodesApi->delete_spi_qr_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qr_code_id** | **str**| Unique identifier for the spi qr code | 

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
**204** | Spi_qr_code successfully deleted |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_spi_qr_codes**
> ListSpiQrCodes200Response list_spi_qr_codes(limit=limit, offset=offset, sort=sort)

List spi qr codes

SPI QR codes - generate and manage SPI QR payment codes

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.list_spi_qr_codes200_response import ListSpiQrCodes200Response
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
    api_instance = lomi.SPIQRCodesApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List spi qr codes
        api_response = api_instance.list_spi_qr_codes(limit=limit, offset=offset, sort=sort)
        print("The response of SPIQRCodesApi->list_spi_qr_codes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SPIQRCodesApi->list_spi_qr_codes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListSpiQrCodes200Response**](ListSpiQrCodes200Response.md)

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

# **retrieve_spi_qr_code**
> SpiQrCodes retrieve_spi_qr_code(qr_code_id)

Retrieve spi qr code

Retrieve a specific spi qr code by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.spi_qr_codes import SpiQrCodes
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
    api_instance = lomi.SPIQRCodesApi(api_client)
    qr_code_id = 'qr_code_id_example' # str | Unique identifier for the spi qr code

    try:
        # Retrieve spi qr code
        api_response = api_instance.retrieve_spi_qr_code(qr_code_id)
        print("The response of SPIQRCodesApi->retrieve_spi_qr_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SPIQRCodesApi->retrieve_spi_qr_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qr_code_id** | **str**| Unique identifier for the spi qr code | 

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
**200** | Spi_qr_code retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_spi_qr_code**
> SpiQrCodes update_spi_qr_code(qr_code_id, spi_qr_codes_update)

Update spi qr code

Update a specific spi qr code. Only provided fields will be updated.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.spi_qr_codes import SpiQrCodes
from lomi.models.spi_qr_codes_update import SpiQrCodesUpdate
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
    api_instance = lomi.SPIQRCodesApi(api_client)
    qr_code_id = 'qr_code_id_example' # str | Unique identifier for the spi qr code
    spi_qr_codes_update = {"metadata":{"updated_at":"2025-11-21T13:32:16.241Z","updated_reason":"Administrative update"}} # SpiQrCodesUpdate | 

    try:
        # Update spi qr code
        api_response = api_instance.update_spi_qr_code(qr_code_id, spi_qr_codes_update)
        print("The response of SPIQRCodesApi->update_spi_qr_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SPIQRCodesApi->update_spi_qr_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qr_code_id** | **str**| Unique identifier for the spi qr code | 
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
**200** | Spi_qr_code successfully updated |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

