# Webhook Delivery Logs API

The Webhook Delivery Logs API provides read-only access to webhook delivery history. Logs are automatically created when webhooks are delivered to your endpoints, allowing you to monitor webhook reliability, debug delivery issues, and track webhook events.

## Features

- ✅ **List Delivery Logs** - Retrieve all delivery logs for a specific webhook
- ✅ **Get Delivery Log** - Fetch detailed information about a specific delivery attempt
- ✅ **Filter by Success/Failure** - View only successful or failed deliveries
- ✅ **Pagination** - Efficiently handle large log lists
- ✅ **SPI Webhook Details** - Full SPI (Système de Paiement Immédiat) webhook event data
- ✅ **Retry Tracking** - See all delivery attempts for each event
- ✅ **Response Details** - View HTTP status, response body, and duration
- ❌ **Create Log** - Not available (logs are system-generated)
- ❌ **Update Log** - Not available (logs are immutable)
- ❌ **Delete Log** - Not available (logs are permanent records)

## Endpoints

### 1. List Webhook Delivery Logs

```
GET /webhook-delivery-logs
```

Retrieves delivery logs for a specific webhook with optional filtering.

**Query Parameters (Required):**
- `webhookId` (required): Webhook UUID to filter logs

**Query Parameters (Optional):**
- `successOnly` (optional): Show only successful deliveries (true/false, default: false)
- `failedOnly` (optional): Show only failed deliveries (true/false, default: false)
- `limit` (optional): Number of logs to return (default: 25)
- `offset` (optional): Number of logs to skip for pagination (default: 0)

**Response:**
```json
[
  {
    "log_id": "123e4567-e89b-12d3-a456-426614174000",
    "webhook_id": "789e0123-e89b-12d3-a456-426614174000",
    "organization_id": "456e7890-e89b-12d3-a456-426614174000",
    "event_type": "transaction.completed",
    "payload": {
      "transaction_id": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 10000,
      "currency": "XOF",
      "status": "completed"
    },
    "response_status": 200,
    "response_body": "{\"status\":\"success\"}",
    "attempt_number": 1,
    "success": true,
    "ip_address": "192.168.1.1",
    "user_agent": "Lomi-Webhook/1.0",
    "headers": {
      "content-type": "application/json",
      "x-webhook-signature": "sha256=..."
    },
    "request_duration_ms": 150,
    "spi_tx_id": null,
    "compte_payeur": null,
    "compte_paye": null,
    "amount": null,
    "spi_event_code": null,
    "created_at": "2024-01-15T10:30:00Z"
  }
]
```

**RPC Function Used:** `get_webhook_delivery_logs(p_webhook_id, p_merchant_id, p_success_only, p_failed_only, p_limit, p_offset)`

---

### 2. Get Webhook Delivery Log

```
GET /webhook-delivery-logs/:id
```

Retrieves detailed information about a specific webhook delivery log.

**Parameters:**
- `id`: Log UUID

**Response:**
```json
{
  "log_id": "123e4567-e89b-12d3-a456-426614174000",
  "webhook_id": "789e0123-e89b-12d3-a456-426614174000",
  "organization_id": "456e7890-e89b-12d3-a456-426614174000",
  "event_type": "transaction.completed",
  "payload": {
    "transaction_id": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 10000,
    "currency": "XOF",
    "status": "completed"
  },
  "response_status": 200,
  "response_body": "{\"status\":\"success\"}",
  "attempt_number": 1,
  "success": true,
  "ip_address": "192.168.1.1",
  "user_agent": "Lomi-Webhook/1.0",
  "headers": {
    "content-type": "application/json",
    "x-webhook-signature": "sha256=..."
  },
  "request_duration_ms": 150,
  "spi_tx_id": "SPI-TX-123456",
  "compte_payeur": "221771234567",
  "compte_paye": "221779876543",
  "amount": 1000000,
  "spi_event_code": "PAIEMENT_RECU",
  "created_at": "2024-01-15T10:30:00Z"
}
```

**Direct Query:** Organization-filtered query to `webhook_delivery_logs` table

---

## Authentication

All endpoints require API key authentication via the `x-api-key` header.

```bash
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/webhook-delivery-logs?webhookId=789e0123-e89b-12d3-a456-426614174000"
```

---

## Understanding Webhook Delivery Logs

### Log Fields Explained

#### Basic Information
- **log_id**: Unique identifier for this delivery log
- **webhook_id**: The webhook configuration that was triggered
- **organization_id**: Your organization identifier
- **event_type**: The event that triggered the webhook (e.g., `transaction.completed`)
- **created_at**: When the webhook was delivered

