# LomiSDK\CheckoutSessionApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**checkoutSessionsGet()**](CheckoutSessionApi.md#checkoutSessionsGet) | **GET** /checkout_sessions | List checkout_sessions |
| [**checkoutSessionsPost()**](CheckoutSessionApi.md#checkoutSessionsPost) | **POST** /checkout_sessions | Create checkout_session |
| [**checkoutSessionsSessionIdDelete()**](CheckoutSessionApi.md#checkoutSessionsSessionIdDelete) | **DELETE** /checkout_sessions/{session_id} | Delete checkout_session |
| [**checkoutSessionsSessionIdGet()**](CheckoutSessionApi.md#checkoutSessionsSessionIdGet) | **GET** /checkout_sessions/{session_id} | Get checkout_session |
| [**checkoutSessionsSessionIdPatch()**](CheckoutSessionApi.md#checkoutSessionsSessionIdPatch) | **PATCH** /checkout_sessions/{session_id} | Update checkout_session |


## `checkoutSessionsGet()`

```php
checkoutSessionsGet($limit, $offset, $sort): \LomiSDK\Model\CheckoutSessionsGet200Response
```

List checkout_sessions

Retrieve a paginated list of checkout_sessions

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\CheckoutSessionApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return
$offset = 0; // int | Number of items to skip
$sort = 'sort_example'; // string | Sort order (e.g., created_at:desc)

try {
    $result = $apiInstance->checkoutSessionsGet($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CheckoutSessionApi->checkoutSessionsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip | [optional] [default to 0] |
| **sort** | **string**| Sort order (e.g., created_at:desc) | [optional] |

### Return type

[**\LomiSDK\Model\CheckoutSessionsGet200Response**](../Model/CheckoutSessionsGet200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `checkoutSessionsPost()`

```php
checkoutSessionsPost($checkout_sessions_create): \LomiSDK\Model\CheckoutSessions
```

Create checkout_session

Create a new checkout_session

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\CheckoutSessionApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$checkout_sessions_create = new \LomiSDK\Model\CheckoutSessionsCreate(); // \LomiSDK\Model\CheckoutSessionsCreate

try {
    $result = $apiInstance->checkoutSessionsPost($checkout_sessions_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CheckoutSessionApi->checkoutSessionsPost: ', $e->getMessage(), PHP_EOL;
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

## `checkoutSessionsSessionIdDelete()`

```php
checkoutSessionsSessionIdDelete($session_id)
```

Delete checkout_session

Delete a specific checkout_session

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\CheckoutSessionApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$session_id = 'session_id_example'; // string | The checkout_session ID

try {
    $apiInstance->checkoutSessionsSessionIdDelete($session_id);
} catch (Exception $e) {
    echo 'Exception when calling CheckoutSessionApi->checkoutSessionsSessionIdDelete: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **session_id** | **string**| The checkout_session ID | |

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

## `checkoutSessionsSessionIdGet()`

```php
checkoutSessionsSessionIdGet($session_id): \LomiSDK\Model\CheckoutSessions
```

Get checkout_session

Retrieve a specific checkout_session by ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\CheckoutSessionApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$session_id = 'session_id_example'; // string | The checkout_session ID

try {
    $result = $apiInstance->checkoutSessionsSessionIdGet($session_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CheckoutSessionApi->checkoutSessionsSessionIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **session_id** | **string**| The checkout_session ID | |

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

## `checkoutSessionsSessionIdPatch()`

```php
checkoutSessionsSessionIdPatch($session_id, $checkout_sessions_update): \LomiSDK\Model\CheckoutSessions
```

Update checkout_session

Update a specific checkout_session

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\CheckoutSessionApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$session_id = 'session_id_example'; // string | The checkout_session ID
$checkout_sessions_update = new \LomiSDK\Model\CheckoutSessionsUpdate(); // \LomiSDK\Model\CheckoutSessionsUpdate

try {
    $result = $apiInstance->checkoutSessionsSessionIdPatch($session_id, $checkout_sessions_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CheckoutSessionApi->checkoutSessionsSessionIdPatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **session_id** | **string**| The checkout_session ID | |
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
