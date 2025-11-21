<?php

namespace Lomi\Laravel\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static \OpenAPI\Client\Api\CoreApi core()
 * @method static \OpenAPI\Client\Api\ProductsApi products()
 * @method static \OpenAPI\Client\Api\SubscriptionsApi subscriptions()
 * @method static \OpenAPI\Client\Api\CheckoutApi checkout()
 * @method static \OpenAPI\Client\Api\PayoutsApi payouts()
 * @method static \OpenAPI\Client\Api\WebhooksApi webhooks()
 * @method static \OpenAPI\Client\Api\SpiApi spi()
 * @method static \OpenAPI\Client\Api\BnplApi bnpl()
 * @method static \OpenAPI\Client\Configuration getConfig()
 * @method static bool verifyWebhookSignature(string $payload, string $signature, string|null $secret = null)
 *
 * @see \Lomi\Laravel\LomiClient
 */
class Lomi extends Facade
{
    /**
     * Get the registered name of the component.
     */
    protected static function getFacadeAccessor(): string
    {
        return 'lomi';
    }
}
