# API Development Methodology

This document explains the systematic approach we used to build the **Accounts API** and **Organizations API**. Follow this methodology for all future API endpoints to ensure consistency, security, and quality.

---

## Table of Contents

1. [Overview](#overview)
2. [Step-by-Step Process](#step-by-step-process)
3. [Guardrails & Best Practices](#guardrails--best-practices)
4. [Error Handling Strategy](#error-handling-strategy)
5. [RPC vs Direct Queries](#rpc-vs-direct-queries)
6. [Security Considerations](#security-considerations)
7. [Documentation Standards](#documentation-standards)
8. [Checklist Template](#checklist-template)

---

## Overview

### Our Approach

We follow a **security-first, merchant-centric** approach where:
- ✅ Merchants can ONLY access their own data
- ✅ Admin-only metrics are NEVER exposed
- ✅ RPC functions are preferred for business logic
- ✅ Comprehensive error handling for all scenarios
- ✅ Detailed documentation with examples

### Key Principles

1. **Read-Only by Default** - Merchants fetch data, admins control calculations
2. **Organization Isolation** - All queries filtered by `organization_id`
3. **RPC First** - Use database functions when available
4. **Fail Loudly** - Clear error messages, not silent failures
5. **Document Everything** - Each endpoint needs examples

---

## Step-by-Step Process

### Step 1: Understand the Database Table

**Before writing any code, answer these questions:**

#### Question Set A: Table Structure
- [ ] What is the table name?
- [ ] What is the primary key field?
- [ ] What columns exist?
- [ ] Which columns should be exposed to merchants?
- [ ] Which columns are admin-only?

#### Question Set B: Relationships
- [ ] Does it have `organization_id`?
- [ ] Does it have `merchant_id`?
- [ ] Does it have `created_by`?
- [ ] What foreign keys exist?
- [ ] How do we enforce multi-tenancy?

#### Question Set C: Business Logic
- [ ] Are there RPC functions for this table?
- [ ] What operations should merchants perform? (read, create, update, delete)
- [ ] What are the use cases?
- [ ] What data should NOT be exposed?

### Example: Accounts API

```sql
-- Table structure
CREATE TABLE accounts (
    account_id UUID PRIMARY KEY,
    organization_id UUID NOT NULL,  -- ✅ Multi-tenancy
    balance NUMERIC(15,2),
    currency_code currency_code,
    is_spi_account BOOLEAN,
    spi_account_balance NUMERIC(15,2),  -- ✅ Expose (useful)
    merchant_lifetime_value NUMERIC,     -- ❌ Admin-only (don't expose)
    ...
);
```

**Analysis:**
- ✅ Has `organization_id` → Use for filtering
- ✅ RPC functions exist → Use them (`fetch_account_balance`, `fetch_balance_breakdown`)
- ❌ No create/update needed → Read-only API

---

### Step 2: Design the DTOs

Create **three types of DTOs**:

#### 1. Response DTO (Always Required)
Shows the complete data structure:

```typescript
// dto/account-response.dto.ts
export class AccountResponseDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique account identifier',
  })
  account_id: string;

  @ApiProperty({
    example: 100000.0,
    description: 'Account balance',
  })
  balance: number;

  // ❌ Do NOT include admin-only fields
  // merchant_lifetime_value is excluded
  
  // ... other fields
}
```

#### 2. Create DTO (If Needed)
For POST endpoints:

```typescript
// dto/create-resource.dto.ts
export class CreateResourceDto {
  @ApiProperty({ example: 'value' })
  field: string;
  
  // ❌ Exclude: id, created_at, updated_at, organization_id, merchant_id
  // These are set by system
}
```

#### 3. Update DTO (If Needed)
For PATCH endpoints:

```typescript
// dto/update-resource.dto.ts
export class UpdateResourceDto {
  @ApiProperty({ required: false, example: 'value' })
  field?: string;
  
  // All fields optional
}
```

### DTO Guidelines:

✅ **DO:**
- Use proper types from `@/utils/types/api`
- Include helpful descriptions
- Provide realistic examples
- Document what fields mean

❌ **DON'T:**
- Expose admin-only fields (LTV, internal IDs, etc.)
- Include system fields in create/update DTOs
- Use generic examples like "string" or "123"

---

### Step 3: Build the Service Layer

The service layer contains **all business logic** and **security filtering**.

#### Service Template:

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { SupabaseService } from '@/utils/supabase/supabase.service';
import { AuthContext } from '@/core/common/decorators/current-user.decorator';

@Injectable()
export class ResourceService {
  constructor(private readonly supabase: SupabaseService) {}

  // === READ OPERATIONS ===
  
  /**
   * List all resources for merchant's organization
   * Uses direct query (no RPC equivalent)
   */
  async findAll(user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('resources')
      .select('*')
      .eq('organization_id', user.organizationId)  // ← SECURITY
      .eq('is_deleted', false);                    // ← FILTER

    if (error) throw new Error(error.message);
    
    // Check if empty and provide helpful message
    if (data.length === 0) {
      // Optional: Throw error or return empty array
      // Decide based on use case
    }
    
    return data;
  }

  /**
   * Get single resource by ID
   * Validates ownership before returning
   */
  async findOne(id: string, user: AuthContext) {
    // Enforce organization ownership
    const { data, error } = await this.supabase
      .getClient()
      .from('resources')
      .select('*')
      .eq('resource_id', id)
      .eq('organization_id', user.organizationId)  // ← SECURITY
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        throw new NotFoundException(`Resource with ID ${id} not found`);
      }
      throw new Error(error.message);
    }
    
    return data;
  }

  /**
   * Use RPC function when available
   * Uses: fetch_resource_details(p_merchant_id, p_organization_id)
   */
  async getDetails(user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .rpc('fetch_resource_details' as any, {
        p_merchant_id: user.merchantId,
        p_organization_id: user.organizationId,
      } as any);

    if (error) throw new Error(error.message);

    const result = data as any;

    // ✅ Validate result exists
    if (!result || !result.resource_id) {
      throw new NotFoundException('Resource not found');
    }

    // ✅ Validate ownership
    if (result.organization_id !== user.organizationId) {
      throw new NotFoundException('Resource not found or access denied');
    }

    // ❌ Filter out admin fields
    return {
      resource_id: result.resource_id,
      public_field: result.public_field,
      // merchant_secret_field: EXCLUDED
    };
  }

  // === CREATE OPERATIONS (if allowed) ===
  
  async create(createDto: CreateResourceDto, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('resources')
      .insert({
        ...createDto,
        organization_id: user.organizationId,  // ← INJECT
        created_by: user.merchantId,           // ← INJECT
      } as any)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
```

#### Service Layer Checklist:

- [ ] **ALL queries filtered by `organization_id`**
- [ ] **RPC functions used when available**
- [ ] **Error handling for not found (404)**
- [ ] **Error handling for unauthorized access**
- [ ] **Validation that result belongs to user**
- [ ] **Admin fields filtered out**
- [ ] **Helper error messages provided**

---

### Step 4: Build the Controller Layer

The controller layer handles **HTTP concerns** only.

#### Controller Template:

```typescript
import { Controller, UseGuards, Get, Post, Patch, Delete, Param, Query, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiSecurity, ApiQuery } from '@nestjs/swagger';
import { ResourceService } from './resource.service';
import { ResourceResponseDto } from './dto/resource-response.dto';
import { ApiKeyGuard } from '@/core/common/guards/api-key.guard';
import { CurrentUser, type AuthContext } from '@/core/common/decorators/current-user.decorator';

@ApiTags('Resources')
@ApiSecurity('api-key')
@UseGuards(ApiKeyGuard)
@Controller('resources')
export class ResourceController {
  constructor(private readonly service: ResourceService) {}

  @Get()
  @ApiOperation({
    summary: 'List all resources',
    description: 'Returns all resources for the authenticated merchant\'s organization',
  })
  @ApiResponse({
    status: 200,
    description: 'List of resources',
    type: [ResourceResponseDto],
  })
  findAll(@CurrentUser() user: AuthContext) {
    return this.service.findAll(user);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get resource by ID',
    description: 'Returns detailed information about a specific resource',
  })
  @ApiResponse({
    status: 200,
    description: 'Resource details',
    type: ResourceResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Resource not found or access denied',
  })
  findOne(@Param('id') id: string, @CurrentUser() user: AuthContext) {
    return this.service.findOne(id, user);
  }

  // Optional: Query parameters
  @Get('filter/search')
  @ApiOperation({ summary: 'Search resources' })
  @ApiQuery({
    name: 'currency',
    required: false,
    description: 'Filter by currency code',
    enum: ['XOF', 'USD', 'EUR'],
  })
  @ApiResponse({
    status: 200,
    description: 'Filtered resources',
    type: [ResourceResponseDto],
  })
  search(
    @CurrentUser() user: AuthContext,
    @Query('currency') currency?: string,
  ) {
    return this.service.search(user, currency);
  }
}
```

#### Controller Checklist:

- [ ] **`@ApiTags` for grouping**
- [ ] **`@ApiSecurity('api-key')` for auth**
- [ ] **`@UseGuards(ApiKeyGuard)` applied**
- [ ] **Clear operation summaries**
- [ ] **Response types documented**
- [ ] **Error responses documented**
- [ ] **Query parameters documented with enums**
- [ ] **`@CurrentUser()` used for auth context**

---

### Step 5: Protect from Auto-Generation

Add your table to the skip list:

```typescript
// In generate-modules.ts
if (
  resource.tableName === 'checkout_sessions' ||
  resource.tableName === 'webhooks' ||
  resource.tableName === 'accounts' ||
  resource.tableName === 'organizations' ||
  resource.tableName === 'your_new_table'  // ← Add here
) {
  console.log(`⏩ Skipping ${resource.tableName} (manually implemented)`);
  continue;
}
```

---

### Step 6: Write Comprehensive Documentation

Create a `@{SERVICE_NAME}_API_DOC.md` file:

#### Documentation Template:

```markdown
# {Service Name} API

Brief description of what this API does.

## Features

- ✅ Feature 1
- ✅ Feature 2
- ❌ What's NOT included (admin features)

## Endpoints

### 1. Endpoint Name
\```
GET /resources
\```

Description of what this endpoint does.

**Response:**
\```json
{
  "field": "value"
}
\```

**RPC Function Used:** `function_name(params)` (if applicable)

## Authentication

\```bash
curl -H "x-api-key: your-key" https://api.lomi.africa/resources
\```

## Example Usage

### TypeScript/JavaScript
\```typescript
const response = await axios.get('/resources', {
  headers: { 'x-api-key': apiKey }
});
\```

### cURL
\```bash
curl -H "x-api-key: key" https://api.lomi.africa/resources
\```

### Python
\```python
response = requests.get('/resources', headers={'x-api-key': key})
\```

## Error Handling

Common errors and their meanings.

## Implementation Details

- Architecture overview
- RPC functions used
- Security considerations

## Protected from Auto-Generation

Explain why this is manually maintained.
```

---

## Guardrails & Best Practices

### What to ALWAYS Expose

✅ **Resource identifiers** (IDs)
✅ **Timestamps** (created_at, updated_at)
✅ **Status fields** (status, is_active)
✅ **Merchant's own data** (names, amounts, descriptions)
✅ **Aggregated metrics** (MRR, ARR, total_revenue)
✅ **Balances** (available, pending, total)

### What to NEVER Expose

❌ **Admin-only metrics** (LTV, internal scores)
❌ **Other merchants' data**
❌ **System internals** (internal_status, admin_notes)
❌ **Security tokens** (webhook secrets, API keys)
❌ **Sensitive business logic** (commission rates, internal fees)
❌ **PII of other users** (customer emails without consent)

### Decision Matrix

| Data Type | Expose? | Reasoning |
|-----------|---------|-----------|
| Own balance | ✅ | Merchant's money |
| Own MRR/ARR | ✅ | Own business metrics |
| Own LTV | ❌ | Admin uses for analysis |
| Customer list | ✅ | Merchant created them |
| Customer LTV | ❌ | Internal prediction |
| Transaction amounts | ✅ | Merchant's transactions |
| Internal fees | ❌ | Business sensitive |
| API usage stats | ✅ | Monitor own usage |
| Rate limit details | ✅ | Know own limits |

### When in Doubt, ASK:

1. **Is this data created by the merchant?** → Probably expose
2. **Is this used for admin decisions?** → Probably hide
3. **Would competitors benefit from this?** → Probably hide
4. **Does the merchant need this for their business?** → Probably expose

---

## Error Handling Strategy

### Error Types

#### 1. Authentication Errors (401)
```typescript
// When: Invalid or missing API key
throw new UnauthorizedException('Invalid API key');
```

#### 2. Not Found Errors (404)
```typescript
// When: Resource doesn't exist or doesn't belong to merchant
if (!data) {
  throw new NotFoundException(
    'Resource not found. You may need to create it first.'
  );
}
```

#### 3. Validation Errors (400)
```typescript
// When: Invalid input data
throw new BadRequestException(
  'Invalid currency code. Must be one of: XOF, USD, EUR'
);
```

#### 4. Server Errors (500)
```typescript
// When: Unexpected database or system errors
if (error) {
  throw new Error(error.message);
}
```

### Error Message Guidelines

✅ **DO:**
- Be specific about what went wrong
- Suggest what the user should do
- Use friendly, professional language
- Include relevant details (e.g., currency code)

❌ **DON'T:**
- Expose system internals
- Use technical jargon
- Blame the user
- Return stack traces to production

### Examples

```typescript
// ✅ GOOD
throw new NotFoundException(
  'No account found for currency EUR. You may need to make a transaction in this currency first.'
);

// ❌ BAD
throw new Error('PGRST116: no rows returned');

// ✅ GOOD
throw new BadRequestException(
  'Invalid date format. Please use YYYY-MM-DD (e.g., 2024-01-15)'
);

// ❌ BAD
throw new Error('Invalid date');

// ✅ GOOD
if (result.organization_id !== user.organizationId) {
  throw new NotFoundException('Resource not found or access denied');
}

// ❌ BAD
throw new ForbiddenException('You do not have permission to access organization ' + result.organization_id);
```

---

## RPC vs Direct Queries

### When to Use RPC Functions

✅ **Use RPC when:**
- Function exists in database
- Complex calculations needed
- Business logic in database
- Multiple tables involved
- Need transactions
- Performance optimizations in DB

**Example:**
```typescript
// ✅ GOOD: Use RPC for balance breakdown
await this.supabase.rpc('fetch_balance_breakdown', {
  p_merchant_id: user.merchantId,
  p_target_currency: 'USD',
});
```

### When to Use Direct Queries

✅ **Use direct queries when:**
- Simple SELECT with filters
- No RPC function exists
- Single table lookup
- CRUD operations

**Example:**
```typescript
// ✅ GOOD: Direct query for simple list
await this.supabase
  .from('accounts')
  .select('*')
  .eq('organization_id', user.organizationId);
```

### RPC Function Checklist

Before using an RPC function:

- [ ] Check `functions-list.md` to see if it exists
- [ ] Understand what parameters it needs
- [ ] Know what it returns
- [ ] Verify it's exposed in API (not admin-only)
- [ ] Add `as any` type assertion if needed

### Available RPC Functions

See [`apps/api/.cursor/guides/functions-list.md`](../../.cursor/guides/functions-list.md) for the complete list.

**Common patterns:**
- `fetch_*` = Read operations
- `calculate_*` = Admin calculations
- `create_*` = Create with business logic
- `update_*` = Update with business logic
- `check_*` = Validation operations

---

## Security Considerations

### Multi-Tenancy (CRITICAL)

**EVERY query MUST filter by organization:**

```typescript
// ✅ CORRECT: Filtered by organization
.eq('organization_id', user.organizationId)

// ❌ WRONG: No filter (security vulnerability!)
.select('*')  // Returns ALL organizations' data!
```

### API Key vs Service Role Key

#### Client-Side (Dashboard/Web App)
```typescript
// Use ANON KEY
const supabase = createClient(url, VITE_SUPABASE_ANON_KEY);
// Protected by: RLS policies
```

#### Server-Side (API)
```typescript
// Use SERVICE ROLE KEY
const supabase = createClient(url, SUPABASE_SERVICE_ROLE_KEY);
// Protected by: API key guard + organization filtering
```

**Why Service Role Key for API:**
1. ✅ Bypasses RLS (no policy conflicts)
2. ✅ You control auth via API key guard
3. ✅ You control authorization via organization_id filtering
4. ✅ Standard practice for server APIs
5. ✅ Simpler architecture

### Environment Variables

```env
# Server-side only (API)
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Client-side (Dashboard)
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

⚠️ **NEVER expose service role key to clients!**

### Authorization Flow

```
1. Request arrives with API key
   ↓
2. ApiKeyGuard validates API key via RPC
   ↓
3. Guard attaches user context (merchantId, organizationId)
   ↓
4. Controller passes context to service
   ↓
5. Service filters ALL queries by organization_id
   ↓
6. Supabase (service role) bypasses RLS
   ↓
7. Your code enforces security
```

---

## Documentation Standards

### File Naming

- `@{SERVICE_NAME}_API_DOC.md` - Main API documentation
- `@` prefix = Important documentation file
- Upper case for visibility

### Structure

1. **Title & Description**
2. **Features List** (with ✅ and ❌)
3. **Endpoints** (one section per endpoint)
4. **Authentication** (how to use API keys)
5. **Example Usage** (TypeScript, cURL, Python)
6. **Error Handling** (common errors)
7. **Implementation Details** (architecture, RPC, security)
8. **Protected from Auto-Generation** (explanation)

### Code Examples

Include examples in **3 languages minimum:**
- TypeScript/JavaScript
- cURL (for testing)
- Python

### Response Examples

Always show **realistic data:**

```json
// ✅ GOOD: Realistic example
{
  "mrr": 50000.00,
  "currency_code": "XOF",
  "calculated_at": "2024-01-01T00:00:00Z"
}

// ❌ BAD: Generic example
{
  "mrr": 123,
  "currency_code": "string",
  "calculated_at": "string"
}
```

---

## Checklist Template

Use this checklist for every new API endpoint:

### Pre-Development

- [ ] Reviewed database table structure
- [ ] Identified which columns to expose
- [ ] Identified which columns are admin-only
- [ ] Checked for available RPC functions
- [ ] Determined required operations (GET, POST, etc.)
- [ ] Confirmed multi-tenancy field exists

### DTOs

- [ ] Created response DTO with proper types
- [ ] Created create DTO (if needed)
- [ ] Created update DTO (if needed)
- [ ] Used types from `@/utils/types/api`
- [ ] Added helpful descriptions
- [ ] Provided realistic examples
- [ ] Excluded admin-only fields
- [ ] Excluded system fields from create/update

### Service Layer

- [ ] Injected SupabaseService
- [ ] All queries filter by `organization_id`
- [ ] Used RPC functions where available
- [ ] Added 404 error for not found
- [ ] Added ownership validation
- [ ] Filtered out admin fields from responses
- [ ] Added helpful error messages
- [ ] Handled empty results appropriately

### Controller Layer

- [ ] Added `@ApiTags` decorator
- [ ] Added `@ApiSecurity('api-key')`
- [ ] Added `@UseGuards(ApiKeyGuard)`
- [ ] Documented all operations
- [ ] Documented all responses
- [ ] Documented error responses
- [ ] Documented query parameters
- [ ] Used `@CurrentUser()` decorator

### Security

- [ ] API key guard applied
- [ ] Organization filtering in service
- [ ] Ownership validation before returning data
- [ ] Admin fields excluded
- [ ] No PII leakage
- [ ] Using service role key (not anon key)

### Documentation

- [ ] Created `@{SERVICE}_API_DOC.md`
- [ ] Listed all endpoints
- [ ] Showed request/response examples
- [ ] Included TypeScript examples
- [ ] Included cURL examples
- [ ] Included Python examples
- [ ] Documented error cases
- [ ] Explained implementation details

### Protection

- [ ] Added table to skip list in `generate-modules.ts`
- [ ] Verified auto-generation won't overwrite

### Testing

- [ ] Tested with valid API key
- [ ] Tested with invalid API key (should 401)
- [ ] Tested accessing own data (should work)
- [ ] Tested accessing other org data (should 404)
- [ ] Tested with missing required params (should 400)
- [ ] Tested error scenarios

---

## Examples from Our Work

### Accounts API ✅

**What we did right:**
- ✅ Used RPC functions (`fetch_account_balance`, `fetch_balance_breakdown`)
- ✅ Direct queries for simple list/get
- ✅ Comprehensive error handling (404 for missing currency)
- ✅ Multi-currency support with validation
- ✅ SPI account fields exposed (useful for merchants)
- ✅ Excellent documentation with examples

### Organizations API ✅

**What we did right:**
- ✅ Used RPC function (`fetch_organization_details`)
- ✅ Removed admin-only metric (LTV)
- ✅ Pre-calculated metrics (no expensive calculations)
- ✅ Ownership validation before returning data
- ✅ Clear error messages
- ✅ Read-only API (metrics auto-calculated)

---

## Common Pitfalls to Avoid

### ❌ Don't Do This

```typescript
// 1. No organization filtering
await this.supabase.from('accounts').select('*');  // ❌ VULNERABLE!

// 2. Exposing admin metrics
return { ltv: data.merchant_lifetime_value };  // ❌ ADMIN ONLY!

// 3. Generic error messages
throw new Error('Error');  // ❌ NOT HELPFUL!

// 4. Using anon key in API
const key = process.env.VITE_SUPABASE_ANON_KEY;  // ❌ WRONG KEY!

// 5. Not validating ownership
return data;  // ❌ MIGHT BE WRONG ORG!
```

### ✅ Do This Instead

```typescript
// 1. Always filter by organization
await this.supabase
  .from('accounts')
  .select('*')
  .eq('organization_id', user.organizationId);  // ✅ SECURE!

// 2. Filter out admin metrics
return {
  mrr: data.mrr,
  arr: data.arr,
  // ltv: EXCLUDED
};  // ✅ CORRECT!

// 3. Helpful error messages
throw new NotFoundException(
  'Account not found. Create one by making a transaction first.'
);  // ✅ HELPFUL!

// 4. Use service role key
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;  // ✅ CORRECT!

// 5. Validate ownership
if (data.organization_id !== user.organizationId) {
  throw new NotFoundException('Not found or access denied');
}  // ✅ SECURE!
```

---

## Summary

### The Process

1. **Understand** the table and requirements
2. **Design** DTOs (exclude admin fields)
3. **Build** service (RPC first, filter by org)
4. **Build** controller (document everything)
5. **Protect** from auto-generation
6. **Document** comprehensively

### The Rules

1. **Always** filter by `organization_id`
2. **Always** use service role key (not anon key)
3. **Always** handle errors with helpful messages
4. **Always** validate ownership before returning data
5. **Never** expose admin-only metrics
6. **Never** expose other merchants' data
7. **Prefer** RPC functions over direct queries
8. **Document** everything with examples

### The Result

- ✅ Secure APIs (multi-tenant)
- ✅ Merchant-friendly (clear errors)
- ✅ Performant (RPC functions)
- ✅ Maintainable (protected from auto-gen)
- ✅ Well-documented (examples in 3 languages)

---

**Follow this methodology for all future APIs to maintain consistency and quality!** 🚀

