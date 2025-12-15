/**
 * Error handler for API calls
 */

import {
  LomiError,
  LomiValidationError,
  LomiAuthError,
  LomiNotFoundError,
  LomiRateLimitError,
} from './errors.js';

export function handleApiError(error: any): never {
  // If it's already a LomiError, rethrow it
  if (error instanceof LomiError) {
    throw error;
  }

  // Handle axios errors
  if (error.response) {
    const { status, data } = error.response;
    const message = data?.message || data?.error || error.message;

    switch (status) {
      case 400:
        throw new LomiValidationError(message, data?.errors);
      case 401:
      case 403:
        throw new LomiAuthError(message);
      case 404:
        throw new LomiNotFoundError(message);
      case 429:
        throw new LomiRateLimitError(message);
      default:
        throw new LomiError(message, status, data?.code, data);
    }
  }

  // Handle network errors
  if (error.request) {
    throw new LomiError('Network error - no response received', undefined, 'NETWORK_ERROR');
  }

  // Handle other errors
  throw new LomiError(error.message || 'An unknown error occurred');
}
