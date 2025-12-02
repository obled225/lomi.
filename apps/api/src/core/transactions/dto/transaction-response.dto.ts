import { ApiProperty } from '@nestjs/swagger';

export class TransactionResponseDto {
  @ApiProperty({ example: 'string' })
  checkout_session_id: string;

  @ApiProperty({ example: 'string' })
  created_at: string;

  @ApiProperty({ example: 'string' })
  currency_code: string;

  @ApiProperty({ example: 'string' })
  customer_id: string;

  @ApiProperty({ example: 'string' })
  description: string;

  @ApiProperty({ example: 123 })
  discount_amount: number;

  @ApiProperty({ example: 'string' })
  environment: string;

  @ApiProperty({ example: 123 })
  fee_amount: number;

  @ApiProperty({ example: 'string' })
  fee_structure_id: string;

  @ApiProperty({ example: 123 })
  gross_amount: number;

  @ApiProperty({ example: true })
  is_bnpl: boolean;

  @ApiProperty({ example: true })
  is_pos: boolean;

  @ApiProperty({ example: {} })
  metadata: any;

  @ApiProperty({ example: 123 })
  net_amount: number;

  @ApiProperty({ example: 'string' })
  organization_id: string;

  @ApiProperty({ example: 'string' })
  payment_method_code: string;

  @ApiProperty({ example: 'string' })
  price_id: string;

  @ApiProperty({ example: 'string' })
  product_id: string;

  @ApiProperty({ example: 'string' })
  provider_code: string;

  @ApiProperty({ example: 123 })
  quantity: number;

  @ApiProperty({ example: 'string' })
  spi_account_number: string;

  @ApiProperty({ example: 'string' })
  spi_bulk_instruction_id: string;

  @ApiProperty({ example: 'string' })
  spi_date_envoi: string;

  @ApiProperty({ example: 'string' })
  spi_date_irrevocabilite: string;

  @ApiProperty({ example: 123 })
  spi_discount_amount: number;

  @ApiProperty({ example: 123 })
  spi_discount_rate: number;

  @ApiProperty({ example: 'string' })
  spi_end2end_id: string;

  @ApiProperty({ example: 'string' })
  spi_tx_id: string;

  @ApiProperty({ example: 'string' })
  status: string;

  @ApiProperty({ example: 'string' })
  stripe_payment_intent_id: string;

  @ApiProperty({ example: 'string' })
  subscription_id: string;

  @ApiProperty({ example: 'string' })
  transaction_id: string;

  @ApiProperty({ example: 'string' })
  transaction_type: string;

  @ApiProperty({ example: 'string' })
  updated_at: string;

}