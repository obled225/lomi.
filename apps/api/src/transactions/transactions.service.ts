import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { AuthContext } from '../common/decorators/current-user.decorator';

@Injectable()
export class TransactionsService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createDto: CreateTransactionDto, user: AuthContext) {
    // Here we map the External DTO to the Internal DB Type
    const { data, error } = await this.supabase
      .getClient()
      .from('transactions')
      .insert({
        currency_code: createDto.currency_code,
        customer_id: createDto.customer_id,
        organization_id: user.organizationId,
        payment_method_code: createDto.payment_method_code as any, // Cast if needed or validate
        provider_code: createDto.provider_code as any,
        transaction_type: 'payment',
        gross_amount: createDto.amount,
        net_amount: createDto.amount, // Simplified logic
        fee_amount: 0,
      } as any)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async findAll(user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .rpc('list_transactions', {
        p_organization_id: user.organizationId,
      });

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('transactions')
      .select('*')
      .eq('transaction_id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
