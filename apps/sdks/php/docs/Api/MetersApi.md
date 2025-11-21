# LomiSDK\MetersApi

Usage meters - track usage for usage-based billing

All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createMeter()**](MetersApi.md#createMeter) | **POST** /meters | Create meter |
| [**deleteMeter()**](MetersApi.md#deleteMeter) | **DELETE** /meters/{meter_id} | Delete meter |
| [**listMeters()**](MetersApi.md#listMeters) | **GET** /meters | List meters |
| [**retrieveMeter()**](MetersApi.md#retrieveMeter) | **GET** /meters/{meter_id} | Retrieve meter |
| [**updateMeter()**](MetersApi.md#updateMeter) | **PATCH** /meters/{meter_id} | Update meter |


## `createMeter()`

```php
createMeter($meters_create): \LomiSDK\Model\Meters
```

Create meter

Usage meters - track usage for usage-based billing

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\MetersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$meters_create = {"name":"Sample meter","description":"Example meter object"}; // \LomiSDK\Model\MetersCreate

try {
    $result = $apiInstance->createMeter($meters_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MetersApi->createMeter: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **meters_create** | [**\LomiSDK\Model\MetersCreate**](../Model/MetersCreate.md)|  | |

### Return type

[**\LomiSDK\Model\Meters**](../Model/Meters.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteMeter()`

```php
deleteMeter($meter_id)
```

Delete meter

Delete a specific meter. This action cannot be undone.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\MetersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$meter_id = 'meter_id_example'; // string | Unique identifier for the meter

try {
    $apiInstance->deleteMeter($meter_id);
} catch (Exception $e) {
    echo 'Exception when calling MetersApi->deleteMeter: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **meter_id** | **string**| Unique identifier for the meter | |

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

## `listMeters()`

```php
listMeters($limit, $offset, $sort): \LomiSDK\Model\ListMeters200Response
```

List meters

Usage meters - track usage for usage-based billing

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\MetersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return (1-100)
$offset = 0; // int | Number of items to skip for pagination
$sort = created_at:desc; // string | Sort order. Format: `field:direction` (e.g., `created_at:desc`)

try {
    $result = $apiInstance->listMeters($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MetersApi->listMeters: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0] |
| **sort** | **string**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] |

### Return type

[**\LomiSDK\Model\ListMeters200Response**](../Model/ListMeters200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `retrieveMeter()`

```php
retrieveMeter($meter_id): \LomiSDK\Model\Meters
```

Retrieve meter

Retrieve a specific meter by its unique identifier.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\MetersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$meter_id = 'meter_id_example'; // string | Unique identifier for the meter

try {
    $result = $apiInstance->retrieveMeter($meter_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MetersApi->retrieveMeter: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **meter_id** | **string**| Unique identifier for the meter | |

### Return type

[**\LomiSDK\Model\Meters**](../Model/Meters.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateMeter()`

```php
updateMeter($meter_id, $meters_update): \LomiSDK\Model\Meters
```

Update meter

Update a specific meter. Only provided fields will be updated.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\MetersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$meter_id = 'meter_id_example'; // string | Unique identifier for the meter
$meters_update = {"metadata":{"updated_at":"2025-11-21T13:32:16.241Z","updated_reason":"Administrative update"}}; // \LomiSDK\Model\MetersUpdate

try {
    $result = $apiInstance->updateMeter($meter_id, $meters_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MetersApi->updateMeter: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **meter_id** | **string**| Unique identifier for the meter | |
| **meters_update** | [**\LomiSDK\Model\MetersUpdate**](../Model/MetersUpdate.md)|  | |

### Return type

[**\LomiSDK\Model\Meters**](../Model/Meters.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
