# LomiSDK\DiscountCouponsApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createDiscountCoupon()**](DiscountCouponsApi.md#createDiscountCoupon) | **POST** /discount_coupons | Create discount coupon |
| [**deleteDiscountCoupon()**](DiscountCouponsApi.md#deleteDiscountCoupon) | **DELETE** /discount_coupons/{coupon_id} | Delete discount coupon |
| [**listDiscountCoupons()**](DiscountCouponsApi.md#listDiscountCoupons) | **GET** /discount_coupons | List discount coupons |
| [**retrieveDiscountCoupon()**](DiscountCouponsApi.md#retrieveDiscountCoupon) | **GET** /discount_coupons/{coupon_id} | Retrieve discount coupon |
| [**updateDiscountCoupon()**](DiscountCouponsApi.md#updateDiscountCoupon) | **PATCH** /discount_coupons/{coupon_id} | Update discount coupon |


## `createDiscountCoupon()`

```php
createDiscountCoupon($discount_coupons_create): \LomiSDK\Model\DiscountCoupons
```

Create discount coupon

Discount coupons - create and manage promotional codes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\DiscountCouponsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$discount_coupons_create = {"code":"WELCOME2024","discount_type":"percentage","discount_percentage":20,"max_uses":100,"is_active":true,"expires_at":"2024-12-31T23:59:59Z","description":"Welcome discount for new customers"}; // \LomiSDK\Model\DiscountCouponsCreate

try {
    $result = $apiInstance->createDiscountCoupon($discount_coupons_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DiscountCouponsApi->createDiscountCoupon: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **discount_coupons_create** | [**\LomiSDK\Model\DiscountCouponsCreate**](../Model/DiscountCouponsCreate.md)|  | |

### Return type

[**\LomiSDK\Model\DiscountCoupons**](../Model/DiscountCoupons.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteDiscountCoupon()`

```php
deleteDiscountCoupon($coupon_id)
```

Delete discount coupon

Delete a specific discount coupon. This action cannot be undone.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\DiscountCouponsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$coupon_id = 'coupon_id_example'; // string | Unique identifier for the discount coupon

try {
    $apiInstance->deleteDiscountCoupon($coupon_id);
} catch (Exception $e) {
    echo 'Exception when calling DiscountCouponsApi->deleteDiscountCoupon: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **coupon_id** | **string**| Unique identifier for the discount coupon | |

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

## `listDiscountCoupons()`

```php
listDiscountCoupons($limit, $offset, $sort): \LomiSDK\Model\ListDiscountCoupons200Response
```

List discount coupons

Discount coupons - create and manage promotional codes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\DiscountCouponsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return (1-100)
$offset = 0; // int | Number of items to skip for pagination
$sort = created_at:desc; // string | Sort order. Format: `field:direction` (e.g., `created_at:desc`)

try {
    $result = $apiInstance->listDiscountCoupons($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DiscountCouponsApi->listDiscountCoupons: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0] |
| **sort** | **string**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] |

### Return type

[**\LomiSDK\Model\ListDiscountCoupons200Response**](../Model/ListDiscountCoupons200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `retrieveDiscountCoupon()`

```php
retrieveDiscountCoupon($coupon_id): \LomiSDK\Model\DiscountCoupons
```

Retrieve discount coupon

Retrieve a specific discount coupon by its unique identifier.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\DiscountCouponsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$coupon_id = 'coupon_id_example'; // string | Unique identifier for the discount coupon

try {
    $result = $apiInstance->retrieveDiscountCoupon($coupon_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DiscountCouponsApi->retrieveDiscountCoupon: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **coupon_id** | **string**| Unique identifier for the discount coupon | |

### Return type

[**\LomiSDK\Model\DiscountCoupons**](../Model/DiscountCoupons.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateDiscountCoupon()`

```php
updateDiscountCoupon($coupon_id, $discount_coupons_update): \LomiSDK\Model\DiscountCoupons
```

Update discount coupon

Update a specific discount coupon. Only provided fields will be updated.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\DiscountCouponsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$coupon_id = 'coupon_id_example'; // string | Unique identifier for the discount coupon
$discount_coupons_update = {"is_active":false,"max_uses":50}; // \LomiSDK\Model\DiscountCouponsUpdate

try {
    $result = $apiInstance->updateDiscountCoupon($coupon_id, $discount_coupons_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DiscountCouponsApi->updateDiscountCoupon: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **coupon_id** | **string**| Unique identifier for the discount coupon | |
| **discount_coupons_update** | [**\LomiSDK\Model\DiscountCouponsUpdate**](../Model/DiscountCouponsUpdate.md)|  | |

### Return type

[**\LomiSDK\Model\DiscountCoupons**](../Model/DiscountCoupons.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
