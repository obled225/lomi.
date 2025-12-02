import { ApiProperty } from '@nestjs/swagger';

export class CreateSubscriptionDto {
  @ApiProperty({ example: 'string' })
  customer_id: string;

  @ApiProperty({ example: 'string' })
  end_date: string;

  @ApiProperty({ example: 'string' })
  environment: string;

  @ApiProperty({ example: {} })
  metadata: any;

  @ApiProperty({ example: 'string' })
  next_billing_date: string;

  @ApiProperty({ example: 'string' })
  organization_id: string;

  @ApiProperty({ example: 'string' })
  price_id: string;

  @ApiProperty({ example: 'string' })
  product_id: string;

  @ApiProperty({ example: 'string' })
  start_date: string;

  @ApiProperty({ example: 'string' })
  status: string;

}