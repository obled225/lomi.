# lomi.PaymentRequestsApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_payment_request**](PaymentRequestsApi.md#create_payment_request) | **POST** /payment_requests | Create payment request
[**delete_payment_request**](PaymentRequestsApi.md#delete_payment_request) | **DELETE** /payment_requests/{request_id} | Delete payment request
[**list_payment_requests**](PaymentRequestsApi.md#list_payment_requests) | **GET** /payment_requests | List payment requests
[**retrieve_payment_request**](PaymentRequestsApi.md#retrieve_payment_request) | **GET** /payment_requests/{request_id} | Retrieve payment request
[**update_payment_request**](PaymentRequestsApi.md#update_payment_request) | **PATCH** /payment_requests/{request_id} | Update payment request


# **create_payment_request**
> PaymentRequests create_payment_request(payment_requests_create)

Create payment request

Payment requests - create payment intents and track status

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.payment_requests import PaymentRequests
from lomi.models.payment_requests_create import PaymentRequestsCreate
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
    api_instance = lomi.PaymentRequestsApi(api_client)
    payment_requests_create = {"amount":25000,"currency_code":"XOF","customer_id":"cus_1234567890abcdef","description":"Payment for premium subscription","metadata":{"order_id":"ORD-2024-001"}} # PaymentRequestsCreate | 

    try:
        # Create payment request
        api_response = api_instance.create_payment_request(payment_requests_create)
        print("The response of PaymentRequestsApi->create_payment_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentRequestsApi->create_payment_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_requests_create** | [**PaymentRequestsCreate**](PaymentRequestsCreate.md)|  | 

### Return type

[**PaymentRequests**](PaymentRequests.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Payment_request successfully created |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_payment_request**
> delete_payment_request(request_id)

Delete payment request

Delete a specific payment request. This action cannot be undone.

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
    api_instance = lomi.PaymentRequestsApi(api_client)
    request_id = 'request_id_example' # str | Unique identifier for the payment request

    try:
        # Delete payment request
        api_instance.delete_payment_request(request_id)
    except Exception as e:
        print("Exception when calling PaymentRequestsApi->delete_payment_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **str**| Unique identifier for the payment request | 

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
**204** | Payment_request successfully deleted |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_payment_requests**
> ListPaymentRequests200Response list_payment_requests(limit=limit, offset=offset, sort=sort)

List payment requests

Payment requests - create payment intents and track status

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.list_payment_requests200_response import ListPaymentRequests200Response
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
    api_instance = lomi.PaymentRequestsApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List payment requests
        api_response = api_instance.list_payment_requests(limit=limit, offset=offset, sort=sort)
        print("The response of PaymentRequestsApi->list_payment_requests:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentRequestsApi->list_payment_requests: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListPaymentRequests200Response**](ListPaymentRequests200Response.md)

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

# **retrieve_payment_request**
> PaymentRequests retrieve_payment_request(request_id)

Retrieve payment request

Retrieve a specific payment request by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.payment_requests import PaymentRequests
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
    api_instance = lomi.PaymentRequestsApi(api_client)
    request_id = 'request_id_example' # str | Unique identifier for the payment request

    try:
        # Retrieve payment request
        api_response = api_instance.retrieve_payment_request(request_id)
        print("The response of PaymentRequestsApi->retrieve_payment_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentRequestsApi->retrieve_payment_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **str**| Unique identifier for the payment request | 

### Return type

[**PaymentRequests**](PaymentRequests.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment_request retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_payment_request**
> PaymentRequests update_payment_request(request_id, payment_requests_update)

Update payment request

Update a specific payment request. Only provided fields will be updated.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.payment_requests import PaymentRequests
from lomi.models.payment_requests_update import PaymentRequestsUpdate
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
    api_instance = lomi.PaymentRequestsApi(api_client)
    request_id = 'request_id_example' # str | Unique identifier for the payment request
    payment_requests_update = {"metadata":{"order_id":"ORD-2024-001-UPDATED","notes":"Customer requested invoice"}} # PaymentRequestsUpdate | 

    try:
        # Update payment request
        api_response = api_instance.update_payment_request(request_id, payment_requests_update)
        print("The response of PaymentRequestsApi->update_payment_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentRequestsApi->update_payment_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **str**| Unique identifier for the payment request | 
 **payment_requests_update** | [**PaymentRequestsUpdate**](PaymentRequestsUpdate.md)|  | 

### Return type

[**PaymentRequests**](PaymentRequests.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment_request successfully updated |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

