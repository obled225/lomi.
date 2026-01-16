# Products API

The Products API allows you to manage your product catalog programmatically. Products represent the items or services you sell, and each product has one or more prices. Products and prices are tightly coupled - you cannot have a product without at least one price.

## Features

- ✅ **List Products** - Retrieve all products with embedded prices
- ✅ **Get Product** - Fetch detailed information about a specific product
- ✅ **Create Product** - Create a new product with one or more prices atomically
- ✅ **Add Price** - Add additional pricing options to existing products
- ✅ **Set Default Price** - Change which price is the default
- ❌ **Update Product** - Not available (products are mostly immutable for billing integrity)
- ❌ **Delete Product** - Not available (use soft delete via dashboard instead)
- ❌ **Update Price** - Not available (prices are immutable once created)

## Product Types

### one_time
Single purchase products. Customers pay once and receive the product/service.

**Use cases**: Physical products, digital downloads, one-time services, event tickets

### recurring
Subscription-based products. Customers are billed automatically at regular intervals.

**Use cases**: Monthly subscriptions, annual memberships, recurring services

**Additional fields**:
- `billing_interval`: day, week, month, year
- `failed_payment_action`: pause, cancel, retry
- `charge_day`: Day of month to charge (1-31)
- `first_payment_type`: initial, non_initial, prorated
- `trial_enabled`: Whether to enable trial period
- `trial_period_days`: Length of trial in days

### usage_based
Metered billing based on actual usage. Customers are charged based on consumption.

**Use cases**: API calls, storage space, bandwidth, compute hours

**Additional fields**:
- `usage_aggregation`: sum, max, last_during_period, last_ever
- `usage_unit`: api_calls, gb, seats, hours, etc.

---

## Endpoints

### 1. List Products

```
GET /products
```

Retrieves all products for your organization with pagination. Each product includes embedded prices and fees.

**Query Parameters:**
- `isActive` (optional): Filter by active status (true/false)
- `limit` (optional): Number of results to return (default: 15)
- `offset` (optional): Offset for pagination (default: 0)

**Response:**
```json
[
  {
    "product_id": "123e4567-e89b-12d3-a456-426614174000",
    "organization_id": "789e0123-e89b-12d3-a456-426614174000",
    "name": "Premium Subscription",
    "description": "Access to all premium features",
    "product_type": "recurring",
    "images": ["https://example.com/image.png"],
    "is_active": true,
    "display_on_storefront": true,
    "metadata": { "category": "subscription" },
    "failed_payment_action": "pause",
    "charge_day": 1,
    "first_payment_type": "initial",
    "trial_enabled": false,
    "trial_period_days": null,
    "usage_aggregation": null,
    "usage_unit": null,
    "environment": "live",
    "prices": [
      {
        "price_id": "321e4567-e89b-12d3-a456-426614174000",
        "amount": 10000.0,
        "currency_code": "XOF",
        "billing_interval": "month",
        "pricing_model": "standard",
        "minimum_amount": null,
        "maximum_amount": null,
        "is_active": true,
        "is_default": true,
        "metadata": null,
        "created_at": "2024-01-15T10:30:00Z",
        "updated_at": "2024-01-15T10:30:00Z"
      }
    ],
    "fees": [],
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```

**RPC Function Used:** `fetch_products(p_merchant_id, p_organization_id, p_is_active, p_limit, p_offset, p_environment)`

---

### 2. Get Product

```
GET /products/:id
```

Retrieves detailed information about a specific product, including all prices and fees.

**Parameters:**
- `id`: Product UUID

