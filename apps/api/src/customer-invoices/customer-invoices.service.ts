import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateCustomerInvoiceDto } from './dto/create-customer-invoice.dto';
import { AuthContext } from '../common/decorators/current-user.decorator';

@Injectable()
export class CustomerInvoicesService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createDto: CreateCustomerInvoiceDto, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('customer_invoices')
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
      .from('customer_invoices')
      .select('*')
      .eq('organization_id', user.organizationId);

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('customer_invoices')
      .select('*')
      .eq('invoice_id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
