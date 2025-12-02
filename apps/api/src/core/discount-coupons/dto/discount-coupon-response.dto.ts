import { ApiProperty } from '@nestjs/swagger';

export class DiscountCouponResponseDto {
  @ApiProperty({ example: 'string' })
  code: string;

  @ApiProperty({ example: 'string' })
  coupon_id: string;

  @ApiProperty({ example: 'string' })
  created_at: string;

  @ApiProperty({ example: 123 })
  current_uses: number;

  @ApiProperty({ example: 'string' })
  customer_type: string;

  @ApiProperty({ example: 'string' })
  description: string;

  @ApiProperty({ example: 123 })
  discount_fixed_amount: number;

  @ApiProperty({ example: 123 })
  discount_percentage: number;

  @ApiProperty({ example: 'string' })
  discount_type: string;

  @ApiProperty({ example: 'string' })
  environment: string;

  @ApiProperty({ example: 'string' })
  expires_at: string;

  @ApiProperty({ example: true })
  is_active: boolean;

  @ApiProperty({ example: 123 })
  max_quantity_per_use: number;

  @ApiProperty({ example: 123 })
  max_uses: number;

  @ApiProperty({ example: 'string' })
  organization_id: string;

  @ApiProperty({ example: 'string' })
  scope_type: string;

  @ApiProperty({ example: 'string' })
  updated_at: string;

  @ApiProperty({ example: 'string' })
  usage_frequency_limit: string;

  @ApiProperty({ example: 123 })
  usage_limit_value: number;

  @ApiProperty({ example: 'string' })
  valid_from: string;
}
