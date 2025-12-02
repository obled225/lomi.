import { ApiProperty } from '@nestjs/swagger';

export class CreatePriceDto {
  @ApiProperty({ example: 123 })
  amount: number;

  @ApiProperty({ example: 'string' })
  currency_code: string;

  @ApiProperty({ example: 'string' })
  environment: string;

  @ApiProperty({ example: true })
  is_active: boolean;

  @ApiProperty({ example: true })
  is_default: boolean;

  @ApiProperty({ example: 123 })
  maximum_amount: number;

  @ApiProperty({ example: {} })
  metadata: any;

  @ApiProperty({ example: 123 })
  minimum_amount: number;

  @ApiProperty({ example: 'string' })
  pricing_model: string;

  @ApiProperty({ example: 'string' })
  product_id: string;

}