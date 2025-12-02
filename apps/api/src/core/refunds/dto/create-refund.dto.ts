import { ApiProperty } from '@nestjs/swagger';

export class CreateRefundDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Transaction ID to refund',
  })
  transaction_id: string;

  @ApiProperty({
    example: 5000.0,
    description: 'Amount to refund (must be <= original transaction amount)',
  })
  amount: number;

  @ApiProperty({
    example: 'Customer requested refund',
    description: 'Reason for refund',
    required: false,
  })
  reason?: string;

  @ApiProperty({
    example: { support_ticket_id: 'TICKET-123' },
    description: 'Additional metadata',
    required: false,
  })
  metadata?: Record<string, any>;
}
