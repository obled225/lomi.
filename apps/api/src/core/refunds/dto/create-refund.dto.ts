import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWaveRefundDto {
  @ApiProperty({ description: 'The transaction ID to refund' })
  @IsUUID()
  @IsNotEmpty()
  transactionId: string;

  @ApiProperty({ description: 'Amount to refund' })
  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ description: 'Reason for the refund', required: false })
  @IsString()
  @IsOptional()
  reason?: string;
}
