import { ApiProperty } from '@nestjs/swagger';
import {
  type CurrencyCode,
  SpiAccountStatus,
  SpiAccountType,
} from '../../../utils/types/api';

export class AccountResponseDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique account identifier',
  })
  account_id: string;

  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174001',
    description: 'Organization ID',
  })
  organization_id: string;

  @ApiProperty({
    example: 100000.0,
    description: 'Account balance in the specified currency',
  })
  balance: number;

  @ApiProperty({
    example: 'XOF',
    enum: ['XOF', 'USD', 'EUR'],
    description: 'Currency code',
  })
  currency_code: CurrencyCode;

  @ApiProperty({
    example: false,
    description: 'Whether this is an SPI (UEMOA) account',
  })
  is_spi_account: boolean;

  @ApiProperty({
    example: 'SN00012345678901234567890',
    description: 'SPI account number in the bank system',
    required: false,
  })
  spi_account_number: string | null;

  @ApiProperty({
    example: 'CACC',
    enum: [
      'CACC',
      'CARD',
      'CASH',
      'CHAR',
      'CISH',
      'CURR',
      'DPST',
      'SVGS',
      'ULAA',
    ],
    description: 'SPI account type',
    required: false,
  })
  spi_account_type: SpiAccountType | null;

  @ApiProperty({
    example: 'OUVERT',
    enum: ['OUVERT', 'BLOQUE', 'CLOTURE'],
    description: 'SPI account status',
    required: false,
  })
  spi_account_status: SpiAccountStatus | null;

  @ApiProperty({
    example: 100000.0,
    description: 'Actual balance in the SPI bank account',
    required: false,
  })
  spi_account_balance: number | null;

  @ApiProperty({
    example: '2024-01-01T00:00:00Z',
    description: 'When the SPI balance was last synced',
    required: false,
  })
  spi_account_balance_synced_at: string | null;

  @ApiProperty({
    example: null,
    description: 'Error message if SPI balance sync failed',
    required: false,
  })
  spi_account_balance_sync_error: string | null;

  @ApiProperty({
    example: '2024-01-01T00:00:00Z',
    description: 'Account creation timestamp',
  })
  created_at: string;

  @ApiProperty({
    example: '2024-01-01T00:00:00Z',
    description: 'Account last update timestamp',
  })
  updated_at: string;
}
