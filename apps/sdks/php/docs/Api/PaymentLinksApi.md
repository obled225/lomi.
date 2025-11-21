# LomiSDK\PaymentLinksApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createPaymentLink()**](PaymentLinksApi.md#createPaymentLink) | **POST** /payment_links | Create payment link |
| [**deletePaymentLink()**](PaymentLinksApi.md#deletePaymentLink) | **DELETE** /payment_links/{link_id} | Delete payment link |
| [**listPaymentLinks()**](PaymentLinksApi.md#listPaymentLinks) | **GET** /payment_links | List payment links |
| [**retrievePaymentLink()**](PaymentLinksApi.md#retrievePaymentLink) | **GET** /payment_links/{link_id} | Retrieve payment link |
| [**updatePaymentLink()**](PaymentLinksApi.md#updatePaymentLink) | **PATCH** /payment_links/{link_id} | Update payment link |


## `createPaymentLink()`

```php
createPaymentLink($payment_links_create): \LomiSDK\Model\PaymentLinks
```

Create payment link

Payment links - shareable payment URLs

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentLinksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payment_links_create = {"title":"Premium Membership","amount":50000,"currency_code":"XOF","description":"Annual premium membership","product_id":"prod_1234567890abcdef"}; // \LomiSDK\Model\PaymentLinksCreate

try {
    $result = $apiInstance->createPaymentLink($payment_links_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentLinksApi->createPaymentLink: ', $e->getMessage(), PHP_EOL;
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

## `deletePaymentLink()`

```php
deletePaymentLink($link_id)
```

Delete payment link

Delete a specific payment link. This action cannot be undone.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentLinksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$link_id = 'link_id_example'; // string | Unique identifier for the payment link

try {
    $apiInstance->deletePaymentLink($link_id);
} catch (Exception $e) {
    echo 'Exception when calling PaymentLinksApi->deletePaymentLink: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **link_id** | **string**| Unique identifier for the payment link | |

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

## `listPaymentLinks()`

```php
listPaymentLinks($limit, $offset, $sort): \LomiSDK\Model\ListPaymentLinks200Response
```

List payment links

Payment links - shareable payment URLs

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentLinksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return (1-100)
$offset = 0; // int | Number of items to skip for pagination
$sort = created_at:desc; // string | Sort order. Format: `field:direction` (e.g., `created_at:desc`)

try {
    $result = $apiInstance->listPaymentLinks($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentLinksApi->listPaymentLinks: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0] |
| **sort** | **string**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] |

### Return type

[**\LomiSDK\Model\ListPaymentLinks200Response**](../Model/ListPaymentLinks200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `retrievePaymentLink()`

```php
retrievePaymentLink($link_id): \LomiSDK\Model\PaymentLinks
```

Retrieve payment link

Retrieve a specific payment link by its unique identifier.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentLinksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$link_id = 'link_id_example'; // string | Unique identifier for the payment link

try {
    $result = $apiInstance->retrievePaymentLink($link_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentLinksApi->retrievePaymentLink: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **link_id** | **string**| Unique identifier for the payment link | |

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

## `updatePaymentLink()`

```php
updatePaymentLink($link_id, $payment_links_update): \LomiSDK\Model\PaymentLinks
```

Update payment link

Update a specific payment link. Only provided fields will be updated.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentLinksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$link_id = 'link_id_example'; // string | Unique identifier for the payment link
$payment_links_update = {"metadata":{"updated_at":"2025-11-21T13:32:16.240Z","updated_reason":"Administrative update"}}; // \LomiSDK\Model\PaymentLinksUpdate

try {
    $result = $apiInstance->updatePaymentLink($link_id, $payment_links_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentLinksApi->updatePaymentLink: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **link_id** | **string**| Unique identifier for the payment link | |
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
