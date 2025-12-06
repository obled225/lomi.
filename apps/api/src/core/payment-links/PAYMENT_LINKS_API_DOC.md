# Payment Links API Documentation

## Overview

The Payment Links API allows you to create shareable payment URLs for accepting payments from customers. Payment links can be for specific products or custom amounts (instant links).

## Base URL

```
https://api.lomi.africa/v1/payment-links
```

## Authentication

All requests require API key authentication via the `Authorization` header:

```
Authorization: Bearer your_api_key_here
```

## Endpoints

### 1. Create Payment Link

Create a new payment link.

**Endpoint:** `POST /payment-links`

**Request Body:**

```json
{
  "link_type": "product",
  "title": "Premium Subscription",
  "currency_code": "XOF",
  "description": "Monthly subscription to premium features",
  "product_id": "123e4567-e89b-12d3-a456-426614174000",
  "price_id": "321e4567-e89b-12d3-a456-426614174000",
  "allow_coupon_code": true,
  "allow_quantity": false,
  "require_billing_address": true,
  "expires_at": "2024-12-31T23:59:59Z",
  "success_url": "https://example.com/success",
  "cancel_url": "https://example.com/cancel",
  "metadata": {
    "campaign": "summer2024"
  }
}
```

**Link Types:**

1. **Product Link** (`link_type: "product"`)
   - References an existing product
   - Requires `product_id`
   - Optional `price_id` for multi-price products
   - `amount` must NOT be provided

2. **Instant Link** (`link_type: "instant"`)
   - For custom amounts
   - Requires `amount` and `currency_code`
   - `product_id` must NOT be provided

**Response:** `201 Created`

```json
{
  "link_id": "abc123-...",
  "organization_id": "org-...",
  "link_type": "product",
  "url": "https://checkout.lomi.africa/pay/abc123",
  "product_id": "123e4567-...",
  "price_id": "321e4567-...",
  "title": "Premium Subscription",
  "description": "Monthly subscription to premium features",
  "currency_code": "XOF",
  "amount": null,
  "allow_coupon_code": true,
  "is_active": true,
  "allow_quantity": false,
  "quantity": 1,
  "expires_at": "2024-12-31T23:59:59Z",
  "success_url": "https://example.com/success",
  "cancel_url": "https://example.com/cancel",
  "metadata": {
    "campaign": "summer2024"
  },
  "require_billing_address": true,
  "environment": "live",
  "created_at": "2024-01-15T10:00:00Z",
  "created_by": "merchant-...",
  "updated_at": "2024-01-15T10:00:00Z"
}
```

---

### 2. List Payment Links

Retrieve all payment links with optional filtering.

**Endpoint:** `GET /payment-links`

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `linkType` | string | No | Filter by type: `product` or `instant` |
| `isActive` | boolean | No | Filter by active status |
| `limit` | integer | No | Results per page (default: 20) |
| `offset` | integer | No | Pagination offset (default: 0) |

**Example Request:**

```bash
GET /payment-links?linkType=product&isActive=true&limit=10&offset=0
```

**Response:** `200 OK`

```json
{
  "data": [
    {
      "link_id": "abc123-...",
      "organization_id": "org-...",
      "link_type": "product",
      "url": "https://checkout.lomi.africa/pay/abc123",
      "title": "Premium Subscription",
      "currency_code": "XOF",
      "is_active": true,
      "created_at": "2024-01-15T10:00:00Z"
    }
  ],
  "total": 45,
  "limit": 10,
  "offset": 0
}
```

---

### 3. Get Payment Link by ID

Retrieve detailed information about a specific payment link.

**Endpoint:** `GET /payment-links/:id`

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | UUID | Yes | Payment link ID |

**Response:** `200 OK`

```json
{
  "link_id": "abc123-...",
  "organization_id": "org-...",
  "link_type": "product",
  "url": "https://checkout.lomi.africa/pay/abc123",
  "product_id": "123e4567-...",
  "title": "Premium Subscription",
  "description": "Monthly subscription",
  "currency_code": "XOF",
  "is_active": true,
  "created_at": "2024-01-15T10:00:00Z"
}
```

**Error Response:** `404 Not Found`

```json
{
  "statusCode": 404,
  "message": "Payment link with ID abc123 not found or access denied"
}
```

---

## Use Cases

