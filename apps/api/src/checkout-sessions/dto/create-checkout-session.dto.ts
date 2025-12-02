import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCheckoutSessionDto {
  @ApiPropertyOptional({ example: 'cus_123' })
  customer_id?: string;

  @ApiProperty({ example: 1000 })
  amount: number;

  @ApiProperty({ example: 'XOF' })
  currency_code: string;

  @ApiPropertyOptional({ example: { key: 'value' } })
  metadata?: any;

  @ApiPropertyOptional({ example: 'Checkout Title' })
  title?: string;

  @ApiPropertyOptional({ example: 'Description of the checkout' })
  description?: string;

  @ApiPropertyOptional({ example: 'prod_123' })
  product_id?: string;

  @ApiPropertyOptional({ example: 'price_123' })
  price_id?: string;

  @ApiPropertyOptional({ example: 'sub_123' })
  subscription_id?: string;

  @ApiPropertyOptional({ example: false })
  allow_quantity?: boolean;

  @ApiPropertyOptional({ example: 1 })
  quantity?: number;

  @ApiPropertyOptional({ example: 'https://example.com/success' })
  success_url?: string;

  @ApiPropertyOptional({ example: 'https://example.com/cancel' })
  cancel_url?: string;

  @ApiPropertyOptional({ example: 'customer@example.com' })
  customer_email?: string;

  @ApiPropertyOptional({ example: 'John Doe' })
  customer_name?: string;

  @ApiPropertyOptional({ example: '1234567890' })
  customer_phone?: string;

  @ApiPropertyOptional({ example: false })
  allow_coupon_code?: boolean;

  @ApiPropertyOptional({
    example: 60,
    description: 'Expiration in minutes (default: 60)',
  })
  expiration_minutes?: number;

  @ApiPropertyOptional({ example: true })
  require_billing_address?: boolean;

  @ApiPropertyOptional({ example: 'link_123' })
  payment_link_id?: string;
}
