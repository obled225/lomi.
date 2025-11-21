# lomi/sdk

Payment processing API for francophone West African businesses.

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
      "url": "https://github.com/lomi/lomi-sdk.git"
    }
  ],
  "require": {
    "lomi/lomi-sdk": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/lomi/sdk/vendor/autoload.php');
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


$apiInstance = new LomiSDK\Api\BeneficiaryPayoutsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$beneficiary_payouts_create = {"name":"Sample beneficiary_payout","description":"Example beneficiary_payout object"}; // \LomiSDK\Model\BeneficiaryPayoutsCreate

try {
    $result = $apiInstance->createBeneficiaryPayout($beneficiary_payouts_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BeneficiaryPayoutsApi->createBeneficiaryPayout: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://api.lomi.africa/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BeneficiaryPayoutsApi* | [**createBeneficiaryPayout**](docs/Api/BeneficiaryPayoutsApi.md#createbeneficiarypayout) | **POST** /beneficiary_payouts | Create beneficiary payout
*BeneficiaryPayoutsApi* | [**listBeneficiaryPayouts**](docs/Api/BeneficiaryPayoutsApi.md#listbeneficiarypayouts) | **GET** /beneficiary_payouts | List beneficiary payouts
*BeneficiaryPayoutsApi* | [**retrieveBeneficiaryPayout**](docs/Api/BeneficiaryPayoutsApi.md#retrievebeneficiarypayout) | **GET** /beneficiary_payouts/{payout_id} | Retrieve beneficiary payout
*CheckoutSessionsApi* | [**createCheckoutSession**](docs/Api/CheckoutSessionsApi.md#createcheckoutsession) | **POST** /checkout_sessions | Create checkout session
*CheckoutSessionsApi* | [**deleteCheckoutSession**](docs/Api/CheckoutSessionsApi.md#deletecheckoutsession) | **DELETE** /checkout_sessions/{session_id} | Delete checkout session
*CheckoutSessionsApi* | [**listCheckoutSessions**](docs/Api/CheckoutSessionsApi.md#listcheckoutsessions) | **GET** /checkout_sessions | List checkout sessions
*CheckoutSessionsApi* | [**retrieveCheckoutSession**](docs/Api/CheckoutSessionsApi.md#retrievecheckoutsession) | **GET** /checkout_sessions/{session_id} | Retrieve checkout session
*CheckoutSessionsApi* | [**updateCheckoutSession**](docs/Api/CheckoutSessionsApi.md#updatecheckoutsession) | **PATCH** /checkout_sessions/{session_id} | Update checkout session
*CustomerInvoicesApi* | [**listCustomerInvoices**](docs/Api/CustomerInvoicesApi.md#listcustomerinvoices) | **GET** /customer_invoices | List customer invoices
*CustomerInvoicesApi* | [**retrieveCustomerInvoice**](docs/Api/CustomerInvoicesApi.md#retrievecustomerinvoice) | **GET** /customer_invoices/{invoice_id} | Retrieve customer invoice
*CustomersApi* | [**createCustomer**](docs/Api/CustomersApi.md#createcustomer) | **POST** /customers | Create customer
*CustomersApi* | [**deleteCustomer**](docs/Api/CustomersApi.md#deletecustomer) | **DELETE** /customers/{customer_id} | Delete customer
*CustomersApi* | [**listCustomers**](docs/Api/CustomersApi.md#listcustomers) | **GET** /customers | List customers
*CustomersApi* | [**retrieveCustomer**](docs/Api/CustomersApi.md#retrievecustomer) | **GET** /customers/{customer_id} | Retrieve customer
*CustomersApi* | [**updateCustomer**](docs/Api/CustomersApi.md#updatecustomer) | **PATCH** /customers/{customer_id} | Update customer
*DiscountCouponsApi* | [**createDiscountCoupon**](docs/Api/DiscountCouponsApi.md#creatediscountcoupon) | **POST** /discount_coupons | Create discount coupon
*DiscountCouponsApi* | [**deleteDiscountCoupon**](docs/Api/DiscountCouponsApi.md#deletediscountcoupon) | **DELETE** /discount_coupons/{coupon_id} | Delete discount coupon
*DiscountCouponsApi* | [**listDiscountCoupons**](docs/Api/DiscountCouponsApi.md#listdiscountcoupons) | **GET** /discount_coupons | List discount coupons
*DiscountCouponsApi* | [**retrieveDiscountCoupon**](docs/Api/DiscountCouponsApi.md#retrievediscountcoupon) | **GET** /discount_coupons/{coupon_id} | Retrieve discount coupon
*DiscountCouponsApi* | [**updateDiscountCoupon**](docs/Api/DiscountCouponsApi.md#updatediscountcoupon) | **PATCH** /discount_coupons/{coupon_id} | Update discount coupon
*EventsApi* | [**listEvents**](docs/Api/EventsApi.md#listevents) | **GET** /events | List events
*EventsApi* | [**retrieveEvent**](docs/Api/EventsApi.md#retrieveevent) | **GET** /events/{event_id} | Retrieve event
*InstallmentPaymentsApi* | [**listInstallmentPayments**](docs/Api/InstallmentPaymentsApi.md#listinstallmentpayments) | **GET** /installment_payments | List installment payments
*InstallmentPaymentsApi* | [**retrieveInstallmentPayment**](docs/Api/InstallmentPaymentsApi.md#retrieveinstallmentpayment) | **GET** /installment_payments/{payment_id} | Retrieve installment payment
*MeterBalancesApi* | [**listMeterBalances**](docs/Api/MeterBalancesApi.md#listmeterbalances) | **GET** /meter_balances | List meter balances
*MeterBalancesApi* | [**retrieveMeterBalance**](docs/Api/MeterBalancesApi.md#retrievemeterbalance) | **GET** /meter_balances/{balance_id} | Retrieve meter balance
*MetersApi* | [**createMeter**](docs/Api/MetersApi.md#createmeter) | **POST** /meters | Create meter
*MetersApi* | [**deleteMeter**](docs/Api/MetersApi.md#deletemeter) | **DELETE** /meters/{meter_id} | Delete meter
*MetersApi* | [**listMeters**](docs/Api/MetersApi.md#listmeters) | **GET** /meters | List meters
*MetersApi* | [**retrieveMeter**](docs/Api/MetersApi.md#retrievemeter) | **GET** /meters/{meter_id} | Retrieve meter
*MetersApi* | [**updateMeter**](docs/Api/MetersApi.md#updatemeter) | **PATCH** /meters/{meter_id} | Update meter
*PaymentLinksApi* | [**createPaymentLink**](docs/Api/PaymentLinksApi.md#createpaymentlink) | **POST** /payment_links | Create payment link
*PaymentLinksApi* | [**deletePaymentLink**](docs/Api/PaymentLinksApi.md#deletepaymentlink) | **DELETE** /payment_links/{link_id} | Delete payment link
*PaymentLinksApi* | [**listPaymentLinks**](docs/Api/PaymentLinksApi.md#listpaymentlinks) | **GET** /payment_links | List payment links
*PaymentLinksApi* | [**retrievePaymentLink**](docs/Api/PaymentLinksApi.md#retrievepaymentlink) | **GET** /payment_links/{link_id} | Retrieve payment link
*PaymentLinksApi* | [**updatePaymentLink**](docs/Api/PaymentLinksApi.md#updatepaymentlink) | **PATCH** /payment_links/{link_id} | Update payment link
*PaymentRequestsApi* | [**createPaymentRequest**](docs/Api/PaymentRequestsApi.md#createpaymentrequest) | **POST** /payment_requests | Create payment request
*PaymentRequestsApi* | [**deletePaymentRequest**](docs/Api/PaymentRequestsApi.md#deletepaymentrequest) | **DELETE** /payment_requests/{request_id} | Delete payment request
*PaymentRequestsApi* | [**listPaymentRequests**](docs/Api/PaymentRequestsApi.md#listpaymentrequests) | **GET** /payment_requests | List payment requests
*PaymentRequestsApi* | [**retrievePaymentRequest**](docs/Api/PaymentRequestsApi.md#retrievepaymentrequest) | **GET** /payment_requests/{request_id} | Retrieve payment request
*PaymentRequestsApi* | [**updatePaymentRequest**](docs/Api/PaymentRequestsApi.md#updatepaymentrequest) | **PATCH** /payment_requests/{request_id} | Update payment request
*PayoutMethodsApi* | [**listPayoutMethods**](docs/Api/PayoutMethodsApi.md#listpayoutmethods) | **GET** /payout_methods | List payout methods
*PayoutMethodsApi* | [**retrievePayoutMethod**](docs/Api/PayoutMethodsApi.md#retrievepayoutmethod) | **GET** /payout_methods/{payout_method_id} | Retrieve payout method
*PayoutsApi* | [**createPayout**](docs/Api/PayoutsApi.md#createpayout) | **POST** /payouts | Create payout
*PayoutsApi* | [**deletePayout**](docs/Api/PayoutsApi.md#deletepayout) | **DELETE** /payouts/{payout_id} | Delete payout
*PayoutsApi* | [**listPayouts**](docs/Api/PayoutsApi.md#listpayouts) | **GET** /payouts | List payouts
*PayoutsApi* | [**retrievePayout**](docs/Api/PayoutsApi.md#retrievepayout) | **GET** /payouts/{payout_id} | Retrieve payout
*PayoutsApi* | [**updatePayout**](docs/Api/PayoutsApi.md#updatepayout) | **PATCH** /payouts/{payout_id} | Update payout
*PricesApi* | [**createPrice**](docs/Api/PricesApi.md#createprice) | **POST** /prices | Create price
*PricesApi* | [**deletePrice**](docs/Api/PricesApi.md#deleteprice) | **DELETE** /prices/{price_id} | Delete price
*PricesApi* | [**listPrices**](docs/Api/PricesApi.md#listprices) | **GET** /prices | List prices
*PricesApi* | [**retrievePrice**](docs/Api/PricesApi.md#retrieveprice) | **GET** /prices/{price_id} | Retrieve price
*PricesApi* | [**updatePrice**](docs/Api/PricesApi.md#updateprice) | **PATCH** /prices/{price_id} | Update price
*ProductsApi* | [**createProduct**](docs/Api/ProductsApi.md#createproduct) | **POST** /products | Create product
*ProductsApi* | [**deleteProduct**](docs/Api/ProductsApi.md#deleteproduct) | **DELETE** /products/{product_id} | Delete product
*ProductsApi* | [**listProducts**](docs/Api/ProductsApi.md#listproducts) | **GET** /products | List products
*ProductsApi* | [**retrieveProduct**](docs/Api/ProductsApi.md#retrieveproduct) | **GET** /products/{product_id} | Retrieve product
*ProductsApi* | [**updateProduct**](docs/Api/ProductsApi.md#updateproduct) | **PATCH** /products/{product_id} | Update product
*RefundsApi* | [**createRefund**](docs/Api/RefundsApi.md#createrefund) | **POST** /refunds | Create refund
*RefundsApi* | [**deleteRefund**](docs/Api/RefundsApi.md#deleterefund) | **DELETE** /refunds/{refund_id} | Delete refund
*RefundsApi* | [**listRefunds**](docs/Api/RefundsApi.md#listrefunds) | **GET** /refunds | List refunds
*RefundsApi* | [**retrieveRefund**](docs/Api/RefundsApi.md#retrieverefund) | **GET** /refunds/{refund_id} | Retrieve refund
*RefundsApi* | [**updateRefund**](docs/Api/RefundsApi.md#updaterefund) | **PATCH** /refunds/{refund_id} | Update refund
*SPIAccountAliasesApi* | [**listSpiAccountAliases**](docs/Api/SPIAccountAliasesApi.md#listspiaccountaliases) | **GET** /spi_account_aliases | List spi account aliases
*SPIAccountAliasesApi* | [**retrieveSpiAccountAliase**](docs/Api/SPIAccountAliasesApi.md#retrievespiaccountaliase) | **GET** /spi_account_aliases/{alias_id} | Retrieve spi account aliase
*SPIQRCodesApi* | [**createSpiQrCode**](docs/Api/SPIQRCodesApi.md#createspiqrcode) | **POST** /spi_qr_codes | Create spi qr code
*SPIQRCodesApi* | [**deleteSpiQrCode**](docs/Api/SPIQRCodesApi.md#deletespiqrcode) | **DELETE** /spi_qr_codes/{qr_code_id} | Delete spi qr code
*SPIQRCodesApi* | [**listSpiQrCodes**](docs/Api/SPIQRCodesApi.md#listspiqrcodes) | **GET** /spi_qr_codes | List spi qr codes
*SPIQRCodesApi* | [**retrieveSpiQrCode**](docs/Api/SPIQRCodesApi.md#retrievespiqrcode) | **GET** /spi_qr_codes/{qr_code_id} | Retrieve spi qr code
*SPIQRCodesApi* | [**updateSpiQrCode**](docs/Api/SPIQRCodesApi.md#updatespiqrcode) | **PATCH** /spi_qr_codes/{qr_code_id} | Update spi qr code
*SubscriptionsApi* | [**createSubscription**](docs/Api/SubscriptionsApi.md#createsubscription) | **POST** /subscriptions | Create subscription
*SubscriptionsApi* | [**deleteSubscription**](docs/Api/SubscriptionsApi.md#deletesubscription) | **DELETE** /subscriptions/{subscription_id} | Delete subscription
*SubscriptionsApi* | [**listSubscriptions**](docs/Api/SubscriptionsApi.md#listsubscriptions) | **GET** /subscriptions | List subscriptions
*SubscriptionsApi* | [**retrieveSubscription**](docs/Api/SubscriptionsApi.md#retrievesubscription) | **GET** /subscriptions/{subscription_id} | Retrieve subscription
*SubscriptionsApi* | [**updateSubscription**](docs/Api/SubscriptionsApi.md#updatesubscription) | **PATCH** /subscriptions/{subscription_id} | Update subscription
*TransactionsApi* | [**listTransactions**](docs/Api/TransactionsApi.md#listtransactions) | **GET** /transactions | List transactions
*TransactionsApi* | [**retrieveTransaction**](docs/Api/TransactionsApi.md#retrievetransaction) | **GET** /transactions/{transaction_id} | Retrieve transaction
*WebhookDeliveryLogsApi* | [**listWebhookDeliveryLogs**](docs/Api/WebhookDeliveryLogsApi.md#listwebhookdeliverylogs) | **GET** /webhook_delivery_logs | List webhook delivery logs
*WebhookDeliveryLogsApi* | [**retrieveWebhookDeliveryLog**](docs/Api/WebhookDeliveryLogsApi.md#retrievewebhookdeliverylog) | **GET** /webhook_delivery_logs/{log_id} | Retrieve webhook delivery log
*WebhooksApi* | [**createWebhook**](docs/Api/WebhooksApi.md#createwebhook) | **POST** /webhooks | Create webhook
*WebhooksApi* | [**deleteWebhook**](docs/Api/WebhooksApi.md#deletewebhook) | **DELETE** /webhooks/{webhook_id} | Delete webhook
*WebhooksApi* | [**listWebhooks**](docs/Api/WebhooksApi.md#listwebhooks) | **GET** /webhooks | List webhooks
*WebhooksApi* | [**retrieveWebhook**](docs/Api/WebhooksApi.md#retrievewebhook) | **GET** /webhooks/{webhook_id} | Retrieve webhook
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
