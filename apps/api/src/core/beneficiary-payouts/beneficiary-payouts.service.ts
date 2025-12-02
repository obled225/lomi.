import { Injectable } from '@nestjs/common';
import { SupabaseService } from '@utils/supabase/supabase.service';
import { CreateBeneficiaryPayoutDto } from './dto/create-beneficiary-payout.dto';
import { AuthContext } from '@core/common/decorators/current-user.decorator';

@Injectable()
export class BeneficiaryPayoutsService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createDto: CreateBeneficiaryPayoutDto, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('beneficiary_payouts')
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
      .from('beneficiary_payouts')
      .select('*')
      .eq('organization_id', user.organizationId);

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('beneficiary_payouts')
      .select('*')
      .eq('payout_id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
