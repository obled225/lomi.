import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateRefundDto } from './dto/create-refund.dto';

@Injectable()
export class RefundsService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(createDto: CreateRefundDto) {
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

  async findAll() {
    const { data, error } = await this.supabase
      .getClient()
      .from('refunds')
      .select('*')
      ;

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: string) {
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
