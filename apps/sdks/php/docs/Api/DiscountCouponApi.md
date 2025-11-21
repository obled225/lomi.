# LomiSDK\DiscountCouponApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**discountCouponsCouponIdDelete()**](DiscountCouponApi.md#discountCouponsCouponIdDelete) | **DELETE** /discount_coupons/{coupon_id} | Delete discount_coupon |
| [**discountCouponsCouponIdGet()**](DiscountCouponApi.md#discountCouponsCouponIdGet) | **GET** /discount_coupons/{coupon_id} | Get discount_coupon |
| [**discountCouponsCouponIdPatch()**](DiscountCouponApi.md#discountCouponsCouponIdPatch) | **PATCH** /discount_coupons/{coupon_id} | Update discount_coupon |
| [**discountCouponsGet()**](DiscountCouponApi.md#discountCouponsGet) | **GET** /discount_coupons | List discount_coupons |
| [**discountCouponsPost()**](DiscountCouponApi.md#discountCouponsPost) | **POST** /discount_coupons | Create discount_coupon |


## `discountCouponsCouponIdDelete()`

```php
discountCouponsCouponIdDelete($coupon_id)
```

Delete discount_coupon

Delete a specific discount_coupon

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\DiscountCouponApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$coupon_id = 'coupon_id_example'; // string | The discount_coupon ID

try {
    $apiInstance->discountCouponsCouponIdDelete($coupon_id);
} catch (Exception $e) {
    echo 'Exception when calling DiscountCouponApi->discountCouponsCouponIdDelete: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **coupon_id** | **string**| The discount_coupon ID | |

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

## `discountCouponsCouponIdGet()`

```php
discountCouponsCouponIdGet($coupon_id): \LomiSDK\Model\DiscountCoupons
```

Get discount_coupon

Retrieve a specific discount_coupon by ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\DiscountCouponApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$coupon_id = 'coupon_id_example'; // string | The discount_coupon ID

try {
    $result = $apiInstance->discountCouponsCouponIdGet($coupon_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DiscountCouponApi->discountCouponsCouponIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **coupon_id** | **string**| The discount_coupon ID | |

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

## `discountCouponsCouponIdPatch()`

```php
discountCouponsCouponIdPatch($coupon_id, $discount_coupons_update): \LomiSDK\Model\DiscountCoupons
```

Update discount_coupon

Update a specific discount_coupon

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\DiscountCouponApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$coupon_id = 'coupon_id_example'; // string | The discount_coupon ID
$discount_coupons_update = new \LomiSDK\Model\DiscountCouponsUpdate(); // \LomiSDK\Model\DiscountCouponsUpdate

try {
    $result = $apiInstance->discountCouponsCouponIdPatch($coupon_id, $discount_coupons_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DiscountCouponApi->discountCouponsCouponIdPatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **coupon_id** | **string**| The discount_coupon ID | |
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

## `discountCouponsGet()`

```php
discountCouponsGet($limit, $offset, $sort): \LomiSDK\Model\DiscountCouponsGet200Response
```

List discount_coupons

Retrieve a paginated list of discount_coupons

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\DiscountCouponApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return
$offset = 0; // int | Number of items to skip
$sort = 'sort_example'; // string | Sort order (e.g., created_at:desc)

try {
    $result = $apiInstance->discountCouponsGet($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DiscountCouponApi->discountCouponsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip | [optional] [default to 0] |
| **sort** | **string**| Sort order (e.g., created_at:desc) | [optional] |

### Return type

[**\LomiSDK\Model\DiscountCouponsGet200Response**](../Model/DiscountCouponsGet200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `discountCouponsPost()`

```php
discountCouponsPost($discount_coupons_create): \LomiSDK\Model\DiscountCoupons
```

Create discount_coupon

Create a new discount_coupon

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\DiscountCouponApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$discount_coupons_create = new \LomiSDK\Model\DiscountCouponsCreate(); // \LomiSDK\Model\DiscountCouponsCreate

try {
    $result = $apiInstance->discountCouponsPost($discount_coupons_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DiscountCouponApi->discountCouponsPost: ', $e->getMessage(), PHP_EOL;
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
