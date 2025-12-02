import { ApiProperty } from '@nestjs/swagger';

export class CustomerResponseDto {
  @ApiProperty({ example: 'string' })
  address: string;

  @ApiProperty({ example: 'string' })
  city: string;

  @ApiProperty({ example: 'string' })
  country: string;

  @ApiProperty({ example: 'string' })
  created_at: string;

  @ApiProperty({ example: 'string' })
  created_by: string;

  @ApiProperty({ example: 'string' })
  customer_id: string;

  @ApiProperty({ example: 'string' })
  deleted_at: string;

  @ApiProperty({ example: 'string' })
  email: string;

  @ApiProperty({ example: 'string' })
  environment: string;

  @ApiProperty({ example: true })
  is_business: boolean;

  @ApiProperty({ example: true })
  is_deleted: boolean;

  @ApiProperty({ example: {} })
  metadata: any;

  @ApiProperty({ example: 'string' })
  name: string;

  @ApiProperty({ example: 'string' })
  organization_id: string;

  @ApiProperty({ example: 'string' })
  phone_number: string;

  @ApiProperty({ example: 'string' })
  postal_code: string;

  @ApiProperty({ example: 'string' })
  spi_alias_mbno: string;

  @ApiProperty({ example: 'string' })
  spi_alias_shid: string;

  @ApiProperty({ example: 'string' })
  spi_primary_alias: string;

  @ApiProperty({ example: 'string' })
  updated_at: string;

  @ApiProperty({ example: 'string' })
  whatsapp_number: string;
}
