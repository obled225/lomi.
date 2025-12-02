import { ApiProperty } from '@nestjs/swagger';

export class OrganizationResponseDto {
  @ApiProperty({ example: 123 })
  arr: number;

  @ApiProperty({ example: 'string' })
  created_at: string;

  @ApiProperty({ example: 'string' })
  default_currency: string;

  @ApiProperty({ example: 'string' })
  deleted_at: string;

  @ApiProperty({ example: 'string' })
  email: string;

  @ApiProperty({ example: 'string' })
  employee_number: string;

  @ApiProperty({ example: 'string' })
  industry: string;

  @ApiProperty({ example: true })
  is_deleted: boolean;

  @ApiProperty({ example: true })
  is_starter_business: boolean;

  @ApiProperty({ example: 'string' })
  logo_url: string;

  @ApiProperty({ example: 123 })
  merchant_lifetime_value: number;

  @ApiProperty({ example: {} })
  metadata: any;

  @ApiProperty({ example: 123 })
  mrr: number;

  @ApiProperty({ example: 'string' })
  name: string;

  @ApiProperty({ example: 'string' })
  organization_id: string;

  @ApiProperty({ example: 'string' })
  phone_number: string;

  @ApiProperty({ example: 'string' })
  pin_code: string;

  @ApiProperty({ example: 'string' })
  slug: string;

  @ApiProperty({ example: 'string' })
  status: string;

  @ApiProperty({ example: true })
  storefront_enabled: boolean;

  @ApiProperty({ example: 123 })
  total_customers: number;

  @ApiProperty({ example: 123 })
  total_merchants: number;

  @ApiProperty({ example: 123 })
  total_revenue: number;

  @ApiProperty({ example: 123 })
  total_transactions: number;

  @ApiProperty({ example: 'string' })
  updated_at: string;

  @ApiProperty({ example: 'string' })
  verification_status: string;

  @ApiProperty({ example: 'string' })
  website_url: string;

}