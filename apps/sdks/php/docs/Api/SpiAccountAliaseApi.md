# LomiSDK\SpiAccountAliaseApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**spiAccountAliasesAliasIdGet()**](SpiAccountAliaseApi.md#spiAccountAliasesAliasIdGet) | **GET** /spi_account_aliases/{alias_id} | Get spi_account_aliase |
| [**spiAccountAliasesGet()**](SpiAccountAliaseApi.md#spiAccountAliasesGet) | **GET** /spi_account_aliases | List spi_account_aliases |


## `spiAccountAliasesAliasIdGet()`

```php
spiAccountAliasesAliasIdGet($alias_id): \LomiSDK\Model\SpiAccountAliases
```

Get spi_account_aliase

Retrieve a specific spi_account_aliase by ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\SpiAccountAliaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$alias_id = 'alias_id_example'; // string | The spi_account_aliase ID

try {
    $result = $apiInstance->spiAccountAliasesAliasIdGet($alias_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SpiAccountAliaseApi->spiAccountAliasesAliasIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **alias_id** | **string**| The spi_account_aliase ID | |

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

## `spiAccountAliasesGet()`

```php
spiAccountAliasesGet($limit, $offset, $sort): \LomiSDK\Model\SpiAccountAliasesGet200Response
```

List spi_account_aliases

Retrieve a paginated list of spi_account_aliases

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\SpiAccountAliaseApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return
$offset = 0; // int | Number of items to skip
$sort = 'sort_example'; // string | Sort order (e.g., created_at:desc)

try {
    $result = $apiInstance->spiAccountAliasesGet($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SpiAccountAliaseApi->spiAccountAliasesGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip | [optional] [default to 0] |
| **sort** | **string**| Sort order (e.g., created_at:desc) | [optional] |

### Return type

[**\LomiSDK\Model\SpiAccountAliasesGet200Response**](../Model/SpiAccountAliasesGet200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
