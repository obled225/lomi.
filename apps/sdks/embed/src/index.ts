/**
 * Lomi Embedded Checkout SDK
 * 
 * This SDK allows merchants to embed the Lomi checkout experience
 * directly in their website via an iframe modal.
 */

interface LomiEmbedOptions {
  publicKey: string;      // lomi_pk_... (your Lomi publishable key)
  sessionId: string;      // Checkout Session ID from create_checkout_session
  elementId?: string;     // Optional: DOM ID to mount iframe into (for inline mode)
  mode?: 'modal' | 'inline'; // Default: 'modal'
  // Custom dimensions (optional - defaults provided)
  width?: string;         // e.g., '600px' or '100%'
  height?: string;        // For inline mode, e.g., '700px'
  maxWidth?: string;      // For modal mode, e.g., '500px' (default)
  modalHeight?: string;   // For modal mode, e.g., '85vh' (default)
}

interface LomiEmbedResult {
  unmount: () => void;
}

// Default dimensions for the modal
const DEFAULT_MAX_WIDTH = '500px';
const DEFAULT_MODAL_HEIGHT = '85vh';
const DEFAULT_MODAL_HEIGHT_DESKTOP = '90vh';

const getModalStyles = (options: LomiEmbedOptions) => ({
  overlay: `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    box-sizing: border-box;
  `,
  container: `
    width: ${options.width || '100%'};
    max-width: ${options.maxWidth || DEFAULT_MAX_WIDTH};
    height: ${options.modalHeight || (window.innerWidth >= 640 ? DEFAULT_MODAL_HEIGHT_DESKTOP : DEFAULT_MODAL_HEIGHT)};
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  `,
  iframe: `
    width: 100%;
    height: 100%;
    border: none;
  `
});

/**
 * Load Lomi Checkout in either modal or inline mode.
 * 
 * @example Modal mode (default):
 * ```js
 * const checkout = loadLomiCheckout({
 *   publicKey: 'lomi_pk_...',
 *   sessionId: 'cs_...',
 * });
 * // Later: checkout.unmount();
 * ```
 * 
 * @example Inline mode:
 * ```js
 * loadLomiCheckout({
 *   publicKey: 'lomi_pk_...',
 *   sessionId: 'cs_...',
 *   mode: 'inline',
 *   elementId: 'my-checkout-container',
 * });
 * ```
 */
export const loadLomiCheckout = (options: LomiEmbedOptions): LomiEmbedResult | undefined => {
  const mode = options.mode || 'modal';
  
  // Base URL for Lomi Checkout
  const baseUrl = typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? window.location.origin
    : 'https://lomi.africa';
    
  const checkoutUrl = `${baseUrl}/checkout/${options.sessionId}?embedded=true`;

  // Create iframe
  const iframe = document.createElement('iframe');
  iframe.src = checkoutUrl;
  iframe.style.cssText = 'width: 100%; height: 100%; border: none;';
  iframe.setAttribute('loading', 'lazy');
  iframe.allow = 'payment';

  if (mode === 'inline') {
    // Inline mode: mount into specified element
    const container = document.getElementById(options.elementId || '');
    if (!container) {
      console.error(`Lomi: Element with ID "${options.elementId}" not found.`);
      return undefined;
    }
    container.innerHTML = '';
    container.appendChild(iframe);
    
    return {
      unmount: () => {
        container.innerHTML = '';
      }
    };
  }

  // Modal mode: create overlay and container
  const overlayId = 'lomi-checkout-overlay';
  let overlay = document.getElementById(overlayId);
  
  if (overlay) {
    overlay.remove(); // Remove existing modal
  }

  const styles = getModalStyles(options);

  overlay = document.createElement('div');
  overlay.id = overlayId;
  overlay.style.cssText = styles.overlay;

  const container = document.createElement('div');
  container.style.cssText = styles.container;

  container.appendChild(iframe);
  overlay.appendChild(container);
  document.body.appendChild(overlay);

  // Close on clicking overlay background
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay?.remove();
    }
  });

  // Listen for resize messages from the checkout page
  const messageHandler = (event: MessageEvent) => {
    if (event.data?.type === 'LOMI_RESIZE' && event.data?.height) {
      // Could adjust container height if needed
      console.log('Lomi resize:', event.data.height);
    }
    
    // Handle checkout completion
    if (event.data?.type === 'LOMI_CHECKOUT_COMPLETE') {
      console.log('Checkout complete:', event.data);
    }
  };

  window.addEventListener('message', messageHandler);

  return {
    unmount: () => {
      overlay?.remove();
      window.removeEventListener('message', messageHandler);
    }
  };
};

// Export for CommonJS compatibility
export default { loadLomiCheckout };
