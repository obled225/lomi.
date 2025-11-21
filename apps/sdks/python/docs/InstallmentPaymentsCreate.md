# InstallmentPaymentsCreate

Request body for creating a installment payments object. System-managed fields like `created_at`, `organization_id`, and IDs are automatically set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in the smallest currency unit (e.g., cents for USD, same for XOF) | [optional] 
**due_date** | **str** |  | [optional] 
**installment_id** | **str** | Unique identifier (UUID format) | [optional] 
**interest_amount** | **float** |  | [optional] 
**paid_at** | **datetime** | ISO 8601 datetime | [optional] 
**payment_link** | **str** |  | [optional] 
**payment_method_code** | **str** |  | [optional] 
**plan_id** | **str** | Unique identifier (UUID format) | [optional] 
**principal_amount** | **float** |  | [optional] 
**processing_fee** | **float** |  | [optional] 
**provider_code** | **str** |  | [optional] 
**sequence_number** | **float** |  | [optional] 
**spi_payment_request_id** | **str** | Unique identifier (UUID format) | [optional] 
**spi_tx_id** | **str** | Unique identifier (UUID format) | [optional] 
**status** | **str** | Current status of the resource | [optional] 
**transaction_id** | **str** | Unique identifier (UUID format) | [optional] 

## Example

```python
from lomi_sdk.models.installment_payments_create import InstallmentPaymentsCreate

# TODO update the JSON string below
json = "{}"
# create an instance of InstallmentPaymentsCreate from a JSON string
installment_payments_create_instance = InstallmentPaymentsCreate.from_json(json)
# print the JSON string representation of the object
print(InstallmentPaymentsCreate.to_json())

# convert the object into a dict
installment_payments_create_dict = installment_payments_create_instance.to_dict()
# create an instance of InstallmentPaymentsCreate from a dict
installment_payments_create_from_dict = InstallmentPaymentsCreate.from_dict(installment_payments_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


