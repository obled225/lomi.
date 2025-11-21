# lomi.PricesApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_price**](PricesApi.md#create_price) | **POST** /prices | Create price
[**delete_price**](PricesApi.md#delete_price) | **DELETE** /prices/{price_id} | Delete price
[**list_prices**](PricesApi.md#list_prices) | **GET** /prices | List prices
[**retrieve_price**](PricesApi.md#retrieve_price) | **GET** /prices/{price_id} | Retrieve price
[**update_price**](PricesApi.md#update_price) | **PATCH** /prices/{price_id} | Update price


# **create_price**
> Prices create_price(prices_create)

Create price

Pricing tiers - manage product pricing

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.prices import Prices
from lomi.models.prices_create import PricesCreate
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
    api_instance = lomi.PricesApi(api_client)
    prices_create = {"product_id":"prod_1234567890abcdef","amount":5000,"currency_code":"XOF","pricing_model":"flat_rate","billing_frequency":"monthly","is_active":true} # PricesCreate | 

    try:
        # Create price
        api_response = api_instance.create_price(prices_create)
        print("The response of PricesApi->create_price:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->create_price: %s\n" % e)
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

# **delete_price**
> delete_price(price_id)

Delete price

Delete a specific price. This action cannot be undone.

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
    api_instance = lomi.PricesApi(api_client)
    price_id = 'price_id_example' # str | Unique identifier for the price

    try:
        # Delete price
        api_instance.delete_price(price_id)
    except Exception as e:
        print("Exception when calling PricesApi->delete_price: %s\n" % e)
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

# **list_prices**
> ListPrices200Response list_prices(limit=limit, offset=offset, sort=sort)

List prices

Pricing tiers - manage product pricing

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.list_prices200_response import ListPrices200Response
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
    api_instance = lomi.PricesApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List prices
        api_response = api_instance.list_prices(limit=limit, offset=offset, sort=sort)
        print("The response of PricesApi->list_prices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->list_prices: %s\n" % e)
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

# **retrieve_price**
> Prices retrieve_price(price_id)

Retrieve price

Retrieve a specific price by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.prices import Prices
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
    api_instance = lomi.PricesApi(api_client)
    price_id = 'price_id_example' # str | Unique identifier for the price

    try:
        # Retrieve price
        api_response = api_instance.retrieve_price(price_id)
        print("The response of PricesApi->retrieve_price:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->retrieve_price: %s\n" % e)
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

# **update_price**
> Prices update_price(price_id, prices_update)

Update price

Update a specific price. Only provided fields will be updated.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.prices import Prices
from lomi.models.prices_update import PricesUpdate
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
    api_instance = lomi.PricesApi(api_client)
    price_id = 'price_id_example' # str | Unique identifier for the price
    prices_update = {"is_active":false} # PricesUpdate | 

    try:
        # Update price
        api_response = api_instance.update_price(price_id, prices_update)
        print("The response of PricesApi->update_price:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->update_price: %s\n" % e)
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

