import { Injectable } from '@nestjs/common';
import { SupabaseService } from '@utils/supabase/supabase.service';
import { CreateProductDto } from './dto/create-product.dto';
import { AuthContext } from '@core/common/decorators/current-user.decorator';

@Injectable()
export class ProductsService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createDto: CreateProductDto, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('products')
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
      .from('products')
      .select('*')
      .eq('organization_id', user.organizationId);

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: string, user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('products')
      .select('*')
      .eq('product_id', id)
      .eq('organization_id', user.organizationId)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
