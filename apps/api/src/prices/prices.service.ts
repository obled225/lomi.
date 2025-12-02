import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreatePriceDto } from './dto/create-price.dto';
import { AuthContext } from '../common/decorators/current-user.decorator';

@Injectable()
export class PricesService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createDto: CreatePriceDto, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('prices')
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
      .from('prices')
      .select('*')
      .eq('organization_id', user.organizationId);

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('prices')
      .select('*')
      .eq('price_id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
