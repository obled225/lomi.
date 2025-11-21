# LomiSDK\SPIApi

SPI QR codes - generate and manage SPI QR payment codes

All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createSpiQrCode()**](SPIApi.md#createSpiQrCode) | **POST** /spi_qr_codes | Create spi qr code |
| [**deleteSpiQrCode()**](SPIApi.md#deleteSpiQrCode) | **DELETE** /spi_qr_codes/{qr_code_id} | Delete spi qr code |
| [**listSpiAccountAliases()**](SPIApi.md#listSpiAccountAliases) | **GET** /spi_account_aliases | List spi account aliases |
| [**listSpiQrCodes()**](SPIApi.md#listSpiQrCodes) | **GET** /spi_qr_codes | List spi qr codes |
| [**retrieveSpiAccountAliase()**](SPIApi.md#retrieveSpiAccountAliase) | **GET** /spi_account_aliases/{alias_id} | Retrieve spi account aliase |
| [**retrieveSpiQrCode()**](SPIApi.md#retrieveSpiQrCode) | **GET** /spi_qr_codes/{qr_code_id} | Retrieve spi qr code |
| [**updateSpiQrCode()**](SPIApi.md#updateSpiQrCode) | **PATCH** /spi_qr_codes/{qr_code_id} | Update spi qr code |


## `createSpiQrCode()`

```php
createSpiQrCode($spi_qr_codes_create): \LomiSDK\Model\SpiQrCodes
```

Create spi qr code

SPI QR codes - generate and manage SPI QR payment codes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\SPIApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$spi_qr_codes_create = {"amount":5000,"currency_code":"XOF","description":"QR code for in-store payment","expires_at":"2024-12-31T23:59:59Z"}; // \LomiSDK\Model\SpiQrCodesCreate

try {
    $result = $apiInstance->createSpiQrCode($spi_qr_codes_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SPIApi->createSpiQrCode: ', $e->getMessage(), PHP_EOL;
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
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\SPIApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$qr_code_id = 'qr_code_id_example'; // string | Unique identifier for the spi qr code

try {
    $apiInstance->deleteSpiQrCode($qr_code_id);
} catch (Exception $e) {
    echo 'Exception when calling SPIApi->deleteSpiQrCode: ', $e->getMessage(), PHP_EOL;
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

## `listSpiAccountAliases()`

```php
listSpiAccountAliases($limit, $offset, $sort): \LomiSDK\Model\ListSpiAccountAliases200Response
```

List spi account aliases

SPI account aliases - manage SPI payment aliases

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\SPIApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return (1-100)
$offset = 0; // int | Number of items to skip for pagination
$sort = created_at:desc; // string | Sort order. Format: `field:direction` (e.g., `created_at:desc`)

try {
    $result = $apiInstance->listSpiAccountAliases($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SPIApi->listSpiAccountAliases: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0] |
| **sort** | **string**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] |

### Return type

[**\LomiSDK\Model\ListSpiAccountAliases200Response**](../Model/ListSpiAccountAliases200Response.md)

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
listSpiQrCodes($limit, $offset, $sort): \LomiSDK\Model\ListSpiQrCodes200Response
```

List spi qr codes

SPI QR codes - generate and manage SPI QR payment codes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\SPIApi(
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
    echo 'Exception when calling SPIApi->listSpiQrCodes: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0] |
| **sort** | **string**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] |

### Return type

[**\LomiSDK\Model\ListSpiQrCodes200Response**](../Model/ListSpiQrCodes200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `retrieveSpiAccountAliase()`

```php
retrieveSpiAccountAliase($alias_id): \LomiSDK\Model\SpiAccountAliases
```

Retrieve spi account aliase

Retrieve a specific spi account aliase by its unique identifier.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\SPIApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$alias_id = 'alias_id_example'; // string | Unique identifier for the spi account aliase

try {
    $result = $apiInstance->retrieveSpiAccountAliase($alias_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SPIApi->retrieveSpiAccountAliase: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **alias_id** | **string**| Unique identifier for the spi account aliase | |

### Return type

[**\LomiSDK\Model\SpiAccountAliases**](../Model/SpiAccountAliases.md)

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
retrieveSpiQrCode($qr_code_id): \LomiSDK\Model\SpiQrCodes
```

Retrieve spi qr code

Retrieve a specific spi qr code by its unique identifier.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\SPIApi(
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
    echo 'Exception when calling SPIApi->retrieveSpiQrCode: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **qr_code_id** | **string**| Unique identifier for the spi qr code | |

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

## `updateSpiQrCode()`

```php
updateSpiQrCode($qr_code_id, $spi_qr_codes_update): \LomiSDK\Model\SpiQrCodes
```

Update spi qr code

Update a specific spi qr code. Only provided fields will be updated.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\SPIApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$qr_code_id = 'qr_code_id_example'; // string | Unique identifier for the spi qr code
$spi_qr_codes_update = {"metadata":{"updated_at":"2025-11-21T12:46:27.079Z","updated_reason":"Administrative update"}}; // \LomiSDK\Model\SpiQrCodesUpdate

try {
    $result = $apiInstance->updateSpiQrCode($qr_code_id, $spi_qr_codes_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SPIApi->updateSpiQrCode: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **qr_code_id** | **string**| Unique identifier for the spi qr code | |
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
