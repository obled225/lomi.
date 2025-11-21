# SpiQrCodesUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Categorie** | Pointer to **string** |  | [optional] 
**CheckoutSessionId** | Pointer to **string** |  | [optional] 
**ComptePaye** | Pointer to **string** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**CreatedBy** | Pointer to **string** |  | [optional] 
**Environment** | Pointer to **string** |  | [optional] 
**ExpiresAt** | Pointer to **time.Time** |  | [optional] 
**IsActive** | Pointer to **bool** |  | [optional] 
**IsUsed** | Pointer to **bool** |  | [optional] 
**Metadata** | Pointer to **map[string]interface{}** |  | [optional] 
**Montant** | Pointer to **float64** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**PayeurAlias** | Pointer to **string** |  | [optional] 
**PaymentRequestId** | Pointer to **string** |  | [optional] 
**PlanId** | Pointer to **string** |  | [optional] 
**ProductId** | Pointer to **string** |  | [optional] 
**QrCodeData** | Pointer to **string** |  | [optional] 
**QrCodeId** | Pointer to **string** |  | [optional] 
**QrCodeImageData** | Pointer to **string** |  | [optional] 
**QrCodeImageUrl** | Pointer to **string** |  | [optional] 
**QrCodeType** | Pointer to **string** |  | [optional] 
**UpdatedAt** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewSpiQrCodesUpdate

`func NewSpiQrCodesUpdate() *SpiQrCodesUpdate`

NewSpiQrCodesUpdate instantiates a new SpiQrCodesUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpiQrCodesUpdateWithDefaults

`func NewSpiQrCodesUpdateWithDefaults() *SpiQrCodesUpdate`

NewSpiQrCodesUpdateWithDefaults instantiates a new SpiQrCodesUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCategorie

`func (o *SpiQrCodesUpdate) GetCategorie() string`

GetCategorie returns the Categorie field if non-nil, zero value otherwise.

### GetCategorieOk

`func (o *SpiQrCodesUpdate) GetCategorieOk() (*string, bool)`

GetCategorieOk returns a tuple with the Categorie field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategorie

`func (o *SpiQrCodesUpdate) SetCategorie(v string)`

SetCategorie sets Categorie field to given value.

### HasCategorie

`func (o *SpiQrCodesUpdate) HasCategorie() bool`

HasCategorie returns a boolean if a field has been set.

### GetCheckoutSessionId

`func (o *SpiQrCodesUpdate) GetCheckoutSessionId() string`

GetCheckoutSessionId returns the CheckoutSessionId field if non-nil, zero value otherwise.

### GetCheckoutSessionIdOk

`func (o *SpiQrCodesUpdate) GetCheckoutSessionIdOk() (*string, bool)`

GetCheckoutSessionIdOk returns a tuple with the CheckoutSessionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckoutSessionId

`func (o *SpiQrCodesUpdate) SetCheckoutSessionId(v string)`

SetCheckoutSessionId sets CheckoutSessionId field to given value.

### HasCheckoutSessionId

`func (o *SpiQrCodesUpdate) HasCheckoutSessionId() bool`

HasCheckoutSessionId returns a boolean if a field has been set.

### GetComptePaye

`func (o *SpiQrCodesUpdate) GetComptePaye() string`

GetComptePaye returns the ComptePaye field if non-nil, zero value otherwise.

### GetComptePayeOk

`func (o *SpiQrCodesUpdate) GetComptePayeOk() (*string, bool)`

GetComptePayeOk returns a tuple with the ComptePaye field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComptePaye

`func (o *SpiQrCodesUpdate) SetComptePaye(v string)`

SetComptePaye sets ComptePaye field to given value.

### HasComptePaye

`func (o *SpiQrCodesUpdate) HasComptePaye() bool`

HasComptePaye returns a boolean if a field has been set.

### GetCreatedAt

`func (o *SpiQrCodesUpdate) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *SpiQrCodesUpdate) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *SpiQrCodesUpdate) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *SpiQrCodesUpdate) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetCreatedBy

`func (o *SpiQrCodesUpdate) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *SpiQrCodesUpdate) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *SpiQrCodesUpdate) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *SpiQrCodesUpdate) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### GetEnvironment

`func (o *SpiQrCodesUpdate) GetEnvironment() string`

GetEnvironment returns the Environment field if non-nil, zero value otherwise.

### GetEnvironmentOk

`func (o *SpiQrCodesUpdate) GetEnvironmentOk() (*string, bool)`

GetEnvironmentOk returns a tuple with the Environment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironment

`func (o *SpiQrCodesUpdate) SetEnvironment(v string)`

