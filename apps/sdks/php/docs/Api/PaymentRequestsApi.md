# LomiSDK\PaymentRequestsApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createPaymentRequest()**](PaymentRequestsApi.md#createPaymentRequest) | **POST** /payment_requests | Create payment request |
| [**deletePaymentRequest()**](PaymentRequestsApi.md#deletePaymentRequest) | **DELETE** /payment_requests/{request_id} | Delete payment request |
| [**listPaymentRequests()**](PaymentRequestsApi.md#listPaymentRequests) | **GET** /payment_requests | List payment requests |
| [**retrievePaymentRequest()**](PaymentRequestsApi.md#retrievePaymentRequest) | **GET** /payment_requests/{request_id} | Retrieve payment request |
| [**updatePaymentRequest()**](PaymentRequestsApi.md#updatePaymentRequest) | **PATCH** /payment_requests/{request_id} | Update payment request |


## `createPaymentRequest()`

```php
createPaymentRequest($payment_requests_create): \LomiSDK\Model\PaymentRequests
```

Create payment request

Payment requests - create payment intents and track status

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentRequestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payment_requests_create = {"amount":25000,"currency_code":"XOF","customer_id":"cus_1234567890abcdef","description":"Payment for premium subscription","metadata":{"order_id":"ORD-2024-001"}}; // \LomiSDK\Model\PaymentRequestsCreate

try {
    $result = $apiInstance->createPaymentRequest($payment_requests_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentRequestsApi->createPaymentRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **payment_requests_create** | [**\LomiSDK\Model\PaymentRequestsCreate**](../Model/PaymentRequestsCreate.md)|  | |

### Return type

[**\LomiSDK\Model\PaymentRequests**](../Model/PaymentRequests.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deletePaymentRequest()`

```php
deletePaymentRequest($request_id)
```

Delete payment request

Delete a specific payment request. This action cannot be undone.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentRequestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string | Unique identifier for the payment request

try {
    $apiInstance->deletePaymentRequest($request_id);
} catch (Exception $e) {
    echo 'Exception when calling PaymentRequestsApi->deletePaymentRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**| Unique identifier for the payment request | |

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

## `listPaymentRequests()`

```php
listPaymentRequests($limit, $offset, $sort): \LomiSDK\Model\ListPaymentRequests200Response
```

List payment requests

Payment requests - create payment intents and track status

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentRequestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return (1-100)
$offset = 0; // int | Number of items to skip for pagination
$sort = created_at:desc; // string | Sort order. Format: `field:direction` (e.g., `created_at:desc`)

try {
    $result = $apiInstance->listPaymentRequests($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentRequestsApi->listPaymentRequests: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0] |
| **sort** | **string**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] |

### Return type

[**\LomiSDK\Model\ListPaymentRequests200Response**](../Model/ListPaymentRequests200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `retrievePaymentRequest()`

```php
retrievePaymentRequest($request_id): \LomiSDK\Model\PaymentRequests
```

Retrieve payment request

Retrieve a specific payment request by its unique identifier.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentRequestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string | Unique identifier for the payment request

try {
    $result = $apiInstance->retrievePaymentRequest($request_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentRequestsApi->retrievePaymentRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**| Unique identifier for the payment request | |

### Return type

[**\LomiSDK\Model\PaymentRequests**](../Model/PaymentRequests.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updatePaymentRequest()`

```php
updatePaymentRequest($request_id, $payment_requests_update): \LomiSDK\Model\PaymentRequests
```

Update payment request

Update a specific payment request. Only provided fields will be updated.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentRequestsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string | Unique identifier for the payment request
$payment_requests_update = {"metadata":{"order_id":"ORD-2024-001-UPDATED","notes":"Customer requested invoice"}}; // \LomiSDK\Model\PaymentRequestsUpdate

try {
    $result = $apiInstance->updatePaymentRequest($request_id, $payment_requests_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentRequestsApi->updatePaymentRequest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**| Unique identifier for the payment request | |
| **payment_requests_update** | [**\LomiSDK\Model\PaymentRequestsUpdate**](../Model/PaymentRequestsUpdate.md)|  | |

### Return type

[**\LomiSDK\Model\PaymentRequests**](../Model/PaymentRequests.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
