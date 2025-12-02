# Organizations API

The Organizations API enables merchants to consult their business performance metrics including MRR (Monthly Recurring Revenue), ARR (Annual Recurring Revenue), and other key performance indicators. All metrics are **pre-calculated** in the database and updated automatically via triggers.

## Features

- ✅ View organization details and settings
- ✅ Get comprehensive business metrics (MRR, ARR, ...)
- ✅ View total revenue and transaction counts
- ✅ View customer and merchant counts
- ✅ Multi-currency support (XOF, USD, EUR)
- ✅ Pre-calculated metrics for fast response times

## Important Notes

⚠️ **All metrics are READ-ONLY** - This API only provides **fetch/get** operations. Metrics are automatically calculated and updated by database triggers when transactions occur.

🔒 **Admin-only functions excluded** - Calculation and recalculation endpoints are admin-only and not exposed in the merchant API.

## Endpoints

### 1. Get Organization Details
```
GET /organizations
```
Returns the authenticated merchant's organization details including all metrics.

**Response:**
```json
[
  {
    "organization_id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "Acme Inc",
    "email": "contact@acme.com",
    "phone_number": "+221771234567",
    "verification_status": "verified",
    "website_url": "https://acme.com",
    "logo_url": "https://cdn.lomi.africa/logos/acme.png",
    "status": "active",
    "default_currency": "XOF",
    "slug": "acme-inc",
    "storefront_enabled": true,
    "total_revenue": 250000.00,
    "total_transactions": 1234,
    "total_merchants": 5,
    "total_customers": 567,
    "mrr": 50000.00,
    "arr": 600000.00,
    "employee_number": "10-50",
    "industry": "Technology",
    "is_starter_business": false,
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  }
]
```

