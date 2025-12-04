import { Module } from '@nestjs/common';
import { DiscountCouponsController } from './discount-coupons.controller';
import { DiscountCouponsService } from './discount-coupons.service';
import { SupabaseModule } from '../../utils/supabase/supabase.module';

@Module({
  imports: [SupabaseModule],
  controllers: [DiscountCouponsController],
  providers: [DiscountCouponsService],
  exports: [DiscountCouponsService],
})
export class DiscountCouponsModule {}
