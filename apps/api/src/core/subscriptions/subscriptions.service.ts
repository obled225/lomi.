import { Injectable } from '@nestjs/common';
import { SupabaseService } from '@utils/supabase/supabase.service';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { AuthContext } from '@core/common/decorators/current-user.decorator';

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
    const { data, error } = await this.supabase
      .getClient()
      .from('subscriptions')
      .update(updateDto as any)
      .eq('subscription_id', id)
      .eq('organization_id', user.organizationId)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
