import React from 'react';
import { Order } from '../types';
import { useStore } from '../context/StoreContext';
import {
  CheckCircle2,
  Package,
  Truck,
  MapPin,
  ArrowRight,
  MessageCircle,
  Phone,
  Clock,
} from 'lucide-react';
import { formatINR } from '../utils/pricing';
import { openWhatsApp } from '../utils/whatsapp';

interface OrderSuccessPageProps {
  order: Order;
  navigateTo: (view: string, param?: any) => void;
}

export const OrderSuccessPage: React.FC<OrderSuccessPageProps> = ({ order, navigateTo }) => {
  const { settings } = useStore();

  const handleWhatsAppUpdate = () => {
    openWhatsApp(
      `Hello ${settings.businessName || 'ITALIA SHOES'}! I placed order #${order.orderNumber} for ₹${order.total}. Could you confirm my order status?`,
      settings.whatsapp
    );
  };

  const steps = [
    { label: 'Order Placed', status: 'completed' },
    { label: 'Confirmed', status: order.status === 'pending' ? 'current' : 'completed' },
    {
      label: 'Packed',
      status: ['packed', 'shipped', 'out_for_delivery', 'delivered'].includes(order.status)
        ? 'completed'
        : 'upcoming',
    },
    {
      label: 'Shipped',
      status: ['shipped', 'out_for_delivery', 'delivered'].includes(order.status)
        ? 'completed'
        : 'upcoming',
    },
    {
      label: 'Delivered',
      status: order.status === 'delivered' ? 'completed' : 'upcoming',
    },
  ];

  return (
    <div id="order-success-page" className="min-h-screen bg-[#fafafa] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Celebration Header */}
        <div className="bg-white rounded-3xl p-8 border border-neutral-200 text-center shadow-sm space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
              Fulfillment Initiated
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mt-1">
              Thank You for Your Order!
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              We've received your order and our showroom team is preparing your footwear.
            </p>
          </div>

          <div className="inline-block px-4 py-2 bg-neutral-100 rounded-xl text-xs font-mono font-bold text-black border border-neutral-200">
            Order Reference: <span className="text-red-600 font-black">{order.orderNumber}</span>
          </div>
        </div>

        {/* Tracking Timeline */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
          <h3 className="text-xs font-black uppercase tracking-widest text-black mb-6">
            Live Order Progress
          </h3>

          <div className="relative flex justify-between items-center w-full">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-neutral-100 -translate-y-1/2 z-0" />

            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step.status === 'completed'
                      ? 'bg-black text-white shadow'
                      : step.status === 'current'
                      ? 'bg-amber-500 text-white animate-pulse'
                      : 'bg-neutral-200 text-neutral-400'
                  }`}
                >
                  {idx + 1}
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-neutral-700 mt-2 text-center whitespace-nowrap">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Order Details & Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Address Box */}
          <div className="bg-white rounded-3xl p-6 border border-neutral-200 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-black flex items-center gap-2">
              <MapPin className="w-4 h-4 text-neutral-500" />
              <span>Shipping Destination</span>
            </h4>
            <div className="text-xs text-neutral-600 space-y-1">
              <p className="font-bold text-black">{order.shippingAddress.fullName}</p>
              <p>{order.shippingAddress.street}</p>
              {order.shippingAddress.area && <p>{order.shippingAddress.area}</p>}
              <p>
                {order.shippingAddress.city}, {order.shippingAddress.state} -{' '}
                {order.shippingAddress.pincode}
              </p>
              <p className="text-black font-semibold pt-1">Phone: {order.customerPhone}</p>
            </div>
          </div>

          {/* Payment & Summary Box */}
          <div className="bg-white rounded-3xl p-6 border border-neutral-200 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-black flex items-center gap-2">
              <Package className="w-4 h-4 text-neutral-500" />
              <span>Payment Details</span>
            </h4>
            <div className="text-xs text-neutral-600 space-y-1.5">
              <div className="flex justify-between">
                <span>Method</span>
                <span className="font-bold text-black uppercase">{order.paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Status</span>
                <span className="font-bold text-emerald-600 uppercase">
                  {order.paymentStatus}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Items Ordered</span>
                <span className="font-bold text-black">{order.items.length} pair(s)</span>
              </div>
              <div className="pt-2 border-t border-neutral-100 flex justify-between font-black text-sm text-black">
                <span>Total Amount</span>
                <span>{formatINR(order.total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            type="button"
            onClick={handleWhatsAppUpdate}
            className="w-full sm:w-1/2 py-4 bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Notify Store on WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={() => navigateTo('shop')}
            className="w-full sm:w-1/2 py-4 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
