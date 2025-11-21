# lomi.WebhookDeliveryLogsApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_webhook_delivery_logs**](WebhookDeliveryLogsApi.md#list_webhook_delivery_logs) | **GET** /webhook_delivery_logs | List webhook delivery logs
[**retrieve_webhook_delivery_log**](WebhookDeliveryLogsApi.md#retrieve_webhook_delivery_log) | **GET** /webhook_delivery_logs/{log_id} | Retrieve webhook delivery log


# **list_webhook_delivery_logs**
> ListWebhookDeliveryLogs200Response list_webhook_delivery_logs(limit=limit, offset=offset, sort=sort)

List webhook delivery logs

Webhook event log - history of webhook deliveries

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.list_webhook_delivery_logs200_response import ListWebhookDeliveryLogs200Response
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
    api_instance = lomi.WebhookDeliveryLogsApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List webhook delivery logs
        api_response = api_instance.list_webhook_delivery_logs(limit=limit, offset=offset, sort=sort)
        print("The response of WebhookDeliveryLogsApi->list_webhook_delivery_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhookDeliveryLogsApi->list_webhook_delivery_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListWebhookDeliveryLogs200Response**](ListWebhookDeliveryLogs200Response.md)

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

# **retrieve_webhook_delivery_log**
> WebhookDeliveryLogs retrieve_webhook_delivery_log(log_id)

Retrieve webhook delivery log

Retrieve a specific webhook delivery log by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.webhook_delivery_logs import WebhookDeliveryLogs
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
    api_instance = lomi.WebhookDeliveryLogsApi(api_client)
    log_id = 'log_id_example' # str | Unique identifier for the webhook delivery log

    try:
        # Retrieve webhook delivery log
        api_response = api_instance.retrieve_webhook_delivery_log(log_id)
        print("The response of WebhookDeliveryLogsApi->retrieve_webhook_delivery_log:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhookDeliveryLogsApi->retrieve_webhook_delivery_log: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **log_id** | **str**| Unique identifier for the webhook delivery log | 

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
**200** | Webhook_delivery_log retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

