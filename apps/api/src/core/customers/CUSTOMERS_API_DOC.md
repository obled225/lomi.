# Customers API

The Customers API allows merchants to manage their customer database. This includes creating, listing, updating, and deleting customer records, as well as viewing customer transaction history.

## Features

- ✅ **List Customers** - Retrieve all customers with powerful filtering options
- ✅ **Get Customer** - Fetch detailed information about a specific customer
- ✅ **Create Customer** - Add new customers to your organization
- ✅ **Update Customer** - Modify existing customer information
- ✅ **Delete Customer** - Soft delete customers (data preserved)
- ✅ **Customer Transactions** - View all transactions for a specific customer
- ✅ **Activity Status Filtering** - Filter customers by active/inactive status
- ✅ **Customer Type Filtering** - Filter by business or individual customers
- ✅ **Search** - Search customers by name or email
- ✅ **Pagination** - Efficiently handle large customer lists
- ❌ **Admin-Only Fields** - SPI internal fields not exposed (spi_alias_shid, spi_alias_mbno, spi_primary_alias)

## Endpoints

### 1. List Customers

```
GET /customers
```

Retrieves all customers for your organization with optional filtering.

**Query Parameters:**
- `search` (optional): Search by name or email
- `type` (optional): Filter by customer type (`business`, `individual`, or `all`)
- `status` (optional): Filter by activity status (`active`, `inactive`, or `all`)
  - `active`: Customers with at least one completed or refunded transaction
  - `inactive`: Customers with no completed transactions
  - `all`: All customers regardless of transaction history
- `page` (optional): Page number for pagination (default: 1)
- `pageSize` (optional): Number of items per page (default: 50, max: 200)

**Response:**
```json
{
  "customers": [
    {
      "customer_id": "123e4567-e89b-12d3-a456-426614174000",
      "organization_id": "789e0123-e89b-12d3-a456-426614174000",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone_number": "+221771234567",
      "whatsapp_number": "+221771234567",
      "country": "Senegal",
      "city": "Dakar",
      "address": "123 Main Street",
      "postal_code": "12345",
      "is_business": false,
      "metadata": { "custom_field": "value" },
      "environment": "live",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "pageSize": 50,
    "totalCount": 100,
    "totalPages": 2
  }
}
```

**RPC Function Used:** `fetch_customers_with_status(p_merchant_id, p_organization_id, p_search_term, p_customer_type, p_activity_status, p_offset, p_limit, p_environment)`

---

### 2. Get Customer

```
GET /customers/:id
```

Retrieves detailed information about a specific customer.

**Parameters:**
- `id`: Customer UUID

**Response:**
```json
{
  "customer_id": "123e4567-e89b-12d3-a456-426614174000",
  "organization_id": "789e0123-e89b-12d3-a456-426614174000",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone_number": "+221771234567",
  "whatsapp_number": "+221771234567",
  "country": "Senegal",
  "city": "Dakar",
  "address": "123 Main Street",
  "postal_code": "12345",
  "is_business": false,
  "metadata": { "custom_field": "value" },
  "environment": "live",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**Security:** Direct query with organization_id filtering

---

### 3. Create Customer

```
POST /customers
```

Creates a new customer in your organization.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone_number": "+221771234567",
  "whatsapp_number": "+221771234567",
  "country": "Senegal",
  "city": "Dakar",
  "address": "123 Main Street",
  "postal_code": "12345",
  "is_business": false,
  "metadata": { "custom_field": "value" }
}
```

**Required Fields:**
- `name`: Customer full name

**Optional Fields:**
- `email`: Customer email address
- `phone_number`: Customer phone number
- `whatsapp_number`: Customer WhatsApp number
- `country`: Customer country
- `city`: Customer city
- `address`: Customer street address
- `postal_code`: Customer postal code
- `is_business`: Whether customer is a business (default: false)
- `metadata`: Additional custom data as JSON object

