# SpiAccountAliasesCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountNumber** | Pointer to **string** |  | [optional] 
**AliasId** | Pointer to **string** |  | [optional] 
**AliasKey** | Pointer to **string** |  | [optional] 
**AliasType** | Pointer to **string** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**IsActive** | Pointer to **bool** |  | [optional] 
**IsDefault** | Pointer to **bool** |  | [optional] 
**Metadata** | Pointer to **map[string]interface{}** |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**UpdatedAt** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewSpiAccountAliasesCreate

`func NewSpiAccountAliasesCreate() *SpiAccountAliasesCreate`

NewSpiAccountAliasesCreate instantiates a new SpiAccountAliasesCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpiAccountAliasesCreateWithDefaults

`func NewSpiAccountAliasesCreateWithDefaults() *SpiAccountAliasesCreate`

NewSpiAccountAliasesCreateWithDefaults instantiates a new SpiAccountAliasesCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountNumber

`func (o *SpiAccountAliasesCreate) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *SpiAccountAliasesCreate) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *SpiAccountAliasesCreate) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.

### HasAccountNumber

`func (o *SpiAccountAliasesCreate) HasAccountNumber() bool`

HasAccountNumber returns a boolean if a field has been set.

### GetAliasId

`func (o *SpiAccountAliasesCreate) GetAliasId() string`

GetAliasId returns the AliasId field if non-nil, zero value otherwise.

### GetAliasIdOk

`func (o *SpiAccountAliasesCreate) GetAliasIdOk() (*string, bool)`

GetAliasIdOk returns a tuple with the AliasId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAliasId

`func (o *SpiAccountAliasesCreate) SetAliasId(v string)`

SetAliasId sets AliasId field to given value.

### HasAliasId

`func (o *SpiAccountAliasesCreate) HasAliasId() bool`

HasAliasId returns a boolean if a field has been set.

### GetAliasKey

`func (o *SpiAccountAliasesCreate) GetAliasKey() string`

GetAliasKey returns the AliasKey field if non-nil, zero value otherwise.

### GetAliasKeyOk

`func (o *SpiAccountAliasesCreate) GetAliasKeyOk() (*string, bool)`

GetAliasKeyOk returns a tuple with the AliasKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAliasKey

`func (o *SpiAccountAliasesCreate) SetAliasKey(v string)`

SetAliasKey sets AliasKey field to given value.

### HasAliasKey

`func (o *SpiAccountAliasesCreate) HasAliasKey() bool`

HasAliasKey returns a boolean if a field has been set.

### GetAliasType

`func (o *SpiAccountAliasesCreate) GetAliasType() string`

GetAliasType returns the AliasType field if non-nil, zero value otherwise.

### GetAliasTypeOk

`func (o *SpiAccountAliasesCreate) GetAliasTypeOk() (*string, bool)`

GetAliasTypeOk returns a tuple with the AliasType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAliasType

`func (o *SpiAccountAliasesCreate) SetAliasType(v string)`

SetAliasType sets AliasType field to given value.

### HasAliasType

`func (o *SpiAccountAliasesCreate) HasAliasType() bool`

HasAliasType returns a boolean if a field has been set.

### GetCreatedAt

`func (o *SpiAccountAliasesCreate) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *SpiAccountAliasesCreate) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *SpiAccountAliasesCreate) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *SpiAccountAliasesCreate) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetIsActive

`func (o *SpiAccountAliasesCreate) GetIsActive() bool`

GetIsActive returns the IsActive field if non-nil, zero value otherwise.

### GetIsActiveOk

`func (o *SpiAccountAliasesCreate) GetIsActiveOk() (*bool, bool)`

GetIsActiveOk returns a tuple with the IsActive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsActive

`func (o *SpiAccountAliasesCreate) SetIsActive(v bool)`

SetIsActive sets IsActive field to given value.

### HasIsActive

`func (o *SpiAccountAliasesCreate) HasIsActive() bool`

HasIsActive returns a boolean if a field has been set.

### GetIsDefault

`func (o *SpiAccountAliasesCreate) GetIsDefault() bool`

GetIsDefault returns the IsDefault field if non-nil, zero value otherwise.

### GetIsDefaultOk

`func (o *SpiAccountAliasesCreate) GetIsDefaultOk() (*bool, bool)`

GetIsDefaultOk returns a tuple with the IsDefault field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDefault

`func (o *SpiAccountAliasesCreate) SetIsDefault(v bool)`

SetIsDefault sets IsDefault field to given value.

### HasIsDefault

`func (o *SpiAccountAliasesCreate) HasIsDefault() bool`

HasIsDefault returns a boolean if a field has been set.

### GetMetadata

`func (o *SpiAccountAliasesCreate) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *SpiAccountAliasesCreate) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *SpiAccountAliasesCreate) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *SpiAccountAliasesCreate) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetOrganizationId

`func (o *SpiAccountAliasesCreate) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *SpiAccountAliasesCreate) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *SpiAccountAliasesCreate) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *SpiAccountAliasesCreate) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *SpiAccountAliasesCreate) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *SpiAccountAliasesCreate) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *SpiAccountAliasesCreate) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *SpiAccountAliasesCreate) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


