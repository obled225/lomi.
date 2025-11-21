# LomiSDK\PayoutMethodsApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**listPayoutMethods()**](PayoutMethodsApi.md#listPayoutMethods) | **GET** /payout_methods | List payout methods |
| [**retrievePayoutMethod()**](PayoutMethodsApi.md#retrievePayoutMethod) | **GET** /payout_methods/{payout_method_id} | Retrieve payout method |


## `listPayoutMethods()`

```php
listPayoutMethods($limit, $offset, $sort): \LomiSDK\Model\ListPayoutMethods200Response
```

List payout methods

Payout methods - manage beneficiary payout details

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PayoutMethodsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return (1-100)
$offset = 0; // int | Number of items to skip for pagination
$sort = created_at:desc; // string | Sort order. Format: `field:direction` (e.g., `created_at:desc`)

try {
    $result = $apiInstance->listPayoutMethods($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PayoutMethodsApi->listPayoutMethods: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0] |
| **sort** | **string**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] |

### Return type

[**\LomiSDK\Model\ListPayoutMethods200Response**](../Model/ListPayoutMethods200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `retrievePayoutMethod()`

```php
retrievePayoutMethod($payout_method_id): \LomiSDK\Model\PayoutMethods
```

Retrieve payout method

Retrieve a specific payout method by its unique identifier.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\PayoutMethodsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payout_method_id = 'payout_method_id_example'; // string | Unique identifier for the payout method

try {
    $result = $apiInstance->retrievePayoutMethod($payout_method_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PayoutMethodsApi->retrievePayoutMethod: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **payout_method_id** | **string**| Unique identifier for the payout method | |

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
