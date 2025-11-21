<?php

namespace Lomi\Laravel;

use Illuminate\Support\Facades\Log;
use OpenAPI\Client\Configuration;
use OpenAPI\Client\Api\CoreApi;
use OpenAPI\Client\Api\ProductsApi;
use OpenAPI\Client\Api\SubscriptionsApi;
use OpenAPI\Client\Api\CheckoutApi;
use OpenAPI\Client\Api\PayoutsApi;
use OpenAPI\Client\Api\WebhooksApi;
use OpenAPI\Client\Api\SpiApi;
use OpenAPI\Client\Api\BnplApi;

/**
 * Laravel Client for lomi. API
 * 
 * This is a thin wrapper around the auto-generated PHP SDK.
 * It automatically stays in sync when you regenerate the SDK from OpenAPI spec.
 */
class LomiClient
{
    protected Configuration $config;
    
    // Auto-generated API instances
    protected ?CoreApi $coreApi = null;
    protected ?ProductsApi $productsApi = null;
    protected ?SubscriptionsApi $subscriptionsApi = null;
    protected ?CheckoutApi $checkoutApi = null;
    protected ?PayoutsApi $payoutsApi = null;
    protected ?WebhooksApi $webhooksApi = null;
    protected ?SpiApi $spiApi = null;
    protected ?BnplApi $bnplApi = null;

    public function __construct()
    {
        $this->config = Configuration::getDefaultConfiguration();
        
        // Set API key from Laravel config
        $apiKey = config('lomi.api_key');
        if (empty($apiKey)) {
            throw new \InvalidArgumentException(
                'lomi. API key is required. Set LOMI_API_KEY in your .env file.'
            );
        }
        $this->config->setApiKey('X-API-KEY', $apiKey);
        
        // Set base URL based on environment
        $environment = config('lomi.environment', 'live');
        $baseUrl = config('lomi.base_url') ?? $this->getDefaultBaseUrl($environment);
        $this->config->setHost($baseUrl);
        
        // Configure timeout
        $this->config->setCurlTimeout(config('lomi.timeout', 30));
        
        // Set user agent
        $this->config->setUserAgent('lomi-laravel-sdk/1.0');
    }

    /**
     * Get default base URL for environment
     */
    protected function getDefaultBaseUrl(string $environment): string
    {
        return match ($environment) {
            'sandbox' => 'https://sandbox.api.lomi.africa/v1',
            'live' => 'https://api.lomi.africa/v1',
            default => throw new \InvalidArgumentException("Invalid environment: {$environment}"),
        };
    }

    /**
     * Get Core API (Customers, Payments, Transactions, Refunds)
     * 
     * Auto-generated methods:
     * - listCustomers, createCustomer, retrieveCustomer, updateCustomer, deleteCustomer
     * - listPaymentRequests, createPaymentRequest, retrievePaymentRequest, updatePaymentRequest, deletePaymentRequest
     * - listTransactions, retrieveTransaction
     * - listRefunds, createRefund, retrieveRefund, updateRefund, deleteRefund
     */
    public function core(): CoreApi
    {
        if ($this->coreApi === null) {
            $this->coreApi = new CoreApi(null, $this->config);
        }
        return $this->coreApi;
    }

    /**
     * Get Products API
     * 
     * Auto-generated methods:
     * - listProducts, createProduct, retrieveProduct, updateProduct, deleteProduct
     * - listPrices, createPrice, retrievePrice, updatePrice, deletePrice
     */
    public function products(): ProductsApi
    {
        if ($this->productsApi === null) {
            $this->productsApi = new ProductsApi(null, $this->config);
        }
        return $this->productsApi;
    }

    /**
     * Get Subscriptions API
     * 
     * Auto-generated methods:
     * - listSubscriptions, createSubscription, retrieveSubscription, updateSubscription, deleteSubscription
     * - listDiscountCoupons, createDiscountCoupon, retrieveDiscountCoupon, updateDiscountCoupon, deleteDiscountCoupon
     */
    public function subscriptions(): SubscriptionsApi
    {
        if ($this->subscriptionsApi === null) {
            $this->subscriptionsApi = new SubscriptionsApi(null, $this->config);
        }
        return $this->subscriptionsApi;
    }

    /**
     * Get Checkout API
     * 
     * Auto-generated methods:
     * - listCheckoutSessions, createCheckoutSession, retrieveCheckoutSession, updateCheckoutSession, deleteCheckoutSession
     * - listPaymentLinks, createPaymentLink, retrievePaymentLink, updatePaymentLink, deletePaymentLink
     */
    public function checkout(): CheckoutApi
    {
        if ($this->checkoutApi === null) {
            $this->checkoutApi = new CheckoutApi(null, $this->config);
        }
        return $this->checkoutApi;
    }

    /**
     * Get Payouts API
     * 
     * Auto-generated methods:
     * - listPayouts, createPayout, retrievePayout, updatePayout, deletePayout
     */
    public function payouts(): PayoutsApi
    {
        if ($this->payoutsApi === null) {
            $this->payoutsApi = new PayoutsApi(null, $this->config);
        }
        return $this->payoutsApi;
    }

    /**
     * Get Webhooks API
     * 
     * Auto-generated methods:
     * - listWebhooks, createWebhook, retrieveWebhook, updateWebhook, deleteWebhook
     * - listWebhookEvents
     */
    public function webhooks(): WebhooksApi
    {
        if ($this->webhooksApi === null) {
            $this->webhooksApi = new WebhooksApi(null, $this->config);
        }
        return $this->webhooksApi;
    }

    /**
     * Get SPI API (Senegal Instant Payment)
     * 
     * Auto-generated methods based on your OpenAPI spec
     */
    public function spi(): SpiApi
    {
        if ($this->spiApi === null) {
            $this->spiApi = new SpiApi(null, $this->config);
        }
        return $this->spiApi;
    }

    /**
     * Get BNPL API (Buy Now Pay Later)
     * 
     * Auto-generated methods based on your OpenAPI spec
     */
    public function bnpl(): BnplApi
    {
        if ($this->bnplApi === null) {
            $this->bnplApi = new BnplApi(null, $this->config);
        }
        return $this->bnplApi;
    }

    /**
     * Get the underlying configuration
     */
    public function getConfig(): Configuration
    {
        return $this->config;
    }

    /**
     * Verify webhook signature
     * 
     * @param string $payload Raw webhook payload
     * @param string $signature Signature from X-Lomi-Signature header
     * @param string|null $secret Webhook secret (uses config if not provided)
     * @return bool
     */
    public function verifyWebhookSignature(
        string $payload,
        string $signature,
        ?string $secret = null
    ): bool {
        $secret = $secret ?? config('lomi.webhook_secret');
        
        if (empty($secret)) {
            throw new \InvalidArgumentException('Webhook secret is required');
        }

        $expectedSignature = hash_hmac('sha256', $payload, $secret);
        
        return hash_equals($expectedSignature, $signature);
    }
}
