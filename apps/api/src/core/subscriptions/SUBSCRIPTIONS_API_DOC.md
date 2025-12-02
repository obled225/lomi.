# Subscriptions API

The Subscriptions API provides access to recurring billing subscriptions. Subscriptions are **automatically created by the system** when customers complete payments for recurring products. The API allows you to view subscription details and cancel active subscriptions.

## Features

- ✅ **List Subscriptions** - Retrieve all subscriptions for your organization
- ✅ **Get Subscription** - Fetch detailed information about a specific subscription
- ✅ **Get Customer Subscriptions** - View all subscriptions for a specific customer
- ✅ **Cancel Subscription** - Cancel an active subscription
- ✅ **Pagination** - Efficiently handle large subscription lists
- ❌ **Create Subscription** - Not available (subscriptions are system-generated after successful recurring payments)
- ❌ **Update Subscription** - Not available (price, billing dates, and other fields are system-managed)
- ❌ **Delete Subscription** - Not available (use cancel instead)

## Important: What You CANNOT Modify

The following fields are **system-managed** and cannot be changed via the API:

- ❌ `price_id` - Locked to the original price at subscription creation
- ❌ `product_id` - Cannot change the product
- ❌ `next_billing_date` - Automatically calculated by the system
- ❌ `start_date` - Historical fact, cannot be changed
- ❌ `customer_id` - Cannot transfer subscriptions between customers

The **ONLY modification** allowed is **cancellation**.

## Endpoints

### 1. List Subscriptions

```
GET /subscriptions
```

Retrieves all subscriptions for your organization with pagination.

**Query Parameters:**
- `page` (optional): Page number for pagination (default: 1)
- `pageSize` (optional): Number of items per page (default: 50)

**Response:**
```json
[
  {
    "subscription_id": "123e4567-e89b-12d3-a456-426614174000",
    "organization_id": "789e0123-e89b-12d3-a456-426614174000",
    "product_id": "456e7890-e89b-12d3-a456-426614174000",
    "price_id": "321e4567-e89b-12d3-a456-426614174000",
    "customer_id": "654e7890-e89b-12d3-a456-426614174000",
    "status": "active",
    "start_date": "2024-01-15",
    "end_date": null,
    "next_billing_date": "2024-02-15",
    "metadata": { "notes": "Premium plan" },
    "environment": "live",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```

**RPC Function Used:** `fetch_subscriptions(p_organization_id, p_merchant_id, p_page, p_page_size, p_environment)`

---

### 2. Get Subscription

```
GET /subscriptions/:id
```

Retrieves detailed information about a specific subscription.

**Parameters:**
- `id`: Subscription UUID

