# lomi.RefundsApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_refund**](RefundsApi.md#create_refund) | **POST** /refunds | Create refund
[**delete_refund**](RefundsApi.md#delete_refund) | **DELETE** /refunds/{refund_id} | Delete refund
[**list_refunds**](RefundsApi.md#list_refunds) | **GET** /refunds | List refunds
[**retrieve_refund**](RefundsApi.md#retrieve_refund) | **GET** /refunds/{refund_id} | Retrieve refund
[**update_refund**](RefundsApi.md#update_refund) | **PATCH** /refunds/{refund_id} | Update refund


# **create_refund**
> Refunds create_refund(refunds_create)

Create refund

Refund management - process and track refunds

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.refunds import Refunds
from lomi.models.refunds_create import RefundsCreate
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
    api_instance = lomi.RefundsApi(api_client)
    refunds_create = {"name":"Sample refund","description":"Example refund object"} # RefundsCreate | 

    try:
        # Create refund
        api_response = api_instance.create_refund(refunds_create)
        print("The response of RefundsApi->create_refund:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RefundsApi->create_refund: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refunds_create** | [**RefundsCreate**](RefundsCreate.md)|  | 

### Return type

[**Refunds**](Refunds.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Refund successfully created |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_refund**
> delete_refund(refund_id)

Delete refund

Delete a specific refund. This action cannot be undone.

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
    api_instance = lomi.RefundsApi(api_client)
    refund_id = 'refund_id_example' # str | Unique identifier for the refund

    try:
        # Delete refund
        api_instance.delete_refund(refund_id)
    except Exception as e:
        print("Exception when calling RefundsApi->delete_refund: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refund_id** | **str**| Unique identifier for the refund | 

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
**204** | Refund successfully deleted |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_refunds**
> ListRefunds200Response list_refunds(limit=limit, offset=offset, sort=sort)

List refunds

Refund management - process and track refunds

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.list_refunds200_response import ListRefunds200Response
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
    api_instance = lomi.RefundsApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List refunds
        api_response = api_instance.list_refunds(limit=limit, offset=offset, sort=sort)
        print("The response of RefundsApi->list_refunds:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RefundsApi->list_refunds: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListRefunds200Response**](ListRefunds200Response.md)

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

# **retrieve_refund**
> Refunds retrieve_refund(refund_id)

Retrieve refund

Retrieve a specific refund by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.refunds import Refunds
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
    api_instance = lomi.RefundsApi(api_client)
    refund_id = 'refund_id_example' # str | Unique identifier for the refund

    try:
        # Retrieve refund
        api_response = api_instance.retrieve_refund(refund_id)
        print("The response of RefundsApi->retrieve_refund:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RefundsApi->retrieve_refund: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refund_id** | **str**| Unique identifier for the refund | 

### Return type

[**Refunds**](Refunds.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Refund retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_refund**
> Refunds update_refund(refund_id, refunds_update)

Update refund

Update a specific refund. Only provided fields will be updated.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.refunds import Refunds
from lomi.models.refunds_update import RefundsUpdate
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
    api_instance = lomi.RefundsApi(api_client)
    refund_id = 'refund_id_example' # str | Unique identifier for the refund
    refunds_update = {"metadata":{"updated_at":"2025-11-21T13:32:16.239Z","updated_reason":"Administrative update"}} # RefundsUpdate | 

    try:
        # Update refund
        api_response = api_instance.update_refund(refund_id, refunds_update)
        print("The response of RefundsApi->update_refund:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RefundsApi->update_refund: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refund_id** | **str**| Unique identifier for the refund | 
 **refunds_update** | [**RefundsUpdate**](RefundsUpdate.md)|  | 

### Return type

[**Refunds**](Refunds.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Refund successfully updated |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

