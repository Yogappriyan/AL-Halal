export const STORE_PHONE_1 = '+919655187000';
export const STORE_PHONE_2 = '+919787536452';

export function openWhatsApp(message: string, phone: string = STORE_PHONE_1): void {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
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
}): string {
  const activePrice = params.salePrice || params.price;
  return `Hello AL-HALAL A FOOT STATION, I am interested in:

Product: ${params.name}
Color: ${params.color || 'Default'}
Size: ${params.size || 'Not selected'}
Price: ₹${activePrice.toLocaleString('en-IN')}${params.sku ? `\nSKU: ${params.sku}` : ''}

Please confirm availability and store pickup/delivery options.`;
}

export function generateCartWhatsAppMessage(
  cart: Array<{ name: string; brand: string; color: string; size: string; quantity: number; price: number }>,
  total: number
): string {
  const itemsText = cart
    .map(
      (it, idx) =>
        `${idx + 1}. ${it.name} (${it.brand}) - Color: ${it.color}, Size: ${it.size} x ${it.quantity} = ₹${(
          it.price * it.quantity
        ).toLocaleString('en-IN')}`
    )
    .join('\n');

  return `Hello AL-HALAL A FOOT STATION! I would like to reserve/order the following footwear from your showroom:

${itemsText}

Estimated Total: ₹${total.toLocaleString('en-IN')}

Please let me know how to proceed with showroom pickup or delivery. Thank you!`;
}
