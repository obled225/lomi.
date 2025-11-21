# LomiSDK\PaymentLinkApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**paymentLinksGet()**](PaymentLinkApi.md#paymentLinksGet) | **GET** /payment_links | List payment_links |
| [**paymentLinksLinkIdDelete()**](PaymentLinkApi.md#paymentLinksLinkIdDelete) | **DELETE** /payment_links/{link_id} | Delete payment_link |
| [**paymentLinksLinkIdGet()**](PaymentLinkApi.md#paymentLinksLinkIdGet) | **GET** /payment_links/{link_id} | Get payment_link |
| [**paymentLinksLinkIdPatch()**](PaymentLinkApi.md#paymentLinksLinkIdPatch) | **PATCH** /payment_links/{link_id} | Update payment_link |
| [**paymentLinksPost()**](PaymentLinkApi.md#paymentLinksPost) | **POST** /payment_links | Create payment_link |


## `paymentLinksGet()`

```php
paymentLinksGet($limit, $offset, $sort): \LomiSDK\Model\PaymentLinksGet200Response
```

List payment_links

Retrieve a paginated list of payment_links

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return
$offset = 0; // int | Number of items to skip
$sort = 'sort_example'; // string | Sort order (e.g., created_at:desc)

try {
    $result = $apiInstance->paymentLinksGet($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentLinkApi->paymentLinksGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip | [optional] [default to 0] |
| **sort** | **string**| Sort order (e.g., created_at:desc) | [optional] |

### Return type

[**\LomiSDK\Model\PaymentLinksGet200Response**](../Model/PaymentLinksGet200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `paymentLinksLinkIdDelete()`

```php
paymentLinksLinkIdDelete($link_id)
```

Delete payment_link

Delete a specific payment_link

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$link_id = 'link_id_example'; // string | The payment_link ID

try {
    $apiInstance->paymentLinksLinkIdDelete($link_id);
} catch (Exception $e) {
    echo 'Exception when calling PaymentLinkApi->paymentLinksLinkIdDelete: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **link_id** | **string**| The payment_link ID | |

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

## `paymentLinksLinkIdGet()`

```php
paymentLinksLinkIdGet($link_id): \LomiSDK\Model\PaymentLinks
```

Get payment_link

Retrieve a specific payment_link by ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$link_id = 'link_id_example'; // string | The payment_link ID

try {
    $result = $apiInstance->paymentLinksLinkIdGet($link_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentLinkApi->paymentLinksLinkIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **link_id** | **string**| The payment_link ID | |

### Return type

[**\LomiSDK\Model\PaymentLinks**](../Model/PaymentLinks.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `paymentLinksLinkIdPatch()`

```php
paymentLinksLinkIdPatch($link_id, $payment_links_update): \LomiSDK\Model\PaymentLinks
```

Update payment_link

Update a specific payment_link

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$link_id = 'link_id_example'; // string | The payment_link ID
$payment_links_update = new \LomiSDK\Model\PaymentLinksUpdate(); // \LomiSDK\Model\PaymentLinksUpdate

try {
    $result = $apiInstance->paymentLinksLinkIdPatch($link_id, $payment_links_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentLinkApi->paymentLinksLinkIdPatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **link_id** | **string**| The payment_link ID | |
| **payment_links_update** | [**\LomiSDK\Model\PaymentLinksUpdate**](../Model/PaymentLinksUpdate.md)|  | |

### Return type

[**\LomiSDK\Model\PaymentLinks**](../Model/PaymentLinks.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `paymentLinksPost()`

```php
paymentLinksPost($payment_links_create): \LomiSDK\Model\PaymentLinks
```

Create payment_link

Create a new payment_link

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentLinkApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payment_links_create = new \LomiSDK\Model\PaymentLinksCreate(); // \LomiSDK\Model\PaymentLinksCreate

try {
    $result = $apiInstance->paymentLinksPost($payment_links_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentLinkApi->paymentLinksPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **payment_links_create** | [**\LomiSDK\Model\PaymentLinksCreate**](../Model/PaymentLinksCreate.md)|  | |

### Return type

[**\LomiSDK\Model\PaymentLinks**](../Model/PaymentLinks.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
