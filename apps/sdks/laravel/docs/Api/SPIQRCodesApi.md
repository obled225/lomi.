# LomiLaravel\SPIQRCodesApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createSpiQrCode()**](SPIQRCodesApi.md#createSpiQrCode) | **POST** /spi_qr_codes | Create spi qr code |
| [**deleteSpiQrCode()**](SPIQRCodesApi.md#deleteSpiQrCode) | **DELETE** /spi_qr_codes/{qr_code_id} | Delete spi qr code |
| [**listSpiQrCodes()**](SPIQRCodesApi.md#listSpiQrCodes) | **GET** /spi_qr_codes | List spi qr codes |
| [**retrieveSpiQrCode()**](SPIQRCodesApi.md#retrieveSpiQrCode) | **GET** /spi_qr_codes/{qr_code_id} | Retrieve spi qr code |
| [**updateSpiQrCode()**](SPIQRCodesApi.md#updateSpiQrCode) | **PATCH** /spi_qr_codes/{qr_code_id} | Update spi qr code |


## `createSpiQrCode()`

```php
createSpiQrCode($spi_qr_codes_create): \LomiLaravel\Model\SpiQrCodes
```

Create spi qr code

SPI QR codes - generate and manage SPI QR payment codes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiLaravel\Api\SPIQRCodesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$spi_qr_codes_create = {"amount":5000,"currency_code":"XOF","description":"QR code for in-store payment","expires_at":"2024-12-31T23:59:59Z"}; // \LomiLaravel\Model\SpiQrCodesCreate

try {
    $result = $apiInstance->createSpiQrCode($spi_qr_codes_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SPIQRCodesApi->createSpiQrCode: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **spi_qr_codes_create** | [**\LomiLaravel\Model\SpiQrCodesCreate**](../Model/SpiQrCodesCreate.md)|  | |

### Return type

[**\LomiLaravel\Model\SpiQrCodes**](../Model/SpiQrCodes.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteSpiQrCode()`

```php
deleteSpiQrCode($qr_code_id)
```

Delete spi qr code

Delete a specific spi qr code. This action cannot be undone.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiLaravel\Api\SPIQRCodesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$qr_code_id = 'qr_code_id_example'; // string | Unique identifier for the spi qr code

try {
    $apiInstance->deleteSpiQrCode($qr_code_id);
} catch (Exception $e) {
    echo 'Exception when calling SPIQRCodesApi->deleteSpiQrCode: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **qr_code_id** | **string**| Unique identifier for the spi qr code | |

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

## `listSpiQrCodes()`

```php
listSpiQrCodes($limit, $offset, $sort): \LomiLaravel\Model\ListSpiQrCodes200Response
```

List spi qr codes

SPI QR codes - generate and manage SPI QR payment codes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiLaravel\Api\SPIQRCodesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return (1-100)
$offset = 0; // int | Number of items to skip for pagination
$sort = created_at:desc; // string | Sort order. Format: `field:direction` (e.g., `created_at:desc`)

try {
    $result = $apiInstance->listSpiQrCodes($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SPIQRCodesApi->listSpiQrCodes: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0] |
| **sort** | **string**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] |

### Return type

[**\LomiLaravel\Model\ListSpiQrCodes200Response**](../Model/ListSpiQrCodes200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `retrieveSpiQrCode()`

```php
retrieveSpiQrCode($qr_code_id): \LomiLaravel\Model\SpiQrCodes
```

Retrieve spi qr code

Retrieve a specific spi qr code by its unique identifier.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiLaravel\Api\SPIQRCodesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$qr_code_id = 'qr_code_id_example'; // string | Unique identifier for the spi qr code

try {
    $result = $apiInstance->retrieveSpiQrCode($qr_code_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SPIQRCodesApi->retrieveSpiQrCode: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **qr_code_id** | **string**| Unique identifier for the spi qr code | |

### Return type

[**\LomiLaravel\Model\SpiQrCodes**](../Model/SpiQrCodes.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateSpiQrCode()`

```php
updateSpiQrCode($qr_code_id, $spi_qr_codes_update): \LomiLaravel\Model\SpiQrCodes
```

Update spi qr code

Update a specific spi qr code. Only provided fields will be updated.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiLaravel\Api\SPIQRCodesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$qr_code_id = 'qr_code_id_example'; // string | Unique identifier for the spi qr code
$spi_qr_codes_update = {"metadata":{"updated_at":"2025-11-21T13:32:16.241Z","updated_reason":"Administrative update"}}; // \LomiLaravel\Model\SpiQrCodesUpdate

try {
    $result = $apiInstance->updateSpiQrCode($qr_code_id, $spi_qr_codes_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SPIQRCodesApi->updateSpiQrCode: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **qr_code_id** | **string**| Unique identifier for the spi qr code | |
| **spi_qr_codes_update** | [**\LomiLaravel\Model\SpiQrCodesUpdate**](../Model/SpiQrCodesUpdate.md)|  | |

### Return type

[**\LomiLaravel\Model\SpiQrCodes**](../Model/SpiQrCodes.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
