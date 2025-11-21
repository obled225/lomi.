# JavaScript SDK for lomi. API

Official JavaScript SDK for the [lomi.](https://lomi.africa) payments API.

## Installation

```bash
npm install @lomi/sdk-javascript
```

## Usage

```javascript
import { LomiClient } from '@lomi/sdk-javascript';

const client = new LomiClient({
  apiKey: 'your_api_key_here'
});

// Create a customer
const customer = await client.customers.create({
  name: 'John Doe',
  email: 'john@example.com'
});
```

## Documentation

For full documentation, visit [lomi. Docs](https://docs.lomi.africa).

## License

MIT
