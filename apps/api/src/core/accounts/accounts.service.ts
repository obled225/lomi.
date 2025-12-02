import { Injectable, NotFoundException } from '@nestjs/common';
import { SupabaseService } from '@/utils/supabase/supabase.service';
import { AuthContext } from '@/core/common/decorators/current-user.decorator';
import { AccountBalanceResponseDto } from './dto/account-balance-response.dto';
import { BalanceBreakdownResponseDto } from './dto/balance-breakdown-response.dto';
import { CurrencyCode } from '@/utils/types/api';

@Injectable()
export class AccountsService {
  constructor(private readonly supabase: SupabaseService) {}

  /**
   * List all accounts for the merchant's organization
   * Uses direct table query as no RPC function exists for this
   */
  async findAll(user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('accounts')
      .select('*')
      .eq('organization_id', user.organizationId);

    if (error) throw new Error(error.message);
    return data;
  }

  /**
   * Get a single account by ID
   * Uses direct table query as no RPC function exists for this
   */
  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('accounts')
      .select('*')
      .eq('account_id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        throw new NotFoundException(`Account with ID ${id} not found`);
      }
      throw new Error(error.message);
    }
    return data;
  }

  /**
   * Fetch account balance using RPC function
   * Uses: fetch_account_balance(p_merchant_id, p_organization_id, p_currency_code)
   * Returns: { currency_code, balance, last_updated }[]
   */
  async getBalance(
    user: AuthContext,
    currencyCode?: string,
  ): Promise<AccountBalanceResponseDto[]> {
    const { data, error } = await this.supabase.getClient().rpc(
      'fetch_account_balance' as any,
      {
        p_merchant_id: user.merchantId,
        p_organization_id: user.organizationId,
        p_currency_code: currencyCode || null,
      } as any,
    );

    if (error) throw new Error(error.message);

    const result = (data as AccountBalanceResponseDto[]) || [];

    // If specific currency requested but not found, throw error
    if (currencyCode && result.length === 0) {
      throw new NotFoundException(
        `No account found for currency ${currencyCode}. You may need to make a transaction in this currency first.`,
      );
    }

    return result;
  }

  /**
   * Fetch detailed balance breakdown using RPC function
   * Uses: fetch_balance_breakdown(p_merchant_id, p_target_currency)
   * Returns breakdown with available, pending, and total balances
   * Includes currency conversion if target_currency is specified
   */
  async getBalanceBreakdown(
    user: AuthContext,
    targetCurrency?: CurrencyCode,
  ): Promise<BalanceBreakdownResponseDto[]> {
    const { data, error } = await this.supabase.getClient().rpc(
      'fetch_balance_breakdown' as any,
      {
        p_merchant_id: user.merchantId,
        p_target_currency: targetCurrency || null,
      } as any,
    );

    if (error) throw new Error(error.message);

    const result = (data as BalanceBreakdownResponseDto[]) || [];

    // If no accounts found at all, provide helpful message
    if (result.length === 0) {
      throw new NotFoundException(
        'No accounts found. Accounts are created automatically when you receive your first payment.',
      );
    }

    return result;
  }

  /**
   * Check if merchant has sufficient available balance
   * Uses: check_merchant_available_balance(p_merchant_id, p_currency_code)
   */
  async checkAvailableBalance(
    user: AuthContext,
    currencyCode: CurrencyCode,
  ): Promise<{ has_sufficient_balance: boolean; available_balance: number }> {
    const { data, error } = await this.supabase.getClient().rpc(
      'check_merchant_available_balance' as any,
      {
        p_merchant_id: user.merchantId,
        p_currency_code: currencyCode,
      } as any,
    );

    if (error) throw new Error(error.message);
    return data;
  }
}
