# ProductsCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BillingFrequency** | Pointer to **string** |  | [optional] 
**ChargeDay** | Pointer to **float64** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**CreatedBy** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**DisplayOnStorefront** | Pointer to **bool** |  | [optional] 
**Environment** | Pointer to **string** |  | [optional] 
**FailedPaymentAction** | Pointer to **string** |  | [optional] 
**FirstPaymentType** | Pointer to **string** |  | [optional] 
**ImageUrl** | Pointer to **string** |  | [optional] 
**IsActive** | Pointer to **bool** |  | [optional] 
**Metadata** | Pointer to **map[string]interface{}** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**ProductId** | Pointer to **string** |  | [optional] 
**ProductType** | Pointer to **string** |  | [optional] 
**UpdatedAt** | Pointer to **time.Time** |  | [optional] 
**UsageAggregation** | Pointer to **string** |  | [optional] 
**UsageUnit** | Pointer to **string** |  | [optional] 

## Methods

### NewProductsCreate

`func NewProductsCreate() *ProductsCreate`

NewProductsCreate instantiates a new ProductsCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductsCreateWithDefaults

`func NewProductsCreateWithDefaults() *ProductsCreate`

NewProductsCreateWithDefaults instantiates a new ProductsCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBillingFrequency

`func (o *ProductsCreate) GetBillingFrequency() string`

GetBillingFrequency returns the BillingFrequency field if non-nil, zero value otherwise.

### GetBillingFrequencyOk

`func (o *ProductsCreate) GetBillingFrequencyOk() (*string, bool)`

GetBillingFrequencyOk returns a tuple with the BillingFrequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingFrequency

`func (o *ProductsCreate) SetBillingFrequency(v string)`

SetBillingFrequency sets BillingFrequency field to given value.

### HasBillingFrequency

`func (o *ProductsCreate) HasBillingFrequency() bool`

HasBillingFrequency returns a boolean if a field has been set.

### GetChargeDay

`func (o *ProductsCreate) GetChargeDay() float64`

GetChargeDay returns the ChargeDay field if non-nil, zero value otherwise.

### GetChargeDayOk

`func (o *ProductsCreate) GetChargeDayOk() (*float64, bool)`

GetChargeDayOk returns a tuple with the ChargeDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChargeDay

`func (o *ProductsCreate) SetChargeDay(v float64)`

SetChargeDay sets ChargeDay field to given value.

### HasChargeDay

`func (o *ProductsCreate) HasChargeDay() bool`

HasChargeDay returns a boolean if a field has been set.

### GetCreatedAt

`func (o *ProductsCreate) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ProductsCreate) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ProductsCreate) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ProductsCreate) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetCreatedBy

`func (o *ProductsCreate) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *ProductsCreate) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *ProductsCreate) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *ProductsCreate) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### GetDescription

