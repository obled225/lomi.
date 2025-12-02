import { Injectable } from '@nestjs/common';
import { SupabaseService } from '@/utils/supabase/supabase.service';
import { CreateCheckoutSessionDto } from './dto/create-checkout-session.dto';
import { AuthContext } from '../common/decorators/current-user.decorator';
import { CurrencyCode } from '@/utils/types/api';

@Injectable()
export class CheckoutSessionsService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createDto: CreateCheckoutSessionDto, user: AuthContext) {
    const { data, error } = await this.supabase.rpc('create_checkout_session', {
      p_organization_id: user.organizationId,
      p_environment: user.environment,
      p_created_by: user.merchantId,
      p_amount: createDto.amount,
      p_currency_code: createDto.currency_code as CurrencyCode,
      p_customer_id: createDto.customer_id,
      p_metadata: createDto.metadata,
      p_title: createDto.title,
      p_description: createDto.description,
      p_product_id: createDto.product_id,
      p_price_id: createDto.price_id,
      p_subscription_id: createDto.subscription_id,
      p_allow_quantity: createDto.allow_quantity,
      p_quantity: createDto.quantity,
      p_success_url: createDto.success_url,
      p_cancel_url: createDto.cancel_url,
      p_customer_email: createDto.customer_email,
      p_customer_name: createDto.customer_name,
      p_customer_phone: createDto.customer_phone,
      p_allow_coupon_code: createDto.allow_coupon_code,
      p_require_billing_address: createDto.require_billing_address,
      p_payment_link_id: createDto.payment_link_id,
    });

    if (error) throw new Error(error.message);
    return data;
  }

  async findAll(user: AuthContext) {
    const { data, error } = await this.supabase.rpc('list_checkout_sessions', {
      p_merchant_id: user.merchantId,
      p_limit: 100,
      p_offset: 0,
    });

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('checkout_sessions')
      .select('*')
      .eq('checkout_session_id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