**Response:**
```json
{
  "product_id": "123e4567-e89b-12d3-a456-426614174000",
  "organization_id": "789e0123-e89b-12d3-a456-426614174000",
  "name": "Premium Subscription",
  "description": "Access to all premium features",
  "product_type": "recurring",
  "images": ["https://example.com/image.png"],
  "is_active": true,
  "display_on_storefront": true,
  "metadata": { "category": "subscription" },
  "failed_payment_action": "pause",
  "charge_day": 1,
  "first_payment_type": "initial",
  "trial_enabled": false,
  "trial_period_days": null,
  "usage_aggregation": null,
  "usage_unit": null,
  "environment": "live",
  "prices": [
    {
      "price_id": "321e4567-e89b-12d3-a456-426614174000",
      "amount": 10000.0,
      "currency_code": "XOF",
      "billing_interval": "month",
      "pricing_model": "standard",
      "minimum_amount": null,
      "maximum_amount": null,
      "is_active": true,
      "is_default": true,
      "metadata": null,
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "fees": [],
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

---

### 3. Create Product

```
POST /products
```

Creates a new product with one or more prices. The product and all prices are created atomically in a single transaction.

**Request Body:**
```json
{
  "name": "Premium Subscription",
  "description": "Access to all premium features",
  "product_type": "recurring",
  "images": ["https://example.com/image.png"],
  "is_active": true,
  "display_on_storefront": true,
  "prices": [
    {
      "amount": 10000.0,
      "currency_code": "XOF",
      "billing_interval": "month",
      "pricing_model": "standard",
      "is_default": true
    },
    {
      "amount": 100000.0,
      "currency_code": "XOF",
      "billing_interval": "year",
      "pricing_model": "standard",
      "is_default": false
    }
  ],
  "metadata": { "category": "subscription" },
  "failed_payment_action": "pause",
  "charge_day": 1,
  "first_payment_type": "initial",
  "trial_enabled": false
}
```

**Response:**
Returns the created product with all prices embedded (same format as GET /products/:id).

**RPC Function Used:** `create_product(...)`

**Important Notes:**
- At least one price is required
- If no price is marked as `is_default: true`, the first price becomes the default
- A product can have a maximum of 3 active prices
- For `pay_what_you_want` pricing, `minimum_amount` is required

---

### 4. Add Price to Product

```
POST /products/:id/prices
```

Adds an additional pricing option to an existing product. Useful for offering multiple tiers, currencies, or billing intervals.

**Parameters:**
- `id`: Product UUID

**Request Body:**
```json
{
  "amount": 50000.0,
  "currency_code": "USD",
  "billing_interval": "month",
  "pricing_model": "standard",
  "is_default": false,
  "metadata": { "tier": "enterprise" }
}
```

**Response:**
```json
{
  "price_id": "654e7890-e89b-12d3-a456-426614174000",
  "amount": 50000.0,
  "currency_code": "USD",
  "billing_interval": "month",
  "pricing_model": "standard",
  "minimum_amount": null,
  "maximum_amount": null,
  "is_active": true,
  "is_default": false,
  "metadata": { "tier": "enterprise" },
  "created_at": "2024-01-20T14:30:00Z",
  "updated_at": "2024-01-20T14:30:00Z"
}
```

**RPC Function Used:** `create_price(...)`

**Limitations:**
- Maximum of 3 active prices per product
- Cannot modify existing prices (immutable for billing integrity)
- Billing interval must match product type

---

### 5. Set Default Price

```
POST /products/:id/prices/:priceId/set-default
```

Sets a specific price as the default for a product. The previous default is automatically unset.

**Parameters:**
- `id`: Product UUID
- `priceId`: Price UUID

**Response:**
Returns the updated product with all prices (same format as GET /products/:id).

**RPC Function Used:** `set_default_price(p_price_id, p_product_id)`

---

## Authentication

All endpoints require API key authentication via the `x-api-key` header.

```bash
curl -H "x-api-key: your-api-key" https://api.lomi.africa/products
```

---

## Pricing Models

### standard
Fixed price. Customer pays the exact amount.

```json
{
  "amount": 10000.0,
  "pricing_model": "standard"
}
```

### pay_what_you_want
Customer chooses how much to pay within defined boundaries.

```json
{
  "amount": 10000.0,
  "pricing_model": "pay_what_you_want",
  "minimum_amount": 5000.0,
  "maximum_amount": 50000.0
}
```

**Requirements:**
- `minimum_amount` is required
- `maximum_amount` is optional
- `amount` is the suggested/default price

### tiered
Different prices for different usage tiers (future enhancement).

---

## Why Products Are Mostly Immutable

### Core Fields Are Locked
Once a product is created, you **cannot update** most fields via the API:
- ❌ `name`, `description`, `product_type`
- ❌ `failed_payment_action`, `charge_day`
- ❌ Any price amounts

### Why?
1. **Billing Integrity**: Transactions reference products and prices. Changing them breaks historical records.
2. **Subscription Consistency**: Active subscriptions are tied to specific product configurations.
3. **Audit Trail**: Complete history of what was sold and when.
4. **Customer Trust**: Subscription terms remain consistent.

### What You CAN Do
Instead of updating, use these patterns:

**Change Price:**
1. Add a new price with `POST /products/:id/prices`
2. Set it as default with `POST /products/:id/prices/:priceId/set-default`
3. Optionally deactivate the old price via dashboard

**Change Product Details:**
- Use the dashboard to update non-critical fields
- Or create a new product for significant changes

**Retire Product:**
- Set `is_active: false` via dashboard
- This hides it from storefront but preserves history

---

## Example Usage

### TypeScript/JavaScript

```typescript
import axios from 'axios';