### 1. Product Payment Link

Create a link for a specific product with multiple payment options:

```json
{
  "link_type": "product",
  "title": "Pro Plan Monthly",
  "currency_code": "XOF",
  "product_id": "prod-123",
  "allow_coupon_code": true
}
```

### 2. Instant Payment Link

Create a link for a custom amount (donations, invoices):

```json
{
  "link_type": "instant",
  "title": "Invoice #INV-001",
  "currency_code": "XOF",
  "amount": 50000,
  "description": "Payment for consulting services"
}
```

### 3. Time-Limited Link

Create a link that expires after a certain date:

```json
{
  "link_type": "instant",
  "title": "Flash Sale",
  "currency_code": "XOF",
  "amount": 5000,
  "expires_at": "2024-12-31T23:59:59Z"
}
```

---

## Field Descriptions

### link_type

Determines the type of payment link:

- **`product`**: Links to an existing product. Must provide `product_id`. Cannot provide `amount`.
- **`instant`**: For custom amounts. Must provide `amount`. Cannot provide `product_id`.

### url

The shareable checkout URL generated by the system. Share this with customers to accept payments.

Format: `https://checkout.lomi.africa/pay/{link_id}`

### is_active

Controls whether the link is currently accepting payments. Inactive links return an error when accessed.

### expires_at

Optional expiration date/time. After this time, the link becomes inactive automatically.

### allow_coupon_code

If `true`, customers can apply discount codes at checkout.

### allow_quantity

If `true`, customers can change the quantity of items being purchased.

### require_billing_address

If `true`, customers must provide their billing address during checkout.

---

## Business Logic

### Link Validation

- Product links require valid `product_id` that exists in your organization
- Instant links require positive `amount` value
- Cannot mix product and instant link fields
- Expired links automatically become inactive

### URL Generation

The system automatically generates a unique, shareable URL for each payment link:

```
https://checkout.lomi.africa/pay/{link_id}
```

This URL can be shared via:
- Email
- SMS
- QR codes
- Social media
- Website buttons

### Multi-tenancy

All payment links are isolated by organization. You can only:
- Create links for your organization
- View links from your organization
- Access links you created

---

## Error Handling

### Common Errors

**400 Bad Request**
```json
{
  "statusCode": 400,
  "message": "Invalid input or validation error"
}
```

**401 Unauthorized**
```json
{
  "statusCode": 401,
  "message": "Invalid or missing API key"
}
```

**404 Not Found**
```json
{
  "statusCode": 404,
  "message": "Payment link not found or access denied"
}
```

---

## Best Practices

1. **Set Expiration Dates**: For time-sensitive offers, always set `expires_at`
2. **Use Metadata**: Store campaign tracking info in `metadata` field
3. **Enable Coupons Selectively**: Only enable `allow_coupon_code` when running promotions
4. **Monitor Usage**: Regularly check link performance via the list endpoint
5. **Deactivate Unused Links**: Set `is_active: false` for expired campaigns

---

## Integration Examples

### Node.js

```javascript
const response = await fetch('https://api.lomi.africa/v1/payment-links', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    link_type: 'product',
    title: 'Premium Plan',
    currency_code: 'XOF',
    product_id: 'prod-123'
  })
});

const link = await response.json();
console.log('Share this URL:', link.url);
```

### Python

```python
import requests

response = requests.post(
    'https://api.lomi.africa/v1/payment-links',
    headers={'Authorization': 'Bearer your_api_key'},
    json={
        'link_type': 'instant',
        'title': 'Donation',
        'currency_code': 'XOF',
        'amount': 10000
    }
)

link = response.json()
print(f"Share this URL: {link['url']}")
```

### cURL

```bash
curl -X POST https://api.lomi.africa/v1/payment-links \
  -H "Authorization: Bearer your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "link_type": "product",
    "title": "Pro Plan",
    "currency_code": "XOF",
    "product_id": "prod-123"
  }'
```

---

## Webhooks

Payment links trigger webhooks when:
- A customer completes payment via the link
- A payment fails
- A checkout session is created from the link

---

## Rate Limits

- **Create**: 100 requests per minute
- **List/Get**: 300 requests per minute

---

## Changelog

### v1.0.0 (2024-01-15)
- Initial release
- Support for product and instant links
- Filtering and pagination
- Expiration dates

