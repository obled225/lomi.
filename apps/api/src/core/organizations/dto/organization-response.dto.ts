import { ApiProperty } from '@nestjs/swagger';
import {
  type CurrencyCode,
  type OrganizationStatus,
  type OrganizationVerificationStatus,
} from '@/utils/types/api';

export class OrganizationResponseDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique organization identifier',
  })
  organization_id: string;

  @ApiProperty({
    example: 'Acme Inc',
    description: 'Organization name',
  })
  name: string;

  @ApiProperty({
    example: 'contact@acme.com',
    description: 'Organization email',
  })
  email: string;

  @ApiProperty({
    example: '+221771234567',
    description: 'Organization phone number',
  })
  phone_number: string;

  @ApiProperty({
    example: 'verified',
    enum: ['unverified', 'starter', 'verified'],
    description: 'KYC verification status',
  })
  verification_status: OrganizationVerificationStatus;

  @ApiProperty({
    example: 'https://acme.com',
    description: 'Organization website',
    required: false,
  })
  website_url: string | null;

  @ApiProperty({
    example: 'https://cdn.lomi.africa/logos/acme.png',
    description: 'Organization logo URL',
    required: false,
  })
  logo_url: string | null;

  @ApiProperty({
    example: 'active',
    enum: ['active', 'inactive', 'suspended'],
    description: 'Organization status',
  })
  status: OrganizationStatus;

  @ApiProperty({
    example: 'XOF',
    enum: ['XOF', 'USD', 'EUR'],
    description: 'Default currency',
  })
  default_currency: CurrencyCode;

  @ApiProperty({
    example: 'acme-inc',
    description: 'URL-friendly slug',
    required: false,
  })
  slug: string | null;

  @ApiProperty({
    example: true,
    description: 'Whether storefront is enabled',
  })
  storefront_enabled: boolean;

  @ApiProperty({
    example: 250000.0,
    description: 'Total revenue generated',
  })
  total_revenue: number | null;

  @ApiProperty({
    example: 1234,
    description: 'Total transaction count',
  })
  total_transactions: number | null;

  @ApiProperty({
    example: 5,
    description: 'Total merchant count',
  })
  total_merchants: number | null;

  @ApiProperty({
    example: 567,
    description: 'Total customer count',
  })
  total_customers: number | null;

  @ApiProperty({
    example: 50000.0,
    description: 'Monthly Recurring Revenue',
  })
  mrr: number;

  @ApiProperty({
    example: 600000.0,
    description: 'Annual Recurring Revenue',
  })
  arr: number;

  @ApiProperty({
    example: 150000.0,
    description: 'Average Customer Lifetime Value',
  })
  merchant_lifetime_value: number;

  @ApiProperty({
    example: '10-50',
    description: 'Number of employees',
    required: false,
  })
  employee_number: string | null;

  @ApiProperty({
    example: 'Technology',
    description: 'Industry sector',
    required: false,
  })
  industry: string | null;

  @ApiProperty({
    example: '1234',
    description: 'Organization PIN code for sensitive operations',
    required: false,
  })
  pin_code: string | null;

  @ApiProperty({
    example: false,
    description: 'Whether this is a starter business',
  })
  is_starter_business: boolean;

  @ApiProperty({
    example: { custom_field: 'value' },
    description: 'Additional metadata',
    required: false,
  })
  metadata: any;

  @ApiProperty({
    example: '2024-01-01T00:00:00Z',
    description: 'Organization creation timestamp',
  })
  created_at: string;

  @ApiProperty({
    example: '2024-01-01T00:00:00Z',
    description: 'Last update timestamp',
  })
  updated_at: string;

  @ApiProperty({
    example: false,
    description: 'Whether organization is soft-deleted',
  })
  is_deleted: boolean;

  @ApiProperty({
    example: null,
    description: 'Deletion timestamp if deleted',
    required: false,
  })
  deleted_at: string | null;
}