#### Payload
The complete data sent to your webhook endpoint. This includes all event details.

```json
{
  "payload": {
    "transaction_id": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 10000,
    "currency": "XOF",
    "status": "completed",
    "customer_id": "456e7890-e89b-12d3-a456-426614174000"
  }
}
```

#### Response Information
- **response_status**: HTTP status code returned by your endpoint (200, 404, 500, etc.)
- **response_body**: The response body your endpoint returned
- **success**: Boolean indicating if delivery was successful (2xx status code)

#### Request Details
- **attempt_number**: Which retry attempt this was (1 = first attempt)
- **request_duration_ms**: How long the request took in milliseconds
- **ip_address**: IP address of your webhook endpoint
- **user_agent**: User agent from the response
- **headers**: Request headers sent with the webhook

#### SPI-Specific Fields (for SPI webhooks)
- **spi_tx_id**: SPI transaction identifier
- **compte_payeur**: Payer account number
- **compte_paye**: Payee account number
- **amount**: Transaction amount in centimes
- **spi_event_code**: SPI event type (PAIEMENT_RECU, RTP_REJETE, etc.)

---

## Filtering Examples

### View All Logs for a Webhook
```bash
GET /webhook-delivery-logs?webhookId=789e0123-e89b-12d3-a456-426614174000
```

### View Only Successful Deliveries
```bash
GET /webhook-delivery-logs?webhookId=789e0123-e89b-12d3-a456-426614174000&successOnly=true
```

### View Only Failed Deliveries
```bash
GET /webhook-delivery-logs?webhookId=789e0123-e89b-12d3-a456-426614174000&failedOnly=true
```

### Paginate Results
```bash
GET /webhook-delivery-logs?webhookId=789e0123-e89b-12d3-a456-426614174000&limit=50&offset=0
```

---

## Example Usage

### TypeScript/JavaScript

```typescript
import axios from 'axios';

const apiKey = 'your-api-key';
const baseURL = 'https://api.lomi.africa';
const webhookId = '789e0123-e89b-12d3-a456-426614174000';

// List all delivery logs for a webhook
const listLogs = async () => {
  const response = await axios.get(`${baseURL}/webhook-delivery-logs`, {
    headers: { 'x-api-key': apiKey },
    params: {
      webhookId: webhookId
    }
  });
  return response.data;
};

// List only failed deliveries
const listFailedLogs = async () => {
  const response = await axios.get(`${baseURL}/webhook-delivery-logs`, {
    headers: { 'x-api-key': apiKey },
    params: {
      webhookId: webhookId,
      failedOnly: true
    }
  });
  return response.data;
};

// List with pagination
const listLogsPaginated = async (offset = 0, limit = 25) => {
  const response = await axios.get(`${baseURL}/webhook-delivery-logs`, {
    headers: { 'x-api-key': apiKey },
    params: {
      webhookId: webhookId,
      limit: limit,
      offset: offset
    }
  });
  return response.data;
};

// Get a specific log
const getLog = async (logId: string) => {
  const response = await axios.get(`${baseURL}/webhook-delivery-logs/${logId}`, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};

// Calculate success rate
const calculateSuccessRate = async () => {
  const allLogs = await listLogs();
  const successCount = allLogs.filter((log: any) => log.success).length;
  const successRate = (successCount / allLogs.length) * 100;
  return successRate;
};
```

### cURL

```bash
# List all delivery logs for a webhook
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/webhook-delivery-logs?webhookId=789e0123-e89b-12d3-a456-426614174000"

# List only successful deliveries
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/webhook-delivery-logs?webhookId=789e0123-e89b-12d3-a456-426614174000&successOnly=true"

# List only failed deliveries
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/webhook-delivery-logs?webhookId=789e0123-e89b-12d3-a456-426614174000&failedOnly=true"

# List with pagination
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/webhook-delivery-logs?webhookId=789e0123-e89b-12d3-a456-426614174000&limit=50&offset=0"

# Get a specific log
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/webhook-delivery-logs/123e4567-e89b-12d3-a456-426614174000"
```

### Python

