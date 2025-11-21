<?php

return [
    /*
    |--------------------------------------------------------------------------
    | API Key
    |--------------------------------------------------------------------------
    |
    | Your lomi. secret API key. Get this from your dashboard.
    | IMPORTANT: Keep this secret and never commit it to version control.
    |
    */
    'api_key' => env('LOMI_API_KEY'),

    /*
    |--------------------------------------------------------------------------
    | Publishable Key (Future)
    |--------------------------------------------------------------------------
    |
    | Your lomi. publishable key for client-side integrations.
    | This will be used for checkout sessions and payment links.
    |
    */
    'publishable_key' => env('LOMI_PUBLISHABLE_KEY'),

    /*
    |--------------------------------------------------------------------------
    | Environment
    |--------------------------------------------------------------------------
    |
    | The environment to use: 'live' or 'sandbox'
    | Sandbox is for testing without real money.
    |
    */
    'environment' => env('LOMI_ENVIRONMENT', 'live'),

    /*
    |--------------------------------------------------------------------------
    | Base URL
    |--------------------------------------------------------------------------
    |
    | Override the base URL if needed. Leave null to use defaults:
    | - live: https://api.lomi.africa/v1
    | - sandbox: https://sandbox.api.lomi.africa/v1
    |
    */
    'base_url' => env('LOMI_BASE_URL'),

    /*
    |--------------------------------------------------------------------------
    | Timeout
    |--------------------------------------------------------------------------
    |
    | HTTP request timeout in seconds
    |
    */
    'timeout' => env('LOMI_TIMEOUT', 30),

    /*
    |--------------------------------------------------------------------------
    | Retry Configuration
    |--------------------------------------------------------------------------
    |
    | Configure automatic retries for failed requests
    |
    */
    'retry' => [
        'enabled' => env('LOMI_RETRY_ENABLED', true),
        'max_attempts' => env('LOMI_RETRY_MAX_ATTEMPTS', 3),
        'delay' => env('LOMI_RETRY_DELAY', 1000), // milliseconds
    ],

    /*
    |--------------------------------------------------------------------------
    | Webhook Secret
    |--------------------------------------------------------------------------
    |
    | Your webhook signing secret for verifying webhook signatures
    |
    */
    'webhook_secret' => env('LOMI_WEBHOOK_SECRET'),

    /*
    |--------------------------------------------------------------------------
    | Logging
    |--------------------------------------------------------------------------
    |
    | Enable logging of API requests and responses
    |
    */
    'logging' => [
        'enabled' => env('LOMI_LOGGING_ENABLED', false),
        'channel' => env('LOMI_LOGGING_CHANNEL', 'stack'),
    ],
];
