# LomiSDK\WebhookDeliveryLogApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**webhookDeliveryLogsGet()**](WebhookDeliveryLogApi.md#webhookDeliveryLogsGet) | **GET** /webhook_delivery_logs | List webhook_delivery_logs |
| [**webhookDeliveryLogsLogIdGet()**](WebhookDeliveryLogApi.md#webhookDeliveryLogsLogIdGet) | **GET** /webhook_delivery_logs/{log_id} | Get webhook_delivery_log |


## `webhookDeliveryLogsGet()`

```php
webhookDeliveryLogsGet($limit, $offset, $sort): \LomiSDK\Model\WebhookDeliveryLogsGet200Response
```

List webhook_delivery_logs

Retrieve a paginated list of webhook_delivery_logs

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\WebhookDeliveryLogApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return
$offset = 0; // int | Number of items to skip
$sort = 'sort_example'; // string | Sort order (e.g., created_at:desc)

try {
    $result = $apiInstance->webhookDeliveryLogsGet($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebhookDeliveryLogApi->webhookDeliveryLogsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip | [optional] [default to 0] |
| **sort** | **string**| Sort order (e.g., created_at:desc) | [optional] |

### Return type

[**\LomiSDK\Model\WebhookDeliveryLogsGet200Response**](../Model/WebhookDeliveryLogsGet200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `webhookDeliveryLogsLogIdGet()`

```php
webhookDeliveryLogsLogIdGet($log_id): \LomiSDK\Model\WebhookDeliveryLogs
```

Get webhook_delivery_log

Retrieve a specific webhook_delivery_log by ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\WebhookDeliveryLogApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$log_id = 'log_id_example'; // string | The webhook_delivery_log ID

try {
    $result = $apiInstance->webhookDeliveryLogsLogIdGet($log_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebhookDeliveryLogApi->webhookDeliveryLogsLogIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **log_id** | **string**| The webhook_delivery_log ID | |

### Return type

[**\LomiSDK\Model\WebhookDeliveryLogs**](../Model/WebhookDeliveryLogs.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
