import { Injectable, NotFoundException } from '@nestjs/common';
import { SupabaseService } from '@/utils/supabase/supabase.service';
import { AuthContext } from '@/core/common/decorators/current-user.decorator';

@Injectable()
export class TransactionsService {
  constructor(private readonly supabase: SupabaseService) {}

  /**
   * List all transactions for merchant's organization with advanced filtering
   * Uses RPC: fetch_transactions
   */
  async findAll(
    user: AuthContext,
    providerCode?: string,
    status?: string[],
    type?: string[],
    currency?: string[],
    paymentMethod?: string[],
    page: number = 1,
    pageSize: number = 50,
    startDate?: string,
    endDate?: string,
    isPos?: boolean,
  ) {
    const { data, error } = await this.supabase.getClient().rpc(
      'fetch_transactions' as any,
      {
        p_organization_id: user.organizationId,
        p_provider_code: providerCode || null,
        p_status: status || null,
        p_type: type || null,
        p_currency: currency || null,
        p_payment_method: paymentMethod || null,
        p_page: page,
        p_page_size: pageSize,
        p_start_date: startDate || null,
        p_end_date: endDate || null,
        p_is_pos: isPos !== undefined ? isPos : null,
        p_environment: 'live',
      } as any,
    );

    if (error) throw new Error(error.message);

    return data || [];
  }

  /**
   * Get single transaction by ID
   * Uses RPC: get_transaction then validates ownership
   */
  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase.getClient().rpc(
      'get_transaction' as any,
      {
        p_transaction_id: id,
      } as any,
    );

    if (error) throw new Error(error.message);

    const transaction = data as any;

    if (!transaction || !transaction.transaction_id) {
      throw new NotFoundException(
        `Transaction with ID ${id} not found or access denied`,
      );
    }

    // Validate ownership
    if (transaction.organization_id !== user.organizationId) {
      throw new NotFoundException(
        `Transaction with ID ${id} not found or access denied`,
      );
    }

    return transaction;
  }
}
