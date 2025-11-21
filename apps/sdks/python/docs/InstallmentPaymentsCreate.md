# InstallmentPaymentsCreate

Create installment_payments input

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**due_date** | **str** |  | [optional] 
**installment_id** | **str** |  | [optional] 
**interest_amount** | **float** |  | [optional] 
**paid_at** | **datetime** |  | [optional] 
**payment_link** | **str** |  | [optional] 
**payment_method_code** | **str** |  | [optional] 
**plan_id** | **str** |  | [optional] 
**principal_amount** | **float** |  | [optional] 
**processing_fee** | **float** |  | [optional] 
**provider_code** | **str** |  | [optional] 
**sequence_number** | **float** |  | [optional] 
**spi_payment_request_id** | **str** |  | [optional] 
**spi_tx_id** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**transaction_id** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

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


