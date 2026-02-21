# Transactions API

The Transactions API provides read-only access to transaction history for your organization. Transactions are automatically created by the system when payments are processed through checkout sessions, payment links, or other payment flows.

## Features

- ✅ **List Transactions** - Retrieve all transactions with advanced filtering
- ✅ **Get Transaction** - Fetch detailed information about a specific transaction
- ✅ **Advanced Filtering** - Filter by provider, status, type, currency, payment method, date range, and POS transactions
- ✅ **Pagination** - Efficiently handle large transaction lists
- ✅ **Multi-Currency Support** - View transactions in any supported currency
- ✅ **SPI Transaction Details** - Full SPI payment system integration details
- ✅ **POS Transaction Tracking** - Identify Point of Sale transactions
- ❌ **Create Transaction** - Not available (transactions are system-generated)
- ❌ **Update Transaction** - Not available (transactions are immutable)
- ❌ **Delete Transaction** - Not available (transactions are permanent records)

## Endpoints

### 1. List Transactions

```
GET /transactions
```

Retrieves all transactions for your organization with optional filtering.

**Query Parameters:**
- `provider` (optional): Filter by payment provider code (e.g., `WAVE`, `SPI`, `STRIPE`)
- `status` (optional): Filter by status (comma-separated: `completed,pending,failed,refunded,expired,cancelled`)
- `type` (optional): Filter by type (comma-separated: `payment,refund,payout`)
- `currency` (optional): Filter by currency code (comma-separated: `XOF,USD,EUR`)
- `paymentMethod` (optional): Filter by payment method (comma-separated: `MOBILE_MONEY,CARD,BANK_TRANSFER`)
- `page` (optional): Page number for pagination (default: 1)
- `pageSize` (optional): Number of items per page (default: 50)
- `startDate` (optional): Filter from this date (ISO 8601 format: `2024-01-01T00:00:00Z`)
- `endDate` (optional): Filter until this date (ISO 8601 format: `2024-12-31T23:59:59Z`)
- `isPos` (optional): Filter POS transactions only (true/false)

**Response:**
```json
[
  {
    "transaction_id": "123e4567-e89b-12d3-a456-426614174000",
    "organization_id": "789e0123-e89b-12d3-a456-426614174000",
    "customer_id": "456e7890-e89b-12d3-a456-426614174000",
    "product_id": "321e4567-e89b-12d3-a456-426614174000",
    "subscription_id": null,
    "price_id": "987e6543-e89b-12d3-a456-426614174000",
    "transaction_type": "payment",
    "status": "completed",
    "description": "Payment for Premium Subscription",
    "quantity": 1,
    "metadata": { "order_number": "ORD-12345" },
    "gross_amount": 10000.0,
    "discount_amount": 500.0,
    "fee_amount": 200.0,
    "net_amount": 9300.0,
    "currency_code": "XOF",
    "provider_code": "WAVE",
    "payment_method_code": "MOBILE_MONEY",
    "spi_tx_id": null,
    "spi_account_number": null,
    "spi_payment_category": null,
    "spi_payment_status": null,
    "is_bnpl": false,
    "is_pos": false,
    "spi_date_envoi": null,
    "spi_date_irrevocabilite": null,
    "environment": "live",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```

**RPC Function Used:** `fetch_transactions(p_organization_id, p_provider_code, p_status, p_type, p_currency, p_payment_method, p_page, p_page_size, p_start_date, p_end_date, p_is_pos, p_environment)`

---

### 2. Get Transaction

```
GET /transactions/:id
```

Retrieves detailed information about a specific transaction.

**Parameters:**
- `id`: Transaction UUID

