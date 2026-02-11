import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SupabaseModule } from '../../utils/supabase/supabase.module';
import { PayoutsController } from './payouts.controller';
import { PayoutsService } from './payouts.service';

@Module({
  imports: [ConfigModule, SupabaseModule],
  controllers: [PayoutsController],
  providers: [PayoutsService],
  exports: [PayoutsService],
})
export class PayoutsModule {}
