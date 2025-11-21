# LomiSDK\SpiQrCodeApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**spiQrCodesGet()**](SpiQrCodeApi.md#spiQrCodesGet) | **GET** /spi_qr_codes | List spi_qr_codes |
| [**spiQrCodesPost()**](SpiQrCodeApi.md#spiQrCodesPost) | **POST** /spi_qr_codes | Create spi_qr_code |
| [**spiQrCodesQrCodeIdDelete()**](SpiQrCodeApi.md#spiQrCodesQrCodeIdDelete) | **DELETE** /spi_qr_codes/{qr_code_id} | Delete spi_qr_code |
| [**spiQrCodesQrCodeIdGet()**](SpiQrCodeApi.md#spiQrCodesQrCodeIdGet) | **GET** /spi_qr_codes/{qr_code_id} | Get spi_qr_code |
| [**spiQrCodesQrCodeIdPatch()**](SpiQrCodeApi.md#spiQrCodesQrCodeIdPatch) | **PATCH** /spi_qr_codes/{qr_code_id} | Update spi_qr_code |


## `spiQrCodesGet()`

```php
spiQrCodesGet($limit, $offset, $sort): \LomiSDK\Model\SpiQrCodesGet200Response
```

List spi_qr_codes

Retrieve a paginated list of spi_qr_codes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\SpiQrCodeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return
$offset = 0; // int | Number of items to skip
$sort = 'sort_example'; // string | Sort order (e.g., created_at:desc)

try {
    $result = $apiInstance->spiQrCodesGet($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SpiQrCodeApi->spiQrCodesGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip | [optional] [default to 0] |
| **sort** | **string**| Sort order (e.g., created_at:desc) | [optional] |

### Return type

[**\LomiSDK\Model\SpiQrCodesGet200Response**](../Model/SpiQrCodesGet200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `spiQrCodesPost()`

```php
spiQrCodesPost($spi_qr_codes_create): \LomiSDK\Model\SpiQrCodes
```

Create spi_qr_code

Create a new spi_qr_code

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\SpiQrCodeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$spi_qr_codes_create = new \LomiSDK\Model\SpiQrCodesCreate(); // \LomiSDK\Model\SpiQrCodesCreate

try {
    $result = $apiInstance->spiQrCodesPost($spi_qr_codes_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SpiQrCodeApi->spiQrCodesPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **spi_qr_codes_create** | [**\LomiSDK\Model\SpiQrCodesCreate**](../Model/SpiQrCodesCreate.md)|  | |

### Return type

[**\LomiSDK\Model\SpiQrCodes**](../Model/SpiQrCodes.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `spiQrCodesQrCodeIdDelete()`

```php
spiQrCodesQrCodeIdDelete($qr_code_id)
```

Delete spi_qr_code

Delete a specific spi_qr_code

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\SpiQrCodeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$qr_code_id = 'qr_code_id_example'; // string | The spi_qr_code ID

try {
    $apiInstance->spiQrCodesQrCodeIdDelete($qr_code_id);
} catch (Exception $e) {
    echo 'Exception when calling SpiQrCodeApi->spiQrCodesQrCodeIdDelete: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **qr_code_id** | **string**| The spi_qr_code ID | |

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

## `spiQrCodesQrCodeIdGet()`

```php
spiQrCodesQrCodeIdGet($qr_code_id): \LomiSDK\Model\SpiQrCodes
```

Get spi_qr_code

Retrieve a specific spi_qr_code by ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\SpiQrCodeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$qr_code_id = 'qr_code_id_example'; // string | The spi_qr_code ID

try {
    $result = $apiInstance->spiQrCodesQrCodeIdGet($qr_code_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SpiQrCodeApi->spiQrCodesQrCodeIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **qr_code_id** | **string**| The spi_qr_code ID | |

### Return type

[**\LomiSDK\Model\SpiQrCodes**](../Model/SpiQrCodes.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `spiQrCodesQrCodeIdPatch()`

```php
spiQrCodesQrCodeIdPatch($qr_code_id, $spi_qr_codes_update): \LomiSDK\Model\SpiQrCodes
```

Update spi_qr_code

Update a specific spi_qr_code

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\SpiQrCodeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$qr_code_id = 'qr_code_id_example'; // string | The spi_qr_code ID
$spi_qr_codes_update = new \LomiSDK\Model\SpiQrCodesUpdate(); // \LomiSDK\Model\SpiQrCodesUpdate

try {
    $result = $apiInstance->spiQrCodesQrCodeIdPatch($qr_code_id, $spi_qr_codes_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SpiQrCodeApi->spiQrCodesQrCodeIdPatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **qr_code_id** | **string**| The spi_qr_code ID | |
| **spi_qr_codes_update** | [**\LomiSDK\Model\SpiQrCodesUpdate**](../Model/SpiQrCodesUpdate.md)|  | |

### Return type

[**\LomiSDK\Model\SpiQrCodes**](../Model/SpiQrCodes.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