**Response:**
```json
{
  "transaction_id": "123e4567-e89b-12d3-a456-426614174000",
  "organization_id": "789e0123-e89b-12d3-a456-426614174000",
  "customer_id": "456e7890-e89b-12d3-a456-426614174000",
  "product_id": "321e4567-e89b-12d3-a456-426614174000",
  "subscription_id": null,
  "price_id": "987e6543-e89b-12d3-a456-426614174000",
  "transaction_type": "payment",
  "status": "completed",
  "description": "Payment for Premium Subscription",
  "quantity": 1,
  "metadata": { "order_number": "ORD-12345" },
  "gross_amount": 10000.0,
  "discount_amount": 500.0,
  "fee_amount": 200.0,
  "net_amount": 9300.0,
  "currency_code": "XOF",
  "provider_code": "WAVE",
  "payment_method_code": "MOBILE_MONEY",
  "spi_tx_id": "SPI-TX-123456",
  "spi_account_number": "221771234567",
  "spi_payment_category": "000",
  "spi_payment_status": "IRREVOCABLE",
  "is_bnpl": false,
  "is_pos": false,
  "spi_date_envoi": "2024-01-15T10:30:00Z",
  "spi_date_irrevocabilite": "2024-01-15T10:35:00Z",
  "environment": "live",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**RPC Function Used:** `get_transaction(p_transaction_id)`

---

## Authentication

All endpoints require API key authentication via the `x-api-key` header.

```bash
curl -H "x-api-key: your-api-key" https://api.lomi.africa/transactions
```

---

## Transaction Types

### Payment
Regular payment transactions from customers.

```json
{
  "transaction_type": "payment",
  "status": "completed"
}
```

### Refund
Refund transactions returning money to customers.

```json
{
  "transaction_type": "refund",
  "status": "completed"
}
```

### Payout
Payout transactions to beneficiaries.

```json
{
  "transaction_type": "payout",
  "status": "completed"
}
```

---

## Transaction Statuses

- **pending**: Transaction initiated but not yet confirmed
- **completed**: Transaction successfully processed
- **failed**: Transaction failed to process
- **refunded**: Transaction was refunded to customer
- **expired**: Transaction expired before completion
- **cancelled**: Transaction was cancelled

---

## Amount Fields Explained

### Gross Amount
Total transaction amount including all fees and before any discounts.

```json
{
  "gross_amount": 10000.0
}
```

### Discount Amount
Total discount applied from all coupons.

```json
{
  "discount_amount": 500.0
}
```

### Fee Amount
Platform fees charged for the transaction.

```json
{
  "fee_amount": 200.0
}
```

### Net Amount
Amount received by merchant after fees (gross - fees).

```json
{
  "net_amount": 9300.0
}
```

**Calculation:**
```
Net Amount = Gross Amount - Fee Amount
Final Customer Payment = Gross Amount - Discount Amount
```

---

## SPI Payment System Integration

For transactions processed through the SPI (Système de Paiement Immédiat) payment system, additional fields provide detailed tracking:

### SPI Transaction ID
Unique identifier from the SPI system.

```json
{
  "spi_tx_id": "SPI-TX-123456"
}
```

### SPI Account Number
Merchant's SPI account number used for the transaction.

```json
{
  "spi_account_number": "221771234567"
}
```

### SPI Payment Category
Payment channel used:
- `000`: Static QR Code
- `400`: Dynamic QR Code
- `733`: Business API
- Others: Various payment channels

```json
{
  "spi_payment_category": "000"
}
```

### SPI Payment Status
Detailed SPI payment status:
- `INITIE`: Pre-send (awaiting confirmation)
- `ENVOYE`: Sent to banking system
- `IRREVOCABLE`: Completed (irreversible)
- `REJETE`: Rejected

```json
{
  "spi_payment_status": "IRREVOCABLE"
}
```

### SPI Dates
- `spi_date_envoi`: When payment was sent
- `spi_date_irrevocabilite`: When payment became irreversible

```json
{
  "spi_date_envoi": "2024-01-15T10:30:00Z",
  "spi_date_irrevocabilite": "2024-01-15T10:35:00Z"
}
```

---

## POS Transactions

Point of Sale transactions are marked with the `is_pos` flag.

```json
{
  "is_pos": true
}
```

These transactions originate from QR code payments at physical locations.

---

## BNPL (Buy Now Pay Later)

Deferred debit transactions are marked with the `is_bnpl` flag.

```json
{
  "is_bnpl": true
}
```

---

## Filtering Examples

### Filter by Provider
```bash
GET /transactions?provider=WAVE
```

### Filter by Status
```bash
GET /transactions?status=completed,pending
```

### Filter by Date Range
```bash
GET /transactions?startDate=2024-01-01T00:00:00Z&endDate=2024-01-31T23:59:59Z
```

### Filter by Currency
```bash
GET /transactions?currency=XOF,USD
```

### Filter POS Transactions
```bash
GET /transactions?isPos=true
```

### Combine Multiple Filters
```bash
GET /transactions?provider=WAVE&status=completed&currency=XOF&page=1&pageSize=50
```

---

## Example Usage

### TypeScript/JavaScript

```typescript
import axios from 'axios';

