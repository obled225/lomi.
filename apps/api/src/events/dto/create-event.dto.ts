import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({ example: 'string' })
  customer_id: string;

  @ApiProperty({ example: {} })
  event_data: any;

  @ApiProperty({ example: 'string' })
  event_name: string;

  @ApiProperty({ example: {} })
  metadata: any;

  @ApiProperty({ example: 'string' })
  organization_id: string;

  @ApiProperty({ example: 'string' })
  product_id: string;

}