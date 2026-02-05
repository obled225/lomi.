import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';

export class CustomerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;
}

export class CreateWaveChargeDto {
  @IsNumber()
  @Min(1)
  amount: number;

  @IsString()
  @IsNotEmpty()
  currency: string;

  @IsUUID()
  @IsOptional()
  organizationId?: string;

  @IsUUID()
  @IsOptional()
  merchantId?: string;

  @ValidateNested()
  @Type(() => CustomerDto)
  @IsNotEmpty()
  customer: CustomerDto;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  successUrl?: string;

  @IsString()
  @IsOptional()
  errorUrl?: string;

  @IsString()
  @IsOptional()
  environment?: string;
}
