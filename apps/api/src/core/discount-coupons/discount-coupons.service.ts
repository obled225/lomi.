import { Injectable } from '@nestjs/common';
import { SupabaseService } from '@utils/supabase/supabase.service';
import { CreateDiscountCouponDto } from './dto/create-discount-coupon.dto';
import { AuthContext } from '@core/common/decorators/current-user.decorator';

@Injectable()
export class DiscountCouponsService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createDto: CreateDiscountCouponDto, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('discount_coupons')
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
      .from('discount_coupons')
      .select('*')
      .eq('organization_id', user.organizationId);

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('discount_coupons')
      .select('*')
      .eq('coupon_id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
