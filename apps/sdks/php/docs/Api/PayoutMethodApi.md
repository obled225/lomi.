# LomiSDK\PayoutMethodApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**payoutMethodsGet()**](PayoutMethodApi.md#payoutMethodsGet) | **GET** /payout_methods | List payout_methods |
| [**payoutMethodsPayoutMethodIdGet()**](PayoutMethodApi.md#payoutMethodsPayoutMethodIdGet) | **GET** /payout_methods/{payout_method_id} | Get payout_method |


## `payoutMethodsGet()`

```php
payoutMethodsGet($limit, $offset, $sort): \LomiSDK\Model\PayoutMethodsGet200Response
```

List payout_methods

Retrieve a paginated list of payout_methods

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PayoutMethodApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return
$offset = 0; // int | Number of items to skip
$sort = 'sort_example'; // string | Sort order (e.g., created_at:desc)

try {
    $result = $apiInstance->payoutMethodsGet($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PayoutMethodApi->payoutMethodsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip | [optional] [default to 0] |
| **sort** | **string**| Sort order (e.g., created_at:desc) | [optional] |

### Return type

[**\LomiSDK\Model\PayoutMethodsGet200Response**](../Model/PayoutMethodsGet200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `payoutMethodsPayoutMethodIdGet()`

```php
payoutMethodsPayoutMethodIdGet($payout_method_id): \LomiSDK\Model\PayoutMethods
```

Get payout_method

Retrieve a specific payout_method by ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PayoutMethodApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payout_method_id = 'payout_method_id_example'; // string | The payout_method ID

try {
    $result = $apiInstance->payoutMethodsPayoutMethodIdGet($payout_method_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PayoutMethodApi->payoutMethodsPayoutMethodIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **payout_method_id** | **string**| The payout_method ID | |

### Return type

[**\LomiSDK\Model\PayoutMethods**](../Model/PayoutMethods.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
