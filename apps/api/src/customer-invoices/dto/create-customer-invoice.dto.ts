import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerInvoiceDto {
  @ApiProperty({ example: 123 })
  amount: number;

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

}