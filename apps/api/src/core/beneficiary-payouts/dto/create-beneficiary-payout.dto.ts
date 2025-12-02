import { ApiProperty } from '@nestjs/swagger';

export class CreateBeneficiaryPayoutDto {
  @ApiProperty({ example: 'string' })
  account_id: string;

  @ApiProperty({ example: 123 })
  amount: number;

  @ApiProperty({ example: 'string' })
  currency_code: string;

  @ApiProperty({ example: {} })
  metadata: any;

  @ApiProperty({ example: 'string' })
  payout_method_id: string;

  @ApiProperty({ example: 'string' })
  provider_code: string;

  @ApiProperty({ example: 'string' })
  spi_bulk_instruction_id: string;

  @ApiProperty({ example: 'string' })
  status: string;
}
