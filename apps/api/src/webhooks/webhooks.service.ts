import { Injectable } from '@nestjs/common';
import { SupabaseService } from '@/utils/supabase/supabase.service';
import { CreateWebhookDto } from './dto/create-webhook.dto';
import { UpdateWebhookDto } from './dto/update-webhook.dto';
import { AuthContext } from '@/core/common/decorators/current-user.decorator';
import { Database } from '@/utils/types/api';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class WebhooksService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createDto: CreateWebhookDto, user: AuthContext) {
    const insertData: Database['public']['Tables']['webhooks']['Insert'] = {
      url: createDto.url,
      authorized_events: (typeof createDto.authorized_events === 'string'
        ? [createDto.authorized_events]
        : createDto.authorized_events) as Database['public']['Enums']['webhook_event'][],
      organization_id: user.organizationId,
      is_active: createDto.is_active ?? true,
      spi_event_types: createDto.spi_event_types
        ? typeof createDto.spi_event_types === 'string'
          ? [createDto.spi_event_types]
          : createDto.spi_event_types
        : null,
      supports_spi: createDto.supports_spi ?? false,
      metadata: createDto.metadata ?? null,
      environment: createDto.environment ?? 'live',
      verification_token: createDto.verification_token,
    };

    const { data, error } = await (
      this.supabase.getClient().from('webhooks') as unknown as ReturnType<
        SupabaseClient<Database>['from']
      >
    )
      .insert(insertData)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  }

  async findAll(user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('webhooks')
      .select('*')
      .eq('organization_id', user.organizationId);

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('webhooks')
      .select('*')
      .eq('webhook_id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }

  async update(id: string, updateDto: UpdateWebhookDto, user: AuthContext) {
    const { data, error } = await (
      this.supabase.getClient().from('webhooks') as unknown as ReturnType<
        SupabaseClient<Database>['from']
      >
    )
      .update(updateDto as Database['public']['Tables']['webhooks']['Update'])
      .eq('webhook_id', id)
      .eq('organization_id', user.organizationId)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
