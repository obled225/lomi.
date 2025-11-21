# LomiSDK\WebhookDeliveryLogsApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**listWebhookDeliveryLogs()**](WebhookDeliveryLogsApi.md#listWebhookDeliveryLogs) | **GET** /webhook_delivery_logs | List webhook delivery logs |
| [**retrieveWebhookDeliveryLog()**](WebhookDeliveryLogsApi.md#retrieveWebhookDeliveryLog) | **GET** /webhook_delivery_logs/{log_id} | Retrieve webhook delivery log |


## `listWebhookDeliveryLogs()`

```php
listWebhookDeliveryLogs($limit, $offset, $sort): \LomiSDK\Model\ListWebhookDeliveryLogs200Response
```

List webhook delivery logs

Webhook event log - history of webhook deliveries

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\WebhookDeliveryLogsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return (1-100)
$offset = 0; // int | Number of items to skip for pagination
$sort = created_at:desc; // string | Sort order. Format: `field:direction` (e.g., `created_at:desc`)

try {
    $result = $apiInstance->listWebhookDeliveryLogs($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebhookDeliveryLogsApi->listWebhookDeliveryLogs: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0] |
| **sort** | **string**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] |

### Return type

[**\LomiSDK\Model\ListWebhookDeliveryLogs200Response**](../Model/ListWebhookDeliveryLogs200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `retrieveWebhookDeliveryLog()`

```php
retrieveWebhookDeliveryLog($log_id): \LomiSDK\Model\WebhookDeliveryLogs
```

Retrieve webhook delivery log

Retrieve a specific webhook delivery log by its unique identifier.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\WebhookDeliveryLogsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$log_id = 'log_id_example'; // string | Unique identifier for the webhook delivery log

try {
    $result = $apiInstance->retrieveWebhookDeliveryLog($log_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebhookDeliveryLogsApi->retrieveWebhookDeliveryLog: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **log_id** | **string**| Unique identifier for the webhook delivery log | |

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
