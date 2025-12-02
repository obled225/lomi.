import { Injectable } from '@nestjs/common';
import { SupabaseService } from '@utils/supabase/supabase.service';
import { CreateRefundDto } from './dto/create-refund.dto';
import { AuthContext } from '@core/common/decorators/current-user.decorator';

@Injectable()
export class RefundsService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createDto: CreateRefundDto, _user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('refunds')
      .insert({
        ...createDto,
        
      } as any)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  }

  async findAll(_user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('refunds')
      .select('*')
      ;

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: string, _user: AuthContext) {
    const { data, error } = await this.supabase
      .getClient()
      .from('refunds')
      .select('*')
      .eq('refund_id', id)
      
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
