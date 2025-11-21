# LomiSDK\RefundsApi

Refund management - process and track refunds

All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createRefund()**](RefundsApi.md#createRefund) | **POST** /refunds | Create refund |
| [**deleteRefund()**](RefundsApi.md#deleteRefund) | **DELETE** /refunds/{refund_id} | Delete refund |
| [**listRefunds()**](RefundsApi.md#listRefunds) | **GET** /refunds | List refunds |
| [**retrieveRefund()**](RefundsApi.md#retrieveRefund) | **GET** /refunds/{refund_id} | Retrieve refund |
| [**updateRefund()**](RefundsApi.md#updateRefund) | **PATCH** /refunds/{refund_id} | Update refund |


## `createRefund()`

```php
createRefund($refunds_create): \LomiSDK\Model\Refunds
```

Create refund

Refund management - process and track refunds

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\RefundsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$refunds_create = {"name":"Sample refund","description":"Example refund object"}; // \LomiSDK\Model\RefundsCreate

try {
    $result = $apiInstance->createRefund($refunds_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RefundsApi->createRefund: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **refunds_create** | [**\LomiSDK\Model\RefundsCreate**](../Model/RefundsCreate.md)|  | |

### Return type

[**\LomiSDK\Model\Refunds**](../Model/Refunds.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteRefund()`

```php
deleteRefund($refund_id)
```

Delete refund

Delete a specific refund. This action cannot be undone.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\RefundsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$refund_id = 'refund_id_example'; // string | Unique identifier for the refund

try {
    $apiInstance->deleteRefund($refund_id);
} catch (Exception $e) {
    echo 'Exception when calling RefundsApi->deleteRefund: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **refund_id** | **string**| Unique identifier for the refund | |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listRefunds()`

```php
listRefunds($limit, $offset, $sort): \LomiSDK\Model\ListRefunds200Response
```

List refunds

Refund management - process and track refunds

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\RefundsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return (1-100)
$offset = 0; // int | Number of items to skip for pagination
$sort = created_at:desc; // string | Sort order. Format: `field:direction` (e.g., `created_at:desc`)

try {
    $result = $apiInstance->listRefunds($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RefundsApi->listRefunds: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0] |
| **sort** | **string**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] |

### Return type

[**\LomiSDK\Model\ListRefunds200Response**](../Model/ListRefunds200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `retrieveRefund()`

```php
retrieveRefund($refund_id): \LomiSDK\Model\Refunds
```

Retrieve refund

Retrieve a specific refund by its unique identifier.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\RefundsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$refund_id = 'refund_id_example'; // string | Unique identifier for the refund

try {
    $result = $apiInstance->retrieveRefund($refund_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RefundsApi->retrieveRefund: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **refund_id** | **string**| Unique identifier for the refund | |

### Return type

[**\LomiSDK\Model\Refunds**](../Model/Refunds.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateRefund()`

```php
updateRefund($refund_id, $refunds_update): \LomiSDK\Model\Refunds
```

Update refund

Update a specific refund. Only provided fields will be updated.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\RefundsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$refund_id = 'refund_id_example'; // string | Unique identifier for the refund
$refunds_update = {"metadata":{"updated_at":"2025-11-21T13:32:16.239Z","updated_reason":"Administrative update"}}; // \LomiSDK\Model\RefundsUpdate

try {
    $result = $apiInstance->updateRefund($refund_id, $refunds_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RefundsApi->updateRefund: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **refund_id** | **string**| Unique identifier for the refund | |
| **refunds_update** | [**\LomiSDK\Model\RefundsUpdate**](../Model/RefundsUpdate.md)|  | |

### Return type

[**\LomiSDK\Model\Refunds**](../Model/Refunds.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
