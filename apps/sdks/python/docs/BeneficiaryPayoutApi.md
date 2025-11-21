# lomi_sdk.BeneficiaryPayoutApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**beneficiary_payouts_get**](BeneficiaryPayoutApi.md#beneficiary_payouts_get) | **GET** /beneficiary_payouts | List beneficiary_payouts
[**beneficiary_payouts_payout_id_get**](BeneficiaryPayoutApi.md#beneficiary_payouts_payout_id_get) | **GET** /beneficiary_payouts/{payout_id} | Get beneficiary_payout
[**beneficiary_payouts_post**](BeneficiaryPayoutApi.md#beneficiary_payouts_post) | **POST** /beneficiary_payouts | Create beneficiary_payout


# **beneficiary_payouts_get**
> BeneficiaryPayoutsGet200Response beneficiary_payouts_get(limit=limit, offset=offset, sort=sort)

List beneficiary_payouts

Retrieve a paginated list of beneficiary_payouts

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.beneficiary_payouts_get200_response import BeneficiaryPayoutsGet200Response
from lomi_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lomi.africa/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = lomi_sdk.Configuration(
    host = "https://api.lomi.africa/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with lomi_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = lomi_sdk.BeneficiaryPayoutApi(api_client)
    limit = 20 # int | Maximum number of items to return (optional) (default to 20)
    offset = 0 # int | Number of items to skip (optional) (default to 0)
    sort = 'sort_example' # str | Sort order (e.g., created_at:desc) (optional)

    try:
        # List beneficiary_payouts
        api_response = api_instance.beneficiary_payouts_get(limit=limit, offset=offset, sort=sort)
        print("The response of BeneficiaryPayoutApi->beneficiary_payouts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BeneficiaryPayoutApi->beneficiary_payouts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return | [optional] [default to 20]
 **offset** | **int**| Number of items to skip | [optional] [default to 0]
 **sort** | **str**| Sort order (e.g., created_at:desc) | [optional] 

### Return type

[**BeneficiaryPayoutsGet200Response**](BeneficiaryPayoutsGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beneficiary_payouts_payout_id_get**
> BeneficiaryPayouts beneficiary_payouts_payout_id_get(payout_id)

Get beneficiary_payout

Retrieve a specific beneficiary_payout by ID

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.beneficiary_payouts import BeneficiaryPayouts
from lomi_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lomi.africa/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = lomi_sdk.Configuration(
    host = "https://api.lomi.africa/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with lomi_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = lomi_sdk.BeneficiaryPayoutApi(api_client)
    payout_id = 'payout_id_example' # str | The beneficiary_payout ID

    try:
        # Get beneficiary_payout
        api_response = api_instance.beneficiary_payouts_payout_id_get(payout_id)
        print("The response of BeneficiaryPayoutApi->beneficiary_payouts_payout_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BeneficiaryPayoutApi->beneficiary_payouts_payout_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payout_id** | **str**| The beneficiary_payout ID | 

### Return type

[**BeneficiaryPayouts**](BeneficiaryPayouts.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beneficiary_payouts_post**
> BeneficiaryPayouts beneficiary_payouts_post(beneficiary_payouts_create)

Create beneficiary_payout

Create a new beneficiary_payout

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.beneficiary_payouts import BeneficiaryPayouts
from lomi_sdk.models.beneficiary_payouts_create import BeneficiaryPayoutsCreate
from lomi_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lomi.africa/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = lomi_sdk.Configuration(
    host = "https://api.lomi.africa/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with lomi_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = lomi_sdk.BeneficiaryPayoutApi(api_client)
    beneficiary_payouts_create = lomi_sdk.BeneficiaryPayoutsCreate() # BeneficiaryPayoutsCreate | 

    try:
        # Create beneficiary_payout
        api_response = api_instance.beneficiary_payouts_post(beneficiary_payouts_create)
        print("The response of BeneficiaryPayoutApi->beneficiary_payouts_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BeneficiaryPayoutApi->beneficiary_payouts_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beneficiary_payouts_create** | [**BeneficiaryPayoutsCreate**](BeneficiaryPayoutsCreate.md)|  | 

### Return type

[**BeneficiaryPayouts**](BeneficiaryPayouts.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successfully created |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

