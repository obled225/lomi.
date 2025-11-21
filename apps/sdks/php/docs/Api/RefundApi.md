# LomiSDK\RefundApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**refundsGet()**](RefundApi.md#refundsGet) | **GET** /refunds | List refunds |
| [**refundsPost()**](RefundApi.md#refundsPost) | **POST** /refunds | Create refund |
| [**refundsRefundIdDelete()**](RefundApi.md#refundsRefundIdDelete) | **DELETE** /refunds/{refund_id} | Delete refund |
| [**refundsRefundIdGet()**](RefundApi.md#refundsRefundIdGet) | **GET** /refunds/{refund_id} | Get refund |
| [**refundsRefundIdPatch()**](RefundApi.md#refundsRefundIdPatch) | **PATCH** /refunds/{refund_id} | Update refund |


## `refundsGet()`

```php
refundsGet($limit, $offset, $sort): \LomiSDK\Model\RefundsGet200Response
```

List refunds

Retrieve a paginated list of refunds

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\RefundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return
$offset = 0; // int | Number of items to skip
$sort = 'sort_example'; // string | Sort order (e.g., created_at:desc)

try {
    $result = $apiInstance->refundsGet($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RefundApi->refundsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip | [optional] [default to 0] |
| **sort** | **string**| Sort order (e.g., created_at:desc) | [optional] |

### Return type

[**\LomiSDK\Model\RefundsGet200Response**](../Model/RefundsGet200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `refundsPost()`

```php
refundsPost($refunds_create): \LomiSDK\Model\Refunds
```

Create refund

Create a new refund

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\RefundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$refunds_create = new \LomiSDK\Model\RefundsCreate(); // \LomiSDK\Model\RefundsCreate

try {
    $result = $apiInstance->refundsPost($refunds_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RefundApi->refundsPost: ', $e->getMessage(), PHP_EOL;
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

## `refundsRefundIdDelete()`

```php
refundsRefundIdDelete($refund_id)
```

Delete refund

Delete a specific refund

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\RefundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$refund_id = 'refund_id_example'; // string | The refund ID

try {
    $apiInstance->refundsRefundIdDelete($refund_id);
} catch (Exception $e) {
    echo 'Exception when calling RefundApi->refundsRefundIdDelete: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **refund_id** | **string**| The refund ID | |

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

## `refundsRefundIdGet()`

```php
refundsRefundIdGet($refund_id): \LomiSDK\Model\Refunds
```

Get refund

Retrieve a specific refund by ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\RefundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$refund_id = 'refund_id_example'; // string | The refund ID

try {
    $result = $apiInstance->refundsRefundIdGet($refund_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RefundApi->refundsRefundIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **refund_id** | **string**| The refund ID | |

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

## `refundsRefundIdPatch()`

```php
refundsRefundIdPatch($refund_id, $refunds_update): \LomiSDK\Model\Refunds
```

Update refund

Update a specific refund

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\RefundApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$refund_id = 'refund_id_example'; // string | The refund ID
$refunds_update = new \LomiSDK\Model\RefundsUpdate(); // \LomiSDK\Model\RefundsUpdate

try {
    $result = $apiInstance->refundsRefundIdPatch($refund_id, $refunds_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RefundApi->refundsRefundIdPatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **refund_id** | **string**| The refund ID | |
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
