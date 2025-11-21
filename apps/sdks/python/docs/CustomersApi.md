# lomi.CustomersApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_customer**](CustomersApi.md#create_customer) | **POST** /customers | Create customer
[**delete_customer**](CustomersApi.md#delete_customer) | **DELETE** /customers/{customer_id} | Delete customer
[**list_customers**](CustomersApi.md#list_customers) | **GET** /customers | List customers
[**retrieve_customer**](CustomersApi.md#retrieve_customer) | **GET** /customers/{customer_id} | Retrieve customer
[**update_customer**](CustomersApi.md#update_customer) | **PATCH** /customers/{customer_id} | Update customer


# **create_customer**
> Customers create_customer(customers_create)

Create customer

Customer management - create and manage customer profiles

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.customers import Customers
from lomi.models.customers_create import CustomersCreate
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
    api_instance = lomi.CustomersApi(api_client)
    customers_create = {"name":"Aminata Diallo","email":"aminata.diallo@example.com","phone_number":"+225021234567","metadata":{"customer_segment":"premium","referral_source":"instagram"}} # CustomersCreate | 

    try:
        # Create customer
        api_response = api_instance.create_customer(customers_create)
        print("The response of CustomersApi->create_customer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->create_customer: %s\n" % e)
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

# **delete_customer**
> delete_customer(customer_id)

Delete customer

Delete a specific customer. This action cannot be undone.

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
    api_instance = lomi.CustomersApi(api_client)
    customer_id = 'customer_id_example' # str | Unique identifier for the customer

    try:
        # Delete customer
        api_instance.delete_customer(customer_id)
    except Exception as e:
        print("Exception when calling CustomersApi->delete_customer: %s\n" % e)
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

# **list_customers**
> ListCustomers200Response list_customers(limit=limit, offset=offset, sort=sort)

List customers

Customer management - create and manage customer profiles

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.list_customers200_response import ListCustomers200Response
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
    api_instance = lomi.CustomersApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List customers
        api_response = api_instance.list_customers(limit=limit, offset=offset, sort=sort)
        print("The response of CustomersApi->list_customers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->list_customers: %s\n" % e)
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

# **retrieve_customer**
> Customers retrieve_customer(customer_id)

Retrieve customer

Retrieve a specific customer by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.customers import Customers
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
    api_instance = lomi.CustomersApi(api_client)
    customer_id = 'customer_id_example' # str | Unique identifier for the customer

    try:
        # Retrieve customer
        api_response = api_instance.retrieve_customer(customer_id)
        print("The response of CustomersApi->retrieve_customer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->retrieve_customer: %s\n" % e)
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

# **update_customer**
> Customers update_customer(customer_id, customers_update)

Update customer

Update a specific customer. Only provided fields will be updated.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.customers import Customers
from lomi.models.customers_update import CustomersUpdate
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
    api_instance = lomi.CustomersApi(api_client)
    customer_id = 'customer_id_example' # str | Unique identifier for the customer
    customers_update = {"name":"Aminata Diallo-Kane","phone_number":"+225779876543","metadata":{"customer_segment":"vip","notes":"Upgraded to VIP tier"}} # CustomersUpdate | 

    try:
        # Update customer
        api_response = api_instance.update_customer(customer_id, customers_update)
        print("The response of CustomersApi->update_customer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->update_customer: %s\n" % e)
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

