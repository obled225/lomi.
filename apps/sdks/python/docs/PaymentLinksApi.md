# lomi.PaymentLinksApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_payment_link**](PaymentLinksApi.md#create_payment_link) | **POST** /payment_links | Create payment link
[**delete_payment_link**](PaymentLinksApi.md#delete_payment_link) | **DELETE** /payment_links/{link_id} | Delete payment link
[**list_payment_links**](PaymentLinksApi.md#list_payment_links) | **GET** /payment_links | List payment links
[**retrieve_payment_link**](PaymentLinksApi.md#retrieve_payment_link) | **GET** /payment_links/{link_id} | Retrieve payment link
[**update_payment_link**](PaymentLinksApi.md#update_payment_link) | **PATCH** /payment_links/{link_id} | Update payment link


# **create_payment_link**
> PaymentLinks create_payment_link(payment_links_create)

Create payment link

Payment links - shareable payment URLs

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.payment_links import PaymentLinks
from lomi.models.payment_links_create import PaymentLinksCreate
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
    api_instance = lomi.PaymentLinksApi(api_client)
    payment_links_create = {"title":"Premium Membership","amount":50000,"currency_code":"XOF","description":"Annual premium membership","product_id":"prod_1234567890abcdef"} # PaymentLinksCreate | 

    try:
        # Create payment link
        api_response = api_instance.create_payment_link(payment_links_create)
        print("The response of PaymentLinksApi->create_payment_link:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentLinksApi->create_payment_link: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_links_create** | [**PaymentLinksCreate**](PaymentLinksCreate.md)|  | 

### Return type

[**PaymentLinks**](PaymentLinks.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Payment_link successfully created |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_payment_link**
> delete_payment_link(link_id)

Delete payment link

Delete a specific payment link. This action cannot be undone.

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
    api_instance = lomi.PaymentLinksApi(api_client)
    link_id = 'link_id_example' # str | Unique identifier for the payment link

    try:
        # Delete payment link
        api_instance.delete_payment_link(link_id)
    except Exception as e:
        print("Exception when calling PaymentLinksApi->delete_payment_link: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **link_id** | **str**| Unique identifier for the payment link | 

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
**204** | Payment_link successfully deleted |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_payment_links**
> ListPaymentLinks200Response list_payment_links(limit=limit, offset=offset, sort=sort)

List payment links

Payment links - shareable payment URLs

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.list_payment_links200_response import ListPaymentLinks200Response
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
    api_instance = lomi.PaymentLinksApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List payment links
        api_response = api_instance.list_payment_links(limit=limit, offset=offset, sort=sort)
        print("The response of PaymentLinksApi->list_payment_links:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentLinksApi->list_payment_links: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListPaymentLinks200Response**](ListPaymentLinks200Response.md)

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

# **retrieve_payment_link**
> PaymentLinks retrieve_payment_link(link_id)

Retrieve payment link

Retrieve a specific payment link by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.payment_links import PaymentLinks
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
    api_instance = lomi.PaymentLinksApi(api_client)
    link_id = 'link_id_example' # str | Unique identifier for the payment link

    try:
        # Retrieve payment link
        api_response = api_instance.retrieve_payment_link(link_id)
        print("The response of PaymentLinksApi->retrieve_payment_link:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentLinksApi->retrieve_payment_link: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **link_id** | **str**| Unique identifier for the payment link | 

### Return type

[**PaymentLinks**](PaymentLinks.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment_link retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_payment_link**
> PaymentLinks update_payment_link(link_id, payment_links_update)

Update payment link

Update a specific payment link. Only provided fields will be updated.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.payment_links import PaymentLinks
from lomi.models.payment_links_update import PaymentLinksUpdate
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
    api_instance = lomi.PaymentLinksApi(api_client)
    link_id = 'link_id_example' # str | Unique identifier for the payment link
    payment_links_update = {"metadata":{"updated_at":"2025-11-21T13:32:16.240Z","updated_reason":"Administrative update"}} # PaymentLinksUpdate | 

    try:
        # Update payment link
        api_response = api_instance.update_payment_link(link_id, payment_links_update)
        print("The response of PaymentLinksApi->update_payment_link:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentLinksApi->update_payment_link: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **link_id** | **str**| Unique identifier for the payment link | 
 **payment_links_update** | [**PaymentLinksUpdate**](PaymentLinksUpdate.md)|  | 

### Return type

[**PaymentLinks**](PaymentLinks.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment_link successfully updated |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

