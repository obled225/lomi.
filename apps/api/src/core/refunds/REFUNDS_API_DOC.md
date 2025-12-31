# Refunds API Documentation

## Overview

The Refunds API allows you to refund completed transactions. All refunds are processed asynchronously by the original payment provider (Wave, SPI, Stripe, etc.) and status updates are sent via webhooks. Both full and partial refunds are supported.

**Important:** Refunds are **initiated** immediately but **processed asynchronously**. Processing time and success depend on the original payment provider.

## Base URL

```
https://api.lomi.africa/refunds
```

## Authentication

All requests require API key authentication via the `Authorization` header:

```
Authorization: Bearer your_api_key_here
```

## Endpoints

### 1. Initiate Refund

Initiate a refund for a completed transaction.

**Endpoint:** `POST /refunds`

**Request Body:**

```json
{
  "transaction_id": "123e4567-e89b-12d3-a456-426614174000",
  "amount": 5000.00,
  "reason": "Customer requested refund",
  "metadata": {
    "support_ticket_id": "TICKET-123",
    "refund_type": "full"
  }
}
```

**Field Descriptions:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `transaction_id` | UUID | Yes | Transaction ID to refund |
| `amount` | number | Yes | Refund amount (≤ transaction amount) |
| `reason` | string | No | Reason for refund |
| `metadata` | object | No | Additional context |

**Response:** `201 Created`

```json
{
  "refund_id": "refund-abc123-...",
  "transaction_id": "123e4567-...",
  "amount": 5000.00,
  "refunded_amount": 5000.00,
  "fee_amount": 0,
  "reason": "Customer requested refund",
  "status": "pending",
  "metadata": {
    "support_ticket_id": "TICKET-123",
    "refund_type": "full"
  },
  "environment": "live",
  "created_at": "2024-01-15T10:00:00Z",
  "updated_at": "2024-01-15T10:00:00Z"
}
```

**Important Notes:**

- ✅ Returns immediately with `status: "pending"`
- 🔄 Actual refund processed asynchronously by provider
- 📬 Status updates sent via webhooks
- ⏱️ Processing time: Minutes to days (varies by provider)
- 💰 Refund amount credited back to customer
- ✂️ Supports partial refunds (amount < transaction amount)

---

### 2. List Refunds

Retrieve all refunds with optional filtering.

**Endpoint:** `GET /refunds`

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string | No | Filter by status: `pending`, `completed`, `failed`, `cancelled` |
| `startDate` | string | No | Filter by start date (ISO 8601) |
| `endDate` | string | No | Filter by end date (ISO 8601) |
| `limit` | integer | No | Results per page (default: 50) |
| `offset` | integer | No | Pagination offset (default: 0) |

**Example Request:**

```bash
GET /refunds?status=completed&limit=20&offset=0
```

**Response:** `200 OK`

```json
{
  "data": [
    {
      "refund_id": "refund-abc123-...",
      "transaction_id": "123e4567-...",
      "amount": 5000.00,
      "refunded_amount": 5000.00,
      "status": "completed",
      "reason": "Customer requested refund",
      "transactions": {
        "organization_id": "org-...",
        "gross_amount": 10000.00,
        "currency_code": "XOF",
        "customer_id": "cust-..."
      },
      "created_at": "2024-01-15T10:00:00Z",
      "updated_at": "2024-01-15T10:05:00Z"
    }
  ],
  "total": 45,
  "limit": 20,
  "offset": 0
}
```

---

### 3. Get Refund by ID

Retrieve detailed information about a specific refund.

**Endpoint:** `GET /refunds/:id`

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | UUID | Yes | Refund ID |

**Response:** `200 OK`

```json
{
  "refund_id": "refund-abc123-...",
  "transaction_id": "123e4567-...",
  "amount": 5000.00,
  "refunded_amount": 5000.00,
  "fee_amount": 0,
  "reason": "Customer requested refund",
  "status": "completed",
  "metadata": {
    "support_ticket_id": "TICKET-123",
    "provider_refund_id": "wave-refund-456"
  },
  "transactions": {
    "organization_id": "org-...",
    "gross_amount": 10000.00,
    "currency_code": "XOF",
    "customer_id": "cust-..."
  },
  "environment": "live",
  "created_at": "2024-01-15T10:00:00Z",
  "updated_at": "2024-01-15T10:05:00Z"
}
```

**Error Response:** `404 Not Found`

```json
{
  "statusCode": 404,
  "message": "Refund with ID refund-abc123 not found or access denied"
}
```

---

## Refund Status

