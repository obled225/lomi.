import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @ApiProperty({
    description: 'Amount in the smallest currency unit (e.g., cents)',
    example: 1000,
  })
  amount: number;

  @ApiProperty({
    description: 'Three-letter ISO currency code',
    example: 'XOF',
  })
  currency_code: 'XOF' | 'USD' | 'EUR';

  @ApiProperty({
    description: 'ID of the customer',
    example: 'cus_123456789',
  })
  customer_id: string;

  @ApiProperty({
    description: 'Payment method code',
    example: 'MOBILE_MONEY',
  })
  payment_method_code: string;

  @ApiProperty({
    description: 'Provider code',
    example: 'WAVE',
  })
  provider_code: string;
}
