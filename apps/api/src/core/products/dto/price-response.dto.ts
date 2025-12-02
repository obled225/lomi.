import { ApiProperty } from '@nestjs/swagger';

export class PriceResponseDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique price identifier',
  })
  price_id: string;

  @ApiProperty({
    example: 10000.0,
    description: 'Price amount',
  })
  amount: number;

  @ApiProperty({
    example: 'XOF',
    description: 'Currency code',
    enum: ['XOF', 'USD', 'EUR', 'GBP'],
  })
  currency_code: string;

  @ApiProperty({
    example: 'month',
    description: 'Billing interval for recurring products',
    enum: ['day', 'week', 'month', 'year'],
    nullable: true,
  })
  billing_interval: string | null;

  @ApiProperty({
    example: 'standard',
    description: 'Pricing model',
    enum: ['standard', 'pay_what_you_want', 'tiered'],
  })
  pricing_model: string;

  @ApiProperty({
    example: 5000.0,
    description: 'Minimum amount (for pay_what_you_want)',
    nullable: true,
  })
  minimum_amount: number | null;

  @ApiProperty({
    example: 50000.0,
    description: 'Maximum amount (for pay_what_you_want)',
    nullable: true,
  })
  maximum_amount: number | null;

  @ApiProperty({
    example: true,
    description: 'Whether this price is active',
  })
  is_active: boolean;

  @ApiProperty({
    example: true,
    description: 'Whether this is the default price',
  })
  is_default: boolean;

  @ApiProperty({
    example: { notes: 'Early bird pricing' },
    description: 'Additional metadata',
    nullable: true,
  })
  metadata: Record<string, any> | null;

  @ApiProperty({
    example: '2024-01-15T10:30:00Z',
    description: 'When the price was created',
  })
  created_at: string;

  @ApiProperty({
    example: '2024-01-15T10:30:00Z',
    description: 'When the price was last updated',
  })
  updated_at: string;
}
