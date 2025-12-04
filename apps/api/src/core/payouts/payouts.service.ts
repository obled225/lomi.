import { Injectable, NotFoundException } from '@nestjs/common';
import { SupabaseService } from '../../utils/supabase/supabase.service';
import { CreatePayoutDto } from './dto/create-payout.dto';
import { AuthContext } from '../common/decorators/current-user.decorator';
import {
  CurrencyCode,
  ProviderCode,
  PayoutStatus,
  Database,
} from '../../utils/types/api';

type Payout = Database['public']['Tables']['payouts']['Row'];

@Injectable()
export class PayoutsService {
  constructor(private readonly supabase: SupabaseService) {}

  /**
   * Initiate a payout (withdrawal)
   * Uses RPC: initiate_withdrawal
   * Returns immediately with pending status - completion confirmed via webhook
   */
  async create(createDto: CreatePayoutDto, user: AuthContext) {
    const { data, error } = await this.supabase.rpc('initiate_withdrawal', {
      p_merchant_id: user.merchantId,
      p_amount: createDto.amount,
      p_payout_method_id: createDto.payout_method_id,
      p_currency_code: createDto.currency_code as CurrencyCode,
      p_provider_code: (createDto.provider_code as ProviderCode) || null,
    });

    if (error) throw new Error(error.message);

    if (!data || data.length === 0 || !data[0].success) {
      throw new Error(data?.[0]?.message || 'Failed to initiate withdrawal');
    }

    // The RPC returns success message, but we need to fetch the payout
    // Query by created_by and organization_id to get the latest payout
    const { data: payouts, error: payoutError } = (await this.supabase
      .getClient()
      .from('payouts')
      .select('payout_id')
      .eq('created_by', user.merchantId)
      .eq('organization_id', user.organizationId)
      .order('created_at', { ascending: false })
      .limit(1)
      .single()) as { data: Pick<Payout, 'payout_id'> | null; error: any };

    if (payoutError || !payouts) {
      throw new Error('Payout created but could not be retrieved');
    }

    return this.findOne(payouts.payout_id, user);
  }

  /**
   * List all payouts with filtering
   * Uses RPC: fetch_payouts
   */
  async findAll(
    user: AuthContext,
    statuses?: string[],
    startDate?: string,
    endDate?: string,
    limit: number = 50,
    offset: number = 0,
  ) {
    const pageNumber = Math.floor(offset / limit) + 1;
    const pageSize = limit;

    const { data, error } = await this.supabase.rpc('fetch_payouts', {
      p_merchant_id: user.merchantId,
      p_statuses: statuses ? (statuses as PayoutStatus[]) : null,
      p_page_number: pageNumber,
      p_page_size: pageSize,
      p_start_date: startDate || null,
      p_end_date: endDate || null,
    });

    if (error) throw new Error(error.message);

    return {
      data: data || [],
      limit: pageSize,
      offset,
    };
  }

  /**
   * Get single payout by ID
   */
  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('payouts')
      .select('*')
      .eq('payout_id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error || !data) {
      throw new NotFoundException(
        `Payout with ID ${id} not found or access denied`,
      );
    }

    return data;
  }
}
