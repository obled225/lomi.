# lomi_sdk.UsageBillingApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_meter**](UsageBillingApi.md#create_meter) | **POST** /meters | Create meter
[**delete_meter**](UsageBillingApi.md#delete_meter) | **DELETE** /meters/{meter_id} | Delete meter
[**list_meter_balances**](UsageBillingApi.md#list_meter_balances) | **GET** /meter_balances | List meter balances
[**list_meters**](UsageBillingApi.md#list_meters) | **GET** /meters | List meters
[**retrieve_meter**](UsageBillingApi.md#retrieve_meter) | **GET** /meters/{meter_id} | Retrieve meter
[**retrieve_meter_balance**](UsageBillingApi.md#retrieve_meter_balance) | **GET** /meter_balances/{balance_id} | Retrieve meter balance
[**update_meter**](UsageBillingApi.md#update_meter) | **PATCH** /meters/{meter_id} | Update meter


# **create_meter**
> Meters create_meter(meters_create)

Create meter

Usage meters - track usage for usage-based billing

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.meters import Meters
from lomi_sdk.models.meters_create import MetersCreate
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
    api_instance = lomi_sdk.UsageBillingApi(api_client)
    meters_create = {"name":"Sample meter","description":"Example meter object"} # MetersCreate | 

    try:
        # Create meter
        api_response = api_instance.create_meter(meters_create)
        print("The response of UsageBillingApi->create_meter:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageBillingApi->create_meter: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **meters_create** | [**MetersCreate**](MetersCreate.md)|  | 

### Return type

[**Meters**](Meters.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Meter successfully created |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_meter**
> delete_meter(meter_id)

Delete meter

Delete a specific meter. This action cannot be undone.

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
    api_instance = lomi_sdk.UsageBillingApi(api_client)
    meter_id = 'meter_id_example' # str | Unique identifier for the meter

    try:
        # Delete meter
        api_instance.delete_meter(meter_id)
    except Exception as e:
        print("Exception when calling UsageBillingApi->delete_meter: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **meter_id** | **str**| Unique identifier for the meter | 

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
**204** | Meter successfully deleted |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_meter_balances**
> ListMeterBalances200Response list_meter_balances(limit=limit, offset=offset, sort=sort)

List meter balances

Meter balances - view current usage balances

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.list_meter_balances200_response import ListMeterBalances200Response
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
    api_instance = lomi_sdk.UsageBillingApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List meter balances
        api_response = api_instance.list_meter_balances(limit=limit, offset=offset, sort=sort)
        print("The response of UsageBillingApi->list_meter_balances:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageBillingApi->list_meter_balances: %s\n" % e)
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

# **list_meters**
> ListMeters200Response list_meters(limit=limit, offset=offset, sort=sort)

List meters

Usage meters - track usage for usage-based billing

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.list_meters200_response import ListMeters200Response
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
    api_instance = lomi_sdk.UsageBillingApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List meters
        api_response = api_instance.list_meters(limit=limit, offset=offset, sort=sort)
        print("The response of UsageBillingApi->list_meters:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageBillingApi->list_meters: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListMeters200Response**](ListMeters200Response.md)

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

# **retrieve_meter**
> Meters retrieve_meter(meter_id)

Retrieve meter

Retrieve a specific meter by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.meters import Meters
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
    api_instance = lomi_sdk.UsageBillingApi(api_client)
    meter_id = 'meter_id_example' # str | Unique identifier for the meter

    try:
        # Retrieve meter
        api_response = api_instance.retrieve_meter(meter_id)
        print("The response of UsageBillingApi->retrieve_meter:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageBillingApi->retrieve_meter: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **meter_id** | **str**| Unique identifier for the meter | 

### Return type

[**Meters**](Meters.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Meter retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_meter_balance**
> MeterBalances retrieve_meter_balance(balance_id)

Retrieve meter balance

Retrieve a specific meter balance by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.meter_balances import MeterBalances
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
    api_instance = lomi_sdk.UsageBillingApi(api_client)
    balance_id = 'balance_id_example' # str | Unique identifier for the meter balance

    try:
        # Retrieve meter balance
        api_response = api_instance.retrieve_meter_balance(balance_id)
        print("The response of UsageBillingApi->retrieve_meter_balance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageBillingApi->retrieve_meter_balance: %s\n" % e)
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

# **update_meter**
> Meters update_meter(meter_id, meters_update)

Update meter

Update a specific meter. Only provided fields will be updated.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.meters import Meters
from lomi_sdk.models.meters_update import MetersUpdate
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
    api_instance = lomi_sdk.UsageBillingApi(api_client)
    meter_id = 'meter_id_example' # str | Unique identifier for the meter
    meters_update = {"metadata":{"updated_at":"2025-11-21T09:45:11.332Z","updated_reason":"Administrative update"}} # MetersUpdate | 

    try:
        # Update meter
        api_response = api_instance.update_meter(meter_id, meters_update)
        print("The response of UsageBillingApi->update_meter:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageBillingApi->update_meter: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **meter_id** | **str**| Unique identifier for the meter | 
 **meters_update** | [**MetersUpdate**](MetersUpdate.md)|  | 

### Return type

[**Meters**](Meters.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Meter successfully updated |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

