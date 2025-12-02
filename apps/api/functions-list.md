# DB Functions list

## public.accept_team_invitation

public.accept_team_invitation( p_merchant_id UUID, p_invitation_token UUID )

## public.add_assistant_message

public.add_assistant_message( p_conversation_id UUID, p_merchant_id UUID, p_role VARCHAR(20), p_content TEXT, p_message_index INTEGER, p_tokens_used INTEGER DEFAULT NULL, p_model_used VARCHAR(100) DEFAULT NULL, p_response_time_ms INTEGER DEFAULT NULL, p_metadata JSONB DEFAULT '{}'::jsonb )

## public.add_created_at_column

public.add_created_at_column(p_table_name text)

## public.add_timestamp_columns

public.add_timestamp_columns(p_table_name text)

## public.add_updated_at_column

public.add_updated_at_column(p_table_name text)

## public.add_withdrawal_notification_email

public.add_withdrawal_notification_email( p_email VARCHAR )

## public.apply_coupon

public.apply_coupon( p_coupon_id UUID, p_organization_id UUID, p_original_amount NUMERIC(10,2), p_currency_code currency_code, p_checkout_session_id UUID DEFAULT NULL, p_transaction_id UUID DEFAULT NULL, p_fees_amount NUMERIC(10,2) DEFAULT 0, p_quantity INT DEFAULT 1 )

## public.apply_coupon_to_checkout

public.apply_coupon_to_checkout( p_coupon_code VARCHAR(50), p_checkout_session_id UUID )

## public.apply_coupons_to_checkout

public.apply_coupons_to_checkout( p_coupon_codes TEXT[], p_checkout_session_id UUID )

## public.approve_cli_device_request

public.approve_cli_device_request( p_device_code TEXT, p_merchant_id UUID, p_organization_id UUID )

## public.archive_price

public.archive_price( p_price_id UUID )

## public.auto_connect_spi

public.auto_connect_spi(p_organization_id UUID)

## public.auto_connect_stripe

public.auto_connect_stripe(p_organization_id UUID)

## public.auto_detect_uemoa_status

public.auto_detect_uemoa_status()

## public.auto_disconnect_spi

public.auto_disconnect_spi(p_organization_id UUID)

## public.auto_disconnect_stripe

public.auto_disconnect_stripe(p_organization_id UUID)

## public.calculate_beneficiary_payout_fee

public.calculate_beneficiary_payout_fee( p_amount NUMERIC, p_provider_code provider_code DEFAULT 'WAVE' )

## public.calculate_bnpl_breakdown

public.calculate_bnpl_breakdown( p_organization_id UUID, p_product_amount NUMERIC, p_installment_count INT, p_currency_code currency_code DEFAULT 'XOF' )

## public.calculate_bnpl_financing

public.calculate_bnpl_financing( p_product_amount NUMERIC, p_installment_count INT, p_interest_rate NUMERIC DEFAULT 4, p_currency_code currency_code DEFAULT 'XOF' )

## public.calculate_coupon_discount

public.calculate_coupon_discount( p_coupon_id UUID, p_base_amount NUMERIC(10,2), p_quantity INT DEFAULT 1, p_fees_amount NUMERIC(10,2) DEFAULT 0 )

## public.calculate_date_range

public.calculate_date_range( p_date_range TEXT, p_custom_start TEXT, p_custom_end TEXT )

## public.calculate_mass_payout_totals_and_balance

public.calculate_mass_payout_totals_and_balance( p_merchant_id UUID, p_currency_code currency_code, p_provider_code provider_code, p_payout_data JSONB -- Array of {amount: numeric, recipient_name: text, recipient_phone: text} )

## public.calculate_multi_coupon_discount

public.calculate_multi_coupon_discount( p_coupon_codes TEXT[], p_price_id UUID, p_customer_id UUID, p_organization_id UUID )

## public.calculate_organization_fees

public.calculate_organization_fees( p_product_id UUID, p_amount NUMERIC, p_quantity INTEGER DEFAULT 1 )

## public.calculate_organization_metrics

public.calculate_organization_metrics( p_organization_id UUID )

## public.calculate_organization_mrr

public.calculate_organization_mrr( p_organization_id UUID, p_environment VARCHAR DEFAULT 'live' )

## public.calculate_payout_fee

public.calculate_payout_fee( p_organization_id UUID, p_amount NUMERIC, p_currency_code currency_code, p_provider_code provider_code, p_payment_method_code payment_method_code )

## public.calculate_transaction_fee

public.calculate_transaction_fee( p_organization_id UUID, p_amount NUMERIC, p_currency_code currency_code, p_provider_code provider_code, p_payment_method_code payment_method_code )

## public.cancel_customer_subscription

public.cancel_customer_subscription( p_subscription_id UUID, p_merchant_id UUID )

## public.check_activation_status

public.check_activation_status(p_merchant_id UUID)

## public.check_email_exists

public.check_email_exists(p_email VARCHAR)

## public.check_merchant_available_balance

public.check_merchant_available_balance( p_merchant_id UUID, p_currency_code public.currency_code )

## public.check_merchant_balance_for_beneficiary_payout

public.check_merchant_balance_for_beneficiary_payout( p_merchant_id UUID, p_amount NUMERIC, p_currency_code currency_code, p_provider_code provider_code DEFAULT 'WAVE' )

## public.check_onboarding_status

public.check_onboarding_status(p_merchant_id UUID)

## public.check_organization_admin_access

public.check_organization_admin_access(p_merchant_id UUID)

## public.check_payout_methods_limit

public.check_payout_methods_limit()

## public.check_provider_available_for_email

public.check_provider_available_for_email(p_email VARCHAR, p_provider VARCHAR)

## public.check_quarterly_rollover

public.check_quarterly_rollover()

## public.check_rate_limit

public.check_rate_limit( p_organization_id UUID, p_api_key VARCHAR, p_endpoint VARCHAR )

## public.check_stripe_connect_status

public.check_stripe_connect_status(p_organization_id UUID)

## public.cleanup_expired_payment_links

public.cleanup_expired_payment_links()

## public.cleanup_ip_location_cache

public.cleanup_ip_location_cache()

## public.cleanup_old_notifications

public.cleanup_old_notifications()

## public.column_exists

public.column_exists(p_table_name text, p_column_name text)

## public.complete_cli_device_request

public.complete_cli_device_request(p_device_code TEXT)

## public.complete_onboarding

public.complete_onboarding( p_merchant_id UUID, p_first_name VARCHAR, p_last_name VARCHAR, p_phone_number VARCHAR, p_country VARCHAR, p_org_name VARCHAR, p_org_email VARCHAR, p_org_phone_number VARCHAR, p_org_country VARCHAR, p_org_region VARCHAR, p_org_city VARCHAR, p_org_street VARCHAR, p_org_district VARCHAR, p_org_postal_code VARCHAR, p_org_industry VARCHAR, p_org_website_url VARCHAR, p_org_employee_number VARCHAR, p_preferred_language VARCHAR, p_how_did_you_hear_about_us VARCHAR, p_avatar_url VARCHAR, p_logo_url VARCHAR, p_organization_position VARCHAR, p_is_starter_business BOOLEAN DEFAULT false, -- KYC/Activation parameters p_is_authorized_signatory BOOLEAN DEFAULT false, p_proof_of_business VARCHAR DEFAULT NULL, p_proof_of_business_url VARCHAR DEFAULT NULL, p_identity_proof_url VARCHAR DEFAULT NULL, -- Signatory details (only if not authorized) p_signatory_name VARCHAR DEFAULT NULL, p_signatory_email VARCHAR DEFAULT NULL, -- Business documents (only if not starter business) p_address_proof_url VARCHAR DEFAULT NULL, p_business_registration_url VARCHAR DEFAULT NULL, -- Additional KYC fields p_tax_number VARCHAR DEFAULT NULL, p_business_description VARCHAR DEFAULT NULL )

## public.connect_default_providers

public.connect_default_providers(p_organization_id UUID)

## public.convert_amount_for_stripe

public.convert_amount_for_stripe( p_amount_xof NUMERIC, p_target_currency currency_code DEFAULT 'USD' )

## public.convert_currency

public.convert_currency( p_amount NUMERIC, p_from_currency currency_code, p_to_currency currency_code, p_merchant_id UUID DEFAULT NULL, p_organization_id UUID DEFAULT NULL, p_conversion_type conversion_type DEFAULT 'manual', p_reference_id UUID DEFAULT NULL )

## public.convert_currency_for_display

public.convert_currency_for_display( p_amount NUMERIC, p_from_currency currency_code, p_to_currency currency_code )

## public.convert_expired_trials

public.convert_expired_trials()

## public.create_assistant_conversation

public.create_assistant_conversation( p_merchant_id UUID, p_title VARCHAR(255) DEFAULT NULL, p_metadata JSONB DEFAULT '{}'::jsonb )

## public.create_assistant_feedback

public.create_assistant_feedback( p_merchant_id UUID, p_sentiment VARCHAR(30), p_message TEXT )

## public.create_beneficiary_payout

public.create_beneficiary_payout( p_merchant_id UUID, p_amount NUMERIC, p_currency_code currency_code, p_payout_method_id UUID DEFAULT NULL, p_provider_code provider_code DEFAULT 'WAVE', p_payment_method_code payment_method_code DEFAULT 'MOBILE_MONEY', p_metadata JSONB DEFAULT '{}'::jsonb, p_status payout_status DEFAULT 'pending' -- Add status parameter )

## public.create_beneficiary_payout_with_wave

public.create_beneficiary_payout_with_wave( p_merchant_id UUID, p_amount NUMERIC, p_currency_code currency_code, p_wave_payout_id TEXT, p_provider_code provider_code DEFAULT 'WAVE', p_payment_method_code payment_method_code DEFAULT 'MOBILE_MONEY', p_metadata JSONB DEFAULT '{}'::jsonb, p_status payout_status DEFAULT 'pending' )

## public.create_bnpl_installment_plan

public.create_bnpl_installment_plan( p_merchant_id UUID, p_organization_id UUID, p_customer_id UUID, p_product_id UUID, p_product_amount NUMERIC, p_installment_count INT, p_currency_code currency_code DEFAULT 'XOF', p_interest_rate NUMERIC DEFAULT 4)

## public.create_bnpl_plan_with_spi

public.create_bnpl_plan_with_spi( p_merchant_id UUID, p_organization_id UUID, p_customer_id UUID, p_product_id UUID, p_product_amount NUMERIC, p_installment_count INT, p_currency_code currency_code DEFAULT 'XOF', p_checkout_session_id UUID DEFAULT NULL, p_spi_account_number VARCHAR DEFAULT NULL )

## public.create_checkout_session