`func (o *ProductsCreate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ProductsCreate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ProductsCreate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ProductsCreate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplayOnStorefront

`func (o *ProductsCreate) GetDisplayOnStorefront() bool`

GetDisplayOnStorefront returns the DisplayOnStorefront field if non-nil, zero value otherwise.

### GetDisplayOnStorefrontOk

`func (o *ProductsCreate) GetDisplayOnStorefrontOk() (*bool, bool)`

GetDisplayOnStorefrontOk returns a tuple with the DisplayOnStorefront field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayOnStorefront

`func (o *ProductsCreate) SetDisplayOnStorefront(v bool)`

SetDisplayOnStorefront sets DisplayOnStorefront field to given value.

### HasDisplayOnStorefront

`func (o *ProductsCreate) HasDisplayOnStorefront() bool`

HasDisplayOnStorefront returns a boolean if a field has been set.

### GetEnvironment

`func (o *ProductsCreate) GetEnvironment() string`

GetEnvironment returns the Environment field if non-nil, zero value otherwise.

### GetEnvironmentOk

`func (o *ProductsCreate) GetEnvironmentOk() (*string, bool)`

GetEnvironmentOk returns a tuple with the Environment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironment

`func (o *ProductsCreate) SetEnvironment(v string)`

SetEnvironment sets Environment field to given value.

### HasEnvironment

`func (o *ProductsCreate) HasEnvironment() bool`

HasEnvironment returns a boolean if a field has been set.

### GetFailedPaymentAction

`func (o *ProductsCreate) GetFailedPaymentAction() string`

GetFailedPaymentAction returns the FailedPaymentAction field if non-nil, zero value otherwise.

### GetFailedPaymentActionOk

`func (o *ProductsCreate) GetFailedPaymentActionOk() (*string, bool)`

GetFailedPaymentActionOk returns a tuple with the FailedPaymentAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedPaymentAction

`func (o *ProductsCreate) SetFailedPaymentAction(v string)`

SetFailedPaymentAction sets FailedPaymentAction field to given value.

### HasFailedPaymentAction

`func (o *ProductsCreate) HasFailedPaymentAction() bool`

HasFailedPaymentAction returns a boolean if a field has been set.

### GetFirstPaymentType

`func (o *ProductsCreate) GetFirstPaymentType() string`

GetFirstPaymentType returns the FirstPaymentType field if non-nil, zero value otherwise.

### GetFirstPaymentTypeOk

`func (o *ProductsCreate) GetFirstPaymentTypeOk() (*string, bool)`

GetFirstPaymentTypeOk returns a tuple with the FirstPaymentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstPaymentType

`func (o *ProductsCreate) SetFirstPaymentType(v string)`

SetFirstPaymentType sets FirstPaymentType field to given value.

### HasFirstPaymentType

`func (o *ProductsCreate) HasFirstPaymentType() bool`

HasFirstPaymentType returns a boolean if a field has been set.

### GetImageUrl

`func (o *ProductsCreate) GetImageUrl() string`

GetImageUrl returns the ImageUrl field if non-nil, zero value otherwise.

### GetImageUrlOk

`func (o *ProductsCreate) GetImageUrlOk() (*string, bool)`

GetImageUrlOk returns a tuple with the ImageUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageUrl

`func (o *ProductsCreate) SetImageUrl(v string)`

SetImageUrl sets ImageUrl field to given value.

### HasImageUrl

`func (o *ProductsCreate) HasImageUrl() bool`

HasImageUrl returns a boolean if a field has been set.

### GetIsActive

`func (o *ProductsCreate) GetIsActive() bool`

GetIsActive returns the IsActive field if non-nil, zero value otherwise.

### GetIsActiveOk

`func (o *ProductsCreate) GetIsActiveOk() (*bool, bool)`

GetIsActiveOk returns a tuple with the IsActive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsActive

`func (o *ProductsCreate) SetIsActive(v bool)`

SetIsActive sets IsActive field to given value.

### HasIsActive

`func (o *ProductsCreate) HasIsActive() bool`

HasIsActive returns a boolean if a field has been set.

### GetMetadata

`func (o *ProductsCreate) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *ProductsCreate) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *ProductsCreate) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *ProductsCreate) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetName

`func (o *ProductsCreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ProductsCreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ProductsCreate) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ProductsCreate) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrganizationId

`func (o *ProductsCreate) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *ProductsCreate) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *ProductsCreate) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *ProductsCreate) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetProductId

`func (o *ProductsCreate) GetProductId() string`

GetProductId returns the ProductId field if non-nil, zero value otherwise.

### GetProductIdOk

`func (o *ProductsCreate) GetProductIdOk() (*string, bool)`

GetProductIdOk returns a tuple with the ProductId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductId

`func (o *ProductsCreate) SetProductId(v string)`

SetProductId sets ProductId field to given value.

### HasProductId

`func (o *ProductsCreate) HasProductId() bool`

HasProductId returns a boolean if a field has been set.

### GetProductType

`func (o *ProductsCreate) GetProductType() string`

GetProductType returns the ProductType field if non-nil, zero value otherwise.

### GetProductTypeOk

`func (o *ProductsCreate) GetProductTypeOk() (*string, bool)`

GetProductTypeOk returns a tuple with the ProductType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductType

`func (o *ProductsCreate) SetProductType(v string)`

SetProductType sets ProductType field to given value.

### HasProductType

`func (o *ProductsCreate) HasProductType() bool`

HasProductType returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *ProductsCreate) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ProductsCreate) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ProductsCreate) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *ProductsCreate) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetUsageAggregation

`func (o *ProductsCreate) GetUsageAggregation() string`

GetUsageAggregation returns the UsageAggregation field if non-nil, zero value otherwise.

### GetUsageAggregationOk

`func (o *ProductsCreate) GetUsageAggregationOk() (*string, bool)`

GetUsageAggregationOk returns a tuple with the UsageAggregation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageAggregation

`func (o *ProductsCreate) SetUsageAggregation(v string)`

SetUsageAggregation sets UsageAggregation field to given value.

### HasUsageAggregation

`func (o *ProductsCreate) HasUsageAggregation() bool`

HasUsageAggregation returns a boolean if a field has been set.

### GetUsageUnit

`func (o *ProductsCreate) GetUsageUnit() string`

GetUsageUnit returns the UsageUnit field if non-nil, zero value otherwise.

### GetUsageUnitOk

`func (o *ProductsCreate) GetUsageUnitOk() (*string, bool)`

GetUsageUnitOk returns a tuple with the UsageUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageUnit

`func (o *ProductsCreate) SetUsageUnit(v string)`

SetUsageUnit sets UsageUnit field to given value.

### HasUsageUnit

`func (o *ProductsCreate) HasUsageUnit() bool`

HasUsageUnit returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


