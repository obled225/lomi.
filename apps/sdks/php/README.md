# OpenAPIClient-php

# lomi. API

The lomi. API provides a comprehensive payment processing platform for francophone WestAfrican businesses.

## Authentication

All API requests require authentication using an API key. Include your API key in the `X-API-KEY` header.

```bash
curl https://api.lomi.africa/v1/customers \\
  -H \"X-API-KEY: your_api_key_here\"
```

## Rate limiting

API requests are rate-limited based on your plan. Rate limit headers are included in all responses.

## Webhooks

Configure webhooks to receive real-time notifications about events in your account.

## Environments

- **Live**: Production environment with real transactions
- **Test**: Sandbox environment for development and testing

For more information, please visit [https://lomi.africa](https://lomi.africa).

## Installation & Usage

### Requirements

PHP 8.1 and later.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/lomiafrica/lomi-php-sdk.git"
    }
  ],
  "require": {
    "lomiafrica/lomi-php-sdk": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/OpenAPIClient-php/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



// Configure API key authorization: ApiKeyAuth
$config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = LomiSDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new LomiSDK\Api\BeneficiaryPayoutApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return
$offset = 0; // int | Number of items to skip
$sort = 'sort_example'; // string | Sort order (e.g., created_at:desc)

try {
    $result = $apiInstance->beneficiaryPayoutsGet($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BeneficiaryPayoutApi->beneficiaryPayoutsGet: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://api.lomi.africa/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BeneficiaryPayoutApi* | [**beneficiaryPayoutsGet**](docs/Api/BeneficiaryPayoutApi.md#beneficiarypayoutsget) | **GET** /beneficiary_payouts | List beneficiary_payouts
*BeneficiaryPayoutApi* | [**beneficiaryPayoutsPayoutIdGet**](docs/Api/BeneficiaryPayoutApi.md#beneficiarypayoutspayoutidget) | **GET** /beneficiary_payouts/{payout_id} | Get beneficiary_payout
*BeneficiaryPayoutApi* | [**beneficiaryPayoutsPost**](docs/Api/BeneficiaryPayoutApi.md#beneficiarypayoutspost) | **POST** /beneficiary_payouts | Create beneficiary_payout
*CheckoutSessionApi* | [**checkoutSessionsGet**](docs/Api/CheckoutSessionApi.md#checkoutsessionsget) | **GET** /checkout_sessions | List checkout_sessions
*CheckoutSessionApi* | [**checkoutSessionsPost**](docs/Api/CheckoutSessionApi.md#checkoutsessionspost) | **POST** /checkout_sessions | Create checkout_session
*CheckoutSessionApi* | [**checkoutSessionsSessionIdDelete**](docs/Api/CheckoutSessionApi.md#checkoutsessionssessioniddelete) | **DELETE** /checkout_sessions/{session_id} | Delete checkout_session
*CheckoutSessionApi* | [**checkoutSessionsSessionIdGet**](docs/Api/CheckoutSessionApi.md#checkoutsessionssessionidget) | **GET** /checkout_sessions/{session_id} | Get checkout_session
*CheckoutSessionApi* | [**checkoutSessionsSessionIdPatch**](docs/Api/CheckoutSessionApi.md#checkoutsessionssessionidpatch) | **PATCH** /checkout_sessions/{session_id} | Update checkout_session
*CustomerApi* | [**customersCustomerIdDelete**](docs/Api/CustomerApi.md#customerscustomeriddelete) | **DELETE** /customers/{customer_id} | Delete customer
*CustomerApi* | [**customersCustomerIdGet**](docs/Api/CustomerApi.md#customerscustomeridget) | **GET** /customers/{customer_id} | Get customer
*CustomerApi* | [**customersCustomerIdPatch**](docs/Api/CustomerApi.md#customerscustomeridpatch) | **PATCH** /customers/{customer_id} | Update customer
*CustomerApi* | [**customersGet**](docs/Api/CustomerApi.md#customersget) | **GET** /customers | List customers
*CustomerApi* | [**customersPost**](docs/Api/CustomerApi.md#customerspost) | **POST** /customers | Create customer
*CustomerInvoiceApi* | [**customerInvoicesGet**](docs/Api/CustomerInvoiceApi.md#customerinvoicesget) | **GET** /customer_invoices | List customer_invoices
*CustomerInvoiceApi* | [**customerInvoicesInvoiceIdGet**](docs/Api/CustomerInvoiceApi.md#customerinvoicesinvoiceidget) | **GET** /customer_invoices/{invoice_id} | Get customer_invoice
*DiscountCouponApi* | [**discountCouponsCouponIdDelete**](docs/Api/DiscountCouponApi.md#discountcouponscouponiddelete) | **DELETE** /discount_coupons/{coupon_id} | Delete discount_coupon
*DiscountCouponApi* | [**discountCouponsCouponIdGet**](docs/Api/DiscountCouponApi.md#discountcouponscouponidget) | **GET** /discount_coupons/{coupon_id} | Get discount_coupon
*DiscountCouponApi* | [**discountCouponsCouponIdPatch**](docs/Api/DiscountCouponApi.md#discountcouponscouponidpatch) | **PATCH** /discount_coupons/{coupon_id} | Update discount_coupon
*DiscountCouponApi* | [**discountCouponsGet**](docs/Api/DiscountCouponApi.md#discountcouponsget) | **GET** /discount_coupons | List discount_coupons
*DiscountCouponApi* | [**discountCouponsPost**](docs/Api/DiscountCouponApi.md#discountcouponspost) | **POST** /discount_coupons | Create discount_coupon
*EventApi* | [**eventsEventIdGet**](docs/Api/EventApi.md#eventseventidget) | **GET** /events/{event_id} | Get event
*EventApi* | [**eventsGet**](docs/Api/EventApi.md#eventsget) | **GET** /events | List events
*InstallmentPaymentApi* | [**installmentPaymentsGet**](docs/Api/InstallmentPaymentApi.md#installmentpaymentsget) | **GET** /installment_payments | List installment_payments
*InstallmentPaymentApi* | [**installmentPaymentsPaymentIdGet**](docs/Api/InstallmentPaymentApi.md#installmentpaymentspaymentidget) | **GET** /installment_payments/{payment_id} | Get installment_payment
*MeterApi* | [**metersGet**](docs/Api/MeterApi.md#metersget) | **GET** /meters | List meters
*MeterApi* | [**metersMeterIdDelete**](docs/Api/MeterApi.md#metersmeteriddelete) | **DELETE** /meters/{meter_id} | Delete meter
*MeterApi* | [**metersMeterIdGet**](docs/Api/MeterApi.md#metersmeteridget) | **GET** /meters/{meter_id} | Get meter
*MeterApi* | [**metersMeterIdPatch**](docs/Api/MeterApi.md#metersmeteridpatch) | **PATCH** /meters/{meter_id} | Update meter
*MeterApi* | [**metersPost**](docs/Api/MeterApi.md#meterspost) | **POST** /meters | Create meter
*MeterBalanceApi* | [**meterBalancesBalanceIdGet**](docs/Api/MeterBalanceApi.md#meterbalancesbalanceidget) | **GET** /meter_balances/{balance_id} | Get meter_balance
*MeterBalanceApi* | [**meterBalancesGet**](docs/Api/MeterBalanceApi.md#meterbalancesget) | **GET** /meter_balances | List meter_balances
*PaymentLinkApi* | [**paymentLinksGet**](docs/Api/PaymentLinkApi.md#paymentlinksget) | **GET** /payment_links | List payment_links
*PaymentLinkApi* | [**paymentLinksLinkIdDelete**](docs/Api/PaymentLinkApi.md#paymentlinkslinkiddelete) | **DELETE** /payment_links/{link_id} | Delete payment_link
*PaymentLinkApi* | [**paymentLinksLinkIdGet**](docs/Api/PaymentLinkApi.md#paymentlinkslinkidget) | **GET** /payment_links/{link_id} | Get payment_link
*PaymentLinkApi* | [**paymentLinksLinkIdPatch**](docs/Api/PaymentLinkApi.md#paymentlinkslinkidpatch) | **PATCH** /payment_links/{link_id} | Update payment_link
*PaymentLinkApi* | [**paymentLinksPost**](docs/Api/PaymentLinkApi.md#paymentlinkspost) | **POST** /payment_links | Create payment_link
*PaymentRequestApi* | [**paymentRequestsGet**](docs/Api/PaymentRequestApi.md#paymentrequestsget) | **GET** /payment_requests | List payment_requests
*PaymentRequestApi* | [**paymentRequestsPost**](docs/Api/PaymentRequestApi.md#paymentrequestspost) | **POST** /payment_requests | Create payment_request
*PaymentRequestApi* | [**paymentRequestsRequestIdDelete**](docs/Api/PaymentRequestApi.md#paymentrequestsrequestiddelete) | **DELETE** /payment_requests/{request_id} | Delete payment_request
*PaymentRequestApi* | [**paymentRequestsRequestIdGet**](docs/Api/PaymentRequestApi.md#paymentrequestsrequestidget) | **GET** /payment_requests/{request_id} | Get payment_request
*PaymentRequestApi* | [**paymentRequestsRequestIdPatch**](docs/Api/PaymentRequestApi.md#paymentrequestsrequestidpatch) | **PATCH** /payment_requests/{request_id} | Update payment_request
*PayoutApi* | [**payoutsGet**](docs/Api/PayoutApi.md#payoutsget) | **GET** /payouts | List payouts
*PayoutApi* | [**payoutsPayoutIdDelete**](docs/Api/PayoutApi.md#payoutspayoutiddelete) | **DELETE** /payouts/{payout_id} | Delete payout
*PayoutApi* | [**payoutsPayoutIdGet**](docs/Api/PayoutApi.md#payoutspayoutidget) | **GET** /payouts/{payout_id} | Get payout
*PayoutApi* | [**payoutsPayoutIdPatch**](docs/Api/PayoutApi.md#payoutspayoutidpatch) | **PATCH** /payouts/{payout_id} | Update payout
*PayoutApi* | [**payoutsPost**](docs/Api/PayoutApi.md#payoutspost) | **POST** /payouts | Create payout
*PayoutMethodApi* | [**payoutMethodsGet**](docs/Api/PayoutMethodApi.md#payoutmethodsget) | **GET** /payout_methods | List payout_methods
*PayoutMethodApi* | [**payoutMethodsPayoutMethodIdGet**](docs/Api/PayoutMethodApi.md#payoutmethodspayoutmethodidget) | **GET** /payout_methods/{payout_method_id} | Get payout_method
*PriceApi* | [**pricesGet**](docs/Api/PriceApi.md#pricesget) | **GET** /prices | List prices
*PriceApi* | [**pricesPost**](docs/Api/PriceApi.md#pricespost) | **POST** /prices | Create price
*PriceApi* | [**pricesPriceIdDelete**](docs/Api/PriceApi.md#pricespriceiddelete) | **DELETE** /prices/{price_id} | Delete price
*PriceApi* | [**pricesPriceIdGet**](docs/Api/PriceApi.md#pricespriceidget) | **GET** /prices/{price_id} | Get price
*PriceApi* | [**pricesPriceIdPatch**](docs/Api/PriceApi.md#pricespriceidpatch) | **PATCH** /prices/{price_id} | Update price
*ProductApi* | [**productsGet**](docs/Api/ProductApi.md#productsget) | **GET** /products | List products
*ProductApi* | [**productsPost**](docs/Api/ProductApi.md#productspost) | **POST** /products | Create product
*ProductApi* | [**productsProductIdDelete**](docs/Api/ProductApi.md#productsproductiddelete) | **DELETE** /products/{product_id} | Delete product
*ProductApi* | [**productsProductIdGet**](docs/Api/ProductApi.md#productsproductidget) | **GET** /products/{product_id} | Get product
*ProductApi* | [**productsProductIdPatch**](docs/Api/ProductApi.md#productsproductidpatch) | **PATCH** /products/{product_id} | Update product
*RefundApi* | [**refundsGet**](docs/Api/RefundApi.md#refundsget) | **GET** /refunds | List refunds
*RefundApi* | [**refundsPost**](docs/Api/RefundApi.md#refundspost) | **POST** /refunds | Create refund
*RefundApi* | [**refundsRefundIdDelete**](docs/Api/RefundApi.md#refundsrefundiddelete) | **DELETE** /refunds/{refund_id} | Delete refund
*RefundApi* | [**refundsRefundIdGet**](docs/Api/RefundApi.md#refundsrefundidget) | **GET** /refunds/{refund_id} | Get refund
*RefundApi* | [**refundsRefundIdPatch**](docs/Api/RefundApi.md#refundsrefundidpatch) | **PATCH** /refunds/{refund_id} | Update refund
*SpiAccountAliaseApi* | [**spiAccountAliasesAliasIdGet**](docs/Api/SpiAccountAliaseApi.md#spiaccountaliasesaliasidget) | **GET** /spi_account_aliases/{alias_id} | Get spi_account_aliase
*SpiAccountAliaseApi* | [**spiAccountAliasesGet**](docs/Api/SpiAccountAliaseApi.md#spiaccountaliasesget) | **GET** /spi_account_aliases | List spi_account_aliases
*SpiQrCodeApi* | [**spiQrCodesGet**](docs/Api/SpiQrCodeApi.md#spiqrcodesget) | **GET** /spi_qr_codes | List spi_qr_codes
*SpiQrCodeApi* | [**spiQrCodesPost**](docs/Api/SpiQrCodeApi.md#spiqrcodespost) | **POST** /spi_qr_codes | Create spi_qr_code
*SpiQrCodeApi* | [**spiQrCodesQrCodeIdDelete**](docs/Api/SpiQrCodeApi.md#spiqrcodesqrcodeiddelete) | **DELETE** /spi_qr_codes/{qr_code_id} | Delete spi_qr_code
*SpiQrCodeApi* | [**spiQrCodesQrCodeIdGet**](docs/Api/SpiQrCodeApi.md#spiqrcodesqrcodeidget) | **GET** /spi_qr_codes/{qr_code_id} | Get spi_qr_code
*SpiQrCodeApi* | [**spiQrCodesQrCodeIdPatch**](docs/Api/SpiQrCodeApi.md#spiqrcodesqrcodeidpatch) | **PATCH** /spi_qr_codes/{qr_code_id} | Update spi_qr_code
*SubscriptionApi* | [**subscriptionsGet**](docs/Api/SubscriptionApi.md#subscriptionsget) | **GET** /subscriptions | List subscriptions
*SubscriptionApi* | [**subscriptionsPost**](docs/Api/SubscriptionApi.md#subscriptionspost) | **POST** /subscriptions | Create subscription
*SubscriptionApi* | [**subscriptionsSubscriptionIdDelete**](docs/Api/SubscriptionApi.md#subscriptionssubscriptioniddelete) | **DELETE** /subscriptions/{subscription_id} | Delete subscription
*SubscriptionApi* | [**subscriptionsSubscriptionIdGet**](docs/Api/SubscriptionApi.md#subscriptionssubscriptionidget) | **GET** /subscriptions/{subscription_id} | Get subscription
*SubscriptionApi* | [**subscriptionsSubscriptionIdPatch**](docs/Api/SubscriptionApi.md#subscriptionssubscriptionidpatch) | **PATCH** /subscriptions/{subscription_id} | Update subscription
*TransactionApi* | [**transactionsGet**](docs/Api/TransactionApi.md#transactionsget) | **GET** /transactions | List transactions
*TransactionApi* | [**transactionsTransactionIdGet**](docs/Api/TransactionApi.md#transactionstransactionidget) | **GET** /transactions/{transaction_id} | Get transaction
*WebhookApi* | [**webhooksGet**](docs/Api/WebhookApi.md#webhooksget) | **GET** /webhooks | List webhooks
*WebhookApi* | [**webhooksPost**](docs/Api/WebhookApi.md#webhookspost) | **POST** /webhooks | Create webhook
*WebhookApi* | [**webhooksWebhookIdDelete**](docs/Api/WebhookApi.md#webhookswebhookiddelete) | **DELETE** /webhooks/{webhook_id} | Delete webhook
*WebhookApi* | [**webhooksWebhookIdGet**](docs/Api/WebhookApi.md#webhookswebhookidget) | **GET** /webhooks/{webhook_id} | Get webhook
*WebhookApi* | [**webhooksWebhookIdPatch**](docs/Api/WebhookApi.md#webhookswebhookidpatch) | **PATCH** /webhooks/{webhook_id} | Update webhook
*WebhookDeliveryLogApi* | [**webhookDeliveryLogsGet**](docs/Api/WebhookDeliveryLogApi.md#webhookdeliverylogsget) | **GET** /webhook_delivery_logs | List webhook_delivery_logs
*WebhookDeliveryLogApi* | [**webhookDeliveryLogsLogIdGet**](docs/Api/WebhookDeliveryLogApi.md#webhookdeliverylogslogidget) | **GET** /webhook_delivery_logs/{log_id} | Get webhook_delivery_log

## Models

- [BeneficiaryPayouts](docs/Model/BeneficiaryPayouts.md)
- [BeneficiaryPayoutsCreate](docs/Model/BeneficiaryPayoutsCreate.md)
- [BeneficiaryPayoutsGet200Response](docs/Model/BeneficiaryPayoutsGet200Response.md)
- [BeneficiaryPayoutsUpdate](docs/Model/BeneficiaryPayoutsUpdate.md)
- [BnplStatus](docs/Model/BnplStatus.md)
- [CheckoutSessionStatus](docs/Model/CheckoutSessionStatus.md)
- [CheckoutSessions](docs/Model/CheckoutSessions.md)
- [CheckoutSessionsCreate](docs/Model/CheckoutSessionsCreate.md)
- [CheckoutSessionsGet200Response](docs/Model/CheckoutSessionsGet200Response.md)
- [CheckoutSessionsUpdate](docs/Model/CheckoutSessionsUpdate.md)
- [CurrencyCode](docs/Model/CurrencyCode.md)
- [CustomerInvoices](docs/Model/CustomerInvoices.md)
- [CustomerInvoicesCreate](docs/Model/CustomerInvoicesCreate.md)
- [CustomerInvoicesGet200Response](docs/Model/CustomerInvoicesGet200Response.md)
- [CustomerInvoicesUpdate](docs/Model/CustomerInvoicesUpdate.md)
- [Customers](docs/Model/Customers.md)
- [CustomersCreate](docs/Model/CustomersCreate.md)
- [CustomersGet200Response](docs/Model/CustomersGet200Response.md)
- [CustomersGet200ResponsePagination](docs/Model/CustomersGet200ResponsePagination.md)
- [CustomersUpdate](docs/Model/CustomersUpdate.md)
- [DiscountCoupons](docs/Model/DiscountCoupons.md)
- [DiscountCouponsCreate](docs/Model/DiscountCouponsCreate.md)
- [DiscountCouponsGet200Response](docs/Model/DiscountCouponsGet200Response.md)
- [DiscountCouponsUpdate](docs/Model/DiscountCouponsUpdate.md)
- [Error](docs/Model/Error.md)
- [ErrorError](docs/Model/ErrorError.md)
- [Events](docs/Model/Events.md)
- [EventsCreate](docs/Model/EventsCreate.md)
- [EventsGet200Response](docs/Model/EventsGet200Response.md)
- [EventsUpdate](docs/Model/EventsUpdate.md)
- [Frequency](docs/Model/Frequency.md)
- [InstallmentPayments](docs/Model/InstallmentPayments.md)
- [InstallmentPaymentsCreate](docs/Model/InstallmentPaymentsCreate.md)
- [InstallmentPaymentsGet200Response](docs/Model/InstallmentPaymentsGet200Response.md)
- [InstallmentPaymentsUpdate](docs/Model/InstallmentPaymentsUpdate.md)
- [InvoiceStatus](docs/Model/InvoiceStatus.md)
- [MeterBalances](docs/Model/MeterBalances.md)
- [MeterBalancesCreate](docs/Model/MeterBalancesCreate.md)
- [MeterBalancesGet200Response](docs/Model/MeterBalancesGet200Response.md)
- [MeterBalancesUpdate](docs/Model/MeterBalancesUpdate.md)
- [Meters](docs/Model/Meters.md)
- [MetersCreate](docs/Model/MetersCreate.md)
- [MetersGet200Response](docs/Model/MetersGet200Response.md)
- [MetersUpdate](docs/Model/MetersUpdate.md)
- [PaymentLinks](docs/Model/PaymentLinks.md)
- [PaymentLinksCreate](docs/Model/PaymentLinksCreate.md)
- [PaymentLinksGet200Response](docs/Model/PaymentLinksGet200Response.md)
- [PaymentLinksUpdate](docs/Model/PaymentLinksUpdate.md)
- [PaymentMethodCode](docs/Model/PaymentMethodCode.md)
- [PaymentRequests](docs/Model/PaymentRequests.md)
- [PaymentRequestsCreate](docs/Model/PaymentRequestsCreate.md)
- [PaymentRequestsGet200Response](docs/Model/PaymentRequestsGet200Response.md)
- [PaymentRequestsUpdate](docs/Model/PaymentRequestsUpdate.md)
- [PayoutMethods](docs/Model/PayoutMethods.md)
- [PayoutMethodsCreate](docs/Model/PayoutMethodsCreate.md)
- [PayoutMethodsGet200Response](docs/Model/PayoutMethodsGet200Response.md)
- [PayoutMethodsUpdate](docs/Model/PayoutMethodsUpdate.md)
- [PayoutStatus](docs/Model/PayoutStatus.md)
- [Payouts](docs/Model/Payouts.md)
- [PayoutsCreate](docs/Model/PayoutsCreate.md)
- [PayoutsGet200Response](docs/Model/PayoutsGet200Response.md)
- [PayoutsUpdate](docs/Model/PayoutsUpdate.md)
- [Prices](docs/Model/Prices.md)
- [PricesCreate](docs/Model/PricesCreate.md)
- [PricesGet200Response](docs/Model/PricesGet200Response.md)
- [PricesUpdate](docs/Model/PricesUpdate.md)
- [PricingModelEnum](docs/Model/PricingModelEnum.md)
- [ProductTypeEnum](docs/Model/ProductTypeEnum.md)
- [Products](docs/Model/Products.md)
- [ProductsCreate](docs/Model/ProductsCreate.md)
- [ProductsGet200Response](docs/Model/ProductsGet200Response.md)
- [ProductsUpdate](docs/Model/ProductsUpdate.md)
- [ProviderCode](docs/Model/ProviderCode.md)
- [RefundStatus](docs/Model/RefundStatus.md)
- [Refunds](docs/Model/Refunds.md)
- [RefundsCreate](docs/Model/RefundsCreate.md)
- [RefundsGet200Response](docs/Model/RefundsGet200Response.md)
- [RefundsUpdate](docs/Model/RefundsUpdate.md)
- [SpiAccountAliases](docs/Model/SpiAccountAliases.md)
- [SpiAccountAliasesCreate](docs/Model/SpiAccountAliasesCreate.md)
- [SpiAccountAliasesGet200Response](docs/Model/SpiAccountAliasesGet200Response.md)
- [SpiAccountAliasesUpdate](docs/Model/SpiAccountAliasesUpdate.md)
- [SpiAccountStatus](docs/Model/SpiAccountStatus.md)
- [SpiAccountType](docs/Model/SpiAccountType.md)
- [SpiPaymentStatus](docs/Model/SpiPaymentStatus.md)
- [SpiQrCodes](docs/Model/SpiQrCodes.md)
- [SpiQrCodesCreate](docs/Model/SpiQrCodesCreate.md)
- [SpiQrCodesGet200Response](docs/Model/SpiQrCodesGet200Response.md)
- [SpiQrCodesUpdate](docs/Model/SpiQrCodesUpdate.md)
- [SubscriptionStatus](docs/Model/SubscriptionStatus.md)
- [Subscriptions](docs/Model/Subscriptions.md)
- [SubscriptionsCreate](docs/Model/SubscriptionsCreate.md)
- [SubscriptionsGet200Response](docs/Model/SubscriptionsGet200Response.md)
- [SubscriptionsUpdate](docs/Model/SubscriptionsUpdate.md)
- [TransactionStatus](docs/Model/TransactionStatus.md)
- [Transactions](docs/Model/Transactions.md)
- [TransactionsCreate](docs/Model/TransactionsCreate.md)
- [TransactionsGet200Response](docs/Model/TransactionsGet200Response.md)
- [TransactionsUpdate](docs/Model/TransactionsUpdate.md)
- [WebhookDeliveryLogs](docs/Model/WebhookDeliveryLogs.md)
- [WebhookDeliveryLogsCreate](docs/Model/WebhookDeliveryLogsCreate.md)
- [WebhookDeliveryLogsGet200Response](docs/Model/WebhookDeliveryLogsGet200Response.md)
- [WebhookDeliveryLogsUpdate](docs/Model/WebhookDeliveryLogsUpdate.md)
- [WebhookEvent](docs/Model/WebhookEvent.md)
- [Webhooks](docs/Model/Webhooks.md)
- [WebhooksCreate](docs/Model/WebhooksCreate.md)
- [WebhooksGet200Response](docs/Model/WebhooksGet200Response.md)
- [WebhooksUpdate](docs/Model/WebhooksUpdate.md)

## Authorization

Authentication schemes defined for the API:
### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header


## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author

hello@lomi.africa

## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.1.0`
    - Generator version: `7.17.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
