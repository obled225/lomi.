# LomiSDK\BeneficiaryPayoutApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**beneficiaryPayoutsGet()**](BeneficiaryPayoutApi.md#beneficiaryPayoutsGet) | **GET** /beneficiary_payouts | List beneficiary_payouts |
| [**beneficiaryPayoutsPayoutIdGet()**](BeneficiaryPayoutApi.md#beneficiaryPayoutsPayoutIdGet) | **GET** /beneficiary_payouts/{payout_id} | Get beneficiary_payout |
| [**beneficiaryPayoutsPost()**](BeneficiaryPayoutApi.md#beneficiaryPayoutsPost) | **POST** /beneficiary_payouts | Create beneficiary_payout |


## `beneficiaryPayoutsGet()`

```php
beneficiaryPayoutsGet($limit, $offset, $sort): \LomiSDK\Model\BeneficiaryPayoutsGet200Response
```

List beneficiary_payouts

Retrieve a paginated list of beneficiary_payouts

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\BeneficiaryPayoutApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return
$offset = 0; // int | Number of items to skip
$sort = 'sort_example'; // string | Sort order (e.g., created_at:desc)

try {
    $result = $apiInstance->beneficiaryPayoutsGet($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BeneficiaryPayoutApi->beneficiaryPayoutsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip | [optional] [default to 0] |
| **sort** | **string**| Sort order (e.g., created_at:desc) | [optional] |

### Return type

[**\LomiSDK\Model\BeneficiaryPayoutsGet200Response**](../Model/BeneficiaryPayoutsGet200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `beneficiaryPayoutsPayoutIdGet()`

```php
beneficiaryPayoutsPayoutIdGet($payout_id): \LomiSDK\Model\BeneficiaryPayouts
```

Get beneficiary_payout

Retrieve a specific beneficiary_payout by ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\BeneficiaryPayoutApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payout_id = 'payout_id_example'; // string | The beneficiary_payout ID

try {
    $result = $apiInstance->beneficiaryPayoutsPayoutIdGet($payout_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BeneficiaryPayoutApi->beneficiaryPayoutsPayoutIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **payout_id** | **string**| The beneficiary_payout ID | |

### Return type

[**\LomiSDK\Model\BeneficiaryPayouts**](../Model/BeneficiaryPayouts.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `beneficiaryPayoutsPost()`

```php
beneficiaryPayoutsPost($beneficiary_payouts_create): \LomiSDK\Model\BeneficiaryPayouts
```

Create beneficiary_payout

Create a new beneficiary_payout

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\BeneficiaryPayoutApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$beneficiary_payouts_create = new \LomiSDK\Model\BeneficiaryPayoutsCreate(); // \LomiSDK\Model\BeneficiaryPayoutsCreate

try {
    $result = $apiInstance->beneficiaryPayoutsPost($beneficiary_payouts_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BeneficiaryPayoutApi->beneficiaryPayoutsPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **beneficiary_payouts_create** | [**\LomiSDK\Model\BeneficiaryPayoutsCreate**](../Model/BeneficiaryPayoutsCreate.md)|  | |

### Return type

[**\LomiSDK\Model\BeneficiaryPayouts**](../Model/BeneficiaryPayouts.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
