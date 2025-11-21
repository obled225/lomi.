<?php

namespace Lomi\Laravel;

use Illuminate\Support\ServiceProvider;

class LomiServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        // Merge config
        $this->mergeConfigFrom(
            __DIR__.'/../config/lomi.php',
            'lomi'
        );

        // Bind singleton
        $this->app->singleton(LomiClient::class, function ($app) {
            return new LomiClient();
        });

        // Alias for easier access
        $this->app->alias(LomiClient::class, 'lomi');
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        // Publish config
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__.'/../config/lomi.php' => config_path('lomi.php'),
            ], 'lomi-config');
        }
    }

    /**
     * Get the services provided by the provider.
     */
    public function provides(): array
    {
        return [LomiClient::class, 'lomi'];
    }
}
