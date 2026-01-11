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
 * Options for mounting the custom Lomi Card Form
 */
export interface LomiCardFormOptions {
  containerId: string;
  style?: {
    base?: any;
    invalid?: any;
  };
  customStyles?: {
    height?: string;
    borderRadius?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    placeholderColor?: string;
    focusBorderColor?: string;
    errorBorderColor?: string;
    enableFocusRing?: boolean; // Opt-in: set to true to enable focus border effects
  };
}

/**
 * Options for updating the card form styles (containerId not needed when updating)
 */
export interface LomiCardFormUpdateOptions {
  style?: {
    base?: any;
    invalid?: any;
  };
  customStyles?: {
    height?: string;
    borderRadius?: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    placeholderColor?: string;
    focusBorderColor?: string;
    errorBorderColor?: string;
    enableFocusRing?: boolean;
  };
}

export interface LomiCardFormResult {
  cardNumber: any;
  cardExpiry: any;
  cardCvc: any;
  unmount: () => void;
  update: (options: LomiCardFormUpdateOptions) => void;
}

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
 * Mounts a pre-styled "Split Fields" card form (Number, Expiry, CVC) into a container.
 * This provides the efficient "Lomi Standard" UI without manual DOM construction.
 * 
 * @param elements - The LomiElements instance
 * @param options - Configuration for container and styling
 */
export function mountCardForm(elements: LomiElements, options: LomiCardFormOptions): LomiCardFormResult {
  const container = document.getElementById(options.containerId);
  if (!container) {
    throw new Error(`Lomi: Container element '#${options.containerId}' not found.`);
  }

  // Clear container
  container.innerHTML = '';

  // 1. Create Layout DOM (Glued Inputs)
  const wrapper = document.createElement('div');
  wrapper.className = 'lomi-card-form-wrapper';
  wrapper.style.maxWidth = '100%';
  
  // Default Styles with User Overrides
  const height = options.customStyles?.height || '40px';
  const borderRadius = options.customStyles?.borderRadius || '6px';
  const bgColor = options.customStyles?.backgroundColor || '#ffffff';
  const borderColor = options.customStyles?.borderColor || '#e5e7eb'; // Tailwind gray-200
  const textColor = options.customStyles?.textColor || '#1f2937';
  const placeholderColor = options.customStyles?.placeholderColor || '#9ca3af';

  // Calculate internal padding for perfect centering
  // Assuming line-height ~20px (standard for reading), remaining space split top/bottom
  // Ex: 40px height - 2px border = 38px. If line-height 20px, padding ~9px.
  // We'll trust flex/grid alignment for containers, but for Stripe Elements we control padding via options.
  
  const inputContainerStyle = `
    height: ${height};
    padding: 0 12px;
    background: ${bgColor};
    border: 1px solid ${borderColor};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    overflow: hidden;
  `;

  // Number Container
  const numberDiv = document.createElement('div');
  numberDiv.id = 'lomi-card-number-mount';
  numberDiv.style.cssText = `
    ${inputContainerStyle}
    border-top-left-radius: ${borderRadius};
    border-top-right-radius: ${borderRadius};
    border-bottom: none;
  `;

  // Row for Expiry & CVC
  const rowDiv = document.createElement('div');
  rowDiv.style.display = 'flex';

  // Expiry Container
  const expiryDiv = document.createElement('div');
  expiryDiv.id = 'lomi-card-expiry-mount';
  expiryDiv.style.cssText = `
    ${inputContainerStyle}
    border-bottom-left-radius: ${borderRadius};
    width: 50%;
    border-right: none;
  `;

  // CVC Container
  const cvcDiv = document.createElement('div');
  cvcDiv.id = 'lomi-card-cvc-mount';
  cvcDiv.style.cssText = `
    ${inputContainerStyle}
    border-bottom-right-radius: ${borderRadius};
    width: 50%;
    border-left: 1px solid ${borderColor};
  `;

  // Assemble
  wrapper.appendChild(numberDiv);
  rowDiv.appendChild(expiryDiv);
  rowDiv.appendChild(cvcDiv);
  wrapper.appendChild(rowDiv);
  container.appendChild(wrapper);

  // 2. Create and Mount Elements
  // Adjust base styles to match the custom configuration
  const defaultConfig = {
      base: {
          fontSize: '14px',
          color: textColor,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontWeight: '400',
          '::placeholder': { color: placeholderColor },
      },
      invalid: { color: '#ef4444' },
  };

  const elementStyle = options.style || defaultConfig;

  // Merge deeply if user provided styles but missed some defaults
  if (options.style && options.style.base) {
       elementStyle.base = { ...defaultConfig.base, ...options.style.base };
  }

  const cardNumber = elements.create('cardNumber', { style: elementStyle });
  const cardExpiry = elements.create('cardExpiry', { style: elementStyle });
  const cardCvc = elements.create('cardCvc', { style: elementStyle });

  cardNumber.mount(numberDiv);
  cardExpiry.mount(expiryDiv);
  cardCvc.mount(cvcDiv);

  return {
    cardNumber,
    cardExpiry,
    cardCvc,
    update: (newOptions: LomiCardFormUpdateOptions) => {
        // Recalculate Styles
        const nHeight = newOptions.customStyles?.height || '40px';
        const nBorderRadius = newOptions.customStyles?.borderRadius || '6px';
        const nBgColor = newOptions.customStyles?.backgroundColor || '#ffffff';
        const nBorderColor = newOptions.customStyles?.borderColor || '#e5e7eb';
        const nTextColor = newOptions.customStyles?.textColor || '#1f2937';
        const nPlaceholderColor = newOptions.customStyles?.placeholderColor || '#9ca3af';

        const nInputContainerStyle = `
            height: ${nHeight};
            padding: 0 12px;
            background: ${nBgColor};
            border: 1px solid ${nBorderColor};
            box-sizing: border-box;
            display: flex;
            align-items: center;
            overflow: hidden;
        `;

        // Update Container Styles
        numberDiv.style.cssText = `
            ${nInputContainerStyle}
            border-top-left-radius: ${nBorderRadius};
            border-top-right-radius: ${nBorderRadius};
            border-bottom: none;
        `;

        expiryDiv.style.cssText = `
            ${nInputContainerStyle}
            border-bottom-left-radius: ${nBorderRadius};
            width: 50%;
            border-right: none;
        `;

        cvcDiv.style.cssText = `
            ${nInputContainerStyle}
            border-bottom-right-radius: ${nBorderRadius};
            width: 50%;
            border-left: 1px solid ${nBorderColor};
        `;

        // Update Elements
        const nDefaultConfig = {
            base: {
                fontSize: '14px',
                color: nTextColor,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: '400',
                '::placeholder': { color: nPlaceholderColor },
            },
            invalid: { color: '#ef4444' },
        };

        const nElementStyle = newOptions.style || nDefaultConfig;
        if (newOptions.style && newOptions.style.base) {
            nElementStyle.base = { ...nDefaultConfig.base, ...newOptions.style.base };
        }

        cardNumber.update({ style: nElementStyle });
        cardExpiry.update({ style: nElementStyle });
        cardCvc.update({ style: nElementStyle });
    },
    unmount: () => {
      cardNumber.unmount();
      cardExpiry.unmount();
      cardCvc.unmount();
      container.innerHTML = '';
    }
  };
}

/**
 * Namespace export for alternative import style
 */
export const lomi = {
  load: loadLomi,
  mountCardForm,
};

// Default export
export default loadLomi;
