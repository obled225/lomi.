# lomi.BeneficiaryPayoutsApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_beneficiary_payout**](BeneficiaryPayoutsApi.md#create_beneficiary_payout) | **POST** /beneficiary_payouts | Create beneficiary payout
[**list_beneficiary_payouts**](BeneficiaryPayoutsApi.md#list_beneficiary_payouts) | **GET** /beneficiary_payouts | List beneficiary payouts
[**retrieve_beneficiary_payout**](BeneficiaryPayoutsApi.md#retrieve_beneficiary_payout) | **GET** /beneficiary_payouts/{payout_id} | Retrieve beneficiary payout


# **create_beneficiary_payout**
> BeneficiaryPayouts create_beneficiary_payout(beneficiary_payouts_create)

Create beneficiary payout

Beneficiary payouts - track individual payout transfers

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.beneficiary_payouts import BeneficiaryPayouts
from lomi.models.beneficiary_payouts_create import BeneficiaryPayoutsCreate
from lomi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lomi.africa/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = lomi.Configuration(
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
with lomi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = lomi.BeneficiaryPayoutsApi(api_client)
    beneficiary_payouts_create = {"name":"Sample beneficiary_payout","description":"Example beneficiary_payout object"} # BeneficiaryPayoutsCreate | 

    try:
        # Create beneficiary payout
        api_response = api_instance.create_beneficiary_payout(beneficiary_payouts_create)
        print("The response of BeneficiaryPayoutsApi->create_beneficiary_payout:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BeneficiaryPayoutsApi->create_beneficiary_payout: %s\n" % e)
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
**201** | Beneficiary_payout successfully created |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_beneficiary_payouts**
> ListBeneficiaryPayouts200Response list_beneficiary_payouts(limit=limit, offset=offset, sort=sort)

List beneficiary payouts

Beneficiary payouts - track individual payout transfers

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.list_beneficiary_payouts200_response import ListBeneficiaryPayouts200Response
from lomi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lomi.africa/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = lomi.Configuration(
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
with lomi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = lomi.BeneficiaryPayoutsApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List beneficiary payouts
        api_response = api_instance.list_beneficiary_payouts(limit=limit, offset=offset, sort=sort)
        print("The response of BeneficiaryPayoutsApi->list_beneficiary_payouts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BeneficiaryPayoutsApi->list_beneficiary_payouts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListBeneficiaryPayouts200Response**](ListBeneficiaryPayouts200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with paginated data |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_beneficiary_payout**
> BeneficiaryPayouts retrieve_beneficiary_payout(payout_id)

Retrieve beneficiary payout

Retrieve a specific beneficiary payout by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi
from lomi.models.beneficiary_payouts import BeneficiaryPayouts
from lomi.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.lomi.africa/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = lomi.Configuration(
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
with lomi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = lomi.BeneficiaryPayoutsApi(api_client)
    payout_id = 'payout_id_example' # str | Unique identifier for the beneficiary payout

    try:
        # Retrieve beneficiary payout
        api_response = api_instance.retrieve_beneficiary_payout(payout_id)
        print("The response of BeneficiaryPayoutsApi->retrieve_beneficiary_payout:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BeneficiaryPayoutsApi->retrieve_beneficiary_payout: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payout_id** | **str**| Unique identifier for the beneficiary payout | 

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
**200** | Beneficiary_payout retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

