# Discount Coupons API

The Discount Coupons API allows merchants to create and manage promotional discount codes. Coupons can be percentage-based or fixed-amount discounts, with various configuration options for usage limits, expiration dates, and scope.

## Features

- ✅ **List Coupons** - Retrieve all discount coupons for your organization
- ✅ **Get Coupon** - Fetch detailed information about a specific coupon
- ✅ **Create Coupon** - Create new discount codes with flexible configurations
- ✅ **Performance Metrics** - Track coupon usage and revenue impact
- ✅ **Flexible Discount Types** - Percentage or fixed-amount discounts
- ✅ **Usage Limits** - Control total uses, per-customer limits, or per-product limits
- ✅ **Expiration Dates** - Set valid-from and expires-at dates
- ✅ **Customer Targeting** - Target all customers, new only, or existing only
- ✅ **Product Scoping** - Apply to all products or specific products/prices
- ❌ **Update Coupon** - Not available (coupons are immutable after creation)
- ❌ **Delete Coupon** - Not available (use is_active flag to disable)

## Endpoints

### 1. List Discount Coupons

```
GET /discount-coupons
```

Retrieves all discount coupons for your organization.

**Response:**
```json
[
  {
    "coupon_id": "123e4567-e89b-12d3-a456-426614174000",
    "organization_id": "789e0123-e89b-12d3-a456-426614174000",
    "code": "SAVE20",
    "discount_type": "percentage",
    "discount_percentage": 20.0,
    "discount_fixed_amount": null,
    "customer_type": "all",
    "is_active": true,
    "max_uses": 100,
    "max_quantity_per_use": 5,
    "current_uses": 25,
    "usage_frequency_limit": "total",
    "usage_limit_value": null,
    "expires_at": "2024-12-31T23:59:59Z",
    "valid_from": "2024-01-01T00:00:00Z",
    "description": "20% off all products",
    "scope_type": "organization_wide",
    "applies_to_product_types": null,
    "environment": "live",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```

**RPC Function Used:** `get_organization_coupons(p_organization_id, p_environment)`

---

### 2. Get Discount Coupon

```
GET /discount-coupons/:id
```

Retrieves detailed information about a specific discount coupon.

**Parameters:**
- `id`: Coupon UUID

