import { ApiProperty } from '@nestjs/swagger';

export class CustomerInvoiceResponseDto {
  @ApiProperty({ example: 123 })
  amount: number;

  @ApiProperty({ example: 'string' })
  created_at: string;

  @ApiProperty({ example: 'string' })
  created_by: string;

  @ApiProperty({ example: 'string' })
  currency_code: string;

  @ApiProperty({ example: 'string' })
  customer_id: string;

  @ApiProperty({ example: 'string' })
  customer_invoice_id: string;

  @ApiProperty({ example: 'string' })
  description: string;

  @ApiProperty({ example: 'string' })
  due_date: string;

  @ApiProperty({ example: {} })
  metadata: any;

  @ApiProperty({ example: 'string' })
  organization_id: string;

  @ApiProperty({ example: 'string' })
  status: string;

  @ApiProperty({ example: 'string' })
  updated_at: string;

}