# LomiSDK\PaymentRequestApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**paymentRequestsGet()**](PaymentRequestApi.md#paymentRequestsGet) | **GET** /payment_requests | List payment_requests |
| [**paymentRequestsPost()**](PaymentRequestApi.md#paymentRequestsPost) | **POST** /payment_requests | Create payment_request |
| [**paymentRequestsRequestIdDelete()**](PaymentRequestApi.md#paymentRequestsRequestIdDelete) | **DELETE** /payment_requests/{request_id} | Delete payment_request |
| [**paymentRequestsRequestIdGet()**](PaymentRequestApi.md#paymentRequestsRequestIdGet) | **GET** /payment_requests/{request_id} | Get payment_request |
| [**paymentRequestsRequestIdPatch()**](PaymentRequestApi.md#paymentRequestsRequestIdPatch) | **PATCH** /payment_requests/{request_id} | Update payment_request |


## `paymentRequestsGet()`

```php
paymentRequestsGet($limit, $offset, $sort): \LomiSDK\Model\PaymentRequestsGet200Response
```

List payment_requests

Retrieve a paginated list of payment_requests

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentRequestApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return
$offset = 0; // int | Number of items to skip
$sort = 'sort_example'; // string | Sort order (e.g., created_at:desc)

try {
    $result = $apiInstance->paymentRequestsGet($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentRequestApi->paymentRequestsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip | [optional] [default to 0] |
| **sort** | **string**| Sort order (e.g., created_at:desc) | [optional] |

### Return type

[**\LomiSDK\Model\PaymentRequestsGet200Response**](../Model/PaymentRequestsGet200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `paymentRequestsPost()`

```php
paymentRequestsPost($payment_requests_create): \LomiSDK\Model\PaymentRequests
```

Create payment_request

Create a new payment_request

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentRequestApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payment_requests_create = new \LomiSDK\Model\PaymentRequestsCreate(); // \LomiSDK\Model\PaymentRequestsCreate

try {
    $result = $apiInstance->paymentRequestsPost($payment_requests_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentRequestApi->paymentRequestsPost: ', $e->getMessage(), PHP_EOL;
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

## `paymentRequestsRequestIdDelete()`

```php
paymentRequestsRequestIdDelete($request_id)
```

Delete payment_request

Delete a specific payment_request

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentRequestApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string | The payment_request ID

try {
    $apiInstance->paymentRequestsRequestIdDelete($request_id);
} catch (Exception $e) {
    echo 'Exception when calling PaymentRequestApi->paymentRequestsRequestIdDelete: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**| The payment_request ID | |

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

## `paymentRequestsRequestIdGet()`

```php
paymentRequestsRequestIdGet($request_id): \LomiSDK\Model\PaymentRequests
```

Get payment_request

Retrieve a specific payment_request by ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentRequestApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string | The payment_request ID

try {
    $result = $apiInstance->paymentRequestsRequestIdGet($request_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentRequestApi->paymentRequestsRequestIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**| The payment_request ID | |

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

## `paymentRequestsRequestIdPatch()`

```php
paymentRequestsRequestIdPatch($request_id, $payment_requests_update): \LomiSDK\Model\PaymentRequests
```

Update payment_request

Update a specific payment_request

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PaymentRequestApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$request_id = 'request_id_example'; // string | The payment_request ID
$payment_requests_update = new \LomiSDK\Model\PaymentRequestsUpdate(); // \LomiSDK\Model\PaymentRequestsUpdate

try {
    $result = $apiInstance->paymentRequestsRequestIdPatch($request_id, $payment_requests_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentRequestApi->paymentRequestsRequestIdPatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **request_id** | **string**| The payment_request ID | |
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
