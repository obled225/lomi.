import { Injectable, NotFoundException } from '@nestjs/common';
import { SupabaseService } from '@/utils/supabase/supabase.service';
import { CreateCheckoutSessionDto } from './dto/create-checkout-session.dto';
import { AuthContext } from '../common/decorators/current-user.decorator';
import { CurrencyCode } from '@/utils/types/api';

@Injectable()
export class CheckoutSessionsService {
  constructor(private readonly supabase: SupabaseService) {}

  /**
   * Create a new checkout session
   * Uses RPC: create_checkout_session
   */
  async create(createDto: CreateCheckoutSessionDto, user: AuthContext) {
    const { data, error } = await this.supabase.rpc('create_checkout_session', {
      p_organization_id: user.organizationId,
      p_environment: user.environment,
      p_created_by: user.merchantId,
      p_amount: createDto.amount,
      p_currency_code: createDto.currency_code as CurrencyCode,
      p_customer_id: createDto.customer_id || null,
      p_metadata: createDto.metadata || null,
      p_title: createDto.title || null,
      p_description: createDto.description || null,
      p_product_id: createDto.product_id || null,
      p_price_id: createDto.price_id || null,
      p_subscription_id: createDto.subscription_id || null,
      p_allow_quantity: createDto.allow_quantity ?? false,
      p_quantity: createDto.quantity ?? 1,
      p_success_url: createDto.success_url || null,
      p_cancel_url: createDto.cancel_url || null,
      p_customer_email: createDto.customer_email || null,
      p_customer_name: createDto.customer_name || null,
      p_customer_phone: createDto.customer_phone || null,
      p_allow_coupon_code: createDto.allow_coupon_code ?? false,
      p_require_billing_address: createDto.require_billing_address ?? true,
      p_payment_link_id: createDto.payment_link_id || null,
    });

    if (error) throw new Error(error.message);
    return data;
  }

  /**
   * List checkout sessions with pagination and filtering
   * Uses RPC: list_checkout_sessions
   */
  async findAll(
    user: AuthContext,
    status?: string,
    limit: number = 20,
    offset: number = 0,
  ) {
    const { data, error } = await this.supabase.rpc('list_checkout_sessions', {
      p_merchant_id: user.merchantId,
      p_status: status || null,
      p_limit: limit,
      p_offset: offset,
    });

    if (error) throw new Error(error.message);
    return data || [];
  }

  /**
   * Get single checkout session by ID
   */
  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('checkout_sessions')
      .select('*')
      .eq('checkout_session_id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error || !data) {
      throw new NotFoundException(
        `Checkout session with ID ${id} not found or access denied`,
      );
    }

    return data;
  }
}
