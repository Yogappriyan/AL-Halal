import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Package, Search, Clock, CheckCircle2, Truck, ArrowRight, MessageCircle } from 'lucide-react';
import { formatINR } from '../utils/pricing';
import { openWhatsApp } from '../utils/whatsapp';

interface MyOrdersPageProps {
  navigateTo: (view: string, param?: any) => void;
}

export const MyOrdersPage: React.FC<MyOrdersPageProps> = ({ navigateTo }) => {
  const { orders, settings } = useStore();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOrders = orders.filter((ord) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      ord.orderNumber.toLowerCase().includes(q) ||
      ord.customerPhone.includes(q) ||
      ord.customerName.toLowerCase().includes(q)
    );
  });

  return (
    <div id="my-orders-page-root" className="min-h-screen bg-[#fafafa] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-neutral-200 gap-4">
          <div>
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
              Account Orders
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
              MY ORDERS & TRACKING
            </h1>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search by Order # or Mobile..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 bg-white border border-neutral-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-black w-full sm:w-64"
            />
          </div>
        </div>

        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-neutral-200">
            <Package className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
            <h3 className="text-base font-black uppercase text-black">No Orders Found</h3>
            <p className="text-xs text-neutral-500 mt-1 mb-6">
              You have not placed any footwear orders with this account yet.
            </p>
            <button
              type="button"
              onClick={() => navigateTo('shop')}
              className="px-6 py-2.5 bg-black text-white text-xs font-bold uppercase rounded-xl hover:bg-neutral-800"
            >
              Shop Footwear
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredOrders.map((order) => {
              const statusColors: { [key: string]: string } = {
                pending: 'bg-amber-100 text-amber-800',
                confirmed: 'bg-blue-100 text-blue-800',
                packed: 'bg-purple-100 text-purple-800',
                shipped: 'bg-indigo-100 text-indigo-800',
                out_for_delivery: 'bg-orange-100 text-orange-800',
                delivered: 'bg-emerald-100 text-emerald-800',
                cancelled: 'bg-red-100 text-red-800',
              };

              return (
                <div
                  key={order.id}
                  className="bg-white rounded-3xl border border-neutral-200 p-6 shadow-sm space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between pb-3 border-b border-neutral-100 gap-2">
                    <div>
                      <span className="text-xs font-mono font-bold text-neutral-500">
                        Order #{order.orderNumber}
                      </span>
                      <p className="text-xs text-neutral-400">
                        {new Date(order.createdAt).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                          statusColors[order.status] || 'bg-neutral-100 text-neutral-700'
                        }`}
                      >
                        {order.status.replace(/_/g, ' ')}
                      </span>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="divide-y divide-neutral-100">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="py-3 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-contain bg-[#f8f8f8] rounded-xl p-1"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <p className="font-bold text-black uppercase">{item.name}</p>
                            <p className="text-[11px] text-neutral-500">
                              Size {item.size} • {item.color} • Qty {item.quantity}
                            </p>
                          </div>
                        </div>
                        <span className="font-black text-black">{formatINR(item.subtotal)}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="text-neutral-500">Total: </span>
                      <strong className="text-black font-black text-sm">{formatINR(order.total)}</strong>
                      <span className="text-neutral-400 text-[11px] ml-2">({order.paymentMethod.toUpperCase()})</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          openWhatsApp(
                            `Hello ${settings.businessName || 'ITALIA SHOES'}, can you please update me on Order #${order.orderNumber}?`,
                            settings.whatsapp
                          )
                        }
                        className="px-3.5 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl font-bold text-[11px] flex items-center gap-1.5 hover:bg-emerald-100 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Track via WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => navigateTo('order-success', order)}
                        className="px-3.5 py-1.5 bg-black text-white rounded-xl font-bold text-[11px] hover:bg-neutral-800 transition-colors"
                      >
                        View Timeline
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
