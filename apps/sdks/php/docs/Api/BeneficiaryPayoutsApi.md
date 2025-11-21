# LomiSDK\BeneficiaryPayoutsApi



All URIs are relative to https://api.lomi.africa/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createBeneficiaryPayout()**](BeneficiaryPayoutsApi.md#createBeneficiaryPayout) | **POST** /beneficiary_payouts | Create beneficiary payout |
| [**listBeneficiaryPayouts()**](BeneficiaryPayoutsApi.md#listBeneficiaryPayouts) | **GET** /beneficiary_payouts | List beneficiary payouts |
| [**retrieveBeneficiaryPayout()**](BeneficiaryPayoutsApi.md#retrieveBeneficiaryPayout) | **GET** /beneficiary_payouts/{payout_id} | Retrieve beneficiary payout |


## `createBeneficiaryPayout()`

```php
createBeneficiaryPayout($beneficiary_payouts_create): \LomiSDK\Model\BeneficiaryPayouts
```

Create beneficiary payout

Beneficiary payouts - track individual payout transfers

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\BeneficiaryPayoutsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$beneficiary_payouts_create = {"name":"Sample beneficiary_payout","description":"Example beneficiary_payout object"}; // \LomiSDK\Model\BeneficiaryPayoutsCreate

try {
    $result = $apiInstance->createBeneficiaryPayout($beneficiary_payouts_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BeneficiaryPayoutsApi->createBeneficiaryPayout: ', $e->getMessage(), PHP_EOL;
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

## `listBeneficiaryPayouts()`

```php
listBeneficiaryPayouts($limit, $offset, $sort): \LomiSDK\Model\ListBeneficiaryPayouts200Response
```

List beneficiary payouts

Beneficiary payouts - track individual payout transfers

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\BeneficiaryPayoutsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return (1-100)
$offset = 0; // int | Number of items to skip for pagination
$sort = created_at:desc; // string | Sort order. Format: `field:direction` (e.g., `created_at:desc`)

try {
    $result = $apiInstance->listBeneficiaryPayouts($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BeneficiaryPayoutsApi->listBeneficiaryPayouts: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20] |
| **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0] |
| **sort** | **string**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] |

### Return type

[**\LomiSDK\Model\ListBeneficiaryPayouts200Response**](../Model/ListBeneficiaryPayouts200Response.md)

### Authorization

[ApiKeyAuth](../../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `retrieveBeneficiaryPayout()`

```php
retrieveBeneficiaryPayout($payout_id): \LomiSDK\Model\BeneficiaryPayouts
```

Retrieve beneficiary payout

Retrieve a specific beneficiary payout by its unique identifier.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\BeneficiaryPayoutsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payout_id = 'payout_id_example'; // string | Unique identifier for the beneficiary payout

try {
    $result = $apiInstance->retrieveBeneficiaryPayout($payout_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BeneficiaryPayoutsApi->retrieveBeneficiaryPayout: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **payout_id** | **string**| Unique identifier for the beneficiary payout | |

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