public.create_checkout_session( p_organization_id UUID, p_environment VARCHAR, p_created_by UUID, p_amount NUMERIC(10,2), p_currency_code currency_code, p_customer_id UUID DEFAULT NULL, p_metadata JSONB DEFAULT NULL, p_title VARCHAR DEFAULT NULL, p_description TEXT DEFAULT NULL, p_product_id UUID DEFAULT NULL, p_price_id UUID DEFAULT NULL, p_subscription_id UUID DEFAULT NULL, p_allow_quantity BOOLEAN DEFAULT FALSE, p_quantity INT DEFAULT 1, p_success_url VARCHAR DEFAULT NULL, p_cancel_url VARCHAR DEFAULT NULL, p_customer_email VARCHAR DEFAULT NULL, p_customer_name VARCHAR DEFAULT NULL, p_customer_phone VARCHAR DEFAULT NULL, p_allow_coupon_code BOOLEAN DEFAULT FALSE, p_expiration_minutes INT DEFAULT 60, p_require_billing_address BOOLEAN DEFAULT TRUE, p_payment_link_id UUID DEFAULT NULL )

## public.create_checkout_session_from_payment_link

public.create_checkout_session_from_payment_link( p_payment_link_id UUID, p_customer_id UUID DEFAULT NULL, p_customer_email VARCHAR(255) DEFAULT NULL, p_customer_name VARCHAR(255) DEFAULT NULL, p_customer_phone VARCHAR(50) DEFAULT NULL, p_expiration_minutes INTEGER DEFAULT 60, p_quantity INTEGER DEFAULT NULL )

## public.create_cli_api_key

public.create_cli_api_key( p_merchant_id UUID, p_organization_id UUID, p_api_key TEXT, p_key_name TEXT )

## public.create_cli_device_request

public.create_cli_device_request( p_device_code TEXT, p_user_code TEXT, p_expires_at TIMESTAMPTZ, p_interval SMALLINT )

## public.create_customer

public.create_customer( p_merchant_id UUID, p_organization_id UUID, p_name VARCHAR, p_email VARCHAR, p_phone_number VARCHAR DEFAULT NULL, p_whatsapp_number VARCHAR DEFAULT NULL, p_country VARCHAR DEFAULT '', p_city VARCHAR DEFAULT '', p_address VARCHAR DEFAULT '', p_postal_code VARCHAR DEFAULT '', p_is_business BOOLEAN DEFAULT false, p_environment VARCHAR DEFAULT 'live' )

## public.create_discount_coupon

public.create_discount_coupon( p_organization_id UUID, p_code VARCHAR(50), p_discount_type public.discount_type DEFAULT 'percentage', p_discount_percentage NUMERIC(5,2) DEFAULT NULL, p_discount_fixed_amount NUMERIC(10,2) DEFAULT NULL, p_customer_type public.customer_type DEFAULT 'all', p_usage_frequency_limit public.usage_frequency DEFAULT 'total', p_usage_limit_value INT DEFAULT NULL, p_description TEXT DEFAULT NULL, p_is_active BOOLEAN DEFAULT TRUE, p_max_uses INT DEFAULT NULL, p_max_quantity_per_use INT DEFAULT NULL, p_valid_from TIMESTAMPTZ DEFAULT NULL, p_expires_at TIMESTAMPTZ DEFAULT NULL, p_scope_type VARCHAR(50) DEFAULT 'organization_wide', p_product_ids UUID[] DEFAULT NULL )

## public.create_feedback

public.create_feedback( p_merchant_id UUID, p_sentiment VARCHAR(30), p_message TEXT )

## public.create_index_if_not_exists

public.create_index_if_not_exists( p_index_name text, p_table_name text, p_column_name text, p_index_type text DEFAULT '' )

## public.create_initial_organization

public.create_initial_organization(new_merchant_id UUID)

## public.create_job_application

public.create_job_application( p_job_id UUID, p_name TEXT, p_email TEXT, p_linkedin_url TEXT DEFAULT NULL, p_github_url TEXT DEFAULT NULL, p_project_note TEXT DEFAULT NULL, p_resume_url TEXT DEFAULT NULL )

## public.create_mass_beneficiary_payout

public.create_mass_beneficiary_payout( p_merchant_id UUID, p_provider_code provider_code, p_currency_code currency_code, p_payout_data JSONB -- Array of {amount: numeric, recipient_name: text, recipient_phone: text, description: text} )

## public.create_mass_beneficiary_payout_with_wave

public.create_mass_beneficiary_payout_with_wave( p_merchant_id UUID, p_provider_code provider_code, p_currency_code currency_code, p_payout_data JSONB -- Array of {amount: numeric, recipient_name: text, recipient_phone: text, description: text, wave_payout_id: text, status: text} )

## public.create_merchant_record

public.create_merchant_record()

## public.create_mtn_transaction

public.create_mtn_transaction( p_merchant_id UUID, p_organization_id UUID, p_customer_id UUID, p_amount NUMERIC, p_currency_code currency_code, p_product_id UUID DEFAULT NULL, p_subscription_id UUID DEFAULT NULL, p_description TEXT DEFAULT NULL, p_metadata JSONB DEFAULT NULL, p_quantity INT DEFAULT 1, p_checkout_session_id UUID DEFAULT NULL, p_environment VARCHAR DEFAULT 'live' )

## public.create_or_update_customer

public.create_or_update_customer( p_merchant_id UUID, p_organization_id UUID, p_name TEXT, p_email TEXT, p_city TEXT, p_address TEXT, p_country TEXT, p_phone_number TEXT, p_postal_code TEXT, p_whatsapp_number TEXT, p_custom_fields_metadata JSONB DEFAULT NULL )

## public.create_organization

public.create_organization( p_merchant_id UUID, p_name VARCHAR DEFAULT NULL, p_role member_role DEFAULT 'Admin' )

## public.create_organization_webhook

public.create_organization_webhook( p_merchant_id UUID, p_url VARCHAR, p_authorized_events webhook_event[], p_is_active BOOLEAN DEFAULT true, p_metadata JSONB DEFAULT '{}'::jsonb, p_environment VARCHAR DEFAULT 'live' )

## public.create_payment_link

public.create_payment_link( p_organization_id UUID, p_link_type link_type, p_title VARCHAR(255), p_currency_code currency_code, p_description TEXT DEFAULT NULL, p_price NUMERIC(10,2) DEFAULT NULL, p_allow_coupon_code BOOLEAN DEFAULT false, p_allow_quantity BOOLEAN DEFAULT false, p_require_billing_address BOOLEAN DEFAULT false, p_expires_at TIMESTAMPTZ DEFAULT NULL, p_success_url VARCHAR(2048) DEFAULT NULL, p_cancel_url VARCHAR(2048) DEFAULT NULL, p_product_id UUID DEFAULT NULL, p_price_id UUID DEFAULT NULL, p_created_by UUID DEFAULT NULL, p_environment VARCHAR DEFAULT 'live' )

## public.create_payout_method

public.create_payout_method( p_account_number VARCHAR, p_account_name VARCHAR, p_bank_name VARCHAR, p_country VARCHAR, p_bank_code VARCHAR DEFAULT NULL, p_branch_code VARCHAR DEFAULT NULL, p_is_default BOOLEAN DEFAULT false, p_payout_method_type VARCHAR DEFAULT 'bank', p_is_spi_enabled BOOLEAN DEFAULT false, p_spi_account_number VARCHAR DEFAULT NULL, p_spi_alias_shid UUID DEFAULT NULL, p_spi_alias_mbno VARCHAR DEFAULT NULL, p_spi_alias_type VARCHAR DEFAULT NULL, p_organization_id UUID DEFAULT NULL )

## public.create_pos_checkout_session

public.create_pos_checkout_session( p_organization_id UUID, p_amount NUMERIC(10,2) DEFAULT NULL, -- NULL for product-linked QR codes p_currency_code currency_code DEFAULT 'XOF', p_qr_code_type qr_code_type DEFAULT 'dynamic', p_expiration_minutes INTEGER DEFAULT 1440, -- 24 hours for POS (NULL for static) p_product_id UUID DEFAULT NULL, -- For product-linked static QR codes (one-time or recurring) p_metadata JSONB DEFAULT NULL )

## public.create_price

public.create_price( p_product_id UUID, p_organization_id UUID, p_amount NUMERIC(15,2), p_currency_code public.currency_code, p_billing_interval public.billing_interval DEFAULT NULL, p_pricing_model public.pricing_model DEFAULT 'standard', p_minimum_amount NUMERIC(15,2) DEFAULT NULL, p_maximum_amount NUMERIC(15,2) DEFAULT NULL, p_is_default BOOLEAN DEFAULT false, p_metadata JSONB DEFAULT NULL )

## public.create_product

public.create_product( p_merchant_id UUID, p_organization_id UUID, p_name VARCHAR(255), p_description TEXT, p_product_type public.product_type DEFAULT 'one_time', p_image_url TEXT DEFAULT NULL, p_is_active BOOLEAN DEFAULT true, p_display_on_storefront BOOLEAN DEFAULT true, p_prices JSONB DEFAULT NULL, -- Array of price objects: [{"amount": 10.00, "currency_code": "USD", "billing_interval": "month"}] p_metadata JSONB DEFAULT NULL, p_fee_type_ids UUID[] DEFAULT NULL, p_environment VARCHAR DEFAULT 'live', p_failed_payment_action public.failed_payment_action DEFAULT NULL, p_charge_day INTEGER DEFAULT NULL, p_first_payment_type public.first_payment_type DEFAULT NULL, p_trial_enabled BOOLEAN DEFAULT false, p_trial_period_days INTEGER DEFAULT NULL )

## public.create_refund

