import React, { useState, useMemo } from 'react';
import { useStore } from '../../context/StoreContext';
import { Product, Order, OrderStatus } from '../../types';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Settings,
  Plus,
  Edit2,
  Trash2,
  Search,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Clock,
  Check,
  X,
  Phone,
  MessageCircle,
  Eye,
  Sliders,
  DollarSign,
  Sparkles,
  ArrowRight,
  Upload,
  Image as ImageIcon,
  Link2,
} from 'lucide-react';
import { formatINR } from '../../utils/pricing';
import { openWhatsApp } from '../../utils/whatsapp';

export const AdminDashboard: React.FC = () => {
  const {
    products,
    orders,
    categories,
    settings,
    updateProduct,
    addProduct,
    deleteProduct,
    updateOrderStatus,
    updateSettings,
    showToast,
  } = useStore();

  const [activeTab, setActiveTab] = useState<'analytics' | 'inventory' | 'orders' | 'settings'>('analytics');
  const [searchProductQuery, setSearchProductQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isCreatingProduct, setIsCreatingProduct] = useState(false);
  const [viewingOrder, setViewingOrder] = useState<Order | null>(null);

  // Analytics Computations
  const totalProducts = products.length;
  const activeProducts = products.filter((p) => p.status === 'active').length;
  const outOfStockProducts = products.filter((p) => p.stock <= 0 || p.status === 'out_of_stock');
  const lowStockItems = useMemo(() => {
    return products.filter((p) => {
      const hasLowSize = (Object.values(p.sizeStock) as number[]).some(
        (qty: number) => qty > 0 && qty <= 3
      );
      return hasLowSize || (p.stock > 0 && p.stock <= 5);
    });
  }, [products]);

  const totalOrders = orders.length;
  const pendingOrders = orders.filter((o) => o.status === 'pending').length;
  const deliveredOrders = orders.filter((o) => o.status === 'delivered').length;
  const totalRevenue = orders
    .filter((o) => o.status !== 'cancelled')
    .reduce((acc, curr) => acc + curr.total, 0);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategoryFilter !== 'All' && p.category !== selectedCategoryFilter) return false;
      if (!searchProductQuery.trim()) return true;
      const q = searchProductQuery.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q)
      );
    });
  }, [products, selectedCategoryFilter, searchProductQuery]);

  // Inventory Quick Adjust Stock
  const handleQuickStockDelta = (product: Product, size: string, delta: number) => {
    const current = product.sizeStock[size] ?? 0;
    const nextQty = Math.max(0, current + delta);
    const updatedSizeStock = { ...product.sizeStock, [size]: nextQty };
    const newTotalStock = Object.values(updatedSizeStock).reduce((a, b) => a + b, 0);
    const newStatus = newTotalStock <= 0 ? 'out_of_stock' : 'active';

    updateProduct(product.id, {
      sizeStock: updatedSizeStock,
      stock: newTotalStock,
      status: newStatus,
    });
    showToast(`Updated Size ${size} stock to ${nextQty}`, 'info');
  };

  // Status Colors
  const getStatusBadge = (status: string) => {
    const map: Record<string, string> = {
      pending: 'bg-amber-100 text-amber-800 border-amber-200',
      Pending: 'bg-amber-100 text-amber-800 border-amber-200',
      confirmed: 'bg-blue-100 text-blue-800 border-blue-200',
      Confirmed: 'bg-blue-100 text-blue-800 border-blue-200',
      packed: 'bg-purple-100 text-purple-800 border-purple-200',
      Packed: 'bg-purple-100 text-purple-800 border-purple-200',
      shipped: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      Shipped: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      out_for_delivery: 'bg-orange-100 text-orange-800 border-orange-200',
      'Out for Delivery': 'bg-orange-100 text-orange-800 border-orange-200',
      delivered: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      Delivered: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      cancelled: 'bg-red-100 text-red-800 border-red-200',
      Cancelled: 'bg-red-100 text-red-800 border-red-200',
    };
    return map[status] || 'bg-neutral-100 text-neutral-800';
  };

  return (
    <div id="admin-panel-root" className="min-h-screen bg-[#f4f5f7] py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Top Header */}
        <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-widest text-emerald-700">
                Live Showroom Sync
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mt-0.5">
              AL-HALAL Management Portal
            </h1>
            <p className="text-xs text-neutral-500">
              Control physical showroom inventory, order tracking, and live catalog availability.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 bg-[#f4f5f7] p-1.5 rounded-2xl border border-neutral-200 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('analytics')}
              className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all shrink-0 ${
                activeTab === 'analytics'
                  ? 'bg-black text-white shadow'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Real-time Analytics</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('inventory')}
              className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all shrink-0 ${
                activeTab === 'inventory'
                  ? 'bg-black text-white shadow'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              <Package className="w-3.5 h-3.5" />
              <span>Inventory & Sizes</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('orders')}
              className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all shrink-0 ${
                activeTab === 'orders'
                  ? 'bg-black text-white shadow'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Orders ({orders.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('settings')}
              className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all shrink-0 ${
                activeTab === 'settings'
                  ? 'bg-black text-white shadow'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Store Details</span>
            </button>
          </div>
        </div>

        {/* TAB 1: REAL-TIME ANALYTICS */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            {/* Top Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white p-5 rounded-3xl border border-neutral-200 shadow-sm space-y-1">
                <div className="flex items-center justify-between text-neutral-400">
                  <span className="text-[11px] font-bold uppercase tracking-wider">Total Sales</span>
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                  {formatINR(totalRevenue)}
                </p>
                <p className="text-[10px] text-emerald-600 font-semibold">From fulfilled & live orders</p>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-neutral-200 shadow-sm space-y-1">
                <div className="flex items-center justify-between text-neutral-400">
                  <span className="text-[11px] font-bold uppercase tracking-wider">Total Orders</span>
                  <ShoppingBag className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                  {totalOrders}
                </p>
                <p className="text-[10px] text-neutral-500 font-medium">{pendingOrders} awaiting fulfillment</p>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-neutral-200 shadow-sm space-y-1">
                <div className="flex items-center justify-between text-neutral-400">
                  <span className="text-[11px] font-bold uppercase tracking-wider">Active Inventory</span>
                  <Package className="w-4 h-4 text-black" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                  {activeProducts}
                </p>
                <p className="text-[10px] text-neutral-500 font-medium">Out of {totalProducts} catalog pairs</p>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-neutral-200 shadow-sm space-y-1">
                <div className="flex items-center justify-between text-neutral-400">
                  <span className="text-[11px] font-bold uppercase tracking-wider">Stock Alerts</span>
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-amber-600 tracking-tight">
                  {lowStockItems.length}
                </p>
                <p className="text-[10px] text-amber-700 font-medium">Low or depleting size stock</p>
              </div>
            </div>

            {/* Low Stock Alert Table */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <h3 className="text-xs font-black uppercase tracking-wider text-black">
                    Immediate Restock Priorities (Low Stock by Size)
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('inventory')}
                  className="text-xs font-bold text-neutral-500 hover:text-black flex items-center gap-1"
                >
                  <span>Manage All Inventory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {lowStockItems.length === 0 ? (
                <p className="text-xs text-neutral-500 py-4 text-center">
                  All footwear models have healthy showroom stock levels.
                </p>
              ) : (
                <div className="divide-y divide-neutral-100">
                  {lowStockItems.slice(0, 5).map((item) => (
                    <div key={item.id} className="py-3 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.thumbnail}
                          alt={item.name}
                          className="w-10 h-10 object-contain bg-neutral-100 rounded-lg p-1"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="font-bold text-black uppercase">{item.name}</p>
                          <p className="text-[11px] text-neutral-400">{item.brand} • SKU: {item.sku}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          {(Object.entries(item.sizeStock) as [string, number][]).map(([size, qty]) => (
                            <span
                              key={size}
                              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                qty <= 0
                                  ? 'bg-red-100 text-red-800'
                                  : qty <= 3
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-neutral-100 text-neutral-600'
                              }`}
                            >
                              Size {size}: {qty}
                            </span>
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={() => setEditingProduct(item)}
                          className="px-3 py-1 bg-black text-white text-[11px] font-bold rounded-lg hover:bg-neutral-800"
                        >
                          Restock
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: INVENTORY & SIZES MANAGEMENT */}
        {activeTab === 'inventory' && (
          <div className="space-y-6">
            {/* Action Bar */}
            <div className="bg-white p-4 sm:p-5 rounded-3xl border border-neutral-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Search footwear or SKU..."
                    value={searchProductQuery}
                    onChange={(e) => setSearchProductQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <select
                  value={selectedCategoryFilter}
                  onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                  className="px-3 py-2 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="All">All Categories</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                onClick={() => setIsCreatingProduct(true)}
                className="w-full sm:w-auto px-5 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 shadow"
              >
                <Plus className="w-4 h-4" />
                <span>Add Footwear Pair</span>
              </button>
            </div>

            {/* Inventory List with Size Matrix Adjustment */}
            <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-neutral-50 text-neutral-500 uppercase font-black tracking-wider border-b border-neutral-200">
                      <th className="py-3.5 px-4">Footwear Details</th>
                      <th className="py-3.5 px-4">Price</th>
                      <th className="py-3.5 px-4">Size-Wise Stock Adjustment</th>
                      <th className="py-3.5 px-4">Total Stock</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {filteredProducts.map((p) => (
                      <tr key={p.id} className="hover:bg-neutral-50/70 transition-colors">
                        {/* Details */}
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={p.thumbnail}
                              alt={p.name}
                              className="w-12 h-12 object-contain bg-[#f8f8f8] rounded-xl p-1 shrink-0"
                              referrerPolicy="no-referrer"
                            />
                            <div>
                              <p className="font-bold text-black uppercase">{p.name}</p>
                              <p className="text-[11px] text-neutral-400">
                                {p.brand} • {p.category} • SKU: {p.sku}
                              </p>
                              <div className="flex items-center gap-1 mt-0.5">
                                {p.featured && (
                                  <span className="text-[9px] bg-black text-white px-1.5 py-0.2 rounded font-bold">
                                    FEATURED
                                  </span>
                                )}
                                {p.newArrival && (
                                  <span className="text-[9px] bg-neutral-200 text-neutral-800 px-1.5 py-0.2 rounded font-bold">
                                    NEW
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Price */}
                        <td className="py-3 px-4 font-bold text-black">
                          <div>
                            <span>{formatINR(p.salePrice || p.price)}</span>
                            {p.salePrice && (
                              <span className="text-[10px] text-neutral-400 line-through block">
                                {formatINR(p.price)}
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Interactive Size Stock Matrix */}
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {p.sizes.map((size) => {
                              const qty = p.sizeStock[size] ?? 0;
                              return (
                                <div
                                  key={size}
                                  className="flex items-center border border-neutral-200 rounded-lg bg-white overflow-hidden text-[10px]"
                                >
                                  <span className="px-1.5 font-bold bg-neutral-100 text-neutral-700">
                                    {size}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => handleQuickStockDelta(p, size, -1)}
                                    className="px-1 text-neutral-400 hover:text-black hover:bg-neutral-100"
                                  >
                                    -
                                  </button>
                                  <span
                                    className={`px-1 font-black ${
                                      qty <= 0
                                        ? 'text-red-600'
                                        : qty <= 2
                                        ? 'text-amber-600'
                                        : 'text-black'
                                    }`}
                                  >
                                    {qty}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => handleQuickStockDelta(p, size, 1)}
                                    className="px-1 text-neutral-400 hover:text-black hover:bg-neutral-100"
                                  >
                                    +
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </td>

                        {/* Total Stock */}
                        <td className="py-3 px-4 font-black text-black">
                          <span
                            className={
                              p.stock <= 0
                                ? 'text-red-600'
                                : p.stock <= 5
                                ? 'text-amber-600'
                                : 'text-emerald-700'
                            }
                          >
                            {p.stock} units
                          </span>
                        </td>

                        {/* Status */}
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              p.status === 'active'
                                ? 'bg-emerald-100 text-emerald-800'
                                : p.status === 'out_of_stock'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-neutral-100 text-neutral-600'
                            }`}
                          >
                            {p.status.replace('_', ' ')}
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              type="button"
                              onClick={() => setEditingProduct(p)}
                              className="p-1.5 text-neutral-400 hover:text-black hover:bg-neutral-100 rounded-lg"
                              title="Edit product"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                if (confirm(`Are you sure you want to delete ${p.name}?`)) {
                                  deleteProduct(p.id);
                                }
                              }}
                              className="p-1.5 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                              title="Delete product"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ORDERS MANAGEMENT */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-neutral-100 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-black uppercase text-black">Customer Showroom Orders</h3>
                <p className="text-xs text-neutral-500">Live order status and dispatch updates</p>
              </div>
              <span className="text-xs font-bold text-neutral-400">{orders.length} total orders</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-neutral-50 text-neutral-500 uppercase font-black tracking-wider border-b border-neutral-200">
                    <th className="py-3.5 px-4">Order ID & Date</th>
                    <th className="py-3.5 px-4">Customer & Phone</th>
                    <th className="py-3.5 px-4">Items</th>
                    <th className="py-3.5 px-4">Total & Payment</th>
                    <th className="py-3.5 px-4">Current Status</th>
                    <th className="py-3.5 px-4 text-right">Quick WhatsApp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-neutral-50/70">
                      <td className="py-3 px-4">
                        <span className="font-mono font-bold text-black block">
                          {order.orderNumber}
                        </span>
                        <span className="text-[10px] text-neutral-400">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </span>
                      </td>

                      <td className="py-3 px-4">
                        <p className="font-bold text-black">{order.customerName}</p>
                        <p className="text-neutral-500 text-[11px]">{order.customerPhone}</p>
                      </td>

                      <td className="py-3 px-4">
                        <div className="space-y-0.5">
                          {order.items.map((it, idx) => (
                            <p key={idx} className="text-[11px] text-neutral-700">
                              {it.quantity}x {it.name} (Sz {it.size})
                            </p>
                          ))}
                        </div>
                      </td>

                      <td className="py-3 px-4">
                        <p className="font-black text-black">{formatINR(order.total)}</p>
                        <p className="text-[10px] text-neutral-400 uppercase">
                          {order.paymentMethod} • {order.paymentStatus}
                        </p>
                      </td>

                      {/* Status select */}
                      <td className="py-3 px-4">
                        <select
                          value={order.status}
                          onChange={(e) =>
                            updateOrderStatus(order.id, e.target.value as OrderStatus)
                          }
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border appearance-none cursor-pointer ${getStatusBadge(
                            order.status
                          )}`}
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="packed">Packed</option>
                          <option value="shipped">Shipped</option>
                          <option value="out_for_delivery">Out for Delivery</option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>

                      <td className="py-3 px-4 text-right">
                        <button
                          type="button"
                          onClick={() =>
                            openWhatsApp(
                              `Hello ${order.customerName}, regarding your footwear order #${order.orderNumber} from AL-HALAL A FOOT STATION: it is currently ${order.status.toUpperCase()}.`,
                              order.customerPhone
                            )
                          }
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>WhatsApp</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: STORE DETAILS & SHOWROOM CONFIG */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm max-w-3xl space-y-6">
            <h3 className="text-sm font-black uppercase text-black pb-3 border-b border-neutral-100">
              Showroom Contact & Announcement Settings
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                  Store Telephone 1
                </label>
                <input
                  type="text"
                  value={settings.phone1}
                  onChange={(e) => updateSettings({ phone1: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                  Store Telephone 2
                </label>
                <input
                  type="text"
                  value={settings.phone2}
                  onChange={(e) => updateSettings({ phone2: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                  WhatsApp Support Line
                </label>
                <input
                  type="text"
                  value={settings.whatsapp}
                  onChange={(e) => updateSettings({ whatsapp: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                  Instagram Handle
                </label>
                <input
                  type="text"
                  value={settings.instagram}
                  onChange={(e) => updateSettings({ instagram: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                  Showroom Address
                </label>
                <textarea
                  rows={2}
                  value={settings.address}
                  onChange={(e) => updateSettings({ address: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                  Announcement Bar Marquee Text
                </label>
                <input
                  type="text"
                  value={settings.announcementText}
                  onChange={(e) => updateSettings({ announcementText: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => showToast('Showroom settings updated successfully!', 'success')}
              className="px-6 py-3 bg-black text-white text-xs font-bold uppercase rounded-xl hover:bg-neutral-800 transition-colors"
            >
              Save Showroom Configuration
            </button>
          </div>
        )}
      </div>

      {/* Edit / Create Product Modal Drawer */}
      {(editingProduct || isCreatingProduct) && (
        <ProductFormModal
          product={editingProduct}
          onClose={() => {
            setEditingProduct(null);
            setIsCreatingProduct(false);
          }}
        />
      )}
    </div>
  );
};

// Extracted Sub-modal for creating or editing products
interface ProductFormModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductFormModal: React.FC<ProductFormModalProps> = ({ product, onClose }) => {
  const { updateProduct, addProduct, categories, showToast } = useStore();

  const [name, setName] = useState(product?.name || '');
  const [brand, setBrand] = useState(product?.brand || 'AL-HALAL');
  const [category, setCategory] = useState(product?.category || "Men's Footwear");
  const [gender, setGender] = useState(product?.gender || 'Men');
  const [price, setPrice] = useState(product?.price || 1299);
  const [salePrice, setSalePrice] = useState(product?.salePrice || 999);
  const [sku, setSku] = useState(product?.sku || `AHFS-${Math.floor(1000 + Math.random() * 9000)}`);
  
  // Image management state
  const [thumbnail, setThumbnail] = useState(product?.thumbnail || '');
  const [galleryImages, setGalleryImages] = useState<string[]>(() => {
    if (product?.images && product.images.length > 0) return product.images;
    if (product?.thumbnail) return [product.thumbnail];
    return [];
  });
  const [newImageUrl, setNewImageUrl] = useState('');
  const [imageError, setImageError] = useState(false);

  const [description, setDescription] = useState(
    product?.description || 'High quality footwear engineered for everyday comfort and durability.'
  );
  const [shortDescription, setShortDescription] = useState(
    product?.shortDescription || 'Everyday lifestyle & comfort footwear.'
  );

  // Size stock matrix
  const [sizeStock, setSizeStock] = useState<{ [key: string]: number }>(
    product?.sizeStock || {
      '6': 4,
      '7': 6,
      '8': 8,
      '9': 8,
      '10': 5,
      '11': 2,
    }
  );

  const [featured, setFeatured] = useState(product?.featured || false);
  const [newArrival, setNewArrival] = useState(product?.newArrival || false);
  const [bestSeller, setBestSeller] = useState(product?.bestSeller || false);

  // File upload handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, isGallery = false) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file: File) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        if (!dataUrl) return;

        if (!isGallery) {
          setThumbnail(dataUrl);
          setImageError(false);
          setGalleryImages((prev) => (prev.includes(dataUrl) ? prev : [dataUrl, ...prev]));
        } else {
          setGalleryImages((prev) => (prev.includes(dataUrl) ? prev : [...prev, dataUrl]));
          if (!thumbnail) setThumbnail(dataUrl);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAddGalleryUrl = () => {
    if (!newImageUrl.trim()) return;
    const urls = newImageUrl
      .split(/[\n,]+/)
      .map((u) => u.trim())
      .filter((u) => u.length > 0);

    setGalleryImages((prev) => {
      const combined = [...prev];
      urls.forEach((u) => {
        if (!combined.includes(u)) combined.push(u);
      });
      return combined;
    });

    if (!thumbnail && urls.length > 0) {
      setThumbnail(urls[0]);
    }
    setNewImageUrl('');
  };

  const handleRemoveGalleryImage = (idx: number) => {
    setGalleryImages((prev) => {
      const updated = prev.filter((_, i) => i !== idx);
      if (thumbnail === prev[idx]) {
        setThumbnail(updated[0] || '');
      }
      return updated;
    });
  };

  const handleSetAsMain = (url: string) => {
    setThumbnail(url);
    setImageError(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const totalStock = (Object.values(sizeStock) as number[]).reduce(
      (a: number, b: number) => a + b,
      0
    );
    const calculatedDiscount =
      salePrice && salePrice < price ? Math.round(((price - salePrice) / price) * 100) : 0;

    const finalThumbnail = thumbnail.trim() || (galleryImages.length > 0 ? galleryImages[0] : '');
    const cleanGallery = galleryImages.map((u) => u.trim()).filter(Boolean);
    const finalImages = [
      ...(finalThumbnail ? [finalThumbnail] : []),
      ...cleanGallery.filter((img) => img !== finalThumbnail),
    ];
    if (finalImages.length === 0 && finalThumbnail) {
      finalImages.push(finalThumbnail);
    }

    const updatedVariants = product?.variants && product.variants.length > 0
      ? product.variants.map((v) => ({
          ...v,
          images: finalImages,
        }))
      : [
          {
            color: 'Default',
            colorCode: '#111111',
            images: finalImages,
            sizes: sizeStock,
          },
        ];

    const payload: Partial<Product> = {
      name,
      slug: product?.slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      brand,
      category,
      gender: gender as any,
      price: Number(price),
      salePrice: Number(salePrice),
      discountPercentage: calculatedDiscount,
      sku,
      thumbnail: finalThumbnail,
      images: finalImages,
      variants: updatedVariants,
      description,
      shortDescription,
      sizes: Object.keys(sizeStock),
      sizeStock,
      stock: totalStock,
      status: totalStock > 0 ? 'active' : 'out_of_stock',
      featured,
      newArrival,
      bestSeller,
    };

    if (product) {
      updateProduct(product.id, payload);
    } else {
      addProduct({
        ...payload,
        id: `prod-custom-${Date.now()}`,
        colors: ['Default'],
        colorVariants: [
          { name: 'Default', code: '#111111', stock: totalStock },
        ],
        sizeSystem: category.includes('Watch') ? 'Dial' : category.includes('Glasses') ? 'Frame' : 'India / UK',
        features: ['Premium Showroom Quality', '100% Authentic', 'Warranty Covered'],
        material: 'Premium Composite Materials',
      } as any);
      showToast('New product added to catalog!', 'success');
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto space-y-6 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
          <div>
            <h3 className="text-base font-black uppercase text-black">
              {product ? 'Edit Product' : 'Add New Product'}
            </h3>
            <p className="text-[11px] text-neutral-400">
              Manage product details, pricing, inventory & images
            </p>
          </div>
          <button type="button" onClick={onClose} className="p-1.5 text-neutral-400 hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-5 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-neutral-700 uppercase mb-1">Product Title</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Al-Halal Urban Flex Shoe"
                className="w-full px-3 py-2 bg-[#fafafa] border border-neutral-200 rounded-xl"
              />
            </div>

            <div>
              <label className="block font-bold text-neutral-700 uppercase mb-1">Brand</label>
              <input
                type="text"
                required
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="e.g. AL-HALAL, FOSSIL, RAY-BAN"
                className="w-full px-3 py-2 bg-[#fafafa] border border-neutral-200 rounded-xl"
              />
            </div>

            <div>
              <label className="block font-bold text-neutral-700 uppercase mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 bg-[#fafafa] border border-neutral-200 rounded-xl font-medium"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bold text-neutral-700 uppercase mb-1">SKU Code</label>
              <input
                type="text"
                required
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                className="w-full px-3 py-2 bg-[#fafafa] border border-neutral-200 rounded-xl"
              />
            </div>

            <div>
              <label className="block font-bold text-neutral-700 uppercase mb-1">MRP Price (₹)</label>
              <input
                type="number"
                required
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full px-3 py-2 bg-[#fafafa] border border-neutral-200 rounded-xl"
              />
            </div>

            <div>
              <label className="block font-bold text-neutral-700 uppercase mb-1">Sale / Offer Price (₹)</label>
              <input
                type="number"
                value={salePrice}
                onChange={(e) => setSalePrice(Number(e.target.value))}
                className="w-full px-3 py-2 bg-[#fafafa] border border-neutral-200 rounded-xl"
              />
            </div>
          </div>

          {/* PRODUCT IMAGE SECTION */}
          <div className="bg-[#fcfcfc] border border-neutral-200 rounded-2xl p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 uppercase text-xs flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4 text-black" />
                  Product Images & Media
                </h4>
                <p className="text-[11px] text-neutral-500 mt-0.5">
                  Paste any URL (postimg.cc, imgur, cdn, direct web link) or upload from your device.
                </p>
              </div>
            </div>

            {/* Main Thumbnail Input */}
            <div>
              <label className="block font-bold text-neutral-700 uppercase mb-1 text-[11px]">
                Main Image / Thumbnail URL
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={thumbnail}
                  onChange={(e) => {
                    setThumbnail(e.target.value);
                    setImageError(false);
                  }}
                  placeholder="https://i.postimg.cc/... or any image link"
                  className="flex-1 px-3 py-2 bg-white border border-neutral-300 rounded-xl text-xs font-mono text-neutral-800 focus:outline-none focus:border-black"
                />
                <label className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold rounded-xl cursor-pointer flex items-center gap-1.5 border border-neutral-300 transition-colors shrink-0">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload File</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, false)}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Thumbnail Live Preview */}
            {thumbnail ? (
              <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-neutral-200">
                <div className="w-16 h-16 rounded-lg bg-[#f0f0f0] p-1 flex items-center justify-center shrink-0 overflow-hidden border border-neutral-100">
                  {!imageError ? (
                    <img
                      src={thumbnail}
                      alt="Preview"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="text-[10px] text-red-500 font-bold text-center">Broken Image</div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block">
                    Primary Thumbnail Active
                  </span>
                  <p className="text-[11px] text-neutral-500 truncate mt-1 font-mono">
                    {thumbnail}
                  </p>
                </div>
              </div>
            ) : null}

            {/* Additional Gallery Images */}
            <div className="pt-2 border-t border-neutral-200 space-y-2">
              <label className="block font-bold text-neutral-700 uppercase text-[11px]">
                Gallery Images ({galleryImages.length})
              </label>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  placeholder="Paste additional image URL (or multiple comma-separated)..."
                  className="flex-1 px-3 py-2 bg-white border border-neutral-300 rounded-xl text-xs font-mono text-neutral-800 focus:outline-none focus:border-black"
                />
                <button
                  type="button"
                  onClick={handleAddGalleryUrl}
                  disabled={!newImageUrl.trim()}
                  className="px-3 py-2 bg-black text-white font-bold rounded-xl hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed text-xs shrink-0"
                >
                  Add URL
                </button>
                <label className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold rounded-xl cursor-pointer flex items-center gap-1.5 border border-neutral-300 transition-colors shrink-0">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload More</span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, true)}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Gallery Thumbnails List */}
              {galleryImages.length > 0 && (
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 pt-2">
                  {galleryImages.map((imgUrl, idx) => {
                    const isMain = imgUrl === thumbnail;
                    return (
                      <div
                        key={idx}
                        className={`relative group bg-white border rounded-xl p-1 aspect-square flex items-center justify-center overflow-hidden ${
                          isMain ? 'border-black ring-2 ring-black/20' : 'border-neutral-200'
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`Gallery ${idx + 1}`}
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                        {isMain && (
                          <span className="absolute bottom-1 left-1 right-1 bg-black text-white text-[8px] font-bold uppercase text-center rounded py-0.5">
                            Main
                          </span>
                        )}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                          {!isMain && (
                            <button
                              type="button"
                              onClick={() => handleSetAsMain(imgUrl)}
                              className="p-1 bg-white text-black rounded text-[9px] font-bold"
                              title="Set as main thumbnail"
                            >
                              Main
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => handleRemoveGalleryImage(idx)}
                            className="p-1 bg-red-600 text-white rounded text-[9px]"
                            title="Remove image"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Size-wise stock matrix */}
          <div>
            <label className="block font-bold text-neutral-700 uppercase mb-2">
              Size-Wise Physical Stock Matrix
            </label>
            <div className="grid grid-cols-6 gap-2">
              {Object.keys(sizeStock).map((sz) => (
                <div key={sz} className="text-center p-2 bg-[#fafafa] border border-neutral-200 rounded-xl">
                  <span className="block font-bold text-neutral-600 mb-1">{sz}</span>
                  <input
                    type="number"
                    min="0"
                    value={sizeStock[sz] ?? 0}
                    onChange={(e) =>
                      setSizeStock({ ...sizeStock, [sz]: Number(e.target.value) })
                    }
                    className="w-full text-center bg-white border border-neutral-200 rounded py-1 font-bold text-xs"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Toggles */}
          <div className="flex items-center gap-6 pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="accent-black"
              />
              <span className="font-bold">Featured Item</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={newArrival}
                onChange={(e) => setNewArrival(e.target.checked)}
                className="accent-black"
              />
              <span className="font-bold">New Arrival</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={bestSeller}
                onChange={(e) => setBestSeller(e.target.checked)}
                className="accent-black"
              />
              <span className="font-bold">Best Seller</span>
            </label>
          </div>

          <div className="pt-4 border-t border-neutral-100 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border border-neutral-200 text-xs font-bold uppercase rounded-xl hover:bg-neutral-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-black text-white text-xs font-bold uppercase rounded-xl hover:bg-neutral-800"
            >
              {product ? 'Update Product' : 'Save Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
