import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { UpdateWebhookDto } from './dto/update-webhook.dto';
import { AuthContext } from '../common/decorators/current-user.decorator';

@Injectable()
export class WebhooksService {
  constructor(private readonly supabase: SupabaseService) {}

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
    const { data, error } = await this.supabase
      .getClient()
      .from('webhooks')
      .update(updateDto as any)
      .eq('webhook_id', id)
      .eq('organization_id', user.organizationId)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
