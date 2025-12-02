import { Injectable } from '@nestjs/common';
import { SupabaseService } from '@/utils/supabase/supabase.service';
import { CreatePayoutDto } from './dto/create-payout.dto';
import { AuthContext } from '@/core/common/decorators/current-user.decorator';

@Injectable()
export class PayoutsService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createDto: CreatePayoutDto, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('payouts')
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
      .from('payouts')
      .select('*')
      .eq('organization_id', user.organizationId);

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('payouts')
      .select('*')
      .eq('payout_id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
