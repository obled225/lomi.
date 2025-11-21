# lomi_sdk.DiscountCouponApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**discount_coupons_coupon_id_delete**](DiscountCouponApi.md#discount_coupons_coupon_id_delete) | **DELETE** /discount_coupons/{coupon_id} | Delete discount_coupon
[**discount_coupons_coupon_id_get**](DiscountCouponApi.md#discount_coupons_coupon_id_get) | **GET** /discount_coupons/{coupon_id} | Get discount_coupon
[**discount_coupons_coupon_id_patch**](DiscountCouponApi.md#discount_coupons_coupon_id_patch) | **PATCH** /discount_coupons/{coupon_id} | Update discount_coupon
[**discount_coupons_get**](DiscountCouponApi.md#discount_coupons_get) | **GET** /discount_coupons | List discount_coupons
[**discount_coupons_post**](DiscountCouponApi.md#discount_coupons_post) | **POST** /discount_coupons | Create discount_coupon


# **discount_coupons_coupon_id_delete**
> discount_coupons_coupon_id_delete(coupon_id)

Delete discount_coupon

Delete a specific discount_coupon

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
    api_instance = lomi_sdk.DiscountCouponApi(api_client)
    coupon_id = 'coupon_id_example' # str | The discount_coupon ID

    try:
        # Delete discount_coupon
        api_instance.discount_coupons_coupon_id_delete(coupon_id)
    except Exception as e:
        print("Exception when calling DiscountCouponApi->discount_coupons_coupon_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_id** | **str**| The discount_coupon ID | 

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

# **discount_coupons_coupon_id_get**
> DiscountCoupons discount_coupons_coupon_id_get(coupon_id)

Get discount_coupon

Retrieve a specific discount_coupon by ID

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
    api_instance = lomi_sdk.DiscountCouponApi(api_client)
    coupon_id = 'coupon_id_example' # str | The discount_coupon ID

    try:
        # Get discount_coupon
        api_response = api_instance.discount_coupons_coupon_id_get(coupon_id)
        print("The response of DiscountCouponApi->discount_coupons_coupon_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscountCouponApi->discount_coupons_coupon_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_id** | **str**| The discount_coupon ID | 

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
**200** | Successful response |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **discount_coupons_coupon_id_patch**
> DiscountCoupons discount_coupons_coupon_id_patch(coupon_id, discount_coupons_update)

Update discount_coupon

Update a specific discount_coupon

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
    api_instance = lomi_sdk.DiscountCouponApi(api_client)
    coupon_id = 'coupon_id_example' # str | The discount_coupon ID
    discount_coupons_update = lomi_sdk.DiscountCouponsUpdate() # DiscountCouponsUpdate | 

    try:
        # Update discount_coupon
        api_response = api_instance.discount_coupons_coupon_id_patch(coupon_id, discount_coupons_update)
        print("The response of DiscountCouponApi->discount_coupons_coupon_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscountCouponApi->discount_coupons_coupon_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_id** | **str**| The discount_coupon ID | 
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
**200** | Successfully updated |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **discount_coupons_get**
> DiscountCouponsGet200Response discount_coupons_get(limit=limit, offset=offset, sort=sort)

List discount_coupons

Retrieve a paginated list of discount_coupons

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.discount_coupons_get200_response import DiscountCouponsGet200Response
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
    api_instance = lomi_sdk.DiscountCouponApi(api_client)
    limit = 20 # int | Maximum number of items to return (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    sort = 'sort_example' # str | Sort order (e.g., created_at:desc) (optional)

    try:
        # List discount_coupons
        api_response = api_instance.discount_coupons_get(limit=limit, offset=offset, sort=sort)
        print("The response of DiscountCouponApi->discount_coupons_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscountCouponApi->discount_coupons_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **sort** | **str**| Sort order (e.g., created_at:desc) | [optional] 

### Return type

[**DiscountCouponsGet200Response**](DiscountCouponsGet200Response.md)

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

# **discount_coupons_post**
> DiscountCoupons discount_coupons_post(discount_coupons_create)

Create discount_coupon

Create a new discount_coupon

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
    api_instance = lomi_sdk.DiscountCouponApi(api_client)
    discount_coupons_create = lomi_sdk.DiscountCouponsCreate() # DiscountCouponsCreate | 

    try:
        # Create discount_coupon
        api_response = api_instance.discount_coupons_post(discount_coupons_create)
        print("The response of DiscountCouponApi->discount_coupons_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiscountCouponApi->discount_coupons_post: %s\n" % e)
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
**201** | Successfully created |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

