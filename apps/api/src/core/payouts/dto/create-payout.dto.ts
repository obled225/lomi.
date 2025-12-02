import { ApiProperty } from '@nestjs/swagger';

export class CreatePayoutDto {
  @ApiProperty({
    example: 10000.0,
    description: 'Amount to withdraw',
  })
  amount: number;

  @ApiProperty({
    example: 'XOF',
    description: 'Currency code',
    enum: ['XOF', 'USD', 'EUR', 'GBP'],
  })
  currency_code: string;

  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Payout method ID (bank account or mobile money)',
  })
  payout_method_id: string;

  @ApiProperty({
    example: 'WAVE',
    description: 'Provider code',
    enum: ['WAVE', 'SPI', 'STRIPE'],
    required: false,
  })
  provider_code?: string;

  @ApiProperty({
    example: { note: 'Monthly withdrawal' },
    description: 'Additional metadata',
    required: false,
  })
  metadata?: Record<string, any>;
}
