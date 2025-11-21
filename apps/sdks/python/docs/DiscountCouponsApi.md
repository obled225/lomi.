# lomi.DiscountCouponsApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_discount_coupon**](DiscountCouponsApi.md#create_discount_coupon) | **POST** /discount_coupons | Create discount coupon
[**delete_discount_coupon**](DiscountCouponsApi.md#delete_discount_coupon) | **DELETE** /discount_coupons/{coupon_id} | Delete discount coupon
[**list_discount_coupons**](DiscountCouponsApi.md#list_discount_coupons) | **GET** /discount_coupons | List discount coupons
[**retrieve_discount_coupon**](DiscountCouponsApi.md#retrieve_discount_coupon) | **GET** /discount_coupons/{coupon_id} | Retrieve discount coupon
[**update_discount_coupon**](DiscountCouponsApi.md#update_discount_coupon) | **PATCH** /discount_coupons/{coupon_id} | Update discount coupon


# **create_discount_coupon**
> DiscountCoupons create_discount_coupon(discount_coupons_create)

Create discount coupon

Discount coupons - create and manage promotional codes

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.discount_coupons import DiscountCoupons
from lomi.models.discount_coupons_create import DiscountCouponsCreate
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
    api_instance = lomi.DiscountCouponsApi(api_client)
    discount_coupons_create = {"code":"WELCOME2024","discount_type":"percentage","discount_percentage":20,"max_uses":100,"is_active":true,"expires_at":"2024-12-31T23:59:59Z","description":"Welcome discount for new customers"} # DiscountCouponsCreate | 

    try:
        # Create discount coupon
        api_response = api_instance.create_discount_coupon(discount_coupons_create)
        print("The response of DiscountCouponsApi->create_discount_coupon:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscountCouponsApi->create_discount_coupon: %s\n" % e)
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

# **delete_discount_coupon**
> delete_discount_coupon(coupon_id)

Delete discount coupon

Delete a specific discount coupon. This action cannot be undone.

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
    api_instance = lomi.DiscountCouponsApi(api_client)
    coupon_id = 'coupon_id_example' # str | Unique identifier for the discount coupon

    try:
        # Delete discount coupon
        api_instance.delete_discount_coupon(coupon_id)
    except Exception as e:
        print("Exception when calling DiscountCouponsApi->delete_discount_coupon: %s\n" % e)
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

# **list_discount_coupons**
> ListDiscountCoupons200Response list_discount_coupons(limit=limit, offset=offset, sort=sort)

List discount coupons

Discount coupons - create and manage promotional codes

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.list_discount_coupons200_response import ListDiscountCoupons200Response
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
    api_instance = lomi.DiscountCouponsApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List discount coupons
        api_response = api_instance.list_discount_coupons(limit=limit, offset=offset, sort=sort)
        print("The response of DiscountCouponsApi->list_discount_coupons:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscountCouponsApi->list_discount_coupons: %s\n" % e)
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

# **retrieve_discount_coupon**
> DiscountCoupons retrieve_discount_coupon(coupon_id)

Retrieve discount coupon

Retrieve a specific discount coupon by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.discount_coupons import DiscountCoupons
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
    api_instance = lomi.DiscountCouponsApi(api_client)
    coupon_id = 'coupon_id_example' # str | Unique identifier for the discount coupon

    try:
        # Retrieve discount coupon
        api_response = api_instance.retrieve_discount_coupon(coupon_id)
        print("The response of DiscountCouponsApi->retrieve_discount_coupon:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscountCouponsApi->retrieve_discount_coupon: %s\n" % e)
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

# **update_discount_coupon**
> DiscountCoupons update_discount_coupon(coupon_id, discount_coupons_update)

Update discount coupon

Update a specific discount coupon. Only provided fields will be updated.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.discount_coupons import DiscountCoupons
from lomi.models.discount_coupons_update import DiscountCouponsUpdate
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
    api_instance = lomi.DiscountCouponsApi(api_client)
    coupon_id = 'coupon_id_example' # str | Unique identifier for the discount coupon
    discount_coupons_update = {"is_active":false,"max_uses":50} # DiscountCouponsUpdate | 

    try:
        # Update discount coupon
        api_response = api_instance.update_discount_coupon(coupon_id, discount_coupons_update)
        print("The response of DiscountCouponsApi->update_discount_coupon:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscountCouponsApi->update_discount_coupon: %s\n" % e)
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

