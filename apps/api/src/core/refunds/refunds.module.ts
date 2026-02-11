import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SupabaseModule } from '../../utils/supabase/supabase.module';
import { RefundsController } from './refunds.controller';
import { RefundsService } from './refunds.service';

@Module({
  imports: [ConfigModule, SupabaseModule],
  controllers: [RefundsController],
  providers: [RefundsService],
  exports: [RefundsService],
})
export class RefundsModule {}
