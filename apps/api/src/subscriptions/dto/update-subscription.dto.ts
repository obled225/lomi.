import { ApiProperty } from '@nestjs/swagger';

export class UpdateSubscriptionDto {
  @ApiProperty({ required: false, example: 'string' })
  customer_id?: string;

  @ApiProperty({ required: false, example: 'string' })
  end_date?: string;

  @ApiProperty({ required: false, example: 'string' })
  environment?: string;

  @ApiProperty({ required: false, example: {} })
  metadata?: any;

  @ApiProperty({ required: false, example: 'string' })
  next_billing_date?: string;

  @ApiProperty({ required: false, example: 'string' })
  price_id?: string;

  @ApiProperty({ required: false, example: 'string' })
  product_id?: string;

  @ApiProperty({ required: false, example: 'string' })
  start_date?: string;

  @ApiProperty({ required: false, example: 'string' })
  status?: string;

}