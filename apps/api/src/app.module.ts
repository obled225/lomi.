import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { BullModule } from '@nestjs/bullmq';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseModule } from './supabase/supabase.module';
import { TransactionsModule } from './transactions/transactions.module';
import { CustomersModule } from './customers/customers.module';
import { PaymentRequestsModule } from './payment-requests/payment-requests.module';
import { RefundsModule } from './refunds/refunds.module';
import { ProductsModule } from './products/products.module';
import { PricesModule } from './prices/prices.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { DiscountCouponsModule } from './discount-coupons/discount-coupons.module';
import { CustomerInvoicesModule } from './customer-invoices/customer-invoices.module';
import { CheckoutSessionsModule } from './checkout-sessions/checkout-sessions.module';
import { PaymentLinksModule } from './payment-links/payment-links.module';
import { PayoutsModule } from './payouts/payouts.module';
import { BeneficiaryPayoutsModule } from './beneficiary-payouts/beneficiary-payouts.module';
import { WebhooksModule } from './webhooks/webhooks.module';
import { WebhookDeliveryLogsModule } from './webhook-delivery-logs/webhook-delivery-logs.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local'],
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 900000, // 15 minutes
        limit: 5000,
      },
    ]),
    EventEmitterModule.forRoot(),
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379'),
      },
    }),
    SupabaseModule,
    TransactionsModule,
    CustomersModule,
    PaymentRequestsModule,
    RefundsModule,
    ProductsModule,
    PricesModule,
    SubscriptionsModule,
    DiscountCouponsModule,
    CustomerInvoicesModule,
    CheckoutSessionsModule,
    PaymentLinksModule,
    PayoutsModule,
    BeneficiaryPayoutsModule,
    WebhooksModule,
    WebhookDeliveryLogsModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
