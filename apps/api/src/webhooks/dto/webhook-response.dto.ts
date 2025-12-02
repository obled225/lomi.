import { ApiProperty } from '@nestjs/swagger';

export class WebhookResponseDto {
  @ApiProperty({ example: 'string' })
  authorized_events: string;

  @ApiProperty({ example: 'string' })
  created_at: string;

  @ApiProperty({ example: 'string' })
  created_by: string;

  @ApiProperty({ example: 'string' })
  deleted_at: string;

  @ApiProperty({ example: 'string' })
  environment: string;

  @ApiProperty({ example: true })
  is_active: boolean;

  @ApiProperty({ example: {} })
  last_payload: any;

  @ApiProperty({ example: 'string' })
  last_response_body: string;

  @ApiProperty({ example: 123 })
  last_response_status: number;

  @ApiProperty({ example: 'string' })
  last_triggered_at: string;

  @ApiProperty({ example: {} })
  metadata: any;

  @ApiProperty({ example: 'string' })
  organization_id: string;

  @ApiProperty({ example: 123 })
  retry_count: number;

  @ApiProperty({ example: 'string' })
  spi_event_types: string;

  @ApiProperty({ example: true })
  supports_spi: boolean;

  @ApiProperty({ example: 'string' })
  updated_at: string;

  @ApiProperty({ example: 'string' })
  url: string;

  @ApiProperty({ example: 'string' })
  verification_token: string;

  @ApiProperty({ example: 'string' })
  webhook_id: string;

}