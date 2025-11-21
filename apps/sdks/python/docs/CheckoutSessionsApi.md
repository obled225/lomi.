# lomi.CheckoutSessionsApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_checkout_session**](CheckoutSessionsApi.md#create_checkout_session) | **POST** /checkout_sessions | Create checkout session
[**delete_checkout_session**](CheckoutSessionsApi.md#delete_checkout_session) | **DELETE** /checkout_sessions/{session_id} | Delete checkout session
[**list_checkout_sessions**](CheckoutSessionsApi.md#list_checkout_sessions) | **GET** /checkout_sessions | List checkout sessions
[**retrieve_checkout_session**](CheckoutSessionsApi.md#retrieve_checkout_session) | **GET** /checkout_sessions/{session_id} | Retrieve checkout session
[**update_checkout_session**](CheckoutSessionsApi.md#update_checkout_session) | **PATCH** /checkout_sessions/{session_id} | Update checkout session


# **create_checkout_session**
> CheckoutSessions create_checkout_session(checkout_sessions_create)

Create checkout session

Checkout sessions - create hosted payment pages

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.checkout_sessions import CheckoutSessions
from lomi.models.checkout_sessions_create import CheckoutSessionsCreate
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
    api_instance = lomi.CheckoutSessionsApi(api_client)
    checkout_sessions_create = {"amount":15000,"currency_code":"XOF","product_id":"prod_1234567890abcdef","success_url":"https://example.com/success","cancel_url":"https://example.com/cancel","customer_email":"customer@example.com"} # CheckoutSessionsCreate | 

    try:
        # Create checkout session
        api_response = api_instance.create_checkout_session(checkout_sessions_create)
        print("The response of CheckoutSessionsApi->create_checkout_session:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckoutSessionsApi->create_checkout_session: %s\n" % e)
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
**201** | Checkout_session successfully created |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_checkout_session**
> delete_checkout_session(session_id)

Delete checkout session

Delete a specific checkout session. This action cannot be undone.

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
    api_instance = lomi.CheckoutSessionsApi(api_client)
    session_id = 'session_id_example' # str | Unique identifier for the checkout session

    try:
        # Delete checkout session
        api_instance.delete_checkout_session(session_id)
    except Exception as e:
        print("Exception when calling CheckoutSessionsApi->delete_checkout_session: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**| Unique identifier for the checkout session | 

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
**204** | Checkout_session successfully deleted |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_checkout_sessions**
> ListCheckoutSessions200Response list_checkout_sessions(limit=limit, offset=offset, sort=sort)

List checkout sessions

Checkout sessions - create hosted payment pages

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.list_checkout_sessions200_response import ListCheckoutSessions200Response
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
    api_instance = lomi.CheckoutSessionsApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List checkout sessions
        api_response = api_instance.list_checkout_sessions(limit=limit, offset=offset, sort=sort)
        print("The response of CheckoutSessionsApi->list_checkout_sessions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckoutSessionsApi->list_checkout_sessions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListCheckoutSessions200Response**](ListCheckoutSessions200Response.md)

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

# **retrieve_checkout_session**
> CheckoutSessions retrieve_checkout_session(session_id)

Retrieve checkout session

Retrieve a specific checkout session by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.checkout_sessions import CheckoutSessions
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
    api_instance = lomi.CheckoutSessionsApi(api_client)
    session_id = 'session_id_example' # str | Unique identifier for the checkout session

    try:
        # Retrieve checkout session
        api_response = api_instance.retrieve_checkout_session(session_id)
        print("The response of CheckoutSessionsApi->retrieve_checkout_session:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckoutSessionsApi->retrieve_checkout_session: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**| Unique identifier for the checkout session | 

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
**200** | Checkout_session retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_checkout_session**
> CheckoutSessions update_checkout_session(session_id, checkout_sessions_update)

Update checkout session

Update a specific checkout session. Only provided fields will be updated.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.checkout_sessions import CheckoutSessions
from lomi.models.checkout_sessions_update import CheckoutSessionsUpdate
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
    api_instance = lomi.CheckoutSessionsApi(api_client)
    session_id = 'session_id_example' # str | Unique identifier for the checkout session
    checkout_sessions_update = {"metadata":{"updated_at":"2025-11-21T13:32:16.240Z","updated_reason":"Administrative update"}} # CheckoutSessionsUpdate | 

    try:
        # Update checkout session
        api_response = api_instance.update_checkout_session(session_id, checkout_sessions_update)
        print("The response of CheckoutSessionsApi->update_checkout_session:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckoutSessionsApi->update_checkout_session: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**| Unique identifier for the checkout session | 
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
**200** | Checkout_session successfully updated |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

