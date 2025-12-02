import { Module } from '@nestjs/common';
import { BeneficiaryPayoutsController } from './beneficiary-payouts.controller';
import { BeneficiaryPayoutsService } from './beneficiary-payouts.service';

@Module({
  controllers: [BeneficiaryPayoutsController],
  providers: [BeneficiaryPayoutsService],
})
export class BeneficiaryPayoutsModule {}
