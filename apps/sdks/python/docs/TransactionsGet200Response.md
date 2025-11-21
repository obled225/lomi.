# TransactionsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Transactions]**](Transactions.md) |  | [optional] 
**pagination** | [**CustomersGet200ResponsePagination**](CustomersGet200ResponsePagination.md) |  | [optional] 

## Example

```python
from lomi_sdk.models.transactions_get200_response import TransactionsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionsGet200Response from a JSON string
transactions_get200_response_instance = TransactionsGet200Response.from_json(json)
# print the JSON string representation of the object
print(TransactionsGet200Response.to_json())

# convert the object into a dict
transactions_get200_response_dict = transactions_get200_response_instance.to_dict()
# create an instance of TransactionsGet200Response from a dict
transactions_get200_response_from_dict = TransactionsGet200Response.from_dict(transactions_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