const apiKey = 'your-api-key';
const baseURL = 'https://api.lomi.africa';

// List all products
const listProducts = async () => {
  const response = await axios.get(`${baseURL}/products`, {
    headers: { 'x-api-key': apiKey },
    params: {
      isActive: true,
      limit: 20,
      offset: 0
    }
  });
  return response.data;
};

// Get a specific product
const getProduct = async (productId: string) => {
  const response = await axios.get(`${baseURL}/products/${productId}`, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};

// Create a product with prices
const createProduct = async () => {
  const response = await axios.post(`${baseURL}/products`, {
    name: 'Premium Plan',
    description: 'All features included',
    product_type: 'recurring',
    display_on_storefront: true,
    prices: [
      {
        amount: 10000,
        currency_code: 'XOF',
        billing_interval: 'month',
        is_default: true
      },
      {
        amount: 100000,
        currency_code: 'XOF',
        billing_interval: 'year'
      }
    ],
    failed_payment_action: 'pause',
    first_payment_type: 'initial'
  }, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};

// Add a new price to existing product
const addPrice = async (productId: string) => {
  const response = await axios.post(`${baseURL}/products/${productId}/prices`, {
    amount: 50000,
    currency_code: 'USD',
    billing_interval: 'month',
    is_default: false
  }, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};

// Set a price as default
const setDefaultPrice = async (productId: string, priceId: string) => {
  const response = await axios.post(
    `${baseURL}/products/${productId}/prices/${priceId}/set-default`,
    {},
    { headers: { 'x-api-key': apiKey } }
  );
  return response.data;
};
```

### cURL

```bash
# List all products
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/products?isActive=true&limit=20"

# Get a specific product
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/products/123e4567-e89b-12d3-a456-426614174000"

# Create a product
curl -X POST -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Premium Plan",
    "product_type": "recurring",
    "prices": [
      {
        "amount": 10000,
        "currency_code": "XOF",
        "billing_interval": "month",
        "is_default": true
      }
    ],
    "failed_payment_action": "pause"
  }' \
  "https://api.lomi.africa/products"

# Add a new price
curl -X POST -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 50000,
    "currency_code": "USD",
    "billing_interval": "month"
  }' \
  "https://api.lomi.africa/products/123e4567-e89b-12d3-a456-426614174000/prices"

# Set default price
curl -X POST -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/products/123e4567-e89b-12d3-a456-426614174000/prices/321e4567-e89b-12d3-a456-426614174000/set-default"
```

### Python

```python
import requests

api_key = 'your-api-key'
base_url = 'https://api.lomi.africa'
headers = {'x-api-key': api_key}

# List all products
def list_products(is_active=None, limit=20, offset=0):
    params = {'limit': limit, 'offset': offset}
    if is_active is not None:
        params['isActive'] = is_active
    
    response = requests.get(
        f'{base_url}/products',
        headers=headers,
        params=params
    )
    return response.json()

# Get a specific product
def get_product(product_id):
    response = requests.get(
        f'{base_url}/products/{product_id}',
        headers=headers
    )
    return response.json()

# Create a product
def create_product():
    payload = {
        'name': 'Premium Plan',
        'product_type': 'recurring',
        'display_on_storefront': True,
        'prices': [
            {
                'amount': 10000,
                'currency_code': 'XOF',
                'billing_interval': 'month',
                'is_default': True
            }
        ],
        'failed_payment_action': 'pause',
        'first_payment_type': 'initial'
    }
    
    response = requests.post(
        f'{base_url}/products',
        headers=headers,
        json=payload
    )
    return response.json()

# Add a new price
def add_price(product_id):
    payload = {
        'amount': 50000,
        'currency_code': 'USD',
        'billing_interval': 'month',
        'is_default': False
    }
    
    response = requests.post(
        f'{base_url}/products/{product_id}/prices',
        headers=headers,
        json=payload
    )
    return response.json()

# Set default price
def set_default_price(product_id, price_id):
    response = requests.post(
        f'{base_url}/products/{product_id}/prices/{price_id}/set-default',
        headers=headers
    )
    return response.json()
```

---

## Error Handling

### Common Errors

#### 400 Bad Request
**Cause:** Invalid input or validation error

```json
{
  "statusCode": 400,
  "message": "A product can have a maximum of 3 active prices"
}
```

**Solutions:**
- Verify all required fields are provided
- Check that `minimum_amount` is provided for pay_what_you_want
- Ensure product doesn't exceed 3 active prices
- Validate `charge_day` is between 1-31

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
**Cause:** Product doesn't exist or doesn't belong to your organization

```json
{
  "statusCode": 404,
  "message": "Product with ID 123e4567-e89b-12d3-a456-426614174000 not found or access denied"
}
```

**Solution:** Verify the product ID is correct and belongs to your organization.

---

## Best Practices

### Creating Products

1. **Provide Complete Information**: Include name, description, and at least one price
2. **Use Descriptive Names**: Help customers understand what they're buying
3. **Set Appropriate Defaults**: Mark your primary price as `is_default: true`
4. **Include Images**: Product images improve conversion rates
5. **Use Metadata**: Store additional product information for your own tracking

### Managing Prices

1. **Don't Over-Complicate**: Most products only need 1-2 prices
2. **Use Billing Intervals Wisely**: Offer annual pricing for subscriptions (better retention)
3. **Set Reasonable Minimums**: For pay_what_you_want, ensure minimums cover costs
4. **Version Prices**: Use metadata to track price versions/tiers

### Multi-Currency Support

1. **Create Separate Prices**: One price per currency
2. **Consider Exchange Rates**: Update prices when rates change significantly
3. **Default Currency**: Set your primary currency's price as default

### Security

1. **API Key Management**: Rotate API keys regularly
2. **Environment Separation**: Use test mode for development
3. **Rate Limiting**: Respect API rate limits (5000 requests per 15 minutes)
4. **Error Handling**: Properly handle all error responses
5. **Validate Input**: Always validate data before sending to API

---

## Common Use Cases

### Bulk Product Import
```typescript
const products = [
  { name: 'Basic Plan', amount: 5000, interval: 'month' },
  { name: 'Pro Plan', amount: 10000, interval: 'month' },
  { name: 'Enterprise Plan', amount: 50000, interval: 'month' }
];

for (const product of products) {
  await createProduct({
    name: product.name,
    product_type: 'recurring',
    prices: [{
      amount: product.amount,
      currency_code: 'XOF',
      billing_interval: product.interval,
      is_default: true
    }]
  });
}
```

### Multi-Tier Pricing
```typescript
await createProduct({
  name: 'Premium Subscription',
  product_type: 'recurring',
  prices: [
    {
      amount: 10000,
      currency_code: 'XOF',
      billing_interval: 'month',
      is_default: true,
      metadata: { tier: 'basic' }
    },
    {
      amount: 20000,
      currency_code: 'XOF',
      billing_interval: 'month',
      metadata: { tier: 'pro' }
    },
    {
      amount: 50000,
      currency_code: 'XOF',
      billing_interval: 'month',
      metadata: { tier: 'enterprise' }
    }
  ]
});
```

### Annual Discount
```typescript
// Create monthly and annual prices, with annual discounted
await createProduct({
  name: 'Pro Plan',
  product_type: 'recurring',
  prices: [
    {
      amount: 10000,
      currency_code: 'XOF',
      billing_interval: 'month',
      is_default: true
    },
    {
      amount: 100000, // 2 months free
      currency_code: 'XOF',
      billing_interval: 'year'
    }
  ]
});
```

---

## Architecture

### Atomic Operations
Products and prices are created atomically using PostgreSQL transactions. If any part fails, the entire operation is rolled back.

### RPC Functions Used
1. **create_product**: Atomic product + prices creation
2. **fetch_products**: List products with embedded prices
3. **create_price**: Add new price to existing product
4. **set_default_price**: Update default price
5. **validate_price_count**: Trigger to enforce 3-price maximum

### Security Model
1. **API Key Guard**: Authenticates all requests
2. **Organization Filtering**: All queries filtered by `organization_id`
3. **Merchant Validation**: Products created by `merchant_id`
4. **Service Role**: Uses Supabase service role key for elevated permissions

---

## Limitations

### Price Limits
- Maximum of 3 active prices per product
- Enforced by database trigger `check_price_count`

### Immutability
- Products cannot be updated via API
- Prices cannot be modified once created
- Use dashboard for archiving/deactivating

### Validation
- `charge_day` must be 1-31
- `trial_period_days` must be > 0 if set
- Pay-what-you-want requires `minimum_amount`
- Maximum amount must be >= minimum amount

---

## Support

For questions or issues with the Products API:
- 📧 Email: support@lomi.africa
- 📖 Documentation: https://docs.lomi.africa
- 🐛 Bug Reports: https://github.com/lomi/api/issues

