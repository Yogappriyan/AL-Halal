export const STORE_PHONE_1 = '04314020105';
export const STORE_PHONE_2 = '+914314020105';

export function openWhatsApp(message: string, phone: string = STORE_PHONE_1): void {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  if (!cleanPhone) {
    // If no phone is configured, alert or fallback
    return;
  }
  const encodedMsg = encodeURIComponent(message);
  const url = `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function generateProductWhatsAppMessage(params: {
  name: string;
  price: number;
  salePrice?: number;
  color?: string;
  size?: string;
  sku?: string;
  storeName?: string;
}): string {
  const activePrice = params.salePrice || params.price;
  const store = params.storeName || 'ITALIA SHOES';
  return `Hello ${store}, I am interested in:

Product: ${params.name}
Color: ${params.color || 'Default'}
Size: ${params.size || 'Not selected'}
Price: ₹${activePrice.toLocaleString('en-IN')}${params.sku ? `\nSKU: ${params.sku}` : ''}

Please confirm availability and in-store shopping / delivery options.`;
}

export function generateCartWhatsAppMessage(
  cart: Array<{ name: string; brand: string; color: string; size: string; quantity: number; price: number }>,
  total: number,
  storeName?: string
): string {
  const store = storeName || 'ITALIA SHOES';
  const itemsText = cart
    .map(
      (it, idx) =>
        `${idx + 1}. ${it.name} (${it.brand}) - Color: ${it.color}, Size: ${it.size} x ${it.quantity} = ₹${(
          it.price * it.quantity
        ).toLocaleString('en-IN')}`
    )
    .join('\n');

  return `Hello ${store}! I would like to reserve/order the following footwear:

${itemsText}

Estimated Total: ₹${total.toLocaleString('en-IN')}

Please let me know how to proceed with in-store pickup or delivery. Thank you!`;
}