SetEnvironment sets Environment field to given value.

### HasEnvironment

`func (o *SpiQrCodesUpdate) HasEnvironment() bool`

HasEnvironment returns a boolean if a field has been set.

### GetExpiresAt

`func (o *SpiQrCodesUpdate) GetExpiresAt() time.Time`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *SpiQrCodesUpdate) GetExpiresAtOk() (*time.Time, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *SpiQrCodesUpdate) SetExpiresAt(v time.Time)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *SpiQrCodesUpdate) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### GetIsActive

`func (o *SpiQrCodesUpdate) GetIsActive() bool`

GetIsActive returns the IsActive field if non-nil, zero value otherwise.

### GetIsActiveOk

`func (o *SpiQrCodesUpdate) GetIsActiveOk() (*bool, bool)`

GetIsActiveOk returns a tuple with the IsActive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsActive

`func (o *SpiQrCodesUpdate) SetIsActive(v bool)`

SetIsActive sets IsActive field to given value.

### HasIsActive

`func (o *SpiQrCodesUpdate) HasIsActive() bool`

HasIsActive returns a boolean if a field has been set.

### GetIsUsed

`func (o *SpiQrCodesUpdate) GetIsUsed() bool`

GetIsUsed returns the IsUsed field if non-nil, zero value otherwise.

### GetIsUsedOk

`func (o *SpiQrCodesUpdate) GetIsUsedOk() (*bool, bool)`

GetIsUsedOk returns a tuple with the IsUsed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsUsed

`func (o *SpiQrCodesUpdate) SetIsUsed(v bool)`

SetIsUsed sets IsUsed field to given value.

### HasIsUsed

`func (o *SpiQrCodesUpdate) HasIsUsed() bool`

HasIsUsed returns a boolean if a field has been set.

### GetMetadata

`func (o *SpiQrCodesUpdate) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *SpiQrCodesUpdate) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *SpiQrCodesUpdate) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *SpiQrCodesUpdate) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetMontant

`func (o *SpiQrCodesUpdate) GetMontant() float64`

GetMontant returns the Montant field if non-nil, zero value otherwise.

### GetMontantOk

`func (o *SpiQrCodesUpdate) GetMontantOk() (*float64, bool)`

GetMontantOk returns a tuple with the Montant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMontant

`func (o *SpiQrCodesUpdate) SetMontant(v float64)`

SetMontant sets Montant field to given value.

### HasMontant

`func (o *SpiQrCodesUpdate) HasMontant() bool`

HasMontant returns a boolean if a field has been set.

### GetName

`func (o *SpiQrCodesUpdate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SpiQrCodesUpdate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SpiQrCodesUpdate) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SpiQrCodesUpdate) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrganizationId

