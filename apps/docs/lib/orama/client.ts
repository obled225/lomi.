import { OramaClient } from '@oramacloud/client';

const apiKey = process.env.NEXT_PUBLIC_ORAMA_API_KEY;
const endpoint = process.env.NEXT_PUBLIC_ORAMA_ENDPOINT;

if (!apiKey || !endpoint) {
  console.error(
    'Orama environment variables (NEXT_PUBLIC_ORAMA_API_KEY and NEXT_PUBLIC_ORAMA_ENDPOINT) are not set.',
  );
}

export const DataSourceId = endpoint ? endpoint.split('/').pop() ?? '' : '';
export const isAdmin = !!process.env.ORAMA_PRIVATE_API_KEY;

export const orama = new OramaClient({
  endpoint: endpoint!,
  api_key: apiKey!,
});
