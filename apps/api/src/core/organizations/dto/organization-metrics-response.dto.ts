import { ApiProperty } from '@nestjs/swagger';

export class OrganizationMetricsResponseDto {
  @ApiProperty({
    example: 50000.0,
    description: 'Monthly Recurring Revenue in default currency',
  })
  mrr: number;

  @ApiProperty({
    example: 600000.0,
    description: 'Annual Recurring Revenue in default currency',
  })
  arr: number;

  @ApiProperty({
    example: 250000.0,
    description: 'Total revenue generated',
  })
  total_revenue: number;

  @ApiProperty({
    example: 1234,
    description: 'Total number of transactions',
  })
  total_transactions: number;

  @ApiProperty({
    example: 567,
    description: 'Total number of customers',
  })
  total_customers: number;

  @ApiProperty({
    example: 'XOF',
    description: 'Currency code for all monetary values',
  })
  currency_code: string;

  @ApiProperty({
    example: '2024-01-01T00:00:00Z',
    description: 'When these metrics were calculated',
  })
  calculated_at: string;
}

