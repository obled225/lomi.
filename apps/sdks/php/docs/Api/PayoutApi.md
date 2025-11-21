# LomiSDK\PayoutApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**payoutsGet()**](PayoutApi.md#payoutsGet) | **GET** /payouts | List payouts |
| [**payoutsPayoutIdDelete()**](PayoutApi.md#payoutsPayoutIdDelete) | **DELETE** /payouts/{payout_id} | Delete payout |
| [**payoutsPayoutIdGet()**](PayoutApi.md#payoutsPayoutIdGet) | **GET** /payouts/{payout_id} | Get payout |
| [**payoutsPayoutIdPatch()**](PayoutApi.md#payoutsPayoutIdPatch) | **PATCH** /payouts/{payout_id} | Update payout |
| [**payoutsPost()**](PayoutApi.md#payoutsPost) | **POST** /payouts | Create payout |


## `payoutsGet()`

```php
payoutsGet($limit, $offset, $sort): \LomiSDK\Model\PayoutsGet200Response
```

List payouts

Retrieve a paginated list of payouts

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PayoutApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return
$offset = 0; // int | Number of items to skip
$sort = 'sort_example'; // string | Sort order (e.g., created_at:desc)

try {
    $result = $apiInstance->payoutsGet($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PayoutApi->payoutsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip | [optional] [default to 0] |
| **sort** | **string**| Sort order (e.g., created_at:desc) | [optional] |

### Return type

[**\LomiSDK\Model\PayoutsGet200Response**](../Model/PayoutsGet200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `payoutsPayoutIdDelete()`

```php
payoutsPayoutIdDelete($payout_id)
```

Delete payout

Delete a specific payout

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PayoutApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payout_id = 'payout_id_example'; // string | The payout ID

try {
    $apiInstance->payoutsPayoutIdDelete($payout_id);
} catch (Exception $e) {
    echo 'Exception when calling PayoutApi->payoutsPayoutIdDelete: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **payout_id** | **string**| The payout ID | |

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

## `payoutsPayoutIdGet()`

```php
payoutsPayoutIdGet($payout_id): \LomiSDK\Model\Payouts
```

Get payout

Retrieve a specific payout by ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PayoutApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payout_id = 'payout_id_example'; // string | The payout ID

try {
    $result = $apiInstance->payoutsPayoutIdGet($payout_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PayoutApi->payoutsPayoutIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **payout_id** | **string**| The payout ID | |

### Return type

[**\LomiSDK\Model\Payouts**](../Model/Payouts.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `payoutsPayoutIdPatch()`

```php
payoutsPayoutIdPatch($payout_id, $payouts_update): \LomiSDK\Model\Payouts
```

Update payout

Update a specific payout

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PayoutApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payout_id = 'payout_id_example'; // string | The payout ID
$payouts_update = new \LomiSDK\Model\PayoutsUpdate(); // \LomiSDK\Model\PayoutsUpdate

try {
    $result = $apiInstance->payoutsPayoutIdPatch($payout_id, $payouts_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PayoutApi->payoutsPayoutIdPatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **payout_id** | **string**| The payout ID | |
| **payouts_update** | [**\LomiSDK\Model\PayoutsUpdate**](../Model/PayoutsUpdate.md)|  | |

### Return type

[**\LomiSDK\Model\Payouts**](../Model/Payouts.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `payoutsPost()`

```php
payoutsPost($payouts_create): \LomiSDK\Model\Payouts
```

Create payout

Create a new payout

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PayoutApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payouts_create = new \LomiSDK\Model\PayoutsCreate(); // \LomiSDK\Model\PayoutsCreate

try {
    $result = $apiInstance->payoutsPost($payouts_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PayoutApi->payoutsPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **payouts_create** | [**\LomiSDK\Model\PayoutsCreate**](../Model/PayoutsCreate.md)|  | |

### Return type

[**\LomiSDK\Model\Payouts**](../Model/Payouts.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
