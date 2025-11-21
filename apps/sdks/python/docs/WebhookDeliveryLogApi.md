# lomi_sdk.WebhookDeliveryLogApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhook_delivery_logs_get**](WebhookDeliveryLogApi.md#webhook_delivery_logs_get) | **GET** /webhook_delivery_logs | List webhook_delivery_logs
[**webhook_delivery_logs_log_id_get**](WebhookDeliveryLogApi.md#webhook_delivery_logs_log_id_get) | **GET** /webhook_delivery_logs/{log_id} | Get webhook_delivery_log


# **webhook_delivery_logs_get**
> WebhookDeliveryLogsGet200Response webhook_delivery_logs_get(limit=limit, offset=offset, sort=sort)

List webhook_delivery_logs

Retrieve a paginated list of webhook_delivery_logs

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.webhook_delivery_logs_get200_response import WebhookDeliveryLogsGet200Response
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
    api_instance = lomi_sdk.WebhookDeliveryLogApi(api_client)
    limit = 20 # int | Maximum number of items to return (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    sort = 'sort_example' # str | Sort order (e.g., created_at:desc) (optional)

    try:
        # List webhook_delivery_logs
        api_response = api_instance.webhook_delivery_logs_get(limit=limit, offset=offset, sort=sort)
        print("The response of WebhookDeliveryLogApi->webhook_delivery_logs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhookDeliveryLogApi->webhook_delivery_logs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **sort** | **str**| Sort order (e.g., created_at:desc) | [optional] 

### Return type

[**WebhookDeliveryLogsGet200Response**](WebhookDeliveryLogsGet200Response.md)

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

# **webhook_delivery_logs_log_id_get**
> WebhookDeliveryLogs webhook_delivery_logs_log_id_get(log_id)

Get webhook_delivery_log

Retrieve a specific webhook_delivery_log by ID

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.webhook_delivery_logs import WebhookDeliveryLogs
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
    api_instance = lomi_sdk.WebhookDeliveryLogApi(api_client)
    log_id = 'log_id_example' # str | The webhook_delivery_log ID

    try:
        # Get webhook_delivery_log
        api_response = api_instance.webhook_delivery_logs_log_id_get(log_id)
        print("The response of WebhookDeliveryLogApi->webhook_delivery_logs_log_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhookDeliveryLogApi->webhook_delivery_logs_log_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **log_id** | **str**| The webhook_delivery_log ID | 

### Return type

[**WebhookDeliveryLogs**](WebhookDeliveryLogs.md)

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

