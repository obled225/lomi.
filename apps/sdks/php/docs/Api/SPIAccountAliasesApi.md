# LomiSDK\SPIAccountAliasesApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**listSpiAccountAliases()**](SPIAccountAliasesApi.md#listSpiAccountAliases) | **GET** /spi_account_aliases | List spi account aliases |
| [**retrieveSpiAccountAliase()**](SPIAccountAliasesApi.md#retrieveSpiAccountAliase) | **GET** /spi_account_aliases/{alias_id} | Retrieve spi account aliase |


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


$apiInstance = new LomiSDK\Api\SPIAccountAliasesApi(
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
    echo 'Exception when calling SPIAccountAliasesApi->listSpiAccountAliases: ', $e->getMessage(), PHP_EOL;
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


$apiInstance = new LomiSDK\Api\SPIAccountAliasesApi(
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
    echo 'Exception when calling SPIAccountAliasesApi->retrieveSpiAccountAliase: ', $e->getMessage(), PHP_EOL;
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
