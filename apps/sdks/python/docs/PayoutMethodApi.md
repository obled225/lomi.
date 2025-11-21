# lomi_sdk.PayoutMethodApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payout_methods_get**](PayoutMethodApi.md#payout_methods_get) | **GET** /payout_methods | List payout_methods
[**payout_methods_payout_method_id_get**](PayoutMethodApi.md#payout_methods_payout_method_id_get) | **GET** /payout_methods/{payout_method_id} | Get payout_method


# **payout_methods_get**
> PayoutMethodsGet200Response payout_methods_get(limit=limit, offset=offset, sort=sort)

List payout_methods

Retrieve a paginated list of payout_methods

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.payout_methods_get200_response import PayoutMethodsGet200Response
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
    api_instance = lomi_sdk.PayoutMethodApi(api_client)
    limit = 20 # int | Maximum number of items to return (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    sort = 'sort_example' # str | Sort order (e.g., created_at:desc) (optional)

    try:
        # List payout_methods
        api_response = api_instance.payout_methods_get(limit=limit, offset=offset, sort=sort)
        print("The response of PayoutMethodApi->payout_methods_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayoutMethodApi->payout_methods_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **sort** | **str**| Sort order (e.g., created_at:desc) | [optional] 

### Return type

[**PayoutMethodsGet200Response**](PayoutMethodsGet200Response.md)

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

# **payout_methods_payout_method_id_get**
> PayoutMethods payout_methods_payout_method_id_get(payout_method_id)

Get payout_method

Retrieve a specific payout_method by ID

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.payout_methods import PayoutMethods
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
    api_instance = lomi_sdk.PayoutMethodApi(api_client)
    payout_method_id = 'payout_method_id_example' # str | The payout_method ID

    try:
        # Get payout_method
        api_response = api_instance.payout_methods_payout_method_id_get(payout_method_id)
        print("The response of PayoutMethodApi->payout_methods_payout_method_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayoutMethodApi->payout_methods_payout_method_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payout_method_id** | **str**| The payout_method ID | 

### Return type

[**PayoutMethods**](PayoutMethods.md)

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