**Response:**
```json
{
  "coupon_id": "123e4567-e89b-12d3-a456-426614174000",
  "organization_id": "789e0123-e89b-12d3-a456-426614174000",
  "code": "SAVE20",
  "discount_type": "percentage",
  "discount_percentage": 20.0,
  "discount_fixed_amount": null,
  "customer_type": "all",
  "is_active": true,
  "max_uses": 100,
  "max_quantity_per_use": 5,
  "current_uses": 25,
  "usage_frequency_limit": "total",
  "usage_limit_value": null,
  "expires_at": "2024-12-31T23:59:59Z",
  "valid_from": "2024-01-01T00:00:00Z",
  "description": "20% off all products",
  "scope_type": "organization_wide",
  "applies_to_product_types": null,
  "environment": "live",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**RPC Function Used:** `get_coupon_details_for_management(p_organization_id, p_coupon_id)`

---

### 3. Create Discount Coupon

```
POST /discount-coupons
```

Creates a new discount coupon. The coupon code will be automatically uppercased.

**Request Body:**
```json
{
  "code": "save20",
  "discount_type": "percentage",
  "discount_percentage": 20.0,
  "customer_type": "all",
  "is_active": true,
  "max_uses": 100,
  "max_quantity_per_use": 5,
  "usage_frequency_limit": "total",
  "valid_from": "2024-01-01T00:00:00Z",
  "expires_at": "2024-12-31T23:59:59Z",
  "description": "20% off all products",
  "scope_type": "organization_wide"
}
```

**Required Fields:**
- `code`: Coupon code (will be uppercased, must be unique per organization)

**Conditional Fields:**
- If `discount_type` is `"percentage"` (default): `discount_percentage` is required (0-100)
- If `discount_type` is `"fixed"`: `discount_fixed_amount` is required (must be positive)
- If `usage_frequency_limit` is not `"total"`: `usage_limit_value` is required (must be positive)

**Optional Fields:**
- `discount_type`: Type of discount - `"percentage"` or `"fixed"` (default: `"percentage"`)
- `customer_type`: Target customers - `"all"`, `"new"`, or `"existing"` (default: `"all"`)
- `is_active`: Whether coupon is active (default: `true`)
- `max_uses`: Maximum total uses (unlimited if not specified)
- `max_quantity_per_use`: Maximum quantity per use (unlimited if not specified)
- `usage_frequency_limit`: Usage limit type - `"total"`, `"per_customer"`, or `"per_customer_per_product"` (default: `"total"`)
- `valid_from`: When coupon becomes valid (immediate if not specified)
- `expires_at`: When coupon expires (never if not specified)
- `description`: Coupon description
- `scope_type`: Scope - `"organization_wide"`, `"specific_products"`, or `"specific_prices"` (default: `"organization_wide"`)
- `product_ids`: Array of product UUIDs (only used if scope_type is `"specific_products"` or `"specific_prices"`)

**Response:**
```json
{
  "coupon_id": "123e4567-e89b-12d3-a456-426614174000",
  "organization_id": "789e0123-e89b-12d3-a456-426614174000",
  "code": "SAVE20",
  "discount_type": "percentage",
  "discount_percentage": 20.0,
  "discount_fixed_amount": null,
  "customer_type": "all",
  "is_active": true,
  "max_uses": 100,
  "max_quantity_per_use": 5,
  "current_uses": 0,
  "usage_frequency_limit": "total",
  "usage_limit_value": null,
  "expires_at": "2024-12-31T23:59:59Z",
  "valid_from": "2024-01-01T00:00:00Z",
  "description": "20% off all products",
  "scope_type": "organization_wide",
  "applies_to_product_types": null,
  "environment": "live",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**RPC Function Used:** `create_discount_coupon(p_organization_id, p_code, p_discount_type, p_discount_percentage, p_discount_fixed_amount, p_customer_type, p_usage_frequency_limit, p_usage_limit_value, p_description, p_is_active, p_max_uses, p_max_quantity_per_use, p_valid_from, p_expires_at, p_scope_type, p_product_ids)`

---

### 4. Get Coupon Performance

```
GET /discount-coupons/:id/performance
```

Retrieves performance metrics for a specific discount coupon.

**Parameters:**
- `id`: Coupon UUID

**Response:**
```json
{
  "total_uses": 45,
  "total_discount_amount": 25000.0,
  "total_revenue": 150000.0,
  "average_order_value": 3333.33
}
```

**RPC Function Used:** `get_coupon_performance(p_coupon_id)`

---

## Authentication

All endpoints require API key authentication via the `x-api-key` header.

```bash
curl -H "x-api-key: your-api-key" https://api.lomi.africa/discount-coupons
```

---

## Discount Types

### Percentage Discount

Applies a percentage discount to the order total.

**Example:**
```json
{
  "code": "SAVE20",
  "discount_type": "percentage",
  "discount_percentage": 20.0
}
```

**Calculation:** 
- Order total: 10,000 XOF
- Discount: 10,000 × 20% = 2,000 XOF
- Final amount: 8,000 XOF

### Fixed Amount Discount

Applies a fixed amount discount to the order total.

**Example:**
```json
{
  "code": "FLAT1000",
  "discount_type": "fixed",
  "discount_fixed_amount": 1000.0
}
```

**Calculation:**
- Order total: 10,000 XOF
- Discount: 1,000 XOF
- Final amount: 9,000 XOF

---

## Customer Targeting

### All Customers (default)
```json
{
  "customer_type": "all"
}
```
Available to all customers regardless of purchase history.

### New Customers Only
```json
{
  "customer_type": "new"
}
```
Only available to customers who have never made a purchase.

### Existing Customers Only
```json
{
  "customer_type": "existing"
}
```
Only available to customers who have made at least one purchase.

---

## Usage Limits

### Total Usage Limit
```json
{
  "usage_frequency_limit": "total",
  "max_uses": 100
}
```
Coupon can be used 100 times total across all customers.

### Per Customer Limit
```json
{
  "usage_frequency_limit": "per_customer",
  "usage_limit_value": 1
}
```
Each customer can use the coupon once (unlimited customers can use it).

### Per Customer Per Product Limit
```json
{
  "usage_frequency_limit": "per_customer_per_product",
  "usage_limit_value": 1
}
```
Each customer can use the coupon once per product.

---

## Scope Types

### Organization-Wide (default)
```json
{
  "scope_type": "organization_wide"
}
```
Applies to all products in your organization.

### Specific Products
```json
{
  "scope_type": "specific_products",
  "product_ids": ["123e4567-e89b-12d3-a456-426614174000"]
}
```
Only applies to specified products.

### Specific Prices
```json
{
  "scope_type": "specific_prices",
  "product_ids": ["123e4567-e89b-12d3-a456-426614174000"]
}
```
Only applies to specified price IDs.

---

## Example Usage

### TypeScript/JavaScript

```typescript
import axios from 'axios';

const apiKey = 'your-api-key';
const baseURL = 'https://api.lomi.africa';

// List all coupons
const listCoupons = async () => {
  const response = await axios.get(`${baseURL}/discount-coupons`, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};

// Get a specific coupon
const getCoupon = async (couponId: string) => {
  const response = await axios.get(`${baseURL}/discount-coupons/${couponId}`, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};

// Create a percentage discount coupon
const createPercentageCoupon = async () => {
  const response = await axios.post(`${baseURL}/discount-coupons`, {
    code: 'SAVE20',
    discount_type: 'percentage',
    discount_percentage: 20.0,
    customer_type: 'all',
    max_uses: 100,
    expires_at: '2024-12-31T23:59:59Z',
    description: '20% off all products'
  }, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};

// Create a fixed amount coupon
const createFixedCoupon = async () => {
  const response = await axios.post(`${baseURL}/discount-coupons`, {
    code: 'FLAT1000',
    discount_type: 'fixed',
    discount_fixed_amount: 1000.0,
    customer_type: 'new',
    usage_frequency_limit: 'per_customer',
    usage_limit_value: 1,
    description: '1000 XOF off for new customers'
  }, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};

// Get coupon performance
const getCouponPerformance = async (couponId: string) => {
  const response = await axios.get(`${baseURL}/discount-coupons/${couponId}/performance`, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};
```

### cURL

```bash
# List all coupons
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/discount-coupons"

# Get a specific coupon
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/discount-coupons/123e4567-e89b-12d3-a456-426614174000"

# Create a percentage discount coupon
curl -X POST -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "code": "SAVE20",
    "discount_type": "percentage",
    "discount_percentage": 20.0,
    "customer_type": "all",
    "max_uses": 100,
    "expires_at": "2024-12-31T23:59:59Z",
    "description": "20% off all products"
  }' \
  "https://api.lomi.africa/discount-coupons"

# Create a fixed amount coupon
curl -X POST -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "code": "FLAT1000",
    "discount_type": "fixed",
    "discount_fixed_amount": 1000.0,
    "customer_type": "new",
    "usage_frequency_limit": "per_customer",
    "usage_limit_value": 1,
    "description": "1000 XOF off for new customers"
  }' \
  "https://api.lomi.africa/discount-coupons"

# Get coupon performance
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/discount-coupons/123e4567-e89b-12d3-a456-426614174000/performance"
```

### Python

```python
import requests

api_key = 'your-api-key'
base_url = 'https://api.lomi.africa'
headers = {'x-api-key': api_key}

# List all coupons
def list_coupons():
    response = requests.get(
        f'{base_url}/discount-coupons',
        headers=headers
    )
    return response.json()

# Get a specific coupon
def get_coupon(coupon_id):
    response = requests.get(
        f'{base_url}/discount-coupons/{coupon_id}',
        headers=headers
    )
    return response.json()

# Create a percentage discount coupon
def create_percentage_coupon():
    response = requests.post(
        f'{base_url}/discount-coupons',
        headers=headers,
        json={
            'code': 'SAVE20',
            'discount_type': 'percentage',
            'discount_percentage': 20.0,
            'customer_type': 'all',
            'max_uses': 100,
            'expires_at': '2024-12-31T23:59:59Z',
            'description': '20% off all products'
        }
    )
    return response.json()

# Create a fixed amount coupon
def create_fixed_coupon():
    response = requests.post(
        f'{base_url}/discount-coupons',
        headers=headers,
        json={
            'code': 'FLAT1000',
            'discount_type': 'fixed',
            'discount_fixed_amount': 1000.0,
            'customer_type': 'new',
            'usage_frequency_limit': 'per_customer',
            'usage_limit_value': 1,
            'description': '1000 XOF off for new customers'
        }
    )
    return response.json()

# Get coupon performance
def get_coupon_performance(coupon_id):
    response = requests.get(
        f'{base_url}/discount-coupons/{coupon_id}/performance',
        headers=headers
    )
    return response.json()
```

---

## Error Handling

### Common Errors

#### 401 Unauthorized
**Cause:** Invalid or missing API key

```json
{
  "statusCode": 401,
  "message": "Invalid API key"
}
```

**Solution:** Verify your API key is correct and included in the `x-api-key` header.

#### 404 Not Found
**Cause:** Coupon doesn't exist or doesn't belong to your organization

```json
{
  "statusCode": 404,
  "message": "Discount coupon with ID 123e4567-e89b-12d3-a456-426614174000 not found or access denied"
}
```

**Solution:** Verify the coupon ID is correct and belongs to your organization.

#### 400 Bad Request - Duplicate Code
**Cause:** Coupon code already exists in your organization

```json
{
  "statusCode": 400,
  "message": "A coupon with code \"SAVE20\" already exists"
}
```

**Solution:** Use a unique coupon code that doesn't already exist.

#### 400 Bad Request - Invalid Discount Type
**Cause:** Missing required fields for discount type

```json
{
  "statusCode": 400,
  "message": "discount_percentage is required when discount_type is percentage"
}
```

**Solution:** Provide the required field for your discount type:
- `discount_percentage` for percentage discounts
- `discount_fixed_amount` for fixed discounts

#### 400 Bad Request - Invalid Dates
**Cause:** valid_from is after expires_at

```json
{
  "statusCode": 400,
  "message": "valid_from must be before expires_at"
}
```

**Solution:** Ensure valid_from date is before expires_at date.

#### 400 Bad Request - Invalid Usage Limit
**Cause:** Missing usage_limit_value when required

```json
{
  "statusCode": 400,
  "message": "usage_limit_value is required when usage_frequency_limit is not \"total\""
}
```

**Solution:** Provide usage_limit_value when using per_customer or per_customer_per_product limits.

---

## Implementation Details

### Architecture

The Discount Coupons API follows a **security-first, merchant-centric** architecture:

1. **Service Role Key**: Uses Supabase service role key to bypass RLS policies
2. **API Key Guard**: Authenticates requests via `ApiKeyGuard`
3. **Organization Filtering**: ALL queries filtered by `organization_id`
4. **RPC Functions**: Uses database functions for all operations
5. **Immutable Design**: Coupons cannot be updated or deleted after creation (use `is_active` to disable)

### RPC Functions Used

1. **get_organization_coupons**: Lists all coupons for an organization
   - Filters by organization_id and environment
   - Returns complete coupon details

2. **get_coupon_details_for_management**: Gets a specific coupon with validation
   - Validates ownership before returning data
   - Used for both get and create operations (to return created coupon)

3. **create_discount_coupon**: Creates new coupon with comprehensive validation
   - Auto-assigns `organization_id`
   - Uppercases coupon code
   - Validates discount type and amounts
   - Validates usage limits
   - Validates dates
   - Enforces unique constraint

4. **get_coupon_performance**: Retrieves performance metrics
   - Calculates total uses
   - Calculates total discount amount
   - Calculates total revenue
   - Calculates average order value

### Security Considerations

#### Multi-Tenancy
Every operation filters by `organization_id` to ensure data isolation:

```typescript
p_organization_id: user.organizationId
```

#### Ownership Validation
All get operations validate the coupon belongs to the requesting merchant's organization before returning data.

#### Code Uniqueness
Coupon codes are automatically uppercased and must be unique per organization (enforced by database constraint).

#### Fields Exposed
All fields are merchant-visible. No admin-only fields exist in the discount_coupons table.

---

## Why Coupons Are Immutable

Discount coupons in the lomi. API are **immutable** (cannot be updated or deleted) by design:

### Reasons:
1. **Audit Trail**: Preserves exact coupon terms for historical transactions
2. **Customer Trust**: Prevents retroactive changes to applied discounts
3. **Analytics**: Maintains accurate performance metrics over time
4. **Simplicity**: Reduces complexity and potential for errors

### How to "Update" a Coupon:
Instead of updating, follow these patterns:

**Pattern 1: Disable and Create New**
```typescript
// Cannot update the coupon code or discount amount
// Instead: create a new coupon with the desired changes
await createCoupon({ code: 'SAVE25', discount_percentage: 25 });

// The old coupon remains in the system for historical tracking
```

**Pattern 2: Use is_active Flag**
```typescript
// To "disable" a coupon, create it as inactive from the start
// or use the database directly to set is_active = false
// (update functionality not exposed via API)
```

**Pattern 3: Expiration Dates**
```typescript
// Set expiration dates when creating coupons
await createCoupon({
  code: 'NEWYEAR2024',
  discount_percentage: 20,
  expires_at: '2024-01-31T23:59:59Z'
});
// Coupon automatically becomes invalid after expiration
```

---

## Validation Rules

### Database Constraints

The discount_coupons table enforces several constraints:

1. **Valid Discount**: Must have either percentage (0-100) OR fixed amount (positive), not both
2. **Valid Dates**: valid_from must be before expires_at (if both specified)
3. **Valid Usage Limit**: If usage_frequency_limit is not "total", usage_limit_value must be positive
4. **Valid Scope**: scope_type must be one of: organization_wide, specific_products, specific_prices
5. **Unique Code**: Code must be unique per organization per environment

### API Validation

The API performs additional validation before calling RPC functions:

- Validates discount_percentage is between 0 and 100
- Validates discount_fixed_amount is positive
- Validates required fields based on discount_type
- Validates required fields based on usage_frequency_limit
- Validates date ordering (valid_from < expires_at)

---

## Protected from Auto-Generation

The Discount Coupons API is manually implemented and protected from auto-generation in `generate-modules.ts`. This allows for:

1. **Custom RPC Integration**: Leverages specialized database functions
2. **Complex Validation**: Implements business rules for discount types and usage limits
3. **Immutable Design**: Enforces read-only operations (list, get, create only)
4. **Performance Endpoint**: Additional endpoint for tracking coupon effectiveness
5. **Enhanced Error Messages**: Clear validation errors for better developer experience

The auto-generation skip is configured in:
```typescript
// apps/api/src/utils/scripts/generate-modules.ts
if (resource.tableName === 'discount_coupons') {
  console.log(`⏩ Skipping discount_coupons (manually implemented with special logic)`);
  continue;
}
```

---

## Best Practices

### Creating Coupons

1. **Use Meaningful Codes**: Choose codes that are easy to remember and communicate
2. **Set Expiration Dates**: Always set expires_at for time-limited promotions
3. **Limit Usage**: Use max_uses to prevent abuse
4. **Target Customers**: Use customer_type to create targeted campaigns
5. **Test First**: Create coupons in test mode before going live

### Monitoring Performance

1. **Track Metrics**: Use the performance endpoint to monitor coupon effectiveness
2. **Check Usage**: Monitor current_uses against max_uses
3. **Analyze ROI**: Compare total_discount_amount vs total_revenue
4. **Adjust Strategy**: Create new coupons based on performance data

### Security

1. **API Key Management**: Rotate API keys regularly
2. **Environment Separation**: Use test mode for development
3. **Rate Limiting**: Respect API rate limits (5000 requests per 15 minutes)
4. **Error Handling**: Properly handle all error responses
5. **Unique Codes**: Generate unique codes to prevent conflicts

---

## Support

For questions or issues with the Discount Coupons API:
- 📧 Email: support@lomi.africa
- 📖 Documentation: https://docs.lomi.africa
- 🐛 Bug Reports: https://github.com/lomi/api/issues

