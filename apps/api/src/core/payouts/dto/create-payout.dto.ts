import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class BeneficiaryDto {
  @ApiProperty({ description: 'Full name of the beneficiary' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Mobile money number (e.g. +221...)' })
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;
}

export class CreateWavePayoutDto {
  @ApiProperty({ description: 'Amount to payout' })
  @IsNumber()
  @Min(100)
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ description: 'Currency code', default: 'XOF' })
  @IsString()
  @IsNotEmpty()
  currency: string;

  @ApiProperty({ description: 'Beneficiary details' })
  @ValidateNested()
  @Type(() => BeneficiaryDto)
  @IsNotEmpty()
  beneficiary: BeneficiaryDto;

  @ApiProperty({ description: 'Reason for the payout', required: false })
  @IsString()
  @IsOptional()
  reason?: string;

  @ApiProperty({ description: 'Organization ID', required: false })
  @IsOptional()
  organizationId?: string;

  @ApiProperty({ description: 'Merchant ID', required: false })
  @IsOptional()
  merchantId?: string;
}
