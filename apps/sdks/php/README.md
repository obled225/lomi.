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


$apiInstance = new LomiSDK\Api\BNPLApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 20; // int | Maximum number of items to return (1-100)
$offset = 0; // int | Number of items to skip for pagination
$sort = created_at:desc; // string | Sort order. Format: `field:direction` (e.g., `created_at:desc`)

try {
    $result = $apiInstance->listInstallmentPayments($limit, $offset, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BNPLApi->listInstallmentPayments: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://api.lomi.africa/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BNPLApi* | [**listInstallmentPayments**](docs/Api/BNPLApi.md#listinstallmentpayments) | **GET** /installment_payments | List installment payments
*BNPLApi* | [**retrieveInstallmentPayment**](docs/Api/BNPLApi.md#retrieveinstallmentpayment) | **GET** /installment_payments/{payment_id} | Retrieve installment payment
*CheckoutApi* | [**createCheckoutSession**](docs/Api/CheckoutApi.md#createcheckoutsession) | **POST** /checkout_sessions | Create checkout session
*CheckoutApi* | [**createPaymentLink**](docs/Api/CheckoutApi.md#createpaymentlink) | **POST** /payment_links | Create payment link
*CheckoutApi* | [**deleteCheckoutSession**](docs/Api/CheckoutApi.md#deletecheckoutsession) | **DELETE** /checkout_sessions/{session_id} | Delete checkout session
*CheckoutApi* | [**deletePaymentLink**](docs/Api/CheckoutApi.md#deletepaymentlink) | **DELETE** /payment_links/{link_id} | Delete payment link
*CheckoutApi* | [**listCheckoutSessions**](docs/Api/CheckoutApi.md#listcheckoutsessions) | **GET** /checkout_sessions | List checkout sessions
*CheckoutApi* | [**listPaymentLinks**](docs/Api/CheckoutApi.md#listpaymentlinks) | **GET** /payment_links | List payment links
*CheckoutApi* | [**retrieveCheckoutSession**](docs/Api/CheckoutApi.md#retrievecheckoutsession) | **GET** /checkout_sessions/{session_id} | Retrieve checkout session
*CheckoutApi* | [**retrievePaymentLink**](docs/Api/CheckoutApi.md#retrievepaymentlink) | **GET** /payment_links/{link_id} | Retrieve payment link
*CheckoutApi* | [**updateCheckoutSession**](docs/Api/CheckoutApi.md#updatecheckoutsession) | **PATCH** /checkout_sessions/{session_id} | Update checkout session
*CheckoutApi* | [**updatePaymentLink**](docs/Api/CheckoutApi.md#updatepaymentlink) | **PATCH** /payment_links/{link_id} | Update payment link
*CoreApi* | [**createCustomer**](docs/Api/CoreApi.md#createcustomer) | **POST** /customers | Create customer
*CoreApi* | [**createPaymentRequest**](docs/Api/CoreApi.md#createpaymentrequest) | **POST** /payment_requests | Create payment request
*CoreApi* | [**createRefund**](docs/Api/CoreApi.md#createrefund) | **POST** /refunds | Create refund
*CoreApi* | [**deleteCustomer**](docs/Api/CoreApi.md#deletecustomer) | **DELETE** /customers/{customer_id} | Delete customer
*CoreApi* | [**deletePaymentRequest**](docs/Api/CoreApi.md#deletepaymentrequest) | **DELETE** /payment_requests/{request_id} | Delete payment request
*CoreApi* | [**deleteRefund**](docs/Api/CoreApi.md#deleterefund) | **DELETE** /refunds/{refund_id} | Delete refund
*CoreApi* | [**listCustomers**](docs/Api/CoreApi.md#listcustomers) | **GET** /customers | List customers
*CoreApi* | [**listPaymentRequests**](docs/Api/CoreApi.md#listpaymentrequests) | **GET** /payment_requests | List payment requests
*CoreApi* | [**listRefunds**](docs/Api/CoreApi.md#listrefunds) | **GET** /refunds | List refunds
*CoreApi* | [**listTransactions**](docs/Api/CoreApi.md#listtransactions) | **GET** /transactions | List transactions
*CoreApi* | [**retrieveCustomer**](docs/Api/CoreApi.md#retrievecustomer) | **GET** /customers/{customer_id} | Retrieve customer
*CoreApi* | [**retrievePaymentRequest**](docs/Api/CoreApi.md#retrievepaymentrequest) | **GET** /payment_requests/{request_id} | Retrieve payment request
*CoreApi* | [**retrieveRefund**](docs/Api/CoreApi.md#retrieverefund) | **GET** /refunds/{refund_id} | Retrieve refund
*CoreApi* | [**retrieveTransaction**](docs/Api/CoreApi.md#retrievetransaction) | **GET** /transactions/{transaction_id} | Retrieve transaction
*CoreApi* | [**updateCustomer**](docs/Api/CoreApi.md#updatecustomer) | **PATCH** /customers/{customer_id} | Update customer
*CoreApi* | [**updatePaymentRequest**](docs/Api/CoreApi.md#updatepaymentrequest) | **PATCH** /payment_requests/{request_id} | Update payment request
*CoreApi* | [**updateRefund**](docs/Api/CoreApi.md#updaterefund) | **PATCH** /refunds/{refund_id} | Update refund
*EventsApi* | [**listEvents**](docs/Api/EventsApi.md#listevents) | **GET** /events | List events
*EventsApi* | [**retrieveEvent**](docs/Api/EventsApi.md#retrieveevent) | **GET** /events/{event_id} | Retrieve event
*PayoutsApi* | [**createBeneficiaryPayout**](docs/Api/PayoutsApi.md#createbeneficiarypayout) | **POST** /beneficiary_payouts | Create beneficiary payout
*PayoutsApi* | [**createPayout**](docs/Api/PayoutsApi.md#createpayout) | **POST** /payouts | Create payout
*PayoutsApi* | [**deletePayout**](docs/Api/PayoutsApi.md#deletepayout) | **DELETE** /payouts/{payout_id} | Delete payout
*PayoutsApi* | [**listBeneficiaryPayouts**](docs/Api/PayoutsApi.md#listbeneficiarypayouts) | **GET** /beneficiary_payouts | List beneficiary payouts
*PayoutsApi* | [**listPayoutMethods**](docs/Api/PayoutsApi.md#listpayoutmethods) | **GET** /payout_methods | List payout methods
*PayoutsApi* | [**listPayouts**](docs/Api/PayoutsApi.md#listpayouts) | **GET** /payouts | List payouts
*PayoutsApi* | [**retrieveBeneficiaryPayout**](docs/Api/PayoutsApi.md#retrievebeneficiarypayout) | **GET** /beneficiary_payouts/{payout_id} | Retrieve beneficiary payout
*PayoutsApi* | [**retrievePayout**](docs/Api/PayoutsApi.md#retrievepayout) | **GET** /payouts/{payout_id} | Retrieve payout
*PayoutsApi* | [**retrievePayoutMethod**](docs/Api/PayoutsApi.md#retrievepayoutmethod) | **GET** /payout_methods/{payout_method_id} | Retrieve payout method
*PayoutsApi* | [**updatePayout**](docs/Api/PayoutsApi.md#updatepayout) | **PATCH** /payouts/{payout_id} | Update payout
*ProductsApi* | [**createPrice**](docs/Api/ProductsApi.md#createprice) | **POST** /prices | Create price
*ProductsApi* | [**createProduct**](docs/Api/ProductsApi.md#createproduct) | **POST** /products | Create product
*ProductsApi* | [**deletePrice**](docs/Api/ProductsApi.md#deleteprice) | **DELETE** /prices/{price_id} | Delete price
*ProductsApi* | [**deleteProduct**](docs/Api/ProductsApi.md#deleteproduct) | **DELETE** /products/{product_id} | Delete product
*ProductsApi* | [**listPrices**](docs/Api/ProductsApi.md#listprices) | **GET** /prices | List prices
*ProductsApi* | [**listProducts**](docs/Api/ProductsApi.md#listproducts) | **GET** /products | List products
*ProductsApi* | [**retrievePrice**](docs/Api/ProductsApi.md#retrieveprice) | **GET** /prices/{price_id} | Retrieve price
*ProductsApi* | [**retrieveProduct**](docs/Api/ProductsApi.md#retrieveproduct) | **GET** /products/{product_id} | Retrieve product
*ProductsApi* | [**updatePrice**](docs/Api/ProductsApi.md#updateprice) | **PATCH** /prices/{price_id} | Update price
*ProductsApi* | [**updateProduct**](docs/Api/ProductsApi.md#updateproduct) | **PATCH** /products/{product_id} | Update product
*SPIApi* | [**createSpiQrCode**](docs/Api/SPIApi.md#createspiqrcode) | **POST** /spi_qr_codes | Create spi qr code
*SPIApi* | [**deleteSpiQrCode**](docs/Api/SPIApi.md#deletespiqrcode) | **DELETE** /spi_qr_codes/{qr_code_id} | Delete spi qr code
*SPIApi* | [**listSpiAccountAliases**](docs/Api/SPIApi.md#listspiaccountaliases) | **GET** /spi_account_aliases | List spi account aliases
*SPIApi* | [**listSpiQrCodes**](docs/Api/SPIApi.md#listspiqrcodes) | **GET** /spi_qr_codes | List spi qr codes
*SPIApi* | [**retrieveSpiAccountAliase**](docs/Api/SPIApi.md#retrievespiaccountaliase) | **GET** /spi_account_aliases/{alias_id} | Retrieve spi account aliase
*SPIApi* | [**retrieveSpiQrCode**](docs/Api/SPIApi.md#retrievespiqrcode) | **GET** /spi_qr_codes/{qr_code_id} | Retrieve spi qr code
*SPIApi* | [**updateSpiQrCode**](docs/Api/SPIApi.md#updatespiqrcode) | **PATCH** /spi_qr_codes/{qr_code_id} | Update spi qr code
*SubscriptionsApi* | [**createDiscountCoupon**](docs/Api/SubscriptionsApi.md#creatediscountcoupon) | **POST** /discount_coupons | Create discount coupon
*SubscriptionsApi* | [**createSubscription**](docs/Api/SubscriptionsApi.md#createsubscription) | **POST** /subscriptions | Create subscription
*SubscriptionsApi* | [**deleteDiscountCoupon**](docs/Api/SubscriptionsApi.md#deletediscountcoupon) | **DELETE** /discount_coupons/{coupon_id} | Delete discount coupon
*SubscriptionsApi* | [**deleteSubscription**](docs/Api/SubscriptionsApi.md#deletesubscription) | **DELETE** /subscriptions/{subscription_id} | Delete subscription
*SubscriptionsApi* | [**listCustomerInvoices**](docs/Api/SubscriptionsApi.md#listcustomerinvoices) | **GET** /customer_invoices | List customer invoices
*SubscriptionsApi* | [**listDiscountCoupons**](docs/Api/SubscriptionsApi.md#listdiscountcoupons) | **GET** /discount_coupons | List discount coupons
*SubscriptionsApi* | [**listSubscriptions**](docs/Api/SubscriptionsApi.md#listsubscriptions) | **GET** /subscriptions | List subscriptions
*SubscriptionsApi* | [**retrieveCustomerInvoice**](docs/Api/SubscriptionsApi.md#retrievecustomerinvoice) | **GET** /customer_invoices/{invoice_id} | Retrieve customer invoice
*SubscriptionsApi* | [**retrieveDiscountCoupon**](docs/Api/SubscriptionsApi.md#retrievediscountcoupon) | **GET** /discount_coupons/{coupon_id} | Retrieve discount coupon
*SubscriptionsApi* | [**retrieveSubscription**](docs/Api/SubscriptionsApi.md#retrievesubscription) | **GET** /subscriptions/{subscription_id} | Retrieve subscription
*SubscriptionsApi* | [**updateDiscountCoupon**](docs/Api/SubscriptionsApi.md#updatediscountcoupon) | **PATCH** /discount_coupons/{coupon_id} | Update discount coupon
*SubscriptionsApi* | [**updateSubscription**](docs/Api/SubscriptionsApi.md#updatesubscription) | **PATCH** /subscriptions/{subscription_id} | Update subscription
*UsageBillingApi* | [**createMeter**](docs/Api/UsageBillingApi.md#createmeter) | **POST** /meters | Create meter
*UsageBillingApi* | [**deleteMeter**](docs/Api/UsageBillingApi.md#deletemeter) | **DELETE** /meters/{meter_id} | Delete meter
*UsageBillingApi* | [**listMeterBalances**](docs/Api/UsageBillingApi.md#listmeterbalances) | **GET** /meter_balances | List meter balances
*UsageBillingApi* | [**listMeters**](docs/Api/UsageBillingApi.md#listmeters) | **GET** /meters | List meters
*UsageBillingApi* | [**retrieveMeter**](docs/Api/UsageBillingApi.md#retrievemeter) | **GET** /meters/{meter_id} | Retrieve meter
*UsageBillingApi* | [**retrieveMeterBalance**](docs/Api/UsageBillingApi.md#retrievemeterbalance) | **GET** /meter_balances/{balance_id} | Retrieve meter balance
*UsageBillingApi* | [**updateMeter**](docs/Api/UsageBillingApi.md#updatemeter) | **PATCH** /meters/{meter_id} | Update meter
*WebhooksApi* | [**createWebhook**](docs/Api/WebhooksApi.md#createwebhook) | **POST** /webhooks | Create webhook
*WebhooksApi* | [**deleteWebhook**](docs/Api/WebhooksApi.md#deletewebhook) | **DELETE** /webhooks/{webhook_id} | Delete webhook
*WebhooksApi* | [**listWebhookDeliveryLogs**](docs/Api/WebhooksApi.md#listwebhookdeliverylogs) | **GET** /webhook_delivery_logs | List webhook delivery logs
*WebhooksApi* | [**listWebhooks**](docs/Api/WebhooksApi.md#listwebhooks) | **GET** /webhooks | List webhooks
*WebhooksApi* | [**retrieveWebhook**](docs/Api/WebhooksApi.md#retrievewebhook) | **GET** /webhooks/{webhook_id} | Retrieve webhook
*WebhooksApi* | [**retrieveWebhookDeliveryLog**](docs/Api/WebhooksApi.md#retrievewebhookdeliverylog) | **GET** /webhook_delivery_logs/{log_id} | Retrieve webhook delivery log
*WebhooksApi* | [**updateWebhook**](docs/Api/WebhooksApi.md#updatewebhook) | **PATCH** /webhooks/{webhook_id} | Update webhook

## Models

- [BeneficiaryPayouts](docs/Model/BeneficiaryPayouts.md)
- [BeneficiaryPayoutsCreate](docs/Model/BeneficiaryPayoutsCreate.md)
- [BeneficiaryPayoutsUpdate](docs/Model/BeneficiaryPayoutsUpdate.md)
- [BnplStatus](docs/Model/BnplStatus.md)
- [CheckoutSessionStatus](docs/Model/CheckoutSessionStatus.md)
- [CheckoutSessions](docs/Model/CheckoutSessions.md)
- [CheckoutSessionsCreate](docs/Model/CheckoutSessionsCreate.md)
- [CheckoutSessionsUpdate](docs/Model/CheckoutSessionsUpdate.md)
- [CurrencyCode](docs/Model/CurrencyCode.md)
- [CustomerInvoices](docs/Model/CustomerInvoices.md)
- [CustomerInvoicesCreate](docs/Model/CustomerInvoicesCreate.md)
- [CustomerInvoicesUpdate](docs/Model/CustomerInvoicesUpdate.md)
- [Customers](docs/Model/Customers.md)
- [CustomersCreate](docs/Model/CustomersCreate.md)
- [CustomersUpdate](docs/Model/CustomersUpdate.md)
- [DiscountCoupons](docs/Model/DiscountCoupons.md)
- [DiscountCouponsCreate](docs/Model/DiscountCouponsCreate.md)
- [DiscountCouponsUpdate](docs/Model/DiscountCouponsUpdate.md)
- [Error](docs/Model/Error.md)
- [ErrorError](docs/Model/ErrorError.md)
- [Events](docs/Model/Events.md)
- [EventsCreate](docs/Model/EventsCreate.md)
- [EventsUpdate](docs/Model/EventsUpdate.md)
- [Frequency](docs/Model/Frequency.md)
- [InstallmentPayments](docs/Model/InstallmentPayments.md)
- [InstallmentPaymentsCreate](docs/Model/InstallmentPaymentsCreate.md)
- [InstallmentPaymentsUpdate](docs/Model/InstallmentPaymentsUpdate.md)
- [InvoiceStatus](docs/Model/InvoiceStatus.md)
- [ListBeneficiaryPayouts200Response](docs/Model/ListBeneficiaryPayouts200Response.md)
- [ListCheckoutSessions200Response](docs/Model/ListCheckoutSessions200Response.md)
- [ListCustomerInvoices200Response](docs/Model/ListCustomerInvoices200Response.md)
- [ListCustomers200Response](docs/Model/ListCustomers200Response.md)
- [ListCustomers200ResponsePagination](docs/Model/ListCustomers200ResponsePagination.md)
- [ListDiscountCoupons200Response](docs/Model/ListDiscountCoupons200Response.md)
- [ListEvents200Response](docs/Model/ListEvents200Response.md)
- [ListInstallmentPayments200Response](docs/Model/ListInstallmentPayments200Response.md)
- [ListMeterBalances200Response](docs/Model/ListMeterBalances200Response.md)
- [ListMeters200Response](docs/Model/ListMeters200Response.md)
- [ListPaymentLinks200Response](docs/Model/ListPaymentLinks200Response.md)
- [ListPaymentRequests200Response](docs/Model/ListPaymentRequests200Response.md)
- [ListPayoutMethods200Response](docs/Model/ListPayoutMethods200Response.md)
- [ListPayouts200Response](docs/Model/ListPayouts200Response.md)
- [ListPrices200Response](docs/Model/ListPrices200Response.md)
- [ListProducts200Response](docs/Model/ListProducts200Response.md)
- [ListRefunds200Response](docs/Model/ListRefunds200Response.md)
- [ListSpiAccountAliases200Response](docs/Model/ListSpiAccountAliases200Response.md)
- [ListSpiQrCodes200Response](docs/Model/ListSpiQrCodes200Response.md)
- [ListSubscriptions200Response](docs/Model/ListSubscriptions200Response.md)
- [ListTransactions200Response](docs/Model/ListTransactions200Response.md)
- [ListWebhookDeliveryLogs200Response](docs/Model/ListWebhookDeliveryLogs200Response.md)
- [ListWebhooks200Response](docs/Model/ListWebhooks200Response.md)
- [MeterBalances](docs/Model/MeterBalances.md)
- [MeterBalancesCreate](docs/Model/MeterBalancesCreate.md)
- [MeterBalancesUpdate](docs/Model/MeterBalancesUpdate.md)
- [Meters](docs/Model/Meters.md)
- [MetersCreate](docs/Model/MetersCreate.md)
- [MetersUpdate](docs/Model/MetersUpdate.md)
- [PaymentLinks](docs/Model/PaymentLinks.md)
- [PaymentLinksCreate](docs/Model/PaymentLinksCreate.md)
- [PaymentLinksUpdate](docs/Model/PaymentLinksUpdate.md)
- [PaymentMethodCode](docs/Model/PaymentMethodCode.md)
- [PaymentRequests](docs/Model/PaymentRequests.md)
- [PaymentRequestsCreate](docs/Model/PaymentRequestsCreate.md)
- [PaymentRequestsUpdate](docs/Model/PaymentRequestsUpdate.md)
- [PayoutMethods](docs/Model/PayoutMethods.md)
- [PayoutMethodsCreate](docs/Model/PayoutMethodsCreate.md)
- [PayoutMethodsUpdate](docs/Model/PayoutMethodsUpdate.md)
- [PayoutStatus](docs/Model/PayoutStatus.md)
- [Payouts](docs/Model/Payouts.md)
- [PayoutsCreate](docs/Model/PayoutsCreate.md)
- [PayoutsUpdate](docs/Model/PayoutsUpdate.md)
- [Prices](docs/Model/Prices.md)
- [PricesCreate](docs/Model/PricesCreate.md)
- [PricesUpdate](docs/Model/PricesUpdate.md)
- [PricingModelEnum](docs/Model/PricingModelEnum.md)
- [ProductTypeEnum](docs/Model/ProductTypeEnum.md)
- [Products](docs/Model/Products.md)
- [ProductsCreate](docs/Model/ProductsCreate.md)
- [ProductsUpdate](docs/Model/ProductsUpdate.md)
- [ProviderCode](docs/Model/ProviderCode.md)
- [RefundStatus](docs/Model/RefundStatus.md)
- [Refunds](docs/Model/Refunds.md)
- [RefundsCreate](docs/Model/RefundsCreate.md)
- [RefundsUpdate](docs/Model/RefundsUpdate.md)
- [SpiAccountAliases](docs/Model/SpiAccountAliases.md)
- [SpiAccountAliasesCreate](docs/Model/SpiAccountAliasesCreate.md)
- [SpiAccountAliasesUpdate](docs/Model/SpiAccountAliasesUpdate.md)
- [SpiAccountStatus](docs/Model/SpiAccountStatus.md)
- [SpiAccountType](docs/Model/SpiAccountType.md)
- [SpiPaymentStatus](docs/Model/SpiPaymentStatus.md)
- [SpiQrCodes](docs/Model/SpiQrCodes.md)
- [SpiQrCodesCreate](docs/Model/SpiQrCodesCreate.md)
- [SpiQrCodesUpdate](docs/Model/SpiQrCodesUpdate.md)
- [SubscriptionStatus](docs/Model/SubscriptionStatus.md)
- [Subscriptions](docs/Model/Subscriptions.md)
- [SubscriptionsCreate](docs/Model/SubscriptionsCreate.md)
- [SubscriptionsUpdate](docs/Model/SubscriptionsUpdate.md)
- [TransactionStatus](docs/Model/TransactionStatus.md)
- [Transactions](docs/Model/Transactions.md)
- [TransactionsCreate](docs/Model/TransactionsCreate.md)
- [TransactionsUpdate](docs/Model/TransactionsUpdate.md)
- [WebhookDeliveryLogs](docs/Model/WebhookDeliveryLogs.md)
- [WebhookDeliveryLogsCreate](docs/Model/WebhookDeliveryLogsCreate.md)
- [WebhookDeliveryLogsUpdate](docs/Model/WebhookDeliveryLogsUpdate.md)
- [WebhookEvent](docs/Model/WebhookEvent.md)
- [Webhooks](docs/Model/Webhooks.md)
- [WebhooksCreate](docs/Model/WebhooksCreate.md)
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
