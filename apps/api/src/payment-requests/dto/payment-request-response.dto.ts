import { ApiProperty } from '@nestjs/swagger';

export class PaymentRequestResponseDto {
  @ApiProperty({ example: 123 })
  amount: number;

  @ApiProperty({ example: 'string' })
  created_at: string;

  @ApiProperty({ example: 'string' })
  created_by: string;

  @ApiProperty({ example: 'string' })
  currency_code: string;

  @ApiProperty({ example: 'string' })
  customer_id: string;

  @ApiProperty({ example: 'string' })
  description: string;

  @ApiProperty({ example: 'string' })
  environment: string;

  @ApiProperty({ example: 'string' })
  expiry_date: string;

  @ApiProperty({ example: 'string' })
  organization_id: string;

  @ApiProperty({ example: 'string' })
  payment_link: string;

  @ApiProperty({ example: 'string' })
  payment_reference: string;

  @ApiProperty({ example: 'string' })
  request_id: string;

  @ApiProperty({ example: 'string' })
  spi_account_number: string;

  @ApiProperty({ example: 'string' })
  spi_bulk_instruction_id: string;

  @ApiProperty({ example: true })
  spi_confirmation: boolean;

  @ApiProperty({ example: 'string' })
  spi_date_envoi: string;

  @ApiProperty({ example: 'string' })
  spi_date_irrevocabilite: string;

  @ApiProperty({ example: 'string' })
  spi_date_limite_paiement: string;

  @ApiProperty({ example: 'string' })
  spi_date_limite_reponse: string;

  @ApiProperty({ example: 'string' })
  spi_date_rejet: string;

  @ApiProperty({ example: true })
  spi_debit_differe: boolean;

  @ApiProperty({ example: 'string' })
  spi_end2end_id: string;

  @ApiProperty({ example: 'string' })
  spi_payeur_alias: string;

  @ApiProperty({ example: 'string' })
  spi_payeur_nom: string;

  @ApiProperty({ example: 'string' })
  spi_payeur_pays: string;

  @ApiProperty({ example: 'string' })
  spi_ref_doc_numero: string;

  @ApiProperty({ example: 123 })
  spi_remise_amount: number;

  @ApiProperty({ example: 123 })
  spi_remise_rate: number;

  @ApiProperty({ example: 'string' })
  spi_tx_id: string;

  @ApiProperty({ example: 'string' })
  status: string;

  @ApiProperty({ example: 'string' })
  updated_at: string;

}