import { ApiProperty } from '@nestjs/swagger';

export class UpdateWebhookDto {
  @ApiProperty({ required: false, example: 'string' })
  authorized_events?: string;

  @ApiProperty({ required: false, example: 'string' })
  deleted_at?: string;

  @ApiProperty({ required: false, example: 'string' })
  environment?: string;

  @ApiProperty({ required: false, example: true })
  is_active?: boolean;

  @ApiProperty({ required: false, example: {} })
  last_payload?: any;

  @ApiProperty({ required: false, example: 'string' })
  last_response_body?: string;

  @ApiProperty({ required: false, example: 123 })
  last_response_status?: number;

  @ApiProperty({ required: false, example: 'string' })
  last_triggered_at?: string;

  @ApiProperty({ required: false, example: {} })
  metadata?: any;

  @ApiProperty({ required: false, example: 123 })
  retry_count?: number;

  @ApiProperty({ required: false, example: 'string' })
  spi_event_types?: string;

  @ApiProperty({ required: false, example: true })
  supports_spi?: boolean;

  @ApiProperty({ required: false, example: 'string' })
  url?: string;

  @ApiProperty({ required: false, example: 'string' })
  verification_token?: string;
}
