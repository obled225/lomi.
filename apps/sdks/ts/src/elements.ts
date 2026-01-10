/**
 * Lomi Payment Elements
 * 
 * Client-side payment form components for Lomi payments.
 * Fully white-labeled - no third-party branding exposed.
 * 
 * @example
 * ```ts
 * import { loadLomi } from '@lomi./sdk';
 * import type { Lomi, LomiElements } from '@lomi./sdk';
 * 
 * const lomi: Lomi = await loadLomi('lomi_pk_...');
 * const elements: LomiElements = lomi.elements({ clientSecret });
 * const paymentElement = elements.create('payment');
 * paymentElement.mount('#payment-element');
 * ```
 */

import { loadStripe } from '@stripe/stripe-js';
import type { 
  Stripe, 
  StripeElements, 
  StripeElementsOptions,
  PaymentIntentResult,
  SetupIntentResult,
  ConfirmPaymentData,
} from '@stripe/stripe-js';

// White-labeled type aliases - developers see "Lomi" not "Stripe"
export type Lomi = Stripe;
export type LomiElements = StripeElements;
export type LomiElementsOptions = StripeElementsOptions;
export type LomiPaymentResult = PaymentIntentResult;
export type LomiSetupResult = SetupIntentResult;
export type LomiConfirmPaymentData = ConfirmPaymentData;

/**
 * Lomi Platform Key
 * 
 * Internal platform key used for payment processing infrastructure.
 * This is an immutable value - SDK updates required if changed.
 */
const LOMI_PLATFORM_KEY = 'pk_live_51Ig94GGwgS0qnVOVpvSCeUiAf5RfjFFcv4alY8MpuB1M3X7gz3gMdcAoUA7OjG6e0Y2MAOtCsaYqkdqHT0zhTcC800gRyH9ssq';

// Singleton promise to avoid multiple loads
let lomiPromise: Promise<Lomi | null> | null = null;

/**
 * Load and initialize Lomi for payment processing.
 * 
 * @param publishableKey - Your Lomi publishable key (lomi_pk_...)
 * @returns Promise resolving to Lomi instance
 * 
 * @example
 * ```ts
 * import { loadLomi } from '@lomi./sdk';
 * import type { Lomi, LomiElements } from '@lomi./sdk';
 * 
 * const lomi: Lomi | null = await loadLomi('lomi_pk_your_key');
 * 
 * if (lomi) {
 *   // Create elements with client secret from your server
 *   const elements: LomiElements = lomi.elements({ 
 *     clientSecret: 'pi_xxx_secret_xxx' 
 *   });
 * 
 *   // Create and mount payment element
 *   const paymentElement = elements.create('payment');
 *   paymentElement.mount('#payment-element');
 * 
 *   // Handle form submission
 *   const { error } = await lomi.confirmPayment({
 *     elements,
 *     confirmParams: { return_url: 'https://yoursite.com/success' }
 *   });
 * }
 * ```
 */
export async function loadLomi(publishableKey: string): Promise<Lomi | null> {
  // Validate Lomi key format
  if (!publishableKey || !publishableKey.startsWith('lomi_pk_')) {
    console.warn('[Lomi] Invalid key format. Keys should start with "lomi_pk_"');
  }

  // Initialize only once (singleton pattern)
  if (!lomiPromise) {
    lomiPromise = loadStripe(LOMI_PLATFORM_KEY);
  }

  return lomiPromise;
}

/**
 * Namespace export for alternative import style
 */
export const lomi = {
  load: loadLomi,
};

// Default export
export default loadLomi;
