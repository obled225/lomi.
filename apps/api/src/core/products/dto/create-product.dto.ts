import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 123 })
  charge_day: number;

  @ApiProperty({ example: 'string' })
  description: string;

  @ApiProperty({ example: true })
  display_on_storefront: boolean;

  @ApiProperty({ example: 'string' })
  environment: string;

  @ApiProperty({ example: 'string' })
  image_url: string;

  @ApiProperty({ example: true })
  is_active: boolean;

  @ApiProperty({ example: {} })
  metadata: any;

  @ApiProperty({ example: 'string' })
  name: string;

  @ApiProperty({ example: 'string' })
  product_type: string;

  @ApiProperty({ example: true })
  trial_enabled: boolean;

  @ApiProperty({ example: 123 })
  trial_period_days: number;

  @ApiProperty({ example: 'string' })
  usage_unit: string;
}
