# LomiSDK\CheckoutSessionsApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createCheckoutSession()**](CheckoutSessionsApi.md#createCheckoutSession) | **POST** /checkout_sessions | Create checkout session |
| [**deleteCheckoutSession()**](CheckoutSessionsApi.md#deleteCheckoutSession) | **DELETE** /checkout_sessions/{session_id} | Delete checkout session |
| [**listCheckoutSessions()**](CheckoutSessionsApi.md#listCheckoutSessions) | **GET** /checkout_sessions | List checkout sessions |
| [**retrieveCheckoutSession()**](CheckoutSessionsApi.md#retrieveCheckoutSession) | **GET** /checkout_sessions/{session_id} | Retrieve checkout session |
| [**updateCheckoutSession()**](CheckoutSessionsApi.md#updateCheckoutSession) | **PATCH** /checkout_sessions/{session_id} | Update checkout session |


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


$apiInstance = new LomiSDK\Api\CheckoutSessionsApi(
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
    echo 'Exception when calling CheckoutSessionsApi->createCheckoutSession: ', $e->getMessage(), PHP_EOL;
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


$apiInstance = new LomiSDK\Api\CheckoutSessionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$session_id = 'session_id_example'; // string | Unique identifier for the checkout session

try {
    $apiInstance->deleteCheckoutSession($session_id);
} catch (Exception $e) {
    echo 'Exception when calling CheckoutSessionsApi->deleteCheckoutSession: ', $e->getMessage(), PHP_EOL;
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


$apiInstance = new LomiSDK\Api\CheckoutSessionsApi(
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
    echo 'Exception when calling CheckoutSessionsApi->listCheckoutSessions: ', $e->getMessage(), PHP_EOL;
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


$apiInstance = new LomiSDK\Api\CheckoutSessionsApi(
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
    echo 'Exception when calling CheckoutSessionsApi->retrieveCheckoutSession: ', $e->getMessage(), PHP_EOL;
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


$apiInstance = new LomiSDK\Api\CheckoutSessionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$session_id = 'session_id_example'; // string | Unique identifier for the checkout session
$checkout_sessions_update = {"metadata":{"updated_at":"2025-11-21T13:32:16.240Z","updated_reason":"Administrative update"}}; // \LomiSDK\Model\CheckoutSessionsUpdate

try {
    $result = $apiInstance->updateCheckoutSession($session_id, $checkout_sessions_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CheckoutSessionsApi->updateCheckoutSession: ', $e->getMessage(), PHP_EOL;
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
