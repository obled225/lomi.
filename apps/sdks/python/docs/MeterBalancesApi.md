# lomi.MeterBalancesApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_meter_balances**](MeterBalancesApi.md#list_meter_balances) | **GET** /meter_balances | List meter balances
[**retrieve_meter_balance**](MeterBalancesApi.md#retrieve_meter_balance) | **GET** /meter_balances/{balance_id} | Retrieve meter balance


# **list_meter_balances**
> ListMeterBalances200Response list_meter_balances(limit=limit, offset=offset, sort=sort)

List meter balances

Meter balances - view current usage balances

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.list_meter_balances200_response import ListMeterBalances200Response
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
    api_instance = lomi.MeterBalancesApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List meter balances
        api_response = api_instance.list_meter_balances(limit=limit, offset=offset, sort=sort)
        print("The response of MeterBalancesApi->list_meter_balances:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeterBalancesApi->list_meter_balances: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListMeterBalances200Response**](ListMeterBalances200Response.md)

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

# **retrieve_meter_balance**
> MeterBalances retrieve_meter_balance(balance_id)

Retrieve meter balance

Retrieve a specific meter balance by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.meter_balances import MeterBalances
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
    api_instance = lomi.MeterBalancesApi(api_client)
    balance_id = 'balance_id_example' # str | Unique identifier for the meter balance

    try:
        # Retrieve meter balance
        api_response = api_instance.retrieve_meter_balance(balance_id)
        print("The response of MeterBalancesApi->retrieve_meter_balance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeterBalancesApi->retrieve_meter_balance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **balance_id** | **str**| Unique identifier for the meter balance | 

### Return type

[**MeterBalances**](MeterBalances.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Meter_balance retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

