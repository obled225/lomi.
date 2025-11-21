# LomiSDK\CheckoutApi

Checkout sessions - create hosted payment pages

All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createCheckoutSession()**](CheckoutApi.md#createCheckoutSession) | **POST** /checkout_sessions | Create checkout session |
| [**createPaymentLink()**](CheckoutApi.md#createPaymentLink) | **POST** /payment_links | Create payment link |
| [**deleteCheckoutSession()**](CheckoutApi.md#deleteCheckoutSession) | **DELETE** /checkout_sessions/{session_id} | Delete checkout session |
| [**deletePaymentLink()**](CheckoutApi.md#deletePaymentLink) | **DELETE** /payment_links/{link_id} | Delete payment link |
| [**listCheckoutSessions()**](CheckoutApi.md#listCheckoutSessions) | **GET** /checkout_sessions | List checkout sessions |
| [**listPaymentLinks()**](CheckoutApi.md#listPaymentLinks) | **GET** /payment_links | List payment links |
| [**retrieveCheckoutSession()**](CheckoutApi.md#retrieveCheckoutSession) | **GET** /checkout_sessions/{session_id} | Retrieve checkout session |
| [**retrievePaymentLink()**](CheckoutApi.md#retrievePaymentLink) | **GET** /payment_links/{link_id} | Retrieve payment link |
| [**updateCheckoutSession()**](CheckoutApi.md#updateCheckoutSession) | **PATCH** /checkout_sessions/{session_id} | Update checkout session |
| [**updatePaymentLink()**](CheckoutApi.md#updatePaymentLink) | **PATCH** /payment_links/{link_id} | Update payment link |


## `createCheckoutSession()`

```php
createCheckoutSession($checkout_sessions_create): \LomiSDK\Model\CheckoutSessions
```

Create checkout session

Checkout sessions - create hosted payment pages

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\CheckoutApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$checkout_sessions_create = {"amount":15000,"currency_code":"XOF","product_id":"prod_1234567890abcdef","success_url":"https://example.com/success","cancel_url":"https://example.com/cancel","customer_email":"customer@example.com"}; // \LomiSDK\Model\CheckoutSessionsCreate

try {
    $result = $apiInstance->createCheckoutSession($checkout_sessions_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CheckoutApi->createCheckoutSession: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **checkout_sessions_create** | [**\LomiSDK\Model\CheckoutSessionsCreate**](../Model/CheckoutSessionsCreate.md)|  | |

### Return type

[**\LomiSDK\Model\CheckoutSessions**](../Model/CheckoutSessions.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

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


$apiInstance = new LomiSDK\Api\CheckoutApi(
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
    echo 'Exception when calling CheckoutApi->createPaymentLink: ', $e->getMessage(), PHP_EOL;
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

## `deleteCheckoutSession()`

```php
deleteCheckoutSession($session_id)
```

Delete checkout session

Delete a specific checkout session. This action cannot be undone.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\CheckoutApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$session_id = 'session_id_example'; // string | Unique identifier for the checkout session

try {
    $apiInstance->deleteCheckoutSession($session_id);
} catch (Exception $e) {
    echo 'Exception when calling CheckoutApi->deleteCheckoutSession: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **session_id** | **string**| Unique identifier for the checkout session | |

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


$apiInstance = new LomiSDK\Api\CheckoutApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$link_id = 'link_id_example'; // string | Unique identifier for the payment link

try {
    $apiInstance->deletePaymentLink($link_id);
} catch (Exception $e) {
    echo 'Exception when calling CheckoutApi->deletePaymentLink: ', $e->getMessage(), PHP_EOL;
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

## `listCheckoutSessions()`

```php
listCheckoutSessions($limit, $offset, $sort): \LomiSDK\Model\ListCheckoutSessions200Response
```

List checkout sessions

Checkout sessions - create hosted payment pages

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\CheckoutApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return (1-100)
$offset = 0; // int | Number of items to skip for pagination
$sort = created_at:desc; // string | Sort order. Format: `field:direction` (e.g., `created_at:desc`)

try {
    $result = $apiInstance->listCheckoutSessions($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CheckoutApi->listCheckoutSessions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0] |
| **sort** | **string**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] |

### Return type

[**\LomiSDK\Model\ListCheckoutSessions200Response**](../Model/ListCheckoutSessions200Response.md)

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


$apiInstance = new LomiSDK\Api\CheckoutApi(
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
    echo 'Exception when calling CheckoutApi->listPaymentLinks: ', $e->getMessage(), PHP_EOL;
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

## `retrieveCheckoutSession()`

```php
retrieveCheckoutSession($session_id): \LomiSDK\Model\CheckoutSessions
```

Retrieve checkout session

Retrieve a specific checkout session by its unique identifier.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\CheckoutApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$session_id = 'session_id_example'; // string | Unique identifier for the checkout session

try {
    $result = $apiInstance->retrieveCheckoutSession($session_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CheckoutApi->retrieveCheckoutSession: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **session_id** | **string**| Unique identifier for the checkout session | |

### Return type

[**\LomiSDK\Model\CheckoutSessions**](../Model/CheckoutSessions.md)

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


$apiInstance = new LomiSDK\Api\CheckoutApi(
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
    echo 'Exception when calling CheckoutApi->retrievePaymentLink: ', $e->getMessage(), PHP_EOL;
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

## `updateCheckoutSession()`

```php
updateCheckoutSession($session_id, $checkout_sessions_update): \LomiSDK\Model\CheckoutSessions
```

Update checkout session

Update a specific checkout session. Only provided fields will be updated.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\CheckoutApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$session_id = 'session_id_example'; // string | Unique identifier for the checkout session
$checkout_sessions_update = {"metadata":{"updated_at":"2025-11-21T12:46:27.078Z","updated_reason":"Administrative update"}}; // \LomiSDK\Model\CheckoutSessionsUpdate

try {
    $result = $apiInstance->updateCheckoutSession($session_id, $checkout_sessions_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CheckoutApi->updateCheckoutSession: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **session_id** | **string**| Unique identifier for the checkout session | |
| **checkout_sessions_update** | [**\LomiSDK\Model\CheckoutSessionsUpdate**](../Model/CheckoutSessionsUpdate.md)|  | |

### Return type

[**\LomiSDK\Model\CheckoutSessions**](../Model/CheckoutSessions.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
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


$apiInstance = new LomiSDK\Api\CheckoutApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$link_id = 'link_id_example'; // string | Unique identifier for the payment link
$payment_links_update = {"metadata":{"updated_at":"2025-11-21T12:46:27.079Z","updated_reason":"Administrative update"}}; // \LomiSDK\Model\PaymentLinksUpdate

try {
    $result = $apiInstance->updatePaymentLink($link_id, $payment_links_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CheckoutApi->updatePaymentLink: ', $e->getMessage(), PHP_EOL;
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
