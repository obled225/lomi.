import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { BullModule } from '@nestjs/bullmq';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseModule } from './utils/supabase/supabase.module';
import { TransactionsModule } from '@core/transactions/transactions.module';
import { AccountsModule } from '@core/accounts/accounts.module';
import { OrganizationsModule } from '@core/organizations/organizations.module';
import { CustomersModule } from '@core/customers/customers.module';
import { PaymentRequestsModule } from '@core/payment-requests/payment-requests.module';
import { RefundsModule } from '@core/refunds/refunds.module';
import { ProductsModule } from '@core/products/products.module';
import { SubscriptionsModule } from '@core/subscriptions/subscriptions.module';
import { DiscountCouponsModule } from '@core/discount-coupons/discount-coupons.module';
import { CheckoutSessionsModule } from '@core/checkout-sessions/checkout-sessions.module';
import { PaymentLinksModule } from '@core/payment-links/payment-links.module';
import { PayoutsModule } from '@core/payouts/payouts.module';
import { BeneficiaryPayoutsModule } from '@core/beneficiary-payouts/beneficiary-payouts.module';
import { WebhookDeliveryLogsModule } from '@core/webhook-delivery-logs/webhook-delivery-logs.module';

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
    AccountsModule,
    OrganizationsModule,
    TransactionsModule,
    CustomersModule,
    PaymentRequestsModule,
    RefundsModule,
    ProductsModule,
    SubscriptionsModule,
    DiscountCouponsModule,
    CheckoutSessionsModule,
    PaymentLinksModule,
    PayoutsModule,
    BeneficiaryPayoutsModule,
    WebhookDeliveryLogsModule,
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