**Response:**
```json
{
  "customer_id": "123e4567-e89b-12d3-a456-426614174000",
  "organization_id": "789e0123-e89b-12d3-a456-426614174000",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone_number": "+221771234567",
  "whatsapp_number": "+221771234567",
  "country": "Senegal",
  "city": "Dakar",
  "address": "123 Main Street",
  "postal_code": "12345",
  "is_business": false,
  "metadata": { "custom_field": "value" },
  "environment": "live",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**RPC Function Used:** `create_customer(p_merchant_id, p_organization_id, p_name, p_email, p_phone_number, p_whatsapp_number, p_country, p_city, p_address, p_postal_code, p_is_business, p_environment)`

---

### 4. Update Customer

```
PATCH /customers/:id
```

Updates an existing customer. All fields are optional.

**Parameters:**
- `id`: Customer UUID

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "phone_number": "+221771234568",
  "metadata": { "updated_field": "new_value" }
}
```

**Response:**
```json
{
  "customer_id": "123e4567-e89b-12d3-a456-426614174000",
  "organization_id": "789e0123-e89b-12d3-a456-426614174000",
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "phone_number": "+221771234568",
  "whatsapp_number": "+221771234567",
  "country": "Senegal",
  "city": "Dakar",
  "address": "123 Main Street",
  "postal_code": "12345",
  "is_business": false,
  "metadata": { "updated_field": "new_value" },
  "environment": "live",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-16T14:20:00Z"
}
```

**RPC Function Used:** `update_customer(p_customer_id, p_name, p_email, p_phone_number, p_whatsapp_number, p_country, p_city, p_address, p_postal_code, p_is_business)`

---

### 5. Delete Customer

```
DELETE /customers/:id
```

Soft deletes a customer. The customer record is marked as deleted but preserved in the database.

**Parameters:**
- `id`: Customer UUID

**Response:**
```json
{
  "message": "Customer deleted successfully"
}
```

**RPC Function Used:** `delete_customer(p_customer_id)`

---

### 6. Get Customer Transactions

```
GET /customers/:id/transactions
```

Retrieves all transactions for a specific customer.

**Parameters:**
- `id`: Customer UUID

**Response:**
```json
[
  {
    "transaction_id": "abc123-def456-789",
    "description": "Payment for Product A",
    "gross_amount": 10000.00,
    "currency_code": "XOF",
    "created_at": "2024-01-15T10:30:00Z",
    "status": "completed"
  },
  {
    "transaction_id": "xyz789-abc123-456",
    "description": "Subscription Renewal",
    "gross_amount": 5000.00,
    "currency_code": "XOF",
    "created_at": "2024-01-10T08:15:00Z",
    "status": "completed"
  }
]
```

**RPC Function Used:** `fetch_customer_transactions(p_customer_id, p_environment)`

---

## Authentication

All endpoints require API key authentication via the `x-api-key` header.

```bash
curl -H "x-api-key: your-api-key" https://api.lomi.africa/customers
```

---

## Example Usage

### TypeScript/JavaScript

```typescript
import axios from 'axios';

const apiKey = 'your-api-key';
const baseURL = 'https://api.lomi.africa';

// List all active customers
const listCustomers = async () => {
  const response = await axios.get(`${baseURL}/customers`, {
    headers: { 'x-api-key': apiKey },
    params: {
      status: 'active',
      page: 1,
      pageSize: 50
    }
  });
  return response.data;
};

// Get a specific customer
const getCustomer = async (customerId: string) => {
  const response = await axios.get(`${baseURL}/customers/${customerId}`, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};

// Create a new customer
const createCustomer = async () => {
  const response = await axios.post(`${baseURL}/customers`, {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone_number: '+221771234567',
    country: 'Senegal',
    city: 'Dakar',
    is_business: false
  }, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};

// Update a customer
const updateCustomer = async (customerId: string) => {
  const response = await axios.patch(`${baseURL}/customers/${customerId}`, {
    email: 'new.email@example.com',
    metadata: { vip: true }
  }, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};

// Get customer transactions
const getCustomerTransactions = async (customerId: string) => {
  const response = await axios.get(`${baseURL}/customers/${customerId}/transactions`, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};
```

### cURL

