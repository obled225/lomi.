import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentLinkDto {
  @ApiProperty({ example: true })
  allow_coupon_code: boolean;

  @ApiProperty({ example: true })
  allow_quantity: boolean;

  @ApiProperty({ example: 123 })
  amount: number;

  @ApiProperty({ example: 'string' })
  cancel_url: string;

  @ApiProperty({ example: 'string' })
  currency_code: string;

  @ApiProperty({ example: 'string' })
  description: string;

  @ApiProperty({ example: 'string' })
  environment: string;

  @ApiProperty({ example: 'string' })
  expires_at: string;

  @ApiProperty({ example: true })
  is_active: boolean;

  @ApiProperty({ example: 'string' })
  link_type: string;

  @ApiProperty({ example: {} })
  metadata: any;

  @ApiProperty({ example: 'string' })
  organization_id: string;

  @ApiProperty({ example: 'string' })
  price_id: string;

  @ApiProperty({ example: 'string' })
  product_id: string;

  @ApiProperty({ example: 123 })
  quantity: number;

  @ApiProperty({ example: true })
  require_billing_address: boolean;

  @ApiProperty({ example: 'string' })
  success_url: string;

  @ApiProperty({ example: 'string' })
  title: string;

  @ApiProperty({ example: 'string' })
  url: string;

}