import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreatePaymentLinkDto } from './dto/create-payment-link.dto';
import { AuthContext } from '../common/decorators/current-user.decorator';

@Injectable()
export class PaymentLinksService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createDto: CreatePaymentLinkDto, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('payment_links')
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
      .from('payment_links')
      .select('*')
      .eq('organization_id', user.organizationId);

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('payment_links')
      .select('*')
      .eq('link_id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
