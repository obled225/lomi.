# Accounts API

The Accounts API enables merchants to consult their account balances and manage their financial data. This module leverages RPC functions from the database for optimal performance and data consistency.

## Features

- ✅ View all accounts by organization
- ✅ Get detailed account information by ID
- ✅ Fetch current account balance (all currencies or specific)
- ✅ Get detailed balance breakdown (available, pending, total)
- ✅ Check available balance before operations
- ✅ Multi-currency support (XOF, USD, EUR)
- ✅ SPI (UEMOA) account integration
- ✅ Automatic currency conversion

## Endpoints

### 1. List All Accounts
```
GET /accounts
```
Returns all accounts for the authenticated merchant's organization.

**Response:**
```json
[
  {
    "account_id": "123e4567-e89b-12d3-a456-426614174000",
    "organization_id": "123e4567-e89b-12d3-a456-426614174001",
    "balance": 100000.00,
    "currency_code": "XOF",
    "is_spi_account": true,
    "spi_account_number": "SN00012345678901234567890",
    "spi_account_type": "CACC",
    "spi_account_status": "OUVERT",
    "spi_account_balance": 100000.00,
    "spi_account_balance_synced_at": "2024-01-01T00:00:00Z",
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  }
]
```

### 2. Get Account by ID
```
GET /accounts/:id
```
Returns detailed information about a specific account.

**Response:** Same as single account object above

### 3. Get Account Balance
```
GET /accounts/balance?currency=XOF
```
Fetch current account balance for all currencies or filter by specific currency.

**Query Parameters:**
- `currency` (optional): Filter by currency code (XOF, USD, EUR)

**Response:**
```json
[
  {
    "currency_code": "XOF",
    "balance": 100000.00,
    "last_updated": "2024-01-01T00:00:00Z"
  }
]
```

**RPC Function Used:** `fetch_account_balance(p_merchant_id, p_organization_id, p_currency_code)`

### 4. Get Balance Breakdown
```
GET /accounts/balance/breakdown?target_currency=USD
```
Fetch detailed balance breakdown including available, pending, and total balances with optional currency conversion.

**Query Parameters:**
- `target_currency` (optional): Convert balances to target currency (XOF, USD, EUR)

**Response:**
```json
[
  {
    "currency_code": "XOF",
    "available_balance": 95000.00,
    "pending_balance": 5000.00,
    "total_balance": 100000.00,
    "converted_available_balance": 157.50,
    "converted_pending_balance": 8.25,
    "converted_total_balance": 165.75,
    "target_currency": "USD"
  }
]
```

**RPC Function Used:** `fetch_balance_breakdown(p_merchant_id, p_target_currency)`

### 5. Check Available Balance
```
GET /accounts/balance/check/:currency
```
Check if merchant has sufficient available balance in the specified currency.

**Response:**
```json
{
  "has_sufficient_balance": true,
  "available_balance": 95000.00
}
```

**RPC Function Used:** `check_merchant_available_balance(p_merchant_id, p_currency_code)`

## Authentication

All endpoints require API key authentication via the `x-api-key` header.

```bash
curl -H "x-api-key: your-api-key-here" \
  https://api.lomi.africa/accounts/balance
```

## SPI Account Information

For UEMOA merchants, the API provides SPI-specific account information:

- **spi_account_number**: Unique account identifier in the SPI system
- **spi_account_type**: Account type (CACC, CARD, CASH, etc.)
- **spi_account_status**: Current status (OUVERT, BLOQUE, CLOTURE)
- **spi_account_balance**: Real-time balance from the bank
- **spi_account_balance_synced_at**: Last sync timestamp
- **spi_account_balance_sync_error**: Error message if sync failed

## Implementation Details

### Architecture

The Accounts API follows a clean architecture pattern:

