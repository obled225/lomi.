import { Injectable } from '@nestjs/common';
import { SupabaseService } from '@/utils/supabase/supabase.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { AuthContext } from '@/core/common/decorators/current-user.decorator';

@Injectable()
export class CustomersService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createDto: CreateCustomerDto, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('customers')
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
      .from('customers')
      .select('*')
      .eq('organization_id', user.organizationId);

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('customers')
      .select('*')
      .eq('id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