const apiKey = 'your-api-key';
const baseURL = 'https://api.lomi.africa';

// List all transactions
const listTransactions = async () => {
  const response = await axios.get(`${baseURL}/transactions`, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};

// List with filtering
const listCompletedTransactions = async () => {
  const response = await axios.get(`${baseURL}/transactions`, {
    headers: { 'x-api-key': apiKey },
    params: {
      status: 'completed',
      page: 1,
      pageSize: 50
    }
  });
  return response.data;
};

// Filter by date range
const listTransactionsByDateRange = async () => {
  const response = await axios.get(`${baseURL}/transactions`, {
    headers: { 'x-api-key': apiKey },
    params: {
      startDate: '2024-01-01T00:00:00Z',
      endDate: '2024-01-31T23:59:59Z',
      provider: 'WAVE',
      currency: 'XOF'
    }
  });
  return response.data;
};

// Get a specific transaction
const getTransaction = async (transactionId: string) => {
  const response = await axios.get(`${baseURL}/transactions/${transactionId}`, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};

// Filter POS transactions
const listPosTransactions = async () => {
  const response = await axios.get(`${baseURL}/transactions`, {
    headers: { 'x-api-key': apiKey },
    params: {
      isPos: true
    }
  });
  return response.data;
};
```

### cURL

```bash
# List all transactions
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/transactions"

# List with filtering
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/transactions?status=completed&provider=WAVE&page=1&pageSize=50"

# Filter by date range
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/transactions?startDate=2024-01-01T00:00:00Z&endDate=2024-01-31T23:59:59Z"

# Filter by multiple statuses
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/transactions?status=completed,pending,failed"

# Filter POS transactions
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/transactions?isPos=true"

# Get a specific transaction
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/transactions/123e4567-e89b-12d3-a456-426614174000"
```

### Python

```python
import requests

api_key = 'your-api-key'
base_url = 'https://api.lomi.africa'
headers = {'x-api-key': api_key}

# List all transactions
def list_transactions():
    response = requests.get(
        f'{base_url}/transactions',
        headers=headers
    )
    return response.json()

# List with filtering
def list_completed_transactions():
    response = requests.get(
        f'{base_url}/transactions',
        headers=headers,
        params={
            'status': 'completed',
            'page': 1,
            'pageSize': 50
        }
    )
    return response.json()

# Filter by date range
def list_transactions_by_date_range():
    response = requests.get(
        f'{base_url}/transactions',
        headers=headers,
        params={
            'startDate': '2024-01-01T00:00:00Z',
            'endDate': '2024-01-31T23:59:59Z',
            'provider': 'WAVE',
            'currency': 'XOF'
        }
    )
    return response.json()

# Get a specific transaction
def get_transaction(transaction_id):
    response = requests.get(
        f'{base_url}/transactions/{transaction_id}',
        headers=headers
    )
    return response.json()

# Filter POS transactions
def list_pos_transactions():
    response = requests.get(
        f'{base_url}/transactions',
        headers=headers,
        params={'isPos': True}
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
**Cause:** Transaction doesn't exist or doesn't belong to your organization

```json
{
  "statusCode": 404,
  "message": "Transaction with ID 123e4567-e89b-12d3-a456-426614174000 not found or access denied"
}
```

**Solution:** Verify the transaction ID is correct and belongs to your organization.

---

## Implementation Details

### Architecture

The Transactions API follows a **read-only, security-first** architecture:

1. **Service Role Key**: Uses Supabase service role key to bypass RLS policies
2. **API Key Guard**: Authenticates requests via `ApiKeyGuard`
3. **Organization Filtering**: ALL queries filtered by `organization_id`
4. **RPC Functions**: Uses database functions for all operations
5. **Read-Only Design**: NO create, update, or delete operations

### Why Transactions Are Read-Only

Transactions in the lomi. API are **read-only** by design:

**Reasons:**
1. **Data Integrity**: Transactions represent actual financial events
2. **Audit Trail**: Complete, unmodified history of all payments
3. **Regulatory Compliance**: Financial records must be immutable
4. **Security**: Prevents unauthorized modification of financial data
5. **System-Generated**: Transactions are created by payment processors, not manually

**How Transactions Are Created:**
- Through checkout sessions (hosted payment pages)
- Through payment links (shareable URLs)
- Through POS QR code payments
- Through subscription renewals
- Through refund processes
- Through payout operations

### RPC Functions Used

1. **fetch_transactions**: Lists transactions with comprehensive filtering
   - Supports multiple filter criteria
   - Pagination built-in
   - Organization filtering enforced
   - Environment filtering (test/live)

2. **get_transaction**: Gets a single transaction
   - Returns complete transaction details
   - Includes all SPI-specific fields
   - Returns null for non-applicable fields

### Security Considerations

#### Multi-Tenancy
Every operation filters by `organization_id` to ensure data isolation:

```typescript
p_organization_id: user.organizationId
```

#### Ownership Validation
All get operations validate the transaction belongs to the requesting merchant's organization before returning data.

#### Fields Exposed
All fields are merchant-visible including:
- SPI transaction details (for debugging and reconciliation)
- POS transaction flags
- BNPL transaction flags
- Complete amount breakdown
- Provider-specific information

No admin-only fields exist in the transactions table - all data is relevant to merchants.

---

## Payment Providers

### Supported Providers

- **WAVE**: West African mobile money provider
- **SPI**: Système de Paiement Immédiat (instant payment system)
- **STRIPE**: International card payments
- **MTN**: MTN Mobile Money
- Others as configured in your organization

Each provider may have specific fields populated (e.g., SPI fields for SPI transactions).

---

## Protected from Auto-Generation

The Transactions API is manually implemented and protected from auto-generation in `generate-modules.ts`. This allows for:

1. **Read-Only Enforcement**: Only list and get operations exposed
2. **Advanced Filtering**: Complex query parameters for flexible filtering
3. **Array Parameter Parsing**: Comma-separated values parsed into arrays
4. **Ownership Validation**: Enhanced security checks
5. **Clear Documentation**: Explanation of why operations are read-only

The auto-generation skip is configured in:
```typescript
// apps/api/src/utils/scripts/generate-modules.ts
if (resource.tableName === 'transactions') {
  console.log(`⏩ Skipping transactions (manually implemented with special logic)`);
  continue;
}
```

---

## Best Practices

### Querying Transactions

1. **Use Date Ranges**: Always filter by date range for better performance
2. **Paginate Results**: Use pagination for large transaction lists
3. **Filter by Status**: Focus on relevant transaction states
4. **Provider Filtering**: Filter by provider for provider-specific analysis
5. **Cache Results**: Cache transaction lists for frequently accessed data

### Understanding Transaction Flow

1. **Pending State**: Transaction initiated but not confirmed
2. **Processing**: Payment being processed by provider
3. **Completed**: Payment successfully processed
4. **Failed**: Payment attempt failed
5. **Refunded**: Payment was refunded to customer

### Reconciliation

1. **Use Transaction IDs**: Unique identifiers for matching
2. **Check SPI Details**: For SPI transactions, use spi_tx_id for reconciliation
3. **Verify Amounts**: Cross-reference gross, net, and fee amounts
4. **Monitor Status**: Track status changes over time
5. **Date Filtering**: Use date ranges for period-specific reconciliation

### Security

1. **API Key Management**: Rotate API keys regularly
2. **Environment Separation**: Use test mode for development
3. **Rate Limiting**: Respect API rate limits (5000 requests per 15 minutes)
4. **Error Handling**: Properly handle all error responses
5. **Audit Logs**: Keep logs of all API access

---

## Reporting and Analytics

Use the Transactions API to build custom reporting:

### Revenue Reports
Filter by date range and status to calculate revenue.

### Provider Performance
Filter by provider to analyze provider success rates.

### Currency Reports
Filter by currency for multi-currency analysis.

### Customer Behavior
Filter by customer_id to analyze customer transactions (use Customers API for customer details).

### Product Performance
Filter by product_id to analyze product sales (use Products API for product details).

---

## Support

For questions or issues with the Transactions API:
- 📧 Email: support@lomi.africa
- 📖 Documentation: https://docs.lomi.africa
- 🐛 Bug Reports: https://github.com/lomi/api/issues

