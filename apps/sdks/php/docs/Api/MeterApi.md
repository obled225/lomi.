# LomiSDK\MeterApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**metersGet()**](MeterApi.md#metersGet) | **GET** /meters | List meters |
| [**metersMeterIdDelete()**](MeterApi.md#metersMeterIdDelete) | **DELETE** /meters/{meter_id} | Delete meter |
| [**metersMeterIdGet()**](MeterApi.md#metersMeterIdGet) | **GET** /meters/{meter_id} | Get meter |
| [**metersMeterIdPatch()**](MeterApi.md#metersMeterIdPatch) | **PATCH** /meters/{meter_id} | Update meter |
| [**metersPost()**](MeterApi.md#metersPost) | **POST** /meters | Create meter |


## `metersGet()`

```php
metersGet($limit, $offset, $sort): \LomiSDK\Model\MetersGet200Response
```

List meters

Retrieve a paginated list of meters

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\MeterApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return
$offset = 0; // int | Number of items to skip
$sort = 'sort_example'; // string | Sort order (e.g., created_at:desc)

try {
    $result = $apiInstance->metersGet($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MeterApi->metersGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip | [optional] [default to 0] |
| **sort** | **string**| Sort order (e.g., created_at:desc) | [optional] |

### Return type

[**\LomiSDK\Model\MetersGet200Response**](../Model/MetersGet200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `metersMeterIdDelete()`

```php
metersMeterIdDelete($meter_id)
```

Delete meter

Delete a specific meter

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\MeterApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$meter_id = 'meter_id_example'; // string | The meter ID

try {
    $apiInstance->metersMeterIdDelete($meter_id);
} catch (Exception $e) {
    echo 'Exception when calling MeterApi->metersMeterIdDelete: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **meter_id** | **string**| The meter ID | |

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

## `metersMeterIdGet()`

```php
metersMeterIdGet($meter_id): \LomiSDK\Model\Meters
```

Get meter

Retrieve a specific meter by ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\MeterApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$meter_id = 'meter_id_example'; // string | The meter ID

try {
    $result = $apiInstance->metersMeterIdGet($meter_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MeterApi->metersMeterIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **meter_id** | **string**| The meter ID | |

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

## `metersMeterIdPatch()`

```php
metersMeterIdPatch($meter_id, $meters_update): \LomiSDK\Model\Meters
```

Update meter

Update a specific meter

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\MeterApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$meter_id = 'meter_id_example'; // string | The meter ID
$meters_update = new \LomiSDK\Model\MetersUpdate(); // \LomiSDK\Model\MetersUpdate

try {
    $result = $apiInstance->metersMeterIdPatch($meter_id, $meters_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MeterApi->metersMeterIdPatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **meter_id** | **string**| The meter ID | |
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

## `metersPost()`

```php
metersPost($meters_create): \LomiSDK\Model\Meters
```

Create meter

Create a new meter

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\MeterApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$meters_create = new \LomiSDK\Model\MetersCreate(); // \LomiSDK\Model\MetersCreate

try {
    $result = $apiInstance->metersPost($meters_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MeterApi->metersPost: ', $e->getMessage(), PHP_EOL;
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
