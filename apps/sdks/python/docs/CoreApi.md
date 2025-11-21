# lomi_sdk.CoreApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_customer**](CoreApi.md#create_customer) | **POST** /customers | Create customer
[**create_payment_request**](CoreApi.md#create_payment_request) | **POST** /payment_requests | Create payment request
[**create_refund**](CoreApi.md#create_refund) | **POST** /refunds | Create refund
[**delete_customer**](CoreApi.md#delete_customer) | **DELETE** /customers/{customer_id} | Delete customer
[**delete_payment_request**](CoreApi.md#delete_payment_request) | **DELETE** /payment_requests/{request_id} | Delete payment request
[**delete_refund**](CoreApi.md#delete_refund) | **DELETE** /refunds/{refund_id} | Delete refund
[**list_customers**](CoreApi.md#list_customers) | **GET** /customers | List customers
[**list_payment_requests**](CoreApi.md#list_payment_requests) | **GET** /payment_requests | List payment requests
[**list_refunds**](CoreApi.md#list_refunds) | **GET** /refunds | List refunds
[**list_transactions**](CoreApi.md#list_transactions) | **GET** /transactions | List transactions
[**retrieve_customer**](CoreApi.md#retrieve_customer) | **GET** /customers/{customer_id} | Retrieve customer
[**retrieve_payment_request**](CoreApi.md#retrieve_payment_request) | **GET** /payment_requests/{request_id} | Retrieve payment request
[**retrieve_refund**](CoreApi.md#retrieve_refund) | **GET** /refunds/{refund_id} | Retrieve refund
[**retrieve_transaction**](CoreApi.md#retrieve_transaction) | **GET** /transactions/{transaction_id} | Retrieve transaction
[**update_customer**](CoreApi.md#update_customer) | **PATCH** /customers/{customer_id} | Update customer
[**update_payment_request**](CoreApi.md#update_payment_request) | **PATCH** /payment_requests/{request_id} | Update payment request
[**update_refund**](CoreApi.md#update_refund) | **PATCH** /refunds/{refund_id} | Update refund


# **create_customer**
> Customers create_customer(customers_create)

Create customer

Customer management - create and manage customer profiles

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.customers import Customers
from lomi_sdk.models.customers_create import CustomersCreate
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
    api_instance = lomi_sdk.CoreApi(api_client)
    customers_create = {"name":"Aminata Diallo","email":"aminata.diallo@example.com","phone_number":"+221771234567","metadata":{"customer_segment":"premium","referral_source":"instagram"}} # CustomersCreate | 

    try:
        # Create customer
        api_response = api_instance.create_customer(customers_create)
        print("The response of CoreApi->create_customer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoreApi->create_customer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customers_create** | [**CustomersCreate**](CustomersCreate.md)|  | 

### Return type

[**Customers**](Customers.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Customer successfully created |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_payment_request**
> PaymentRequests create_payment_request(payment_requests_create)

Create payment request

Payment requests - create payment intents and track status

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.payment_requests import PaymentRequests
from lomi_sdk.models.payment_requests_create import PaymentRequestsCreate
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
    api_instance = lomi_sdk.CoreApi(api_client)
    payment_requests_create = {"amount":25000,"currency_code":"XOF","customer_id":"cus_1234567890abcdef","description":"Payment for premium subscription","metadata":{"order_id":"ORD-2024-001"}} # PaymentRequestsCreate | 

    try:
        # Create payment request
        api_response = api_instance.create_payment_request(payment_requests_create)
        print("The response of CoreApi->create_payment_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoreApi->create_payment_request: %s\n" % e)
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

# **create_refund**
> Refunds create_refund(refunds_create)

Create refund

Refund management - process and track refunds

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.refunds import Refunds
from lomi_sdk.models.refunds_create import RefundsCreate
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
    api_instance = lomi_sdk.CoreApi(api_client)
    refunds_create = {"name":"Sample refund","description":"Example refund object"} # RefundsCreate | 

    try:
        # Create refund
        api_response = api_instance.create_refund(refunds_create)
        print("The response of CoreApi->create_refund:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoreApi->create_refund: %s\n" % e)
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

# **delete_customer**
> delete_customer(customer_id)

Delete customer

Delete a specific customer. This action cannot be undone.

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
    api_instance = lomi_sdk.CoreApi(api_client)
    customer_id = 'customer_id_example' # str | Unique identifier for the customer

    try:
        # Delete customer
        api_instance.delete_customer(customer_id)
    except Exception as e:
        print("Exception when calling CoreApi->delete_customer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**| Unique identifier for the customer | 

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
**204** | Customer successfully deleted |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_payment_request**
> delete_payment_request(request_id)

Delete payment request

Delete a specific payment request. This action cannot be undone.

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
    api_instance = lomi_sdk.CoreApi(api_client)
    request_id = 'request_id_example' # str | Unique identifier for the payment request

    try:
        # Delete payment request
        api_instance.delete_payment_request(request_id)
    except Exception as e:
        print("Exception when calling CoreApi->delete_payment_request: %s\n" % e)
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

# **delete_refund**
> delete_refund(refund_id)

Delete refund

Delete a specific refund. This action cannot be undone.

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
    api_instance = lomi_sdk.CoreApi(api_client)
    refund_id = 'refund_id_example' # str | Unique identifier for the refund

    try:
        # Delete refund
        api_instance.delete_refund(refund_id)
    except Exception as e:
        print("Exception when calling CoreApi->delete_refund: %s\n" % e)
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

# **list_customers**
> ListCustomers200Response list_customers(limit=limit, offset=offset, sort=sort)

List customers

Customer management - create and manage customer profiles

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.list_customers200_response import ListCustomers200Response
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
    api_instance = lomi_sdk.CoreApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List customers
        api_response = api_instance.list_customers(limit=limit, offset=offset, sort=sort)
        print("The response of CoreApi->list_customers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoreApi->list_customers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListCustomers200Response**](ListCustomers200Response.md)

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

# **list_payment_requests**
> ListPaymentRequests200Response list_payment_requests(limit=limit, offset=offset, sort=sort)

List payment requests

Payment requests - create payment intents and track status

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.list_payment_requests200_response import ListPaymentRequests200Response
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
    api_instance = lomi_sdk.CoreApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List payment requests
        api_response = api_instance.list_payment_requests(limit=limit, offset=offset, sort=sort)
        print("The response of CoreApi->list_payment_requests:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoreApi->list_payment_requests: %s\n" % e)
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

# **list_refunds**
> ListRefunds200Response list_refunds(limit=limit, offset=offset, sort=sort)

List refunds

Refund management - process and track refunds

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.list_refunds200_response import ListRefunds200Response
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
    api_instance = lomi_sdk.CoreApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List refunds
        api_response = api_instance.list_refunds(limit=limit, offset=offset, sort=sort)
        print("The response of CoreApi->list_refunds:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoreApi->list_refunds: %s\n" % e)
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

# **list_transactions**
> ListTransactions200Response list_transactions(limit=limit, offset=offset, sort=sort)

List transactions

Transaction history - view completed and pending transactions

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.list_transactions200_response import ListTransactions200Response
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
    api_instance = lomi_sdk.CoreApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List transactions
        api_response = api_instance.list_transactions(limit=limit, offset=offset, sort=sort)
        print("The response of CoreApi->list_transactions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoreApi->list_transactions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListTransactions200Response**](ListTransactions200Response.md)

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

# **retrieve_customer**
> Customers retrieve_customer(customer_id)

Retrieve customer

Retrieve a specific customer by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.customers import Customers
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
    api_instance = lomi_sdk.CoreApi(api_client)
    customer_id = 'customer_id_example' # str | Unique identifier for the customer

    try:
        # Retrieve customer
        api_response = api_instance.retrieve_customer(customer_id)
        print("The response of CoreApi->retrieve_customer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoreApi->retrieve_customer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**| Unique identifier for the customer | 

### Return type

[**Customers**](Customers.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Customer retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_payment_request**
> PaymentRequests retrieve_payment_request(request_id)

Retrieve payment request

Retrieve a specific payment request by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.payment_requests import PaymentRequests
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
    api_instance = lomi_sdk.CoreApi(api_client)
    request_id = 'request_id_example' # str | Unique identifier for the payment request

    try:
        # Retrieve payment request
        api_response = api_instance.retrieve_payment_request(request_id)
        print("The response of CoreApi->retrieve_payment_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoreApi->retrieve_payment_request: %s\n" % e)
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

# **retrieve_refund**
> Refunds retrieve_refund(refund_id)

Retrieve refund

Retrieve a specific refund by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.refunds import Refunds
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
    api_instance = lomi_sdk.CoreApi(api_client)
    refund_id = 'refund_id_example' # str | Unique identifier for the refund

    try:
        # Retrieve refund
        api_response = api_instance.retrieve_refund(refund_id)
        print("The response of CoreApi->retrieve_refund:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoreApi->retrieve_refund: %s\n" % e)
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

# **retrieve_transaction**
> Transactions retrieve_transaction(transaction_id)

Retrieve transaction

Retrieve a specific transaction by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.transactions import Transactions
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
    api_instance = lomi_sdk.CoreApi(api_client)
    transaction_id = 'transaction_id_example' # str | Unique identifier for the transaction

    try:
        # Retrieve transaction
        api_response = api_instance.retrieve_transaction(transaction_id)
        print("The response of CoreApi->retrieve_transaction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoreApi->retrieve_transaction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**| Unique identifier for the transaction | 

### Return type

[**Transactions**](Transactions.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transaction retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_customer**
> Customers update_customer(customer_id, customers_update)

Update customer

Update a specific customer. Only provided fields will be updated.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.customers import Customers
from lomi_sdk.models.customers_update import CustomersUpdate
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
    api_instance = lomi_sdk.CoreApi(api_client)
    customer_id = 'customer_id_example' # str | Unique identifier for the customer
    customers_update = {"name":"Aminata Diallo-Kane","phone_number":"+221779876543","metadata":{"customer_segment":"vip","notes":"Upgraded to VIP tier"}} # CustomersUpdate | 

    try:
        # Update customer
        api_response = api_instance.update_customer(customer_id, customers_update)
        print("The response of CoreApi->update_customer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoreApi->update_customer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**| Unique identifier for the customer | 
 **customers_update** | [**CustomersUpdate**](CustomersUpdate.md)|  | 

### Return type

[**Customers**](Customers.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Customer successfully updated |  -  |
**400** | Bad request - Invalid input |  -  |
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
import lomi_sdk
from lomi_sdk.models.payment_requests import PaymentRequests
from lomi_sdk.models.payment_requests_update import PaymentRequestsUpdate
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
    api_instance = lomi_sdk.CoreApi(api_client)
    request_id = 'request_id_example' # str | Unique identifier for the payment request
    payment_requests_update = {"metadata":{"order_id":"ORD-2024-001-UPDATED","notes":"Customer requested invoice"}} # PaymentRequestsUpdate | 

    try:
        # Update payment request
        api_response = api_instance.update_payment_request(request_id, payment_requests_update)
        print("The response of CoreApi->update_payment_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoreApi->update_payment_request: %s\n" % e)
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

# **update_refund**
> Refunds update_refund(refund_id, refunds_update)

Update refund

Update a specific refund. Only provided fields will be updated.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.refunds import Refunds
from lomi_sdk.models.refunds_update import RefundsUpdate
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
    api_instance = lomi_sdk.CoreApi(api_client)
    refund_id = 'refund_id_example' # str | Unique identifier for the refund
    refunds_update = {"metadata":{"updated_at":"2025-11-21T09:45:11.331Z","updated_reason":"Administrative update"}} # RefundsUpdate | 

    try:
        # Update refund
        api_response = api_instance.update_refund(refund_id, refunds_update)
        print("The response of CoreApi->update_refund:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoreApi->update_refund: %s\n" % e)
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

