import { ApiProperty } from '@nestjs/swagger';

export class CancelSubscriptionDto {
  @ApiProperty({
    example: 'Customer requested cancellation',
    description: 'Reason for cancellation (stored in metadata)',
    required: false,
  })
  cancellation_reason?: string;
}
