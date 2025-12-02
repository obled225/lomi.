import { Module } from '@nestjs/common';
import { CustomerInvoicesController } from './customer-invoices.controller';
import { CustomerInvoicesService } from './customer-invoices.service';

@Module({
  controllers: [CustomerInvoicesController],
  providers: [CustomerInvoicesService],
})
export class CustomerInvoicesModule {}
