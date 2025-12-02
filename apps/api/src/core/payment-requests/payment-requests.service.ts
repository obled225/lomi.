import { Injectable, NotFoundException } from '@nestjs/common';
import { SupabaseService } from '@/utils/supabase/supabase.service';
import { CreatePaymentRequestDto } from './dto/create-payment-request.dto';
import { AuthContext } from '@/core/common/decorators/current-user.decorator';

@Injectable()
export class PaymentRequestsService {
  constructor(private readonly supabase: SupabaseService) {}

  /**
   * Create a payment request
   */
  async create(createDto: CreatePaymentRequestDto, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('payment_requests')
      .insert({
        organization_id: user.organizationId,
        customer_id: createDto.customer_id || null,
        amount: createDto.amount,
        currency_code: createDto.currency_code,
        description: createDto.description || null,
        status: 'pending',
        expiry_date: createDto.expiry_date,
        payment_reference: createDto.payment_reference || null,
        created_by: user.merchantId,
        environment: 'live',
      } as any)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  }

  /**
   * List all payment requests with filtering
   */
  async findAll(
    user: AuthContext,
    status?: string,
    customerId?: string,
    limit: number = 20,
    offset: number = 0,
  ) {
    let query = this.supabase
      .getClient()
      .from('payment_requests')
      .select('*', { count: 'exact' })
      .eq('organization_id', user.organizationId)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (status) {
      query = query.eq('status', status);
    }

    if (customerId) {
      query = query.eq('customer_id', customerId);
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
   * Get single payment request by ID
   */
  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('payment_requests')
      .select('*')
      .eq('request_id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error || !data) {
      throw new NotFoundException(
        `Payment request with ID ${id} not found or access denied`,
      );
    }

    return data;
  }
}