Refunds go through the following statuses:

| Status | Description | Next Steps |
|--------|-------------|------------|
| `pending` | Initiated, awaiting provider processing | Wait for webhook |
| `completed` | Successfully refunded to customer | None - customer received funds |
| `failed` | Refund failed | Check reason, contact support if needed |
| `cancelled` | Refund cancelled before processing | None |

### Status Flow

```
pending → completed (success)
pending → failed (provider error)
pending → cancelled (manual cancellation)
```

---

## Refund Types

### Full Refund

Refund the entire transaction amount:

```json
{
  "transaction_id": "tx-123",
  "amount": 10000.00,
  "reason": "Order cancelled",
  "metadata": {
    "refund_type": "full"
  }
}
```

### Partial Refund

Refund part of the transaction amount:

```json
{
  "transaction_id": "tx-123",
  "amount": 5000.00,
  "reason": "Partial return of items",
  "metadata": {
    "refund_type": "partial",
    "items_returned": 2
  }
}
```

**Note:** Multiple partial refunds are supported until the total refunded amount equals the original transaction amount.

---

## Validation Rules

### Pre-Refund Checks

Before initiating a refund, the API validates:

1. **Transaction Exists**: Transaction must exist and belong to your organization
2. **Transaction Completed**: Only completed transactions can be refunded
3. **Amount Valid**: Refund amount ≤ (transaction amount - previously refunded amount)
4. **Transaction Not Expired**: Some providers have refund windows (e.g., 90 days)

### Error Examples

**Transaction Not Found**
```json
{
  "statusCode": 404,
  "message": "Transaction with ID tx-123 not found or access denied"
}
```

**Amount Exceeds Transaction**
```json
{
  "statusCode": 400,
  "message": "Refund amount (15000) cannot exceed transaction amount (10000)"
}
```

**Already Fully Refunded**
```json
{
  "statusCode": 400,
  "message": "Transaction already fully refunded"
}
```

---

## Provider-Specific Details

### Wave

- **Processing time**: 1-10 minutes
- **Refund window**: 90 days from transaction
- **Fee refund**: Transaction fees are NOT refunded
- **Method**: Refunds to original mobile money account

### SPI (Senegal)

- **Processing time**: 1-48 hours
- **Refund window**: 180 days from transaction
- **Fee refund**: Partial fee refund possible
- **Method**: Bank reversal or mobile money credit

### Stripe

- **Processing time**: 5-10 business days
- **Refund window**: 180 days from charge
- **Fee refund**: Stripe fees NOT refunded
- **Method**: Refunds to original payment method

---

## Use Cases

### 1. Full Order Cancellation

Customer cancels entire order before shipment:

```json
{
  "transaction_id": "tx-order-123",
  "amount": 25000,
  "reason": "Customer cancelled order before shipment",
  "metadata": {
    "order_id": "ORD-2024-789",
    "cancellation_date": "2024-01-15",
    "refund_type": "full"
  }
}
```

### 2. Partial Return

Customer returns some items from order:

```json
{
  "transaction_id": "tx-order-456",
  "amount": 10000,
  "reason": "Partial return - 2 items out of 5",
  "metadata": {
    "order_id": "ORD-2024-790",
    "items_returned": ["ITEM-001", "ITEM-002"],
    "refund_type": "partial"
  }
}
```

### 3. Service Issue

Refund due to service quality issues:

```json
{
  "transaction_id": "tx-service-789",
  "amount": 15000,
  "reason": "Service did not meet expectations",
  "metadata": {
    "support_ticket": "TICKET-456",
    "issue_type": "quality",
    "resolution": "full_refund"
  }
}
```

### 4. Duplicate Charge

Refund for accidental duplicate payment:

```json
{
  "transaction_id": "tx-dup-321",
  "amount": 5000,
  "reason": "Duplicate charge - customer charged twice",
  "metadata": {
    "original_transaction": "tx-123",
    "duplicate": true
  }
}
```

---

## Fees & Financial Impact

### Refund Costs

| Provider | Transaction Fee Refunded? | Processing Fee |
|----------|--------------------------|----------------|
| Wave | ❌ No | None |
| SPI | ⚠️ Partial | Variable |
| Stripe | ❌ No | None |

### Example Calculation

**Original Transaction:**
- Customer paid: 10,000 XOF
- Transaction fee (1%): 100 XOF
- You received: 9,900 XOF

**After Full Refund:**
- Customer receives: 10,000 XOF
- Your cost: 10,000 XOF + 100 XOF (lost fee) = 10,100 XOF total cost

