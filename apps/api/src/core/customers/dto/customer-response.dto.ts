import { ApiProperty } from '@nestjs/swagger';

export class CustomerResponseDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique customer identifier',
  })
  customer_id: string;

  @ApiProperty({
    example: '789e0123-e89b-12d3-a456-426614174000',
    description: 'Organization ID the customer belongs to',
  })
  organization_id: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'Customer full name',
  })
  name: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Customer email address',
    nullable: true,
  })
  email: string | null;

  @ApiProperty({
    example: '+221771234567',
    description: 'Customer phone number',
    nullable: true,
  })
  phone_number: string | null;

  @ApiProperty({
    example: '+221771234567',
    description: 'Customer WhatsApp number',
    nullable: true,
  })
  whatsapp_number: string | null;

  @ApiProperty({
    example: 'Senegal',
    description: 'Customer country',
    nullable: true,
  })
  country: string | null;

  @ApiProperty({
    example: 'Dakar',
    description: 'Customer city',
    nullable: true,
  })
  city: string | null;

  @ApiProperty({
    example: '123 Main Street',
    description: 'Customer street address',
    nullable: true,
  })
  address: string | null;

  @ApiProperty({
    example: '12345',
    description: 'Customer postal code',
    nullable: true,
  })
  postal_code: string | null;

  @ApiProperty({
    example: false,
    description: 'Whether the customer is a business',
  })
  is_business: boolean;

  @ApiProperty({
    example: { custom_field: 'value' },
    description: 'Additional metadata as JSON',
    nullable: true,
  })
  metadata: Record<string, any> | null;

  @ApiProperty({
    example: 'live',
    description: 'Environment (test or live)',
    enum: ['test', 'live'],
  })
  environment: string;

  @ApiProperty({
    example: '2024-01-15T10:30:00Z',
    description: 'When the customer was created',
  })
  created_at: string;

  @ApiProperty({
    example: '2024-01-15T10:30:00Z',
    description: 'When the customer was last updated',
  })
  updated_at: string;
}
