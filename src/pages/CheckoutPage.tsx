import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { OrderAddress, OrderItem } from '../types';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Truck,
  CreditCard,
  Banknote,
  Phone,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { formatINR } from '../utils/pricing';

interface CheckoutPageProps {
  navigateTo: (view: string, param?: any) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ navigateTo }) => {
  const {
    cart,
    cartSubtotal,
    cartTotal,
    discount,
    shippingFee,
    createOrder,
    currentUser,
    showToast,
  } = useStore();

  const [formData, setFormData] = useState({
    name: currentUser?.name || '',
    phone: currentUser?.phone || '',
    email: currentUser?.email || '',
    street: '',
    area: '',
    city: '',
    state: 'Tamil Nadu',
    pincode: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'online'>('cod');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
          <button
            type="button"
            onClick={() => navigateTo('shop')}
            className="px-6 py-2 bg-black text-white rounded-xl text-xs font-bold uppercase"
          >
            Go Shopping
          </button>
        </div>
      </div>
    );
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.street || !formData.city || !formData.pincode) {
      showToast('Please fill in all required shipping address fields.', 'error');
      return;
    }

    if (formData.phone.length < 10) {
      showToast('Please enter a valid 10-digit mobile number.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const shippingAddress: OrderAddress = {
        fullName: formData.name,
        phone: formData.phone,
        email: formData.email,
        street: formData.street,
        area: formData.area || undefined,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        country: 'India',
      };

      const orderItems: OrderItem[] = cart.map((c) => ({
        productId: c.productId,
        name: c.name,
        brand: c.brand,
        image: c.image,
        color: c.color,
        size: c.size,
        price: c.price,
        quantity: c.quantity,
        subtotal: c.price * c.quantity,
      }));

      const newOrder = await createOrder({
        customerName: formData.name,
        customerPhone: formData.phone,
        customerEmail: formData.email || undefined,
        shippingAddress,
        items: orderItems,
        subtotal: cartSubtotal,
        discount,
        shippingFee,
        total: cartTotal,
        paymentMethod,
        paymentStatus: paymentMethod === 'online' ? 'completed' : 'pending',
      });

      showToast('Your footwear order has been successfully placed!', 'success');
      navigateTo('order-success', newOrder);
    } catch (err: any) {
      showToast('Failed to create order. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="checkout-page-root" className="min-h-screen bg-[#fafafa] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 pb-4 border-b border-neutral-200">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
            Secure Footwear Checkout
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
            SHIPPING & PAYMENT
          </h1>
        </div>

        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Shipping & Details */}
          <div className="lg:col-span-8 space-y-6">
            {/* Step 1: Customer Info */}
            <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-neutral-100">
                <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-black flex items-center justify-center">
                  1
                </span>
                <h3 className="text-sm font-black uppercase text-black">Customer Contact Info</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Mohammed Farooq"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                    Mobile Number * (For Delivery & WhatsApp updates)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. name@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Shipping Address */}
            <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-neutral-100">
                <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-black flex items-center justify-center">
                  2
                </span>
                <h3 className="text-sm font-black uppercase text-black">Delivery Address</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                    Street Address / Flat / Door No. *
                  </label>
                  <input
                    type="text"
                    name="street"
                    required
                    placeholder="e.g. 42, Main Bazaar Street"
                    value={formData.street}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                      Area / Landmark
                    </label>
                    <input
                      type="text"
                      name="area"
                      placeholder="Near Bus Stand"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-black focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                      City / Town *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Tirupattur"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-black focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                      State *
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-black focus:outline-none"
                    >
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Other">Other States</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                      Postal Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      required
                      placeholder="e.g. 635601"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-black focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Payment Method */}
            <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-neutral-100">
                <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-black flex items-center justify-center">
                  3
                </span>
                <h3 className="text-sm font-black uppercase text-black">Payment Selection</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-4 rounded-2xl border-2 cursor-pointer flex items-center gap-3 transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-black bg-neutral-50 shadow-sm'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <Banknote className="w-5 h-5 text-black" />
                  <div>
                    <p className="text-xs font-black text-black uppercase">Cash on Delivery (COD)</p>
                    <p className="text-[11px] text-neutral-500">Pay when your shoes arrive</p>
                  </div>
                </label>

                <label
                  onClick={() => setPaymentMethod('online')}
                  className={`p-4 rounded-2xl border-2 cursor-pointer flex items-center gap-3 transition-all ${
                    paymentMethod === 'online'
                      ? 'border-black bg-neutral-50 shadow-sm'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-black" />
                  <div>
                    <p className="text-xs font-black text-black uppercase">Instant UPI / Cards</p>
                    <p className="text-[11px] text-neutral-500">Fast online checkout</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm space-y-4">
              <h3 className="text-sm font-black uppercase tracking-wider text-black pb-3 border-b border-neutral-100">
                Items ({cart.length})
              </h3>

              <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={`${item.productId}-${item.color}-${item.size}`}
                    className="flex items-center gap-3 text-xs"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg bg-neutral-100 object-contain p-1"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-black truncate">{item.name}</p>
                      <p className="text-neutral-500 text-[11px]">
                        Size {item.size} • {item.color} • Qty {item.quantity}
                      </p>
                    </div>
                    <span className="font-black text-black">
                      {formatINR(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-100 space-y-2 text-xs text-neutral-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-black">{formatINR(cartSubtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>Discount</span>
                    <span>- {formatINR(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span className="font-bold text-black">
                    {shippingFee === 0 ? 'FREE' : formatINR(shippingFee)}
                  </span>
                </div>
                <div className="pt-2 border-t border-neutral-100 flex justify-between text-base font-black text-black">
                  <span>Total Payable</span>
                  <span>{formatINR(cartTotal)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
              >
                <Lock className="w-4 h-4" />
                <span>{isSubmitting ? 'Placing Order...' : 'Place Footwear Order'}</span>
              </button>

              <p className="text-[10px] text-center text-neutral-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Encrypted & Verified Showroom Fulfillment</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
