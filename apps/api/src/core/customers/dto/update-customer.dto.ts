import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsOptional,
  IsBoolean,
  IsObject,
} from 'class-validator';

export class UpdateCustomerDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'Customer full name',
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Customer email address',
    required: false,
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    example: '+221771234567',
    description: 'Customer phone number',
    required: false,
  })
  @IsString()
  @IsOptional()
  phone_number?: string;

  @ApiProperty({
    example: '+221771234567',
    description: 'Customer WhatsApp number',
    required: false,
  })
  @IsString()
  @IsOptional()
  whatsapp_number?: string;

  @ApiProperty({
    example: 'Senegal',
    description: 'Customer country',
    required: false,
  })
  @IsString()
  @IsOptional()
  country?: string;

  @ApiProperty({
    example: 'Dakar',
    description: 'Customer city',
    required: false,
  })
  @IsString()
  @IsOptional()
  city?: string;

  @ApiProperty({
    example: '123 Main Street',
    description: 'Customer street address',
    required: false,
  })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty({
    example: '12345',
    description: 'Customer postal code',
    required: false,
  })
  @IsString()
  @IsOptional()
  postal_code?: string;

  @ApiProperty({
    example: false,
    description: 'Whether the customer is a business',
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  is_business?: boolean;

  @ApiProperty({
    example: { custom_field: 'value' },
    description: 'Additional metadata as JSON',
    required: false,
  })
  @IsObject()
  @IsOptional()
  metadata?: Record<string, any>;
}
