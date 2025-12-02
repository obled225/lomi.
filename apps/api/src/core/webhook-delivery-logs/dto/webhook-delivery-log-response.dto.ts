import { ApiProperty } from '@nestjs/swagger';

export class WebhookDeliveryLogResponseDto {
  @ApiProperty({ example: 123 })
  amount: number;

  @ApiProperty({ example: 123 })
  attempt_number: number;

  @ApiProperty({ example: 'string' })
  compte_paye: string;

  @ApiProperty({ example: 'string' })
  compte_payeur: string;

  @ApiProperty({ example: 'string' })
  created_at: string;

  @ApiProperty({ example: 'string' })
  event_type: string;

  @ApiProperty({ example: {} })
  headers: any;

  @ApiProperty({ example: 'string' })
  ip_address: string;

  @ApiProperty({ example: 'string' })
  log_id: string;

  @ApiProperty({ example: 'string' })
  organization_id: string;

  @ApiProperty({ example: {} })
  payload: any;

  @ApiProperty({ example: 123 })
  request_duration_ms: number;

  @ApiProperty({ example: 'string' })
  response_body: string;

  @ApiProperty({ example: 123 })
  response_status: number;

  @ApiProperty({ example: 'string' })
  spi_tx_id: string;

  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: 'string' })
  user_agent: string;

  @ApiProperty({ example: 'string' })
  webhook_id: string;

}