```
accounts/
├── accounts.controller.ts    # HTTP endpoints and request handling
├── accounts.service.ts        # Business logic and RPC calls
├── accounts.module.ts         # NestJS module configuration
└── dto/
    ├── account-response.dto.ts              # Full account details
    ├── account-balance-response.dto.ts      # Balance query result
    └── balance-breakdown-response.dto.ts    # Detailed breakdown
```

### RPC Functions vs Direct Queries

This module prioritizes RPC functions over direct table queries for:
- ✅ Better performance (optimized database functions)
- ✅ Data consistency (business logic in one place)
- ✅ Security (encapsulated data access)
- ✅ Maintainability (centralized logic)

**RPC Functions Used:**
1. `fetch_account_balance` - Get current balance
2. `fetch_balance_breakdown` - Get detailed breakdown
3. `check_merchant_available_balance` - Validate sufficient funds

**Direct Queries Used:**
1. List all accounts (no RPC equivalent)
2. Get single account (no RPC equivalent)

### Multi-Tenancy

All endpoints enforce organization-level isolation:
- Merchants can only access accounts for their organization
- Enforced via `organization_id` filtering
- Authenticated via API key with organization context

### Currency Support

Supports three currencies:
- **XOF**: West African CFA franc (UEMOA)
- **USD**: US Dollar
- **EUR**: Euro

Automatic conversion available via `target_currency` parameter.

## Error Handling

The service handles common error cases:

```typescript
// Account not found
{
  "statusCode": 404,
  "message": "Account with ID xxx not found"
}

// Invalid currency code
{
  "statusCode": 400,
  "message": "Invalid currency code"
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

// Get all accounts
const accounts = await axios.get(`${baseURL}/accounts`, {
  headers: { 'x-api-key': apiKey }
});

// Get balance breakdown in USD
const breakdown = await axios.get(
  `${baseURL}/accounts/balance/breakdown?target_currency=USD`,
  { headers: { 'x-api-key': apiKey } }
);

// Check available balance
const check = await axios.get(
  `${baseURL}/accounts/balance/check/XOF`,
  { headers: { 'x-api-key': apiKey } }
);
```

### cURL

```bash
# Get all accounts
curl -H "x-api-key: your-api-key" \
  https://api.lomi.africa/accounts

# Get balance for XOF
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/accounts/balance?currency=XOF"

# Get breakdown with USD conversion
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/accounts/balance/breakdown?target_currency=USD"
```

### Python

```python
import requests

api_key = 'your-api-key-here'
base_url = 'https://api.lomi.africa'
headers = {'x-api-key': api_key}

# Get balance breakdown
response = requests.get(
    f'{base_url}/accounts/balance/breakdown',
    params={'target_currency': 'USD'},
    headers=headers
)
breakdown = response.json()
```

## Related Database Functions

See [`apps/api/.cursor/guides/functions-list.md`](../../.cursor/guides/functions-list.md) for complete list of database functions.

**Account-related functions:**
- `fetch_account_balance` - Get current balance
- `fetch_balance_breakdown` - Get detailed breakdown
- `check_merchant_available_balance` - Check sufficient balance
- `ensure_merchant_account` - Create account if not exists
- `update_merchant_account_balance` - Update balance after transaction
- `check_merchant_balance_for_beneficiary_payout` - Validate payout balance

## Protected from Auto-Generation

This module is manually implemented and protected from auto-generation. The `generate-modules.ts` script skips the `accounts` table to preserve custom RPC-based implementation.

```typescript
// In generate-modules.ts
if (
  resource.tableName === 'checkout_sessions' ||
  resource.tableName === 'webhooks' ||
  resource.tableName === 'accounts'  // ← Protected
) {
  console.log(`⏩ Skipping ${resource.tableName} (manually implemented)`);
  continue;
}
```

## Next Steps

Future enhancements:
- [ ] Add webhook notifications for balance changes
- [ ] Implement balance history tracking
- [ ] Add support for account freezing/unfreezing
- [ ] Implement automated balance reconciliation
- [ ] Add real-time SPI balance sync
- [ ] Support for additional currencies

