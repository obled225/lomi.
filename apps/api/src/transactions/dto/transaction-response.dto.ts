import { ApiProperty } from '@nestjs/swagger';

export class TransactionResponseDto {
  @ApiProperty({ example: 'tx_123456789' })
  transaction_id: string;

  @ApiProperty({ example: 'pending' })
  status: string;

  @ApiProperty({ example: 1000 })
  amount: number;

  @ApiProperty({ example: 'XOF' })
  currency_code: string;
}
