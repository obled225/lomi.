import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateWebhookDto } from './dto/create-webhook.dto';
import { AuthContext } from '../common/decorators/current-user.decorator';

@Injectable()
export class WebhooksService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createDto: CreateWebhookDto, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('webhooks')
      .insert({
        ...createDto,
        organization_id: user.organizationId,
      } as any)
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
}
