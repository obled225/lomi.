export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      account_balance_history: {
        Row: {
          account_id: string
          change_amount: number
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string | null
          history_id: string
          merchant_id: string | null
          new_balance: number
          operation_type: string
          organization_id: string
          payment_request_id: string | null
          payout_id: string | null
          previous_balance: number
          reference_id: string | null
          reference_type: string | null
          refund_id: string | null
          spi_account_number: string | null
          spi_date_envoi: string | null
          spi_date_irrevocabilite: string | null
          spi_statut: Database["public"]["Enums"]["spi_payment_status"] | null
          spi_tx_id: string | null
          transaction_id: string | null
        }
        Insert: {
          account_id: string
          change_amount: number
          created_at?: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description?: string | null
          history_id?: string
          merchant_id?: string | null
          new_balance: number
          operation_type: string
          organization_id: string
          payment_request_id?: string | null
          payout_id?: string | null
          previous_balance: number
          reference_id?: string | null
          reference_type?: string | null
          refund_id?: string | null
          spi_account_number?: string | null
          spi_date_envoi?: string | null
          spi_date_irrevocabilite?: string | null
          spi_statut?: Database["public"]["Enums"]["spi_payment_status"] | null
          spi_tx_id?: string | null
          transaction_id?: string | null
        }
        Update: {
          account_id?: string
          change_amount?: number
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          description?: string | null
          history_id?: string
          merchant_id?: string | null
          new_balance?: number
          operation_type?: string
          organization_id?: string
          payment_request_id?: string | null
          payout_id?: string | null
          previous_balance?: number
          reference_id?: string | null
          reference_type?: string | null
          refund_id?: string | null
          spi_account_number?: string | null
          spi_date_envoi?: string | null
          spi_date_irrevocabilite?: string | null
          spi_statut?: Database["public"]["Enums"]["spi_payment_status"] | null
          spi_tx_id?: string | null
          transaction_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "account_balance_history_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "merchant_accounts"
            referencedColumns: ["account_id"]
          },
          {
            foreignKeyName: "account_balance_history_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "merchant_balance_summary"
            referencedColumns: ["account_id"]
          },
          {
            foreignKeyName: "account_balance_history_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "account_balance_history_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "account_balance_history_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "account_balance_history_payment_request_id_fkey"
            columns: ["payment_request_id"]
            isOneToOne: false
            referencedRelation: "payment_requests"
            referencedColumns: ["request_id"]
          },
          {
            foreignKeyName: "account_balance_history_payout_id_fkey"
            columns: ["payout_id"]
            isOneToOne: false
            referencedRelation: "payouts"
            referencedColumns: ["payout_id"]
          },
          {
            foreignKeyName: "account_balance_history_refund_id_fkey"
            columns: ["refund_id"]
            isOneToOne: false
            referencedRelation: "refunds"
            referencedColumns: ["refund_id"]
          },
          {
            foreignKeyName: "account_balance_history_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["transaction_id"]
          },
        ]
      }
      api_error_logs: {
        Row: {
          context: Json | null
          created_at: string
          error_id: string
          error_message: string
          error_type: string
          stack_trace: string | null
        }
        Insert: {
          context?: Json | null
          created_at?: string
          error_id?: string
          error_message: string
          error_type: string
          stack_trace?: string | null
        }
        Update: {
          context?: Json | null
          created_at?: string
          error_id?: string
          error_message?: string
          error_type?: string
          stack_trace?: string | null
        }
        Relationships: []
      }
      api_interactions: {
        Row: {
          api_key: string
          created_at: string
          endpoint: string
          interaction_id: string
          organization_id: string
          request_method: string
          request_payload: Json | null
          response_payload: Json | null
          response_status: number | null
          response_time: number | null
        }
        Insert: {
          api_key: string
          created_at?: string
          endpoint: string
          interaction_id?: string
          organization_id: string
          request_method: string
          request_payload?: Json | null
          response_payload?: Json | null
          response_status?: number | null
          response_time?: number | null
        }
        Update: {
          api_key?: string
          created_at?: string
          endpoint?: string
          interaction_id?: string
          organization_id?: string
          request_method?: string
          request_payload?: Json | null
          response_payload?: Json | null
          response_status?: number | null
          response_time?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "api_interactions_api_key_fkey"
            columns: ["api_key"]
            isOneToOne: false
            referencedRelation: "api_keys"
            referencedColumns: ["api_key"]
          },
          {
            foreignKeyName: "api_interactions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      api_keys: {
        Row: {
          api_key: string
          created_at: string
          environment: string
          expiration_date: string | null
          is_active: boolean
          merchant_id: string
          name: string
          organization_id: string
          updated_at: string
        }
        Insert: {
          api_key: string
          created_at?: string
          environment?: string
          expiration_date?: string | null
          is_active?: boolean
          merchant_id: string
          name: string
          organization_id: string
          updated_at?: string
        }
        Update: {
          api_key?: string
          created_at?: string
          environment?: string
          expiration_date?: string | null
          is_active?: boolean
          merchant_id?: string
          name?: string
          organization_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "api_keys_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "api_keys_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      api_rate_limits: {
        Row: {
          api_key: string
          current_usage: number
          endpoint: string
          last_reset_at: string
          organization_id: string
          requests_limit: number
          time_window: unknown
        }
        Insert: {
          api_key: string
          current_usage?: number
          endpoint: string
          last_reset_at?: string
          organization_id: string
          requests_limit: number
          time_window: unknown
        }
        Update: {
          api_key?: string
          current_usage?: number
          endpoint?: string
          last_reset_at?: string
          organization_id?: string
          requests_limit?: number
          time_window?: unknown
        }
        Relationships: [
          {
            foreignKeyName: "api_rate_limits_api_key_fkey"
            columns: ["api_key"]
            isOneToOne: false
            referencedRelation: "api_keys"
            referencedColumns: ["api_key"]
          },
          {
            foreignKeyName: "api_rate_limits_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      api_usage: {
        Row: {
          api_key: string
          endpoint: string
          ip_address: string | null
          last_request_at: string
          organization_id: string
          request_count: number
          request_method: string | null
          response_status: number | null
          response_time: number | null
        }
        Insert: {
          api_key: string
          endpoint: string
          ip_address?: string | null
          last_request_at?: string
          organization_id: string
          request_count?: number
          request_method?: string | null
          response_status?: number | null
          response_time?: number | null
        }
        Update: {
          api_key?: string
          endpoint?: string
          ip_address?: string | null
          last_request_at?: string
          organization_id?: string
          request_count?: number
          request_method?: string | null
          response_status?: number | null
          response_time?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "api_usage_api_key_fkey"
            columns: ["api_key"]
            isOneToOne: true
            referencedRelation: "api_keys"
            referencedColumns: ["api_key"]
          },
          {
            foreignKeyName: "api_usage_organization_id_api_key_fkey"
            columns: ["organization_id", "api_key"]
            isOneToOne: false
            referencedRelation: "api_keys"
            referencedColumns: ["organization_id", "api_key"]
          },
          {
            foreignKeyName: "api_usage_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      assistant_conversations: {
        Row: {
          conversation_id: string
          created_at: string
          deleted_at: string | null
          is_deleted: boolean
          last_message_at: string
          merchant_id: string
          metadata: Json | null
          organization_id: string | null
          title: string | null
          updated_at: string
        }
        Insert: {
          conversation_id?: string
          created_at?: string
          deleted_at?: string | null
          is_deleted?: boolean
          last_message_at?: string
          merchant_id: string
          metadata?: Json | null
          organization_id?: string | null
          title?: string | null
          updated_at?: string
        }
        Update: {
          conversation_id?: string
          created_at?: string
          deleted_at?: string | null
          is_deleted?: boolean
          last_message_at?: string
          merchant_id?: string
          metadata?: Json | null
          organization_id?: string | null
          title?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "assistant_conversations_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "assistant_conversations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      assistant_feedback: {
        Row: {
          created_at: string
          id: string
          merchant_id: string
          message: string
          sentiment: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          merchant_id: string
          message: string
          sentiment: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          merchant_id?: string
          message?: string
          sentiment?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "assistant_feedback_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
        ]
      }
      assistant_messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string
          message_id: string
          message_index: number
          metadata: Json | null
          model_used: string | null
          response_time_ms: number | null
          role: string
          tokens_used: number | null
        }
        Insert: {
          content: string
          conversation_id: string
          created_at?: string
          message_id?: string
          message_index: number
          metadata?: Json | null
          model_used?: string | null
          response_time_ms?: number | null
          role: string
          tokens_used?: number | null
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string
          message_id?: string
          message_index?: number
          metadata?: Json | null
          model_used?: string | null
          response_time_ms?: number | null
          role?: string
          tokens_used?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "assistant_messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "assistant_conversations"
            referencedColumns: ["conversation_id"]
          },
        ]
      }
      beneficiary_payouts: {
        Row: {
          account_id: string
          amount: number
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          merchant_id: string
          metadata: Json | null
          organization_id: string | null
          payment_method_code:
            | Database["public"]["Enums"]["payment_method_code"]
            | null
          payout_id: string
          payout_method_id: string | null
          provider_code: Database["public"]["Enums"]["provider_code"] | null
          spi_bulk_instruction_id: string | null
          status: Database["public"]["Enums"]["payout_status"]
          updated_at: string
        }
        Insert: {
          account_id: string
          amount: number
          created_at?: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          merchant_id: string
          metadata?: Json | null
          organization_id?: string | null
          payment_method_code?:
            | Database["public"]["Enums"]["payment_method_code"]
            | null
          payout_id?: string
          payout_method_id?: string | null
          provider_code?: Database["public"]["Enums"]["provider_code"] | null
          spi_bulk_instruction_id?: string | null
          status?: Database["public"]["Enums"]["payout_status"]
          updated_at?: string
        }
        Update: {
          account_id?: string
          amount?: number
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          merchant_id?: string
          metadata?: Json | null
          organization_id?: string | null
          payment_method_code?:
            | Database["public"]["Enums"]["payment_method_code"]
            | null
          payout_id?: string
          payout_method_id?: string | null
          provider_code?: Database["public"]["Enums"]["provider_code"] | null
          spi_bulk_instruction_id?: string | null
          status?: Database["public"]["Enums"]["payout_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "beneficiary_payouts_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "merchant_accounts"
            referencedColumns: ["account_id"]
          },
          {
            foreignKeyName: "beneficiary_payouts_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "merchant_balance_summary"
            referencedColumns: ["account_id"]
          },
          {
            foreignKeyName: "beneficiary_payouts_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "beneficiary_payouts_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "beneficiary_payouts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "beneficiary_payouts_payout_method_id_fkey"
            columns: ["payout_method_id"]
            isOneToOne: false
            referencedRelation: "merchant_payout_methods"
            referencedColumns: ["payout_method_id"]
          },
        ]
      }
      bnpl_configurations: {
        Row: {
          config_id: string
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_interest_rate: number
          installment_frequency: Database["public"]["Enums"]["frequency"]
          is_active: boolean
          max_installments: number
          max_product_amount: number | null
          merchant_processing_fixed_amount: number
          merchant_processing_percentage: number
          min_installments: number
          min_product_amount: number
          organization_id: string
          require_credit_check: boolean
          require_customer_verification: boolean
          updated_at: string
        }
        Insert: {
          config_id?: string
          created_at?: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_interest_rate?: number
          installment_frequency?: Database["public"]["Enums"]["frequency"]
          is_active?: boolean
          max_installments?: number
          max_product_amount?: number | null
          merchant_processing_fixed_amount?: number
          merchant_processing_percentage?: number
          min_installments?: number
          min_product_amount?: number
          organization_id: string
          require_credit_check?: boolean
          require_customer_verification?: boolean
          updated_at?: string
        }
        Update: {
          config_id?: string
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          customer_interest_rate?: number
          installment_frequency?: Database["public"]["Enums"]["frequency"]
          is_active?: boolean
          max_installments?: number
          max_product_amount?: number | null
          merchant_processing_fixed_amount?: number
          merchant_processing_percentage?: number
          min_installments?: number
          min_product_amount?: number
          organization_id?: string
          require_credit_check?: boolean
          require_customer_verification?: boolean
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bnpl_configurations_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "bnpl_configurations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      bnpl_fee_tracking: {
        Row: {
          amount: number
          charged_to_customer_id: string | null
          charged_to_merchant_id: string | null
          collected_at: string | null
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string | null
          fee_payer: Database["public"]["Enums"]["fee_payer_type"]
          fee_tracking_id: string
          fee_type: Database["public"]["Enums"]["bnpl_fee_type"]
          installment_id: string | null
          metadata: Json | null
          organization_id: string
          plan_id: string
          status: Database["public"]["Enums"]["bnpl_status"]
          transaction_id: string | null
        }
        Insert: {
          amount: number
          charged_to_customer_id?: string | null
          charged_to_merchant_id?: string | null
          collected_at?: string | null
          created_at?: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description?: string | null
          fee_payer: Database["public"]["Enums"]["fee_payer_type"]
          fee_tracking_id?: string
          fee_type: Database["public"]["Enums"]["bnpl_fee_type"]
          installment_id?: string | null
          metadata?: Json | null
          organization_id: string
          plan_id: string
          status?: Database["public"]["Enums"]["bnpl_status"]
          transaction_id?: string | null
        }
        Update: {
          amount?: number
          charged_to_customer_id?: string | null
          charged_to_merchant_id?: string | null
          collected_at?: string | null
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          description?: string | null
          fee_payer?: Database["public"]["Enums"]["fee_payer_type"]
          fee_tracking_id?: string
          fee_type?: Database["public"]["Enums"]["bnpl_fee_type"]
          installment_id?: string | null
          metadata?: Json | null
          organization_id?: string
          plan_id?: string
          status?: Database["public"]["Enums"]["bnpl_status"]
          transaction_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bnpl_fee_tracking_charged_to_customer_id_fkey"
            columns: ["charged_to_customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "bnpl_fee_tracking_charged_to_merchant_id_fkey"
            columns: ["charged_to_merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "bnpl_fee_tracking_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "bnpl_fee_tracking_installment_id_fkey"
            columns: ["installment_id"]
            isOneToOne: false
            referencedRelation: "installment_payments"
            referencedColumns: ["installment_id"]
          },
          {
            foreignKeyName: "bnpl_fee_tracking_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "bnpl_fee_tracking_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "installment_plans"
            referencedColumns: ["plan_id"]
          },
          {
            foreignKeyName: "bnpl_fee_tracking_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["transaction_id"]
          },
        ]
      }
      checkout_sessions: {
        Row: {
          allow_coupon_code: boolean
          allow_quantity: boolean
          allowed_providers:
            | Database["public"]["Enums"]["provider_code"][]
            | null
          amount: number
          cancel_url: string | null
          checkout_session_id: string
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_email: string | null
          customer_id: string | null
          customer_name: string | null
          customer_phone: string | null
          expires_at: string
          installment_plan_id: string | null
          is_pos: boolean
          is_spi: boolean
          merchant_id: string
          metadata: Json | null
          organization_id: string
          payment_link_id: string | null
          payment_request_id: string | null
          plan_id: string | null
          product_id: string | null
          public_description: string | null
          qr_code_data: Json | null
          qr_code_type: Database["public"]["Enums"]["qr_code_type"] | null
          quantity: number
          spi_account_number: string | null
          spi_qr_code_id: string | null
          status: Database["public"]["Enums"]["checkout_session_status"]
          subscription_id: string | null
          success_url: string | null
          title: string | null
          updated_at: string
        }
        Insert: {
          allow_coupon_code?: boolean
          allow_quantity?: boolean
          allowed_providers?:
            | Database["public"]["Enums"]["provider_code"][]
            | null
          amount: number
          cancel_url?: string | null
          checkout_session_id?: string
          created_at?: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_email?: string | null
          customer_id?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          expires_at: string
          installment_plan_id?: string | null
          is_pos?: boolean
          is_spi?: boolean
          merchant_id: string
          metadata?: Json | null
          organization_id: string
          payment_link_id?: string | null
          payment_request_id?: string | null
          plan_id?: string | null
          product_id?: string | null
          public_description?: string | null
          qr_code_data?: Json | null
          qr_code_type?: Database["public"]["Enums"]["qr_code_type"] | null
          quantity?: number
          spi_account_number?: string | null
          spi_qr_code_id?: string | null
          status?: Database["public"]["Enums"]["checkout_session_status"]
          subscription_id?: string | null
          success_url?: string | null
          title?: string | null
          updated_at?: string
        }
        Update: {
          allow_coupon_code?: boolean
          allow_quantity?: boolean
          allowed_providers?:
            | Database["public"]["Enums"]["provider_code"][]
            | null
          amount?: number
          cancel_url?: string | null
          checkout_session_id?: string
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          customer_email?: string | null
          customer_id?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          expires_at?: string
          installment_plan_id?: string | null
          is_pos?: boolean
          is_spi?: boolean
          merchant_id?: string
          metadata?: Json | null
          organization_id?: string
          payment_link_id?: string | null
          payment_request_id?: string | null
          plan_id?: string | null
          product_id?: string | null
          public_description?: string | null
          qr_code_data?: Json | null
          qr_code_type?: Database["public"]["Enums"]["qr_code_type"] | null
          quantity?: number
          spi_account_number?: string | null
          spi_qr_code_id?: string | null
          status?: Database["public"]["Enums"]["checkout_session_status"]
          subscription_id?: string | null
          success_url?: string | null
          title?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "checkout_sessions_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "checkout_sessions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "checkout_sessions_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "checkout_sessions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "checkout_sessions_payment_link_id_fkey"
            columns: ["payment_link_id"]
            isOneToOne: false
            referencedRelation: "payment_links"
            referencedColumns: ["link_id"]
          },
          {
            foreignKeyName: "checkout_sessions_payment_request_id_fkey"
            columns: ["payment_request_id"]
            isOneToOne: false
            referencedRelation: "payment_requests"
            referencedColumns: ["request_id"]
          },
          {
            foreignKeyName: "checkout_sessions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["plan_id"]
          },
          {
            foreignKeyName: "checkout_sessions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "merchant_products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "checkout_sessions_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "merchant_subscriptions"
            referencedColumns: ["subscription_id"]
          },
          {
            foreignKeyName: "fk_checkout_sessions_installment_plan"
            columns: ["installment_plan_id"]
            isOneToOne: false
            referencedRelation: "installment_plans"
            referencedColumns: ["plan_id"]
          },
          {
            foreignKeyName: "fk_checkout_sessions_spi_qr_code_id"
            columns: ["spi_qr_code_id"]
            isOneToOne: false
            referencedRelation: "spi_qr_codes"
            referencedColumns: ["qr_code_id"]
          },
        ]
      }
      cli_device_requests: {
        Row: {
          created_at: string
          device_code: string
          expires_at: string
          interval: number
          merchant_id: string | null
          organization_id: string | null
          status: Database["public"]["Enums"]["cli_device_request_status"]
          user_code: string
        }
        Insert: {
          created_at?: string
          device_code: string
          expires_at: string
          interval?: number
          merchant_id?: string | null
          organization_id?: string | null
          status?: Database["public"]["Enums"]["cli_device_request_status"]
          user_code: string
        }
        Update: {
          created_at?: string
          device_code?: string
          expires_at?: string
          interval?: number
          merchant_id?: string | null
          organization_id?: string | null
          status?: Database["public"]["Enums"]["cli_device_request_status"]
          user_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "cli_device_requests_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "cli_device_requests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      coupon_plan_links: {
        Row: {
          coupon_id: string
          created_at: string
          link_id: string
          plan_id: string
        }
        Insert: {
          coupon_id: string
          created_at?: string
          link_id?: string
          plan_id: string
        }
        Update: {
          coupon_id?: string
          created_at?: string
          link_id?: string
          plan_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "coupon_plan_links_coupon_id_fkey"
            columns: ["coupon_id"]
            isOneToOne: false
            referencedRelation: "discount_coupons"
            referencedColumns: ["coupon_id"]
          },
          {
            foreignKeyName: "coupon_plan_links_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["plan_id"]
          },
        ]
      }
      coupon_product_links: {
        Row: {
          coupon_id: string
          created_at: string
          link_id: string
          product_id: string
        }
        Insert: {
          coupon_id: string
          created_at?: string
          link_id?: string
          product_id: string
        }
        Update: {
          coupon_id?: string
          created_at?: string
          link_id?: string
          product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "coupon_product_links_coupon_id_fkey"
            columns: ["coupon_id"]
            isOneToOne: false
            referencedRelation: "discount_coupons"
            referencedColumns: ["coupon_id"]
          },
          {
            foreignKeyName: "coupon_product_links_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "merchant_products"
            referencedColumns: ["product_id"]
          },
        ]
      }
      coupon_usage: {
        Row: {
          checkout_session_id: string | null
          coupon_id: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          discount_amount: number
          final_amount: number
          organization_id: string
          original_amount: number
          transaction_id: string | null
          usage_id: string
          used_at: string
        }
        Insert: {
          checkout_session_id?: string | null
          coupon_id: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          discount_amount: number
          final_amount: number
          organization_id: string
          original_amount: number
          transaction_id?: string | null
          usage_id?: string
          used_at?: string
        }
        Update: {
          checkout_session_id?: string | null
          coupon_id?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          discount_amount?: number
          final_amount?: number
          organization_id?: string
          original_amount?: number
          transaction_id?: string | null
          usage_id?: string
          used_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "coupon_usage_checkout_session_id_fkey"
            columns: ["checkout_session_id"]
            isOneToOne: false
            referencedRelation: "checkout_sessions"
            referencedColumns: ["checkout_session_id"]
          },
          {
            foreignKeyName: "coupon_usage_coupon_id_fkey"
            columns: ["coupon_id"]
            isOneToOne: false
            referencedRelation: "discount_coupons"
            referencedColumns: ["coupon_id"]
          },
          {
            foreignKeyName: "coupon_usage_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "coupon_usage_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "coupon_usage_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["transaction_id"]
          },
        ]
      }
      currencies: {
        Row: {
          code: Database["public"]["Enums"]["currency_code"]
          name: string
        }
        Insert: {
          code: Database["public"]["Enums"]["currency_code"]
          name: string
        }
        Update: {
          code?: Database["public"]["Enums"]["currency_code"]
          name?: string
        }
        Relationships: []
      }
      currency_conversion_history: {
        Row: {
          conversion_rate: number
          conversion_type: Database["public"]["Enums"]["conversion_type"]
          converted_amount: number
          created_at: string
          from_currency: Database["public"]["Enums"]["currency_code"]
          id: string
          merchant_id: string
          organization_id: string
          original_amount: number
          payout_id: string | null
          refund_id: string | null
          to_currency: Database["public"]["Enums"]["currency_code"]
          transaction_id: string | null
          updated_at: string
        }
        Insert: {
          conversion_rate: number
          conversion_type: Database["public"]["Enums"]["conversion_type"]
          converted_amount: number
          created_at?: string
          from_currency: Database["public"]["Enums"]["currency_code"]
          id?: string
          merchant_id: string
          organization_id: string
          original_amount: number
          payout_id?: string | null
          refund_id?: string | null
          to_currency: Database["public"]["Enums"]["currency_code"]
          transaction_id?: string | null
          updated_at?: string
        }
        Update: {
          conversion_rate?: number
          conversion_type?: Database["public"]["Enums"]["conversion_type"]
          converted_amount?: number
          created_at?: string
          from_currency?: Database["public"]["Enums"]["currency_code"]
          id?: string
          merchant_id?: string
          organization_id?: string
          original_amount?: number
          payout_id?: string | null
          refund_id?: string | null
          to_currency?: Database["public"]["Enums"]["currency_code"]
          transaction_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "currency_conversion_history_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "currency_conversion_history_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "currency_conversion_history_payout_id_fkey"
            columns: ["payout_id"]
            isOneToOne: false
            referencedRelation: "payouts"
            referencedColumns: ["payout_id"]
          },
          {
            foreignKeyName: "currency_conversion_history_refund_id_fkey"
            columns: ["refund_id"]
            isOneToOne: false
            referencedRelation: "refunds"
            referencedColumns: ["refund_id"]
          },
          {
            foreignKeyName: "currency_conversion_history_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["transaction_id"]
          },
        ]
      }
      currency_conversion_rates: {
        Row: {
          created_at: string
          from_currency: Database["public"]["Enums"]["currency_code"]
          id: string
          inverse_rate: number
          rate: number
          to_currency: Database["public"]["Enums"]["currency_code"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          from_currency: Database["public"]["Enums"]["currency_code"]
          id?: string
          inverse_rate: number
          rate: number
          to_currency: Database["public"]["Enums"]["currency_code"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          from_currency?: Database["public"]["Enums"]["currency_code"]
          id?: string
          inverse_rate?: number
          rate?: number
          to_currency?: Database["public"]["Enums"]["currency_code"]
          updated_at?: string
        }
        Relationships: []
      }
      customer_invoices: {
        Row: {
          amount: number
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_id: string
          customer_invoice_id: string
          description: string | null
          due_date: string
          merchant_id: string
          metadata: Json | null
          organization_id: string
          status: Database["public"]["Enums"]["invoice_status"]
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_id: string
          customer_invoice_id?: string
          description?: string | null
          due_date: string
          merchant_id: string
          metadata?: Json | null
          organization_id: string
          status?: Database["public"]["Enums"]["invoice_status"]
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          customer_id?: string
          customer_invoice_id?: string
          description?: string | null
          due_date?: string
          merchant_id?: string
          metadata?: Json | null
          organization_id?: string
          status?: Database["public"]["Enums"]["invoice_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "customer_invoices_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "customer_invoices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "customer_invoices_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "customer_invoices_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      customers: {
        Row: {
          address: string | null
          city: string | null
          country: string | null
          created_at: string
          customer_id: string
          deleted_at: string | null
          email: string | null
          is_business: boolean
          is_deleted: boolean
          merchant_id: string
          metadata: Json | null
          name: string
          organization_id: string
          phone_number: string | null
          postal_code: string | null
          spi_alias_mbno: string | null
          spi_alias_shid: string | null
          spi_primary_alias: string | null
          updated_at: string
          whatsapp_number: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          customer_id?: string
          deleted_at?: string | null
          email?: string | null
          is_business?: boolean
          is_deleted?: boolean
          merchant_id: string
          metadata?: Json | null
          name: string
          organization_id: string
          phone_number?: string | null
          postal_code?: string | null
          spi_alias_mbno?: string | null
          spi_alias_shid?: string | null
          spi_primary_alias?: string | null
          updated_at?: string
          whatsapp_number?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          customer_id?: string
          deleted_at?: string | null
          email?: string | null
          is_business?: boolean
          is_deleted?: boolean
          merchant_id?: string
          metadata?: Json | null
          name?: string
          organization_id?: string
          phone_number?: string | null
          postal_code?: string | null
          spi_alias_mbno?: string | null
          spi_alias_shid?: string | null
          spi_primary_alias?: string | null
          updated_at?: string
          whatsapp_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "customers_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "fk_customers_spi_alias_shid"
            columns: ["spi_alias_shid"]
            isOneToOne: false
            referencedRelation: "spi_account_aliases"
            referencedColumns: ["alias_id"]
          },
        ]
      }
      discount_coupons: {
        Row: {
          code: string
          coupon_id: string
          created_at: string
          current_uses: number
          customer_type: Database["public"]["Enums"]["customer_type_enum"]
          description: string | null
          discount_fixed_amount: number | null
          discount_percentage: number | null
          discount_type: Database["public"]["Enums"]["discount_type_enum"]
          expires_at: string | null
          is_active: boolean
          is_organization_wide: boolean
          max_quantity_per_use: number | null
          max_uses: number | null
          organization_id: string
          updated_at: string
          usage_frequency_limit: Database["public"]["Enums"]["usage_frequency_enum"]
          usage_limit_value: number | null
          valid_from: string | null
        }
        Insert: {
          code: string
          coupon_id?: string
          created_at?: string
          current_uses?: number
          customer_type?: Database["public"]["Enums"]["customer_type_enum"]
          description?: string | null
          discount_fixed_amount?: number | null
          discount_percentage?: number | null
          discount_type?: Database["public"]["Enums"]["discount_type_enum"]
          expires_at?: string | null
          is_active?: boolean
          is_organization_wide?: boolean
          max_quantity_per_use?: number | null
          max_uses?: number | null
          organization_id: string
          updated_at?: string
          usage_frequency_limit?: Database["public"]["Enums"]["usage_frequency_enum"]
          usage_limit_value?: number | null
          valid_from?: string | null
        }
        Update: {
          code?: string
          coupon_id?: string
          created_at?: string
          current_uses?: number
          customer_type?: Database["public"]["Enums"]["customer_type_enum"]
          description?: string | null
          discount_fixed_amount?: number | null
          discount_percentage?: number | null
          discount_type?: Database["public"]["Enums"]["discount_type_enum"]
          expires_at?: string | null
          is_active?: boolean
          is_organization_wide?: boolean
          max_quantity_per_use?: number | null
          max_uses?: number | null
          organization_id?: string
          updated_at?: string
          usage_frequency_limit?: Database["public"]["Enums"]["usage_frequency_enum"]
          usage_limit_value?: number | null
          valid_from?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "discount_coupons_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      disputes: {
        Row: {
          amount: number
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_id: string
          dispute_id: string
          fee_amount: number
          reason: string
          resolution_date: string | null
          resolution_details: string | null
          status: Database["public"]["Enums"]["dispute_status"]
          transaction_id: string
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          customer_id: string
          dispute_id?: string
          fee_amount?: number
          reason: string
          resolution_date?: string | null
          resolution_details?: string | null
          status?: Database["public"]["Enums"]["dispute_status"]
          transaction_id: string
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          customer_id?: string
          dispute_id?: string
          fee_amount?: number
          reason?: string
          resolution_date?: string | null
          resolution_details?: string | null
          status?: Database["public"]["Enums"]["dispute_status"]
          transaction_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "disputes_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "disputes_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "disputes_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["transaction_id"]
          },
        ]
      }
      events: {
        Row: {
          created_at: string
          customer_id: string | null
          event_data: Json | null
          event_id: string
          event_name: string
          merchant_id: string | null
          metadata: Json | null
          organization_id: string | null
        }
        Insert: {
          created_at?: string
          customer_id?: string | null
          event_data?: Json | null
          event_id?: string
          event_name: string
          merchant_id?: string | null
          metadata?: Json | null
          organization_id?: string | null
        }
        Update: {
          created_at?: string
          customer_id?: string | null
          event_data?: Json | null
          event_id?: string
          event_name?: string
          merchant_id?: string | null
          metadata?: Json | null
          organization_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "events_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      fraud_alerts: {
        Row: {
          alert_id: string
          created_at: string
          metadata: Json | null
          organization_id: string
          payout_id: string | null
          rule_id: string
          status: Database["public"]["Enums"]["fraud_alert_status"]
          transaction_id: string | null
          triggering_value: string
        }
        Insert: {
          alert_id?: string
          created_at?: string
          metadata?: Json | null
          organization_id: string
          payout_id?: string | null
          rule_id: string
          status?: Database["public"]["Enums"]["fraud_alert_status"]
          transaction_id?: string | null
          triggering_value: string
        }
        Update: {
          alert_id?: string
          created_at?: string
          metadata?: Json | null
          organization_id?: string
          payout_id?: string | null
          rule_id?: string
          status?: Database["public"]["Enums"]["fraud_alert_status"]
          transaction_id?: string | null
          triggering_value?: string
        }
        Relationships: [
          {
            foreignKeyName: "fraud_alerts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "fraud_alerts_payout_id_fkey"
            columns: ["payout_id"]
            isOneToOne: false
            referencedRelation: "payouts"
            referencedColumns: ["payout_id"]
          },
          {
            foreignKeyName: "fraud_alerts_rule_id_fkey"
            columns: ["rule_id"]
            isOneToOne: false
            referencedRelation: "fraud_rules"
            referencedColumns: ["rule_id"]
          },
          {
            foreignKeyName: "fraud_alerts_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["transaction_id"]
          },
        ]
      }
      fraud_rules: {
        Row: {
          created_at: string
          default_action: Database["public"]["Enums"]["fraud_action"]
          default_threshold: number
          default_time_window_seconds: number | null
          description: string | null
          is_active: boolean
          rule_id: string
          rule_name: string
          type: Database["public"]["Enums"]["fraud_rule_type"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          default_action?: Database["public"]["Enums"]["fraud_action"]
          default_threshold: number
          default_time_window_seconds?: number | null
          description?: string | null
          is_active?: boolean
          rule_id?: string
          rule_name: string
          type: Database["public"]["Enums"]["fraud_rule_type"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          default_action?: Database["public"]["Enums"]["fraud_action"]
          default_threshold?: number
          default_time_window_seconds?: number | null
          description?: string | null
          is_active?: boolean
          rule_id?: string
          rule_name?: string
          type?: Database["public"]["Enums"]["fraud_rule_type"]
          updated_at?: string
        }
        Relationships: []
      }
      installment_payments: {
        Row: {
          amount: number
          created_at: string
          due_date: string
          installment_id: string
          interest_amount: number | null
          paid_at: string | null
          payment_link: string | null
          payment_method_code:
            | Database["public"]["Enums"]["payment_method_code"]
            | null
          plan_id: string
          principal_amount: number | null
          processing_fee: number | null
          provider_code: Database["public"]["Enums"]["provider_code"] | null
          sequence_number: number
          spi_payment_request_id: string | null
          spi_tx_id: string | null
          status: Database["public"]["Enums"]["transaction_status"]
          transaction_id: string | null
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          due_date: string
          installment_id?: string
          interest_amount?: number | null
          paid_at?: string | null
          payment_link?: string | null
          payment_method_code?:
            | Database["public"]["Enums"]["payment_method_code"]
            | null
          plan_id: string
          principal_amount?: number | null
          processing_fee?: number | null
          provider_code?: Database["public"]["Enums"]["provider_code"] | null
          sequence_number: number
          spi_payment_request_id?: string | null
          spi_tx_id?: string | null
          status?: Database["public"]["Enums"]["transaction_status"]
          transaction_id?: string | null
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          due_date?: string
          installment_id?: string
          interest_amount?: number | null
          paid_at?: string | null
          payment_link?: string | null
          payment_method_code?:
            | Database["public"]["Enums"]["payment_method_code"]
            | null
          plan_id?: string
          principal_amount?: number | null
          processing_fee?: number | null
          provider_code?: Database["public"]["Enums"]["provider_code"] | null
          sequence_number?: number
          spi_payment_request_id?: string | null
          spi_tx_id?: string | null
          status?: Database["public"]["Enums"]["transaction_status"]
          transaction_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_installment_payments_spi_payment_request_id"
            columns: ["spi_payment_request_id"]
            isOneToOne: false
            referencedRelation: "payment_requests"
            referencedColumns: ["request_id"]
          },
          {
            foreignKeyName: "installment_payments_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "installment_plans"
            referencedColumns: ["plan_id"]
          },
          {
            foreignKeyName: "installment_payments_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["transaction_id"]
          },
        ]
      }
      installment_plans: {
        Row: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_id: string
          installment_count: number
          is_spi_bnpl: boolean
          merchant_id: string
          organization_id: string
          plan_id: string
          product_id: string | null
          spi_payment_request_ids: string[] | null
          status: Database["public"]["Enums"]["transaction_status"]
          subscription_id: string | null
          total_amount: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_id: string
          installment_count: number
          is_spi_bnpl?: boolean
          merchant_id: string
          organization_id: string
          plan_id?: string
          product_id?: string | null
          spi_payment_request_ids?: string[] | null
          status?: Database["public"]["Enums"]["transaction_status"]
          subscription_id?: string | null
          total_amount: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          customer_id?: string
          installment_count?: number
          is_spi_bnpl?: boolean
          merchant_id?: string
          organization_id?: string
          plan_id?: string
          product_id?: string | null
          spi_payment_request_ids?: string[] | null
          status?: Database["public"]["Enums"]["transaction_status"]
          subscription_id?: string | null
          total_amount?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "installment_plans_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "installment_plans_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "installment_plans_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "installment_plans_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "installment_plans_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "merchant_products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "installment_plans_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "merchant_subscriptions"
            referencedColumns: ["subscription_id"]
          },
        ]
      }
      integration_clicks: {
        Row: {
          click_id: string
          clicked_at: string
          integration: string
          organization_id: string
        }
        Insert: {
          click_id?: string
          clicked_at?: string
          integration: string
          organization_id: string
        }
        Update: {
          click_id?: string
          clicked_at?: string
          integration?: string
          organization_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "integration_clicks_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      job_applications: {
        Row: {
          created_at: string
          email: string
          github_url: string | null
          id: string
          job_id: string | null
          linkedin_url: string | null
          name: string
          project_note: string | null
          resume_url: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          github_url?: string | null
          id?: string
          job_id?: string | null
          linkedin_url?: string | null
          name: string
          project_note?: string | null
          resume_url?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          github_url?: string | null
          id?: string
          job_id?: string | null
          linkedin_url?: string | null
          name?: string
          project_note?: string | null
          resume_url?: string | null
          status?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      jobs: {
        Row: {
          about_description: string
          applying_description: string
          created_at: string
          department: string
          id: string
          is_active: boolean | null
          location: string
          responsibilities: string[] | null
          role_description: string
          slug: string
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          about_description: string
          applying_description: string
          created_at?: string
          department: string
          id?: string
          is_active?: boolean | null
          location: string
          responsibilities?: string[] | null
          role_description: string
          slug: string
          title: string
          type: string
          updated_at?: string
        }
        Update: {
          about_description?: string
          applying_description?: string
          created_at?: string
          department?: string
          id?: string
          is_active?: boolean | null
          location?: string
          responsibilities?: string[] | null
          role_description?: string
          slug?: string
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      logs: {
        Row: {
          browser: string | null
          created_at: string
          details: Json | null
          event: Database["public"]["Enums"]["event_type"]
          ip_address: string | null
          log_id: string
          merchant_id: string | null
          operating_system: string | null
          request_method: string | null
          request_url: string | null
          response_status: number | null
          severity: string
        }
        Insert: {
          browser?: string | null
          created_at?: string
          details?: Json | null
          event: Database["public"]["Enums"]["event_type"]
          ip_address?: string | null
          log_id?: string
          merchant_id?: string | null
          operating_system?: string | null
          request_method?: string | null
          request_url?: string | null
          response_status?: number | null
          severity: string
        }
        Update: {
          browser?: string | null
          created_at?: string
          details?: Json | null
          event?: Database["public"]["Enums"]["event_type"]
          ip_address?: string | null
          log_id?: string
          merchant_id?: string | null
          operating_system?: string | null
          request_method?: string | null
          request_url?: string | null
          response_status?: number | null
          severity?: string
        }
        Relationships: [
          {
            foreignKeyName: "logs_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
        ]
      }
      merchant_accounts: {
        Row: {
          account_id: string
          balance: number
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          is_spi_account: boolean
          merchant_id: string | null
          organization_id: string
          spi_account_balance: number | null
          spi_account_balance_sync_error: string | null
          spi_account_balance_synced_at: string | null
          spi_account_number: string | null
          spi_account_status:
            | Database["public"]["Enums"]["spi_account_status"]
            | null
          spi_account_type:
            | Database["public"]["Enums"]["spi_account_type"]
            | null
          spi_balance_sync_error: string | null
          spi_last_balance_sync: string | null
          spi_last_synced_balance: number | null
          updated_at: string
        }
        Insert: {
          account_id?: string
          balance?: number
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          is_spi_account?: boolean
          merchant_id?: string | null
          organization_id: string
          spi_account_balance?: number | null
          spi_account_balance_sync_error?: string | null
          spi_account_balance_synced_at?: string | null
          spi_account_number?: string | null
          spi_account_status?:
            | Database["public"]["Enums"]["spi_account_status"]
            | null
          spi_account_type?:
            | Database["public"]["Enums"]["spi_account_type"]
            | null
          spi_balance_sync_error?: string | null
          spi_last_balance_sync?: string | null
          spi_last_synced_balance?: number | null
          updated_at?: string
        }
        Update: {
          account_id?: string
          balance?: number
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          is_spi_account?: boolean
          merchant_id?: string | null
          organization_id?: string
          spi_account_balance?: number | null
          spi_account_balance_sync_error?: string | null
          spi_account_balance_synced_at?: string | null
          spi_account_number?: string | null
          spi_account_status?:
            | Database["public"]["Enums"]["spi_account_status"]
            | null
          spi_account_type?:
            | Database["public"]["Enums"]["spi_account_type"]
            | null
          spi_balance_sync_error?: string | null
          spi_last_balance_sync?: string | null
          spi_last_synced_balance?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "merchant_accounts_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "merchant_accounts_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "merchant_accounts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      merchant_feedback: {
        Row: {
          created_at: string
          id: string
          merchant_id: string
          message: string
          sentiment: string | null
          status: Database["public"]["Enums"]["feedback_status"]
        }
        Insert: {
          created_at?: string
          id?: string
          merchant_id: string
          message: string
          sentiment?: string | null
          status?: Database["public"]["Enums"]["feedback_status"]
        }
        Update: {
          created_at?: string
          id?: string
          merchant_id?: string
          message?: string
          sentiment?: string | null
          status?: Database["public"]["Enums"]["feedback_status"]
        }
        Relationships: [
          {
            foreignKeyName: "merchant_feedback_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
        ]
      }
      merchant_organization_links: {
        Row: {
          action: Database["public"]["Enums"]["permission_action"] | null
          category: Database["public"]["Enums"]["permission_category"] | null
          created_at: string
          how_did_you_hear_about_us: string | null
          invitation_email: string | null
          invitation_token: string | null
          merchant_id: string | null
          merchant_org_id: string
          organization_id: string
          organization_position: string | null
          role: Database["public"]["Enums"]["member_role"]
          team_status: Database["public"]["Enums"]["team_status"]
          updated_at: string
        }
        Insert: {
          action?: Database["public"]["Enums"]["permission_action"] | null
          category?: Database["public"]["Enums"]["permission_category"] | null
          created_at?: string
          how_did_you_hear_about_us?: string | null
          invitation_email?: string | null
          invitation_token?: string | null
          merchant_id?: string | null
          merchant_org_id?: string
          organization_id: string
          organization_position?: string | null
          role: Database["public"]["Enums"]["member_role"]
          team_status?: Database["public"]["Enums"]["team_status"]
          updated_at?: string
        }
        Update: {
          action?: Database["public"]["Enums"]["permission_action"] | null
          category?: Database["public"]["Enums"]["permission_category"] | null
          created_at?: string
          how_did_you_hear_about_us?: string | null
          invitation_email?: string | null
          invitation_token?: string | null
          merchant_id?: string | null
          merchant_org_id?: string
          organization_id?: string
          organization_position?: string | null
          role?: Database["public"]["Enums"]["member_role"]
          team_status?: Database["public"]["Enums"]["team_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "merchant_organization_links_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "merchant_organization_links_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      merchant_outstanding_balance: {
        Row: {
          amount: number
          balance_id: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          merchant_id: string
          metadata: Json | null
          organization_id: string
          updated_at: string
        }
        Insert: {
          amount?: number
          balance_id?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          merchant_id: string
          metadata?: Json | null
          organization_id: string
          updated_at?: string
        }
        Update: {
          amount?: number
          balance_id?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          merchant_id?: string
          metadata?: Json | null
          organization_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "merchant_outstanding_balance_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "merchant_outstanding_balance_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "merchant_outstanding_balance_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      merchant_payout_methods: {
        Row: {
          account_name: string
          account_number: string
          auto_withdrawal_day: number | null
          auto_withdrawal_enabled: boolean
          auto_withdrawal_last_run: string | null
          auto_withdrawal_method: string | null
          auto_withdrawal_mobile_provider:
            | Database["public"]["Enums"]["provider_code"]
            | null
          bank_code: string | null
          bank_name: string
          branch_code: string | null
          country: string | null
          created_at: string
          is_default: boolean
          is_spi_enabled: boolean
          is_uemoa: boolean
          is_valid: boolean
          merchant_id: string
          organization_id: string
          payout_method_id: string
          payout_method_type: string | null
          spi_account_number: string | null
          spi_alias_mbno: string | null
          spi_alias_shid: string | null
          spi_alias_type: string | null
          updated_at: string
        }
        Insert: {
          account_name: string
          account_number: string
          auto_withdrawal_day?: number | null
          auto_withdrawal_enabled?: boolean
          auto_withdrawal_last_run?: string | null
          auto_withdrawal_method?: string | null
          auto_withdrawal_mobile_provider?:
            | Database["public"]["Enums"]["provider_code"]
            | null
          bank_code?: string | null
          bank_name: string
          branch_code?: string | null
          country?: string | null
          created_at?: string
          is_default?: boolean
          is_spi_enabled?: boolean
          is_uemoa?: boolean
          is_valid?: boolean
          merchant_id: string
          organization_id: string
          payout_method_id?: string
          payout_method_type?: string | null
          spi_account_number?: string | null
          spi_alias_mbno?: string | null
          spi_alias_shid?: string | null
          spi_alias_type?: string | null
          updated_at?: string
        }
        Update: {
          account_name?: string
          account_number?: string
          auto_withdrawal_day?: number | null
          auto_withdrawal_enabled?: boolean
          auto_withdrawal_last_run?: string | null
          auto_withdrawal_method?: string | null
          auto_withdrawal_mobile_provider?:
            | Database["public"]["Enums"]["provider_code"]
            | null
          bank_code?: string | null
          bank_name?: string
          branch_code?: string | null
          country?: string | null
          created_at?: string
          is_default?: boolean
          is_spi_enabled?: boolean
          is_uemoa?: boolean
          is_valid?: boolean
          merchant_id?: string
          organization_id?: string
          payout_method_id?: string
          payout_method_type?: string | null
          spi_account_number?: string | null
          spi_alias_mbno?: string | null
          spi_alias_shid?: string | null
          spi_alias_type?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "merchant_payout_methods_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "merchant_payout_methods_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "merchant_payout_methods_spi_alias_shid_fkey"
            columns: ["spi_alias_shid"]
            isOneToOne: false
            referencedRelation: "spi_account_aliases"
            referencedColumns: ["alias_id"]
          },
        ]
      }
      merchant_products: {
        Row: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string | null
          display_on_storefront: boolean
          image_url: string | null
          is_active: boolean
          merchant_id: string
          name: string
          organization_id: string
          price: number
          product_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description?: string | null
          display_on_storefront?: boolean
          image_url?: string | null
          is_active?: boolean
          merchant_id: string
          name: string
          organization_id: string
          price: number
          product_id?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          description?: string | null
          display_on_storefront?: boolean
          image_url?: string | null
          is_active?: boolean
          merchant_id?: string
          name?: string
          organization_id?: string
          price?: number
          product_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "merchant_products_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "merchant_products_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "merchant_products_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      merchant_stripe_connect: {
        Row: {
          business_type: string | null
          charges_enabled: boolean
          company_domicile_country: string | null
          created_at: string
          details_submitted: boolean
          merchant_id: string
          onboarding_status: string | null
          org_stripe_country: string | null
          organization_id: string
          payouts_enabled: boolean
          requirements_disabled_reason: string | null
          requirements_due: Json | null
          requirements_eventually_due: Json | null
          stripe_account_id: string
          stripe_account_type: string
          stripe_connect_id: string
          stripe_dashboard_url: string | null
          stripe_metadata: Json | null
          updated_at: string
        }
        Insert: {
          business_type?: string | null
          charges_enabled?: boolean
          company_domicile_country?: string | null
          created_at?: string
          details_submitted?: boolean
          merchant_id: string
          onboarding_status?: string | null
          org_stripe_country?: string | null
          organization_id: string
          payouts_enabled?: boolean
          requirements_disabled_reason?: string | null
          requirements_due?: Json | null
          requirements_eventually_due?: Json | null
          stripe_account_id: string
          stripe_account_type?: string
          stripe_connect_id?: string
          stripe_dashboard_url?: string | null
          stripe_metadata?: Json | null
          updated_at?: string
        }
        Update: {
          business_type?: string | null
          charges_enabled?: boolean
          company_domicile_country?: string | null
          created_at?: string
          details_submitted?: boolean
          merchant_id?: string
          onboarding_status?: string | null
          org_stripe_country?: string | null
          organization_id?: string
          payouts_enabled?: boolean
          requirements_disabled_reason?: string | null
          requirements_due?: Json | null
          requirements_eventually_due?: Json | null
          stripe_account_id?: string
          stripe_account_type?: string
          stripe_connect_id?: string
          stripe_dashboard_url?: string | null
          stripe_metadata?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "merchant_stripe_connect_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "merchant_stripe_connect_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      merchant_subscriptions: {
        Row: {
          created_at: string
          customer_id: string
          end_date: string | null
          merchant_id: string
          metadata: Json | null
          next_billing_date: string | null
          organization_id: string
          plan_id: string
          start_date: string
          status: Database["public"]["Enums"]["subscription_status"]
          subscription_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_id: string
          end_date?: string | null
          merchant_id: string
          metadata?: Json | null
          next_billing_date?: string | null
          organization_id: string
          plan_id: string
          start_date: string
          status?: Database["public"]["Enums"]["subscription_status"]
          subscription_id?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_id?: string
          end_date?: string | null
          merchant_id?: string
          metadata?: Json | null
          next_billing_date?: string | null
          organization_id?: string
          plan_id?: string
          start_date?: string
          status?: Database["public"]["Enums"]["subscription_status"]
          subscription_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "merchant_subscriptions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "merchant_subscriptions_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "merchant_subscriptions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "merchant_subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["plan_id"]
          },
        ]
      }
      merchant_withdrawal_notifications: {
        Row: {
          created_at: string
          email: string
          merchant_id: string
          notification_id: string
          organization_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          merchant_id: string
          notification_id?: string
          organization_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          merchant_id?: string
          notification_id?: string
          organization_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "merchant_withdrawal_notifications_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "merchant_withdrawal_notifications_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      merchants: {
        Row: {
          arr: number
          avatar_url: string | null
          country: string | null
          created_at: string
          deleted_at: string | null
          email: string
          is_deleted: boolean
          merchant_id: string
          merchant_lifetime_value: number
          metadata: Json | null
          mrr: number
          name: string | null
          onboarded: boolean
          onboarding_status: Database["public"]["Enums"]["onboarding_status"]
          phone_number: string | null
          pin_code: string | null
          preferred_language: string
          referral_code: string | null
          retry_payment_every: number | null
          subscription_notifications: Json | null
          timezone: string
          total_retries: number | null
          updated_at: string
        }
        Insert: {
          arr?: number
          avatar_url?: string | null
          country?: string | null
          created_at?: string
          deleted_at?: string | null
          email: string
          is_deleted?: boolean
          merchant_id?: string
          merchant_lifetime_value?: number
          metadata?: Json | null
          mrr?: number
          name?: string | null
          onboarded?: boolean
          onboarding_status?: Database["public"]["Enums"]["onboarding_status"]
          phone_number?: string | null
          pin_code?: string | null
          preferred_language?: string
          referral_code?: string | null
          retry_payment_every?: number | null
          subscription_notifications?: Json | null
          timezone?: string
          total_retries?: number | null
          updated_at?: string
        }
        Update: {
          arr?: number
          avatar_url?: string | null
          country?: string | null
          created_at?: string
          deleted_at?: string | null
          email?: string
          is_deleted?: boolean
          merchant_id?: string
          merchant_lifetime_value?: number
          metadata?: Json | null
          mrr?: number
          name?: string | null
          onboarded?: boolean
          onboarding_status?: Database["public"]["Enums"]["onboarding_status"]
          phone_number?: string | null
          pin_code?: string | null
          preferred_language?: string
          referral_code?: string | null
          retry_payment_every?: number | null
          subscription_notifications?: Json | null
          timezone?: string
          total_retries?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      meter_balances: {
        Row: {
          balance: number
          balance_id: string
          billable_organization_id: string | null
          consumed_units: number
          created_at: string
          credited_units: number
          customer_id: string | null
          last_event_id: string | null
          meter_id: string
          updated_at: string
        }
        Insert: {
          balance?: number
          balance_id?: string
          billable_organization_id?: string | null
          consumed_units?: number
          created_at?: string
          credited_units?: number
          customer_id?: string | null
          last_event_id?: string | null
          meter_id: string
          updated_at?: string
        }
        Update: {
          balance?: number
          balance_id?: string
          billable_organization_id?: string | null
          consumed_units?: number
          created_at?: string
          credited_units?: number
          customer_id?: string | null
          last_event_id?: string | null
          meter_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "meter_balances_billable_organization_id_fkey"
            columns: ["billable_organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "meter_balances_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "meter_balances_last_event_id_fkey"
            columns: ["last_event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["event_id"]
          },
          {
            foreignKeyName: "meter_balances_meter_id_fkey"
            columns: ["meter_id"]
            isOneToOne: false
            referencedRelation: "meters"
            referencedColumns: ["meter_id"]
          },
        ]
      }
      meters: {
        Row: {
          aggregation: Json
          created_at: string
          filter: Json
          is_active: boolean
          meter_id: string
          name: string
          organization_id: string
          updated_at: string
        }
        Insert: {
          aggregation: Json
          created_at?: string
          filter: Json
          is_active?: boolean
          meter_id?: string
          name: string
          organization_id: string
          updated_at?: string
        }
        Update: {
          aggregation?: Json
          created_at?: string
          filter?: Json
          is_active?: boolean
          meter_id?: string
          name?: string
          organization_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "meters_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          is_read: boolean | null
          merchant_id: string | null
          message: string
          notification_id: string
          type: Database["public"]["Enums"]["notification_type"]
        }
        Insert: {
          created_at?: string | null
          is_read?: boolean | null
          merchant_id?: string | null
          message: string
          notification_id?: string
          type: Database["public"]["Enums"]["notification_type"]
        }
        Update: {
          created_at?: string | null
          is_read?: boolean | null
          merchant_id?: string | null
          message?: string
          notification_id?: string
          type?: Database["public"]["Enums"]["notification_type"]
        }
        Relationships: [
          {
            foreignKeyName: "notifications_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
        ]
      }
      organization_addresses: {
        Row: {
          city: string | null
          country: string
          created_at: string
          district: string | null
          organization_id: string
          postal_code: string | null
          region: string | null
          street: string | null
          updated_at: string
        }
        Insert: {
          city?: string | null
          country: string
          created_at?: string
          district?: string | null
          organization_id: string
          postal_code?: string | null
          region?: string | null
          street?: string | null
          updated_at?: string
        }
        Update: {
          city?: string | null
          country?: string
          created_at?: string
          district?: string | null
          organization_id?: string
          postal_code?: string | null
          region?: string | null
          street?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_addresses_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      organization_checkout_settings: {
        Row: {
          created_at: string
          customer_notifications: Json
          default_cancel_url: string | null
          default_language: string
          default_success_url: string | null
          display_currency: Database["public"]["Enums"]["currency_code"]
          merchant_recipients: Json
          organization_id: string
          payment_link_duration: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_notifications?: Json
          default_cancel_url?: string | null
          default_language?: string
          default_success_url?: string | null
          display_currency?: Database["public"]["Enums"]["currency_code"]
          merchant_recipients?: Json
          organization_id: string
          payment_link_duration?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_notifications?: Json
          default_cancel_url?: string | null
          default_language?: string
          default_success_url?: string | null
          display_currency?: Database["public"]["Enums"]["currency_code"]
          merchant_recipients?: Json
          organization_id?: string
          payment_link_duration?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_checkout_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      organization_fee_links: {
        Row: {
          created_at: string
          fee_link_id: string
          fee_type_id: string
          organization_id: string
          product_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          fee_link_id?: string
          fee_type_id: string
          organization_id: string
          product_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          fee_link_id?: string
          fee_type_id?: string
          organization_id?: string
          product_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_fee_links_fee_type_id_fkey"
            columns: ["fee_type_id"]
            isOneToOne: false
            referencedRelation: "organization_fees"
            referencedColumns: ["fee_type_id"]
          },
          {
            foreignKeyName: "organization_fee_links_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "organization_fee_links_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "merchant_products"
            referencedColumns: ["product_id"]
          },
        ]
      }
      organization_fee_structure: {
        Row: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string | null
          fee_category: Database["public"]["Enums"]["fee_category"]
          fee_payer: Database["public"]["Enums"]["fee_payer_type"]
          fee_structure_id: string
          fee_subcategory: Database["public"]["Enums"]["fee_subcategory"]
          fixed_amount: number | null
          is_active: boolean
          is_visible: boolean
          metadata: Json | null
          name: string
          organization_id: string
          payment_method_code:
            | Database["public"]["Enums"]["payment_method_code"]
            | null
          percentage: number | null
          provider_code: Database["public"]["Enums"]["provider_code"] | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description?: string | null
          fee_category: Database["public"]["Enums"]["fee_category"]
          fee_payer?: Database["public"]["Enums"]["fee_payer_type"]
          fee_structure_id?: string
          fee_subcategory: Database["public"]["Enums"]["fee_subcategory"]
          fixed_amount?: number | null
          is_active?: boolean
          is_visible?: boolean
          metadata?: Json | null
          name: string
          organization_id: string
          payment_method_code?:
            | Database["public"]["Enums"]["payment_method_code"]
            | null
          percentage?: number | null
          provider_code?: Database["public"]["Enums"]["provider_code"] | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          description?: string | null
          fee_category?: Database["public"]["Enums"]["fee_category"]
          fee_payer?: Database["public"]["Enums"]["fee_payer_type"]
          fee_structure_id?: string
          fee_subcategory?: Database["public"]["Enums"]["fee_subcategory"]
          fixed_amount?: number | null
          is_active?: boolean
          is_visible?: boolean
          metadata?: Json | null
          name?: string
          organization_id?: string
          payment_method_code?:
            | Database["public"]["Enums"]["payment_method_code"]
            | null
          percentage?: number | null
          provider_code?: Database["public"]["Enums"]["provider_code"] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_fee_structure_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "organization_fee_structure_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "organization_fee_structure_provider_code_fkey"
            columns: ["provider_code"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["code"]
          },
        ]
      }
      organization_fees: {
        Row: {
          created_at: string
          deleted_at: string | null
          fee_type_id: string
          fixed_amount: number | null
          is_enabled: boolean
          name: string
          organization_id: string
          percentage: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          fee_type_id?: string
          fixed_amount?: number | null
          is_enabled?: boolean
          name: string
          organization_id: string
          percentage?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          fee_type_id?: string
          fixed_amount?: number | null
          is_enabled?: boolean
          name?: string
          organization_id?: string
          percentage?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_fees_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      organization_fraud_settings: {
        Row: {
          created_at: string
          custom_action: Database["public"]["Enums"]["fraud_action"] | null
          custom_threshold: number | null
          is_enabled: boolean
          organization_id: string
          rule_id: string
          setting_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          custom_action?: Database["public"]["Enums"]["fraud_action"] | null
          custom_threshold?: number | null
          is_enabled?: boolean
          organization_id: string
          rule_id: string
          setting_id?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          custom_action?: Database["public"]["Enums"]["fraud_action"] | null
          custom_threshold?: number | null
          is_enabled?: boolean
          organization_id?: string
          rule_id?: string
          setting_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_fraud_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "organization_fraud_settings_rule_id_fkey"
            columns: ["rule_id"]
            isOneToOne: false
            referencedRelation: "fraud_rules"
            referencedColumns: ["rule_id"]
          },
        ]
      }
      organization_kyc: {
        Row: {
          address_proof_url: string | null
          authorized_signatory_email: string | null
          authorized_signatory_name: string | null
          business_description: string | null
          business_registration_url: string | null
          kyc_approved_at: string | null
          kyc_submitted_at: string | null
          legal_city: string | null
          legal_country: string | null
          legal_organization_name: string | null
          legal_postal_code: string | null
          legal_region: string | null
          legal_representative_id_url: string | null
          legal_street: string | null
          merchant_id: string
          organization_id: string
          proof_of_business: string | null
          proof_of_business_url: string | null
          status: Database["public"]["Enums"]["kyc_status"]
          tax_number: string | null
        }
        Insert: {
          address_proof_url?: string | null
          authorized_signatory_email?: string | null
          authorized_signatory_name?: string | null
          business_description?: string | null
          business_registration_url?: string | null
          kyc_approved_at?: string | null
          kyc_submitted_at?: string | null
          legal_city?: string | null
          legal_country?: string | null
          legal_organization_name?: string | null
          legal_postal_code?: string | null
          legal_region?: string | null
          legal_representative_id_url?: string | null
          legal_street?: string | null
          merchant_id: string
          organization_id: string
          proof_of_business?: string | null
          proof_of_business_url?: string | null
          status?: Database["public"]["Enums"]["kyc_status"]
          tax_number?: string | null
        }
        Update: {
          address_proof_url?: string | null
          authorized_signatory_email?: string | null
          authorized_signatory_name?: string | null
          business_description?: string | null
          business_registration_url?: string | null
          kyc_approved_at?: string | null
          kyc_submitted_at?: string | null
          legal_city?: string | null
          legal_country?: string | null
          legal_organization_name?: string | null
          legal_postal_code?: string | null
          legal_region?: string | null
          legal_representative_id_url?: string | null
          legal_street?: string | null
          merchant_id?: string
          organization_id?: string
          proof_of_business?: string | null
          proof_of_business_url?: string | null
          status?: Database["public"]["Enums"]["kyc_status"]
          tax_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organization_kyc_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "organization_kyc_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      organization_providers_settings: {
        Row: {
          created_at: string
          email_sent: boolean
          is_connected: boolean
          is_phone_verified: boolean
          metadata: Json | null
          organization_id: string
          phone_number: string | null
          provider_business_type:
            | Database["public"]["Enums"]["provider_business_type"]
            | null
          provider_code: Database["public"]["Enums"]["provider_code"]
          provider_merchant_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email_sent?: boolean
          is_connected?: boolean
          is_phone_verified?: boolean
          metadata?: Json | null
          organization_id: string
          phone_number?: string | null
          provider_business_type?:
            | Database["public"]["Enums"]["provider_business_type"]
            | null
          provider_code: Database["public"]["Enums"]["provider_code"]
          provider_merchant_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email_sent?: boolean
          is_connected?: boolean
          is_phone_verified?: boolean
          metadata?: Json | null
          organization_id?: string
          phone_number?: string | null
          provider_business_type?:
            | Database["public"]["Enums"]["provider_business_type"]
            | null
          provider_code?: Database["public"]["Enums"]["provider_code"]
          provider_merchant_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_providers_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "organization_providers_settings_provider_code_fkey"
            columns: ["provider_code"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["code"]
          },
        ]
      }
      organizations: {
        Row: {
          created_at: string
          default_currency: Database["public"]["Enums"]["currency_code"]
          deleted_at: string | null
          email: string
          employee_number: string | null
          industry: string | null
          is_deleted: boolean
          is_starter_business: boolean
          logo_url: string | null
          metadata: Json | null
          name: string
          organization_id: string
          phone_number: string
          slug: string | null
          status: Database["public"]["Enums"]["organization_status"]
          storefront_enabled: boolean
          total_customers: number | null
          total_merchants: number | null
          total_revenue: number | null
          total_transactions: number | null
          updated_at: string
          verification_status: Database["public"]["Enums"]["organization_verification_status"]
          website_url: string | null
        }
        Insert: {
          created_at?: string
          default_currency?: Database["public"]["Enums"]["currency_code"]
          deleted_at?: string | null
          email: string
          employee_number?: string | null
          industry?: string | null
          is_deleted?: boolean
          is_starter_business?: boolean
          logo_url?: string | null
          metadata?: Json | null
          name: string
          organization_id?: string
          phone_number: string
          slug?: string | null
          status?: Database["public"]["Enums"]["organization_status"]
          storefront_enabled?: boolean
          total_customers?: number | null
          total_merchants?: number | null
          total_revenue?: number | null
          total_transactions?: number | null
          updated_at?: string
          verification_status?: Database["public"]["Enums"]["organization_verification_status"]
          website_url?: string | null
        }
        Update: {
          created_at?: string
          default_currency?: Database["public"]["Enums"]["currency_code"]
          deleted_at?: string | null
          email?: string
          employee_number?: string | null
          industry?: string | null
          is_deleted?: boolean
          is_starter_business?: boolean
          logo_url?: string | null
          metadata?: Json | null
          name?: string
          organization_id?: string
          phone_number?: string
          slug?: string | null
          status?: Database["public"]["Enums"]["organization_status"]
          storefront_enabled?: boolean
          total_customers?: number | null
          total_merchants?: number | null
          total_revenue?: number | null
          total_transactions?: number | null
          updated_at?: string
          verification_status?: Database["public"]["Enums"]["organization_verification_status"]
          website_url?: string | null
        }
        Relationships: []
      }
      payment_links: {
        Row: {
          allow_coupon_code: boolean
          allow_quantity: boolean
          allowed_providers: Database["public"]["Enums"]["provider_code"][]
          cancel_url: string | null
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          expires_at: string | null
          is_active: boolean
          link_id: string
          link_type: Database["public"]["Enums"]["link_type"]
          merchant_id: string
          metadata: Json | null
          organization_id: string
          plan_id: string | null
          price: number | null
          private_description: string | null
          product_id: string | null
          public_description: string | null
          quantity: number
          success_url: string | null
          title: string
          updated_at: string
          url: string
        }
        Insert: {
          allow_coupon_code?: boolean
          allow_quantity?: boolean
          allowed_providers?: Database["public"]["Enums"]["provider_code"][]
          cancel_url?: string | null
          created_at?: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          expires_at?: string | null
          is_active?: boolean
          link_id?: string
          link_type: Database["public"]["Enums"]["link_type"]
          merchant_id: string
          metadata?: Json | null
          organization_id: string
          plan_id?: string | null
          price?: number | null
          private_description?: string | null
          product_id?: string | null
          public_description?: string | null
          quantity?: number
          success_url?: string | null
          title: string
          updated_at?: string
          url: string
        }
        Update: {
          allow_coupon_code?: boolean
          allow_quantity?: boolean
          allowed_providers?: Database["public"]["Enums"]["provider_code"][]
          cancel_url?: string | null
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          expires_at?: string | null
          is_active?: boolean
          link_id?: string
          link_type?: Database["public"]["Enums"]["link_type"]
          merchant_id?: string
          metadata?: Json | null
          organization_id?: string
          plan_id?: string | null
          price?: number | null
          private_description?: string | null
          product_id?: string | null
          public_description?: string | null
          quantity?: number
          success_url?: string | null
          title?: string
          updated_at?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "payment_links_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "payment_links_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "payment_links_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "payment_links_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["plan_id"]
          },
          {
            foreignKeyName: "payment_links_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "merchant_products"
            referencedColumns: ["product_id"]
          },
        ]
      }
      payment_methods: {
        Row: {
          payment_method_code: Database["public"]["Enums"]["payment_method_code"]
          provider_code: Database["public"]["Enums"]["provider_code"]
        }
        Insert: {
          payment_method_code: Database["public"]["Enums"]["payment_method_code"]
          provider_code: Database["public"]["Enums"]["provider_code"]
        }
        Update: {
          payment_method_code?: Database["public"]["Enums"]["payment_method_code"]
          provider_code?: Database["public"]["Enums"]["provider_code"]
        }
        Relationships: [
          {
            foreignKeyName: "payment_methods_provider_code_fkey"
            columns: ["provider_code"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["code"]
          },
        ]
      }
      payment_requests: {
        Row: {
          amount: number
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_id: string | null
          description: string | null
          expiry_date: string
          merchant_id: string
          organization_id: string
          payment_link: string | null
          payment_reference: string | null
          request_id: string
          spi_account_number: string | null
          spi_bulk_instruction_id: string | null
          spi_confirmation: boolean
          spi_date_envoi: string | null
          spi_date_irrevocabilite: string | null
          spi_date_limite_paiement: string | null
          spi_date_limite_reponse: string | null
          spi_date_rejet: string | null
          spi_debit_differe: boolean
          spi_end2end_id: string | null
          spi_payeur_alias: string | null
          spi_payeur_nom: string | null
          spi_payeur_pays: string | null
          spi_payment_request_category:
            | Database["public"]["Enums"]["spi_payment_request_category"]
            | null
          spi_payment_status:
            | Database["public"]["Enums"]["spi_payment_status"]
            | null
          spi_ref_doc_numero: string | null
          spi_ref_doc_type:
            | Database["public"]["Enums"]["spi_document_type"]
            | null
          spi_rejection_reason:
            | Database["public"]["Enums"]["spi_rejection_reason"]
            | null
          spi_remise_amount: number | null
          spi_remise_rate: number | null
          spi_tx_id: string | null
          status: Database["public"]["Enums"]["transaction_status"]
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_id?: string | null
          description?: string | null
          expiry_date: string
          merchant_id: string
          organization_id: string
          payment_link?: string | null
          payment_reference?: string | null
          request_id?: string
          spi_account_number?: string | null
          spi_bulk_instruction_id?: string | null
          spi_confirmation?: boolean
          spi_date_envoi?: string | null
          spi_date_irrevocabilite?: string | null
          spi_date_limite_paiement?: string | null
          spi_date_limite_reponse?: string | null
          spi_date_rejet?: string | null
          spi_debit_differe?: boolean
          spi_end2end_id?: string | null
          spi_payeur_alias?: string | null
          spi_payeur_nom?: string | null
          spi_payeur_pays?: string | null
          spi_payment_request_category?:
            | Database["public"]["Enums"]["spi_payment_request_category"]
            | null
          spi_payment_status?:
            | Database["public"]["Enums"]["spi_payment_status"]
            | null
          spi_ref_doc_numero?: string | null
          spi_ref_doc_type?:
            | Database["public"]["Enums"]["spi_document_type"]
            | null
          spi_rejection_reason?:
            | Database["public"]["Enums"]["spi_rejection_reason"]
            | null
          spi_remise_amount?: number | null
          spi_remise_rate?: number | null
          spi_tx_id?: string | null
          status?: Database["public"]["Enums"]["transaction_status"]
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          customer_id?: string | null
          description?: string | null
          expiry_date?: string
          merchant_id?: string
          organization_id?: string
          payment_link?: string | null
          payment_reference?: string | null
          request_id?: string
          spi_account_number?: string | null
          spi_bulk_instruction_id?: string | null
          spi_confirmation?: boolean
          spi_date_envoi?: string | null
          spi_date_irrevocabilite?: string | null
          spi_date_limite_paiement?: string | null
          spi_date_limite_reponse?: string | null
          spi_date_rejet?: string | null
          spi_debit_differe?: boolean
          spi_end2end_id?: string | null
          spi_payeur_alias?: string | null
          spi_payeur_nom?: string | null
          spi_payeur_pays?: string | null
          spi_payment_request_category?:
            | Database["public"]["Enums"]["spi_payment_request_category"]
            | null
          spi_payment_status?:
            | Database["public"]["Enums"]["spi_payment_status"]
            | null
          spi_ref_doc_numero?: string | null
          spi_ref_doc_type?:
            | Database["public"]["Enums"]["spi_document_type"]
            | null
          spi_rejection_reason?:
            | Database["public"]["Enums"]["spi_rejection_reason"]
            | null
          spi_remise_amount?: number | null
          spi_remise_rate?: number | null
          spi_tx_id?: string | null
          status?: Database["public"]["Enums"]["transaction_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payment_requests_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "payment_requests_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "payment_requests_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "payment_requests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      payouts: {
        Row: {
          account_id: string
          amount: number
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          merchant_id: string
          metadata: Json | null
          organization_id: string | null
          payment_method_code:
            | Database["public"]["Enums"]["payment_method_code"]
            | null
          payout_id: string
          payout_method_id: string | null
          provider_code: Database["public"]["Enums"]["provider_code"] | null
          status: Database["public"]["Enums"]["payout_status"]
          updated_at: string
        }
        Insert: {
          account_id: string
          amount: number
          created_at?: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          merchant_id: string
          metadata?: Json | null
          organization_id?: string | null
          payment_method_code?:
            | Database["public"]["Enums"]["payment_method_code"]
            | null
          payout_id?: string
          payout_method_id?: string | null
          provider_code?: Database["public"]["Enums"]["provider_code"] | null
          status?: Database["public"]["Enums"]["payout_status"]
          updated_at?: string
        }
        Update: {
          account_id?: string
          amount?: number
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          merchant_id?: string
          metadata?: Json | null
          organization_id?: string | null
          payment_method_code?:
            | Database["public"]["Enums"]["payment_method_code"]
            | null
          payout_id?: string
          payout_method_id?: string | null
          provider_code?: Database["public"]["Enums"]["provider_code"] | null
          status?: Database["public"]["Enums"]["payout_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payouts_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "merchant_accounts"
            referencedColumns: ["account_id"]
          },
          {
            foreignKeyName: "payouts_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "merchant_balance_summary"
            referencedColumns: ["account_id"]
          },
          {
            foreignKeyName: "payouts_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "payouts_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "payouts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "payouts_payout_method_id_fkey"
            columns: ["payout_method_id"]
            isOneToOne: false
            referencedRelation: "merchant_payout_methods"
            referencedColumns: ["payout_method_id"]
          },
        ]
      }
      platform_default_fees: {
        Row: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          default_fee_id: string
          description: string | null
          fee_category: Database["public"]["Enums"]["fee_category"]
          fee_payer: Database["public"]["Enums"]["fee_payer_type"]
          fee_subcategory: Database["public"]["Enums"]["fee_subcategory"]
          fixed_amount: number | null
          is_active: boolean
          is_visible: boolean
          metadata: Json | null
          name: string
          payment_method_code:
            | Database["public"]["Enums"]["payment_method_code"]
            | null
          percentage: number | null
          provider_code: Database["public"]["Enums"]["provider_code"] | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          default_fee_id?: string
          description?: string | null
          fee_category: Database["public"]["Enums"]["fee_category"]
          fee_payer?: Database["public"]["Enums"]["fee_payer_type"]
          fee_subcategory: Database["public"]["Enums"]["fee_subcategory"]
          fixed_amount?: number | null
          is_active?: boolean
          is_visible?: boolean
          metadata?: Json | null
          name: string
          payment_method_code?:
            | Database["public"]["Enums"]["payment_method_code"]
            | null
          percentage?: number | null
          provider_code?: Database["public"]["Enums"]["provider_code"] | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          default_fee_id?: string
          description?: string | null
          fee_category?: Database["public"]["Enums"]["fee_category"]
          fee_payer?: Database["public"]["Enums"]["fee_payer_type"]
          fee_subcategory?: Database["public"]["Enums"]["fee_subcategory"]
          fixed_amount?: number | null
          is_active?: boolean
          is_visible?: boolean
          metadata?: Json | null
          name?: string
          payment_method_code?:
            | Database["public"]["Enums"]["payment_method_code"]
            | null
          percentage?: number | null
          provider_code?: Database["public"]["Enums"]["provider_code"] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "platform_default_fees_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "platform_default_fees_provider_code_fkey"
            columns: ["provider_code"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["code"]
          },
        ]
      }
      platform_invoices: {
        Row: {
          amount: number
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string | null
          due_date: string
          merchant_id: string
          metadata: Json | null
          organization_id: string
          platform_invoice_id: string
          status: Database["public"]["Enums"]["invoice_status"]
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description?: string | null
          due_date: string
          merchant_id: string
          metadata?: Json | null
          organization_id: string
          platform_invoice_id?: string
          status?: Database["public"]["Enums"]["invoice_status"]
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          description?: string | null
          due_date?: string
          merchant_id?: string
          metadata?: Json | null
          organization_id?: string
          platform_invoice_id?: string
          status?: Database["public"]["Enums"]["invoice_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "platform_invoices_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "platform_invoices_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "platform_invoices_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      platform_main_account: {
        Row: {
          available_balance: number
          balance_id: string
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          total_balance: number
          updated_at: string
        }
        Insert: {
          available_balance?: number
          balance_id?: string
          created_at?: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          total_balance?: number
          updated_at?: string
        }
        Update: {
          available_balance?: number
          balance_id?: string
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          total_balance?: number
          updated_at?: string
        }
        Relationships: []
      }
      platform_metrics: {
        Row: {
          created_at: string
          entity_type: Database["public"]["Enums"]["entity_type"]
          metadata: Json | null
          metric_date: string
          metric_id: string
          metric_name: string
          metric_value: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          entity_type: Database["public"]["Enums"]["entity_type"]
          metadata?: Json | null
          metric_date: string
          metric_id?: string
          metric_name: string
          metric_value: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          entity_type?: Database["public"]["Enums"]["entity_type"]
          metadata?: Json | null
          metric_date?: string
          metric_id?: string
          metric_name?: string
          metric_value?: number
          updated_at?: string
        }
        Relationships: []
      }
      platform_provider_balance: {
        Row: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          current_balance: number
          platform_revenue: number
          provider_code: Database["public"]["Enums"]["provider_code"]
          provider_fees: number
          quarter_start_date: string
          total_transactions_amount: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          current_balance?: number
          platform_revenue?: number
          provider_code: Database["public"]["Enums"]["provider_code"]
          provider_fees?: number
          quarter_start_date: string
          total_transactions_amount?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          current_balance?: number
          platform_revenue?: number
          provider_code?: Database["public"]["Enums"]["provider_code"]
          provider_fees?: number
          quarter_start_date?: string
          total_transactions_amount?: number
          updated_at?: string
        }
        Relationships: []
      }
      platform_provider_balance_history: {
        Row: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          final_balance: number
          history_id: string
          platform_revenue: number
          provider_code: Database["public"]["Enums"]["provider_code"]
          provider_fees: number
          quarter_end_date: string
          quarter_start_date: string
          total_transactions_amount: number
        }
        Insert: {
          created_at?: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          final_balance: number
          history_id?: string
          platform_revenue: number
          provider_code: Database["public"]["Enums"]["provider_code"]
          provider_fees: number
          quarter_end_date: string
          quarter_start_date: string
          total_transactions_amount: number
        }
        Update: {
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          final_balance?: number
          history_id?: string
          platform_revenue?: number
          provider_code?: Database["public"]["Enums"]["provider_code"]
          provider_fees?: number
          quarter_end_date?: string
          quarter_start_date?: string
          total_transactions_amount?: number
        }
        Relationships: []
      }
      providers: {
        Row: {
          code: Database["public"]["Enums"]["provider_code"]
          description: string | null
          name: string
        }
        Insert: {
          code: Database["public"]["Enums"]["provider_code"]
          description?: string | null
          name: string
        }
        Update: {
          code?: Database["public"]["Enums"]["provider_code"]
          description?: string | null
          name?: string
        }
        Relationships: []
      }
      providers_transactions: {
        Row: {
          checkout_url: string | null
          created_at: string
          error_code: string | null
          error_message: string | null
          error_url: string | null
          ipn_callback_url: string | null
          merchant_id: string
          notif_token: string | null
          pay_address: string | null
          pay_amount: number | null
          pay_currency: string | null
          pay_token: string | null
          provider_checkout_id: string | null
          provider_code: Database["public"]["Enums"]["provider_code"]
          provider_payment_status: Database["public"]["Enums"]["provider_payment_status"]
          provider_transaction_id: string | null
          spi_account_number: string | null
          spi_compte_paye: string | null
          spi_compte_payeur: string | null
          spi_confirmation: boolean
          spi_confirmation_status: string | null
          spi_confirmed_at: string | null
          spi_motif: string | null
          spi_paye_alias: string | null
          spi_paye_nom: string | null
          spi_paye_pays: string | null
          spi_payment_flow_type:
            | Database["public"]["Enums"]["spi_payment_flow_type"]
            | null
          spi_rejected_at: string | null
          success_url: string | null
          transaction_id: string
          updated_at: string
        }
        Insert: {
          checkout_url?: string | null
          created_at?: string
          error_code?: string | null
          error_message?: string | null
          error_url?: string | null
          ipn_callback_url?: string | null
          merchant_id: string
          notif_token?: string | null
          pay_address?: string | null
          pay_amount?: number | null
          pay_currency?: string | null
          pay_token?: string | null
          provider_checkout_id?: string | null
          provider_code: Database["public"]["Enums"]["provider_code"]
          provider_payment_status?: Database["public"]["Enums"]["provider_payment_status"]
          provider_transaction_id?: string | null
          spi_account_number?: string | null
          spi_compte_paye?: string | null
          spi_compte_payeur?: string | null
          spi_confirmation?: boolean
          spi_confirmation_status?: string | null
          spi_confirmed_at?: string | null
          spi_motif?: string | null
          spi_paye_alias?: string | null
          spi_paye_nom?: string | null
          spi_paye_pays?: string | null
          spi_payment_flow_type?:
            | Database["public"]["Enums"]["spi_payment_flow_type"]
            | null
          spi_rejected_at?: string | null
          success_url?: string | null
          transaction_id: string
          updated_at?: string
        }
        Update: {
          checkout_url?: string | null
          created_at?: string
          error_code?: string | null
          error_message?: string | null
          error_url?: string | null
          ipn_callback_url?: string | null
          merchant_id?: string
          notif_token?: string | null
          pay_address?: string | null
          pay_amount?: number | null
          pay_currency?: string | null
          pay_token?: string | null
          provider_checkout_id?: string | null
          provider_code?: Database["public"]["Enums"]["provider_code"]
          provider_payment_status?: Database["public"]["Enums"]["provider_payment_status"]
          provider_transaction_id?: string | null
          spi_account_number?: string | null
          spi_compte_paye?: string | null
          spi_compte_payeur?: string | null
          spi_confirmation?: boolean
          spi_confirmation_status?: string | null
          spi_confirmed_at?: string | null
          spi_motif?: string | null
          spi_paye_alias?: string | null
          spi_paye_nom?: string | null
          spi_paye_pays?: string | null
          spi_payment_flow_type?:
            | Database["public"]["Enums"]["spi_payment_flow_type"]
            | null
          spi_rejected_at?: string | null
          success_url?: string | null
          transaction_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "providers_transactions_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "providers_transactions_provider_code_fkey"
            columns: ["provider_code"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "providers_transactions_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: true
            referencedRelation: "transactions"
            referencedColumns: ["transaction_id"]
          },
        ]
      }
      refunds: {
        Row: {
          amount: number
          created_at: string
          fee_amount: number
          metadata: Json | null
          reason: string | null
          refund_id: string
          refunded_amount: number
          spi_account_number: string | null
          spi_end2end_id: string | null
          spi_fund_return_status:
            | Database["public"]["Enums"]["spi_payment_status"]
            | null
          spi_motif_code:
            | Database["public"]["Enums"]["spi_rejection_reason"]
            | null
          spi_rejection_reason:
            | Database["public"]["Enums"]["spi_rejection_reason"]
            | null
          spi_retour_date_demande: string | null
          spi_retour_date_irrevocabilite: string | null
          spi_tx_id: string | null
          status: Database["public"]["Enums"]["refund_status"]
          transaction_id: string
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          fee_amount?: number
          metadata?: Json | null
          reason?: string | null
          refund_id?: string
          refunded_amount: number
          spi_account_number?: string | null
          spi_end2end_id?: string | null
          spi_fund_return_status?:
            | Database["public"]["Enums"]["spi_payment_status"]
            | null
          spi_motif_code?:
            | Database["public"]["Enums"]["spi_rejection_reason"]
            | null
          spi_rejection_reason?:
            | Database["public"]["Enums"]["spi_rejection_reason"]
            | null
          spi_retour_date_demande?: string | null
          spi_retour_date_irrevocabilite?: string | null
          spi_tx_id?: string | null
          status?: Database["public"]["Enums"]["refund_status"]
          transaction_id: string
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          fee_amount?: number
          metadata?: Json | null
          reason?: string | null
          refund_id?: string
          refunded_amount?: number
          spi_account_number?: string | null
          spi_end2end_id?: string | null
          spi_fund_return_status?:
            | Database["public"]["Enums"]["spi_payment_status"]
            | null
          spi_motif_code?:
            | Database["public"]["Enums"]["spi_rejection_reason"]
            | null
          spi_rejection_reason?:
            | Database["public"]["Enums"]["spi_rejection_reason"]
            | null
          spi_retour_date_demande?: string | null
          spi_retour_date_irrevocabilite?: string | null
          spi_tx_id?: string | null
          status?: Database["public"]["Enums"]["refund_status"]
          transaction_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "refunds_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["transaction_id"]
          },
        ]
      }
      spi_account_aliases: {
        Row: {
          account_number: string
          alias_id: string
          alias_key: string
          alias_type: Database["public"]["Enums"]["spi_alias_type"]
          created_at: string
          is_active: boolean
          is_default: boolean
          merchant_id: string | null
          metadata: Json | null
          organization_id: string
          updated_at: string
        }
        Insert: {
          account_number: string
          alias_id?: string
          alias_key: string
          alias_type: Database["public"]["Enums"]["spi_alias_type"]
          created_at?: string
          is_active?: boolean
          is_default?: boolean
          merchant_id?: string | null
          metadata?: Json | null
          organization_id: string
          updated_at?: string
        }
        Update: {
          account_number?: string
          alias_id?: string
          alias_key?: string
          alias_type?: Database["public"]["Enums"]["spi_alias_type"]
          created_at?: string
          is_active?: boolean
          is_default?: boolean
          merchant_id?: string | null
          metadata?: Json | null
          organization_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "spi_account_aliases_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "spi_account_aliases_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      spi_payment_cancellation_requests: {
        Row: {
          cancellation_id: string
          compte_payeur: string
          created_at: string
          merchant_id: string
          metadata: Json | null
          organization_id: string
          payee_accepted: boolean | null
          payee_response_at: string | null
          spi_cancellation_status:
            | Database["public"]["Enums"]["spi_payment_status"]
            | null
          spi_motif_code:
            | Database["public"]["Enums"]["spi_rejection_reason"]
            | null
          spi_retour_statut:
            | Database["public"]["Enums"]["spi_payment_status"]
            | null
          spi_retour_tx_id: string | null
          spi_tx_id: string
          transaction_id: string
          updated_at: string
        }
        Insert: {
          cancellation_id?: string
          compte_payeur: string
          created_at?: string
          merchant_id: string
          metadata?: Json | null
          organization_id: string
          payee_accepted?: boolean | null
          payee_response_at?: string | null
          spi_cancellation_status?:
            | Database["public"]["Enums"]["spi_payment_status"]
            | null
          spi_motif_code?:
            | Database["public"]["Enums"]["spi_rejection_reason"]
            | null
          spi_retour_statut?:
            | Database["public"]["Enums"]["spi_payment_status"]
            | null
          spi_retour_tx_id?: string | null
          spi_tx_id: string
          transaction_id: string
          updated_at?: string
        }
        Update: {
          cancellation_id?: string
          compte_payeur?: string
          created_at?: string
          merchant_id?: string
          metadata?: Json | null
          organization_id?: string
          payee_accepted?: boolean | null
          payee_response_at?: string | null
          spi_cancellation_status?:
            | Database["public"]["Enums"]["spi_payment_status"]
            | null
          spi_motif_code?:
            | Database["public"]["Enums"]["spi_rejection_reason"]
            | null
          spi_retour_statut?:
            | Database["public"]["Enums"]["spi_payment_status"]
            | null
          spi_retour_tx_id?: string | null
          spi_tx_id?: string
          transaction_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "spi_payment_cancellation_requests_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "spi_payment_cancellation_requests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "spi_payment_cancellation_requests_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["transaction_id"]
          },
        ]
      }
      spi_qr_codes: {
        Row: {
          categorie: Database["public"]["Enums"]["spi_payment_request_category"]
          checkout_session_id: string | null
          compte_paye: string
          created_at: string
          expires_at: string | null
          is_active: boolean
          is_used: boolean
          merchant_id: string
          metadata: Json | null
          montant: number | null
          name: string
          organization_id: string
          payeur_alias: string | null
          payment_request_id: string | null
          plan_id: string | null
          product_id: string | null
          qr_code_data: string
          qr_code_id: string
          qr_code_image_data: string | null
          qr_code_image_url: string | null
          qr_code_type: Database["public"]["Enums"]["qr_code_type"]
          updated_at: string
        }
        Insert: {
          categorie: Database["public"]["Enums"]["spi_payment_request_category"]
          checkout_session_id?: string | null
          compte_paye: string
          created_at?: string
          expires_at?: string | null
          is_active?: boolean
          is_used?: boolean
          merchant_id: string
          metadata?: Json | null
          montant?: number | null
          name: string
          organization_id: string
          payeur_alias?: string | null
          payment_request_id?: string | null
          plan_id?: string | null
          product_id?: string | null
          qr_code_data: string
          qr_code_id?: string
          qr_code_image_data?: string | null
          qr_code_image_url?: string | null
          qr_code_type: Database["public"]["Enums"]["qr_code_type"]
          updated_at?: string
        }
        Update: {
          categorie?: Database["public"]["Enums"]["spi_payment_request_category"]
          checkout_session_id?: string | null
          compte_paye?: string
          created_at?: string
          expires_at?: string | null
          is_active?: boolean
          is_used?: boolean
          merchant_id?: string
          metadata?: Json | null
          montant?: number | null
          name?: string
          organization_id?: string
          payeur_alias?: string | null
          payment_request_id?: string | null
          plan_id?: string | null
          product_id?: string | null
          qr_code_data?: string
          qr_code_id?: string
          qr_code_image_data?: string | null
          qr_code_image_url?: string | null
          qr_code_type?: Database["public"]["Enums"]["qr_code_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "spi_qr_codes_checkout_session_id_fkey"
            columns: ["checkout_session_id"]
            isOneToOne: false
            referencedRelation: "checkout_sessions"
            referencedColumns: ["checkout_session_id"]
          },
          {
            foreignKeyName: "spi_qr_codes_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "spi_qr_codes_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "spi_qr_codes_payment_request_id_fkey"
            columns: ["payment_request_id"]
            isOneToOne: false
            referencedRelation: "payment_requests"
            referencedColumns: ["request_id"]
          },
          {
            foreignKeyName: "spi_qr_codes_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["plan_id"]
          },
          {
            foreignKeyName: "spi_qr_codes_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "merchant_products"
            referencedColumns: ["product_id"]
          },
        ]
      }
      storefronts: {
        Row: {
          created_at: string
          description: string | null
          is_active: boolean
          merchant_id: string
          name: string
          organization_id: string
          storefront_id: string
          theme_color: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          is_active?: boolean
          merchant_id: string
          name: string
          organization_id: string
          storefront_id?: string
          theme_color?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          is_active?: boolean
          merchant_id?: string
          name?: string
          organization_id?: string
          storefront_id?: string
          theme_color?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "storefronts_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "storefronts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      subscription_plans: {
        Row: {
          amount: number
          billing_frequency: Database["public"]["Enums"]["frequency"]
          charge_day: number | null
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string | null
          display_on_storefront: boolean
          failed_payment_action:
            | Database["public"]["Enums"]["failed_payment_action"]
            | null
          first_payment_type: Database["public"]["Enums"]["first_payment_type"]
          image_url: string | null
          is_active: boolean
          merchant_id: string
          metadata: Json | null
          name: string
          organization_id: string
          plan_id: string
          updated_at: string
        }
        Insert: {
          amount: number
          billing_frequency: Database["public"]["Enums"]["frequency"]
          charge_day?: number | null
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          description?: string | null
          display_on_storefront?: boolean
          failed_payment_action?:
            | Database["public"]["Enums"]["failed_payment_action"]
            | null
          first_payment_type?: Database["public"]["Enums"]["first_payment_type"]
          image_url?: string | null
          is_active?: boolean
          merchant_id: string
          metadata?: Json | null
          name: string
          organization_id: string
          plan_id?: string
          updated_at?: string
        }
        Update: {
          amount?: number
          billing_frequency?: Database["public"]["Enums"]["frequency"]
          charge_day?: number | null
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          description?: string | null
          display_on_storefront?: boolean
          failed_payment_action?:
            | Database["public"]["Enums"]["failed_payment_action"]
            | null
          first_payment_type?: Database["public"]["Enums"]["first_payment_type"]
          image_url?: string | null
          is_active?: boolean
          merchant_id?: string
          metadata?: Json | null
          name?: string
          organization_id?: string
          plan_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscription_plans_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "subscription_plans_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "subscription_plans_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      support_requests: {
        Row: {
          category: Database["public"]["Enums"]["support_category"]
          created_at: string
          image_url: string | null
          merchant_id: string
          message: string
          organization_id: string
          priority: Database["public"]["Enums"]["support_priority"]
          status: Database["public"]["Enums"]["support_status"]
          support_requests_id: string
          updated_at: string
        }
        Insert: {
          category: Database["public"]["Enums"]["support_category"]
          created_at?: string
          image_url?: string | null
          merchant_id: string
          message: string
          organization_id: string
          priority?: Database["public"]["Enums"]["support_priority"]
          status?: Database["public"]["Enums"]["support_status"]
          support_requests_id?: string
          updated_at?: string
        }
        Update: {
          category?: Database["public"]["Enums"]["support_category"]
          created_at?: string
          image_url?: string | null
          merchant_id?: string
          message?: string
          organization_id?: string
          priority?: Database["public"]["Enums"]["support_priority"]
          status?: Database["public"]["Enums"]["support_status"]
          support_requests_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "support_requests_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "support_requests_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      team_balance_access_rules: {
        Row: {
          account_id: string | null
          approval_required: boolean
          can_view: boolean
          can_withdraw: boolean
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"] | null
          merchant_id: string | null
          organization_id: string
          role: Database["public"]["Enums"]["member_role"]
          rule_id: string
          updated_at: string
          withdraw_limit: number | null
        }
        Insert: {
          account_id?: string | null
          approval_required?: boolean
          can_view?: boolean
          can_withdraw?: boolean
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"] | null
          merchant_id?: string | null
          organization_id: string
          role: Database["public"]["Enums"]["member_role"]
          rule_id?: string
          updated_at?: string
          withdraw_limit?: number | null
        }
        Update: {
          account_id?: string | null
          approval_required?: boolean
          can_view?: boolean
          can_withdraw?: boolean
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"] | null
          merchant_id?: string | null
          organization_id?: string
          role?: Database["public"]["Enums"]["member_role"]
          rule_id?: string
          updated_at?: string
          withdraw_limit?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "team_balance_access_rules_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "merchant_accounts"
            referencedColumns: ["account_id"]
          },
          {
            foreignKeyName: "team_balance_access_rules_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "merchant_balance_summary"
            referencedColumns: ["account_id"]
          },
          {
            foreignKeyName: "team_balance_access_rules_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "team_balance_access_rules_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
      token_cache: {
        Row: {
          id: string
          updated_at: string
          value: Json
        }
        Insert: {
          id: string
          updated_at?: string
          value: Json
        }
        Update: {
          id?: string
          updated_at?: string
          value?: Json
        }
        Relationships: []
      }
      transactions: {
        Row: {
          checkout_session_id: string | null
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_id: string
          description: string | null
          fee_amount: number
          fee_structure_id: string | null
          gross_amount: number
          is_bnpl: boolean
          is_pos: boolean
          merchant_id: string
          metadata: Json | null
          net_amount: number
          organization_id: string
          payment_method_code: Database["public"]["Enums"]["payment_method_code"]
          product_id: string | null
          provider_code: Database["public"]["Enums"]["provider_code"]
          quantity: number
          spi_account_number: string | null
          spi_bulk_instruction_id: string | null
          spi_date_envoi: string | null
          spi_date_irrevocabilite: string | null
          spi_discount_amount: number | null
          spi_discount_rate: number | null
          spi_end2end_id: string | null
          spi_payment_category:
            | Database["public"]["Enums"]["spi_payment_category"]
            | null
          spi_payment_flow_type:
            | Database["public"]["Enums"]["spi_payment_flow_type"]
            | null
          spi_payment_status:
            | Database["public"]["Enums"]["spi_payment_status"]
            | null
          spi_rejection_reason:
            | Database["public"]["Enums"]["spi_rejection_reason"]
            | null
          spi_tx_id: string | null
          status: Database["public"]["Enums"]["transaction_status"]
          subscription_id: string | null
          transaction_id: string
          transaction_type: Database["public"]["Enums"]["transaction_type"]
          updated_at: string
        }
        Insert: {
          checkout_session_id?: string | null
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          customer_id: string
          description?: string | null
          fee_amount: number
          fee_structure_id?: string | null
          gross_amount: number
          is_bnpl?: boolean
          is_pos?: boolean
          merchant_id: string
          metadata?: Json | null
          net_amount: number
          organization_id: string
          payment_method_code: Database["public"]["Enums"]["payment_method_code"]
          product_id?: string | null
          provider_code: Database["public"]["Enums"]["provider_code"]
          quantity?: number
          spi_account_number?: string | null
          spi_bulk_instruction_id?: string | null
          spi_date_envoi?: string | null
          spi_date_irrevocabilite?: string | null
          spi_discount_amount?: number | null
          spi_discount_rate?: number | null
          spi_end2end_id?: string | null
          spi_payment_category?:
            | Database["public"]["Enums"]["spi_payment_category"]
            | null
          spi_payment_flow_type?:
            | Database["public"]["Enums"]["spi_payment_flow_type"]
            | null
          spi_payment_status?:
            | Database["public"]["Enums"]["spi_payment_status"]
            | null
          spi_rejection_reason?:
            | Database["public"]["Enums"]["spi_rejection_reason"]
            | null
          spi_tx_id?: string | null
          status?: Database["public"]["Enums"]["transaction_status"]
          subscription_id?: string | null
          transaction_id?: string
          transaction_type: Database["public"]["Enums"]["transaction_type"]
          updated_at?: string
        }
        Update: {
          checkout_session_id?: string | null
          created_at?: string
          currency_code?: Database["public"]["Enums"]["currency_code"]
          customer_id?: string
          description?: string | null
          fee_amount?: number
          fee_structure_id?: string | null
          gross_amount?: number
          is_bnpl?: boolean
          is_pos?: boolean
          merchant_id?: string
          metadata?: Json | null
          net_amount?: number
          organization_id?: string
          payment_method_code?: Database["public"]["Enums"]["payment_method_code"]
          product_id?: string | null
          provider_code?: Database["public"]["Enums"]["provider_code"]
          quantity?: number
          spi_account_number?: string | null
          spi_bulk_instruction_id?: string | null
          spi_date_envoi?: string | null
          spi_date_irrevocabilite?: string | null
          spi_discount_amount?: number | null
          spi_discount_rate?: number | null
          spi_end2end_id?: string | null
          spi_payment_category?:
            | Database["public"]["Enums"]["spi_payment_category"]
            | null
          spi_payment_flow_type?:
            | Database["public"]["Enums"]["spi_payment_flow_type"]
            | null
          spi_payment_status?:
            | Database["public"]["Enums"]["spi_payment_status"]
            | null
          spi_rejection_reason?:
            | Database["public"]["Enums"]["spi_rejection_reason"]
            | null
          spi_tx_id?: string | null
          status?: Database["public"]["Enums"]["transaction_status"]
          subscription_id?: string | null
          transaction_id?: string
          transaction_type?: Database["public"]["Enums"]["transaction_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_transactions_checkout_session"
            columns: ["checkout_session_id"]
            isOneToOne: false
            referencedRelation: "checkout_sessions"
            referencedColumns: ["checkout_session_id"]
          },
          {
            foreignKeyName: "transactions_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "transactions_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "transactions_fee_structure_id_fkey"
            columns: ["fee_structure_id"]
            isOneToOne: false
            referencedRelation: "organization_fee_structure"
            referencedColumns: ["fee_structure_id"]
          },
          {
            foreignKeyName: "transactions_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "transactions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "transactions_payment_method_code_provider_code_fkey"
            columns: ["payment_method_code", "provider_code"]
            isOneToOne: false
            referencedRelation: "payment_methods"
            referencedColumns: ["payment_method_code", "provider_code"]
          },
          {
            foreignKeyName: "transactions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "merchant_products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "transactions_provider_code_fkey"
            columns: ["provider_code"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "transactions_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "merchant_subscriptions"
            referencedColumns: ["subscription_id"]
          },
        ]
      }
      webhook_delivery_logs: {
        Row: {
          attempt_number: number
          compte_paye: string | null
          compte_payeur: string | null
          created_at: string
          event_type: string
          headers: Json | null
          ip_address: string | null
          log_id: string
          merchant_id: string
          montant: number | null
          organization_id: string
          payload: Json
          request_duration_ms: number | null
          response_body: string | null
          response_status: number | null
          spi_event_code:
            | Database["public"]["Enums"]["spi_webhook_event_code"]
            | null
          spi_tx_id: string | null
          success: boolean
          user_agent: string | null
          webhook_id: string
        }
        Insert: {
          attempt_number?: number
          compte_paye?: string | null
          compte_payeur?: string | null
          created_at?: string
          event_type: string
          headers?: Json | null
          ip_address?: string | null
          log_id?: string
          merchant_id: string
          montant?: number | null
          organization_id: string
          payload: Json
          request_duration_ms?: number | null
          response_body?: string | null
          response_status?: number | null
          spi_event_code?:
            | Database["public"]["Enums"]["spi_webhook_event_code"]
            | null
          spi_tx_id?: string | null
          success?: boolean
          user_agent?: string | null
          webhook_id: string
        }
        Update: {
          attempt_number?: number
          compte_paye?: string | null
          compte_payeur?: string | null
          created_at?: string
          event_type?: string
          headers?: Json | null
          ip_address?: string | null
          log_id?: string
          merchant_id?: string
          montant?: number | null
          organization_id?: string
          payload?: Json
          request_duration_ms?: number | null
          response_body?: string | null
          response_status?: number | null
          spi_event_code?:
            | Database["public"]["Enums"]["spi_webhook_event_code"]
            | null
          spi_tx_id?: string | null
          success?: boolean
          user_agent?: string | null
          webhook_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_webhook"
            columns: ["webhook_id"]
            isOneToOne: false
            referencedRelation: "webhooks"
            referencedColumns: ["webhook_id"]
          },
          {
            foreignKeyName: "webhook_delivery_logs_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "webhook_delivery_logs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
          {
            foreignKeyName: "webhook_delivery_logs_webhook_id_fkey"
            columns: ["webhook_id"]
            isOneToOne: false
            referencedRelation: "webhooks"
            referencedColumns: ["webhook_id"]
          },
        ]
      }
      webhooks: {
        Row: {
          authorized_events: Database["public"]["Enums"]["webhook_event"][]
          created_at: string
          deleted_at: string | null
          is_active: boolean
          last_payload: Json | null
          last_response_body: string | null
          last_response_status: number | null
          last_triggered_at: string | null
          merchant_id: string
          metadata: Json | null
          organization_id: string
          retry_count: number | null
          spi_event_types: string[] | null
          supports_spi: boolean
          updated_at: string
          url: string
          verification_token: string
          webhook_id: string
        }
        Insert: {
          authorized_events?: Database["public"]["Enums"]["webhook_event"][]
          created_at?: string
          deleted_at?: string | null
          is_active?: boolean
          last_payload?: Json | null
          last_response_body?: string | null
          last_response_status?: number | null
          last_triggered_at?: string | null
          merchant_id: string
          metadata?: Json | null
          organization_id: string
          retry_count?: number | null
          spi_event_types?: string[] | null
          supports_spi?: boolean
          updated_at?: string
          url: string
          verification_token: string
          webhook_id?: string
        }
        Update: {
          authorized_events?: Database["public"]["Enums"]["webhook_event"][]
          created_at?: string
          deleted_at?: string | null
          is_active?: boolean
          last_payload?: Json | null
          last_response_body?: string | null
          last_response_status?: number | null
          last_triggered_at?: string | null
          merchant_id?: string
          metadata?: Json | null
          organization_id?: string
          retry_count?: number | null
          spi_event_types?: string[] | null
          supports_spi?: boolean
          updated_at?: string
          url?: string
          verification_token?: string
          webhook_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "webhooks_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "webhooks_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
    }
    Views: {
      merchant_balance_summary: {
        Row: {
          account_id: string | null
          balance_difference: number | null
          created_at: string | null
          currency_code: Database["public"]["Enums"]["currency_code"] | null
          is_spi_account: boolean | null
          merchant_id: string | null
          organization_id: string | null
          revenue_balance: number | null
          spi_account_number: string | null
          spi_account_status:
            | Database["public"]["Enums"]["spi_account_status"]
            | null
          spi_account_type:
            | Database["public"]["Enums"]["spi_account_type"]
            | null
          spi_balance_last_synced: string | null
          spi_bank_balance: number | null
          spi_bank_balance_xof: number | null
          updated_at: string | null
        }
        Insert: {
          account_id?: string | null
          balance_difference?: never
          created_at?: string | null
          currency_code?: Database["public"]["Enums"]["currency_code"] | null
          is_spi_account?: boolean | null
          merchant_id?: string | null
          organization_id?: string | null
          revenue_balance?: number | null
          spi_account_number?: string | null
          spi_account_status?:
            | Database["public"]["Enums"]["spi_account_status"]
            | null
          spi_account_type?:
            | Database["public"]["Enums"]["spi_account_type"]
            | null
          spi_balance_last_synced?: string | null
          spi_bank_balance?: number | null
          spi_bank_balance_xof?: never
          updated_at?: string | null
        }
        Update: {
          account_id?: string | null
          balance_difference?: never
          created_at?: string | null
          currency_code?: Database["public"]["Enums"]["currency_code"] | null
          is_spi_account?: boolean | null
          merchant_id?: string | null
          organization_id?: string | null
          revenue_balance?: number | null
          spi_account_number?: string | null
          spi_account_status?:
            | Database["public"]["Enums"]["spi_account_status"]
            | null
          spi_account_type?:
            | Database["public"]["Enums"]["spi_account_type"]
            | null
          spi_balance_last_synced?: string | null
          spi_bank_balance?: number | null
          spi_bank_balance_xof?: never
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "merchant_accounts_currency_code_fkey"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currencies"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "merchant_accounts_merchant_id_fkey"
            columns: ["merchant_id"]
            isOneToOne: false
            referencedRelation: "merchants"
            referencedColumns: ["merchant_id"]
          },
          {
            foreignKeyName: "merchant_accounts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["organization_id"]
          },
        ]
      }
    }
    Functions: {
      add_assistant_message: {
        Args: {
          p_content: string
          p_conversation_id: string
          p_merchant_id: string
          p_message_index: number
          p_metadata?: Json
          p_model_used?: string
          p_response_time_ms?: number
          p_role: string
          p_tokens_used?: number
        }
        Returns: {
          message_id: string
        }[]
      }
      add_created_at_column: {
        Args: { p_table_name: string }
        Returns: undefined
      }
      add_timestamp_columns: {
        Args: { p_table_name: string }
        Returns: undefined
      }
      add_updated_at_column: {
        Args: { p_table_name: string }
        Returns: undefined
      }
      add_withdrawal_notification_email: {
        Args: { p_email: string }
        Returns: boolean
      }
      apply_coupon: {
        Args: {
          p_checkout_session_id?: string
          p_coupon_id: string
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_fees_amount?: number
          p_organization_id: string
          p_original_amount: number
          p_quantity?: number
          p_transaction_id?: string
        }
        Returns: {
          applied_coupon_id: string
          discount_amount: number
          final_amount: number
          message: string
          success: boolean
        }[]
      }
      approve_cli_device_request: {
        Args: {
          p_device_code: string
          p_merchant_id: string
          p_organization_id: string
        }
        Returns: boolean
      }
      auto_connect_spi: {
        Args: { p_organization_id: string }
        Returns: undefined
      }
      calculate_beneficiary_payout_fee: {
        Args: {
          p_amount: number
          p_provider_code?: Database["public"]["Enums"]["provider_code"]
        }
        Returns: {
          fee_amount: number
          fee_percentage: number
          total_amount: number
        }[]
      }
      calculate_bnpl_breakdown: {
        Args: {
          p_currency_code?: Database["public"]["Enums"]["currency_code"]
          p_installment_count: number
          p_organization_id: string
          p_product_amount: number
        }
        Returns: {
          customer_installment_amount: number
          customer_interest_per_installment: number
          customer_interest_total: number
          customer_principal: number
          customer_total: number
          merchant_processing_fee: number
          merchant_receives_immediately: number
          platform_financing_revenue: number
          platform_processing_revenue: number
          platform_total_revenue: number
        }[]
      }
      calculate_bnpl_financing: {
        Args: {
          p_currency_code?: Database["public"]["Enums"]["currency_code"]
          p_installment_count: number
          p_interest_rate?: number
          p_product_amount: number
        }
        Returns: {
          installment_amount: number
          interest_amount: number
          merchant_fee: number
          platform_revenue: number
          total_with_interest: number
        }[]
      }
      calculate_coupon_discount: {
        Args: {
          p_base_amount: number
          p_coupon_id: string
          p_fees_amount?: number
          p_quantity?: number
        }
        Returns: {
          discount_amount: number
          discount_type: Database["public"]["Enums"]["discount_type_enum"]
          final_amount: number
          message: string
          success: boolean
        }[]
      }
      calculate_date_range: {
        Args: {
          p_custom_end: string
          p_custom_start: string
          p_date_range: string
        }
        Returns: {
          end_date: string
          start_date: string
        }[]
      }
      calculate_mass_payout_totals_and_balance: {
        Args: {
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_merchant_id: string
          p_payout_data: Json
          p_provider_code: Database["public"]["Enums"]["provider_code"]
        }
        Returns: {
          current_balance: number
          has_sufficient_balance: boolean
          message: string
          total_amount: number
          total_deduction: number
          total_fee: number
        }[]
      }
      calculate_merchant_mrr: {
        Args: { p_merchant_id: string }
        Returns: {
          arr: number
          mrr: number
        }[]
      }
      calculate_organization_fees: {
        Args: { p_amount: number; p_product_id: string; p_quantity?: number }
        Returns: {
          calculated_fee: number
          fee_category: Database["public"]["Enums"]["fee_category"]
          fee_structure_id: string
          fee_subcategory: Database["public"]["Enums"]["fee_subcategory"]
          fixed_amount: number
          name: string
          percentage: number
        }[]
      }
      calculate_organization_metrics: {
        Args: { p_organization_id: string }
        Returns: {
          arr: number
          mrr: number
          total_revenue: number
          total_transactions: number
        }[]
      }
      calculate_payout_fee: {
        Args: {
          p_amount: number
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_organization_id: string
          p_payment_method_code: Database["public"]["Enums"]["payment_method_code"]
          p_provider_code: Database["public"]["Enums"]["provider_code"]
        }
        Returns: {
          fee_amount: number
          fee_name: string
          fee_structure_id: string
        }[]
      }
      calculate_transaction_fee: {
        Args: {
          p_amount: number
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_organization_id: string
          p_payment_method_code: Database["public"]["Enums"]["payment_method_code"]
          p_provider_code: Database["public"]["Enums"]["provider_code"]
        }
        Returns: {
          fee_amount: number
          fee_name: string
          fee_structure_id: string
        }[]
      }
      cancel_customer_subscription: {
        Args: { p_merchant_id: string; p_subscription_id: string }
        Returns: boolean
      }
      check_activation_status: {
        Args: { p_merchant_id: string }
        Returns: boolean
      }
      check_email_exists: { Args: { p_email: string }; Returns: boolean }
      check_merchant_available_balance: {
        Args: {
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_merchant_id: string
        }
        Returns: number
      }
      check_merchant_balance_for_beneficiary_payout: {
        Args: {
          p_amount: number
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_merchant_id: string
          p_provider_code?: Database["public"]["Enums"]["provider_code"]
        }
        Returns: {
          current_balance: number
          fee_amount: number
          has_sufficient_balance: boolean
          message: string
          required_amount: number
        }[]
      }
      check_onboarding_status: {
        Args: { p_merchant_id: string }
        Returns: Json
      }
      check_organization_admin_access: {
        Args: { p_merchant_id: string }
        Returns: boolean
      }
      check_provider_available_for_email: {
        Args: { p_email: string; p_provider: string }
        Returns: boolean
      }
      check_rate_limit: {
        Args: {
          p_api_key: string
          p_endpoint: string
          p_organization_id: string
        }
        Returns: boolean
      }
      check_stripe_connect_status: {
        Args: { p_merchant_id: string; p_organization_id?: string }
        Returns: Json
      }
      cleanup_expired_payment_links: { Args: never; Returns: number }
      cleanup_old_notifications: { Args: never; Returns: undefined }
      column_exists: {
        Args: { p_column_name: string; p_table_name: string }
        Returns: boolean
      }
      complete_cli_device_request: {
        Args: { p_device_code: string }
        Returns: boolean
      }
      complete_onboarding: {
        Args: {
          p_address_proof_url?: string
          p_avatar_url: string
          p_business_description?: string
          p_business_registration_url?: string
          p_country: string
          p_how_did_you_hear_about_us: string
          p_identity_proof_url?: string
          p_is_authorized_signatory?: boolean
          p_is_starter_business?: boolean
          p_logo_url: string
          p_merchant_id: string
          p_org_city: string
          p_org_country: string
          p_org_district: string
          p_org_email: string
          p_org_employee_number: string
          p_org_industry: string
          p_org_name: string
          p_org_phone_number: string
          p_org_postal_code: string
          p_org_region: string
          p_org_street: string
          p_org_website_url: string
          p_organization_position: string
          p_phone_number: string
          p_preferred_language: string
          p_proof_of_business?: string
          p_proof_of_business_url?: string
          p_signatory_email?: string
          p_signatory_name?: string
          p_tax_number?: string
        }
        Returns: undefined
      }
      convert_currency: {
        Args: {
          p_amount: number
          p_conversion_type?: Database["public"]["Enums"]["conversion_type"]
          p_from_currency: Database["public"]["Enums"]["currency_code"]
          p_merchant_id?: string
          p_organization_id?: string
          p_reference_id?: string
          p_to_currency: Database["public"]["Enums"]["currency_code"]
        }
        Returns: number
      }
      create_assistant_conversation: {
        Args: { p_merchant_id: string; p_metadata?: Json; p_title?: string }
        Returns: {
          conversation_id: string
          created_at: string
          title: string
        }[]
      }
      create_assistant_feedback: {
        Args: { p_merchant_id: string; p_message: string; p_sentiment: string }
        Returns: undefined
      }
      create_beneficiary_payout: {
        Args: {
          p_amount: number
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_merchant_id: string
          p_metadata?: Json
          p_payment_method_code?: Database["public"]["Enums"]["payment_method_code"]
          p_payout_method_id?: string
          p_provider_code?: Database["public"]["Enums"]["provider_code"]
          p_status?: Database["public"]["Enums"]["payout_status"]
        }
        Returns: {
          fee_amount: number
          message: string
          payout_id: string
          status: Database["public"]["Enums"]["payout_status"]
          total_deduction: number
        }[]
      }
      create_beneficiary_payout_with_wave: {
        Args: {
          p_amount: number
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_merchant_id: string
          p_metadata?: Json
          p_payment_method_code?: Database["public"]["Enums"]["payment_method_code"]
          p_provider_code?: Database["public"]["Enums"]["provider_code"]
          p_status?: Database["public"]["Enums"]["payout_status"]
          p_wave_payout_id: string
        }
        Returns: {
          fee_amount: number
          message: string
          payout_id: string
          status: Database["public"]["Enums"]["payout_status"]
          total_deduction: number
        }[]
      }
      create_bnpl_installment_plan: {
        Args: {
          p_currency_code?: Database["public"]["Enums"]["currency_code"]
          p_customer_id: string
          p_installment_count: number
          p_interest_rate?: number
          p_merchant_id: string
          p_organization_id: string
          p_product_amount: number
          p_product_id: string
        }
        Returns: string
      }
      create_bnpl_plan_with_spi: {
        Args: {
          p_checkout_session_id?: string
          p_currency_code?: Database["public"]["Enums"]["currency_code"]
          p_customer_id: string
          p_installment_count: number
          p_merchant_id: string
          p_organization_id: string
          p_product_amount: number
          p_product_id: string
          p_spi_account_number?: string
        }
        Returns: {
          customer_total: number
          initial_transaction_id: string
          merchant_receives: number
          payment_request_ids: string[]
          plan_id: string
        }[]
      }
      create_checkout_session: {
        Args: {
          p_allow_coupon_code?: boolean
          p_allow_quantity?: boolean
          p_allowed_providers?: Database["public"]["Enums"]["provider_code"][]
          p_amount?: number
          p_cancel_url?: string
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_customer_email?: string
          p_customer_id?: string
          p_customer_name?: string
          p_customer_phone?: string
          p_expiration_minutes?: number
          p_merchant_id: string
          p_metadata?: Json
          p_organization_id: string
          p_payment_link_id?: string
          p_plan_id?: string
          p_product_id?: string
          p_public_description?: string
          p_quantity?: number
          p_success_url?: string
          p_title?: string
        }
        Returns: Json
      }
      create_checkout_session_from_payment_link: {
        Args: {
          p_customer_email?: string
          p_customer_id?: string
          p_customer_name?: string
          p_customer_phone?: string
          p_expiration_minutes?: number
          p_payment_link_id: string
          p_quantity?: number
        }
        Returns: Json
      }
      create_cli_api_key: {
        Args: {
          p_api_key: string
          p_key_name: string
          p_merchant_id: string
          p_organization_id: string
        }
        Returns: boolean
      }
      create_cli_device_request: {
        Args: {
          p_device_code: string
          p_expires_at: string
          p_interval: number
          p_user_code: string
        }
        Returns: undefined
      }
      create_customer: {
        Args: {
          p_address?: string
          p_city?: string
          p_country?: string
          p_email: string
          p_is_business?: boolean
          p_merchant_id: string
          p_name: string
          p_organization_id: string
          p_phone_number?: string
          p_postal_code?: string
          p_whatsapp_number?: string
        }
        Returns: string
      }
      create_discount_coupon: {
        Args: {
          p_code: string
          p_customer_type?: Database["public"]["Enums"]["customer_type_enum"]
          p_description?: string
          p_discount_fixed_amount?: number
          p_discount_percentage?: number
          p_discount_type?: Database["public"]["Enums"]["discount_type_enum"]
          p_expires_at?: string
          p_is_active?: boolean
          p_is_organization_wide?: boolean
          p_max_quantity_per_use?: number
          p_max_uses?: number
          p_organization_id: string
          p_plan_ids?: string[]
          p_product_ids?: string[]
          p_usage_frequency_limit?: Database["public"]["Enums"]["usage_frequency_enum"]
          p_usage_limit_value?: number
          p_valid_from?: string
        }
        Returns: string
      }
      create_feedback: {
        Args: { p_merchant_id: string; p_message: string; p_sentiment: string }
        Returns: string
      }
      create_index_if_not_exists: {
        Args: {
          p_column_name: string
          p_index_name: string
          p_index_type?: string
          p_table_name: string
        }
        Returns: undefined
      }
      create_initial_organization: {
        Args: { new_merchant_id: string }
        Returns: undefined
      }
      create_mass_beneficiary_payout: {
        Args: {
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_merchant_id: string
          p_payout_data: Json
          p_provider_code: Database["public"]["Enums"]["provider_code"]
        }
        Returns: {
          message: string
          payout_id: string
          recipient_name: string
          recipient_phone: string
          status: Database["public"]["Enums"]["payout_status"]
        }[]
      }
      create_mass_beneficiary_payout_with_wave: {
        Args: {
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_merchant_id: string
          p_payout_data: Json
          p_provider_code: Database["public"]["Enums"]["provider_code"]
        }
        Returns: {
          message: string
          payout_id: string
          recipient_name: string
          recipient_phone: string
          status: Database["public"]["Enums"]["payout_status"]
          wave_payout_id: string
        }[]
      }
      create_meter: {
        Args: {
          p_aggregation: Json
          p_filter: Json
          p_name: string
          p_organization_id: string
        }
        Returns: {
          aggregation: Json
          created_at: string
          filter: Json
          is_active: boolean
          meter_id: string
          name: string
          organization_id: string
          updated_at: string
        }[]
        SetofOptions: {
          from: "*"
          to: "meters"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      create_mtn_transaction: {
        Args: {
          p_amount: number
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_customer_id: string
          p_description?: string
          p_merchant_id: string
          p_metadata?: Json
          p_organization_id: string
          p_product_id?: string
          p_quantity?: number
          p_subscription_id?: string
        }
        Returns: {
          external_id: string
          transaction_id: string
        }[]
      }
      create_nowpayments_checkout_transaction: {
        Args: {
          p_amount: number
          p_checkout_url: string
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_customer_id: string
          p_description?: string
          p_error_url: string
          p_ipn_callback_url?: string
          p_merchant_id: string
          p_metadata?: Json
          p_organization_id: string
          p_pay_amount?: number
          p_pay_currency?: string
          p_product_id?: string
          p_provider_checkout_id: string
          p_quantity?: number
          p_subscription_id?: string
          p_success_url: string
        }
        Returns: string
      }
      create_or_update_customer: {
        Args: {
          p_address: string
          p_city: string
          p_country: string
          p_email: string
          p_merchant_id: string
          p_name: string
          p_organization_id: string
          p_phone_number: string
          p_postal_code: string
          p_whatsapp_number: string
        }
        Returns: string
      }
      create_organization: {
        Args: {
          p_merchant_id: string
          p_name?: string
          p_role?: Database["public"]["Enums"]["member_role"]
        }
        Returns: {
          organization_id: string
          store_handle: string
        }[]
      }
      create_organization_webhook: {
        Args: {
          p_authorized_events: Database["public"]["Enums"]["webhook_event"][]
          p_is_active?: boolean
          p_merchant_id: string
          p_metadata?: Json
          p_url: string
        }
        Returns: {
          authorized_events: Database["public"]["Enums"]["webhook_event"][]
          created_at: string
          deleted_at: string | null
          is_active: boolean
          last_payload: Json | null
          last_response_body: string | null
          last_response_status: number | null
          last_triggered_at: string | null
          merchant_id: string
          metadata: Json | null
          organization_id: string
          retry_count: number | null
          spi_event_types: string[] | null
          supports_spi: boolean
          updated_at: string
          url: string
          verification_token: string
          webhook_id: string
        }
        SetofOptions: {
          from: "*"
          to: "webhooks"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      create_payment_link: {
        Args: {
          p_allow_coupon_code?: boolean
          p_allow_quantity?: boolean
          p_allowed_providers?: Database["public"]["Enums"]["provider_code"][]
          p_cancel_url?: string
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_expires_at?: string
          p_link_type: Database["public"]["Enums"]["link_type"]
          p_merchant_id: string
          p_organization_id: string
          p_plan_id?: string
          p_price?: number
          p_private_description?: string
          p_product_id?: string
          p_public_description?: string
          p_success_url?: string
          p_title: string
        }
        Returns: string
      }
      create_payout_method: {
        Args: {
          p_account_name: string
          p_account_number: string
          p_bank_code?: string
          p_bank_name: string
          p_branch_code?: string
          p_country: string
          p_is_default?: boolean
          p_is_spi_enabled?: boolean
          p_organization_id?: string
          p_payout_method_type?: string
          p_spi_account_number?: string
          p_spi_alias_mbno?: string
          p_spi_alias_shid?: string
          p_spi_alias_type?: string
        }
        Returns: string
      }
      create_pos_checkout_session: {
        Args: {
          p_amount?: number
          p_currency_code?: Database["public"]["Enums"]["currency_code"]
          p_expiration_minutes?: number
          p_merchant_id: string
          p_metadata?: Json
          p_organization_id: string
          p_plan_id?: string
          p_product_id?: string
          p_qr_code_type?: Database["public"]["Enums"]["qr_code_type"]
        }
        Returns: Json
      }
      create_product: {
        Args: {
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_description: string
          p_display_on_storefront?: boolean
          p_fee_type_ids?: string[]
          p_image_url?: string
          p_is_active?: boolean
          p_merchant_id: string
          p_name: string
          p_organization_id: string
          p_price: number
        }
        Returns: string
      }
      create_refund: {
        Args: {
          p_amount: number
          p_merchant_id: string
          p_metadata?: Json
          p_provider_code?: Database["public"]["Enums"]["provider_code"]
          p_provider_merchant_id?: string
          p_provider_transaction_id?: string
          p_reason?: string
          p_transaction_id: string
        }
        Returns: string
      }
      create_static_qr_code_for_product_or_plan: {
        Args: {
          p_currency_code?: Database["public"]["Enums"]["currency_code"]
          p_merchant_id: string
          p_metadata?: Json
          p_name: string
          p_organization_id: string
          p_plan_id?: string
          p_product_id?: string
        }
        Returns: Json
      }
      create_stripe_connect_account: {
        Args: {
          p_business_type?: string
          p_company_domicile_country?: string
          p_merchant_id?: string
          p_org_stripe_country?: string
          p_organization_id?: string
          p_stripe_account_id: string
          p_stripe_account_type?: string
          p_stripe_metadata?: Json
        }
        Returns: undefined
      }
      create_stripe_transaction: {
        Args: {
          p_amount: number
          p_checkout_session_id?: string
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_customer_id: string
          p_description?: string
          p_merchant_id: string
          p_metadata?: Json
          p_organization_id: string
          p_product_id?: string
          p_provider_transaction_id: string
          p_quantity?: number
          p_subscription_id?: string
        }
        Returns: string
      }
      create_subscription: {
        Args: {
          p_amount: number
          p_billing_frequency: Database["public"]["Enums"]["frequency"]
          p_currency_code?: Database["public"]["Enums"]["currency_code"]
          p_customer_id: string
          p_description: string
          p_email_notifications: Json
          p_failed_payment_action: string
          p_merchant_id: string
          p_metadata: Json
          p_name: string
          p_organization_id: string
          p_retry_payment_every?: number
          p_start_date: string
          p_total_retries?: number
        }
        Returns: string
      }
      create_subscription_from_plan: {
        Args: {
          p_customer_id: string
          p_merchant_id: string
          p_metadata?: Json
          p_organization_id: string
          p_plan_id: string
        }
        Returns: string
      }
      create_subscription_plan: {
        Args: {
          p_amount: number
          p_billing_frequency: Database["public"]["Enums"]["frequency"]
          p_charge_day?: number
          p_currency_code?: Database["public"]["Enums"]["currency_code"]
          p_description: string
          p_display_on_storefront?: boolean
          p_failed_payment_action?: Database["public"]["Enums"]["failed_payment_action"]
          p_first_payment_type?: Database["public"]["Enums"]["first_payment_type"]
          p_image_url?: string
          p_merchant_id: string
          p_metadata?: Json
          p_name: string
          p_organization_id: string
        }
        Returns: string
      }
      create_support_request: {
        Args: {
          p_category: Database["public"]["Enums"]["support_category"]
          p_image_url?: string
          p_merchant_id: string
          p_message: string
          p_organization_id: string
          p_priority?: Database["public"]["Enums"]["support_priority"]
          p_subject?: string
        }
        Returns: string
      }
      create_team_invitation_notification: {
        Args: {
          p_merchant_id: string
          p_organization_name: string
          p_role: Database["public"]["Enums"]["member_role"]
        }
        Returns: undefined
      }
      create_transaction: {
        Args: {
          p_amount: number
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_customer_id: string
          p_description?: string
          p_merchant_id: string
          p_metadata?: Json
          p_organization_id: string
          p_payment_method_code: Database["public"]["Enums"]["payment_method_code"]
          p_product_id?: string
          p_provider_code: Database["public"]["Enums"]["provider_code"]
          p_quantity?: number
          p_subscription_id?: string
        }
        Returns: string
      }
      create_updated_at_trigger: {
        Args: { p_table_name: string }
        Returns: undefined
      }
      create_wave_checkout_transaction: {
        Args: {
          p_amount: number
          p_checkout_url: string
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_customer_id: string
          p_description?: string
          p_error_url: string
          p_merchant_id: string
          p_metadata?: Json
          p_organization_id: string
          p_product_id?: string
          p_provider_checkout_id: string
          p_quantity?: number
          p_subscription_id?: string
          p_success_url: string
        }
        Returns: string
      }
      create_wave_payout_transaction: {
        Args: {
          p_amount: number
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_description?: string
          p_destination_mobile?: string
          p_merchant_id: string
          p_metadata?: Json
          p_organization_id: string
          p_provider_checkout_id: string
        }
        Returns: string
      }
      create_webhook: {
        Args: {
          p_authorized_events: Database["public"]["Enums"]["webhook_event"][]
          p_merchant_id: string
          p_metadata?: Json
          p_organization_id: string
          p_url: string
        }
        Returns: string
      }
      debug_list_nowpayments_transactions: {
        Args: never
        Returns: {
          created_at: string
          pay_amount: number
          pay_currency: string
          provider_checkout_id: string
          provider_status: string
          transaction_id: string
        }[]
      }
      delete_api_key: { Args: { p_api_key: string }; Returns: undefined }
      delete_assistant_conversation: {
        Args: { p_conversation_id: string; p_merchant_id: string }
        Returns: boolean
      }
      delete_customer: { Args: { p_customer_id: string }; Returns: undefined }
      delete_discount_coupon: {
        Args: { p_coupon_id: string }
        Returns: boolean
      }
      delete_merchant_cascade: {
        Args: { p_merchant_id: string }
        Returns: boolean
      }
      delete_organization_fee_type: {
        Args: { p_fee_type_id: string; p_organization_id: string }
        Returns: boolean
      }
      delete_organization_webhook: {
        Args: { p_merchant_id: string; p_webhook_id: string }
        Returns: undefined
      }
      delete_payout_method: {
        Args: { p_payout_method_id: string }
        Returns: undefined
      }
      delete_product: { Args: { p_product_id: string }; Returns: undefined }
      delete_product_service: {
        Args: { p_merchant_id: string; p_product_id: string }
        Returns: undefined
      }
      delete_storage_object: {
        Args: { bucket: string; object: string }
        Returns: Record<string, unknown>
      }
      delete_storage_object_from_bucket: {
        Args: { bucket_name: string; object_path: string }
        Returns: Record<string, unknown>
      }
      delete_subscription_plan: {
        Args: { p_plan_id: string }
        Returns: undefined
      }
      delete_webhook: {
        Args: { p_merchant_id: string; p_webhook_id: string }
        Returns: boolean
      }
      disable_2fa: { Args: { p_merchant_id: string }; Returns: boolean }
      enable_2fa: {
        Args: {
          p_merchant_id: string
          p_totp_secret: string
          p_verification_code: string
        }
        Returns: boolean
      }
      ensure_merchant_account: {
        Args: {
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_merchant_id: string
          p_organization_id: string
        }
        Returns: string
      }
      expire_pending_transactions: {
        Args: { expiry_hours?: number }
        Returns: number
      }
      expire_pending_transactions_with_custom_status: {
        Args: {
          expiry_hours?: number
          new_status?: Database["public"]["Enums"]["transaction_status"]
        }
        Returns: number
      }
      export_customers_by_criteria: {
        Args: {
          p_end_date?: string
          p_export_type?: string
          p_merchant_id: string
          p_product_ids?: string[]
          p_start_date?: string
        }
        Returns: {
          customer_address: string
          customer_city: string
          customer_country: string
          customer_email: string
          customer_id: string
          customer_is_business: boolean
          customer_name: string
          customer_phone_number: string
          customer_postal_code: string
          item_name: string
          quantity: number
          transaction_amount: number
          transaction_currency: Database["public"]["Enums"]["currency_code"]
          transaction_date: string
          transaction_id: string
          transaction_status: Database["public"]["Enums"]["transaction_status"]
        }[]
      }
      fetch_account_balance: {
        Args: {
          p_currency_code?: string
          p_merchant_id: string
          p_organization_id: string
        }
        Returns: {
          balance: number
          currency_code: string
          last_updated: string
        }[]
      }
      fetch_active_subscriptions_custom_range: {
        Args: {
          p_end_date: string
          p_merchant_id: string
          p_organization_id: string
          p_start_date: string
        }
        Returns: {
          active_subscriptions: number
          date: string
        }[]
      }
      fetch_aov_metrics_custom_range: {
        Args: {
          p_end_date: string
          p_merchant_id: string
          p_organization_id: string
          p_start_date: string
        }
        Returns: {
          date: string
          order_count: number
          total_amount: number
        }[]
      }
      fetch_api_keys: {
        Args: { p_organization_id: string }
        Returns: {
          api_key: string
          created_at: string
          is_active: boolean
          name: string
        }[]
      }
      fetch_average_customer_lifetime_value: {
        Args: {
          p_end_date?: string
          p_merchant_id: string
          p_start_date?: string
        }
        Returns: number
      }
      fetch_average_retention_rate: {
        Args: {
          p_end_date?: string
          p_merchant_id: string
          p_start_date?: string
        }
        Returns: number
      }
      fetch_average_transaction_value: {
        Args: {
          p_end_date?: string
          p_merchant_id: string
          p_start_date?: string
        }
        Returns: number
      }
      fetch_balance_breakdown: {
        Args: {
          p_merchant_id: string
          p_target_currency?: Database["public"]["Enums"]["currency_code"]
        }
        Returns: {
          available_balance: number
          converted_available_balance: number
          converted_pending_balance: number
          converted_total_balance: number
          currency_code: Database["public"]["Enums"]["currency_code"]
          pending_balance: number
          target_currency: Database["public"]["Enums"]["currency_code"]
          total_balance: number
        }[]
      }
      fetch_beneficiary_payouts: {
        Args: {
          p_currency_code?: Database["public"]["Enums"]["currency_code"]
          p_end_date?: string
          p_merchant_id: string
          p_page_number?: number
          p_page_size?: number
          p_start_date?: string
          p_statuses?: string[]
        }
        Returns: {
          account_id: string
          amount: number
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          merchant_id: string
          metadata: Json
          organization_id: string
          payment_method_code: Database["public"]["Enums"]["payment_method_code"]
          payout_id: string
          payout_method_id: string
          provider_code: Database["public"]["Enums"]["provider_code"]
          status: Database["public"]["Enums"]["payout_status"]
          updated_at: string
        }[]
      }
      fetch_billing_statements: {
        Args: { p_merchant_id: string }
        Returns: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string
          merchant_id: string
          metadata: Json
          monthly_fees: number
          organization_id: string
          outstanding_balance: number
          platform_invoice_id: string
          status: Database["public"]["Enums"]["invoice_status"]
          total_amount: number
        }[]
      }
      fetch_completion_rate: {
        Args: {
          p_end_date?: string
          p_merchant_id: string
          p_start_date?: string
        }
        Returns: {
          completed: number
          failed: number
          refunded: number
        }[]
      }
      fetch_customer: {
        Args: { p_customer_id: string }
        Returns: {
          address: string
          city: string
          country: string
          customer_id: string
          email: string
          is_business: boolean
          name: string
          phone_number: string
          postal_code: string
          whatsapp_number: string
        }[]
      }
      fetch_customer_api: {
        Args: { p_customer_id: string }
        Returns: {
          address: string
          city: string
          country: string
          created_at: string
          customer_id: string
          email: string
          is_business: boolean
          name: string
          phone_number: string
          postal_code: string
          updated_at: string
          whatsapp_number: string
        }[]
      }
      fetch_customer_meter_balances: {
        Args: { p_meter_id: string; p_page?: number; p_page_size?: number }
        Returns: {
          balance: number
          balance_id: string
          consumed_units: number
          created_at: string
          credited_units: number
          customer_email: string
          customer_id: string
          customer_name: string
          meter_id: string
          updated_at: string
        }[]
      }
      fetch_customer_transactions: {
        Args: { p_customer_id: string }
        Returns: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string
          gross_amount: number
          status: string
          transaction_id: string
        }[]
      }
      fetch_customers: {
        Args: {
          p_customer_type?: string
          p_merchant_id: string
          p_page?: number
          p_page_size?: number
          p_search_term?: string
        }
        Returns: {
          address: string
          city: string
          country: string
          created_at: string
          customer_id: string
          email: string
          is_business: boolean
          name: string
          phone_number: string
          postal_code: string
          updated_at: string
          whatsapp_number: string
        }[]
      }
      fetch_customers_api: {
        Args: {
          p_customer_type?: string
          p_merchant_id: string
          p_page?: number
          p_page_size?: number
          p_search_term?: string
        }
        Returns: {
          address: string
          city: string
          country: string
          created_at: string
          customer_id: string
          email: string
          is_business: boolean
          name: string
          phone_number: string
          postal_code: string
          updated_at: string
          whatsapp_number: string
        }[]
      }
      fetch_customers_with_status: {
        Args: {
          p_activity_status?: string
          p_customer_type?: string
          p_limit?: number
          p_merchant_id: string
          p_offset?: number
          p_organization_id?: string
          p_search_term?: string
        }
        Returns: {
          address: string
          city: string
          country: string
          created_at: string
          customer_id: string
          email: string
          has_transactions: boolean
          is_business: boolean
          name: string
          phone_number: string
          postal_code: string
          total_count: number
          updated_at: string
          whatsapp_number: string
        }[]
      }
      fetch_daily_sales_grid_data: {
        Args: {
          p_days?: number
          p_merchant_id: string
          p_organization_id?: string
        }
        Returns: {
          date: string
          sales_count: number
          total_revenue: number
        }[]
      }
      fetch_data_for_checkout: {
        Args: { p_link_id: string }
        Returns: {
          allow_coupon_code: boolean
          allow_quantity: boolean
          allowed_providers: Database["public"]["Enums"]["provider_code"][]
          cancel_url: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          link_id: string
          merchant_id: string
          metadata: Json
          organization_default_cancel_url: string
          organization_default_success_url: string
          organization_id: string
          organization_logo_url: string
          organization_name: string
          plan_amount: number
          plan_billing_frequency: Database["public"]["Enums"]["frequency"]
          plan_description: string
          plan_id: string
          plan_image_url: string
          plan_name: string
          price: number
          private_description: string
          product_description: string
          product_id: string
          product_image_url: string
          product_name: string
          product_price: number
          public_description: string
          quantity: number
          stripe_account_id: string
          stripe_charges_enabled: boolean
          success_url: string
          title: string
          url: string
        }[]
      }
      fetch_developer_ids: {
        Args: { p_user_id: string }
        Returns: {
          merchant_id: string
          organization_id: string
        }[]
      }
      fetch_failed_transactions: {
        Args: {
          p_end_date: string
          p_limit?: number
          p_merchant_id: string
          p_organization_id: string
          p_provider_code?: string
          p_start_date: string
        }
        Returns: {
          amount: number
          created_at: string
          currency_code: string
          customer_name: string
          error_message: string
          payment_method_code: string
          provider_code: string
          transaction_id: string
        }[]
      }
      fetch_fee_amount: {
        Args: {
          p_end_date?: string
          p_merchant_id: string
          p_start_date?: string
        }
        Returns: number
      }
      fetch_feedback: {
        Args: { p_merchant_id: string; p_page?: number; p_page_size?: number }
        Returns: {
          created_at: string
          id: string
          message: string
          sentiment: string
          status: Database["public"]["Enums"]["feedback_status"]
        }[]
      }
      fetch_gross_amount: {
        Args: {
          p_end_date?: string
          p_merchant_id: string
          p_start_date?: string
        }
        Returns: number
      }
      fetch_latest_conversion_rates: {
        Args: {
          p_from_currency?: Database["public"]["Enums"]["currency_code"]
          p_to_currency?: Database["public"]["Enums"]["currency_code"]
        }
        Returns: {
          created_at: string
          from_currency: Database["public"]["Enums"]["currency_code"]
          inverse_rate: number
          rate: number
          to_currency: Database["public"]["Enums"]["currency_code"]
        }[]
      }
      fetch_logs: {
        Args: {
          p_event?: Database["public"]["Enums"]["event_type"]
          p_limit?: number
          p_merchant_id: string
          p_offset?: number
          p_severity?: string
        }
        Returns: {
          browser: string
          created_at: string
          details: Json
          event: Database["public"]["Enums"]["event_type"]
          ip_address: string
          log_id: string
          operating_system: string
          request_method: string
          request_url: string
          response_status: number
          severity: string
          total_count: number
        }[]
      }
      fetch_ltv_by_acquisition_cohort: {
        Args: {
          p_end_date: string
          p_ltv_duration_days?: number
          p_merchant_id: string
          p_organization_id: string
          p_start_date: string
        }
        Returns: {
          acquisition_month: string
          average_ltv: number
        }[]
      }
      fetch_merchant_details: {
        Args: { p_user_id: string }
        Returns: {
          avatar_url: string
          email: string
          merchant_id: string
          name: string
          onboarded: boolean
          phone_number: string
          pin_code: string
          preferred_language: string
        }[]
      }
      fetch_merchant_historical_providers: {
        Args: { p_merchant_id: string }
        Returns: {
          is_currently_connected: boolean
          provider_code: Database["public"]["Enums"]["provider_code"]
          provider_name: string
        }[]
      }
      fetch_merchant_organizations: {
        Args: { p_merchant_id: string }
        Returns: {
          is_current: boolean
          merchant_role: string
          organization_id: string
          organization_logo_url: string
          organization_name: string
        }[]
      }
      fetch_merchant_payout_methods: {
        Args: { p_merchant_id: string; p_organization_id: string }
        Returns: {
          account_name: string
          account_number: string
          auto_withdrawal_day: number
          auto_withdrawal_enabled: boolean
          auto_withdrawal_last_run: string
          auto_withdrawal_method: string
          auto_withdrawal_mobile_provider: Database["public"]["Enums"]["provider_code"]
          bank_code: string
          bank_name: string
          branch_code: string
          country: string
          created_at: string
          id: string
          is_default: boolean
          is_spi_enabled: boolean
          is_uemoa: boolean
          is_valid: boolean
          payout_method_type: string
          spi_account_number: string
          spi_alias_mbno: string
          spi_alias_shid: string
          spi_alias_type: string
          updated_at: string
        }[]
      }
      fetch_mrr_metrics_custom_range: {
        Args: {
          p_end_date: string
          p_merchant_id: string
          p_organization_id: string
          p_start_date: string
        }
        Returns: {
          date: string
          mrr: number
        }[]
      }
      fetch_new_customer_trend: {
        Args: {
          p_end_date: string
          p_merchant_id: string
          p_organization_id: string
          p_start_date: string
        }
        Returns: {
          date: string
          new_customer_count: number
        }[]
      }
      fetch_new_customers: {
        Args: {
          p_end_date: string
          p_merchant_id: string
          p_organization_id: string
          p_start_date: string
        }
        Returns: {
          growth_rate: number
          new_customers_count: number
          total_customers: number
        }[]
      }
      fetch_notifications: {
        Args: { p_merchant_id: string }
        Returns: {
          created_at: string
          is_read: boolean
          message: string
          notification_id: string
          type: Database["public"]["Enums"]["notification_type"]
        }[]
      }
      fetch_nowpayments_provider_settings: {
        Args: { p_organization_id: string }
        Returns: {
          is_connected: boolean
          metadata: Json
          organization_id: string
          provider_code: string
          provider_merchant_id: string
        }[]
      }
      fetch_organization_checkout_settings: {
        Args: { p_organization_id: string }
        Returns: Json
      }
      fetch_organization_data_and_members: {
        Args: { p_merchant_id: string; p_organization_id: string }
        Returns: {
          has_multiple_orgs: boolean
          is_admin: boolean
          organization_details: Json
          team_members: Json
        }[]
      }
      fetch_organization_details: {
        Args: { p_merchant_id: string; p_organization_id?: string }
        Returns: {
          city: string
          country: string
          default_currency: Database["public"]["Enums"]["currency_code"]
          district: string
          email: string
          logo_url: string
          name: string
          organization_id: string
          postal_code: string
          region: string
          storefront_enabled: boolean
          street: string
          verification_status: Database["public"]["Enums"]["organization_verification_status"]
          website_url: string
        }[]
      }
      fetch_organization_fee_types: {
        Args: { p_organization_id: string }
        Returns: Json
      }
      fetch_organization_fees: {
        Args: { p_merchant_id: string }
        Returns: {
          fee_type_id: string
          fixed_amount: number
          is_enabled: boolean
          name: string
          percentage: number
        }[]
      }
      fetch_organization_meter_balances: {
        Args: {
          p_organization_id: string
          p_page?: number
          p_page_size?: number
        }
        Returns: {
          balance: number
          balance_id: string
          consumed_units: number
          created_at: string
          credited_units: number
          meter_id: string
          meter_name: string
          organization_id: string
          updated_at: string
        }[]
      }
      fetch_organization_provider_settings: {
        Args: {
          p_organization_id: string
          p_provider_code?: Database["public"]["Enums"]["provider_code"]
        }
        Returns: {
          is_connected: boolean
          is_phone_verified: boolean
          metadata: Json
          organization_id: string
          phone_number: string
          provider_code: Database["public"]["Enums"]["provider_code"]
          provider_merchant_id: string
        }[]
      }
      fetch_organization_providers_settings: {
        Args: { p_organization_id: string }
        Returns: {
          is_connected: boolean
          is_phone_verified: boolean
          phone_number: string
          provider_code: Database["public"]["Enums"]["provider_code"]
        }[]
      }
      fetch_organization_webhooks:
        | {
            Args: {
              p_event?: Database["public"]["Enums"]["webhook_event"]
              p_is_active?: boolean
              p_merchant_id: string
              p_organization_id?: string
              p_search_term?: string
            }
            Returns: {
              authorized_events: Database["public"]["Enums"]["webhook_event"][]
              created_at: string
              deleted_at: string | null
              is_active: boolean
              last_payload: Json | null
              last_response_body: string | null
              last_response_status: number | null
              last_triggered_at: string | null
              merchant_id: string
              metadata: Json | null
              organization_id: string
              retry_count: number | null
              spi_event_types: string[] | null
              supports_spi: boolean
              updated_at: string
              url: string
              verification_token: string
              webhook_id: string
            }[]
            SetofOptions: {
              from: "*"
              to: "webhooks"
              isOneToOne: false
              isSetofReturn: true
            }
          }
        | {
            Args: {
              p_event?: Database["public"]["Enums"]["webhook_event"]
              p_is_active?: boolean
              p_merchant_id: string
              p_search_term?: string
            }
            Returns: {
              authorized_events: Database["public"]["Enums"]["webhook_event"][]
              created_at: string
              deleted_at: string | null
              is_active: boolean
              last_payload: Json | null
              last_response_body: string | null
              last_response_status: number | null
              last_triggered_at: string | null
              merchant_id: string
              metadata: Json | null
              organization_id: string
              retry_count: number | null
              spi_event_types: string[] | null
              supports_spi: boolean
              updated_at: string
              url: string
              verification_token: string
              webhook_id: string
            }[]
            SetofOptions: {
              from: "*"
              to: "webhooks"
              isOneToOne: false
              isSetofReturn: true
            }
          }
      fetch_payment_links: {
        Args: {
          p_currency_code?: Database["public"]["Enums"]["currency_code"]
          p_include_expired?: boolean
          p_is_active?: boolean
          p_link_type?: Database["public"]["Enums"]["link_type"]
          p_merchant_id: string
          p_organization_id?: string
          p_page?: number
          p_page_size?: number
        }
        Returns: {
          allow_coupon_code: boolean
          allow_quantity: boolean
          allowed_providers: Database["public"]["Enums"]["provider_code"][]
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          expires_at: string
          is_active: boolean
          link_id: string
          link_type: Database["public"]["Enums"]["link_type"]
          merchant_id: string
          metadata: Json
          organization_id: string
          organization_logo_url: string
          plan_amount: number
          plan_id: string
          plan_image_url: string
          plan_name: string
          price: number
          private_description: string
          product_id: string
          product_image_url: string
          product_name: string
          product_price: number
          public_description: string
          quantity: number
          success_url: string
          title: string
          updated_at: string
          url: string
        }[]
      }
      fetch_payout_count: {
        Args: {
          p_account_id: string
          p_end_date?: string
          p_start_date?: string
        }
        Returns: number
      }
      fetch_payout_methods: {
        Args: never
        Returns: {
          account_name: string
          account_number: string
          auto_withdrawal_day: number
          auto_withdrawal_enabled: boolean
          auto_withdrawal_last_run: string
          auto_withdrawal_method: string
          auto_withdrawal_mobile_provider: Database["public"]["Enums"]["provider_code"]
          bank_code: string
          bank_name: string
          branch_code: string
          country: string
          created_at: string
          id: string
          is_default: boolean
          is_spi_enabled: boolean
          is_uemoa: boolean
          is_valid: boolean
          payout_method_type: string
          spi_account_number: string
          spi_alias_mbno: string
          spi_alias_shid: string
          spi_alias_type: string
          updated_at: string
        }[]
      }
      fetch_payout_status: {
        Args: {
          p_currency_code?: string
          p_merchant_id: string
          p_organization_id: string
          p_status?: string
        }
        Returns: {
          amount: number
          bank_account_name: string
          created_at: string
          currency_code: string
          payout_id: string
          status: string
          updated_at: string
        }[]
      }
      fetch_payouts: {
        Args: {
          p_end_date?: string
          p_merchant_id: string
          p_page_number?: number
          p_page_size?: number
          p_start_date?: string
          p_statuses?: Database["public"]["Enums"]["payout_status"][]
        }
        Returns: {
          account_id: string
          amount: number
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          merchant_id: string
          metadata: Json
          organization_id: string
          payout_id: string
          payout_method_id: string
          provider_code: Database["public"]["Enums"]["provider_code"]
          status: Database["public"]["Enums"]["payout_status"]
          updated_at: string
        }[]
      }
      fetch_product_fees: {
        Args: { p_product_id: string }
        Returns: {
          fee_type_id: string
          fixed_amount: number
          is_enabled: boolean
          name: string
          percentage: number
        }[]
      }
      fetch_product_performance: {
        Args: {
          p_end_date: string
          p_limit?: number
          p_merchant_id: string
          p_metric?: string
          p_organization_id: string
          p_start_date: string
        }
        Returns: {
          average_sale_value: number
          product_id: string
          product_name: string
          sales_count: number
          total_revenue: number
        }[]
      }
      fetch_product_transactions: {
        Args: { p_product_id: string }
        Returns: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string
          gross_amount: number
          status: string
          transaction_id: string
        }[]
      }
      fetch_products: {
        Args: {
          p_is_active?: boolean
          p_limit?: number
          p_merchant_id: string
          p_offset?: number
          p_organization_id?: string
        }
        Returns: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string
          display_on_storefront: boolean
          fees: Json
          image_url: string
          is_active: boolean
          merchant_id: string
          name: string
          organization_id: string
          price: number
          product_id: string
          total_count: number
          updated_at: string
        }[]
      }
      fetch_products_with_transactions_for_export: {
        Args: { p_merchant_id: string }
        Returns: {
          currency_code: Database["public"]["Enums"]["currency_code"]
          name: string
          price: number
          product_id: string
        }[]
      }
      fetch_provider_distribution_custom_range: {
        Args: {
          p_end_date: string
          p_merchant_id: string
          p_organization_id: string
          p_start_date: string
        }
        Returns: {
          date: string
          provider_code: Database["public"]["Enums"]["provider_code"]
          transaction_count: number
        }[]
      }
      fetch_provider_performance_metrics: {
        Args: {
          p_end_date: string
          p_merchant_id: string
          p_organization_id: string
          p_start_date: string
        }
        Returns: {
          average_transaction_value: number
          provider_code: string
          success_rate: number
          successful_transactions: number
          total_revenue: number
          total_transactions: number
        }[]
      }
      fetch_public_transaction_details: {
        Args: { p_transaction_id: string }
        Returns: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_email: string
          customer_name: string
          customer_phone: string
          gross_amount: number
          metadata: Json
          net_amount: number
          organization_city: string
          organization_country: string
          organization_logo_url: string
          organization_name: string
          organization_postal_code: string
          organization_region: string
          organization_street: string
          plan_billing_frequency: string
          plan_name: string
          product_name: string
          product_price: number
          provider_code: Database["public"]["Enums"]["provider_code"]
          provider_transaction_id: string
          quantity: number
          status: Database["public"]["Enums"]["transaction_status"]
          subscription_id: string
          subscription_next_billing_date: string
          subscription_status: string
          transaction_id: string
        }[]
      }
      fetch_recent_orders: {
        Args: {
          p_limit?: number
          p_merchant_id: string
          p_organization_id?: string
        }
        Returns: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_email: string
          customer_id: string
          customer_name: string
          net_amount: number
          product_name: string
          transaction_id: string
        }[]
      }
      fetch_renewed_subscriptions_custom_range: {
        Args: {
          p_end_date: string
          p_merchant_id: string
          p_organization_id: string
          p_start_date: string
        }
        Returns: {
          date: string
          renewed_subscriptions: number
        }[]
      }
      fetch_renewed_subscriptions_revenue_custom_range: {
        Args: {
          p_end_date: string
          p_merchant_id: string
          p_organization_id: string
          p_start_date: string
        }
        Returns: {
          date: string
          renewed_subscriptions_revenue: number
        }[]
      }
      fetch_revenue_analytics_custom_range: {
        Args: {
          p_currency_code?: string
          p_end_date: string
          p_group_by?: string
          p_merchant_id: string
          p_organization_id: string
          p_start_date: string
        }
        Returns: {
          average_transaction_value: number
          currency_code: string
          period: string
          revenue: number
          transaction_count: number
        }[]
      }
      fetch_revenue_custom_range: {
        Args: {
          p_end_date: string
          p_merchant_id: string
          p_organization_id: string
          p_start_date: string
        }
        Returns: {
          date: string
          revenue: number
        }[]
      }
      fetch_revenue_pareto_custom_range: {
        Args: {
          p_end_date: string
          p_merchant_id: string
          p_organization_id: string
          p_start_date: string
        }
        Returns: {
          cumulative_customer_percentage: number
          cumulative_revenue_percentage: number
        }[]
      }
      fetch_sidebar_data: {
        Args: { p_merchant_id: string; p_organization_id?: string }
        Returns: {
          merchant_name: string
          merchant_role: string
          organization_city: string
          organization_country: string
          organization_id: string
          organization_logo_url: string
          organization_name: string
          organization_postal_code: string
          organization_region: string
          organization_street: string
        }[]
      }
      fetch_subscription_data: {
        Args: { p_transaction_id: string }
        Returns: {
          plan_billing_frequency: Database["public"]["Enums"]["frequency"]
          plan_description: string
          plan_id: string
          plan_name: string
          subscription_end_date: string
          subscription_id: string
          subscription_next_billing_date: string
          subscription_status: Database["public"]["Enums"]["subscription_status"]
        }[]
      }
      fetch_subscription_metrics: {
        Args: {
          p_end_date: string
          p_merchant_id: string
          p_organization_id: string
          p_start_date: string
          p_status?: string
        }
        Returns: {
          active_subscriptions: number
          average_subscription_value: number
          cancelled_subscriptions: number
          churn_rate: number
          expired_subscriptions: number
          paused_subscriptions: number
          total_mrr: number
          total_subscriptions: number
        }[]
      }
      fetch_subscription_plans: {
        Args: {
          p_merchant_id: string
          p_organization_id?: string
          p_page?: number
          p_page_size?: number
        }
        Returns: {
          amount: number
          billing_frequency: Database["public"]["Enums"]["frequency"]
          charge_day: number
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string
          display_on_storefront: boolean
          failed_payment_action: Database["public"]["Enums"]["failed_payment_action"]
          image_url: string
          is_active: boolean
          metadata: Json
          name: string
          plan_id: string
          updated_at: string
        }[]
      }
      fetch_subscription_plans_with_transactions_for_export: {
        Args: { p_merchant_id: string }
        Returns: {
          amount: number
          currency_code: Database["public"]["Enums"]["currency_code"]
          is_subscription: boolean
          name: string
          plan_id: string
        }[]
      }
      fetch_subscription_revenue_custom_range: {
        Args: {
          p_end_date: string
          p_merchant_id: string
          p_organization_id: string
          p_start_date: string
        }
        Returns: {
          date: string
          subscription_revenue: number
        }[]
      }
      fetch_subscription_transactions: {
        Args: { p_subscription_id: string }
        Returns: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string
          gross_amount: number
          status: string
          transaction_id: string
        }[]
      }
      fetch_subscriptions: {
        Args: {
          p_merchant_id: string
          p_organization_id?: string
          p_page?: number
          p_page_size?: number
          p_status?: Database["public"]["Enums"]["subscription_status"]
        }
        Returns: {
          amount: number
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_id: string
          customer_name: string
          end_date: string
          metadata: Json
          next_billing_date: string
          plan_id: string
          plan_name: string
          start_date: string
          status: Database["public"]["Enums"]["subscription_status"]
          subscription_id: string
          updated_at: string
        }[]
      }
      fetch_support_requests: {
        Args: {
          p_merchant_id: string
          p_page?: number
          p_page_size?: number
          p_status?: Database["public"]["Enums"]["support_status"]
        }
        Returns: {
          category: Database["public"]["Enums"]["support_category"]
          created_at: string
          image_url: string
          message: string
          priority: Database["public"]["Enums"]["support_priority"]
          status: Database["public"]["Enums"]["support_status"]
          support_requests_id: string
          updated_at: string
        }[]
      }
      fetch_team_members: {
        Args: { p_organization_id: string }
        Returns: {
          created_at: string
          invitation_email: string
          merchant_email: string
          merchant_id: string
          merchant_name: string
          organization_position: string
          role: Database["public"]["Enums"]["member_role"]
          team_status: Database["public"]["Enums"]["team_status"]
        }[]
      }
      fetch_top_customers: {
        Args: {
          p_end_date: string
          p_limit?: number
          p_merchant_id: string
          p_metric?: string
          p_organization_id: string
          p_start_date: string
        }
        Returns: {
          average_transaction_value: number
          customer_email: string
          customer_id: string
          customer_name: string
          last_transaction_date: string
          total_revenue: number
          transaction_count: number
        }[]
      }
      fetch_top_performing_products: {
        Args: {
          p_end_date: string
          p_limit?: number
          p_merchant_id: string
          p_metric?: string
          p_organization_id: string
          p_start_date: string
        }
        Returns: {
          date: string
          metric_value: number
          product_id: string
          product_name: string
        }[]
      }
      fetch_top_performing_subscription_plans: {
        Args: {
          p_end_date?: string
          p_limit?: number
          p_merchant_id: string
          p_start_date?: string
        }
        Returns: {
          plan_name: string
          sales_count: number
          total_revenue: number
        }[]
      }
      fetch_total_incoming_amount: {
        Args: {
          p_end_date?: string
          p_merchant_id: string
          p_start_date?: string
        }
        Returns: number
      }
      fetch_transaction_count: {
        Args: {
          p_end_date?: string
          p_merchant_id: string
          p_start_date?: string
        }
        Returns: number
      }
      fetch_transaction_metrics: {
        Args: {
          p_end_date: string
          p_merchant_id: string
          p_organization_id: string
          p_payment_method_code?: string
          p_provider_code?: string
          p_start_date: string
          p_status?: string
        }
        Returns: {
          average_transaction_value: number
          completed_transactions: number
          failed_transactions: number
          pending_transactions: number
          refunded_transactions: number
          success_rate: number
          total_revenue: number
          total_transactions: number
        }[]
      }
      fetch_transaction_volume_custom_range: {
        Args: {
          p_end_date: string
          p_merchant_id: string
          p_organization_id: string
          p_start_date: string
        }
        Returns: {
          date: string
          transaction_count: number
        }[]
      }
      fetch_transactions: {
        Args: {
          p_currency?: Database["public"]["Enums"]["currency_code"][]
          p_end_date?: string
          p_merchant_id: string
          p_organization_id?: string
          p_page?: number
          p_page_size?: number
          p_payment_method?: Database["public"]["Enums"]["payment_method_code"][]
          p_provider_code?: Database["public"]["Enums"]["provider_code"]
          p_start_date?: string
          p_status?: Database["public"]["Enums"]["transaction_status"][]
          p_type?: Database["public"]["Enums"]["transaction_type"][]
        }
        Returns: {
          coupon_code: string
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_address: string
          customer_city: string
          customer_country: string
          customer_email: string
          customer_name: string
          customer_phone: string
          customer_postal_code: string
          fee_amount: number
          fee_reference: string
          gross_amount: number
          metadata: Json
          net_amount: number
          payment_method_code: Database["public"]["Enums"]["payment_method_code"]
          plan_billing_frequency: string
          plan_description: string
          plan_name: string
          product_description: string
          product_id: string
          product_name: string
          product_price: number
          provider_checkout_id: string
          provider_code: Database["public"]["Enums"]["provider_code"]
          provider_transaction_id: string
          quantity: number
          status: Database["public"]["Enums"]["transaction_status"]
          subscription_id: string
          subscription_next_billing_date: string
          subscription_status: string
          transaction_id: string
          transaction_type: Database["public"]["Enums"]["transaction_type"]
        }[]
      }
      fetch_user_avatar: { Args: { p_user_id: string }; Returns: string }
      fetch_wave_provider_settings: {
        Args: { p_organization_id: string }
        Returns: {
          is_connected: boolean
          metadata: Json
          organization_id: string
          provider_code: Database["public"]["Enums"]["provider_code"]
          provider_merchant_id: string
        }[]
      }
      find_subscriptions_due_for_renewal: {
        Args: { days_before_renewal?: number }
        Returns: {
          billing_frequency: string
          business_name: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_email: string
          customer_id: string
          customer_name: string
          days_until_renewal: number
          merchant_email: string
          merchant_id: string
          merchant_name: string
          next_billing_date: string
          organization_id: string
          organization_logo_url: string
          plan_amount: number
          plan_id: string
          plan_name: string
          subscription_id: string
        }[]
      }
      fix_coupon_customer_validation: { Args: never; Returns: string }
      generate_api_key: {
        Args: {
          p_environment?: string
          p_expiration_date?: string
          p_merchant_id: string
          p_name: string
          p_organization_id: string
        }
        Returns: {
          api_key: string
        }[]
      }
      generate_monthly_statement: {
        Args: { p_merchant_id: string }
        Returns: string
      }
      generate_monthly_statements_for_all_merchants: {
        Args: never
        Returns: Json
      }
      generate_statement_for_specific_month: {
        Args: { p_merchant_id: string; p_target_month: string }
        Returns: string
      }
      generate_subscription_renewal_session: {
        Args: { p_subscription_id: string }
        Returns: string
      }
      generate_webhook_secret: {
        Args: { p_merchant_id: string; p_webhook_id: string }
        Returns: {
          verification_token: string
          webhook_id: string
        }[]
      }
      get_api_usage_stats: {
        Args: never
        Returns: {
          last_24h_users: number
          last_30d_users: number
          last_7d_users: number
          total_active_users: number
        }[]
      }
      get_assistant_conversations: {
        Args: { p_limit?: number; p_merchant_id: string; p_offset?: number }
        Returns: {
          conversation_id: string
          created_at: string
          last_message_at: string
          metadata: Json
          title: string
        }[]
      }
      get_assistant_messages: {
        Args: {
          p_conversation_id: string
          p_limit?: number
          p_merchant_id: string
        }
        Returns: {
          content: string
          created_at: string
          message_id: string
          message_index: number
          metadata: Json
          role: string
        }[]
      }
      get_base_url: { Args: never; Returns: string }
      get_beneficiary_payout_by_wave_id: {
        Args: { p_wave_payout_id: string }
        Returns: {
          amount: number
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          merchant_id: string
          metadata: Json
          payout_id: string
          status: Database["public"]["Enums"]["payout_status"]
          updated_at: string
        }[]
      }
      get_beneficiary_payout_count: {
        Args: {
          p_end_date?: string
          p_merchant_id: string
          p_start_date?: string
        }
        Returns: number
      }
      get_beneficiary_payout_metrics: {
        Args: {
          p_end_date?: string
          p_merchant_id: string
          p_start_date?: string
        }
        Returns: {
          failed_payouts: number
          pending_amount: number
          pending_payouts: number
          successful_amount: number
          successful_payouts: number
          total_amount: number
          total_payouts: number
        }[]
      }
      get_beneficiary_payout_success_rate: {
        Args: {
          p_end_date?: string
          p_merchant_id: string
          p_start_date?: string
        }
        Returns: number
      }
      get_bnpl_checkout_display: {
        Args: {
          p_currency_code?: Database["public"]["Enums"]["currency_code"]
          p_installment_count: number
          p_organization_id: string
          p_product_amount: number
        }
        Returns: Json
      }
      get_bnpl_config_summary: {
        Args: { p_organization_id?: string }
        Returns: {
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_interest_rate: number
          is_active: boolean
          max_installments: number
          min_installments: number
          min_product_amount: number
          organization_id: string
          organization_name: string
          total_customers: number
          total_outstanding: number
          total_plans: number
        }[]
      }
      get_bnpl_plan_fees: {
        Args: { p_plan_id: string }
        Returns: {
          collected_amount: number
          currency_code: Database["public"]["Enums"]["currency_code"]
          fee_payer: Database["public"]["Enums"]["fee_payer_type"]
          fee_type: Database["public"]["Enums"]["bnpl_fee_type"]
          pending_amount: number
          total_amount: number
        }[]
      }
      get_checkout_session: {
        Args: { p_checkout_session_id: string }
        Returns: Json
      }
      get_checkout_session_by_wave_id: {
        Args: { p_wave_session_id: string }
        Returns: {
          checkout_session_id: string
          customer_id: string
          merchant_id: string
          metadata: Json
          organization_id: string
        }[]
      }
      get_checkout_session_details: {
        Args: { p_checkout_session_id: string }
        Returns: Json
      }
      get_checkout_session_details_for_webhook: {
        Args: { p_checkout_session_id: string }
        Returns: {
          allow_coupon_code: boolean
          allow_quantity: boolean
          allowed_providers: Database["public"]["Enums"]["provider_code"][]
          amount: number
          cancel_url: string
          checkout_session_id: string
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_email: string
          customer_id: string
          customer_name: string
          customer_phone: string
          expires_at: string
          merchant_id: string
          metadata: Json
          organization_id: string
          payment_link_id: string
          plan_id: string
          product_id: string
          public_description: string
          quantity: number
          status: Database["public"]["Enums"]["checkout_session_status"]
          subscription_id: string
          success_url: string
          title: string
          updated_at: string
        }[]
      }
      get_checkout_session_metadata: {
        Args: { p_checkout_session_id: string }
        Returns: Json
      }
      get_cli_device_request: {
        Args: { p_device_code: string }
        Returns: {
          created_at: string
          device_code: string
          expires_at: string
          interval: number
          merchant_id: string | null
          organization_id: string | null
          status: Database["public"]["Enums"]["cli_device_request_status"]
          user_code: string
        }
        SetofOptions: {
          from: "*"
          to: "cli_device_requests"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      get_cli_device_request_for_verification: {
        Args: { p_user_code: string }
        Returns: {
          device_code: string
          expires_at: string
          status: Database["public"]["Enums"]["cli_device_request_status"]
        }[]
      }
      get_cli_request_status_and_ids: {
        Args: { p_device_code: string }
        Returns: {
          expires_at: string
          merchant_id: string
          organization_id: string
          status: Database["public"]["Enums"]["cli_device_request_status"]
        }[]
      }
      get_client_info: {
        Args: never
        Returns: {
          browser: string
          ip_address: string
          operating_system: string
        }[]
      }
      get_coupon_details_for_management: {
        Args: { p_coupon_id?: string; p_organization_id: string }
        Returns: {
          code: string
          coupon_id: string
          created_at: string
          current_uses: number
          customer_type: Database["public"]["Enums"]["customer_type_enum"]
          description: string
          discount_fixed_amount: number
          discount_percentage: number
          discount_type: Database["public"]["Enums"]["discount_type_enum"]
          expires_at: string
          is_active: boolean
          is_organization_wide: boolean
          max_quantity_per_use: number
          max_uses: number
          plan_links: Json
          product_links: Json
          updated_at: string
          usage_frequency_limit: Database["public"]["Enums"]["usage_frequency_enum"]
          usage_limit_value: number
          valid_from: string
        }[]
      }
      get_coupon_preview: {
        Args: {
          p_base_amount?: number
          p_coupon_id: string
          p_quantity?: number
        }
        Returns: Json
      }
      get_current_merchant_email: {
        Args: { p_merchant_id: string }
        Returns: string
      }
      get_customer: {
        Args: { p_customer_id: string; p_merchant_id: string }
        Returns: {
          address: string
          city: string
          country: string
          created_at: string
          customer_id: string
          email: string
          is_business: boolean
          metadata: Json
          name: string
          phone_number: string
          postal_code: string
          updated_at: string
          whatsapp_number: string
        }[]
      }
      get_customer_bnpl_schedule: {
        Args: { p_customer_id: string; p_plan_id: string }
        Returns: {
          due_date: string
          installment_number: number
          interest_amount: number
          paid_at: string
          principal_amount: number
          status: Database["public"]["Enums"]["transaction_status"]
          total_amount: number
        }[]
      }
      get_customer_demographics: {
        Args: never
        Returns: {
          count: number
          country: string
          is_business: boolean
        }[]
      }
      get_customer_subscription: {
        Args: { p_merchant_id: string; p_subscription_id: string }
        Returns: {
          created_at: string
          customer_email: string
          customer_id: string
          customer_name: string
          end_date: string
          merchant_id: string
          metadata: Json
          next_billing_date: string
          organization_id: string
          plan_amount: number
          plan_billing_frequency: Database["public"]["Enums"]["frequency"]
          plan_currency_code: Database["public"]["Enums"]["currency_code"]
          plan_description: string
          plan_id: string
          plan_name: string
          start_date: string
          status: Database["public"]["Enums"]["subscription_status"]
          subscription_id: string
          updated_at: string
        }[]
      }
      get_global_banking_stats: {
        Args: never
        Returns: {
          currency_code: Database["public"]["Enums"]["currency_code"]
          payout_status: Database["public"]["Enums"]["payout_status"]
          total_bank_accounts: number
          total_payout_amount: number
          total_payouts: number
        }[]
      }
      get_global_product_plan_stats: {
        Args: never
        Returns: {
          active_subscriptions: number
          avg_products_per_merchant: number
          total_plans: number
          total_products: number
        }[]
      }
      get_global_refund_stats: {
        Args: never
        Returns: {
          currency_code: Database["public"]["Enums"]["currency_code"]
          status: Database["public"]["Enums"]["refund_status"]
          total_refunded_amount: number
          total_refunds: number
        }[]
      }
      get_global_transaction_stats: {
        Args: never
        Returns: {
          currency_code: Database["public"]["Enums"]["currency_code"]
          total_fee_amount: number
          total_gross_amount: number
          total_net_amount: number
          total_transactions: number
        }[]
      }
      get_installed_integrations: {
        Args: { p_organization_id: string }
        Returns: Json
      }
      get_invoices_by_status: {
        Args: never
        Returns: {
          amount: number
          count: number
          due_amount: number
          status: string
        }[]
      }
      get_merchant: {
        Args: { p_merchant_id: string }
        Returns: {
          arr: number
          country: string
          created_at: string
          email: string
          merchant_id: string
          merchant_lifetime_value: number
          metadata: Json
          mrr: number
          name: string
          organization_id: string
          phone_number: string
          retry_payment_every: number
          total_retries: number
          updated_at: string
        }[]
      }
      get_merchant_account_id: {
        Args: {
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_merchant_id: string
        }
        Returns: string
      }
      get_merchant_arr: {
        Args: { p_merchant_id: string }
        Returns: {
          arr: number
          currency_code: string
          merchant_id: string
        }[]
      }
      get_merchant_balance: {
        Args: {
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_merchant_id: string
        }
        Returns: number
      }
      get_merchant_balance_stats: {
        Args: never
        Returns: {
          average_balance: number
          currency_code: string
          merchant_count: number
          total_balance: number
        }[]
      }
      get_merchant_customer_stats: {
        Args: { p_merchant_id: string }
        Returns: {
          business_customers: number
          customers_with_transactions: number
          individual_customers: number
          total_customers: number
        }[]
      }
      get_merchant_details: {
        Args: { p_merchant_id: string }
        Returns: {
          arr: number
          country: string
          created_at: string
          email: string
          merchant_id: string
          merchant_lifetime_value: number
          metadata: Json
          mrr: number
          name: string
          organization_id: string
          phone_number: string
          retry_payment_every: number
          total_retries: number
          updated_at: string
        }[]
      }
      get_merchant_details_for_wave: {
        Args: { p_merchant_id: string; p_organization_id: string }
        Returns: {
          business_description: string
          country: string
          email: string
          industry: string
          merchant_id: string
          merchant_name: string
          organization_id: string
          organization_name: string
          phone_number: string
          registration_number: string
          website_url: string
        }[]
      }
      get_merchant_from_organization: {
        Args: { p_organization_id: string }
        Returns: string
      }
      get_merchant_growth_stats: {
        Args: never
        Returns: {
          onboarded_merchants: number
          total_arr: number
          total_merchants: number
          total_mrr: number
        }[]
      }
      get_merchant_mrr: {
        Args: { p_merchant_id: string }
        Returns: {
          currency_code: string
          merchant_id: string
          mrr: number
        }[]
      }
      get_merchant_organization_id: {
        Args: { p_merchant_id: string }
        Returns: string
      }
      get_merchant_platform_fees: {
        Args: { p_merchant_id: string }
        Returns: {
          last_month_fees: number
          month_to_date_fees: number
          organization_id: string
          outstanding_balance: number
        }[]
      }
      get_merchant_product_stats: {
        Args: { p_merchant_id: string }
        Returns: {
          active_plans: number
          active_products: number
          total_plans: number
          total_products: number
        }[]
      }
      get_merchant_providers: {
        Args: { p_merchant_id: string }
        Returns: {
          created_at: string
          description: string
          is_connected: boolean
          is_phone_verified: boolean
          metadata: Json
          name: string
          phone_number: string
          provider_business_type: Database["public"]["Enums"]["provider_business_type"]
          provider_code: Database["public"]["Enums"]["provider_code"]
          provider_merchant_id: string
          updated_at: string
        }[]
      }
      get_merchant_refund_stats: {
        Args: { p_merchant_id: string }
        Returns: {
          currency_code: Database["public"]["Enums"]["currency_code"]
          refunded_amount: number
          status: Database["public"]["Enums"]["refund_status"]
          total_refunds: number
        }[]
      }
      get_merchant_stripe_connect: {
        Args: { p_merchant_id: string; p_organization_id?: string }
        Returns: {
          business_type: string
          charges_enabled: boolean
          company_domicile_country: string
          created_at: string
          details_submitted: boolean
          onboarding_status: string
          org_stripe_country: string
          payouts_enabled: boolean
          requirements_disabled_reason: string
          requirements_due: Json
          requirements_eventually_due: Json
          stripe_account_id: string
          stripe_account_type: string
          stripe_connect_id: string
          stripe_dashboard_url: string
          stripe_metadata: Json
          updated_at: string
        }[]
      }
      get_merchant_transaction_stats: {
        Args: { p_merchant_id: string }
        Returns: {
          currency_code: Database["public"]["Enums"]["currency_code"]
          net_amount: number
          status: Database["public"]["Enums"]["transaction_status"]
          total_amount: number
          total_fees: number
          total_transactions: number
        }[]
      }
      get_most_popular_qr_code: {
        Args: {
          p_custom_end?: string
          p_custom_start?: string
          p_date_range?: string
          p_merchant_id: string
          p_organization_id: string
        }
        Returns: Json
      }
      get_mtn_transaction_by_external_id: {
        Args: { p_external_id: string }
        Returns: {
          merchant_id: string
          organization_id: string
          transaction_id: string
        }[]
      }
      get_next_message_index: {
        Args: { p_conversation_id: string; p_merchant_id: string }
        Returns: number
      }
      get_nowpayments_payment_status: {
        Args: { p_provider_checkout_id: string }
        Returns: Json
      }
      get_nowpayments_payment_status_by_transaction_id: {
        Args: { p_transaction_id: string }
        Returns: Json
      }
      get_organization_checkout_urls: {
        Args: { p_organization_id: string }
        Returns: {
          cancel_url: string
          success_url: string
        }[]
      }
      get_organization_coupons: {
        Args: { p_organization_id: string }
        Returns: {
          code: string
          coupon_id: string
          created_at: string
          current_uses: number
          customer_type: Database["public"]["Enums"]["customer_type_enum"]
          description: string
          discount_fixed_amount: number
          discount_percentage: number
          discount_type: Database["public"]["Enums"]["discount_type_enum"]
          expires_at: string
          is_active: boolean
          is_organization_wide: boolean
          max_quantity_per_use: number
          max_uses: number
          plan_links: Json
          product_links: Json
          updated_at: string
          usage_frequency_limit: Database["public"]["Enums"]["usage_frequency_enum"]
          usage_limit_value: number
          valid_from: string
        }[]
      }
      get_organization_demographics: {
        Args: never
        Returns: {
          count: number
          country: string
          industry: string
          kyc_status: string
          status: string
        }[]
      }
      get_organization_fee_structure: {
        Args: {
          p_currency_code?: Database["public"]["Enums"]["currency_code"]
          p_organization_id: string
        }
        Returns: {
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string
          fee_category: Database["public"]["Enums"]["fee_category"]
          fee_subcategory: Database["public"]["Enums"]["fee_subcategory"]
          fixed_amount: number
          formatted_amount: string
          is_free: boolean
          name: string
          percentage: number
        }[]
      }
      get_organization_gross_transactions: {
        Args: { p_organization_id: string }
        Returns: number
      }
      get_organization_id_for_merchant: {
        Args: { p_merchant_id: string }
        Returns: string
      }
      get_organization_kyc_stats: {
        Args: never
        Returns: {
          count: number
          status: Database["public"]["Enums"]["kyc_status"]
        }[]
      }
      get_organization_kyc_status: {
        Args: { p_merchant_id: string; p_organization_id: string }
        Returns: {
          business_description: string
          kyc_approved_at: string
          kyc_submitted_at: string
          legal_representative_id_url: string
          status: Database["public"]["Enums"]["kyc_status"]
        }[]
      }
      get_organization_stats: {
        Args: never
        Returns: {
          total_customers: number
          total_merchants: number
          total_organizations: number
          verified_organizations: number
        }[]
      }
      get_organizations_by_country: {
        Args: never
        Returns: {
          count: number
          country: string
        }[]
      }
      get_organizations_by_industry: {
        Args: never
        Returns: {
          count: number
          industry: string
          status: Database["public"]["Enums"]["organization_status"]
        }[]
      }
      get_payment_link: {
        Args: {
          p_link_id: string
          p_merchant_id?: string
          p_organization_id?: string
        }
        Returns: {
          allow_coupon_code: boolean
          allowed_providers: Database["public"]["Enums"]["provider_code"][]
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          expires_at: string
          is_active: boolean
          link_id: string
          link_type: Database["public"]["Enums"]["link_type"]
          merchant_id: string
          metadata: Json
          organization_id: string
          plan_amount: number
          plan_id: string
          plan_name: string
          price: number
          private_description: string
          product_id: string
          product_name: string
          product_price: number
          public_description: string
          success_url: string
          title: string
          updated_at: string
          url: string
        }[]
      }
      get_payment_link_available_providers: {
        Args: { p_merchant_id: string }
        Returns: {
          code: Database["public"]["Enums"]["provider_code"]
          name: string
        }[]
      }
      get_payout_status: {
        Args: { p_payout_id: string }
        Returns: {
          status: Database["public"]["Enums"]["payout_status"]
          wave_payout_id: string
        }[]
      }
      get_payout_status_by_wave_id: {
        Args: { p_wave_payout_id: string }
        Returns: {
          payout_id: string
          status: Database["public"]["Enums"]["payout_status"]
        }[]
      }
      get_pending_beneficiary_payout_amount: {
        Args: {
          p_end_date?: string
          p_merchant_id: string
          p_start_date?: string
        }
        Returns: number
      }
      get_plan_by_id: {
        Args: { plan_id: string }
        Returns: {
          amount: number
          billing_frequency: Database["public"]["Enums"]["frequency"]
          charge_day: number
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string
          failed_payment_action: Database["public"]["Enums"]["failed_payment_action"]
          first_payment_type: Database["public"]["Enums"]["first_payment_type"]
          id: string
          merchant_id: string
          metadata: Json
          name: string
          organization_id: string
          updated_at: string
        }[]
      }
      get_plan_for_checkout: {
        Args: { p_merchant_id: string; p_plan_id: string }
        Returns: Json
      }
      get_pos_completion_rate: {
        Args: {
          p_custom_end?: string
          p_custom_start?: string
          p_date_range?: string
          p_merchant_id: string
          p_organization_id: string
        }
        Returns: Json
      }
      get_pos_total_revenue: {
        Args: {
          p_custom_end?: string
          p_custom_start?: string
          p_date_range?: string
          p_merchant_id: string
          p_organization_id: string
        }
        Returns: number
      }
      get_pos_transaction_count: {
        Args: {
          p_custom_end?: string
          p_custom_start?: string
          p_date_range?: string
          p_merchant_id: string
          p_organization_id: string
        }
        Returns: number
      }
      get_pos_transactions: {
        Args: {
          p_limit?: number
          p_merchant_id: string
          p_offset?: number
          p_organization_id: string
        }
        Returns: {
          amount: number
          checkout_session_id: string
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_email: string
          customer_name: string
          customer_phone: string
          is_generic: boolean
          is_plan_linked: boolean
          is_product_linked: boolean
          plan_id: string
          product_id: string
          spi_payment_category: Database["public"]["Enums"]["spi_payment_category"]
          spi_payment_status: Database["public"]["Enums"]["spi_payment_status"]
          status: Database["public"]["Enums"]["transaction_status"]
          transaction_id: string
        }[]
      }
      get_post_checkout_details: {
        Args: { p_checkout_session_id: string }
        Returns: Json
      }
      get_product: {
        Args: { p_merchant_id: string; p_product_id: string }
        Returns: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string
          is_active: boolean
          merchant_id: string
          name: string
          organization_id: string
          price: number
          product_id: string
          updated_at: string
        }[]
      }
      get_product_by_id: {
        Args: { prod_id: string }
        Returns: {
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string
          id: string
          merchant_id: string
          name: string
          organization_id: string
          price: number
        }[]
      }
      get_product_for_checkout: {
        Args: { p_merchant_id: string; p_product_id: string }
        Returns: Json
      }
      get_product_service: {
        Args: { p_merchant_id?: string; p_product_id: string }
        Returns: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string
          display_on_storefront: boolean
          image_url: string
          is_active: boolean
          merchant_id: string
          name: string
          organization_id: string
          price: number
          product_id: string
          updated_at: string
        }[]
      }
      get_provider_merchant_id: {
        Args: {
          p_organization_id: string
          p_provider_code: Database["public"]["Enums"]["provider_code"]
        }
        Returns: string
      }
      get_public_organization_by_slug: {
        Args: { p_slug: string }
        Returns: {
          default_currency: string
          description: string
          logo_url: string
          name: string
          organization_id: string
          storefront_enabled: boolean
          theme_color: string
          website_url: string
        }[]
      }
      get_public_product_by_id: {
        Args: { p_org_slug: string; p_product_id: string }
        Returns: {
          currency_code: string
          description: string
          display_on_storefront: boolean
          image_url: string
          is_active: boolean
          name: string
          price: number
          product_id: string
        }[]
      }
      get_public_products_by_org_slug: {
        Args: { p_slug: string }
        Returns: {
          currency_code: string
          description: string
          display_on_storefront: boolean
          image_url: string
          is_active: boolean
          name: string
          price: number
          product_id: string
        }[]
      }
      get_refund: {
        Args: { p_merchant_id: string; p_refund_id: string }
        Returns: {
          amount: number
          created_at: string
          fee_amount: number
          metadata: Json
          reason: string
          refund_id: string
          refunded_amount: number
          status: Database["public"]["Enums"]["refund_status"]
          transaction_id: string
          updated_at: string
        }[]
      }
      get_retryable_webhooks: {
        Args: { p_max_retries?: number }
        Returns: {
          authorized_events: Database["public"]["Enums"]["webhook_event"][]
          created_at: string
          deleted_at: string | null
          is_active: boolean
          last_payload: Json | null
          last_response_body: string | null
          last_response_status: number | null
          last_triggered_at: string | null
          merchant_id: string
          metadata: Json | null
          organization_id: string
          retry_count: number | null
          spi_event_types: string[] | null
          supports_spi: boolean
          updated_at: string
          url: string
          verification_token: string
          webhook_id: string
        }[]
        SetofOptions: {
          from: "*"
          to: "webhooks"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_sales_intensity_level: {
        Args: { p_sales_count: number }
        Returns: number
      }
      get_statement_data_for_pdf: {
        Args: { p_invoice_id: string }
        Returns: {
          adjustments: number
          currency_code: string
          fee_period_end: string
          fee_period_start: string
          invoice_date: string
          issuer_organization_city: string
          issuer_organization_country: string
          issuer_organization_logo_url: string
          issuer_organization_name: string
          issuer_organization_postal_code: string
          issuer_organization_region: string
          issuer_organization_street: string
          merchant_city: string
          merchant_country: string
          merchant_id: string
          merchant_name: string
          merchant_organization_id: string
          merchant_organization_logo_url: string
          merchant_organization_name: string
          merchant_postal_code: string
          merchant_region: string
          merchant_street: string
          monthly_fees: number
          outstanding_balance: number
          platform_invoice_id: string
          status: string
          total_amount: number
        }[]
      }
      get_storefront: {
        Args: { org_id: string }
        Returns: {
          default_currency: Database["public"]["Enums"]["currency_code"]
          description: string
          donation_product: Json
          logo_url: string
          name: string
          organization_id: string
          products: Json
          storefront_enabled: boolean
          theme_color: string
          website_url: string
        }[]
      }
      get_storefront_customers: {
        Args: { org_id: string }
        Returns: {
          customer_id: string
          email: string
          name: string
        }[]
      }
      get_stripe_connect_account: {
        Args: { p_stripe_account_id: string }
        Returns: {
          business_type: string
          merchant_id: string
          onboarding_status: string
          organization_id: string
          stripe_account_type: string
          stripe_connect_id: string
        }[]
      }
      get_subscription_history: {
        Args: { p_subscription_id: string }
        Returns: {
          amount: number
          currency: Database["public"]["Enums"]["currency_code"]
          description: string
          event_date: string
          event_type: string
          reason: string
          status: Database["public"]["Enums"]["subscription_status"]
        }[]
      }
      get_subscription_plan: {
        Args: { p_merchant_id: string; p_plan_id: string }
        Returns: {
          amount: number
          billing_frequency: Database["public"]["Enums"]["frequency"]
          charge_day: number
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string
          failed_payment_action: Database["public"]["Enums"]["failed_payment_action"]
          first_payment_type: Database["public"]["Enums"]["first_payment_type"]
          is_active: boolean
          merchant_id: string
          metadata: Json
          name: string
          organization_id: string
          plan_id: string
          updated_at: string
        }[]
      }
      get_subscription_stats: {
        Args: never
        Returns: {
          active_subscriptions: number
          recurring_revenue: number
          total_revenue: number
          total_subscriptions: number
        }[]
      }
      get_subscriptions_by_plan: {
        Args: never
        Returns: {
          active_count: number
          plan_id: string
          plan_name: string
          recurring_revenue: number
          total_count: number
          total_revenue: number
        }[]
      }
      get_team_members_stats: {
        Args: never
        Returns: {
          active_members: number
          average_members_per_merchant: number
          pending_invites: number
          total_members: number
        }[]
      }
      get_top_performing_products: {
        Args: never
        Returns: {
          gross_revenue: number
          id: string
          name: string
          net_revenue: number
          transactions: number
        }[]
      }
      get_total_beneficiary_payout_amount: {
        Args: {
          p_end_date?: string
          p_merchant_id: string
          p_start_date?: string
        }
        Returns: number
      }
      get_transaction: {
        Args: { p_transaction_id: string }
        Returns: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_id: string
          description: string
          fee_amount: number
          fee_reference: string
          gross_amount: number
          merchant_id: string
          metadata: Json
          net_amount: number
          organization_id: string
          payment_method_code: Database["public"]["Enums"]["payment_method_code"]
          product_id: string
          provider_code: Database["public"]["Enums"]["provider_code"]
          status: Database["public"]["Enums"]["transaction_status"]
          subscription_id: string
          transaction_id: string
          transaction_type: Database["public"]["Enums"]["transaction_type"]
          updated_at: string
        }[]
      }
      get_transaction_stats: {
        Args: never
        Returns: {
          total_count: number
          total_fee_amount: number
          total_gross_amount: number
          total_net_amount: number
        }[]
      }
      get_transaction_stats_by_merchant: {
        Args: never
        Returns: {
          average_amount: number
          merchant_id: string
          total_amount: number
          total_transactions: number
        }[]
      }
      get_transaction_stats_by_provider: {
        Args: never
        Returns: {
          failed_transactions: number
          provider_code: string
          success_rate: number
          successful_transactions: number
          total_amount: number
          total_transactions: number
        }[]
      }
      get_transaction_status: {
        Args: { p_transaction_id: string }
        Returns: {
          error_code: string
          error_message: string
          provider_payment_status: string
          status: string
          transaction_id: string
        }[]
      }
      get_transactions_by_date: {
        Args: never
        Returns: {
          count: number
          date: string
          fee_amount: number
          gross_amount: number
          net_amount: number
        }[]
      }
      get_transactions_by_provider: {
        Args: never
        Returns: {
          count: number
          fee_amount: number
          gross_amount: number
          net_amount: number
          provider_code: string
        }[]
      }
      get_transactions_by_status: {
        Args: never
        Returns: {
          count: number
          gross_amount: number
          status: string
        }[]
      }
      get_wave_payment_status: {
        Args: { p_provider_checkout_id: string }
        Returns: {
          error_code: string
          error_message: string
          payment_status: Database["public"]["Enums"]["provider_payment_status"]
          status: Database["public"]["Enums"]["transaction_status"]
        }[]
      }
      get_wave_transaction_by_checkout_id: {
        Args: { p_provider_checkout_id: string }
        Returns: {
          merchant_id: string
          organization_id: string
          transaction_id: string
        }[]
      }
      get_webhook: {
        Args: { p_merchant_id: string; p_webhook_id: string }
        Returns: {
          authorized_events: Database["public"]["Enums"]["webhook_event"][]
          created_at: string
          deleted_at: string | null
          is_active: boolean
          last_payload: Json | null
          last_response_body: string | null
          last_response_status: number | null
          last_triggered_at: string | null
          merchant_id: string
          metadata: Json | null
          organization_id: string
          retry_count: number | null
          spi_event_types: string[] | null
          supports_spi: boolean
          updated_at: string
          url: string
          verification_token: string
          webhook_id: string
        }[]
        SetofOptions: {
          from: "*"
          to: "webhooks"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_webhook_delivery_logs: {
        Args: {
          p_failed_only?: boolean
          p_limit?: number
          p_merchant_id: string
          p_offset?: number
          p_success_only?: boolean
          p_webhook_id: string
        }
        Returns: {
          attempt_number: number
          created_at: string
          event_type: string
          headers: Json
          ip_address: string
          log_id: string
          merchant_id: string
          organization_id: string
          payload: Json
          request_duration_ms: number
          response_body: string
          response_status: number
          success: boolean
          user_agent: string
          webhook_id: string
        }[]
      }
      get_withdrawal_notification_emails: {
        Args: never
        Returns: {
          email: string
        }[]
      }
      handle_subscription_failed_payment: {
        Args: { p_subscription_id: string }
        Returns: string
      }
      increment_coupon_usage_for_completed_transaction: {
        Args: { p_transaction_id: string }
        Returns: boolean
      }
      ingest_event: {
        Args: {
          p_customer_id?: string
          p_event_data?: Json
          p_event_name: string
          p_metadata?: Json
          p_organization_id: string
        }
        Returns: string
      }
      initialize_organization_fees: {
        Args: { p_organization_id: string }
        Returns: number
      }
      initiate_withdrawal: {
        Args: {
          p_amount: number
          p_currency_code?: Database["public"]["Enums"]["currency_code"]
          p_merchant_id: string
          p_payout_method_id: string
          p_provider_code?: Database["public"]["Enums"]["provider_code"]
        }
        Returns: {
          message: string
          success: boolean
        }[]
      }
      invite_team_member: {
        Args: {
          p_email: string
          p_organization_id: string
          p_position: string
          p_role: Database["public"]["Enums"]["member_role"]
        }
        Returns: undefined
      }
      is_organization_admin:
        | {
            Args: { p_merchant_id: string; p_organization_id: string }
            Returns: boolean
          }
        | { Args: { p_organization_id: string }; Returns: boolean }
      is_uemoa_country: { Args: { country_code: string }; Returns: boolean }
      list_checkout_sessions: {
        Args: {
          p_limit?: number
          p_merchant_id: string
          p_offset?: number
          p_status?: Database["public"]["Enums"]["checkout_session_status"]
        }
        Returns: {
          allowed_providers: Database["public"]["Enums"]["provider_code"][]
          amount: number
          cancel_url: string
          checkout_session_id: string
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_email: string
          customer_id: string
          customer_name: string
          customer_phone: string
          expires_at: string
          merchant_id: string
          metadata: Json
          organization_id: string
          payment_link_id: string
          plan_id: string
          product_id: string
          public_description: string
          status: Database["public"]["Enums"]["checkout_session_status"]
          subscription_id: string
          success_url: string
          title: string
          updated_at: string
        }[]
      }
      list_customer_subscriptions: {
        Args: {
          p_customer_id?: string
          p_limit?: number
          p_merchant_id: string
          p_offset?: number
          p_status?: Database["public"]["Enums"]["subscription_status"]
        }
        Returns: {
          created_at: string
          customer_email: string
          customer_id: string
          customer_name: string
          end_date: string
          merchant_id: string
          metadata: Json
          next_billing_date: string
          organization_id: string
          plan_amount: number
          plan_billing_frequency: Database["public"]["Enums"]["frequency"]
          plan_currency_code: Database["public"]["Enums"]["currency_code"]
          plan_id: string
          plan_name: string
          start_date: string
          status: Database["public"]["Enums"]["subscription_status"]
          subscription_id: string
          updated_at: string
        }[]
      }
      list_customers: {
        Args: {
          p_email?: string
          p_limit?: number
          p_merchant_id: string
          p_offset?: number
          p_phone_number?: string
        }
        Returns: {
          address: string
          city: string
          country: string
          created_at: string
          customer_id: string
          email: string
          is_business: boolean
          metadata: Json
          name: string
          phone_number: string
          postal_code: string
          updated_at: string
          whatsapp_number: string
        }[]
      }
      list_products: {
        Args: { p_limit?: number; p_merchant_id: string; p_offset?: number }
        Returns: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string
          is_active: boolean
          merchant_id: string
          name: string
          organization_id: string
          price: number
          product_id: string
          updated_at: string
        }[]
      }
      list_products_service: {
        Args: {
          p_is_active?: boolean
          p_limit?: number
          p_merchant_id: string
          p_offset?: number
        }
        Returns: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string
          display_on_storefront: boolean
          image_url: string
          is_active: boolean
          merchant_id: string
          name: string
          organization_id: string
          price: number
          product_id: string
          updated_at: string
        }[]
      }
      list_providers: {
        Args: { p_merchant_id?: string }
        Returns: {
          code: Database["public"]["Enums"]["provider_code"]
          description: string
          is_connected: boolean
          name: string
          payment_methods: Database["public"]["Enums"]["payment_method_code"][]
        }[]
      }
      list_subscription_plans: {
        Args: { p_limit?: number; p_merchant_id: string; p_offset?: number }
        Returns: {
          amount: number
          billing_frequency: Database["public"]["Enums"]["frequency"]
          charge_day: number
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          description: string
          failed_payment_action: Database["public"]["Enums"]["failed_payment_action"]
          first_payment_type: Database["public"]["Enums"]["first_payment_type"]
          is_active: boolean
          merchant_id: string
          metadata: Json
          name: string
          organization_id: string
          plan_id: string
          updated_at: string
        }[]
      }
      list_transactions: {
        Args: {
          p_end_date?: string
          p_limit?: number
          p_merchant_id: string
          p_offset?: number
          p_provider?: Database["public"]["Enums"]["provider_code"]
          p_start_date?: string
          p_status?: Database["public"]["Enums"]["transaction_status"][]
        }
        Returns: {
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          customer_id: string
          description: string
          fee_amount: number
          fee_reference: string
          gross_amount: number
          merchant_id: string
          metadata: Json
          net_amount: number
          organization_id: string
          payment_method_code: Database["public"]["Enums"]["payment_method_code"]
          product_id: string
          provider_code: Database["public"]["Enums"]["provider_code"]
          provider_transaction_id: string
          status: Database["public"]["Enums"]["transaction_status"]
          subscription_id: string
          transaction_id: string
          transaction_type: Database["public"]["Enums"]["transaction_type"]
          updated_at: string
        }[]
      }
      log_api_error: {
        Args: {
          p_context?: Json
          p_error_message: string
          p_error_type: string
          p_stack_trace?: string
        }
        Returns: string
      }
      log_api_usage: {
        Args: {
          p_api_key: string
          p_endpoint: string
          p_ip_address: string
          p_organization_id: string
          p_request_method: string
          p_response_status: number
          p_response_time: number
        }
        Returns: undefined
      }
      log_event: {
        Args: {
          p_details?: Json
          p_event: Database["public"]["Enums"]["event_type"]
          p_merchant_id: string
          p_request_method?: string
          p_request_url?: string
          p_response_status?: number
          p_severity?: string
        }
        Returns: string
      }
      log_webhook_delivery: {
        Args: {
          p_attempt_number?: number
          p_event_type: string
          p_headers?: Json
          p_ip_address?: string
          p_merchant_id: string
          p_organization_id: string
          p_payload: Json
          p_request_duration_ms?: number
          p_response_body: string
          p_response_status: number
          p_user_agent?: string
          p_webhook_id: string
        }
        Returns: string
      }
      manage_organization_fee_type: {
        Args: {
          p_fee_type_id?: string
          p_fixed_amount?: number
          p_is_enabled?: boolean
          p_name?: string
          p_organization_id: string
          p_percentage?: number
        }
        Returns: string
      }
      manually_expire_transactions: {
        Args: { expiry_hours?: number }
        Returns: string
      }
      manually_send_subscription_renewal: {
        Args: { p_subscription_id: string }
        Returns: string
      }
      manually_send_transaction_confirmation: {
        Args: { p_transaction_id: string }
        Returns: string
      }
      manually_send_withdrawal_confirmation: {
        Args: { p_payout_id: string }
        Returns: string
      }
      map_spi_status_to_transaction_status: {
        Args: { spi_status: Database["public"]["Enums"]["spi_payment_status"] }
        Returns: Database["public"]["Enums"]["transaction_status"]
      }
      map_spi_webhook_event_to_webhook_event: {
        Args: {
          spi_event_code: Database["public"]["Enums"]["spi_webhook_event_code"]
        }
        Returns: Database["public"]["Enums"]["webhook_event"]
      }
      mark_all_notifications_read: {
        Args: { p_merchant_id: string }
        Returns: undefined
      }
      mark_notification_read: {
        Args: { p_notification_id: string }
        Returns: undefined
      }
      ping_api: { Args: never; Returns: string }
      pre_apply_coupon_validation: {
        Args: {
          p_coupon_id: string
          p_customer_id: string
          p_organization_id: string
          p_quantity?: number
        }
        Returns: {
          is_valid: boolean
          message: string
        }[]
      }
      process_bnpl_installment_payment: {
        Args: {
          p_payment_request_id: string
          p_payment_status: Database["public"]["Enums"]["spi_payment_status"]
          p_spi_tx_id: string
        }
        Returns: string
      }
      process_checkout_transaction: {
        Args: {
          p_checkout_session_id: string
          p_payment_method_code: Database["public"]["Enums"]["payment_method_code"]
          p_provider_code: Database["public"]["Enums"]["provider_code"]
          p_provider_payment_details?: Json
          p_provider_transaction_id?: string
        }
        Returns: Json
      }
      process_payment: {
        Args: {
          p_amount: number
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_merchant_id: string
          p_metadata?: Json
          p_provider_code: Database["public"]["Enums"]["provider_code"]
        }
        Returns: string
      }
      process_scheduled_subscription_resumes: { Args: never; Returns: number }
      process_subscription_renewal_notifications: {
        Args: never
        Returns: number
      }
      reactivate_merchant: {
        Args: { p_merchant_id: string }
        Returns: undefined
      }
      reactivate_valid_payment_links: { Args: never; Returns: number }
      recalculate_all_merchants_mrr: {
        Args: never
        Returns: {
          arr: number
          merchant_id: string
          mrr: number
        }[]
      }
      record_free_transaction: {
        Args: {
          p_additional_coupon_ids?: string[]
          p_coupon_id?: string
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_customer_id: string
          p_description: string
          p_discount_amount: number
          p_link_id: string
          p_merchant_id: string
          p_organization_id: string
          p_original_amount: number
          p_product_id?: string
          p_subscription_id?: string
        }
        Returns: string
      }
      remove_team_member: {
        Args: { p_merchant_id: string; p_organization_id: string }
        Returns: boolean
      }
      remove_withdrawal_notification_email: {
        Args: { p_email: string }
        Returns: boolean
      }
      retry_webhook_delivery: {
        Args: { p_log_id: string; p_merchant_id: string; p_webhook_id: string }
        Returns: boolean
      }
      revoke_api_key: {
        Args: { p_api_key: string; p_merchant_id: string }
        Returns: boolean
      }
      rollover_provider_balance_quarterly: { Args: never; Returns: undefined }
      safe_delete_payment_link: {
        Args: { p_link_id: string }
        Returns: boolean
      }
      save_conversion_rates: {
        Args: {
          p_from_currency: Database["public"]["Enums"]["currency_code"]
          p_rate: number
          p_to_currency: Database["public"]["Enums"]["currency_code"]
        }
        Returns: {
          message: string
          success: boolean
        }[]
      }
      save_integration_click: {
        Args: { p_integration: string; p_organization_id: string }
        Returns: Json
      }
      send_activation_request_notification: {
        Args: {
          business_description: string
          country: string
          legal_name: string
          merchant_id: string
          request_date: string
          signatory_email: string
          signatory_name: string
        }
        Returns: undefined
      }
      send_feedback_notification: {
        Args: {
          p_created_at: string
          p_merchant_email: string
          p_merchant_name: string
          p_message: string
          p_sentiment: string
        }
        Returns: undefined
      }
      send_merchant_support_confirmation: {
        Args: { p_merchant_email: string; p_support_request_id: string }
        Returns: undefined
      }
      send_onboarding_welcome_email: {
        Args: { user_email: string; user_name: string }
        Returns: undefined
      }
      send_provider_connected_notification: {
        Args: {
          p_organization_id: string
          p_provider_code: Database["public"]["Enums"]["provider_code"]
        }
        Returns: undefined
      }
      send_provider_connected_notification_async: {
        Args: {
          p_organization_id: string
          p_provider_code: Database["public"]["Enums"]["provider_code"]
        }
        Returns: undefined
      }
      send_signup_notification: {
        Args: {
          merchant_email: string
          merchant_name: string
          signup_date: string
        }
        Returns: undefined
      }
      send_subscription_renewal_email: {
        Args: {
          p_checkout_url?: string
          p_subscription_id: string
          p_template_type?: string
        }
        Returns: boolean
      }
      send_support_request_notification: {
        Args: {
          p_category: Database["public"]["Enums"]["support_category"]
          p_created_at: string
          p_image_url: string
          p_merchant_email: string
          p_merchant_name: string
          p_message: string
        }
        Returns: undefined
      }
      send_transaction_confirmation_email: {
        Args: { p_transaction_id: string }
        Returns: undefined
      }
      send_transaction_receipt_email: {
        Args: { p_transaction_id: string }
        Returns: string
      }
      send_withdrawal_confirmation_email: {
        Args: { p_payout_id: string }
        Returns: undefined
      }
      set_default_payout_method: {
        Args: { p_payout_method_id: string }
        Returns: undefined
      }
      simple_update_transaction_status: {
        Args: {
          p_metadata?: Json
          p_status: Database["public"]["Enums"]["transaction_status"]
          p_transaction_id: string
        }
        Returns: boolean
      }
      skip_onboarding: {
        Args: { p_merchant_id: string; p_org_name?: string }
        Returns: undefined
      }
      soft_delete_merchant: {
        Args: { p_merchant_id: string }
        Returns: undefined
      }
      soft_delete_organization: {
        Args: { p_merchant_id: string; p_organization_id: string }
        Returns: boolean
      }
      test_organization_webhook: {
        Args: { p_merchant_id: string; p_webhook_id: string }
        Returns: boolean
      }
      test_webhook: {
        Args: { p_merchant_id: string; p_webhook_id: string }
        Returns: boolean
      }
      test_withdrawal_notification_email: {
        Args: { p_payout_id: string }
        Returns: string
      }
      toggle_bnpl_for_organization: {
        Args: {
          p_currency_code?: Database["public"]["Enums"]["currency_code"]
          p_enable?: boolean
          p_organization_id: string
        }
        Returns: boolean
      }
      trigger_exists: {
        Args: { p_table_name: string; p_trigger_name: string }
        Returns: boolean
      }
      trigger_free_transaction_webhook: {
        Args: { p_transaction_id: string }
        Returns: undefined
      }
      unarchive_payment_link: { Args: { p_link_id: string }; Returns: boolean }
      unban_user: { Args: { user_id: string }; Returns: undefined }
      update_api_key_status: {
        Args: { p_api_key: string; p_is_active: boolean; p_merchant_id: string }
        Returns: undefined
      }
      update_assistant_conversation_title: {
        Args: {
          p_conversation_id: string
          p_merchant_id: string
          p_title: string
        }
        Returns: {
          conversation_id: string
          title: string
        }[]
      }
      update_auto_withdrawal_settings: {
        Args: {
          p_day: number
          p_enabled: boolean
          p_method?: string
          p_mobile_money_provider?: Database["public"]["Enums"]["provider_code"]
          p_payout_method_id: string
        }
        Returns: undefined
      }
      update_balances_for_transaction: {
        Args: { p_transaction_id: string }
        Returns: boolean
      }
      update_beneficiary_payout_status: {
        Args: {
          p_payout_id: string
          p_status: Database["public"]["Enums"]["payout_status"]
          p_wave_data?: Json
        }
        Returns: boolean
      }
      update_bnpl_interest_rate: {
        Args: {
          p_currency_code: Database["public"]["Enums"]["currency_code"]
          p_new_rate: number
          p_organization_id: string
        }
        Returns: boolean
      }
      update_checkout_session_customer: {
        Args: {
          p_checkout_session_id: string
          p_customer_email?: string
          p_customer_id: string
          p_customer_name?: string
          p_customer_phone?: string
        }
        Returns: boolean
      }
      update_checkout_session_status: {
        Args: {
          p_checkout_session_id: string
          p_status: Database["public"]["Enums"]["checkout_session_status"]
        }
        Returns: boolean
      }
      update_cli_device_request_status: {
        Args: {
          p_device_code: string
          p_new_status: Database["public"]["Enums"]["cli_device_request_status"]
        }
        Returns: boolean
      }
      update_coupon_status: {
        Args: { p_coupon_id: string; p_is_active: boolean }
        Returns: undefined
      }
      update_customer: {
        Args: {
          p_address?: string
          p_city?: string
          p_country?: string
          p_customer_id: string
          p_email: string
          p_is_business?: boolean
          p_name: string
          p_phone_number?: string
          p_postal_code?: string
          p_whatsapp_number?: string
        }
        Returns: undefined
      }
      update_customer_notifications: {
        Args: { p_notifications: Json; p_organization_id: string }
        Returns: undefined
      }
      update_customer_subscription: {
        Args: {
          p_end_date?: string
          p_merchant_id: string
          p_metadata?: Json
          p_next_billing_date?: string
          p_start_date?: string
          p_status?: Database["public"]["Enums"]["subscription_status"]
          p_subscription_id: string
        }
        Returns: boolean
      }
      update_kyc_document_url: {
        Args: {
          p_document_type: string
          p_document_url: string
          p_organization_id: string
        }
        Returns: undefined
      }
      update_merchant_account_balance:
        | {
            Args: {
              p_amount: number
              p_currency_code: Database["public"]["Enums"]["currency_code"]
              p_merchant_id: string
              p_organization_id: string
            }
            Returns: undefined
          }
        | {
            Args: {
              p_amount: number
              p_currency_code: Database["public"]["Enums"]["currency_code"]
              p_merchant_id: string
              p_organization_id: string
              p_record_history?: boolean
            }
            Returns: undefined
          }
      update_merchant_avatar: {
        Args: { p_avatar_url: string; p_merchant_id: string }
        Returns: undefined
      }
      update_merchant_balance_for_refund: {
        Args: {
          p_processing_fee_percentage?: number
          p_refund_amount: number
          p_transaction_id: string
        }
        Returns: {
          error_message: string
          success: boolean
        }[]
      }
      update_merchant_details: {
        Args: {
          p_email: string
          p_merchant_id: string
          p_name: string
          p_phone_number: string
          p_pin_code: string
          p_preferred_language: string
        }
        Returns: undefined
      }
      update_merchant_recipients: {
        Args: { p_organization_id: string; p_recipients: Json }
        Returns: undefined
      }
      update_mtn_provider_reference: {
        Args: { p_provider_reference_id: string; p_transaction_id: string }
        Returns: boolean
      }
      update_mtn_transaction_status: {
        Args: {
          p_error_code?: string
          p_error_message?: string
          p_external_id: string
          p_metadata?: Json
          p_payment_status: Database["public"]["Enums"]["provider_payment_status"]
          p_provider_reference_id: string
        }
        Returns: undefined
      }
      update_nowpayments_payment_currency: {
        Args: {
          p_pay_address: string
          p_pay_amount: number
          p_pay_currency: string
          p_provider_checkout_id: string
          p_transaction_id: string
        }
        Returns: undefined
      }
      update_nowpayments_payment_status: {
        Args: {
          p_metadata?: Json
          p_payment_status: string
          p_provider_checkout_id: string
          p_provider_status?: Database["public"]["Enums"]["provider_payment_status"]
        }
        Returns: undefined
      }
      update_organization_checkout_settings: {
        Args: { p_organization_id: string; p_settings: Json }
        Returns: Json
      }
      update_organization_details: {
        Args: {
          p_default_currency: string
          p_email: string
          p_name: string
          p_organization_id: string
          p_verification_status: string
          p_website_url: string
        }
        Returns: undefined
      }
      update_organization_logo: {
        Args: { p_logo_url: string; p_organization_id: string }
        Returns: undefined
      }
      update_organization_provider_connection: {
        Args: {
          p_is_connected: boolean
          p_metadata?: Json
          p_organization_id: string
          p_provider_code: Database["public"]["Enums"]["provider_code"]
          p_provider_merchant_id?: string
        }
        Returns: undefined
      }
      update_organization_provider_phone: {
        Args: {
          p_is_phone_verified?: boolean
          p_organization_id: string
          p_phone_number: string
          p_provider_code: Database["public"]["Enums"]["provider_code"]
        }
        Returns: undefined
      }
      update_organization_storefront: {
        Args: {
          p_merchant_id: string
          p_organization_id: string
          p_storefront_enabled: boolean
        }
        Returns: {
          organization_id: string
          storefront_enabled: boolean
        }[]
      }
      update_organization_webhook: {
        Args: {
          p_authorized_events: Database["public"]["Enums"]["webhook_event"][]
          p_is_active?: boolean
          p_merchant_id: string
          p_metadata?: Json
          p_url: string
          p_webhook_id: string
        }
        Returns: {
          authorized_events: Database["public"]["Enums"]["webhook_event"][]
          created_at: string
          deleted_at: string | null
          is_active: boolean
          last_payload: Json | null
          last_response_body: string | null
          last_response_status: number | null
          last_triggered_at: string | null
          merchant_id: string
          metadata: Json | null
          organization_id: string
          retry_count: number | null
          spi_event_types: string[] | null
          supports_spi: boolean
          updated_at: string
          url: string
          verification_token: string
          webhook_id: string
        }
        SetofOptions: {
          from: "*"
          to: "webhooks"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      update_organization_with_permissions: {
        Args: {
          p_default_currency: string
          p_email: string
          p_merchant_id: string
          p_name: string
          p_organization_id: string
          p_verification_status: string
          p_website_url: string
        }
        Returns: undefined
      }
      update_payment_link: {
        Args: {
          p_allow_coupon_code?: boolean
          p_allow_quantity?: boolean
          p_allowed_providers?: Database["public"]["Enums"]["provider_code"][]
          p_cancel_url?: string
          p_expires_at?: string
          p_is_active?: boolean
          p_link_id: string
          p_price?: number
          p_private_description?: string
          p_public_description?: string
          p_success_url?: string
          p_title?: string
        }
        Returns: {
          allow_coupon_code: boolean
          allow_quantity: boolean
          allowed_providers: Database["public"]["Enums"]["provider_code"][]
          cancel_url: string | null
          created_at: string
          currency_code: Database["public"]["Enums"]["currency_code"]
          expires_at: string | null
          is_active: boolean
          link_id: string
          link_type: Database["public"]["Enums"]["link_type"]
          merchant_id: string
          metadata: Json | null
          organization_id: string
          plan_id: string | null
          price: number | null
          private_description: string | null
          product_id: string | null
          public_description: string | null
          quantity: number
          success_url: string | null
          title: string
          updated_at: string
          url: string
        }
        SetofOptions: {
          from: "*"
          to: "payment_links"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      update_payment_request_from_webhook: {
        Args: {
          p_spi_payment_status: Database["public"]["Enums"]["spi_payment_status"]
          p_spi_rejection_reason?: Database["public"]["Enums"]["spi_rejection_reason"]
          p_spi_tx_id: string
        }
        Returns: undefined
      }
      update_product: {
        Args: {
          p_description: string
          p_display_on_storefront?: boolean
          p_fee_type_ids?: string[]
          p_image_url?: string
          p_is_active?: boolean
          p_name: string
          p_price: number
          p_product_id: string
        }
        Returns: undefined
      }
      update_product_service: {
        Args: {
          p_is_active?: boolean
          p_merchant_id: string
          p_product_id: string
        }
        Returns: undefined
      }
      update_refund_status: {
        Args: {
          p_merchant_id: string
          p_refund_id: string
          p_status: Database["public"]["Enums"]["refund_status"]
        }
        Returns: boolean
      }
      update_starter_business_kyc: {
        Args: {
          p_address_proof_url?: string
          p_business_description?: string
          p_business_registration_url?: string
          p_identity_proof_url?: string
          p_merchant_id: string
          p_organization_id: string
          p_tax_number?: string
        }
        Returns: undefined
      }
      update_stripe_connect_account: {
        Args: {
          p_business_type?: string
          p_charges_enabled?: boolean
          p_company_domicile_country?: string
          p_details_submitted?: boolean
          p_merchant_id?: string
          p_onboarding_status?: string
          p_org_stripe_country?: string
          p_organization_id?: string
          p_payouts_enabled?: boolean
          p_requirements_disabled_reason?: string
          p_requirements_due?: Json
          p_requirements_eventually_due?: Json
          p_stripe_account_id?: string
          p_stripe_account_type?: string
          p_stripe_dashboard_url?: string
          p_stripe_metadata?: Json
        }
        Returns: undefined
      }
      update_stripe_connect_capabilities: {
        Args: {
          p_capability_name: string
          p_requirements?: Json
          p_status: string
          p_stripe_account_id: string
        }
        Returns: undefined
      }
      update_stripe_connect_onboarding_status: {
        Args: {
          p_charges_enabled?: boolean
          p_details_submitted?: boolean
          p_onboarding_status: string
          p_payouts_enabled?: boolean
          p_stripe_account_id: string
        }
        Returns: undefined
      }
      update_subscription_next_billing_date: {
        Args: { p_subscription_id: string }
        Returns: string
      }
      update_subscription_plan: {
        Args: {
          p_amount: number
          p_billing_frequency: Database["public"]["Enums"]["frequency"]
          p_charge_day?: number
          p_description: string
          p_display_on_storefront?: boolean
          p_failed_payment_action: Database["public"]["Enums"]["failed_payment_action"]
          p_image_url?: string
          p_is_active?: boolean
          p_metadata?: Json
          p_name: string
          p_plan_id: string
        }
        Returns: undefined
      }
      update_subscription_plan_api: {
        Args: {
          p_is_active?: boolean
          p_merchant_id: string
          p_metadata?: Json
          p_plan_id: string
        }
        Returns: boolean
      }
      update_subscription_status: {
        Args: {
          p_end_date?: string
          p_metadata?: string
          p_status: Database["public"]["Enums"]["subscription_status"]
          p_subscription_id: string
        }
        Returns: undefined
      }
      update_team_member_role: {
        Args: {
          p_merchant_id: string
          p_new_role: Database["public"]["Enums"]["member_role"]
          p_organization_id: string
        }
        Returns: boolean
      }
      update_transaction_status: {
        Args: {
          p_metadata?: Json
          p_status: Database["public"]["Enums"]["transaction_status"]
          p_transaction_id: string
        }
        Returns: boolean
      }
      update_wave_checkout_status: {
        Args: {
          p_error_code?: string
          p_error_message?: string
          p_metadata?: Json
          p_payment_status?: Database["public"]["Enums"]["provider_payment_status"]
          p_provider_checkout_id: string
          p_provider_transaction_id?: string
        }
        Returns: undefined
      }
      update_wave_payout_status: {
        Args: {
          p_transaction_id: string
          p_wave_data: Json
          p_wave_status: string
        }
        Returns: undefined
      }
      update_wave_transaction_id: {
        Args: {
          p_provider_checkout_id: string
          p_provider_transaction_id: string
        }
        Returns: boolean
      }
      update_webhook: {
        Args: {
          p_authorized_events?: Database["public"]["Enums"]["webhook_event"][]
          p_is_active?: boolean
          p_merchant_id: string
          p_metadata?: Json
          p_url?: string
          p_webhook_id: string
        }
        Returns: boolean
      }
      update_webhook_delivery_status: {
        Args: {
          p_last_payload: Json
          p_last_response_body: string
          p_last_response_status: number
          p_webhook_id: string
        }
        Returns: undefined
      }
      upsert_storefront: {
        Args: {
          p_description?: string
          p_merchant_id: string
          p_name: string
          p_organization_id: string
          p_theme_color?: string
        }
        Returns: {
          description: string
          is_active: boolean
          name: string
          organization_id: string
          storefront_id: string
          theme_color: string
        }[]
      }
      validate_api_key: {
        Args: { p_api_key: string }
        Returns: {
          environment: string
          expiration_date: string
          is_active: boolean
          merchant_id: string
          organization_id: string
        }[]
      }
      validate_coupon_for_checkout: {
        Args: {
          p_coupon_code: string
          p_customer_id?: string
          p_organization_id: string
          p_plan_id?: string
          p_product_id?: string
          p_quantity?: number
        }
        Returns: {
          coupon_id: string
          customer_eligible: boolean
          discount_fixed_amount: number
          discount_percentage: number
          discount_type: Database["public"]["Enums"]["discount_type_enum"]
          is_valid: boolean
          max_quantity_per_use: number
          message: string
        }[]
      }
      validate_coupon_for_frontend: {
        Args: {
          p_coupon_code: string
          p_customer_id?: string
          p_organization_id: string
          p_plan_id?: string
          p_product_id?: string
          p_quantity?: number
          p_subtotal?: number
        }
        Returns: Json
      }
      verify_2fa_login: {
        Args: { p_merchant_id: string; p_verification_code: string }
        Returns: boolean
      }
      verify_api_key: {
        Args: {
          p_api_key: string
          p_endpoint: string
          p_ip_address?: string
          p_request_method?: string
        }
        Returns: {
          environment: string
          is_valid: boolean
          merchant_id: string
          message: string
          organization_id: string
          rate_limited: boolean
        }[]
      }
      verify_nowpayments_notification: {
        Args: {
          p_organization_id: string
          p_payload: Json
          p_signature: string
        }
        Returns: boolean
      }
      verify_totp_code: {
        Args: { secret: string; token: string }
        Returns: boolean
      }
    }
    Enums: {
      aggregation_function: "count" | "sum" | "avg" | "min" | "max" | "unique"
      bnpl_fee_type:
        | "merchant_processing"
        | "customer_interest"
        | "platform_risk"
        | "late_fee"
      bnpl_status: "pending" | "collected" | "waived" | "refunded"
      checkout_session_status: "open" | "completed" | "expired"
      cli_device_request_status:
        | "pending"
        | "approved"
        | "denied"
        | "expired"
        | "completed"
      conversion_type: "payment" | "withdrawal" | "refund" | "manual"
      currency_code: "XOF" | "USD" | "EUR"
      customer_type_enum: "all" | "new" | "returning"
      discount_type_enum: "percentage" | "fixed"
      dispute_status: "pending" | "resolved" | "closed"
      entity_type: "merchant" | "organization" | "platform"
      event_type:
        | "validate_api_key"
        | "create_api_key"
        | "edit_api_key"
        | "remove_api_key"
        | "user_login"
        | "edit_user_password"
        | "create_pin"
        | "edit_pin"
        | "edit_user_details"
        | "authorize_user_2fa"
        | "create_user_2fa"
        | "remove_user_2fa"
        | "edit_user_phone"
        | "set_callback_url"
        | "update_webhook"
        | "add_bank_account"
        | "remove_bank_account"
        | "create_payout"
        | "beneficiary_payout_created"
        | "mass_beneficiary_payout_created"
        | "payout_status_change"
        | "process_payment"
        | "payment_status_change"
        | "create_refund"
        | "refund_status_change"
        | "create_dispute"
        | "dispute_status_change"
        | "list_checkout_sessions"
        | "update_subscription_plan"
        | "create_subscription"
        | "cancel_subscription"
        | "subscription_status_change"
        | "subscription_payment_failed"
        | "create_product"
        | "update_product"
        | "delete_product"
        | "provider_status_change"
        | "provider_connection_error"
        | "provider_integration_success"
        | "system_maintenance"
        | "system_update"
        | "compliance_update"
        | "api_status_change"
        | "kyc_status_auto_updated"
        | "kyc_documents_submitted"
        | "customer_verification_required"
        | "customer_verification_success"
        | "customer_verification_failed"
      failed_payment_action: "cancel" | "pause" | "continue"
      fee_category: "payment_processing" | "payout" | "other"
      fee_payer_type: "merchant" | "customer" | "platform"
      fee_subcategory:
        | "pos"
        | "bnpl"
        | "crypto"
        | "cards"
        | "mobile_money"
        | "bank_transfer_local"
        | "bank_transfer_international"
        | "bank_transfer_beneficiary"
        | "mobile_money_payout"
        | "mobile_money_beneficiary"
        | "refund"
        | "partial_refund"
        | "chargeback"
        | "currency_conversion"
        | "international_cards"
        | "subscription_payments"
      fee_type: "platform" | "processing" | "conversion" | "payout" | "refund"
      feedback_status: "open" | "reviewed" | "implemented" | "closed"
      filter_operator:
        | "eq"
        | "ne"
        | "gt"
        | "gte"
        | "lt"
        | "lte"
        | "like"
        | "not_like"
      first_payment_type: "initial" | "non_initial"
      fraud_action: "flag" | "block"
      fraud_alert_status: "flagged" | "blocked" | "resolved" | "dismissed"
      fraud_rule_type: "velocity" | "threshold" | "watchlist"
      frequency:
        | "weekly"
        | "bi-weekly"
        | "monthly"
        | "bi-monthly"
        | "quarterly"
        | "semi-annual"
        | "yearly"
      invoice_status: "sent" | "paid" | "overdue" | "cancelled"
      kyc_status:
        | "not_submitted"
        | "pending"
        | "not_authorized"
        | "approved"
        | "rejected"
        | "starter_business"
      link_type: "product" | "plan" | "instant"
      member_role: "Admin" | "Member"
      notification_type:
        | "onboarding"
        | "tip"
        | "transaction"
        | "payout"
        | "provider_status"
        | "alert"
        | "billing"
        | "compliance"
        | "update"
        | "security_alert"
        | "maintenance"
        | "dispute"
        | "refund"
        | "invoice"
        | "subscription"
        | "webhook"
        | "chargeback"
      onboarding_status: "pending" | "completed" | "skipped"
      organization_status: "active" | "inactive" | "suspended"
      organization_verification_status: "unverified" | "starter" | "verified"
      payment_method_code:
        | "CARDS"
        | "MOBILE_MONEY"
        | "E_WALLET"
        | "BANK_TRANSFER"
        | "CRYPTO"
        | "SPI"
        | "FREE"
      payout_status: "pending" | "processing" | "completed" | "failed"
      permission_action: "view" | "create" | "edit" | "delete" | "approve"
      permission_category:
        | "payments"
        | "accounts"
        | "products"
        | "subscriptions"
        | "customers"
      provider_business_type: "fintech" | "other"
      provider_code:
        | "WAVE"
        | "MTN"
        | "NOWPAYMENTS"
        | "STRIPE"
        | "SPI"
        | "CYBERSOURCE"
        | "FREE"
      provider_payment_status:
        | "processing"
        | "cancelled"
        | "succeeded"
        | "expired"
        | "refunded"
      qr_code_type: "static" | "dynamic"
      reconciliation_status:
        | "pending"
        | "matched"
        | "partial_match"
        | "mismatch"
        | "resolved"
      refund_status: "pending" | "completed" | "failed"
      spi_account_status: "OUVERT" | "BLOQUE" | "CLOTURE"
      spi_account_type:
        | "CACC"
        | "CARD"
        | "CASH"
        | "CHAR"
        | "CISH"
        | "CURR"
        | "DPST"
        | "SVGS"
        | "ULAA"
      spi_alias_type: "SHID" | "MBNO" | "MCOD"
      spi_document_type:
        | "CINV"
        | "CMCN"
        | "DISP"
        | "PUOR"
        | "CONT"
        | "INVC"
        | "PMNT"
        | "TPMT"
      spi_payment_category:
        | "631"
        | "000"
        | "400"
        | "733"
        | "300"
        | "999"
        | "500"
        | "521"
        | "401"
      spi_payment_flow_type:
        | "BANK_TO_BANK"
        | "BANK_TO_WALLET"
        | "WALLET_TO_BANK"
        | "WALLET_TO_WALLET"
        | "INTRA_ACCOUNT"
      spi_payment_request_category: "500" | "521" | "401"
      spi_payment_status: "INITIE" | "ENVOYE" | "IRREVOCABLE" | "REJETE"
      spi_rejection_reason:
        | "BE23"
        | "DU03"
        | "AC04"
        | "AC06"
        | "AEXR"
        | "AG03"
        | "AG10"
        | "AG11"
        | "ALAC"
        | "AM02"
        | "AM09"
        | "AM14"
        | "APAR"
        | "RR07"
        | "FR01"
        | "AB03"
        | "AB04"
        | "AB08"
        | "AB09"
        | "AC03"
        | "AG01"
        | "AM04"
        | "RR04"
        | "CUST"
        | "ARDT"
      spi_webhook_event_code:
        | "PAIEMENT_RECU"
        | "PAIEMENT_ENVOYE"
        | "PAIEMENT_REJETE"
        | "RTP_RECU"
        | "RTP_REJETE"
        | "RETOUR_ENVOYE"
        | "RETOUR_REJETE"
        | "RETOUR_RECU"
        | "ANNULATION_DEMANDE"
        | "ANNULATION_REJETE"
      subscription_status:
        | "pending"
        | "active"
        | "paused"
        | "cancelled"
        | "expired"
        | "past_due"
        | "trial"
      support_category:
        | "account"
        | "billing"
        | "technical"
        | "feature"
        | "other"
      support_priority: "low" | "normal" | "high" | "urgent"
      support_status: "open" | "in_progress" | "resolved" | "closed"
      team_status: "active" | "invited" | "inactive"
      ticket_status: "open" | "resolved" | "closed"
      transaction_status:
        | "pending"
        | "completed"
        | "failed"
        | "refunded"
        | "expired"
      transaction_type: "payment" | "instalment"
      usage_frequency_enum:
        | "total"
        | "per_customer"
        | "per_day"
        | "per_week"
        | "per_month"
      webhook_event:
        | "payment.created"
        | "payment.succeeded"
        | "payment.failed"
        | "payment.canceled"
        | "refund.created"
        | "refund.completed"
        | "refund.failed"
        | "subscription.created"
        | "subscription.renewed"
        | "subscription.canceled"
        | "checkout.completed"
        | "provider.status_changed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      aggregation_function: ["count", "sum", "avg", "min", "max", "unique"],
      bnpl_fee_type: [
        "merchant_processing",
        "customer_interest",
        "platform_risk",
        "late_fee",
      ],
      bnpl_status: ["pending", "collected", "waived", "refunded"],
      checkout_session_status: ["open", "completed", "expired"],
      cli_device_request_status: [
        "pending",
        "approved",
        "denied",
        "expired",
        "completed",
      ],
      conversion_type: ["payment", "withdrawal", "refund", "manual"],
      currency_code: ["XOF", "USD", "EUR"],
      customer_type_enum: ["all", "new", "returning"],
      discount_type_enum: ["percentage", "fixed"],
      dispute_status: ["pending", "resolved", "closed"],
      entity_type: ["merchant", "organization", "platform"],
      event_type: [
        "validate_api_key",
        "create_api_key",
        "edit_api_key",
        "remove_api_key",
        "user_login",
        "edit_user_password",
        "create_pin",
        "edit_pin",
        "edit_user_details",
        "authorize_user_2fa",
        "create_user_2fa",
        "remove_user_2fa",
        "edit_user_phone",
        "set_callback_url",
        "update_webhook",
        "add_bank_account",
        "remove_bank_account",
        "create_payout",
        "beneficiary_payout_created",
        "mass_beneficiary_payout_created",
        "payout_status_change",
        "process_payment",
        "payment_status_change",
        "create_refund",
        "refund_status_change",
        "create_dispute",
        "dispute_status_change",
        "list_checkout_sessions",
        "update_subscription_plan",
        "create_subscription",
        "cancel_subscription",
        "subscription_status_change",
        "subscription_payment_failed",
        "create_product",
        "update_product",
        "delete_product",
        "provider_status_change",
        "provider_connection_error",
        "provider_integration_success",
        "system_maintenance",
        "system_update",
        "compliance_update",
        "api_status_change",
        "kyc_status_auto_updated",
        "kyc_documents_submitted",
        "customer_verification_required",
        "customer_verification_success",
        "customer_verification_failed",
      ],
      failed_payment_action: ["cancel", "pause", "continue"],
      fee_category: ["payment_processing", "payout", "other"],
      fee_payer_type: ["merchant", "customer", "platform"],
      fee_subcategory: [
        "pos",
        "bnpl",
        "crypto",
        "cards",
        "mobile_money",
        "bank_transfer_local",
        "bank_transfer_international",
        "bank_transfer_beneficiary",
        "mobile_money_payout",
        "mobile_money_beneficiary",
        "refund",
        "partial_refund",
        "chargeback",
        "currency_conversion",
        "international_cards",
        "subscription_payments",
      ],
      fee_type: ["platform", "processing", "conversion", "payout", "refund"],
      feedback_status: ["open", "reviewed", "implemented", "closed"],
      filter_operator: [
        "eq",
        "ne",
        "gt",
        "gte",
        "lt",
        "lte",
        "like",
        "not_like",
      ],
      first_payment_type: ["initial", "non_initial"],
      fraud_action: ["flag", "block"],
      fraud_alert_status: ["flagged", "blocked", "resolved", "dismissed"],
      fraud_rule_type: ["velocity", "threshold", "watchlist"],
      frequency: [
        "weekly",
        "bi-weekly",
        "monthly",
        "bi-monthly",
        "quarterly",
        "semi-annual",
        "yearly",
      ],
      invoice_status: ["sent", "paid", "overdue", "cancelled"],
      kyc_status: [
        "not_submitted",
        "pending",
        "not_authorized",
        "approved",
        "rejected",
        "starter_business",
      ],
      link_type: ["product", "plan", "instant"],
      member_role: ["Admin", "Member"],
      notification_type: [
        "onboarding",
        "tip",
        "transaction",
        "payout",
        "provider_status",
        "alert",
        "billing",
        "compliance",
        "update",
        "security_alert",
        "maintenance",
        "dispute",
        "refund",
        "invoice",
        "subscription",
        "webhook",
        "chargeback",
      ],
      onboarding_status: ["pending", "completed", "skipped"],
      organization_status: ["active", "inactive", "suspended"],
      organization_verification_status: ["unverified", "starter", "verified"],
      payment_method_code: [
        "CARDS",
        "MOBILE_MONEY",
        "E_WALLET",
        "BANK_TRANSFER",
        "CRYPTO",
        "SPI",
        "FREE",
      ],
      payout_status: ["pending", "processing", "completed", "failed"],
      permission_action: ["view", "create", "edit", "delete", "approve"],
      permission_category: [
        "payments",
        "accounts",
        "products",
        "subscriptions",
        "customers",
      ],
      provider_business_type: ["fintech", "other"],
      provider_code: [
        "WAVE",
        "MTN",
        "NOWPAYMENTS",
        "STRIPE",
        "SPI",
        "CYBERSOURCE",
        "FREE",
      ],
      provider_payment_status: [
        "processing",
        "cancelled",
        "succeeded",
        "expired",
        "refunded",
      ],
      qr_code_type: ["static", "dynamic"],
      reconciliation_status: [
        "pending",
        "matched",
        "partial_match",
        "mismatch",
        "resolved",
      ],
      refund_status: ["pending", "completed", "failed"],
      spi_account_status: ["OUVERT", "BLOQUE", "CLOTURE"],
      spi_account_type: [
        "CACC",
        "CARD",
        "CASH",
        "CHAR",
        "CISH",
        "CURR",
        "DPST",
        "SVGS",
        "ULAA",
      ],
      spi_alias_type: ["SHID", "MBNO", "MCOD"],
      spi_document_type: [
        "CINV",
        "CMCN",
        "DISP",
        "PUOR",
        "CONT",
        "INVC",
        "PMNT",
        "TPMT",
      ],
      spi_payment_category: [
        "631",
        "000",
        "400",
        "733",
        "300",
        "999",
        "500",
        "521",
        "401",
      ],
      spi_payment_flow_type: [
        "BANK_TO_BANK",
        "BANK_TO_WALLET",
        "WALLET_TO_BANK",
        "WALLET_TO_WALLET",
        "INTRA_ACCOUNT",
      ],
      spi_payment_request_category: ["500", "521", "401"],
      spi_payment_status: ["INITIE", "ENVOYE", "IRREVOCABLE", "REJETE"],
      spi_rejection_reason: [
        "BE23",
        "DU03",
        "AC04",
        "AC06",
        "AEXR",
        "AG03",
        "AG10",
        "AG11",
        "ALAC",
        "AM02",
        "AM09",
        "AM14",
        "APAR",
        "RR07",
        "FR01",
        "AB03",
        "AB04",
        "AB08",
        "AB09",
        "AC03",
        "AG01",
        "AM04",
        "RR04",
        "CUST",
        "ARDT",
      ],
      spi_webhook_event_code: [
        "PAIEMENT_RECU",
        "PAIEMENT_ENVOYE",
        "PAIEMENT_REJETE",
        "RTP_RECU",
        "RTP_REJETE",
        "RETOUR_ENVOYE",
        "RETOUR_REJETE",
        "RETOUR_RECU",
        "ANNULATION_DEMANDE",
        "ANNULATION_REJETE",
      ],
      subscription_status: [
        "pending",
        "active",
        "paused",
        "cancelled",
        "expired",
        "past_due",
        "trial",
      ],
      support_category: ["account", "billing", "technical", "feature", "other"],
      support_priority: ["low", "normal", "high", "urgent"],
      support_status: ["open", "in_progress", "resolved", "closed"],
      team_status: ["active", "invited", "inactive"],
      ticket_status: ["open", "resolved", "closed"],
      transaction_status: [
        "pending",
        "completed",
        "failed",
        "refunded",
        "expired",
      ],
      transaction_type: ["payment", "instalment"],
      usage_frequency_enum: [
        "total",
        "per_customer",
        "per_day",
        "per_week",
        "per_month",
      ],
      webhook_event: [
        "payment.created",
        "payment.succeeded",
        "payment.failed",
        "payment.canceled",
        "refund.created",
        "refund.completed",
        "refund.failed",
        "subscription.created",
        "subscription.renewed",
        "subscription.canceled",
        "checkout.completed",
        "provider.status_changed",
      ],
    },
  },
} as const
