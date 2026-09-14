import React from 'react';
import { useStore } from '../context/StoreContext';
import { Phone, MapPin, Instagram, Youtube, MessageCircle, ShieldCheck } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface FooterProps {
  navigateTo: (view: string, param?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const { settings, categories } = useStore();

  return (
    <footer id="main-site-footer" className="bg-[#000000] text-neutral-300 pt-16 pb-24 sm:pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase block">
                AL-HALAL
              </span>
              <span className="text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase">
                A FOOT STATION
              </span>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              A modern footwear showroom and retail store offering casual footwear, sports shoes,
              sandals, clogs, and lifestyle styles built for everyday comfort.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://instagram.com/${settings.instagram || 'alhalalfoot_truck'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              {settings.youtube && (
                <a
                  href={settings.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
              <button
                type="button"
                onClick={() =>
                  openWhatsApp(
                    'Hello AL-HALAL A FOOT STATION, I would like assistance.',
                    settings.whatsapp
                  )
                }
                className="w-9 h-9 rounded-xl bg-neutral-900 text-emerald-400 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Footwear Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('shop')}
                  className="hover:text-white transition-colors"
                >
                  Shop All Footwear
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('category', "Men's Footwear")}
                  className="hover:text-white transition-colors"
                >
                  Men's Footwear
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('category', 'Sports Shoes')}
                  className="hover:text-white transition-colors"
                >
                  Sports Shoes & Runners
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('category', 'Casual Shoes')}
                  className="hover:text-white transition-colors"
                >
                  Casual Footwear & Loafers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('category', 'Comfort Sandals')}
                  className="hover:text-white transition-colors"
                >
                  Sandals & Slides
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('category', 'Clogs & Slip-ons')}
                  className="hover:text-white transition-colors"
                >
                  Clogs & Slip-ons
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('category', 'New Arrivals')}
                  className="hover:text-white transition-colors"
                >
                  New Showroom Arrivals
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Customer Hub</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('account')}
                  className="hover:text-white transition-colors"
                >
                  My Account
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('my-orders')}
                  className="hover:text-white transition-colors"
                >
                  Orders & Live Tracking
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('wishlist')}
                  className="hover:text-white transition-colors"
                >
                  Saved Wishlist
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('cart')}
                  className="hover:text-white transition-colors"
                >
                  Shopping Cart
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('about')}
                  className="hover:text-white transition-colors"
                >
                  About Our Showroom
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('admin')}
                  className="hover:text-white transition-colors text-neutral-400 flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Admin Portal</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Store Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Store Helpline</h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neutral-300 shrink-0" />
                <a href={`tel:${settings.phone1}`} className="hover:text-white font-semibold">
                  {settings.phone1}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neutral-300 shrink-0" />
                <a href={`tel:${settings.phone2}`} className="hover:text-white font-semibold">
                  {settings.phone2}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
                <span>{settings.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} AL-HALAL A FOOT STATION. All rights reserved.</p>
          <p className="max-w-xl text-neutral-500">
            Product availability, prices, sizes and stock are subject to change. Please contact the
            store for current physical showroom availability.
          </p>
        </div>
      </div>
    </footer>
  );
};
