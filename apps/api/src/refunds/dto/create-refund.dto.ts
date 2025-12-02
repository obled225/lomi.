import { ApiProperty } from '@nestjs/swagger';

export class CreateRefundDto {
  @ApiProperty({ example: 123 })
  amount: number;

  @ApiProperty({ example: 'string' })
  environment: string;

  @ApiProperty({ example: 123 })
  fee_amount: number;

  @ApiProperty({ example: {} })
  metadata: any;

  @ApiProperty({ example: 'string' })
  reason: string;

  @ApiProperty({ example: 123 })
  refunded_amount: number;

  @ApiProperty({ example: 'string' })
  spi_account_number: string;

  @ApiProperty({ example: 'string' })
  spi_end2end_id: string;

  @ApiProperty({ example: 'string' })
  spi_retour_date_demande: string;

  @ApiProperty({ example: 'string' })
  spi_retour_date_irrevocabilite: string;

  @ApiProperty({ example: 'string' })
  spi_tx_id: string;

  @ApiProperty({ example: 'string' })
  status: string;

  @ApiProperty({ example: 'string' })
  transaction_id: string;

}