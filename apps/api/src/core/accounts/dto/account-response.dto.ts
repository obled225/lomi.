import { ApiProperty } from '@nestjs/swagger';

export class AccountResponseDto {
  @ApiProperty({ example: 'string' })
  account_id: string;

  @ApiProperty({ example: 123 })
  balance: number;

  @ApiProperty({ example: 'string' })
  created_at: string;

  @ApiProperty({ example: 'string' })
  currency_code: string;

  @ApiProperty({ example: true })
  is_spi_account: boolean;

  @ApiProperty({ example: 'string' })
  organization_id: string;

  @ApiProperty({ example: 123 })
  spi_account_balance: number;

  @ApiProperty({ example: 'string' })
  spi_account_balance_sync_error: string;

  @ApiProperty({ example: 'string' })
  spi_account_balance_synced_at: string;

  @ApiProperty({ example: 'string' })
  spi_account_number: string;

  @ApiProperty({ example: 'string' })
  updated_at: string;
}
