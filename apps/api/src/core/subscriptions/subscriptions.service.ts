import { Injectable } from '@nestjs/common';
import { SupabaseService } from '@/utils/supabase/supabase.service';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { AuthContext } from '@/core/common/decorators/current-user.decorator';
import { Database } from '@/utils/types/api';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SubscriptionsService {
  constructor(private readonly supabase: SupabaseService) {}

  async findAll(user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('subscriptions')
      .select('*')
      .eq('organization_id', user.organizationId);

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('subscriptions')
      .select('*')
      .eq('subscription_id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }

  async update(
    id: string,
    updateDto: UpdateSubscriptionDto,
    user: AuthContext,
  ) {
    const { data, error } = await (
      this.supabase.getClient().from('subscriptions') as unknown as ReturnType<
        SupabaseClient<Database>['from']
      >
    )
      .update(
        updateDto as Database['public']['Tables']['subscriptions']['Update'],
      )
      .eq('subscription_id', id)
      .eq('organization_id', user.organizationId)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
