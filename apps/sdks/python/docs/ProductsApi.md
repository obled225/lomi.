# lomi_sdk.ProductsApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_price**](ProductsApi.md#create_price) | **POST** /prices | Create price
[**create_product**](ProductsApi.md#create_product) | **POST** /products | Create product
[**delete_price**](ProductsApi.md#delete_price) | **DELETE** /prices/{price_id} | Delete price
[**delete_product**](ProductsApi.md#delete_product) | **DELETE** /products/{product_id} | Delete product
[**list_prices**](ProductsApi.md#list_prices) | **GET** /prices | List prices
[**list_products**](ProductsApi.md#list_products) | **GET** /products | List products
[**retrieve_price**](ProductsApi.md#retrieve_price) | **GET** /prices/{price_id} | Retrieve price
[**retrieve_product**](ProductsApi.md#retrieve_product) | **GET** /products/{product_id} | Retrieve product
[**update_price**](ProductsApi.md#update_price) | **PATCH** /prices/{price_id} | Update price
[**update_product**](ProductsApi.md#update_product) | **PATCH** /products/{product_id} | Update product


# **create_price**
> Prices create_price(prices_create)

Create price

Pricing tiers - manage product pricing

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.prices import Prices
from lomi_sdk.models.prices_create import PricesCreate
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
    api_instance = lomi_sdk.ProductsApi(api_client)
    prices_create = {"product_id":"prod_1234567890abcdef","amount":5000,"currency_code":"XOF","pricing_model":"flat_rate","billing_frequency":"monthly","is_active":true} # PricesCreate | 

    try:
        # Create price
        api_response = api_instance.create_price(prices_create)
        print("The response of ProductsApi->create_price:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->create_price: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prices_create** | [**PricesCreate**](PricesCreate.md)|  | 

### Return type

[**Prices**](Prices.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Price successfully created |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_product**
> Products create_product(products_create)

Create product

Product catalog - manage one-time and recurring products

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.products import Products
from lomi_sdk.models.products_create import ProductsCreate
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
    api_instance = lomi_sdk.ProductsApi(api_client)
    products_create = {"name":"Premium Subscription","description":"Monthly premium access with all features","product_type":"recurring","is_active":true,"metadata":{"features":["analytics","api_access","priority_support"]}} # ProductsCreate | 

    try:
        # Create product
        api_response = api_instance.create_product(products_create)
        print("The response of ProductsApi->create_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->create_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **products_create** | [**ProductsCreate**](ProductsCreate.md)|  | 

### Return type

[**Products**](Products.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Product successfully created |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_price**
> delete_price(price_id)

Delete price

Delete a specific price. This action cannot be undone.

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
    api_instance = lomi_sdk.ProductsApi(api_client)
    price_id = 'price_id_example' # str | Unique identifier for the price

    try:
        # Delete price
        api_instance.delete_price(price_id)
    except Exception as e:
        print("Exception when calling ProductsApi->delete_price: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **price_id** | **str**| Unique identifier for the price | 

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
**204** | Price successfully deleted |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_product**
> delete_product(product_id)

Delete product

Delete a specific product. This action cannot be undone.

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
    api_instance = lomi_sdk.ProductsApi(api_client)
    product_id = 'product_id_example' # str | Unique identifier for the product

    try:
        # Delete product
        api_instance.delete_product(product_id)
    except Exception as e:
        print("Exception when calling ProductsApi->delete_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Unique identifier for the product | 

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
**204** | Product successfully deleted |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_prices**
> ListPrices200Response list_prices(limit=limit, offset=offset, sort=sort)

List prices

Pricing tiers - manage product pricing

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.list_prices200_response import ListPrices200Response
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
    api_instance = lomi_sdk.ProductsApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List prices
        api_response = api_instance.list_prices(limit=limit, offset=offset, sort=sort)
        print("The response of ProductsApi->list_prices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->list_prices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListPrices200Response**](ListPrices200Response.md)

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

# **list_products**
> ListProducts200Response list_products(limit=limit, offset=offset, sort=sort)

List products

Product catalog - manage one-time and recurring products

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.list_products200_response import ListProducts200Response
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
    api_instance = lomi_sdk.ProductsApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List products
        api_response = api_instance.list_products(limit=limit, offset=offset, sort=sort)
        print("The response of ProductsApi->list_products:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->list_products: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListProducts200Response**](ListProducts200Response.md)

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

# **retrieve_price**
> Prices retrieve_price(price_id)

Retrieve price

Retrieve a specific price by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.prices import Prices
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
    api_instance = lomi_sdk.ProductsApi(api_client)
    price_id = 'price_id_example' # str | Unique identifier for the price

    try:
        # Retrieve price
        api_response = api_instance.retrieve_price(price_id)
        print("The response of ProductsApi->retrieve_price:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->retrieve_price: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **price_id** | **str**| Unique identifier for the price | 

### Return type

[**Prices**](Prices.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Price retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_product**
> Products retrieve_product(product_id)

Retrieve product

Retrieve a specific product by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.products import Products
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
    api_instance = lomi_sdk.ProductsApi(api_client)
    product_id = 'product_id_example' # str | Unique identifier for the product

    try:
        # Retrieve product
        api_response = api_instance.retrieve_product(product_id)
        print("The response of ProductsApi->retrieve_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->retrieve_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Unique identifier for the product | 

### Return type

[**Products**](Products.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Product retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_price**
> Prices update_price(price_id, prices_update)

Update price

Update a specific price. Only provided fields will be updated.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.prices import Prices
from lomi_sdk.models.prices_update import PricesUpdate
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
    api_instance = lomi_sdk.ProductsApi(api_client)
    price_id = 'price_id_example' # str | Unique identifier for the price
    prices_update = {"is_active":false} # PricesUpdate | 

    try:
        # Update price
        api_response = api_instance.update_price(price_id, prices_update)
        print("The response of ProductsApi->update_price:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->update_price: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **price_id** | **str**| Unique identifier for the price | 
 **prices_update** | [**PricesUpdate**](PricesUpdate.md)|  | 

### Return type

[**Prices**](Prices.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Price successfully updated |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_product**
> Products update_product(product_id, products_update)

Update product

Update a specific product. Only provided fields will be updated.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.products import Products
from lomi_sdk.models.products_update import ProductsUpdate
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
    api_instance = lomi_sdk.ProductsApi(api_client)
    product_id = 'product_id_example' # str | Unique identifier for the product
    products_update = {"name":"Premium Plus Subscription","description":"Enhanced premium access with exclusive features","is_active":true} # ProductsUpdate | 

    try:
        # Update product
        api_response = api_instance.update_product(product_id, products_update)
        print("The response of ProductsApi->update_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->update_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Unique identifier for the product | 
 **products_update** | [**ProductsUpdate**](ProductsUpdate.md)|  | 

### Return type

[**Products**](Products.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Product successfully updated |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