### 2. Get Organization by ID
```
GET /organizations/:id
```
Returns organization details by ID (must match the authenticated merchant's organization).

**Response:** Same as single organization object above

### 3. Get Comprehensive Metrics
```
GET /organizations/metrics
```
Get all key performance metrics in one call. All values are **pre-calculated** in the database.

**Response:**
```json
{
  "mrr": 50000.00,
  "arr": 600000.00,
  "total_revenue": 250000.00,
  "total_transactions": 1234,
  "total_customers": 567,
  "currency_code": "XOF",
  "calculated_at": "2024-01-01T00:00:00Z"
}
```


**RPC Function Used:** `fetch_organization_details(p_merchant_id, p_organization_id)`

## Authentication

All endpoints require API key authentication via the `x-api-key` header.

```bash
curl -H "x-api-key: your-api-key-here" \
  https://api.lomi.africa/organizations/metrics
```

## Implementation Details

### Architecture

The Organizations API follows a clean architecture pattern:

```
organizations/
├── organizations.controller.ts    # HTTP endpoints and request handling
├── organizations.service.ts        # Business logic and RPC calls
├── organizations.module.ts         # NestJS module configuration
└── dto/
    ├── organization-response.dto.ts         # Full organization details
    └── organization-metrics-response.dto.ts # All metrics in one response
```

### RPC Functions vs Direct Queries

This module uses the `fetch_organization_details` RPC function which returns pre-calculated metrics from the database. Metrics are automatically updated by database triggers when:
- Transactions are completed
- Subscriptions are created/renewed
- Customers are added

**RPC Function Used:**
- `fetch_organization_details` - Get comprehensive organization data with pre-calculated metrics

**Direct Queries Used:**
- List organization (simple lookup)
- Get organization by ID (simple lookup)

### Multi-Tenancy

All endpoints enforce organization-level isolation:
- Merchants can only access their own organization data
- Attempting to access another organization returns 404
- Enforced via `organization_id` matching in service layer

### Business Metrics Explained

All metrics are **automatically calculated** and stored in the database:

#### MRR (Monthly Recurring Revenue)
- Sum of all active recurring subscription revenues, normalized to monthly
- Formula: Sum of (subscription_amount × billing_frequency_multiplier)
- Excludes one-time purchases
- **Updated automatically** when subscriptions change
- ✅ **Available in API**

#### ARR (Annual Recurring Revenue)
- Annualized value of recurring revenue
- Formula: MRR × 12
- Represents predictable annual revenue from subscriptions
- **Updated automatically** when MRR changes
- ✅ **Available in API**

## Error Handling

The service handles common error cases:

```typescript
// Organization not found or access denied
{
  "statusCode": 404,
  "message": "Organization not found or access denied"
}

// Unauthorized access
{
  "statusCode": 401,
  "message": "Invalid API key"
}
```

## Example Usage

### TypeScript/JavaScript

```typescript
import axios from 'axios';

const apiKey = 'your-api-key-here';
const baseURL = 'https://api.lomi.africa';

// Get organization details
const org = await axios.get(`${baseURL}/organizations`, {
  headers: { 'x-api-key': apiKey }
});

// Get comprehensive metrics
const metrics = await axios.get(`${baseURL}/organizations/metrics`, {
  headers: { 'x-api-key': apiKey }
});
console.log('MRR:', metrics.data.mrr);
console.log('ARR:', metrics.data.arr);
console.log('Total Revenue:', metrics.data.total_revenue);
```

### cURL

```bash
# Get organization details
curl -H "x-api-key: your-api-key" \
  https://api.lomi.africa/organizations

# Get all metrics
curl -H "x-api-key: your-api-key" \
  https://api.lomi.africa/organizations/metrics
```

### Python

```python
import requests

api_key = 'your-api-key-here'
base_url = 'https://api.lomi.africa'
headers = {'x-api-key': api_key}

# Get comprehensive metrics
response = requests.get(
    f'{base_url}/organizations/metrics',
    headers=headers
)
metrics = response.json()
print(f"MRR: {metrics['mrr']}")
print(f"ARR: {metrics['arr']}")
print(f"Total Revenue: {metrics['total_revenue']}")
```

## Use Cases

### 1. Dashboard Analytics
Fetch comprehensive metrics to display on your dashboard:

```typescript
const metrics = await api.get('/organizations/metrics');
// Display MRR, ARR, revenue, customer counts
```

### 2. Financial Reporting
Get current metrics for financial reports:

```typescript
const org = await api.get('/organizations');
const metrics = await api.get('/organizations/metrics');
// Include in financial reports
```

### 3. Business Intelligence
Track business performance over time:

```typescript
const today = await api.get('/organizations/metrics');
// Store snapshot for historical comparison
await db.store({ date: new Date(), metrics: today });
```

## Related Database Functions

See [`apps/api/.cursor/guides/functions-list.md`](../../.cursor/guides/functions-list.md) for complete list of database functions.

**Organization-related functions (read-only):**
- `fetch_organization_details` - Get comprehensive organization data with metrics

**Admin-only functions (not exposed in API):**
- `calculate_organization_metrics` - Recalculate all metrics (admin)
- `calculate_organization_mrr` - Calculate MRR (admin)
- `update_organization_mrr_trigger` - Auto-update MRR trigger

## Protected from Auto-Generation

This module is manually implemented and protected from auto-generation. The `generate-modules.ts` script skips the `organizations` table to preserve custom RPC-based implementation.

```typescript
// In generate-modules.ts
if (
  resource.tableName === 'checkout_sessions' ||
  resource.tableName === 'webhooks' ||
  resource.tableName === 'accounts' ||
  resource.tableName === 'organizations'  // ← Protected
) {
  console.log(`⏩ Skipping ${resource.tableName} (manually implemented)`);
  continue;
}
```

## Why Pre-Calculated Metrics?

### Advantages:
✅ **Fast response times** - No expensive calculations on read
✅ **Consistent values** - Same result every time until data changes
✅ **Database-managed** - Triggers ensure metrics are always up-to-date
✅ **Reduced API complexity** - No calculation parameters needed

### How They Update:
Metrics are automatically recalculated when:
- ✅ A transaction is completed
- ✅ A subscription is created or renewed
- ✅ A refund is processed
- ✅ Customer data changes

## Best Practices

### 1. Cache Responses
Since metrics don't change frequently, cache API responses:

```typescript
// Cache metrics for 5 minutes
const cachedMetrics = await cache.get('org:metrics');
if (!cachedMetrics) {
  const metrics = await api.get('/organizations/metrics');
  await cache.set('org:metrics', metrics, { ttl: 300 });
}
```

### 2. Use Webhooks for Updates
Instead of polling, listen to webhook events:

```typescript
// Subscribe to transaction.completed webhook
// When received, invalidate cache and refetch metrics
webhook.on('transaction.completed', async () => {
  await cache.delete('org:metrics');
  const freshMetrics = await api.get('/organizations/metrics');
});
```

### 3. Display Currency Clearly
Always show the currency code with metrics:

```typescript
const { mrr, currency_code } = await api.get('/organizations/metrics');
console.log(`MRR: ${mrr.toLocaleString()} ${currency_code}`);
// Output: MRR: 50,000 XOF
```

## Next Steps

Future enhancements:
- [ ] Add metric comparison endpoints (month-over-month, year-over-year)
- [ ] Implement metric history tracking
- [ ] Add cohort analysis
- [ ] Support metric export (CSV, PDF)
- [ ] Add metric webhooks for significant changes