**Response:**
```json
{
  "subscription_id": "123e4567-e89b-12d3-a456-426614174000",
  "organization_id": "789e0123-e89b-12d3-a456-426614174000",
  "product_id": "456e7890-e89b-12d3-a456-426614174000",
  "price_id": "321e4567-e89b-12d3-a456-426614174000",
  "customer_id": "654e7890-e89b-12d3-a456-426614174000",
  "status": "active",
  "start_date": "2024-01-15",
  "end_date": null,
  "next_billing_date": "2024-02-15",
  "metadata": { "notes": "Premium plan" },
  "environment": "live",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**RPC Function Used:** `get_customer_subscription(p_subscription_id, p_merchant_id)`

---

### 3. Get Customer Subscriptions

```
GET /subscriptions/customer/:customerId
```

Retrieves all subscriptions for a specific customer.

**Parameters:**
- `customerId`: Customer UUID

**Response:**
```json
[
  {
    "subscription_id": "123e4567-e89b-12d3-a456-426614174000",
    "organization_id": "789e0123-e89b-12d3-a456-426614174000",
    "product_id": "456e7890-e89b-12d3-a456-426614174000",
    "price_id": "321e4567-e89b-12d3-a456-426614174000",
    "customer_id": "654e7890-e89b-12d3-a456-426614174000",
    "status": "active",
    "start_date": "2024-01-15",
    "end_date": null,
    "next_billing_date": "2024-02-15",
    "metadata": { "notes": "Premium plan" },
    "environment": "live",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```

**RPC Function Used:** `fetch_subscriptions_for_customer(p_customer_id, p_environment)`

---

### 4. Cancel Subscription

```
POST /subscriptions/:id/cancel
```

Cancels an active subscription. This is the **ONLY** modification allowed on subscriptions.

**Parameters:**
- `id`: Subscription UUID

**Request Body (Optional):**
```json
{
  "cancellation_reason": "Customer requested cancellation"
}
```

**Response:**
```json
{
  "subscription_id": "123e4567-e89b-12d3-a456-426614174000",
  "organization_id": "789e0123-e89b-12d3-a456-426614174000",
  "product_id": "456e7890-e89b-12d3-a456-426614174000",
  "price_id": "321e4567-e89b-12d3-a456-426614174000",
  "customer_id": "654e7890-e89b-12d3-a456-426614174000",
  "status": "cancelled",
  "start_date": "2024-01-15",
  "end_date": "2024-01-20",
  "next_billing_date": null,
  "metadata": {
    "cancellation_reason": "Customer requested cancellation",
    "cancelled_at": "2024-01-20T14:30:00Z"
  },
  "environment": "live",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-20T14:30:00Z"
}
```

**RPC Function Used:** `cancel_customer_subscription(p_subscription_id, p_merchant_id)`

**What Happens When Cancelled:**
- Status changes to `cancelled`
- `end_date` is set to current date
- `next_billing_date` is cleared
- Future billing is stopped
- Cancellation reason (if provided) is stored in metadata

---

## Authentication

All endpoints require API key authentication via the `x-api-key` header.

```bash
curl -H "x-api-key: your-api-key" https://api.lomi.africa/subscriptions
```

---

## Subscription Statuses

### pending
Subscription created but not yet activated (awaiting first payment).

### active
Subscription is active and billing normally.

### past_due
Payment failed, subscription is past due but not yet cancelled.

### cancelled
Subscription has been cancelled, no future billing.

### trialing
Subscription is in trial period (if applicable).

### paused
Subscription is temporarily paused (if applicable).

---

## How Subscriptions Are Created

Subscriptions are **automatically created** by the system when:

1. Customer completes payment for a **recurring product**
2. Payment is successful (status = `completed`)
3. Product has `product_type = 'recurring'`
4. A price with a billing interval is specified

**You cannot create subscriptions via the API.** Instead, use:
- Checkout sessions with recurring products
- Payment links with recurring products
- Customer portal for recurring purchases

---

## Why Subscriptions Are Mostly Immutable

### Fields You Cannot Change

#### price_id (Locked)
**Why:** Changing the price mid-subscription would create billing inconsistencies and customer confusion.

**Instead:** Cancel the current subscription and have the customer subscribe to the new price.

#### next_billing_date (System-Managed)
**Why:** Automatically calculated based on billing interval (monthly, yearly, etc.).

**Instead:** The system handles billing date calculation. Cancelling sets it to null.

#### start_date (Historical Fact)
**Why:** Represents when the subscription actually started.

**Instead:** This is an immutable historical record.

#### product_id (Locked)
**Why:** Changing the product mid-subscription would be confusing.

**Instead:** Cancel and create a new subscription for the different product.

---

## Example Usage

### TypeScript/JavaScript

```typescript
import axios from 'axios';

const apiKey = 'your-api-key';
const baseURL = 'https://api.lomi.africa';

// List all subscriptions
const listSubscriptions = async () => {
  const response = await axios.get(`${baseURL}/subscriptions`, {
    headers: { 'x-api-key': apiKey },
    params: {
      page: 1,
      pageSize: 50
    }
  });
  return response.data;
};

// Get a specific subscription
const getSubscription = async (subscriptionId: string) => {
  const response = await axios.get(`${baseURL}/subscriptions/${subscriptionId}`, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};

// Get subscriptions for a customer
const getCustomerSubscriptions = async (customerId: string) => {
  const response = await axios.get(`${baseURL}/subscriptions/customer/${customerId}`, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};

// Cancel a subscription
const cancelSubscription = async (subscriptionId: string) => {
  const response = await axios.post(`${baseURL}/subscriptions/${subscriptionId}/cancel`, {
    cancellation_reason: 'Customer requested cancellation'
  }, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};

// Cancel without reason
const cancelSubscriptionSimple = async (subscriptionId: string) => {
  const response = await axios.post(`${baseURL}/subscriptions/${subscriptionId}/cancel`, {}, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};
```

### cURL

```bash
# List all subscriptions
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/subscriptions?page=1&pageSize=50"

# Get a specific subscription
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/subscriptions/123e4567-e89b-12d3-a456-426614174000"

# Get subscriptions for a customer
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/subscriptions/customer/654e7890-e89b-12d3-a456-426614174000"

# Cancel a subscription
curl -X POST -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{"cancellation_reason": "Customer requested cancellation"}' \
  "https://api.lomi.africa/subscriptions/123e4567-e89b-12d3-a456-426614174000/cancel"

# Cancel without reason
curl -X POST -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{}' \
  "https://api.lomi.africa/subscriptions/123e4567-e89b-12d3-a456-426614174000/cancel"
```

### Python

```python
import requests

api_key = 'your-api-key'
base_url = 'https://api.lomi.africa'
headers = {'x-api-key': api_key}

# List all subscriptions
def list_subscriptions(page=1, page_size=50):
    response = requests.get(
        f'{base_url}/subscriptions',
        headers=headers,
        params={
            'page': page,
            'pageSize': page_size
        }
    )
    return response.json()

# Get a specific subscription
def get_subscription(subscription_id):
    response = requests.get(
        f'{base_url}/subscriptions/{subscription_id}',
        headers=headers
    )
    return response.json()

# Get subscriptions for a customer
def get_customer_subscriptions(customer_id):
    response = requests.get(
        f'{base_url}/subscriptions/customer/{customer_id}',
        headers=headers
    )
    return response.json()

# Cancel a subscription
def cancel_subscription(subscription_id, reason=None):
    payload = {}
    if reason:
        payload['cancellation_reason'] = reason
    
    response = requests.post(
        f'{base_url}/subscriptions/{subscription_id}/cancel',
        headers=headers,
        json=payload
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
**Cause:** Subscription doesn't exist or doesn't belong to your organization

```json
{
  "statusCode": 404,
  "message": "Subscription with ID 123e4567-e89b-12d3-a456-426614174000 not found or access denied"
}
```

**Solution:** Verify the subscription ID is correct and belongs to your organization.

---

## Implementation Details

### Architecture

The Subscriptions API follows a **read-mostly, cancel-only** architecture:

1. **Service Role Key**: Uses Supabase service role key to bypass RLS policies
2. **API Key Guard**: Authenticates requests via `ApiKeyGuard`
3. **Organization Filtering**: ALL queries filtered by `organization_id`
4. **RPC Functions**: Uses database functions for all operations
5. **Limited Modifications**: ONLY cancellation allowed, no other updates

### Why Subscriptions Are Mostly Read-Only

Subscriptions are **system-managed** to ensure:

1. **Billing Integrity**: Prevents accidental changes to billing amounts or dates
2. **Customer Trust**: Subscription terms remain consistent
3. **Automated Billing**: System manages billing cycles automatically
4. **Audit Trail**: Complete history of subscription lifecycle
5. **Consistency**: All subscriptions follow the same rules

**How Subscriptions Work:**
1. Customer pays for recurring product → Subscription created
2. System automatically bills on `next_billing_date`
3. Merchant can view and cancel subscriptions
4. System handles renewals, failed payments, and status changes

### RPC Functions Used

1. **fetch_subscriptions**: Lists all subscriptions for organization
   - Pagination built-in
   - Organization filtering enforced
   - Environment filtering (test/live)

2. **get_customer_subscription**: Gets a specific subscription
   - Validates merchant ownership
   - Returns complete subscription details

3. **fetch_subscriptions_for_customer**: Gets all subscriptions for a customer
   - Useful for customer portal integrations
   - Filters by customer_id and environment

4. **cancel_customer_subscription**: Cancels a subscription
   - Validates merchant ownership
   - Sets status to `cancelled`
   - Sets `end_date` to current date
   - Clears `next_billing_date`
   - Stops future billing

### Security Considerations

#### Multi-Tenancy
Every operation validates `organization_id` ownership:

```typescript
p_organization_id: user.organizationId
p_merchant_id: user.merchantId
```

#### Ownership Validation
All operations validate the subscription belongs to the requesting merchant's organization before performing actions.

#### No Price Changes
The API explicitly **does not allow** changing `price_id` to prevent:
- Billing confusion
- Revenue leakage
- Customer disputes
- Audit trail issues

#### No Date Manipulation
The API explicitly **does not allow** changing billing dates to prevent:
- Gaming the billing system
- Revenue timing manipulation
- Inconsistent billing cycles

---

## Subscription Lifecycle

### 1. Creation (Automatic)
```
Customer pays for recurring product
         ↓
System creates subscription
         ↓
Status: active
```

### 2. Active Billing
```
next_billing_date arrives
         ↓
System creates renewal transaction
         ↓
If successful: next_billing_date += billing_interval
If failed: status = past_due
```

### 3. Cancellation (API-Triggered)
```
Merchant calls /subscriptions/:id/cancel
         ↓
Status: cancelled
end_date: today
next_billing_date: null
         ↓
No future billing
```

---

## Protected from Auto-Generation

The Subscriptions API is manually implemented and protected from auto-generation in `generate-modules.ts`. This allows for:

1. **Cancel-Only Updates**: Specific cancellation endpoint instead of general update
2. **System-Managed Fields**: Prevents modification of price, dates, and other locked fields
3. **Customer Filtering**: Additional endpoint for customer-specific subscriptions
4. **Clear Documentation**: Explanation of what can and cannot be modified
5. **Security Validation**: Enhanced ownership checks

The auto-generation skip is configured in:
```typescript
// apps/api/src/utils/scripts/generate-modules.ts
if (resource.tableName === 'subscriptions') {
  console.log(`⏩ Skipping subscriptions (manually implemented with special logic)`);
  continue;
}
```

---

## Best Practices

### Viewing Subscriptions
1. **Paginate Results**: Use pagination for large subscription lists
2. **Filter by Customer**: Use customer endpoint for customer-specific views
3. **Cache Subscription Lists**: Cache results for frequently accessed data
4. **Monitor Status**: Track status changes (active → past_due → cancelled)

### Cancelling Subscriptions
1. **Provide Reasons**: Always include cancellation_reason for tracking
2. **Confirm Before Cancel**: Implement confirmation flows in your UI
3. **Notify Customers**: Send cancellation confirmation emails
4. **Track Cancellations**: Monitor cancellation reasons for insights
5. **Handle Gracefully**: Allow customers to resubscribe easily

### Understanding Billing
1. **next_billing_date**: System-calculated, don't rely on it for exact timing
2. **Billing Intervals**: Defined by the price's billing_interval
3. **Failed Payments**: Status changes to past_due, not cancelled
4. **Trial Periods**: Status may be trialing before active

### Security
1. **API Key Management**: Rotate API keys regularly
2. **Environment Separation**: Use test mode for development
3. **Rate Limiting**: Respect API rate limits (5000 requests per 15 minutes)
4. **Error Handling**: Properly handle all error responses
5. **Audit Cancellations**: Log all cancellation requests

---

## Common Use Cases

### Customer Self-Service Cancellation
```typescript
// 1. Get customer's subscriptions
const subscriptions = await getCustomerSubscriptions(customerId);

// 2. Let customer choose which to cancel
const subscription = subscriptions.find(s => s.status === 'active');

// 3. Cancel with reason
await cancelSubscription(subscription.subscription_id, 'No longer needed');
```

### Subscription Health Monitoring
```typescript
// Get all subscriptions
const subscriptions = await listSubscriptions();

// Calculate metrics
const activeCount = subscriptions.filter(s => s.status === 'active').length;
const pastDueCount = subscriptions.filter(s => s.status === 'past_due').length;
const churnRate = subscriptions.filter(s => s.status === 'cancelled').length / subscriptions.length;

console.log({ activeCount, pastDueCount, churnRate });
```

### Product-Specific Subscription Analysis
```typescript
// Get all subscriptions
const subscriptions = await listSubscriptions();

// Group by product
const byProduct = subscriptions.reduce((acc, sub) => {
  acc[sub.product_id] = (acc[sub.product_id] || 0) + 1;
  return acc;
}, {});

console.log('Subscriptions by product:', byProduct);
```

---

## Why There's No General Update Endpoint

You were right to question whether a subscriptions API is worth it. We've intentionally **NOT implemented a general update endpoint** (PATCH /subscriptions/:id) because:

### Dangerous Operations We're Preventing:
- ❌ Changing `price_id` → Would break billing integrity
- ❌ Changing `next_billing_date` → Would allow gaming the system
- ❌ Changing `start_date` → Would falsify historical records
- ❌ Changing `product_id` → Would create inconsistent subscriptions
- ❌ Changing `customer_id` → Would transfer subscriptions incorrectly

### What We Do Allow:
- ✅ **View** subscriptions (list, get)
- ✅ **Cancel** subscriptions (specific, validated operation)
- ✅ **Add metadata** (notes, cancellation reasons)

This approach is **much safer** than exposing a general update endpoint with complex validation rules.

---

## Alternative: What If You Need To...

### Change Subscription Price
**❌ NOT SUPPORTED via API**

**Instead:**
1. Cancel the existing subscription
2. Have customer subscribe to the new price
3. Or handle this through your customer portal/dashboard

### Pause a Subscription
**❌ NOT SUPPORTED via API**

**Instead:**
- Cancel the subscription
- Customer can resubscribe when ready

### Change Billing Date
**❌ NOT SUPPORTED via API**

**Reason:** Billing dates are system-calculated based on the billing interval and cannot be manually changed.

---

## Support

For questions or issues with the Subscriptions API:
- 📧 Email: support@lomi.africa
- 📖 Documentation: https://docs.lomi.africa
- 🐛 Bug Reports: https://github.com/lomi/api/issues

