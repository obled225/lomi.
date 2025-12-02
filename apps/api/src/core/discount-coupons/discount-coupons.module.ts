import { Module } from '@nestjs/common';
import { DiscountCouponsController } from './discount-coupons.controller';
import { DiscountCouponsService } from './discount-coupons.service';

@Module({
  controllers: [DiscountCouponsController],
  providers: [DiscountCouponsService],
})
export class DiscountCouponsModule {}
