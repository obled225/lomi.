import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateWebhookDeliveryLogDto } from './dto/create-webhook-delivery-log.dto';
import { AuthContext } from '../common/decorators/current-user.decorator';

@Injectable()
export class WebhookDeliveryLogsService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createDto: CreateWebhookDeliveryLogDto, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('webhook_delivery_logs')
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
      .from('webhook_delivery_logs')
      .select('*')
      .eq('organization_id', user.organizationId);

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('webhook_delivery_logs')
      .select('*')
      .eq('log_id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
