import { ApiProperty } from '@nestjs/swagger';

export class CheckoutSessionResponseDto {
  @ApiProperty({ example: true })
  allow_coupon_code: boolean;

  @ApiProperty({ example: true })
  allow_quantity: boolean;

  @ApiProperty({ example: 123 })
  amount: number;

  @ApiProperty({ example: 'string' })
  cancel_url: string;

  @ApiProperty({ example: 'string' })
  checkout_session_id: string;

  @ApiProperty({ example: 'string' })
  created_at: string;

  @ApiProperty({ example: 'string' })
  created_by: string;

  @ApiProperty({ example: 'string' })
  currency_code: string;

  @ApiProperty({ example: 'string' })
  customer_email: string;

  @ApiProperty({ example: 'string' })
  customer_id: string;

  @ApiProperty({ example: 'string' })
  customer_name: string;

  @ApiProperty({ example: 'string' })
  customer_phone: string;

  @ApiProperty({ example: 'string' })
  description: string;

  @ApiProperty({ example: 'string' })
  environment: string;

  @ApiProperty({ example: 'string' })
  expires_at: string;

  @ApiProperty({ example: 'string' })
  installment_plan_id: string;

  @ApiProperty({ example: true })
  is_pos: boolean;

  @ApiProperty({ example: true })
  is_spi: boolean;

  @ApiProperty({ example: {} })
  metadata: any;

  @ApiProperty({ example: 'string' })
  organization_id: string;

  @ApiProperty({ example: 'string' })
  payment_link_id: string;

  @ApiProperty({ example: 'string' })
  payment_request_id: string;

  @ApiProperty({ example: 'string' })
  price_id: string;

  @ApiProperty({ example: 'string' })
  product_id: string;

  @ApiProperty({ example: {} })
  qr_code_data: any;

  @ApiProperty({ example: 'string' })
  qr_code_type: string;

  @ApiProperty({ example: 123 })
  quantity: number;

  @ApiProperty({ example: true })
  require_billing_address: boolean;

  @ApiProperty({ example: 'string' })
  spi_account_number: string;

  @ApiProperty({ example: 'string' })
  spi_qr_code_id: string;

  @ApiProperty({ example: 'string' })
  status: string;

  @ApiProperty({ example: 'string' })
  subscription_id: string;

  @ApiProperty({ example: 'string' })
  success_url: string;

  @ApiProperty({ example: 'string' })
  title: string;

  @ApiProperty({ example: 'string' })
  updated_at: string;

}