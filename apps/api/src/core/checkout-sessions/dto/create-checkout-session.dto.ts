import { ApiProperty } from '@nestjs/swagger';

export class CreateCheckoutSessionDto {
  @ApiProperty({
    example: 10000.0,
    description: 'Amount to charge. Optional if product_id is provided (amount will be calculated from product price).',
    required: false,
  })
  amount?: number;

  @ApiProperty({
    example: 'XOF',
    description: 'Currency code',
    enum: ['XOF', 'USD', 'EUR', 'GBP'],
  })
  currency_code: string;

  @ApiProperty({
    example: 'Premium Subscription',
    description: 'Title of the checkout session',
    required: false,
  })
  title?: string;

  @ApiProperty({
    example: 'Monthly subscription to premium features',
    description: 'Description of what the customer is buying',
    required: false,
  })
  description?: string;

  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Customer ID (if existing customer)',
    required: false,
  })
  customer_id?: string;

  @ApiProperty({
    example: 'john@example.com',
    description: 'Customer email (required if no customer_id)',
    required: false,
  })
  customer_email?: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'Customer name',
    required: false,
  })
  customer_name?: string;

  @ApiProperty({
    example: '+221771234567',
    description: 'Customer phone number',
    required: false,
  })
  customer_phone?: string;

  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Product ID',
    required: false,
  })
  product_id?: string;

  @ApiProperty({
    example: '321e4567-e89b-12d3-a456-426614174000',
    description: 'Specific price ID (if product has multiple prices)',
    required: false,
  })
  price_id?: string;

  @ApiProperty({
    example: '654e7890-e89b-12d3-a456-426614174000',
    description: 'Subscription ID (if renewing/modifying subscription)',
    required: false,
  })
  subscription_id?: string;

  @ApiProperty({
    example: true,
    description: 'Allow customer to change quantity',
    default: false,
    required: false,
  })
  allow_quantity?: boolean;

  @ApiProperty({
    example: 1,
    description: 'Quantity',
    default: 1,
    required: false,
  })
  quantity?: number;

  @ApiProperty({
    example: 'https://example.com/success',
    description: 'URL to redirect to on successful payment',
    required: false,
  })
  success_url?: string;

  @ApiProperty({
    example: 'https://example.com/cancel',
    description: 'URL to redirect to if payment is cancelled',
    required: false,
  })
  cancel_url?: string;

  @ApiProperty({
    example: true,
    description: 'Allow customer to apply discount codes',
    default: false,
    required: false,
  })
  allow_coupon_code?: boolean;

  @ApiProperty({
    example: true,
    description: 'Require billing address',
    default: true,
    required: false,
  })
  require_billing_address?: boolean;

  @ApiProperty({
    example: '987e6543-e89b-12d3-a456-426614174000',
    description: 'Payment link ID (if creating from payment link)',
    required: false,
  })
  payment_link_id?: string;

  @ApiProperty({
    example: { custom_field: 'value' },
    description: 'Additional metadata',
    required: false,
  })
  metadata?: Record<string, any>;
}
