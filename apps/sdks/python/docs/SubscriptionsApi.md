# lomi_sdk.SubscriptionsApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_discount_coupon**](SubscriptionsApi.md#create_discount_coupon) | **POST** /discount_coupons | Create discount coupon
[**create_subscription**](SubscriptionsApi.md#create_subscription) | **POST** /subscriptions | Create subscription
[**delete_discount_coupon**](SubscriptionsApi.md#delete_discount_coupon) | **DELETE** /discount_coupons/{coupon_id} | Delete discount coupon
[**delete_subscription**](SubscriptionsApi.md#delete_subscription) | **DELETE** /subscriptions/{subscription_id} | Delete subscription
[**list_customer_invoices**](SubscriptionsApi.md#list_customer_invoices) | **GET** /customer_invoices | List customer invoices
[**list_discount_coupons**](SubscriptionsApi.md#list_discount_coupons) | **GET** /discount_coupons | List discount coupons
[**list_subscriptions**](SubscriptionsApi.md#list_subscriptions) | **GET** /subscriptions | List subscriptions
[**retrieve_customer_invoice**](SubscriptionsApi.md#retrieve_customer_invoice) | **GET** /customer_invoices/{invoice_id} | Retrieve customer invoice
[**retrieve_discount_coupon**](SubscriptionsApi.md#retrieve_discount_coupon) | **GET** /discount_coupons/{coupon_id} | Retrieve discount coupon
[**retrieve_subscription**](SubscriptionsApi.md#retrieve_subscription) | **GET** /subscriptions/{subscription_id} | Retrieve subscription
[**update_discount_coupon**](SubscriptionsApi.md#update_discount_coupon) | **PATCH** /discount_coupons/{coupon_id} | Update discount coupon
[**update_subscription**](SubscriptionsApi.md#update_subscription) | **PATCH** /subscriptions/{subscription_id} | Update subscription


# **create_discount_coupon**
> DiscountCoupons create_discount_coupon(discount_coupons_create)

Create discount coupon

Discount coupons - create and manage promotional codes

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.discount_coupons import DiscountCoupons
from lomi_sdk.models.discount_coupons_create import DiscountCouponsCreate
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
    api_instance = lomi_sdk.SubscriptionsApi(api_client)
    discount_coupons_create = {"code":"WELCOME2024","discount_type":"percentage","discount_percentage":20,"max_uses":100,"is_active":true,"expires_at":"2024-12-31T23:59:59Z","description":"Welcome discount for new customers"} # DiscountCouponsCreate | 

    try:
        # Create discount coupon
        api_response = api_instance.create_discount_coupon(discount_coupons_create)
        print("The response of SubscriptionsApi->create_discount_coupon:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->create_discount_coupon: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discount_coupons_create** | [**DiscountCouponsCreate**](DiscountCouponsCreate.md)|  | 

### Return type

[**DiscountCoupons**](DiscountCoupons.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Discount_coupon successfully created |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_subscription**
> Subscriptions create_subscription(subscriptions_create)

Create subscription

Subscription management - create and manage recurring billing

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.subscriptions import Subscriptions
from lomi_sdk.models.subscriptions_create import SubscriptionsCreate
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
    api_instance = lomi_sdk.SubscriptionsApi(api_client)
    subscriptions_create = {"customer_id":"cus_1234567890abcdef","product_id":"prod_1234567890abcdef","price_id":"price_1234567890abcdef","billing_frequency":"monthly","metadata":{"plan":"premium"}} # SubscriptionsCreate | 

    try:
        # Create subscription
        api_response = api_instance.create_subscription(subscriptions_create)
        print("The response of SubscriptionsApi->create_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->create_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptions_create** | [**SubscriptionsCreate**](SubscriptionsCreate.md)|  | 

### Return type

[**Subscriptions**](Subscriptions.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Subscription successfully created |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_discount_coupon**
> delete_discount_coupon(coupon_id)

Delete discount coupon

Delete a specific discount coupon. This action cannot be undone.

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
    api_instance = lomi_sdk.SubscriptionsApi(api_client)
    coupon_id = 'coupon_id_example' # str | Unique identifier for the discount coupon

    try:
        # Delete discount coupon
        api_instance.delete_discount_coupon(coupon_id)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->delete_discount_coupon: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_id** | **str**| Unique identifier for the discount coupon | 

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
**204** | Discount_coupon successfully deleted |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_subscription**
> delete_subscription(subscription_id)

Delete subscription

Delete a specific subscription. This action cannot be undone.

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
    api_instance = lomi_sdk.SubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Unique identifier for the subscription

    try:
        # Delete subscription
        api_instance.delete_subscription(subscription_id)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->delete_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Unique identifier for the subscription | 

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
**204** | Subscription successfully deleted |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_customer_invoices**
> ListCustomerInvoices200Response list_customer_invoices(limit=limit, offset=offset, sort=sort)

List customer invoices

Customer invoices - view subscription invoices

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.list_customer_invoices200_response import ListCustomerInvoices200Response
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
    api_instance = lomi_sdk.SubscriptionsApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List customer invoices
        api_response = api_instance.list_customer_invoices(limit=limit, offset=offset, sort=sort)
        print("The response of SubscriptionsApi->list_customer_invoices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->list_customer_invoices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListCustomerInvoices200Response**](ListCustomerInvoices200Response.md)

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

# **list_discount_coupons**
> ListDiscountCoupons200Response list_discount_coupons(limit=limit, offset=offset, sort=sort)

List discount coupons

Discount coupons - create and manage promotional codes

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.list_discount_coupons200_response import ListDiscountCoupons200Response
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
    api_instance = lomi_sdk.SubscriptionsApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List discount coupons
        api_response = api_instance.list_discount_coupons(limit=limit, offset=offset, sort=sort)
        print("The response of SubscriptionsApi->list_discount_coupons:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->list_discount_coupons: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListDiscountCoupons200Response**](ListDiscountCoupons200Response.md)

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

# **list_subscriptions**
> ListSubscriptions200Response list_subscriptions(limit=limit, offset=offset, sort=sort)

List subscriptions

Subscription management - create and manage recurring billing

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.list_subscriptions200_response import ListSubscriptions200Response
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
    api_instance = lomi_sdk.SubscriptionsApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List subscriptions
        api_response = api_instance.list_subscriptions(limit=limit, offset=offset, sort=sort)
        print("The response of SubscriptionsApi->list_subscriptions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->list_subscriptions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListSubscriptions200Response**](ListSubscriptions200Response.md)

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

# **retrieve_customer_invoice**
> CustomerInvoices retrieve_customer_invoice(invoice_id)

Retrieve customer invoice

Retrieve a specific customer invoice by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.customer_invoices import CustomerInvoices
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
    api_instance = lomi_sdk.SubscriptionsApi(api_client)
    invoice_id = 'invoice_id_example' # str | Unique identifier for the customer invoice

    try:
        # Retrieve customer invoice
        api_response = api_instance.retrieve_customer_invoice(invoice_id)
        print("The response of SubscriptionsApi->retrieve_customer_invoice:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->retrieve_customer_invoice: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoice_id** | **str**| Unique identifier for the customer invoice | 

### Return type

[**CustomerInvoices**](CustomerInvoices.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Customer_invoice retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_discount_coupon**
> DiscountCoupons retrieve_discount_coupon(coupon_id)

Retrieve discount coupon

Retrieve a specific discount coupon by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.discount_coupons import DiscountCoupons
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
    api_instance = lomi_sdk.SubscriptionsApi(api_client)
    coupon_id = 'coupon_id_example' # str | Unique identifier for the discount coupon

    try:
        # Retrieve discount coupon
        api_response = api_instance.retrieve_discount_coupon(coupon_id)
        print("The response of SubscriptionsApi->retrieve_discount_coupon:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->retrieve_discount_coupon: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_id** | **str**| Unique identifier for the discount coupon | 

### Return type

[**DiscountCoupons**](DiscountCoupons.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Discount_coupon retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_subscription**
> Subscriptions retrieve_subscription(subscription_id)

Retrieve subscription

Retrieve a specific subscription by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.subscriptions import Subscriptions
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
    api_instance = lomi_sdk.SubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Unique identifier for the subscription

    try:
        # Retrieve subscription
        api_response = api_instance.retrieve_subscription(subscription_id)
        print("The response of SubscriptionsApi->retrieve_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->retrieve_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Unique identifier for the subscription | 

### Return type

[**Subscriptions**](Subscriptions.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Subscription retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_discount_coupon**
> DiscountCoupons update_discount_coupon(coupon_id, discount_coupons_update)

Update discount coupon

Update a specific discount coupon. Only provided fields will be updated.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.discount_coupons import DiscountCoupons
from lomi_sdk.models.discount_coupons_update import DiscountCouponsUpdate
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
    api_instance = lomi_sdk.SubscriptionsApi(api_client)
    coupon_id = 'coupon_id_example' # str | Unique identifier for the discount coupon
    discount_coupons_update = {"is_active":false,"max_uses":50} # DiscountCouponsUpdate | 

    try:
        # Update discount coupon
        api_response = api_instance.update_discount_coupon(coupon_id, discount_coupons_update)
        print("The response of SubscriptionsApi->update_discount_coupon:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->update_discount_coupon: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_id** | **str**| Unique identifier for the discount coupon | 
 **discount_coupons_update** | [**DiscountCouponsUpdate**](DiscountCouponsUpdate.md)|  | 

### Return type

[**DiscountCoupons**](DiscountCoupons.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Discount_coupon successfully updated |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_subscription**
> Subscriptions update_subscription(subscription_id, subscriptions_update)

Update subscription

Update a specific subscription. Only provided fields will be updated.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.subscriptions import Subscriptions
from lomi_sdk.models.subscriptions_update import SubscriptionsUpdate
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
    api_instance = lomi_sdk.SubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Unique identifier for the subscription
    subscriptions_update = {"metadata":{"plan":"enterprise","upgraded_at":"2025-11-21T09:45:11.331Z"}} # SubscriptionsUpdate | 

    try:
        # Update subscription
        api_response = api_instance.update_subscription(subscription_id, subscriptions_update)
        print("The response of SubscriptionsApi->update_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->update_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Unique identifier for the subscription | 
 **subscriptions_update** | [**SubscriptionsUpdate**](SubscriptionsUpdate.md)|  | 

### Return type

[**Subscriptions**](Subscriptions.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Subscription successfully updated |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

