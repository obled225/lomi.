# lomi. SDKs

Official SDKs for the [lomi.](https://lomi.africa) payments API.

We provide SDKs for multiple languages and frameworks to help you integrate with the lomi. API quickly and easily.

| Language/Framework | Package | Installation | Directory |
|-------------------|---------|--------------|-----------|
| **TypeScript** | `@lomi./sdk` | `npm install @lomi./sdk` | [`ts/`](./ts) |
| **Next.js** | `@lomi./sdk-next` | `npm install @lomi./sdk-next` | [`nextjs/`](./nextjs) |
| **Python** | `lomi-sdk` | `pip install lomi-sdk` | [`python/`](./python) |
| **Go** | `github.com/lomiafrica/lomi-go-sdk` | `go get github.com/lomiafrica/lomi-go-sdk` | [`go/`](./go) |

### PHP SDK

Due to our monorepo structure, the PHP SDK is **not available on Packagist**. Install directly from GitHub:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/lomiafrica/lomi./"
    }
  ],
  "require": {
    "lomi/lomi-sdk": "dev-main#apps/sdks/php"
  }
}
```

Then run: `composer install`

## Quick Start

### TypeScript / JavaScript

```typescript
import { LomiSDK } from '@lomi./sdk';

const lomi = new LomiSDK({
  apiKey: 'your-api-key',
  environment: 'live' // or 'test' for sandbox
});

// List customers
const customers = await lomi.customers.list();

// Create checkout session
const session = await lomi.checkoutSessions.create({...});

// Get transactions
const transactions = await lomi.transactions.list();
```

### Next.js

```typescript
import { LomiSDK, useLomiRequest } from '@lomi./sdk-next';

// Client-side with hooks
const { data, loading, error, execute } = useLomiRequest(
  () => lomi.customers.list()
);

// Server-side
const lomi = new LomiSDK({ apiKey: process.env.LOMI_API_KEY! });
const customers = await lomi.customers.list();
``` 

### Python

```python
from lomi import LomiClient

client = LomiClient(api_key='your-api-key')

# List customers
customers = client.customers.list()

# Get transaction
transaction = client.transactions.get('txn_id')
```

### Go

```go
import lomi "github.com/lomiafrica/lomi-go-sdk"

client := lomi.NewClient("your-api-key")

// List customers
customers, err := client.Customers.List(nil)

// Get transaction
transaction, err := client.Transactions.Get("txn_id")
```

### PHP

```php
use Lomi\LomiClient;

$client = new LomiClient('your-api-key');

// List customers
$customers = $client->customers->list();

// Get transaction  
$transaction = $client->transactions->get('txn_id');
```

## Available services

All SDKs provide access to these services:

- `accounts` - Balance and account operations
- `organizations` - Organization metrics (MRR, ARR, etc.)
- `customers` - Customer management
- `paymentRequests` - Payment requests
- `transactions` - Transaction history
- `refunds` - Refund processing
- `products` - Product catalog
- `subscriptions` - Subscription billing
- `discountCoupons` - Coupon management
- `checkoutSessions` - Checkout creation
- `paymentLinks` - Payment links
- `payouts` - Payout management (Platform withdrawals)
- `beneficiaryPayouts` - Beneficiary payouts
- `webhooks` - Webhook configuration
- `webhookDeliveryLogs` - Webhook logs

## Documentation

For comprehensive API documentation and guides, visit [docs.lomi.africa](https://docs.lomi.africa)

## License

MIT - see [LICENSE](./LICENSE) for details.

## Support

- **Email:** hello@lomi.africa
- **Docs:** https://lomi.africa/docs/
- **Discord:** https://discord.gg/yb4FnBmh