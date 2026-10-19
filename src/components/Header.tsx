import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  Phone,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { formatINR } from '../utils/pricing';

interface HeaderProps {
  currentView: string;
  navigateTo: (view: string, params?: any) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, navigateTo }) => {
  const {
    cartCount,
    wishlist,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    activeSearchQuery,
    setActiveSearchQuery,
    products,
    isAdmin,
    user,
    settings,
  } = useStore();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; view: string; param?: string; badge?: string }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Shop', view: 'shop' },
    { label: 'Men', view: 'category', param: 'Men' },
    { label: 'Women', view: 'category', param: 'Women' },
    { label: 'Sports', view: 'category', param: 'Sports' },
    { label: 'Casual', view: 'category', param: 'Casual' },
    { label: 'Sandals', view: 'category', param: 'Sandals' },
    { label: 'New Arrivals', view: 'category', param: 'New Arrivals', badge: 'New' },
    { label: 'Offers', view: 'category', param: 'Offers', badge: 'Deals' },
    { label: 'Contact', view: 'contact' },
  ];

  const searchResults = activeSearchQuery.trim()
    ? products
        .filter(
          (p) =>
            p.status === 'active' &&
            (p.name.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
              p.brand.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
              p.category.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
              p.sku.toLowerCase().includes(activeSearchQuery.toLowerCase()))
        )
        .slice(0, 5)
    : [];

  return (
    <header
      id="main-sticky-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-neutral-200'
          : 'bg-white py-4 border-b border-neutral-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Mobile Hamburger & Brand */}
        <div className="flex items-center gap-3">
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Wordmark Logo */}
          <button
            id="header-brand-logo-btn"
            type="button"
            onClick={() => navigateTo('home')}
            className="text-left group flex flex-col focus:outline-none"
          >
            <span className="text-lg sm:text-xl font-black tracking-tighter text-black uppercase leading-none group-hover:opacity-80 transition-opacity">
              ITALIA SHOES
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-neutral-400 uppercase mt-0.5">
              Shoe Store
            </span>
          </button>
        </div>

        {/* Center Desktop Navigation */}
        <nav id="desktop-main-navigation" className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((item) => {
            const isActive =
              currentView === item.view ||
              (currentView === 'category' && item.param && currentView.includes(item.param));

            return (
              <button
                key={item.label}
                id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                type="button"
                onClick={() => {
                  if (item.param) {
                    navigateTo('category', item.param);
                  } else {
                    navigateTo(item.view);
                  }
                }}
                className={`relative text-xs xl:text-sm font-semibold tracking-wide uppercase transition-all py-1 border-b-2 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-black border-black font-bold'
                    : 'text-neutral-600 border-transparent hover:text-black hover:border-neutral-300'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider bg-black text-white rounded-full leading-none">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1 sm:gap-2.5">
          {/* Search trigger button */}
          <div className="relative">
            <button
              id="header-search-btn"
              type="button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-neutral-800 hover:text-black hover:bg-neutral-100 rounded-full transition-colors"
              aria-label="Search catalog"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Desktop Search Dropdown */}
            {isSearchOpen && (
              <div
                id="search-popover-panel"
                className="absolute right-0 top-12 w-80 sm:w-96 bg-white border border-neutral-200 rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="relative flex items-center">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3" />
                  <input
                    id="header-live-search-input"
                    type="text"
                    placeholder="Search footwear, sneakers, sports shoes, sandals..."
                    value={activeSearchQuery}
                    onChange={(e) => setActiveSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full pl-9 pr-8 py-2 bg-neutral-100 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  {activeSearchQuery && (
                    <button
                      type="button"
                      onClick={() => setActiveSearchQuery('')}
                      className="absolute right-2.5 text-neutral-400 hover:text-black"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {searchResults.length > 0 ? (
                  <div className="mt-3 divide-y divide-neutral-100 max-h-72 overflow-y-auto">
                    <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider px-2 py-1">
                      Matching Products
                    </p>
                    {searchResults.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          navigateTo('product-details', item);
                        }}
                        className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-xl cursor-pointer transition-colors"
                      >
                        <img
                          src={item.thumbnail}
                          alt={item.name}
                          className="w-12 h-12 object-contain bg-neutral-100 rounded-lg p-1 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-black truncate">{item.name}</p>
                          <p className="text-[11px] text-neutral-500">{item.category}</p>
                        </div>
                        <span className="text-xs font-bold text-black">
                          {formatINR(item.salePrice || item.price)}
                        </span>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        setIsSearchOpen(false);
                        navigateTo('shop');
                      }}
                      className="w-full mt-2 text-center text-xs font-bold text-black py-2 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors"
                    >
                      View All Results in Shop
                    </button>
                  </div>
                ) : activeSearchQuery ? (
                  <div className="p-4 text-center text-xs text-neutral-500">
                    No products matching "{activeSearchQuery}".
                  </div>
                ) : null}
              </div>
            )}
          </div>

          {/* Wishlist Icon */}
          <button
            id="header-wishlist-btn"
            type="button"
            onClick={() => navigateTo('wishlist')}
            className="relative p-2 text-neutral-800 hover:text-black hover:bg-neutral-100 rounded-full transition-colors"
            aria-label="View Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span
                id="wishlist-badge-count"
                className="absolute top-1 right-1 w-4 h-4 bg-black text-white text-[10px] font-bold rounded-full flex items-center justify-center"
              >
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Account Icon */}
          <button
            id="header-account-btn"
            type="button"
            onClick={() => navigateTo('account')}
            className="p-2 text-neutral-800 hover:text-black hover:bg-neutral-100 rounded-full transition-colors"
            aria-label="User Account"
          >
            <User className="w-5 h-5" />
          </button>

          {/* Cart Icon */}
          <button
            id="header-cart-btn"
            type="button"
            onClick={() => navigateTo('cart')}
            className="relative p-2.5 bg-black text-white hover:bg-neutral-800 rounded-full transition-transform active:scale-95 flex items-center justify-center ml-1"
            aria-label="View Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span
                id="header-cart-badge-count"
                className="absolute -top-1 -right-1 min-w-5 h-5 px-1 bg-red-600 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white animate-pulse"
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Admin link badge */}
          {isAdmin && (
            <button
              id="header-admin-portal-link"
              type="button"
              onClick={() => navigateTo('admin')}
              className="hidden sm:flex items-center gap-1.5 ml-2 px-3 py-1.5 bg-neutral-900 text-white text-xs font-semibold rounded-lg hover:bg-black transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Admin</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Slide-in Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            id="mobile-drawer-backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer content */}
          <div
            id="mobile-drawer-content"
            className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-300"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-neutral-100 flex items-center justify-between">
              <div>
                <span className="text-lg font-black tracking-tighter text-black uppercase">
                  ITALIA SHOES
                </span>
                <span className="block text-[10px] font-medium tracking-wider text-neutral-400 uppercase">
                  Shoe Store
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-neutral-500 hover:text-black hover:bg-neutral-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              <div className="mb-4">
                <div className="relative">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Search footwear, sneakers, sandals..."
                    value={activeSearchQuery}
                    onChange={(e) => setActiveSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setIsMobileMenuOpen(false);
                        navigateTo('shop');
                      }
                    }}
                    className="w-full pl-9 pr-4 py-2.5 bg-neutral-100 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (link.param) {
                      navigateTo('category', link.param);
                    } else {
                      navigateTo(link.view);
                    }
                  }}
                  className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 rounded-xl text-left transition-colors"
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    {link.badge && (
                      <span className="px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider bg-black text-white rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </span>
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                </button>
              ))}

              <div className="pt-4 border-t border-neutral-100 mt-4 space-y-1">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigateTo('about');
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-xl text-left"
                >
                  <span>About Our Showroom</span>
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigateTo('contact');
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-xl text-left"
                >
                  <span>Store Contact & Location</span>
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigateTo('my-orders');
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-xl text-left"
                >
                  <span>My Orders & Tracking</span>
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigateTo('admin');
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-neutral-900 bg-neutral-100 rounded-xl text-left"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Admin Panel
                  </span>
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                </button>
              </div>
            </div>

            {/* Drawer Footer Contact */}
            <div className="p-4 border-t border-neutral-100 bg-neutral-50 text-xs text-neutral-600">
              <p className="font-semibold text-neutral-900 mb-1">Direct Store Help:</p>
              <a
                href={`tel:${settings.phone || '04314020105'}`}
                className="flex items-center gap-2 text-black font-bold hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{settings.phone || '0431 402 0105'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
