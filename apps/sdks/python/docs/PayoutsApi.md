# lomi_sdk.PayoutsApi

All URIs are relative to *https://api.lomi.africa/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_beneficiary_payout**](PayoutsApi.md#create_beneficiary_payout) | **POST** /beneficiary_payouts | Create beneficiary payout
[**create_payout**](PayoutsApi.md#create_payout) | **POST** /payouts | Create payout
[**delete_payout**](PayoutsApi.md#delete_payout) | **DELETE** /payouts/{payout_id} | Delete payout
[**list_beneficiary_payouts**](PayoutsApi.md#list_beneficiary_payouts) | **GET** /beneficiary_payouts | List beneficiary payouts
[**list_payout_methods**](PayoutsApi.md#list_payout_methods) | **GET** /payout_methods | List payout methods
[**list_payouts**](PayoutsApi.md#list_payouts) | **GET** /payouts | List payouts
[**retrieve_beneficiary_payout**](PayoutsApi.md#retrieve_beneficiary_payout) | **GET** /beneficiary_payouts/{payout_id} | Retrieve beneficiary payout
[**retrieve_payout**](PayoutsApi.md#retrieve_payout) | **GET** /payouts/{payout_id} | Retrieve payout
[**retrieve_payout_method**](PayoutsApi.md#retrieve_payout_method) | **GET** /payout_methods/{payout_method_id} | Retrieve payout method
[**update_payout**](PayoutsApi.md#update_payout) | **PATCH** /payouts/{payout_id} | Update payout


# **create_beneficiary_payout**
> BeneficiaryPayouts create_beneficiary_payout(beneficiary_payouts_create)

Create beneficiary payout

Beneficiary payouts - track individual payout transfers

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
    api_instance = lomi_sdk.PayoutsApi(api_client)
    beneficiary_payouts_create = {"name":"Sample beneficiary_payout","description":"Example beneficiary_payout object"} # BeneficiaryPayoutsCreate | 

    try:
        # Create beneficiary payout
        api_response = api_instance.create_beneficiary_payout(beneficiary_payouts_create)
        print("The response of PayoutsApi->create_beneficiary_payout:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayoutsApi->create_beneficiary_payout: %s\n" % e)
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

# **create_payout**
> Payouts create_payout(payouts_create)

Create payout

Payout management - transfer funds to beneficiaries

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.payouts import Payouts
from lomi_sdk.models.payouts_create import PayoutsCreate
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
    api_instance = lomi_sdk.PayoutsApi(api_client)
    payouts_create = {"amount":100000,"currency_code":"XOF","beneficiary_account_id":"acc_1234567890abcdef","description":"Monthly payout to vendor"} # PayoutsCreate | 

    try:
        # Create payout
        api_response = api_instance.create_payout(payouts_create)
        print("The response of PayoutsApi->create_payout:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayoutsApi->create_payout: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payouts_create** | [**PayoutsCreate**](PayoutsCreate.md)|  | 

### Return type

[**Payouts**](Payouts.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Payout successfully created |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_payout**
> delete_payout(payout_id)

Delete payout

Delete a specific payout. This action cannot be undone.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
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
    api_instance = lomi_sdk.PayoutsApi(api_client)
    payout_id = 'payout_id_example' # str | Unique identifier for the payout

    try:
        # Delete payout
        api_instance.delete_payout(payout_id)
    except Exception as e:
        print("Exception when calling PayoutsApi->delete_payout: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payout_id** | **str**| Unique identifier for the payout | 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Payout successfully deleted |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_beneficiary_payouts**
> ListBeneficiaryPayouts200Response list_beneficiary_payouts(limit=limit, offset=offset, sort=sort)

List beneficiary payouts

Beneficiary payouts - track individual payout transfers

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.list_beneficiary_payouts200_response import ListBeneficiaryPayouts200Response
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
    api_instance = lomi_sdk.PayoutsApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List beneficiary payouts
        api_response = api_instance.list_beneficiary_payouts(limit=limit, offset=offset, sort=sort)
        print("The response of PayoutsApi->list_beneficiary_payouts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayoutsApi->list_beneficiary_payouts: %s\n" % e)
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

# **list_payout_methods**
> ListPayoutMethods200Response list_payout_methods(limit=limit, offset=offset, sort=sort)

List payout methods

Payout methods - manage beneficiary payout details

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.list_payout_methods200_response import ListPayoutMethods200Response
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
    api_instance = lomi_sdk.PayoutsApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List payout methods
        api_response = api_instance.list_payout_methods(limit=limit, offset=offset, sort=sort)
        print("The response of PayoutsApi->list_payout_methods:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayoutsApi->list_payout_methods: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListPayoutMethods200Response**](ListPayoutMethods200Response.md)

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

# **list_payouts**
> ListPayouts200Response list_payouts(limit=limit, offset=offset, sort=sort)

List payouts

Payout management - transfer funds to beneficiaries

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.list_payouts200_response import ListPayouts200Response
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
    api_instance = lomi_sdk.PayoutsApi(api_client)
    limit = 20 # int | Maximum number of items to return (1-100) (optional) (default to 20)
    offset = 0 # int | Number of items to skip for pagination (optional) (default to 0)
    sort = 'created_at:desc' # str | Sort order. Format: `field:direction` (e.g., `created_at:desc`) (optional)

    try:
        # List payouts
        api_response = api_instance.list_payouts(limit=limit, offset=offset, sort=sort)
        print("The response of PayoutsApi->list_payouts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayoutsApi->list_payouts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of items to return (1-100) | [optional] [default to 20]
 **offset** | **int**| Number of items to skip for pagination | [optional] [default to 0]
 **sort** | **str**| Sort order. Format: &#x60;field:direction&#x60; (e.g., &#x60;created_at:desc&#x60;) | [optional] 

### Return type

[**ListPayouts200Response**](ListPayouts200Response.md)

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
    api_instance = lomi_sdk.PayoutsApi(api_client)
    payout_id = 'payout_id_example' # str | Unique identifier for the beneficiary payout

    try:
        # Retrieve beneficiary payout
        api_response = api_instance.retrieve_beneficiary_payout(payout_id)
        print("The response of PayoutsApi->retrieve_beneficiary_payout:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayoutsApi->retrieve_beneficiary_payout: %s\n" % e)
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

# **retrieve_payout**
> Payouts retrieve_payout(payout_id)

Retrieve payout

Retrieve a specific payout by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.payouts import Payouts
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
    api_instance = lomi_sdk.PayoutsApi(api_client)
    payout_id = 'payout_id_example' # str | Unique identifier for the payout

    try:
        # Retrieve payout
        api_response = api_instance.retrieve_payout(payout_id)
        print("The response of PayoutsApi->retrieve_payout:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayoutsApi->retrieve_payout: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payout_id** | **str**| Unique identifier for the payout | 

### Return type

[**Payouts**](Payouts.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payout retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_payout_method**
> PayoutMethods retrieve_payout_method(payout_method_id)

Retrieve payout method

Retrieve a specific payout method by its unique identifier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.payout_methods import PayoutMethods
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
    api_instance = lomi_sdk.PayoutsApi(api_client)
    payout_method_id = 'payout_method_id_example' # str | Unique identifier for the payout method

    try:
        # Retrieve payout method
        api_response = api_instance.retrieve_payout_method(payout_method_id)
        print("The response of PayoutsApi->retrieve_payout_method:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayoutsApi->retrieve_payout_method: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payout_method_id** | **str**| Unique identifier for the payout method | 

### Return type

[**PayoutMethods**](PayoutMethods.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payout_method retrieved successfully |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_payout**
> Payouts update_payout(payout_id, payouts_update)

Update payout

Update a specific payout. Only provided fields will be updated.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import lomi_sdk
from lomi_sdk.models.payouts import Payouts
from lomi_sdk.models.payouts_update import PayoutsUpdate
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
    api_instance = lomi_sdk.PayoutsApi(api_client)
    payout_id = 'payout_id_example' # str | Unique identifier for the payout
    payouts_update = {"metadata":{"updated_at":"2025-11-21T09:45:11.332Z","updated_reason":"Administrative update"}} # PayoutsUpdate | 

    try:
        # Update payout
        api_response = api_instance.update_payout(payout_id, payouts_update)
        print("The response of PayoutsApi->update_payout:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayoutsApi->update_payout: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payout_id** | **str**| Unique identifier for the payout | 
 **payouts_update** | [**PayoutsUpdate**](PayoutsUpdate.md)|  | 

### Return type

[**Payouts**](Payouts.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payout successfully updated |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized - Invalid or missing API key |  -  |
**404** | Not found - Resource does not exist |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

