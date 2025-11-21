# lomi_sdk.CheckoutSessionApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkout_sessions_get**](CheckoutSessionApi.md#checkout_sessions_get) | **GET** /checkout_sessions | List checkout_sessions
[**checkout_sessions_post**](CheckoutSessionApi.md#checkout_sessions_post) | **POST** /checkout_sessions | Create checkout_session
[**checkout_sessions_session_id_delete**](CheckoutSessionApi.md#checkout_sessions_session_id_delete) | **DELETE** /checkout_sessions/{session_id} | Delete checkout_session
[**checkout_sessions_session_id_get**](CheckoutSessionApi.md#checkout_sessions_session_id_get) | **GET** /checkout_sessions/{session_id} | Get checkout_session
[**checkout_sessions_session_id_patch**](CheckoutSessionApi.md#checkout_sessions_session_id_patch) | **PATCH** /checkout_sessions/{session_id} | Update checkout_session


# **checkout_sessions_get**
> CheckoutSessionsGet200Response checkout_sessions_get(limit=limit, offset=offset, sort=sort)

List checkout_sessions

Retrieve a paginated list of checkout_sessions

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.checkout_sessions_get200_response import CheckoutSessionsGet200Response
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
    api_instance = lomi_sdk.CheckoutSessionApi(api_client)
    limit = 20 # int | Maximum number of items to return (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    sort = 'sort_example' # str | Sort order (e.g., created_at:desc) (optional)

    try:
        # List checkout_sessions
        api_response = api_instance.checkout_sessions_get(limit=limit, offset=offset, sort=sort)
        print("The response of CheckoutSessionApi->checkout_sessions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckoutSessionApi->checkout_sessions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **sort** | **str**| Sort order (e.g., created_at:desc) | [optional] 

### Return type

[**CheckoutSessionsGet200Response**](CheckoutSessionsGet200Response.md)

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

# **checkout_sessions_post**
> CheckoutSessions checkout_sessions_post(checkout_sessions_create)

Create checkout_session

Create a new checkout_session

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.checkout_sessions import CheckoutSessions
from lomi_sdk.models.checkout_sessions_create import CheckoutSessionsCreate
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
    api_instance = lomi_sdk.CheckoutSessionApi(api_client)
    checkout_sessions_create = lomi_sdk.CheckoutSessionsCreate() # CheckoutSessionsCreate | 

    try:
        # Create checkout_session
        api_response = api_instance.checkout_sessions_post(checkout_sessions_create)
        print("The response of CheckoutSessionApi->checkout_sessions_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckoutSessionApi->checkout_sessions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkout_sessions_create** | [**CheckoutSessionsCreate**](CheckoutSessionsCreate.md)|  | 

### Return type

[**CheckoutSessions**](CheckoutSessions.md)

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

# **checkout_sessions_session_id_delete**
> checkout_sessions_session_id_delete(session_id)

Delete checkout_session

Delete a specific checkout_session

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
    api_instance = lomi_sdk.CheckoutSessionApi(api_client)
    session_id = 'session_id_example' # str | The checkout_session ID

    try:
        # Delete checkout_session
        api_instance.checkout_sessions_session_id_delete(session_id)
    except Exception as e:
        print("Exception when calling CheckoutSessionApi->checkout_sessions_session_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**| The checkout_session ID | 

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

# **checkout_sessions_session_id_get**
> CheckoutSessions checkout_sessions_session_id_get(session_id)

Get checkout_session

Retrieve a specific checkout_session by ID

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.checkout_sessions import CheckoutSessions
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
    api_instance = lomi_sdk.CheckoutSessionApi(api_client)
    session_id = 'session_id_example' # str | The checkout_session ID

    try:
        # Get checkout_session
        api_response = api_instance.checkout_sessions_session_id_get(session_id)
        print("The response of CheckoutSessionApi->checkout_sessions_session_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckoutSessionApi->checkout_sessions_session_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**| The checkout_session ID | 

### Return type

[**CheckoutSessions**](CheckoutSessions.md)

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

# **checkout_sessions_session_id_patch**
> CheckoutSessions checkout_sessions_session_id_patch(session_id, checkout_sessions_update)

Update checkout_session

Update a specific checkout_session

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.checkout_sessions import CheckoutSessions
from lomi_sdk.models.checkout_sessions_update import CheckoutSessionsUpdate
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
    api_instance = lomi_sdk.CheckoutSessionApi(api_client)
    session_id = 'session_id_example' # str | The checkout_session ID
    checkout_sessions_update = lomi_sdk.CheckoutSessionsUpdate() # CheckoutSessionsUpdate | 

    try:
        # Update checkout_session
        api_response = api_instance.checkout_sessions_session_id_patch(session_id, checkout_sessions_update)
        print("The response of CheckoutSessionApi->checkout_sessions_session_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckoutSessionApi->checkout_sessions_session_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**| The checkout_session ID | 
 **checkout_sessions_update** | [**CheckoutSessionsUpdate**](CheckoutSessionsUpdate.md)|  | 

### Return type

[**CheckoutSessions**](CheckoutSessions.md)

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