`func (o *SpiQrCodesUpdate) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *SpiQrCodesUpdate) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *SpiQrCodesUpdate) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *SpiQrCodesUpdate) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetPayeurAlias

`func (o *SpiQrCodesUpdate) GetPayeurAlias() string`

GetPayeurAlias returns the PayeurAlias field if non-nil, zero value otherwise.

### GetPayeurAliasOk

`func (o *SpiQrCodesUpdate) GetPayeurAliasOk() (*string, bool)`

GetPayeurAliasOk returns a tuple with the PayeurAlias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeurAlias

`func (o *SpiQrCodesUpdate) SetPayeurAlias(v string)`

SetPayeurAlias sets PayeurAlias field to given value.

### HasPayeurAlias

`func (o *SpiQrCodesUpdate) HasPayeurAlias() bool`

HasPayeurAlias returns a boolean if a field has been set.

### GetPaymentRequestId

`func (o *SpiQrCodesUpdate) GetPaymentRequestId() string`

GetPaymentRequestId returns the PaymentRequestId field if non-nil, zero value otherwise.

### GetPaymentRequestIdOk

`func (o *SpiQrCodesUpdate) GetPaymentRequestIdOk() (*string, bool)`

GetPaymentRequestIdOk returns a tuple with the PaymentRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentRequestId

`func (o *SpiQrCodesUpdate) SetPaymentRequestId(v string)`

SetPaymentRequestId sets PaymentRequestId field to given value.

### HasPaymentRequestId

`func (o *SpiQrCodesUpdate) HasPaymentRequestId() bool`

HasPaymentRequestId returns a boolean if a field has been set.

### GetPlanId

`func (o *SpiQrCodesUpdate) GetPlanId() string`

GetPlanId returns the PlanId field if non-nil, zero value otherwise.

### GetPlanIdOk

`func (o *SpiQrCodesUpdate) GetPlanIdOk() (*string, bool)`

GetPlanIdOk returns a tuple with the PlanId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlanId

`func (o *SpiQrCodesUpdate) SetPlanId(v string)`

SetPlanId sets PlanId field to given value.

### HasPlanId

`func (o *SpiQrCodesUpdate) HasPlanId() bool`

HasPlanId returns a boolean if a field has been set.

### GetProductId

`func (o *SpiQrCodesUpdate) GetProductId() string`

GetProductId returns the ProductId field if non-nil, zero value otherwise.

### GetProductIdOk

`func (o *SpiQrCodesUpdate) GetProductIdOk() (*string, bool)`

GetProductIdOk returns a tuple with the ProductId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductId

`func (o *SpiQrCodesUpdate) SetProductId(v string)`

SetProductId sets ProductId field to given value.

### HasProductId

`func (o *SpiQrCodesUpdate) HasProductId() bool`

HasProductId returns a boolean if a field has been set.

### GetQrCodeData

`func (o *SpiQrCodesUpdate) GetQrCodeData() string`

GetQrCodeData returns the QrCodeData field if non-nil, zero value otherwise.

### GetQrCodeDataOk

`func (o *SpiQrCodesUpdate) GetQrCodeDataOk() (*string, bool)`

GetQrCodeDataOk returns a tuple with the QrCodeData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCodeData

`func (o *SpiQrCodesUpdate) SetQrCodeData(v string)`

SetQrCodeData sets QrCodeData field to given value.

### HasQrCodeData

`func (o *SpiQrCodesUpdate) HasQrCodeData() bool`

HasQrCodeData returns a boolean if a field has been set.

### GetQrCodeId

`func (o *SpiQrCodesUpdate) GetQrCodeId() string`

GetQrCodeId returns the QrCodeId field if non-nil, zero value otherwise.

### GetQrCodeIdOk

`func (o *SpiQrCodesUpdate) GetQrCodeIdOk() (*string, bool)`

GetQrCodeIdOk returns a tuple with the QrCodeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCodeId

`func (o *SpiQrCodesUpdate) SetQrCodeId(v string)`

SetQrCodeId sets QrCodeId field to given value.

### HasQrCodeId

`func (o *SpiQrCodesUpdate) HasQrCodeId() bool`

HasQrCodeId returns a boolean if a field has been set.

### GetQrCodeImageData

`func (o *SpiQrCodesUpdate) GetQrCodeImageData() string`

GetQrCodeImageData returns the QrCodeImageData field if non-nil, zero value otherwise.

### GetQrCodeImageDataOk

`func (o *SpiQrCodesUpdate) GetQrCodeImageDataOk() (*string, bool)`

GetQrCodeImageDataOk returns a tuple with the QrCodeImageData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCodeImageData

`func (o *SpiQrCodesUpdate) SetQrCodeImageData(v string)`

SetQrCodeImageData sets QrCodeImageData field to given value.

### HasQrCodeImageData

`func (o *SpiQrCodesUpdate) HasQrCodeImageData() bool`

HasQrCodeImageData returns a boolean if a field has been set.

### GetQrCodeImageUrl

`func (o *SpiQrCodesUpdate) GetQrCodeImageUrl() string`

GetQrCodeImageUrl returns the QrCodeImageUrl field if non-nil, zero value otherwise.

### GetQrCodeImageUrlOk

`func (o *SpiQrCodesUpdate) GetQrCodeImageUrlOk() (*string, bool)`

GetQrCodeImageUrlOk returns a tuple with the QrCodeImageUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCodeImageUrl

`func (o *SpiQrCodesUpdate) SetQrCodeImageUrl(v string)`

SetQrCodeImageUrl sets QrCodeImageUrl field to given value.

### HasQrCodeImageUrl

`func (o *SpiQrCodesUpdate) HasQrCodeImageUrl() bool`

HasQrCodeImageUrl returns a boolean if a field has been set.

### GetQrCodeType

`func (o *SpiQrCodesUpdate) GetQrCodeType() string`

GetQrCodeType returns the QrCodeType field if non-nil, zero value otherwise.

### GetQrCodeTypeOk

`func (o *SpiQrCodesUpdate) GetQrCodeTypeOk() (*string, bool)`

GetQrCodeTypeOk returns a tuple with the QrCodeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCodeType

`func (o *SpiQrCodesUpdate) SetQrCodeType(v string)`

SetQrCodeType sets QrCodeType field to given value.

### HasQrCodeType

`func (o *SpiQrCodesUpdate) HasQrCodeType() bool`

HasQrCodeType returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *SpiQrCodesUpdate) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *SpiQrCodesUpdate) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *SpiQrCodesUpdate) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *SpiQrCodesUpdate) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


