import { Injectable, NotFoundException } from '@nestjs/common';
import { SupabaseService } from '@/utils/supabase/supabase.service';
import { CreateRefundDto } from './dto/create-refund.dto';
import { AuthContext } from '@/core/common/decorators/current-user.decorator';

@Injectable()
export class RefundsService {
  constructor(private readonly supabase: SupabaseService) {}

  /**
   * Initiate a refund
   * Uses RPC: create_refund
   * Returns immediately with pending status - completion confirmed via webhook
   */
  async create(createDto: CreateRefundDto, user: AuthContext) {
    // First verify the transaction belongs to this organization
    const { data: transaction, error: txError } = await this.supabase
      .getClient()
      .from('transactions')
      .select('transaction_id, organization_id, gross_amount')
      .eq('transaction_id', createDto.transaction_id)
      .eq('organization_id', user.organizationId)
      .single<{
        transaction_id: string;
        organization_id: string;
        gross_amount: number;
      }>();

    if (txError || !transaction) {
      throw new NotFoundException(
        `Transaction with ID ${createDto.transaction_id} not found or access denied`,
      );
    }

    // Validate refund amount
    if (createDto.amount > transaction.gross_amount) {
      throw new Error(
        `Refund amount (${createDto.amount}) cannot exceed transaction amount (${transaction.gross_amount})`,
      );
    }

    const { data, error } = await this.supabase.rpc('create_refund', {
      p_transaction_id: createDto.transaction_id,
      p_amount: createDto.amount,
      p_reason: createDto.reason,
      p_provider_transaction_id: undefined,
      p_provider_merchant_id: undefined,
      p_provider_code: undefined,
      p_metadata: createDto.metadata,
      p_created_by: user.merchantId,
    });

    if (error) throw new Error(error.message);

    if (!data) throw new Error('Failed to create refund');

    // Return the initiated refund details
    return this.findOne(data, user);
  }

  /**
   * List all refunds with filtering
   */
  async findAll(
    user: AuthContext,
    status?: string,
    startDate?: string,
    endDate?: string,
    limit: number = 50,
    offset: number = 0,
  ) {
    let query = this.supabase
      .getClient()
      .from('refunds')
      .select(
        `
        *,
        transactions!inner (
          organization_id,
          gross_amount,
          currency_code,
          customer_id
        )
      `,
        { count: 'exact' },
      )
      .eq('transactions.organization_id', user.organizationId)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (status) {
      query = query.eq('status', status);
    }

    if (startDate) {
      query = query.gte('created_at', startDate);
    }

    if (endDate) {
      query = query.lte('created_at', endDate);
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
   * Get single refund by ID
   */
  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('refunds')
      .select(
        `
        *,
        transactions!inner (
          organization_id,
          gross_amount,
          currency_code,
          customer_id
        )
      `,
      )
      .eq('refund_id', id)
      .eq('transactions.organization_id', user.organizationId)
      .single();

    if (error || !data) {
      throw new NotFoundException(
        `Refund with ID ${id} not found or access denied`,
      );
    }

    return data;
  }
}
