import { Injectable, NotFoundException } from '@nestjs/common';
import { SupabaseService } from '@/utils/supabase/supabase.service';
import { CreatePaymentLinkDto } from './dto/create-payment-link.dto';
import { AuthContext } from '@/core/common/decorators/current-user.decorator';

@Injectable()
export class PaymentLinksService {
  constructor(private readonly supabase: SupabaseService) {}

  /**
   * Create a payment link
   * Uses RPC: create_payment_link
   */
  async create(createDto: CreatePaymentLinkDto, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .rpc('create_payment_link', {
        p_organization_id: user.organizationId,
        p_link_type: createDto.link_type,
        p_title: createDto.title,
        p_currency_code: createDto.currency_code,
        p_description: createDto.description || null,
        p_price: createDto.amount || null,
        p_allow_coupon_code: createDto.allow_coupon_code ?? false,
        p_allow_quantity: createDto.allow_quantity ?? false,
        p_require_billing_address: createDto.require_billing_address ?? true,
        p_expires_at: createDto.expires_at || null,
        p_success_url: createDto.success_url || null,
        p_cancel_url: createDto.cancel_url || null,
        p_product_id: createDto.product_id || null,
        p_price_id: createDto.price_id || null,
        p_created_by: user.merchantId,
        p_environment: 'live',
      });

    if (error) throw new Error(error.message);

    // Fetch the created link
    return this.findOne(data, user);
  }

  /**
   * List all payment links with filtering
   */
  async findAll(
    user: AuthContext,
    linkType?: string,
    isActive?: boolean,
    limit: number = 20,
    offset: number = 0,
  ) {
    let query = this.supabase
      .getClient()
      .from('payment_links')
      .select('*', { count: 'exact' })
      .eq('organization_id', user.organizationId)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (linkType) {
      query = query.eq('link_type', linkType);
    }

    if (isActive !== undefined) {
      query = query.eq('is_active', isActive);
    }

    const { data, error, count } = await query;

    if (error) throw new Error(error.message);

    return {
      data: data || [],
      total: count || 0,
      limit,
      offset,
    };
  }

  /**
   * Get single payment link by ID
   */
  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('payment_links')
      .select('*')
      .eq('link_id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error || !data) {
      throw new NotFoundException(
        `Payment link with ID ${id} not found or access denied`,
      );
    }

    return data;
  }
}
