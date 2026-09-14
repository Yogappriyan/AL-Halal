import React from 'react';
import { useStore } from '../context/StoreContext';
import { Home, Compass, Search, Heart, ShoppingBag } from 'lucide-react';

interface MobileBottomNavProps {
  currentView: string;
  navigateTo: (view: string, param?: any) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ currentView, navigateTo }) => {
  const { cartCount, wishlist, setIsMobileMenuOpen } = useStore();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, view: 'home' },
    { id: 'shop', label: 'Shop', icon: Compass, view: 'shop' },
    {
      id: 'search',
      label: 'Search',
      icon: Search,
      action: () => setIsMobileMenuOpen(true),
    },
    {
      id: 'wishlist',
      label: 'Wishlist',
      icon: Heart,
      view: 'wishlist',
      badge: wishlist.length,
    },
    {
      id: 'cart',
      label: 'Cart',
      icon: ShoppingBag,
      view: 'cart',
      badge: cartCount,
    },
  ];

  return (
    <div
      id="mobile-bottom-navigation-bar"
      className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-neutral-200 py-2 px-3 z-40 flex items-center justify-around shadow-lg"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentView === item.view;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              if (item.action) {
                item.action();
              } else if (item.view) {
                navigateTo(item.view);
              }
            }}
            className={`relative flex flex-col items-center justify-center p-1.5 min-w-[54px] transition-colors ${
              isActive ? 'text-black' : 'text-neutral-500 hover:text-black'
            }`}
          >
            <div className="relative">
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
              {item.badge !== undefined && item.badge > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-red-600 text-white text-[9px] font-black rounded-full min-w-4 h-4 px-1 flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </div>
            <span
              className={`text-[10px] tracking-tight mt-0.5 ${
                isActive ? 'font-black text-black' : 'font-semibold text-neutral-500'
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
