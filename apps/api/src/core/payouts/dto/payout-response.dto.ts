import { ApiProperty } from '@nestjs/swagger';

export class PayoutResponseDto {
  @ApiProperty({ example: 'string' })
  account_id: string;

  @ApiProperty({ example: 123 })
  amount: number;

  @ApiProperty({ example: 'string' })
  created_at: string;

  @ApiProperty({ example: 'string' })
  created_by: string;

  @ApiProperty({ example: 'string' })
  currency_code: string;

  @ApiProperty({ example: 'string' })
  environment: string;

  @ApiProperty({ example: {} })
  metadata: any;

  @ApiProperty({ example: 'string' })
  organization_id: string;

  @ApiProperty({ example: 'string' })
  payout_id: string;

  @ApiProperty({ example: 'string' })
  payout_method_id: string;

  @ApiProperty({ example: 'string' })
  provider_code: string;

  @ApiProperty({ example: 'string' })
  status: string;

  @ApiProperty({ example: 'string' })
  updated_at: string;

}