```bash
# List customers with search and filtering
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/customers?search=john&status=active&page=1&pageSize=50"

# Get a specific customer
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/customers/123e4567-e89b-12d3-a456-426614174000"

# Create a customer
curl -X POST -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone_number": "+221771234567",
    "country": "Senegal",
    "city": "Dakar",
    "is_business": false
  }' \
  "https://api.lomi.africa/customers"

# Update a customer
curl -X PATCH -H "x-api-key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{"email": "new.email@example.com"}' \
  "https://api.lomi.africa/customers/123e4567-e89b-12d3-a456-426614174000"

# Delete a customer
curl -X DELETE -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/customers/123e4567-e89b-12d3-a456-426614174000"

# Get customer transactions
curl -H "x-api-key: your-api-key" \
  "https://api.lomi.africa/customers/123e4567-e89b-12d3-a456-426614174000/transactions"
```

### Python

```python
import requests

api_key = 'your-api-key'
base_url = 'https://api.lomi.africa'
headers = {'x-api-key': api_key}

# List customers with filtering
def list_customers(status='active', page=1, page_size=50):
    response = requests.get(
        f'{base_url}/customers',
        headers=headers,
        params={
            'status': status,
            'page': page,
            'pageSize': page_size
        }
    )
    return response.json()

# Get a specific customer
def get_customer(customer_id):
    response = requests.get(
        f'{base_url}/customers/{customer_id}',
        headers=headers
    )
    return response.json()

# Create a customer
def create_customer():
    response = requests.post(
        f'{base_url}/customers',
        headers=headers,
        json={
            'name': 'John Doe',
            'email': 'john.doe@example.com',
            'phone_number': '+221771234567',
            'country': 'Senegal',
            'city': 'Dakar',
            'is_business': False
        }
    )
    return response.json()

# Update a customer
def update_customer(customer_id):
    response = requests.patch(
        f'{base_url}/customers/{customer_id}',
        headers=headers,
        json={
            'email': 'new.email@example.com',
            'metadata': {'vip': True}
        }
    )
    return response.json()

# Get customer transactions
def get_customer_transactions(customer_id):
    response = requests.get(
        f'{base_url}/customers/{customer_id}/transactions',
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
**Cause:** Customer doesn't exist or doesn't belong to your organization

```json
{
  "statusCode": 404,
  "message": "Customer with ID 123e4567-e89b-12d3-a456-426614174000 not found or access denied"
}
```

**Solution:** Verify the customer ID is correct and belongs to your organization.

#### 400 Bad Request
**Cause:** Invalid input data (e.g., invalid email format)

```json
{
  "statusCode": 400,
  "message": [
    "email must be an email"
  ]
}
```

**Solution:** Check your request body and ensure all fields meet the validation requirements.

---

## Implementation Details

### Architecture

The Customers API follows a **security-first, merchant-centric** architecture:

1. **Service Role Key**: Uses Supabase service role key to bypass RLS policies
2. **API Key Guard**: Authenticates requests via `ApiKeyGuard`
3. **Organization Filtering**: ALL queries filtered by `organization_id`
4. **RPC Functions**: Uses database functions for business logic when available
5. **Direct Queries**: Uses direct Supabase queries for simple operations

### RPC Functions Used

1. **fetch_customers_with_status**: Lists customers with advanced filtering
   - Supports search by name/email
   - Filters by customer type (business/individual)
   - Filters by activity status (active/inactive)
   - Returns total count for pagination

2. **create_customer**: Creates new customer with validation
   - Auto-assigns `organization_id` and `created_by`
   - Sets environment to 'live'

3. **update_customer**: Updates customer information
   - Validates ownership before update
   - Updates `updated_at` timestamp automatically

4. **delete_customer**: Soft deletes customer
   - Sets `is_deleted` to true
   - Sets `deleted_at` timestamp
   - Preserves data for audit trail

5. **fetch_customer_transactions**: Retrieves customer transaction history
   - Only returns completed and refunded transactions
   - Filters by environment

### Security Considerations

#### Multi-Tenancy
Every operation filters by `organization_id` to ensure data isolation:

```typescript
.eq('organization_id', user.organizationId)
```

#### Ownership Validation
Before any update or delete operation, the service verifies the customer belongs to the requesting merchant's organization.

#### Fields NOT Exposed
For security and privacy, these fields are never exposed via the API:
- `is_deleted` - Internal soft delete flag
- `deleted_at` - Internal deletion timestamp
- `created_by` - Internal merchant reference
- `spi_alias_shid` - SPI internal field
- `spi_alias_mbno` - SPI internal field
- `spi_primary_alias` - SPI internal field

---

## Activity Status Filtering

The API provides an intelligent activity status filter to help merchants segment their customer base:

### Active Customers
Customers who have completed at least one transaction (status = 'completed' or 'refunded')

```bash
GET /customers?status=active
```

**Use Cases:**
- Target customers for promotions
- Calculate active customer base
- Identify engaged customers

### Inactive Customers
Customers who exist in the database but have never completed a transaction

```bash
GET /customers?status=inactive
```

**Use Cases:**
- Re-engagement campaigns
- Identify leads that haven't converted
- Clean up test data

### All Customers
Returns all customers regardless of transaction history

```bash
GET /customers?status=all
```

**Use Cases:**
- Full customer export
- Database backup
- Complete customer list

---

## Search and Filtering

### Search by Name or Email
```bash
GET /customers?search=john
```
Returns customers where name or email contains "john" (case-insensitive)

### Filter by Customer Type
```bash
GET /customers?type=business
```
Options: `business`, `individual`, `all`

### Combine Filters
```bash
GET /customers?search=john&type=individual&status=active&page=1&pageSize=25
```

---

## Pagination

The API uses offset-based pagination for efficient data retrieval:

- **Default page size:** 50
- **Maximum page size:** 200
- **Page numbering:** Starts at 1

**Response includes:**
- `customers`: Array of customer objects
- `pagination.page`: Current page number
- `pagination.pageSize`: Items per page
- `pagination.totalCount`: Total number of customers matching filters
- `pagination.totalPages`: Total number of pages

---

## Protected from Auto-Generation

The Customers API is manually implemented and protected from auto-generation in `generate-modules.ts`. This allows for:

1. **Custom RPC Integration**: Leverages specialized database functions
2. **Advanced Filtering**: Implements activity status and search filtering
3. **Pagination Logic**: Custom pagination with total count
4. **Transaction History**: Additional endpoint for customer transactions
5. **Metadata Handling**: Special handling for JSON metadata field
6. **Security Logic**: Enhanced ownership validation and field filtering

The auto-generation skip is configured in:
```typescript
// apps/api/src/utils/scripts/generate-modules.ts
if (resource.tableName === 'customers') {
  console.log(`⏩ Skipping customers (manually implemented with special logic)`);
  continue;
}
```

---

## Best Practices

### Creating Customers
1. **Validate Email**: Ensure email is valid before creation
2. **Use Metadata**: Store custom fields in metadata for flexibility
3. **Set Customer Type**: Properly categorize business vs individual customers
4. **Include Contact Info**: Phone numbers improve communication options

### Updating Customers
1. **Partial Updates**: Only send fields you want to update
2. **Preserve Metadata**: When updating metadata, include existing fields
3. **Validate Before Update**: Check customer exists before attempting update

### Listing Customers
1. **Use Pagination**: Always paginate for large customer lists
2. **Filter by Status**: Use activity status to segment customers
3. **Search Efficiently**: Combine search with filters for precise results
4. **Cache Results**: Consider caching customer lists for better performance

### Security
1. **API Key Management**: Rotate API keys regularly
2. **Environment Separation**: Use test mode for development
3. **Rate Limiting**: Respect API rate limits (5000 requests per 15 minutes)
4. **Error Handling**: Properly handle all error responses

---

## Support

For questions or issues with the Customers API:
- 📧 Email: support@lomi.africa
- 📖 Documentation: https://docs.lomi.africa
- 🐛 Bug Reports: https://github.com/lomi/api/issues

