import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShoppingBag,
  MessageCircle,
  Tag,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';
import { formatINR } from '../utils/pricing';
import { openWhatsApp, generateCartWhatsAppMessage } from '../utils/whatsapp';

interface CartPageProps {
  navigateTo: (view: string, param?: any) => void;
}

export const CartPage: React.FC<CartPageProps> = ({ navigateTo }) => {
  const {
    cart,
    removeFromCart,
    updateCartQuantity,
    cartSubtotal,
    cartTotal,
    discount,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    shippingFee,
    clearCart,
    products,
    showToast,
    settings,
  } = useStore();

  const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    const ok = applyCoupon(couponCode.trim());
    if (ok) setCouponCode('');
  };

  const handleWhatsAppOrder = () => {
    const msg = generateCartWhatsAppMessage(cart, cartTotal, settings.businessName || 'ITALIA SHOES');
    openWhatsApp(msg, settings.whatsapp);
  };

  // Inventory validation: check if any cart item exceeds live stock
  const stockErrors: { [key: string]: string } = {};
  for (const item of cart) {
    const prod = products.find((p) => p.id === item.productId);
    if (!prod) continue;
    const currentSizeStock = prod.sizeStock[item.size] ?? 0;
    if (item.quantity > currentSizeStock) {
      stockErrors[
        `${item.productId}-${item.size}`
      ] = `Only ${currentSizeStock} available in size ${item.size}`;
    }
  }

  const hasStockErrors = Object.keys(stockErrors).length > 0;

  if (cart.length === 0) {
    return (
      <div id="cart-page-empty" className="min-h-[70vh] flex items-center justify-center bg-[#fafafa] px-4 py-16">
        <div className="max-w-md w-full text-center bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-6 text-neutral-400">
            <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
          </div>
          <h2 className="text-2xl font-black uppercase text-black tracking-tight">Your Cart is Empty</h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-2 mb-8 leading-relaxed">
            Looks like you haven't added any footwear to your bag yet. Explore our showroom
            collection to find your perfect fit!
          </p>
          <button
            type="button"
            onClick={() => navigateTo('shop')}
            className="w-full py-4 px-6 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <span>Start Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="cart-page-root" className="min-h-screen bg-[#fafafa] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-200">
          <div>
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
              Review Bag
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
              SHOPPING CART ({cart.length})
            </h1>
          </div>
          <button
            type="button"
            onClick={clearCart}
            className="text-xs text-neutral-400 hover:text-red-600 transition-colors"
          >
            Clear Bag
          </button>
        </div>

        {hasStockErrors && (
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-center gap-3 text-amber-800 text-xs font-semibold">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>
              Some items in your cart exceed available stock. Please adjust quantities before
              proceeding to checkout.
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            {cart.map((item) => {
              const itemKey = `${item.productId}-${item.size}`;
              const stockError = stockErrors[itemKey];

              return (
                <div
                  key={`${item.productId}-${item.color}-${item.size}`}
                  className="bg-white p-4 sm:p-5 rounded-2xl border border-neutral-200 shadow-sm flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
                >
                  {/* Image */}
                  <div className="w-24 h-24 bg-[#f8f8f8] rounded-xl flex items-center justify-center p-2 shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain filter drop-shadow"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-center sm:text-left space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      {item.brand}
                    </span>
                    <h3 className="text-sm font-black text-black uppercase">{item.name}</h3>
                    <div className="flex items-center justify-center sm:justify-start gap-3 text-xs text-neutral-600 pt-0.5">
                      <span>
                        Size: <strong className="text-black">{item.size}</strong> (IND/UK)
                      </span>
                      <span>•</span>
                      <span>
                        Color: <strong className="text-black">{item.color}</strong>
                      </span>
                    </div>

                    {stockError && (
                      <p className="text-xs text-red-600 font-bold pt-1">{stockError}</p>
                    )}
                  </div>

                  {/* Quantity and Price */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-0 border-neutral-100">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-neutral-200 rounded-xl bg-white">
                      <button
                        type="button"
                        onClick={() =>
                          updateCartQuantity(
                            item.productId,
                            item.color,
                            item.size,
                            item.quantity - 1
                          )
                        }
                        className="p-1.5 text-neutral-500 hover:text-black"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2 text-xs font-bold text-black">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() =>
                          updateCartQuantity(
                            item.productId,
                            item.color,
                            item.size,
                            item.quantity + 1
                          )
                        }
                        disabled={item.quantity >= item.maxStock}
                        className="p-1.5 text-neutral-500 hover:text-black disabled:opacity-30"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right min-w-[80px]">
                      <span className="text-sm font-black text-black block">
                        {formatINR(item.price * item.quantity)}
                      </span>
                      {item.quantity > 1 && (
                        <span className="text-[10px] text-neutral-400 block">
                          {formatINR(item.price)} each
                        </span>
                      )}
                    </div>

                    {/* Delete button */}
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.productId, item.color, item.size)}
                      className="p-2 text-neutral-400 hover:text-red-600 hover:bg-neutral-50 rounded-lg transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm space-y-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-black pb-3 border-b border-neutral-100">
              Order Summary
            </h3>

            {/* Coupon input */}
            <div>
              {appliedCoupon ? (
                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold uppercase">{appliedCoupon.code}</span>
                  </div>
                  <button
                    type="button"
                    onClick={removeCoupon}
                    className="text-xs text-red-600 font-bold hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs uppercase font-semibold focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white text-xs font-bold uppercase rounded-xl hover:bg-neutral-800"
                  >
                    Apply
                  </button>
                </form>
              )}
            </div>

            {/* Price breakdown */}
            <div className="space-y-2.5 text-xs text-neutral-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-black">{formatINR(cartSubtotal)}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Coupon Discount</span>
                  <span>- {formatINR(discount)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="font-bold text-black">
                  {shippingFee === 0 ? (
                    <span className="text-emerald-600 uppercase">FREE</span>
                  ) : (
                    formatINR(shippingFee)
                  )}
                </span>
              </div>

              {cartSubtotal < 999 && (
                <p className="text-[11px] text-neutral-400 italic">
                  Add {formatINR(999 - cartSubtotal)} more for free delivery!
                </p>
              )}

              <div className="pt-3 border-t border-neutral-100 flex justify-between text-base font-black text-black">
                <span>Total Amount</span>
                <span>{formatINR(cartTotal)}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={() => navigateTo('checkout')}
                disabled={hasStockErrors}
                className="w-full py-4 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-all shadow-xl disabled:opacity-40 flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {settings.whatsapp && (
                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3 bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Reserve on WhatsApp</span>
                </button>
              )}
            </div>

            <div className="pt-2 text-center">
              <span className="text-[10px] text-neutral-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Showroom Quality Guarantee • Safe & Verified Checkout</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