```python
import requests

api_key = 'your-api-key'
base_url = 'https://api.lomi.africa'
webhook_id = '789e0123-e89b-12d3-a456-426614174000'
headers = {'x-api-key': api_key}

# List all delivery logs for a webhook
def list_logs():
    response = requests.get(
        f'{base_url}/webhook-delivery-logs',
        headers=headers,
        params={'webhookId': webhook_id}
    )
    return response.json()

# List only failed deliveries
def list_failed_logs():
    response = requests.get(
        f'{base_url}/webhook-delivery-logs',
        headers=headers,
        params={
            'webhookId': webhook_id,
            'failedOnly': True
        }
    )
    return response.json()

# List with pagination
def list_logs_paginated(offset=0, limit=25):
    response = requests.get(
        f'{base_url}/webhook-delivery-logs',
        headers=headers,
        params={
            'webhookId': webhook_id,
            'limit': limit,
            'offset': offset
        }
    )
    return response.json()

# Get a specific log
def get_log(log_id):
    response = requests.get(
        f'{base_url}/webhook-delivery-logs/{log_id}',
        headers=headers
    )
    return response.json()

# Calculate success rate
def calculate_success_rate():
    all_logs = list_logs()
    success_count = sum(1 for log in all_logs if log['success'])
    success_rate = (success_count / len(all_logs)) * 100
    return success_rate
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
**Cause:** Log doesn't exist or doesn't belong to your organization

```json
{
  "statusCode": 404,
  "message": "Webhook delivery log with ID 123e4567-e89b-12d3-a456-426614174000 not found or access denied"
}
```

**Solution:** Verify the log ID is correct and belongs to your organization.

#### 400 Bad Request
**Cause:** Missing required webhookId parameter

```json
{
  "statusCode": 400,
  "message": "webhookId parameter is required"
}
```

**Solution:** Always provide the webhookId query parameter when listing logs.

---

## Webhook Delivery Status

### Successful Delivery
```json
{
  "response_status": 200,
  "success": true,
  "attempt_number": 1
}
```

A webhook delivery is considered successful when:
- Your endpoint returns a 2xx HTTP status code (200-299)
- The request completes without timeout

### Failed Delivery
```json
{
  "response_status": 500,
  "success": false,
  "attempt_number": 3,
  "response_body": "Internal Server Error"
}
```

A webhook delivery is considered failed when:
- Your endpoint returns a non-2xx status code
- The request times out
- Your endpoint is unreachable

### Retry Attempts
When a webhook fails, the system automatically retries delivery. Each retry creates a new log entry with an incremented `attempt_number`.

```json
[
  { "attempt_number": 1, "success": false },
  { "attempt_number": 2, "success": false },
  { "attempt_number": 3, "success": true }
]
```

---

## Implementation Details

### Architecture

The Webhook Delivery Logs API follows a **read-only, audit-focused** architecture:

1. **Service Role Key**: Uses Supabase service role key to bypass RLS policies
2. **API Key Guard**: Authenticates requests via `ApiKeyGuard`
3. **Organization Filtering**: ALL queries filtered by `organization_id`
4. **RPC Functions**: Uses database functions for listing
5. **Direct Queries**: Uses direct queries for single log retrieval
6. **Read-Only Design**: NO create, update, or delete operations

### Why Logs Are Read-Only

Webhook delivery logs are **read-only** by design:

**Reasons:**
1. **Audit Trail**: Complete, unmodified record of all webhook deliveries
2. **Debugging**: Historical data needed for troubleshooting
3. **Compliance**: Regulatory requirements for webhook audit logs
4. **Security**: Prevents unauthorized modification of delivery records
5. **System-Generated**: Logs are created automatically by the webhook system

**How Logs Are Created:**
- Automatically when webhooks are triggered
- For each delivery attempt (including retries)
- For all webhook events (success and failure)

### RPC Functions Used

1. **get_webhook_delivery_logs**: Lists logs with filtering
   - Requires webhook_id and merchant_id
   - Supports success/failure filtering
   - Built-in pagination with limit/offset
   - Organization filtering enforced

### Security Considerations

#### Multi-Tenancy
Every operation filters by `organization_id` to ensure data isolation.

#### Ownership Validation
All operations validate the webhook belongs to the requesting merchant's organization.

#### Sensitive Data
Response bodies and headers may contain sensitive data. Ensure you:
- Store logs securely
- Limit access to authorized personnel
- Rotate webhook secrets regularly

---

## Monitoring Webhook Health

### Calculate Success Rate
```typescript
const logs = await listLogs();
const successRate = (logs.filter(l => l.success).length / logs.length) * 100;
console.log(`Webhook success rate: ${successRate}%`);
```

### Find Slow Webhooks
```typescript
const logs = await listLogs();
const slowLogs = logs.filter(l => l.request_duration_ms > 5000); // > 5 seconds
console.log(`Slow deliveries: ${slowLogs.length}`);
```

### Identify Common Errors
```typescript
const failedLogs = await listFailedLogs();
const errorCounts = failedLogs.reduce((acc, log) => {
  const status = log.response_status || 'timeout';
  acc[status] = (acc[status] || 0) + 1;
  return acc;
}, {});
console.log('Error distribution:', errorCounts);
```

---

## SPI Webhook Events

For SPI (Système de Paiement Immédiat) webhooks, additional fields provide payment details:

### SPI Event Codes
- **PAIEMENT_RECU**: Payment received
- **RTP_REJETE**: Request to pay rejected
- **PAIEMENT_INITIE**: Payment initiated
- **PAIEMENT_ENVOYE**: Payment sent
- **PAIEMENT_IRREVOCABLE**: Payment completed (irreversible)

### SPI Log Example
```json
{
  "log_id": "123e4567-e89b-12d3-a456-426614174000",
  "event_type": "spi.payment.received",
  "spi_tx_id": "SPI-TX-123456",
  "compte_payeur": "221771234567",
  "compte_paye": "221779876543",
  "amount": 1000000,
  "spi_event_code": "PAIEMENT_RECU",
  "payload": {
    "tx_id": "SPI-TX-123456",
    "amount": 1000000,
    "currency": "XOF"
  }
}
```

---

## Protected from Auto-Generation

The Webhook Delivery Logs API is manually implemented and protected from auto-generation in `generate-modules.ts`. This allows for:

1. **Read-Only Enforcement**: Only list and get operations exposed
2. **Required Parameters**: webhookId required for list endpoint
3. **Flexible Filtering**: Success/failure filtering and pagination
4. **Ownership Validation**: Enhanced security checks
5. **Clear Documentation**: Explanation of webhook delivery flow

The auto-generation skip is configured in:
```typescript
// apps/api/src/utils/scripts/generate-modules.ts
if (resource.tableName === 'webhook_delivery_logs') {
  console.log(`⏩ Skipping webhook_delivery_logs (manually implemented with special logic)`);
  continue;
}
```

---

## Best Practices

### Monitoring
1. **Check Failed Deliveries Regularly**: Monitor failedOnly logs to catch endpoint issues
2. **Track Response Times**: Monitor request_duration_ms to identify performance issues
3. **Set Up Alerts**: Alert on high failure rates or slow responses
4. **Review Retry Patterns**: Check attempt_number to understand retry behavior

### Debugging
1. **Use Response Body**: Check response_body for error messages from your endpoint
2. **Verify Payload**: Ensure the payload structure matches your endpoint expectations
3. **Check Headers**: Verify webhook signatures and content-type headers
4. **Monitor Timeouts**: Long request_duration_ms may indicate timeout issues

### Security
1. **Rotate Secrets**: Regularly rotate webhook secrets
2. **Verify Signatures**: Always verify webhook signatures in your endpoint
3. **Use HTTPS**: Only use HTTPS endpoints for webhooks
4. **Rate Limiting**: Implement rate limiting on your webhook endpoints
5. **Audit Logs**: Regularly review webhook logs for suspicious activity

### Performance
1. **Optimize Endpoints**: Keep webhook endpoints fast (< 1 second response time)
2. **Return Quickly**: Return 200 immediately and process asynchronously
3. **Handle Retries**: Implement idempotency to handle duplicate deliveries
4. **Paginate Logs**: Use pagination when retrieving large log lists

---

## Troubleshooting

### High Failure Rate
**Problem:** Many logs show `success: false`

**Solutions:**
1. Check your endpoint is accessible and returns 2xx status codes
2. Verify your endpoint handles the payload structure correctly
3. Ensure your endpoint responds within timeout period (30 seconds)
4. Check for rate limiting on your endpoint

### Missing Logs
**Problem:** Expected webhook logs not appearing

**Solutions:**
1. Verify the webhook is active (`is_active: true`)
2. Check the webhook event type matches the triggered event
3. Ensure the webhook URL is correct
4. Verify the webhook hasn't been deleted

### Slow Deliveries
**Problem:** High `request_duration_ms` values

**Solutions:**
1. Optimize your webhook endpoint performance
2. Process webhooks asynchronously (return 200 immediately)
3. Use a webhook queue system
4. Check for database or API bottlenecks in your endpoint

---

## Support

For questions or issues with the Webhook Delivery Logs API:
- 📧 Email: support@lomi.africa
- 📖 Documentation: https://docs.lomi.africa
- 🐛 Bug Reports: https://github.com/lomi/api/issues