public.create_refund( p_transaction_id UUID, p_amount NUMERIC, p_reason TEXT DEFAULT NULL, p_provider_transaction_id VARCHAR DEFAULT NULL, -- Keep parameter for backward compatibility but don't use it p_provider_merchant_id VARCHAR DEFAULT NULL, p_provider_code provider_code DEFAULT NULL, p_metadata JSONB DEFAULT NULL, p_created_by UUID DEFAULT NULL -- Optional: merchant who created the refund )

## public.create_spi_account_alias

public.create_spi_account_alias( p_organization_id UUID, p_account_number VARCHAR, p_alias_type spi_alias_type, p_alias_key VARCHAR )

## public.create_static_qr_code_for_product

public.create_static_qr_code_for_product( p_organization_id UUID, p_name VARCHAR(255), p_product_id UUID, p_currency_code currency_code DEFAULT 'XOF', p_metadata JSONB DEFAULT NULL )

## public.create_stripe_checkout_transaction

public.create_stripe_checkout_transaction( p_merchant_id UUID, p_organization_id UUID, p_customer_id UUID, p_amount_xof NUMERIC, p_stripe_payment_intent_id VARCHAR, p_stripe_currency currency_code DEFAULT 'USD', p_product_id UUID DEFAULT NULL, p_subscription_id UUID DEFAULT NULL, p_description TEXT DEFAULT NULL, p_metadata JSONB DEFAULT NULL, p_quantity INT DEFAULT 1, p_checkout_session_id UUID DEFAULT NULL, p_environment VARCHAR DEFAULT 'live' )

## public.create_stripe_connect_account

public.create_stripe_connect_account( p_stripe_account_id VARCHAR, p_organization_id UUID, p_stripe_account_type VARCHAR DEFAULT 'express', p_business_type VARCHAR DEFAULT NULL, p_company_domicile_country VARCHAR DEFAULT NULL, p_org_stripe_country VARCHAR DEFAULT NULL, p_stripe_metadata JSONB DEFAULT '{}'::jsonb )

## public.create_stripe_transaction

public.create_stripe_transaction( p_merchant_id UUID, p_organization_id UUID, p_customer_id UUID, p_amount NUMERIC, p_currency_code currency_code, p_provider_transaction_id VARCHAR, -- Stripe Payment Intent ID p_product_id UUID DEFAULT NULL, p_subscription_id UUID DEFAULT NULL, p_description TEXT DEFAULT NULL, p_metadata JSONB DEFAULT NULL, p_quantity INT DEFAULT 1, p_checkout_session_id UUID DEFAULT NULL -- Associate with our internal checkout session )

## public.create_subscription

public.create_subscription( p_merchant_id UUID, p_organization_id UUID, p_product_id UUID, p_customer_id UUID, p_start_date DATE, p_price_id UUID DEFAULT NULL, p_status subscription_status DEFAULT 'active' )

## public.create_subscription_from_product

public.create_subscription_from_product( p_merchant_id UUID, p_organization_id UUID, p_customer_id UUID, p_product_id UUID, p_metadata JSONB DEFAULT NULL, p_price_id UUID DEFAULT NULL )

## public.create_support_request

public.create_support_request( p_merchant_id UUID, p_category support_category, p_message TEXT, p_organization_id UUID, p_image_url TEXT DEFAULT NULL, p_subject TEXT DEFAULT 'Support Request', p_priority support_priority DEFAULT 'normal' )

## public.create_team_invitation_notification

public.create_team_invitation_notification( p_merchant_id UUID, p_organization_id UUID, p_organization_name VARCHAR, p_role member_role )

## public.create_transaction

public.create_transaction( p_merchant_id UUID, p_organization_id UUID, p_customer_id UUID, p_amount NUMERIC, p_currency_code currency_code, p_provider_code provider_code, p_payment_method_code payment_method_code, p_description TEXT DEFAULT NULL, p_product_id UUID DEFAULT NULL, p_subscription_id UUID DEFAULT NULL, p_metadata JSONB DEFAULT NULL, p_quantity INT DEFAULT 1, p_environment VARCHAR DEFAULT 'live' )

## public.create_updated_at_trigger

public.create_updated_at_trigger(p_table_name text)

## public.create_wave_checkout_transaction

public.create_wave_checkout_transaction( p_merchant_id UUID, p_organization_id UUID, p_customer_id UUID, p_amount NUMERIC, p_currency_code currency_code, p_provider_checkout_id VARCHAR, p_checkout_url TEXT, p_error_url TEXT, p_success_url TEXT, p_product_id UUID DEFAULT NULL, p_subscription_id UUID DEFAULT NULL, p_description TEXT DEFAULT NULL, p_metadata JSONB DEFAULT NULL, p_quantity INT DEFAULT 1, p_checkout_session_id UUID DEFAULT NULL, p_environment VARCHAR DEFAULT 'live' )

## public.create_wave_payout_transaction

public.create_wave_payout_transaction( p_merchant_id UUID, p_organization_id UUID, p_amount NUMERIC, p_currency_code public.currency_code, p_provider_checkout_id VARCHAR, p_description TEXT DEFAULT NULL, p_metadata JSONB DEFAULT NULL, p_destination_mobile VARCHAR DEFAULT NULL )

## public.create_webhook

public.create_webhook( p_merchant_id UUID, p_organization_id UUID, p_url TEXT, p_authorized_events webhook_event[], p_metadata JSONB DEFAULT NULL )

## public.delete_api_key

public.delete_api_key(p_api_key VARCHAR)

## public.delete_assistant_conversation

public.delete_assistant_conversation( p_conversation_id UUID, p_merchant_id UUID )

## public.delete_customer

public.delete_customer( p_customer_id UUID )

## public.delete_discount_coupon

public.delete_discount_coupon(p_coupon_id UUID)

## public.delete_merchant_cascade

public.delete_merchant_cascade(p_merchant_id UUID)

## public.delete_organization_fee_type

public.delete_organization_fee_type( p_organization_id UUID, p_fee_type_id UUID )

## public.delete_organization_webhook

public.delete_organization_webhook( p_webhook_id UUID, p_merchant_id UUID )

## public.delete_payout_method

public.delete_payout_method(p_payout_method_id UUID)

## public.delete_product

public.delete_product( p_product_id UUID )

## public.delete_product_service

public.delete_product_service( p_product_id UUID, p_merchant_id UUID -- For validation only )

## public.delete_qr_code

public.delete_qr_code( p_qr_code_id UUID )

## public.delete_storage_object

public.delete_storage_object(bucket TEXT, object TEXT, OUT status INT, OUT content TEXT)

## public.delete_storage_object_from_bucket

public.delete_storage_object_from_bucket(bucket_name TEXT, object_path TEXT, OUT status INT, OUT content TEXT)

## public.delete_webhook

public.delete_webhook( p_webhook_id UUID, p_merchant_id UUID )

## public.detect_product_or_price_id

public.detect_product_or_price_id( p_id UUID )

## public.disable_2fa

public.disable_2fa( p_merchant_id UUID )

## public.disconnect_all_providers

public.disconnect_all_providers(p_organization_id UUID)

## public.enable_2fa

public.enable_2fa( p_merchant_id UUID, p_totp_secret TEXT, p_verification_code TEXT )

## public.ensure_checkout_session_urls

public.ensure_checkout_session_urls()

## public.ensure_merchant_account

public.ensure_merchant_account( p_merchant_id UUID, p_organization_id UUID, p_currency_code public.currency_code )

## public.expire_pending_transactions

public.expire_pending_transactions(expiry_hours INTEGER DEFAULT 0.25)

## public.expire_pending_transactions_with_custom_status

public.expire_pending_transactions_with_custom_status( expiry_hours INTEGER DEFAULT 0.25, new_status transaction_status DEFAULT 'expired' )

## public.export_customers_by_criteria

public.export_customers_by_criteria( p_merchant_id UUID, p_product_ids UUID[] DEFAULT NULL, p_export_type VARCHAR DEFAULT 'product', p_start_date DATE DEFAULT NULL, p_end_date DATE DEFAULT NULL, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_account_balance

public.fetch_account_balance( p_merchant_id UUID, p_organization_id UUID, p_currency_code TEXT DEFAULT NULL )

## public.fetch_active_subscriptions_custom_range

public.fetch_active_subscriptions_custom_range( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_aov_metrics_custom_range

public.fetch_aov_metrics_custom_range( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_api_keys

public.fetch_api_keys( p_organization_id UUID )

## public.fetch_average_customer_lifetime_value

public.fetch_average_customer_lifetime_value( p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_end_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_average_retention_rate

public.fetch_average_retention_rate( p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_end_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_average_transaction_value

public.fetch_average_transaction_value( p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_end_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_balance_breakdown

public.fetch_balance_breakdown( p_merchant_id UUID, p_target_currency currency_code DEFAULT NULL )

## public.fetch_beneficiary_payouts

public.fetch_beneficiary_payouts( p_merchant_id UUID, p_statuses TEXT[] DEFAULT NULL, p_page_number INTEGER DEFAULT 1, p_page_size INTEGER DEFAULT 50, p_start_date TIMESTAMPTZ DEFAULT NULL, p_end_date TIMESTAMPTZ DEFAULT NULL, p_currency_code currency_code DEFAULT NULL )

## public.fetch_billing_statements

public.fetch_billing_statements( p_merchant_id UUID )

## public.fetch_completion_rate

public.fetch_completion_rate( p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_end_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_customer

public.fetch_customer( p_customer_id UUID )

## public.fetch_customer_api

public.fetch_customer_api( p_customer_id UUID )

## public.fetch_customer_transactions

public.fetch_customer_transactions( p_customer_id UUID, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_customers

public.fetch_customers( p_merchant_id UUID, p_search_term VARCHAR DEFAULT NULL, p_customer_type VARCHAR DEFAULT NULL, p_page INTEGER DEFAULT 1, p_page_size INTEGER DEFAULT 50, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_customers_api

public.fetch_customers_api( p_merchant_id UUID, p_search_term VARCHAR DEFAULT NULL, p_customer_type VARCHAR DEFAULT NULL, p_page INTEGER DEFAULT 1, p_page_size INTEGER DEFAULT 50, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_customers_with_status

public.fetch_customers_with_status( p_merchant_id UUID, p_organization_id UUID DEFAULT NULL, p_search_term VARCHAR DEFAULT NULL, p_customer_type VARCHAR DEFAULT NULL, p_activity_status VARCHAR DEFAULT 'active', -- 'active', 'inactive', or 'all' p_offset INTEGER DEFAULT 0, p_limit INTEGER DEFAULT 200, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_daily_sales_grid_data

public.fetch_daily_sales_grid_data( p_organization_id UUID, p_days INTEGER DEFAULT 365 )

## public.fetch_data_for_checkout

public.fetch_data_for_checkout( p_link_id UUID )

## public.fetch_developer_ids

public.fetch_developer_ids( p_user_id uuid )

## public.fetch_failed_transactions

public.fetch_failed_transactions( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE, p_provider_code TEXT DEFAULT NULL, p_limit INT DEFAULT 50 )

## public.fetch_fee_amount

public.fetch_fee_amount( p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_end_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_feedback

public.fetch_feedback( p_merchant_id UUID, p_page INTEGER DEFAULT 1, p_page_size INTEGER DEFAULT 50 )

## public.fetch_gross_amount

public.fetch_gross_amount( p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_end_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_latest_conversion_rates

public.fetch_latest_conversion_rates( p_from_currency currency_code DEFAULT NULL, p_to_currency currency_code DEFAULT NULL )

## public.fetch_logs

public.fetch_logs( p_merchant_id UUID, p_event event_type DEFAULT NULL, p_severity VARCHAR DEFAULT NULL, p_limit INTEGER DEFAULT 50, p_offset INTEGER DEFAULT 0 )

## public.fetch_ltv_by_acquisition_cohort

public.fetch_ltv_by_acquisition_cohort( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMPTZ, p_end_date TIMESTAMPTZ, p_ltv_duration_days INT DEFAULT 180 -- Default to 180-day LTV )

## public.fetch_merchant_details

public.fetch_merchant_details(p_user_id UUID)

## public.fetch_merchant_historical_providers

public.fetch_merchant_historical_providers(p_merchant_id UUID)

## public.fetch_merchant_organizations

public.fetch_merchant_organizations(p_merchant_id UUID)

## public.fetch_mrr_metrics_custom_range

public.fetch_mrr_metrics_custom_range( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_new_customer_trend

public.fetch_new_customer_trend( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE )

## public.fetch_new_customers

public.fetch_new_customers( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE )

## public.fetch_notifications

public.fetch_notifications(p_merchant_id UUID)

## public.fetch_organization_checkout_settings

public.fetch_organization_checkout_settings( p_organization_id UUID )

## public.fetch_organization_data_and_members

public.fetch_organization_data_and_members( p_merchant_id UUID, p_organization_id UUID )

## public.fetch_organization_details

public.fetch_organization_details( p_merchant_id UUID, p_organization_id UUID DEFAULT NULL )

## public.fetch_organization_fee_types

public.fetch_organization_fee_types( p_organization_id UUID )

## public.fetch_organization_fees

public.fetch_organization_fees( p_merchant_id UUID )

## public.fetch_organization_provider_settings

public.fetch_organization_provider_settings( p_organization_id UUID, p_provider_code provider_code DEFAULT NULL )

## public.fetch_organization_providers_settings

public.fetch_organization_providers_settings(p_organization_id UUID)

## public.fetch_organization_webhooks

public.fetch_organization_webhooks( p_merchant_id UUID, p_organization_id UUID DEFAULT NULL, p_event webhook_event DEFAULT NULL, p_is_active BOOLEAN DEFAULT NULL, p_search_term TEXT DEFAULT NULL, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_payment_links

public.fetch_payment_links( p_organization_id UUID, p_link_type link_type DEFAULT NULL, p_currency_code currency_code DEFAULT NULL, p_is_active BOOLEAN DEFAULT NULL, p_page INTEGER DEFAULT 1, p_page_size INTEGER DEFAULT 50, p_include_expired BOOLEAN DEFAULT false, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_payout_count

public.fetch_payout_count( p_account_id UUID, p_start_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_end_date TIMESTAMP WITH TIME ZONE DEFAULT NULL )

## public.fetch_payout_methods

public.fetch_payout_methods()

## public.fetch_payout_status

public.fetch_payout_status( p_merchant_id UUID, p_organization_id UUID, p_status TEXT DEFAULT NULL, p_currency_code TEXT DEFAULT NULL )

## public.fetch_payouts

public.fetch_payouts( p_merchant_id UUID, p_statuses payout_status[] DEFAULT NULL, p_page_number INTEGER DEFAULT 1, p_page_size INTEGER DEFAULT 50, p_start_date TIMESTAMPTZ DEFAULT NULL, p_end_date TIMESTAMPTZ DEFAULT NULL )

## public.fetch_product_fees

public.fetch_product_fees( p_product_id UUID )

## public.fetch_product_performance

public.fetch_product_performance( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE, p_metric TEXT DEFAULT 'revenue', p_limit INT DEFAULT 10 )

## public.fetch_product_prices

public.fetch_product_prices( p_product_id UUID )

## public.fetch_product_transactions

public.fetch_product_transactions( p_product_id UUID, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_products

public.fetch_products( p_merchant_id UUID, p_organization_id UUID DEFAULT NULL, p_is_active BOOLEAN DEFAULT NULL, p_limit INTEGER DEFAULT 15, p_offset INTEGER DEFAULT 0, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_products_with_transactions_for_export

public.fetch_products_with_transactions_for_export( p_merchant_id UUID )

## public.fetch_provider_distribution_custom_range

public.fetch_provider_distribution_custom_range( p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_provider_performance_metrics

public.fetch_provider_performance_metrics( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE )

## public.fetch_public_transaction_details

public.fetch_public_transaction_details( p_transaction_id UUID )

## public.fetch_qr_codes

public.fetch_qr_codes( p_organization_id UUID, p_qr_code_type qr_code_type DEFAULT NULL, p_is_active BOOLEAN DEFAULT NULL, p_page INTEGER DEFAULT 1, p_page_size INTEGER DEFAULT 50, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_recent_orders

public.fetch_recent_orders( p_organization_id UUID, p_limit INTEGER DEFAULT 3 )

## public.fetch_renewed_subscriptions_custom_range

public.fetch_renewed_subscriptions_custom_range( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_renewed_subscriptions_revenue_custom_range

public.fetch_renewed_subscriptions_revenue_custom_range( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_revenue_analytics_custom_range

public.fetch_revenue_analytics_custom_range( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE, p_group_by TEXT DEFAULT 'day', p_currency_code TEXT DEFAULT NULL )

## public.fetch_revenue_custom_range

public.fetch_revenue_custom_range( p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_revenue_pareto_custom_range

public.fetch_revenue_pareto_custom_range( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMPTZ, p_end_date TIMESTAMPTZ )

## public.fetch_sidebar_data

public.fetch_sidebar_data( p_merchant_id UUID, p_organization_id UUID DEFAULT NULL )

## public.fetch_subscription_data

public.fetch_subscription_data( p_transaction_id UUID )

## public.fetch_subscription_metrics

public.fetch_subscription_metrics( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE, p_status TEXT DEFAULT NULL )

## public.fetch_subscription_revenue_custom_range

public.fetch_subscription_revenue_custom_range( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_subscriptions

public.fetch_subscriptions( p_organization_id UUID, p_merchant_id UUID DEFAULT NULL, p_page INTEGER DEFAULT 1, p_page_size INTEGER DEFAULT 50, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_subscriptions_for_customer

public.fetch_subscriptions_for_customer( p_customer_id UUID, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_support_requests

public.fetch_support_requests( p_merchant_id UUID, p_status support_status DEFAULT NULL, p_page INTEGER DEFAULT 1, p_page_size INTEGER DEFAULT 50 )

## public.fetch_team_members

public.fetch_team_members( p_organization_id UUID )

## public.fetch_top_customers

public.fetch_top_customers( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE, p_metric TEXT DEFAULT 'revenue', p_limit INT DEFAULT 10 )

## public.fetch_top_performing_products

public.fetch_top_performing_products( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE, p_metric TEXT DEFAULT 'revenue', -- 'revenue' or 'count' p_limit INT DEFAULT 5, -- Number of top products to return p_environment VARCHAR DEFAULT 'live' )

## public.fetch_top_performing_subscription_plans

public.fetch_top_performing_subscription_plans( p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_end_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_limit INTEGER DEFAULT 10, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_total_incoming_amount

public.fetch_total_incoming_amount( p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_end_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_transaction_count

public.fetch_transaction_count( p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_end_date TIMESTAMP WITH TIME ZONE DEFAULT NULL, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_transaction_metrics

public.fetch_transaction_metrics( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE, p_status TEXT DEFAULT NULL, p_provider_code TEXT DEFAULT NULL, p_payment_method_code TEXT DEFAULT NULL )

## public.fetch_transaction_volume_custom_range

public.fetch_transaction_volume_custom_range( p_merchant_id UUID, p_organization_id UUID, p_start_date TIMESTAMP WITH TIME ZONE, p_end_date TIMESTAMP WITH TIME ZONE )

## public.fetch_transactions

public.fetch_transactions( p_organization_id UUID, p_provider_code provider_code DEFAULT NULL, p_status transaction_status[] DEFAULT NULL, p_type transaction_type[] DEFAULT NULL, p_currency currency_code[] DEFAULT NULL, p_payment_method payment_method_code[] DEFAULT NULL, p_page INTEGER DEFAULT 1, p_page_size INTEGER DEFAULT 50, p_start_date TIMESTAMPTZ DEFAULT NULL, p_end_date TIMESTAMPTZ DEFAULT NULL, p_is_pos BOOLEAN DEFAULT NULL, p_environment VARCHAR DEFAULT 'live' )

## public.fetch_transactions_for_subscription

public.fetch_transactions_for_subscription( p_subscription_id UUID )

## public.fetch_user_avatar

public.fetch_user_avatar(p_user_id UUID)

## public.fetch_wave_provider_settings

public.fetch_wave_provider_settings( p_organization_id UUID )

## public.find_subscriptions_due_for_renewal

public.find_subscriptions_due_for_renewal(days_before_renewal INTEGER DEFAULT 3)

## public.fix_coupon_customer_validation

public.fix_coupon_customer_validation()

## public.generate_api_key

public.generate_api_key( p_merchant_id UUID, p_organization_id UUID, p_name VARCHAR, p_expiration_date TIMESTAMPTZ DEFAULT NULL, p_environment VARCHAR DEFAULT 'live', p_key_type VARCHAR DEFAULT 'secret' )

## public.generate_conversation_title

public.generate_conversation_title()

## public.generate_monthly_statement

public.generate_monthly_statement( p_merchant_id UUID )

## public.generate_monthly_statements_for_all_merchants

public.generate_monthly_statements_for_all_merchants()

## public.generate_onboarding_api_key

public.generate_onboarding_api_key()

## public.generate_payment_link_url

public.generate_payment_link_url()

## public.generate_statement_for_specific_month

public.generate_statement_for_specific_month( p_merchant_id UUID, p_target_month DATE -- Any date within the month you want to generate the statement for )

## public.generate_subscription_renewal_session

public.generate_subscription_renewal_session( p_subscription_id UUID )

## public.generate_webhook_secret

public.generate_webhook_secret( p_webhook_id UUID, p_merchant_id UUID )

## public.generate_webhook_verification_token

public.generate_webhook_verification_token()

## public.get_active_qr_codes_count

public.get_active_qr_codes_count( p_organization_id UUID )

## public.get_active_subscriptions_by_product

public.get_active_subscriptions_by_product( p_organization_id UUID, p_environment VARCHAR DEFAULT 'live' )

## public.get_api_usage_stats

public.get_api_usage_stats()

## public.get_assistant_conversations

public.get_assistant_conversations( p_merchant_id UUID, p_limit INTEGER DEFAULT 20, p_offset INTEGER DEFAULT 0 )

## public.get_assistant_messages

public.get_assistant_messages( p_conversation_id UUID, p_merchant_id UUID, p_limit INTEGER DEFAULT 50 )

## public.get_base_url

public.get_base_url()

## public.get_beneficiary_payout_by_wave_id

public.get_beneficiary_payout_by_wave_id( p_wave_payout_id TEXT )

## public.get_beneficiary_payout_count

public.get_beneficiary_payout_count( p_merchant_id UUID, p_start_date TIMESTAMPTZ DEFAULT NULL, p_end_date TIMESTAMPTZ DEFAULT NULL )

## public.get_beneficiary_payout_metrics

public.get_beneficiary_payout_metrics( p_merchant_id UUID, p_start_date TIMESTAMPTZ DEFAULT NULL, p_end_date TIMESTAMPTZ DEFAULT NULL )

## public.get_beneficiary_payout_success_rate

public.get_beneficiary_payout_success_rate( p_merchant_id UUID, p_start_date TIMESTAMPTZ DEFAULT NULL, p_end_date TIMESTAMPTZ DEFAULT NULL )

## public.get_bnpl_checkout_display

public.get_bnpl_checkout_display( p_organization_id UUID, p_product_amount NUMERIC, p_installment_count INT, p_currency_code currency_code DEFAULT 'XOF' )

## public.get_bnpl_config_summary

public.get_bnpl_config_summary( p_organization_id UUID DEFAULT NULL )

## public.get_bnpl_plan_fees

public.get_bnpl_plan_fees( p_plan_id UUID )

## public.get_checkout_colors

public.get_checkout_colors(p_organization_id uuid)

## public.get_checkout_session

public.get_checkout_session( p_checkout_session_id UUID )

## public.get_checkout_session_by_wave_id

public.get_checkout_session_by_wave_id( p_wave_session_id VARCHAR )

## public.get_checkout_session_details

public.get_checkout_session_details( p_checkout_session_id UUID )

## public.get_checkout_session_details_for_webhook

public.get_checkout_session_details_for_webhook( p_checkout_session_id UUID )

## public.get_cli_device_request

public.get_cli_device_request(p_device_code TEXT)

## public.get_cli_device_request_for_verification

public.get_cli_device_request_for_verification(p_user_code TEXT)

## public.get_cli_request_status_and_ids

public.get_cli_request_status_and_ids(p_device_code TEXT)

## public.get_client_info

public.get_client_info()

## public.get_coupon_details_for_management

public.get_coupon_details_for_management( p_organization_id UUID, p_coupon_id UUID DEFAULT NULL )

## public.get_coupon_performance

public.get_coupon_performance( p_coupon_id UUID )

## public.get_coupon_preview

public.get_coupon_preview( p_coupon_id UUID, p_quantity INT DEFAULT 1, p_base_amount NUMERIC(10,2) DEFAULT 0 )

## public.get_currency_conversion_rate

public.get_currency_conversion_rate( p_from_currency currency_code, p_to_currency currency_code )

## public.get_current_merchant_email

public.get_current_merchant_email(p_merchant_id UUID)

## public.get_customer

public.get_customer( p_customer_id UUID, p_merchant_id UUID )

## public.get_customer_bnpl_schedule

public.get_customer_bnpl_schedule( p_customer_id UUID, p_plan_id UUID )

## public.get_customer_demographics

public.get_customer_demographics()

## public.get_customer_subscription

public.get_customer_subscription( p_subscription_id UUID, p_merchant_id UUID )

## public.get_global_banking_stats

public.get_global_banking_stats()

## public.get_global_product_plan_stats

public.get_global_product_plan_stats()

## public.get_global_refund_stats

public.get_global_refund_stats()

## public.get_global_transaction_stats

public.get_global_transaction_stats()

## public.get_installed_integrations

public.get_installed_integrations( p_organization_id UUID )

## public.get_invoices_by_status

public.get_invoices_by_status()

## public.get_location_from_ip

public.get_location_from_ip(p_ip_address VARCHAR)

## public.get_merchant

public.get_merchant( p_merchant_id UUID )

## public.get_merchant_account_id

public.get_merchant_account_id( p_merchant_id UUID, p_currency_code public.currency_code )

## public.get_merchant_arr

public.get_merchant_arr( p_merchant_id UUID )

## public.get_merchant_balance_stats

public.get_merchant_balance_stats()

## public.get_merchant_customer_stats

public.get_merchant_customer_stats(p_merchant_id UUID)

## public.get_merchant_details

public.get_merchant_details( p_merchant_id UUID )

## public.get_merchant_details_for_wave

public.get_merchant_details_for_wave( p_merchant_id UUID, p_organization_id UUID )

## public.get_merchant_from_organization

public.get_merchant_from_organization( p_organization_id UUID )

## public.get_merchant_growth_stats

public.get_merchant_growth_stats()

## public.get_merchant_mrr

public.get_merchant_mrr( p_merchant_id UUID )

## public.get_merchant_organization_id

public.get_merchant_organization_id(p_merchant_id UUID)

## public.get_merchant_platform_fees

public.get_merchant_platform_fees( p_merchant_id UUID )

## public.get_merchant_product_stats

public.get_merchant_product_stats(p_merchant_id UUID)

## public.get_merchant_refund_stats

public.get_merchant_refund_stats(p_merchant_id UUID)

## public.get_merchant_transaction_stats

public.get_merchant_transaction_stats(p_merchant_id UUID)

## public.get_most_popular_qr_code

public.get_most_popular_qr_code( p_organization_id UUID, p_date_range TEXT DEFAULT NULL, p_custom_start TEXT DEFAULT NULL, p_custom_end TEXT DEFAULT NULL )

## public.get_mtn_transaction_by_external_id

public.get_mtn_transaction_by_external_id( p_external_id TEXT )

## public.get_next_message_index

public.get_next_message_index( p_conversation_id UUID, p_merchant_id UUID )

## public.get_organization_balance

public.get_organization_balance( p_organization_id UUID, p_currency_code currency_code )

## public.get_organization_checkout_urls

public.get_organization_checkout_urls( p_organization_id UUID )

## public.get_organization_coupons

public.get_organization_coupons( p_organization_id UUID, p_environment VARCHAR DEFAULT 'live' )

## public.get_organization_demographics

public.get_organization_demographics()

## public.get_organization_fee_structure

public.get_organization_fee_structure( p_organization_id UUID, p_currency_code currency_code DEFAULT 'XOF' )

## public.get_organization_gross_transactions

public.get_organization_gross_transactions( p_organization_id UUID )

## public.get_organization_id_for_merchant

public.get_organization_id_for_merchant(p_merchant_id UUID)

## public.get_organization_kyc_stats

public.get_organization_kyc_stats()

## public.get_organization_kyc_status

public.get_organization_kyc_status( p_organization_id UUID, p_merchant_id UUID )

## public.get_organization_stats

public.get_organization_stats()

## public.get_organizations_by_country

public.get_organizations_by_country()

## public.get_organizations_by_industry

public.get_organizations_by_industry()

## public.get_payment_link

public.get_payment_link( p_link_id UUID, p_merchant_id UUID DEFAULT NULL, p_organization_id UUID DEFAULT NULL )

## public.get_payment_link_available_providers

public.get_payment_link_available_providers( p_organization_id UUID )

## public.get_payout_status

public.get_payout_status( p_payout_id UUID )

## public.get_payout_status_by_wave_id

public.get_payout_status_by_wave_id( p_wave_payout_id TEXT )

## public.get_pending_beneficiary_payout_amount

public.get_pending_beneficiary_payout_amount( p_merchant_id UUID, p_start_date TIMESTAMPTZ DEFAULT NULL, p_end_date TIMESTAMPTZ DEFAULT NULL )

## public.get_plan_by_id

public.get_plan_by_id(product_id UUID)

## public.get_pos_completion_rate

public.get_pos_completion_rate( p_organization_id UUID, p_date_range TEXT DEFAULT NULL, p_custom_start TEXT DEFAULT NULL, p_custom_end TEXT DEFAULT NULL )

## public.get_pos_total_revenue

public.get_pos_total_revenue( p_organization_id UUID, p_date_range TEXT DEFAULT NULL, p_custom_start TEXT DEFAULT NULL, p_custom_end TEXT DEFAULT NULL )

## public.get_pos_transaction_count

public.get_pos_transaction_count( p_organization_id UUID, p_date_range TEXT DEFAULT NULL, p_custom_start TEXT DEFAULT NULL, p_custom_end TEXT DEFAULT NULL )

## public.get_pos_transactions

public.get_pos_transactions( p_organization_id UUID, p_limit INTEGER DEFAULT 50, p_offset INTEGER DEFAULT 0 )

## public.get_post_checkout_details

public.get_post_checkout_details( p_checkout_session_id UUID )

## public.get_product

public.get_product( p_product_id UUID, p_merchant_id UUID )

## public.get_product_by_id

public.get_product_by_id( p_product_id UUID, p_organization_id UUID )

## public.get_product_by_price_id

public.get_product_by_price_id( p_price_id UUID, p_environment VARCHAR DEFAULT 'live' )

## public.get_product_by_product_id

public.get_product_by_product_id( p_product_id UUID )

## public.get_product_for_checkout

public.get_product_for_checkout( p_product_id UUID, p_merchant_id UUID )

## public.get_product_service

public.get_product_service( p_product_id UUID, p_merchant_id UUID DEFAULT NULL -- Optional merchant ID check )

## public.get_provider_merchant_id

public.get_provider_merchant_id( p_organization_id UUID, p_provider_code provider_code )

## public.get_public_organization_by_slug

public.get_public_organization_by_slug(p_slug TEXT)

## public.get_public_product_by_id

public.get_public_product_by_id(p_product_id UUID, p_org_slug TEXT)

## public.get_public_products_by_org_slug

public.get_public_products_by_org_slug(p_slug TEXT)

## public.get_qr_code_statistics

public.get_qr_code_statistics( p_qr_code_id UUID )

## public.get_qr_code_transactions

public.get_qr_code_transactions( p_qr_code_id UUID, p_limit INTEGER DEFAULT 10, p_offset INTEGER DEFAULT 0 )

## public.get_refund

public.get_refund( p_refund_id UUID, p_organization_id UUID )

## public.get_retryable_webhooks

public.get_retryable_webhooks( p_max_retries INTEGER DEFAULT 5 )

## public.get_sales_intensity_level

public.get_sales_intensity_level( p_sales_count BIGINT )

## public.get_statement_data_for_pdf

public.get_statement_data_for_pdf( p_invoice_id UUID )

## public.get_storefront

public.get_storefront(org_id UUID)

## public.get_storefront_customers

public.get_storefront_customers(org_id UUID)

## public.get_stripe_connect_account

public.get_stripe_connect_account(p_stripe_account_id VARCHAR)

## public.get_stripe_connect_info

public.get_stripe_connect_info(p_organization_id UUID)

## public.get_subscription_currency

public.get_subscription_currency( p_subscription_id UUID )

## public.get_subscription_plan

public.get_subscription_plan( p_product_id UUID, p_merchant_id UUID )

## public.get_subscription_stats

public.get_subscription_stats()

## public.get_subscriptions_by_plan

public.get_subscriptions_by_plan()

## public.get_team_members_stats

public.get_team_members_stats()

## public.get_top_performing_products

public.get_top_performing_products()

## public.get_total_beneficiary_payout_amount

public.get_total_beneficiary_payout_amount( p_merchant_id UUID, p_start_date TIMESTAMPTZ DEFAULT NULL, p_end_date TIMESTAMPTZ DEFAULT NULL )

## public.get_transaction

public.get_transaction( p_transaction_id UUID )

## public.get_transaction_stats

public.get_transaction_stats()

## public.get_transaction_stats_by_merchant

public.get_transaction_stats_by_merchant()

## public.get_transaction_stats_by_provider

public.get_transaction_stats_by_provider()

## public.get_transaction_status

public.get_transaction_status( p_transaction_id UUID )

## public.get_transactions_by_date

public.get_transactions_by_date()

## public.get_transactions_by_provider

public.get_transactions_by_provider()

## public.get_transactions_by_status

public.get_transactions_by_status()

## public.get_wave_payment_status

public.get_wave_payment_status( p_provider_checkout_id VARCHAR )

## public.get_wave_transaction_by_checkout_id

public.get_wave_transaction_by_checkout_id( p_provider_checkout_id VARCHAR )

## public.get_webhook

public.get_webhook( p_webhook_id UUID, p_merchant_id UUID )

## public.get_webhook_delivery_logs

public.get_webhook_delivery_logs( p_webhook_id UUID, p_merchant_id UUID, p_success_only BOOLEAN DEFAULT FALSE, p_failed_only BOOLEAN DEFAULT FALSE, p_limit INT DEFAULT 25, p_offset INT DEFAULT 0 )

## public.get_withdrawal_notification_emails

public.get_withdrawal_notification_emails()

## public.handle_job_application_rejection

public.handle_job_application_rejection()

## public.handle_payment_link_expiration_changes

public.handle_payment_link_expiration_changes()

## public.handle_stripe_dispute_created

public.handle_stripe_dispute_created( p_stripe_dispute_id VARCHAR, p_stripe_charge_id VARCHAR, p_payment_intent_id VARCHAR, p_amount NUMERIC, p_currency VARCHAR, p_reason TEXT, p_dispute_data JSONB DEFAULT '{}'::jsonb )

## public.handle_stripe_dispute_updated

public.handle_stripe_dispute_updated( p_stripe_dispute_id VARCHAR, p_status VARCHAR, p_dispute_data JSONB DEFAULT '{}'::jsonb )

## public.handle_stripe_payment_failure

public.handle_stripe_payment_failure( p_payment_intent_id VARCHAR, p_checkout_session_id UUID, p_failure_code VARCHAR DEFAULT NULL, p_failure_message TEXT DEFAULT NULL )

## public.handle_stripe_payment_success

public.handle_stripe_payment_success( p_payment_intent_id VARCHAR, p_checkout_session_id UUID, p_organization_id UUID, p_amount NUMERIC, p_currency VARCHAR, p_platform_fee NUMERIC, p_merchant_net_amount NUMERIC, p_merchant_id UUID DEFAULT NULL -- Optional: may not be available in webhook context )

## public.handle_stripe_refund

public.handle_stripe_refund( p_stripe_charge_id VARCHAR, p_payment_intent_id VARCHAR, p_refund_amount NUMERIC, p_refund_id VARCHAR, p_reason TEXT DEFAULT NULL )

## public.handle_subscription_failed_payment

public.handle_subscription_failed_payment( p_subscription_id UUID )

## public.handle_system_invitation

public.handle_system_invitation()

## public.handle_updated_at

public.handle_updated_at()

## public.increment_coupon_usage_for_completed_transaction

public.increment_coupon_usage_for_completed_transaction( p_transaction_id UUID )

## public.initialize_organization_fees

public.initialize_organization_fees( p_organization_id UUID )

## public.initiate_withdrawal

public.initiate_withdrawal( p_merchant_id UUID, p_amount NUMERIC(10,2), p_payout_method_id UUID, p_currency_code currency_code DEFAULT 'XOF', p_provider_code provider_code DEFAULT NULL )

## public.invite_team_member

public.invite_team_member( p_organization_id UUID, p_email VARCHAR, p_role member_role, p_position VARCHAR )

## public.is_organization_admin

public.is_organization_admin(p_organization_id UUID)

## public.is_uemoa_country

public.is_uemoa_country(country_code VARCHAR)

## public.list_checkout_sessions

public.list_checkout_sessions( p_merchant_id UUID, p_status checkout_session_status DEFAULT NULL, p_limit INTEGER DEFAULT 20, p_offset INTEGER DEFAULT 0 )

## public.list_customer_subscriptions

public.list_customer_subscriptions( p_merchant_id UUID, p_customer_id UUID DEFAULT NULL, p_status subscription_status DEFAULT NULL, p_limit INTEGER DEFAULT 20, p_offset INTEGER DEFAULT 0 )

## public.list_customers

public.list_customers( p_merchant_id UUID, p_email VARCHAR DEFAULT NULL, p_phone_number VARCHAR DEFAULT NULL, p_limit INTEGER DEFAULT 20, p_offset INTEGER DEFAULT 0 )

## public.list_products

public.list_products( p_merchant_id UUID, p_limit INTEGER DEFAULT 20, p_offset INTEGER DEFAULT 0 )

## public.list_products_service

public.list_products_service( p_merchant_id UUID, p_is_active BOOLEAN DEFAULT NULL, p_limit INTEGER DEFAULT 15, p_offset INTEGER DEFAULT 0 )

## public.list_subscription_plans

public.list_subscription_plans( p_merchant_id UUID, p_limit INTEGER DEFAULT 20, p_offset INTEGER DEFAULT 0 )

## public.list_transactions

public.list_transactions( p_organization_id UUID, p_status transaction_status[] DEFAULT NULL, p_provider provider_code DEFAULT NULL, p_start_date TIMESTAMPTZ DEFAULT NULL, p_end_date TIMESTAMPTZ DEFAULT NULL, p_limit INTEGER DEFAULT 20, p_offset INTEGER DEFAULT 0 )

## public.log_api_error

public.log_api_error( p_error_type VARCHAR, p_error_message TEXT, p_stack_trace TEXT DEFAULT NULL, p_context JSONB DEFAULT '{}'::JSONB )

## public.log_api_key_events

public.log_api_key_events()

## public.log_api_usage

public.log_api_usage( p_organization_id UUID, p_api_key VARCHAR, p_endpoint VARCHAR, p_request_method VARCHAR, p_response_status INT, p_response_time FLOAT, p_ip_address VARCHAR )

## public.log_bank_account_events

public.log_bank_account_events()

## public.log_event

public.log_event( p_merchant_id UUID, p_event event_type, p_details JSONB DEFAULT NULL, p_severity VARCHAR DEFAULT 'NOTICE', p_request_url VARCHAR DEFAULT NULL, p_request_method VARCHAR DEFAULT NULL, p_response_status INTEGER DEFAULT NULL, p_organization_id UUID DEFAULT NULL )

## public.log_payout_notifications

public.log_payout_notifications()

## public.log_product_events

public.log_product_events()

## public.log_refund_events

public.log_refund_events()

## public.log_user_auth_events

public.log_user_auth_events()

## public.log_webhook_delivery

public.log_webhook_delivery( p_webhook_id UUID, p_merchant_id UUID, p_organization_id UUID, p_event_type TEXT, p_payload JSONB, p_response_status INT, p_response_body TEXT, p_attempt_number INT DEFAULT 1, p_headers JSONB DEFAULT NULL, p_request_duration_ms INT DEFAULT NULL, p_ip_address TEXT DEFAULT NULL, p_user_agent TEXT DEFAULT NULL )

## public.log_webhook_events

public.log_webhook_events()

## public.manage_organization_fee_type

public.manage_organization_fee_type( p_organization_id UUID, p_fee_type_id UUID DEFAULT NULL, p_name VARCHAR DEFAULT NULL, p_percentage NUMERIC DEFAULT NULL, p_fixed_amount NUMERIC DEFAULT NULL, p_is_enabled BOOLEAN DEFAULT NULL )

## public.manually_expire_transactions

public.manually_expire_transactions(expiry_hours INTEGER DEFAULT 0.25)

## public.manually_send_subscription_renewal

public.manually_send_subscription_renewal( p_subscription_id UUID )

## public.manually_send_transaction_confirmation

public.manually_send_transaction_confirmation( p_transaction_id UUID )

## public.manually_send_withdrawal_confirmation

public.manually_send_withdrawal_confirmation( p_payout_id UUID )

## public.map_spi_status_to_transaction_status

public.map_spi_status_to_transaction_status( spi_status spi_payment_status )

## public.map_spi_webhook_event_to_webhook_event

public.map_spi_webhook_event_to_webhook_event( spi_event_code spi_webhook_event_code )

## public.mark_all_notifications_read

public.mark_all_notifications_read(p_merchant_id UUID)

## public.mark_notification_read

public.mark_notification_read(p_notification_id UUID)

## public.move_product_to_live

public.move_product_to_live( p_product_id UUID )

## public.move_webhook_to_live

public.move_webhook_to_live( p_webhook_id UUID )

## public.notify_new_activation_request

public.notify_new_activation_request()

## public.notify_new_signup

public.notify_new_signup()

## public.notify_provider_connected

public.notify_provider_connected()

## public.ping_api

public.ping_api()

## public.pre_apply_coupon_validation

public.pre_apply_coupon_validation( p_coupon_id UUID, p_organization_id UUID, p_customer_id UUID, p_quantity INT DEFAULT 1 )

## public.process_bnpl_installment_payment

public.process_bnpl_installment_payment( p_payment_request_id UUID, p_spi_tx_id VARCHAR, p_payment_status spi_payment_status )

## public.process_checkout_transaction

public.process_checkout_transaction( p_checkout_session_id UUID, p_payment_method_code payment_method_code, p_provider_code provider_code, p_provider_transaction_id VARCHAR(255) DEFAULT NULL, p_provider_payment_details JSONB DEFAULT NULL )

## public.process_payment

public.process_payment( p_organization_id UUID, p_amount NUMERIC, p_currency_code currency_code, p_provider_code provider_code, p_metadata JSONB DEFAULT NULL )

## public.process_subscription_renewal_notifications

public.process_subscription_renewal_notifications()

## public.reactivate_merchant

public.reactivate_merchant( p_merchant_id UUID )

## public.reactivate_valid_payment_links

public.reactivate_valid_payment_links()

## public.recalculate_all_organizations_mrr

public.recalculate_all_organizations_mrr()

## public.record_completed_payout_balance_history

public.record_completed_payout_balance_history()

## public.record_free_transaction

public.record_free_transaction( p_merchant_id UUID, p_organization_id UUID, p_customer_id UUID, p_link_id UUID, p_currency_code currency_code, p_original_amount NUMERIC(10,2), p_discount_amount NUMERIC(10,2), p_description TEXT DEFAULT NULL, p_product_id UUID DEFAULT NULL, p_subscription_id UUID DEFAULT NULL, p_coupon_id UUID DEFAULT NULL, p_additional_coupon_ids UUID[] DEFAULT NULL, p_quantity INT DEFAULT 1, p_environment VARCHAR DEFAULT 'live' )

## public.remove_team_member

public.remove_team_member( p_organization_id UUID, p_merchant_id UUID )

## public.remove_withdrawal_notification_email

public.remove_withdrawal_notification_email( p_email VARCHAR )

## public.retry_webhook_delivery

public.retry_webhook_delivery( p_webhook_id UUID, p_log_id UUID, p_merchant_id UUID -- Added merchant ID for authorization )

## public.revoke_api_key

public.revoke_api_key( p_api_key TEXT, p_merchant_id UUID )

## public.rollover_provider_balance_quarterly

public.rollover_provider_balance_quarterly()

## public.safe_delete_payment_link

public.safe_delete_payment_link( p_link_id UUID )

## public.save_conversion_rates

public.save_conversion_rates( p_from_currency currency_code, p_to_currency currency_code, p_rate NUMERIC(20,8) )

## public.save_integration_click

public.save_integration_click( p_organization_id UUID, p_integration TEXT )

## public.send_activation_request_notification

public.send_activation_request_notification( merchant_id UUID, legal_name TEXT, signatory_name TEXT, signatory_email TEXT, business_description TEXT, country TEXT, request_date TIMESTAMPTZ )

## public.send_feedback_notification

public.send_feedback_notification( p_merchant_name TEXT, p_merchant_email TEXT, p_sentiment VARCHAR(30), p_message TEXT, p_created_at TIMESTAMPTZ )

## public.send_job_application_confirmation

public.send_job_application_confirmation( p_job_title TEXT, p_applicant_name TEXT, p_applicant_email TEXT, p_applied_at TIMESTAMPTZ )

## public.send_job_application_notification

public.send_job_application_notification( p_job_title TEXT, p_applicant_name TEXT, p_applicant_email TEXT, p_linkedin_url TEXT, p_github_url TEXT, p_project_note TEXT, p_resume_url TEXT, p_applied_at TIMESTAMPTZ )

## public.send_job_application_rejection

public.send_job_application_rejection( p_job_title TEXT, p_applicant_name TEXT, p_applicant_email TEXT )

## public.send_kyc_approved_email

public.send_kyc_approved_email()

## public.send_kyc_resubmitted_email

public.send_kyc_resubmitted_email()

## public.send_merchant_support_confirmation

public.send_merchant_support_confirmation( p_merchant_email TEXT, p_support_request_id UUID )

## public.send_onboarding_notifications

public.send_onboarding_notifications()

## public.send_onboarding_welcome_email

public.send_onboarding_welcome_email(user_email TEXT, user_name TEXT)

## public.send_provider_connected_notification

public.send_provider_connected_notification( p_organization_id UUID, p_provider_code provider_code )

## public.send_provider_connected_notification_async

public.send_provider_connected_notification_async( p_organization_id UUID, p_provider_code provider_code )

## public.send_signup_notification

public.send_signup_notification( merchant_name TEXT, merchant_email TEXT, signup_date TIMESTAMPTZ )

## public.send_subscription_renewal_email

public.send_subscription_renewal_email( p_subscription_id UUID, p_checkout_url TEXT DEFAULT NULL, p_template_type TEXT DEFAULT 'standard_template' )

## public.send_support_request_notification

public.send_support_request_notification( p_merchant_name TEXT, p_merchant_email TEXT, p_category support_category, p_message TEXT, p_image_url TEXT, p_created_at TIMESTAMPTZ )

## public.send_transaction_confirmation_email

public.send_transaction_confirmation_email( p_transaction_id UUID )

## public.send_transaction_confirmation_email_trigger

public.send_transaction_confirmation_email_trigger()

## public.send_transaction_receipt_email

public.send_transaction_receipt_email( p_transaction_id UUID )

## public.send_withdrawal_confirmation_email

public.send_withdrawal_confirmation_email( p_payout_id UUID )

## public.send_withdrawal_confirmation_email_trigger

public.send_withdrawal_confirmation_email_trigger()

## public.set_default_payout_method

public.set_default_payout_method(p_payout_method_id UUID)

## public.set_default_price

public.set_default_price( p_price_id UUID, p_product_id UUID )

## public.simple_update_transaction_status

public.simple_update_transaction_status( p_transaction_id UUID, p_status transaction_status, p_metadata JSONB DEFAULT NULL )

## public.skip_onboarding

public.skip_onboarding(p_merchant_id UUID, p_org_name TEXT DEFAULT NULL)

## public.soft_delete_merchant

public.soft_delete_merchant( p_merchant_id UUID )

## public.soft_delete_organization

public.soft_delete_organization( p_merchant_id UUID, p_organization_id UUID )

## public.sync_spi_payment_request_status

public.sync_spi_payment_request_status()

## public.sync_spi_transaction_status

public.sync_spi_transaction_status()

## public.sync_stripe_connect_status_to_provider_settings

public.sync_stripe_connect_status_to_provider_settings()

## public.test_organization_webhook

public.test_organization_webhook( p_webhook_id UUID, p_merchant_id UUID )

## public.test_webhook

public.test_webhook( p_webhook_id UUID, p_merchant_id UUID )

## public.test_withdrawal_notification_email

public.test_withdrawal_notification_email( p_payout_id UUID )

## public.toggle_bnpl_for_organization

public.toggle_bnpl_for_organization( p_organization_id UUID, p_currency_code currency_code DEFAULT 'XOF', p_enable BOOLEAN DEFAULT true )

## public.trigger_exists

public.trigger_exists(p_table_name text, p_trigger_name text)

## public.trigger_free_transaction_webhook

public.trigger_free_transaction_webhook( p_transaction_id UUID )

## public.unarchive_payment_link

public.unarchive_payment_link( p_link_id UUID )

## public.unban_user

public.unban_user(user_id UUID)

## public.update_api_key_status

public.update_api_key_status( p_api_key VARCHAR, p_is_active BOOLEAN, p_merchant_id UUID )

## public.update_assistant_conversation_title

public.update_assistant_conversation_title( p_conversation_id UUID, p_merchant_id UUID, p_title VARCHAR(255) )

## public.update_auto_withdrawal_settings

public.update_auto_withdrawal_settings( p_payout_method_id UUID, p_enabled BOOLEAN, p_day INT, p_method VARCHAR DEFAULT 'bank', p_mobile_money_provider provider_code DEFAULT NULL )

## public.update_balances_for_transaction

public.update_balances_for_transaction( p_transaction_id UUID )

## public.update_beneficiary_payout_status

public.update_beneficiary_payout_status( p_payout_id UUID, p_status payout_status, p_wave_data JSONB DEFAULT NULL )

## public.update_bnpl_interest_rate

public.update_bnpl_interest_rate( p_organization_id UUID, p_currency_code currency_code, p_new_rate NUMERIC )

## public.update_checkout_session_customer

public.update_checkout_session_customer( p_checkout_session_id UUID, p_customer_id UUID, p_customer_email VARCHAR(255) DEFAULT NULL, p_customer_name VARCHAR(255) DEFAULT NULL, p_customer_phone VARCHAR(50) DEFAULT NULL )

## public.update_checkout_session_status

public.update_checkout_session_status( p_checkout_session_id UUID, p_status checkout_session_status )

## public.update_cli_device_request_status

public.update_cli_device_request_status( p_device_code TEXT, p_new_status public.cli_device_request_status )

## public.update_conversation_last_message

public.update_conversation_last_message()

## public.update_coupon_status

public.update_coupon_status( p_coupon_id UUID, p_is_active BOOLEAN )

## public.update_customer

public.update_customer( p_customer_id UUID, p_name VARCHAR, p_email VARCHAR, p_phone_number VARCHAR DEFAULT NULL, p_whatsapp_number VARCHAR DEFAULT NULL, p_country VARCHAR DEFAULT '', p_city VARCHAR DEFAULT '', p_address VARCHAR DEFAULT '', p_postal_code VARCHAR DEFAULT '', p_is_business BOOLEAN DEFAULT false )

## public.update_customer_notifications

public.update_customer_notifications( p_organization_id UUID, p_notifications JSONB )

## public.update_customer_subscription

public.update_customer_subscription( p_subscription_id UUID, p_merchant_id UUID, p_status subscription_status DEFAULT NULL, p_start_date TIMESTAMPTZ DEFAULT NULL, p_end_date TIMESTAMPTZ DEFAULT NULL, p_next_billing_date TIMESTAMPTZ DEFAULT NULL, p_metadata JSONB DEFAULT NULL )

## public.update_installment_plan_status

public.update_installment_plan_status()

## public.update_kyc_document_url

public.update_kyc_document_url( p_organization_id UUID, p_document_type VARCHAR, p_document_url VARCHAR )

## public.update_merchant_account_after_transaction

public.update_merchant_account_after_transaction()

## public.update_merchant_account_balance

public.update_merchant_account_balance( p_merchant_id UUID, p_organization_id UUID, p_amount NUMERIC, p_currency_code public.currency_code, p_record_history BOOLEAN DEFAULT TRUE )

## public.update_merchant_avatar

public.update_merchant_avatar( p_merchant_id UUID, p_avatar_url TEXT )

## public.update_merchant_details

public.update_merchant_details( p_merchant_id UUID, p_name VARCHAR, p_email VARCHAR, p_phone_number VARCHAR, p_preferred_language VARCHAR(10) )

## public.update_merchant_recipients

public.update_merchant_recipients( p_organization_id UUID, p_recipients JSONB )

## public.update_merchant_record

public.update_merchant_record()

## public.update_mtn_provider_reference

public.update_mtn_provider_reference( p_transaction_id UUID, p_provider_reference_id TEXT )

## public.update_mtn_transaction_status

public.update_mtn_transaction_status( p_external_id TEXT, p_provider_reference_id TEXT, p_payment_status provider_payment_status, p_error_code VARCHAR DEFAULT NULL, p_error_message TEXT DEFAULT NULL, p_metadata JSONB DEFAULT NULL )

## public.update_organization_balance_for_refund

public.update_organization_balance_for_refund( p_transaction_id UUID, p_refund_amount NUMERIC, p_processing_fee_percentage NUMERIC DEFAULT 2.0 )

## public.update_organization_checkout_settings

public.update_organization_checkout_settings( p_organization_id UUID, p_settings JSONB )

## public.update_organization_details

public.update_organization_details( p_organization_id UUID, p_name VARCHAR, p_email VARCHAR, p_website_url VARCHAR, p_verification_status VARCHAR, p_default_currency VARCHAR )

## public.update_organization_logo

public.update_organization_logo( p_organization_id UUID, p_logo_url VARCHAR )

## public.update_organization_mrr_trigger

public.update_organization_mrr_trigger()

## public.update_organization_pin_code

public.update_organization_pin_code( p_organization_id UUID, p_merchant_id UUID, p_pin_code VARCHAR(4) DEFAULT NULL )

## public.update_organization_provider_connection

public.update_organization_provider_connection( p_organization_id UUID, p_provider_code provider_code, p_is_connected BOOLEAN, p_provider_merchant_id VARCHAR DEFAULT NULL, p_metadata JSONB DEFAULT NULL )

## public.update_organization_provider_phone

public.update_organization_provider_phone( p_organization_id UUID, p_provider_code provider_code, p_phone_number VARCHAR, p_is_phone_verified BOOLEAN DEFAULT false )

## public.update_organization_storefront

public.update_organization_storefront( p_organization_id UUID, p_storefront_enabled BOOLEAN, p_merchant_id UUID )

## public.update_organization_verification_status

public.update_organization_verification_status()

## public.update_organization_webhook

public.update_organization_webhook( p_merchant_id UUID, p_webhook_id UUID, p_url VARCHAR, p_authorized_events webhook_event[], p_is_active BOOLEAN DEFAULT true, p_metadata JSONB DEFAULT '{}'::jsonb )

## public.update_organization_with_permissions

public.update_organization_with_permissions( p_organization_id UUID, p_merchant_id UUID, p_name VARCHAR, p_email VARCHAR, p_website_url VARCHAR, p_verification_status VARCHAR, p_default_currency VARCHAR )

## public.update_payment_link

public.update_payment_link( p_link_id UUID, p_title VARCHAR(255) DEFAULT NULL, p_description TEXT DEFAULT NULL, p_price NUMERIC(10,2) DEFAULT NULL, p_is_active BOOLEAN DEFAULT NULL, p_expires_at TIMESTAMPTZ DEFAULT NULL, p_success_url VARCHAR(2048) DEFAULT NULL, p_cancel_url VARCHAR(2048) DEFAULT NULL, p_allow_coupon_code BOOLEAN DEFAULT NULL, p_allow_quantity BOOLEAN DEFAULT NULL )

## public.update_payment_request_from_webhook

public.update_payment_request_from_webhook( p_spi_tx_id VARCHAR, p_spi_payment_status spi_payment_status, p_spi_rejection_reason spi_rejection_reason DEFAULT NULL )

## public.update_price

public.update_price( p_price_id UUID, p_amount NUMERIC(15,2) DEFAULT NULL, p_pricing_model public.pricing_model DEFAULT NULL, p_minimum_amount NUMERIC(15,2) DEFAULT NULL, p_maximum_amount NUMERIC(15,2) DEFAULT NULL, p_is_active BOOLEAN DEFAULT NULL, p_is_default BOOLEAN DEFAULT NULL, p_metadata JSONB DEFAULT NULL )

## public.update_product

public.update_product( p_product_id UUID, p_name VARCHAR(255) DEFAULT NULL, p_description TEXT DEFAULT NULL, p_product_type public.product_type DEFAULT NULL, p_image_url TEXT DEFAULT NULL, p_is_active BOOLEAN DEFAULT NULL, p_display_on_storefront BOOLEAN DEFAULT NULL, p_metadata JSONB DEFAULT NULL, p_fee_type_ids UUID[] DEFAULT NULL )

## public.update_product_service

public.update_product_service( p_product_id UUID, p_merchant_id UUID, -- For validation only p_is_active BOOLEAN DEFAULT NULL -- Allow updating only is_active )

## public.update_qr_code

public.update_qr_code( p_qr_code_id UUID, p_name VARCHAR DEFAULT NULL, p_is_active BOOLEAN DEFAULT NULL )

## public.update_refund_status

public.update_refund_status( p_refund_id UUID, p_organization_id UUID, p_status refund_status, p_updated_by UUID DEFAULT NULL )

## public.update_starter_business_kyc

public.update_starter_business_kyc( p_organization_id UUID, p_merchant_id UUID, p_tax_number VARCHAR DEFAULT NULL, p_business_description TEXT DEFAULT NULL, p_address_proof_url VARCHAR DEFAULT NULL, p_business_registration_url VARCHAR DEFAULT NULL, p_identity_proof_url VARCHAR DEFAULT NULL )

## public.update_starter_business_kyc_status

public.update_starter_business_kyc_status()

## public.update_stripe_checkout_status

public.update_stripe_checkout_status( p_stripe_payment_intent_id VARCHAR, p_stripe_charge_id VARCHAR DEFAULT NULL, p_payment_status provider_payment_status DEFAULT NULL, p_error_code VARCHAR DEFAULT NULL, p_error_message TEXT DEFAULT NULL, p_metadata JSONB DEFAULT NULL )

## public.update_stripe_connect_account

public.update_stripe_connect_account( p_stripe_account_id VARCHAR DEFAULT NULL, p_organization_id UUID DEFAULT NULL, p_stripe_account_type VARCHAR DEFAULT 'express', p_business_type VARCHAR DEFAULT NULL, p_company_domicile_country VARCHAR DEFAULT NULL, p_org_stripe_country VARCHAR DEFAULT NULL, p_charges_enabled BOOLEAN DEFAULT false, p_payouts_enabled BOOLEAN DEFAULT false, p_details_submitted BOOLEAN DEFAULT false, p_requirements_due JSONB DEFAULT '[]'::jsonb, p_requirements_eventually_due JSONB DEFAULT '[]'::jsonb, p_requirements_disabled_reason TEXT DEFAULT NULL, p_stripe_dashboard_url TEXT DEFAULT NULL, p_stripe_metadata JSONB DEFAULT '{}'::jsonb )

## public.update_stripe_connect_capabilities

public.update_stripe_connect_capabilities( p_stripe_account_id VARCHAR, p_capability_name VARCHAR, p_status VARCHAR, p_requirements JSONB DEFAULT NULL )

## public.update_subscription_next_billing_date

public.update_subscription_next_billing_date( p_subscription_id UUID )

## public.update_subscription_status

public.update_subscription_status( p_subscription_id UUID, p_status subscription_status, p_end_date DATE DEFAULT NULL, p_metadata TEXT DEFAULT NULL )

## public.update_subscription_status_on_transaction_completion

public.update_subscription_status_on_transaction_completion()

## public.update_support_request_timestamp

public.update_support_request_timestamp()

## public.update_team_member_role

public.update_team_member_role( p_organization_id UUID, p_merchant_id UUID, p_new_role member_role )

## public.update_transaction_status

public.update_transaction_status( p_transaction_id UUID, p_status transaction_status, p_metadata JSONB DEFAULT NULL )

## public.update_updated_at_column

public.update_updated_at_column()

## public.update_wave_checkout_status

public.update_wave_checkout_status( p_provider_checkout_id VARCHAR, p_provider_transaction_id VARCHAR DEFAULT NULL, p_payment_status provider_payment_status DEFAULT NULL, p_error_code VARCHAR DEFAULT NULL, p_error_message TEXT DEFAULT NULL, p_metadata JSONB DEFAULT NULL )

## public.update_wave_payout_status

public.update_wave_payout_status( p_transaction_id UUID, p_wave_status VARCHAR, p_wave_data JSONB )

## public.update_wave_transaction_id

public.update_wave_transaction_id( p_provider_checkout_id VARCHAR, p_provider_transaction_id VARCHAR )

## public.update_webhook

public.update_webhook( p_webhook_id UUID, p_merchant_id UUID, p_url TEXT DEFAULT NULL, p_authorized_events webhook_event[] DEFAULT NULL, p_is_active BOOLEAN DEFAULT NULL, p_metadata JSONB DEFAULT NULL )

## public.update_webhook_delivery_status

public.update_webhook_delivery_status( p_webhook_id UUID, p_last_response_status INT, p_last_response_body TEXT, p_last_payload JSONB )

## public.upsert_storefront

public.upsert_storefront( p_merchant_id UUID, p_organization_id UUID, p_name TEXT, p_description TEXT DEFAULT NULL, p_theme_color TEXT DEFAULT '#3B82F6' )

## public.validate_api_key

public.validate_api_key(p_api_key VARCHAR)

## public.validate_coupon_for_checkout

public.validate_coupon_for_checkout( p_organization_id UUID, p_coupon_code VARCHAR(50), p_product_id UUID DEFAULT NULL, p_quantity INT DEFAULT 1, p_customer_id UUID DEFAULT NULL )

## public.validate_coupon_for_frontend

public.validate_coupon_for_frontend( p_organization_id UUID, p_coupon_code VARCHAR(50), p_customer_id UUID DEFAULT NULL, p_product_id UUID DEFAULT NULL, p_quantity INT DEFAULT 1, p_subtotal NUMERIC(10,2) DEFAULT 0 )

## public.validate_coupon_for_price

public.validate_coupon_for_price( p_coupon_code VARCHAR(50), p_price_id UUID, p_customer_id UUID, p_organization_id UUID )

## public.validate_price_count

public.validate_price_count()

## public.verify_2fa_login

public.verify_2fa_login( p_merchant_id UUID, p_verification_code TEXT )

## public.verify_api_key

public.verify_api_key( p_api_key VARCHAR, p_endpoint VARCHAR, p_request_method VARCHAR DEFAULT 'GET', p_ip_address VARCHAR DEFAULT NULL )

## public.verify_totp_code

public.verify_totp_code( secret TEXT, token TEXT )

## secrets.get_resend_api_key

secrets.get_resend_api_key()

## shopify.delete_session

shopify.delete_session(p_id TEXT)

## shopify.delete_sessions

shopify.delete_sessions(p_ids TEXT[])

## shopify.find_sessions_by_shop

shopify.find_sessions_by_shop(p_shop TEXT)

## shopify.get_lomi_api_key

shopify.get_lomi_api_key( p_store_id UUID )

## shopify.install_store

shopify.install_store( p_organization_id UUID, p_shop_domain VARCHAR, p_access_token VARCHAR, p_scope VARCHAR[] )

## shopify.manage_session

shopify.manage_session( p_id TEXT, p_shop TEXT, p_state TEXT, p_is_online BOOLEAN, p_scope TEXT, p_expires TIMESTAMPTZ, p_access_token TEXT, p_user_id BIGINT, p_first_name TEXT, p_last_name TEXT, p_email TEXT, p_account_owner BOOLEAN, p_locale TEXT, p_collaborator BOOLEAN, p_email_verified BOOLEAN, p_expires_in INTEGER, p_associated_user_scope TEXT )

## shopify.register_webhook

shopify.register_webhook( p_store_id UUID, p_topic VARCHAR, p_address VARCHAR, p_shopify_webhook_id VARCHAR )

## shopify.upsert_lomi_api_key

shopify.upsert_lomi_api_key( p_store_id UUID, p_lomi_api_key TEXT )

## shopify.validate_and_store_lomi_key_for_shop

shopify.validate_and_store_lomi_key_for_shop( p_shop_domain TEXT, p_lomi_api_key_to_validate TEXT )

