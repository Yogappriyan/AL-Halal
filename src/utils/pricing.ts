export function formatINR(amount: number): string {
  return `₹${Math.round(amount).toLocaleString('en-IN')}`;
}

export function calculateDiscount(price: number, salePrice?: number): number {
  if (!salePrice || salePrice >= price || price <= 0) return 0;
  return Math.round(((price - salePrice) / price) * 100);
}

export function getStockStatusLabel(stock: number): {
  label: string;
  isAvailable: boolean;
  isLow: boolean;
} {
  if (stock <= 0) {
    return { label: 'Out of Stock', isAvailable: false, isLow: false };
  }
  if (stock <= 3) {
    return { label: `Only ${stock} left!`, isAvailable: true, isLow: true };
  }
  return { label: 'In Stock', isAvailable: true, isLow: false };
}
