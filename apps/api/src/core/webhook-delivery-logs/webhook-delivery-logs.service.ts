import { Injectable } from '@nestjs/common';
import { SupabaseService } from '@/utils/supabase/supabase.service';
import { AuthContext } from '@/core/common/decorators/current-user.decorator';

@Injectable()
export class WebhookDeliveryLogsService {
  constructor(private readonly supabase: SupabaseService) {}

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
