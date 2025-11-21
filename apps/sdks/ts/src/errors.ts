/**
 * Custom error classes for lomi. SDK
 */

export class LomiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public code?: string,
    public details?: any
  ) {
    super(message);
    this.name = 'LomiError';
    Object.setPrototypeOf(this, LomiError.prototype);
  }
}

export class LomiValidationError extends LomiError {
  constructor(message: string, public errors?: any[]) {
    super(message, 400, 'VALIDATION_ERROR', errors);
    this.name = 'LomiValidationError';
    Object.setPrototypeOf(this, LomiValidationError.prototype);
  }
}

export class LomiAuthError extends LomiError {
  constructor(message: string = 'Authentication failed') {
    super(message, 401, 'AUTH_ERROR');
    this.name = 'LomiAuthError';
    Object.setPrototypeOf(this, LomiAuthError.prototype);
  }
}

export class LomiNotFoundError extends LomiError {
  constructor(message: string = 'Resource not found') {
    super(message, 404, 'NOT_FOUND');
    this.name = 'LomiNotFoundError';
    Object.setPrototypeOf(this, LomiNotFoundError.prototype);
  }
}

export class LomiRateLimitError extends LomiError {
  constructor(message: string = 'Rate limit exceeded') {
    super(message, 429, 'RATE_LIMIT_ERROR');
    this.name = 'LomiRateLimitError';
    Object.setPrototypeOf(this, LomiRateLimitError.prototype);
  }
}