---

## Error Handling

### Common Errors

**400 - Invalid Amount**
```json
{
  "statusCode": 400,
  "message": "Refund amount (15000) cannot exceed transaction amount (10000)"
}
```

**400 - Transaction Not Refundable**
```json
{
  "statusCode": 400,
  "message": "Transaction status is 'pending', only completed transactions can be refunded"
}
```

**404 - Transaction Not Found**
```json
{
  "statusCode": 404,
  "message": "Transaction with ID tx-123 not found or access denied"
}
```

**409 - Already Refunded**
```json
{
  "statusCode": 409,
  "message": "This transaction has already been fully refunded"
}
```

---

## Webhooks

Subscribe to these events for refund status updates:

### refund.pending
```json
{
  "event": "refund.pending",
  "data": {
    "refund_id": "refund-abc123",
    "transaction_id": "tx-123",
    "amount": 5000.00,
    "status": "pending",
    "reason": "Customer requested refund"
  }
}
```

### refund.completed
```json
{
  "event": "refund.completed",
  "data": {
    "refund_id": "refund-abc123",
    "transaction_id": "tx-123",
    "amount": 5000.00,
    "status": "completed",
    "completed_at": "2024-01-15T10:05:00Z"
  }
}
```

### refund.failed
```json
{
  "event": "refund.failed",
  "data": {
    "refund_id": "refund-abc123",
    "transaction_id": "tx-123",
    "amount": 5000.00,
    "status": "failed",
    "failure_reason": "Original payment method no longer valid",
    "failed_at": "2024-01-15T10:05:00Z"
  }
}
```

---

## Best Practices

1. **Validate Before Refunding**: Check transaction status and amount
2. **Provide Clear Reasons**: Help with accounting and customer service
3. **Use Metadata**: Store support tickets, order IDs, and context
4. **Subscribe to Webhooks**: Monitor refund status in real-time
5. **Handle Failures**: Have a process for failed refunds (manual processing)
6. **Track Partial Refunds**: Keep records of multiple partial refunds
7. **Customer Communication**: Notify customers about refund status
8. **Refund Window**: Process refunds quickly (within provider windows)

---

## Refund Policy Recommendations

### Standard Refund Windows
- **Digital Products**: 14 days
- **Physical Products**: 30 days
- **Services**: 7 days after delivery
- **Subscriptions**: Current billing period

### When to Refund
- Product defect or damage
- Service not delivered
- Customer dissatisfaction (case by case)
- Duplicate charges
- Fraudulent transactions

### When NOT to Refund
- Beyond refund window
- Product used/consumed (if policy states non-refundable)
- Customer fault (e.g., wrong address)
- Change of mind (if policy states no refunds)

---

## Integration Examples

### Node.js

```javascript
// Full refund
const response = await fetch('https://api.lomi.africa/refunds', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    transaction_id: 'tx-123',
    amount: 10000,
    reason: 'Customer cancelled order',
    metadata: {
      order_id: 'ORD-2024-789'
    }
  })
});

const refund = await response.json();
console.log('Refund initiated:', refund.refund_id);
console.log('Status:', refund.status); // "pending"
```

### Python

```python
import requests

# Partial refund
response = requests.post(
    'https://api.lomi.africa/refunds',
    headers={'Authorization': 'Bearer your_api_key'},
    json={
        'transaction_id': 'tx-456',
        'amount': 5000,  # Partial amount
        'reason': 'Partial return of items',
        'metadata': {
            'items_returned': 2,
            'refund_type': 'partial'
        }
    }
)

refund = response.json()
print(f"Refund {refund['refund_id']} initiated")
print(f"Amount: {refund['amount']} (partial)")
```

### cURL

```bash
curl -X POST https://api.lomi.africa/refunds \
  -H "Authorization: Bearer your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "transaction_id": "tx-123",
    "amount": 10000,
    "reason": "Customer requested refund",
    "metadata": {
      "support_ticket": "TICKET-123"
    }
  }'
```

---

## Security

- Multi-tenancy enforced via transaction ownership
- Only your organization's transactions can be refunded
- Refund amounts validated against transaction amounts
- Audit trail for all refund requests
- Webhook signatures for secure notifications

---

## Rate Limits

- **Initiate**: 100 requests per minute
- **List/Get**: 300 requests per minute

---

## Changelog

### v1.0.0 (2024-01-15)
- Initial release
- Support for full and partial refunds
- Multi-provider support (Wave, SPI, Stripe)
- Async processing with webhooks
- Transaction ownership validation
- Refund amount validation

