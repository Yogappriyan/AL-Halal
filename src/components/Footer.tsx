import React from 'react';
import { useStore } from '../context/StoreContext';
import { Phone, MapPin, Instagram, Youtube, MessageCircle, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface FooterProps {
  navigateTo: (view: string, param?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const { settings, categories } = useStore();

  const businessName = settings.businessName || 'ITALIA SHOES';

  return (
    <footer id="main-site-footer" className="bg-[#000000] text-neutral-300 pt-16 pb-24 sm:pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase block">
                {businessName}
              </span>
              <span className="text-xs font-medium tracking-wider text-neutral-400 uppercase">
                Shoe Store • Tiruchirappalli
              </span>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Quality shoe store and retail showroom in Tiruchirappalli offering men's, women's, sports, casual footwear, and comfortable sandals with convenient in-store shopping and prompt delivery.
            </p>

            <div className="space-y-1.5 text-xs text-neutral-400 pt-1">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Open • Closes at {settings.closingTime || '9:30 PM'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Services: In-store shopping & Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">★ {settings.rating || 3.7}</span>
                <span className="text-neutral-500">({settings.reviewCount || 259} verified store reviews)</span>
              </div>
            </div>

            {/* Social & Contact Buttons (Only shown if configured by admin) */}
            <div className="flex items-center gap-3 pt-2">
              {settings.instagram ? (
                <a
                  href={`https://instagram.com/${settings.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              ) : null}
              {settings.youtube ? (
                <a
                  href={settings.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              ) : null}
              {settings.whatsapp ? (
                <button
                  type="button"
                  onClick={() =>
                    openWhatsApp(
                      `Hello ${businessName}, I would like assistance with shoe styles and sizes.`,
                      settings.whatsapp
                    )
                  }
                  className="w-9 h-9 rounded-xl bg-neutral-900 text-emerald-400 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </button>
              ) : (
                <a
                  href={`tel:${settings.phone || '0431 402 0105'}`}
                  className="px-3 py-1.5 rounded-xl bg-neutral-900 text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-neutral-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-neutral-300" />
                  <span>Call Store</span>
                </a>
              )}
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
                  onClick={() => navigateTo('category', 'Men')}
                  className="hover:text-white transition-colors"
                >
                  Men's Shoes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('category', 'Women')}
                  className="hover:text-white transition-colors"
                >
                  Women's Footwear
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('category', 'Sports')}
                  className="hover:text-white transition-colors"
                >
                  Sports & Running Shoes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('category', 'Casual')}
                  className="hover:text-white transition-colors"
                >
                  Casual Shoes & Loafers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('category', 'Sandals')}
                  className="hover:text-white transition-colors"
                >
                  Sandals & Slides
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('category', 'New Arrivals')}
                  className="hover:text-white transition-colors"
                >
                  New Arrivals
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
                  Orders & Tracking
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
                  About Our Store
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('contact')}
                  className="hover:text-white transition-colors"
                >
                  Store Location & Hours
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
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Store Helpline & Address</h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neutral-300 shrink-0" />
                <a href={`tel:${settings.phone || '0431 402 0105'}`} className="hover:text-white font-semibold">
                  {settings.phone || '0431 402 0105'}
                </a>
              </div>
              {settings.phone2 && (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-neutral-300 shrink-0" />
                  <a href={`tel:${settings.phone2}`} className="hover:text-white font-semibold">
                    {settings.phone2}
                  </a>
                </div>
              )}
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{settings.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} {businessName}. All rights reserved.</p>
          <p className="max-w-xl text-neutral-500">
            Visit our physical shoe showroom in Kings Square Complex, Tiruchirappalli or order for direct delivery.
          </p>
        </div>
      </div>
    </footer>
  );
};
