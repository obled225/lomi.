import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreatePaymentRequestDto } from './dto/create-payment-request.dto';
import { AuthContext } from '../common/decorators/current-user.decorator';

@Injectable()
export class PaymentRequestsService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createDto: CreatePaymentRequestDto, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('payment_requests')
      .insert({
        ...createDto,
        organization_id: user.organizationId,
      } as any)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  }

  async findAll(user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('payment_requests')
      .select('*')
      .eq('organization_id', user.organizationId);

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('payment_requests')
      .select('*')
      .eq('request_id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
