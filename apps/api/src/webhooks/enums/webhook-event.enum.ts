export enum WebhookEvent {
  PAYMENT_CREATED = 'payment.created',
  PAYMENT_SUCCEEDED = 'payment.succeeded',
  PAYMENT_FAILED = 'payment.failed',
  PAYMENT_CANCELED = 'payment.canceled',
  REFUND_CREATED = 'refund.created',
  REFUND_COMPLETED = 'refund.completed',
  REFUND_FAILED = 'refund.failed',
  SUBSCRIPTION_CREATED = 'subscription.created',
  SUBSCRIPTION_RENEWED = 'subscription.renewed',
  SUBSCRIPTION_CANCELED = 'subscription.canceled',
  CHECKOUT_COMPLETED = 'checkout.completed',
  PROVIDER_STATUS_CHANGED = 'provider.status_changed',
}
