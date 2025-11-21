# LomiSDK\PayoutsApi

Payout management - transfer funds to beneficiaries

All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createPayout()**](PayoutsApi.md#createPayout) | **POST** /payouts | Create payout |
| [**deletePayout()**](PayoutsApi.md#deletePayout) | **DELETE** /payouts/{payout_id} | Delete payout |
| [**listPayouts()**](PayoutsApi.md#listPayouts) | **GET** /payouts | List payouts |
| [**retrievePayout()**](PayoutsApi.md#retrievePayout) | **GET** /payouts/{payout_id} | Retrieve payout |
| [**updatePayout()**](PayoutsApi.md#updatePayout) | **PATCH** /payouts/{payout_id} | Update payout |


## `createPayout()`

```php
createPayout($payouts_create): \LomiSDK\Model\Payouts
```

Create payout

Payout management - transfer funds to beneficiaries

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PayoutsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payouts_create = {"amount":100000,"currency_code":"XOF","beneficiary_account_id":"acc_1234567890abcdef","description":"Monthly payout to vendor"}; // \LomiSDK\Model\PayoutsCreate

try {
    $result = $apiInstance->createPayout($payouts_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PayoutsApi->createPayout: ', $e->getMessage(), PHP_EOL;
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

## `deletePayout()`

```php
deletePayout($payout_id)
```

Delete payout

Delete a specific payout. This action cannot be undone.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PayoutsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payout_id = 'payout_id_example'; // string | Unique identifier for the payout

try {
    $apiInstance->deletePayout($payout_id);
} catch (Exception $e) {
    echo 'Exception when calling PayoutsApi->deletePayout: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **payout_id** | **string**| Unique identifier for the payout | |

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

## `listPayouts()`

```php
listPayouts($limit, $offset, $sort): \LomiSDK\Model\ListPayouts200Response
```

List payouts

Payout management - transfer funds to beneficiaries

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PayoutsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return (1-100)
$offset = 0; // int | Number of items to skip for pagination
$sort = created_at:desc; // string | Sort order. Format: `field:direction` (e.g., `created_at:desc`)

try {
    $result = $apiInstance->listPayouts($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PayoutsApi->listPayouts: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0] |
| **sort** | **string**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] |

### Return type

[**\LomiSDK\Model\ListPayouts200Response**](../Model/ListPayouts200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `retrievePayout()`

```php
retrievePayout($payout_id): \LomiSDK\Model\Payouts
```

Retrieve payout

Retrieve a specific payout by its unique identifier.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PayoutsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payout_id = 'payout_id_example'; // string | Unique identifier for the payout

try {
    $result = $apiInstance->retrievePayout($payout_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PayoutsApi->retrievePayout: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **payout_id** | **string**| Unique identifier for the payout | |

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

## `updatePayout()`

```php
updatePayout($payout_id, $payouts_update): \LomiSDK\Model\Payouts
```

Update payout

Update a specific payout. Only provided fields will be updated.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PayoutsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payout_id = 'payout_id_example'; // string | Unique identifier for the payout
$payouts_update = {"metadata":{"updated_at":"2025-11-21T13:32:16.240Z","updated_reason":"Administrative update"}}; // \LomiSDK\Model\PayoutsUpdate

try {
    $result = $apiInstance->updatePayout($payout_id, $payouts_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PayoutsApi->updatePayout: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **payout_id** | **string**| Unique identifier for the payout | |
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
