# LomiLaravel\PricesApi

Pricing tiers - manage product pricing

All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createPrice()**](PricesApi.md#createPrice) | **POST** /prices | Create price |
| [**deletePrice()**](PricesApi.md#deletePrice) | **DELETE** /prices/{price_id} | Delete price |
| [**listPrices()**](PricesApi.md#listPrices) | **GET** /prices | List prices |
| [**retrievePrice()**](PricesApi.md#retrievePrice) | **GET** /prices/{price_id} | Retrieve price |
| [**updatePrice()**](PricesApi.md#updatePrice) | **PATCH** /prices/{price_id} | Update price |


## `createPrice()`

```php
createPrice($prices_create): \LomiLaravel\Model\Prices
```

Create price

Pricing tiers - manage product pricing

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiLaravel\Api\PricesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$prices_create = {"product_id":"prod_1234567890abcdef","amount":5000,"currency_code":"XOF","pricing_model":"flat_rate","billing_frequency":"monthly","is_active":true}; // \LomiLaravel\Model\PricesCreate

try {
    $result = $apiInstance->createPrice($prices_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PricesApi->createPrice: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **prices_create** | [**\LomiLaravel\Model\PricesCreate**](../Model/PricesCreate.md)|  | |

### Return type

[**\LomiLaravel\Model\Prices**](../Model/Prices.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deletePrice()`

```php
deletePrice($price_id)
```

Delete price

Delete a specific price. This action cannot be undone.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiLaravel\Api\PricesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$price_id = 'price_id_example'; // string | Unique identifier for the price

try {
    $apiInstance->deletePrice($price_id);
} catch (Exception $e) {
    echo 'Exception when calling PricesApi->deletePrice: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **price_id** | **string**| Unique identifier for the price | |

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

## `listPrices()`

```php
listPrices($limit, $offset, $sort): \LomiLaravel\Model\ListPrices200Response
```

List prices

Pricing tiers - manage product pricing

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiLaravel\Api\PricesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return (1-100)
$offset = 0; // int | Number of items to skip for pagination
$sort = created_at:desc; // string | Sort order. Format: `field:direction` (e.g., `created_at:desc`)

try {
    $result = $apiInstance->listPrices($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PricesApi->listPrices: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0] |
| **sort** | **string**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] |

### Return type

[**\LomiLaravel\Model\ListPrices200Response**](../Model/ListPrices200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `retrievePrice()`

```php
retrievePrice($price_id): \LomiLaravel\Model\Prices
```

Retrieve price

Retrieve a specific price by its unique identifier.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiLaravel\Api\PricesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$price_id = 'price_id_example'; // string | Unique identifier for the price

try {
    $result = $apiInstance->retrievePrice($price_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PricesApi->retrievePrice: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **price_id** | **string**| Unique identifier for the price | |

### Return type

[**\LomiLaravel\Model\Prices**](../Model/Prices.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updatePrice()`

```php
updatePrice($price_id, $prices_update): \LomiLaravel\Model\Prices
```

Update price

Update a specific price. Only provided fields will be updated.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiLaravel\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiLaravel\Api\PricesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$price_id = 'price_id_example'; // string | Unique identifier for the price
$prices_update = {"is_active":false}; // \LomiLaravel\Model\PricesUpdate

try {
    $result = $apiInstance->updatePrice($price_id, $prices_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PricesApi->updatePrice: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **price_id** | **string**| Unique identifier for the price | |
| **prices_update** | [**\LomiLaravel\Model\PricesUpdate**](../Model/PricesUpdate.md)|  | |

### Return type

[**\LomiLaravel\Model\Prices**](../Model/Prices.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
