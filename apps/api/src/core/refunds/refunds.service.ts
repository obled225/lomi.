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
    // First verify the transaction belongs to this organization using RPC
    const { data: txData, error: txError } = await this.supabase
      .getClient()
      .rpc(
        'get_transaction' as any,
        {
          p_transaction_id: createDto.transaction_id,
          p_organization_id: user.organizationId,
        } as any,
      );

    if (txError) {
      throw new NotFoundException(
        `Transaction with ID ${createDto.transaction_id} not found or access denied: ${txError.message}`,
      );
    }

    // RPC functions that return TABLE return an array
    if (!txData) {
      throw new NotFoundException(
        `Transaction with ID ${createDto.transaction_id} not found or access denied`,
      );
    }

    const txResults = Array.isArray(txData) ? txData : [txData];
    const transaction = txResults[0] as any;

    if (!transaction || !transaction.transaction_id) {
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
   * Uses RPC: list_refunds
   */
  async findAll(
    user: AuthContext,
    status?: string,
    startDate?: string,
    endDate?: string,
    limit: number = 50,
    offset: number = 0,
  ) {
    const { data, error } = await this.supabase.getClient().rpc(
      'list_refunds' as any,
      {
        p_organization_id: user.organizationId,
        p_status: status || null,
        p_start_date: startDate || null,
        p_end_date: endDate || null,
        p_limit: limit,
        p_offset: offset,
      } as any,
    );

    if (error) throw new Error(error.message);

    const refunds = (data as any[]) || [];

    return {
      data: refunds,
      total: refunds.length, // RPC doesn't return count, approximate with length
      limit,
      offset,
    };
  }

  /**
   * Get single refund by ID
   * Uses RPC: get_refund
   */
  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase.getClient().rpc(
      'get_refund' as any,
      {
        p_refund_id: id,
        p_organization_id: user.organizationId,
      } as any,
    );

    if (error) {
      throw new NotFoundException(
        `Refund with ID ${id} not found or access denied`,
      );
    }

    // RPC functions that return TABLE return an array
    if (!data) {
      throw new NotFoundException(
        `Refund with ID ${id} not found or access denied`,
      );
    }

    const results = Array.isArray(data) ? data : [data];
    const refund = results[0] as any;

    if (!refund || !refund.refund_id) {
      throw new NotFoundException(
        `Refund with ID ${id} not found or access denied`,
      );
    }

    return refund;
  }
}
