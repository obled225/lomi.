import { Injectable } from '@nestjs/common';
import { SupabaseService } from '@utils/supabase/supabase.service';
import { AuthContext } from '@core/common/decorators/current-user.decorator';
import { Database } from '@utils/types/database.types';

type CurrencyCode = Database['public']['Enums']['currency_code'];

@Injectable()
export class AccountsService {
  constructor(private readonly supabase: SupabaseService) {}

  /**
   * Fetch balance breakdown for the merchant
   * Returns available balance, pending balance, and total balance for each currency
   * Optionally converts balances to a target currency
   */
  async getBalance(
    user: AuthContext,
    targetCurrency?: CurrencyCode,
  ) {
    const { data, error } = await this.supabase
      .getClient()
      .rpc('fetch_balance_breakdown', {
        p_merchant_id: user.merchantId,
        p_target_currency: targetCurrency || undefined,
      });

    if (error) throw new Error(error.message);
    return data;
  }

  /**
   * Fetch account balance for specific currency
   * Returns balance information for a specific currency code
   */
  async getAccountBalance(
    user: AuthContext,
    currencyCode?: string,
  ) {
    const { data, error } = await this.supabase
      .getClient()
      .rpc('fetch_account_balance', {
        p_merchant_id: user.merchantId,
        p_organization_id: user.organizationId,
        p_currency_code: currencyCode || undefined,
      });

    if (error) throw new Error(error.message);
    return data;
  }
}
