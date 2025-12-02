import { ApiProperty } from '@nestjs/swagger';

export class CreatePayoutDto {
  @ApiProperty({ example: 'string' })
  account_id: string;

  @ApiProperty({ example: 123 })
  amount: number;

  @ApiProperty({ example: 'string' })
  currency_code: string;

  @ApiProperty({ example: 'string' })
  environment: string;

  @ApiProperty({ example: {} })
  metadata: any;

  @ApiProperty({ example: 'string' })
  payout_method_id: string;

  @ApiProperty({ example: 'string' })
  provider_code: string;

  @ApiProperty({ example: 'string' })
  status: string;
}
