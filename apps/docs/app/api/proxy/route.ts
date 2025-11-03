import { openapi } from '@/lib/utils/openapi';

export const { GET, HEAD, PUT, POST, PATCH, DELETE } = openapi.createProxy();
