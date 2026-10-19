import React from 'react';
import { Layers, Store, Headphones, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const WhyShopSection: React.FC = () => {
  const { settings } = useStore();
  const phone = settings.phone || '0431 402 0105';

  const cards = [
    {
      icon: Layers,
      title: 'WIDE FOOTWEAR COLLECTION',
      desc: "Explore men's, women's, sports running shoes, casual footwear, and comfortable sandals.",
    },
    {
      icon: Store,
      title: 'IN-STORE SHOWROOM EXPERIENCE',
      desc: 'Visit Kings Square Complex, Tiruchirappalli to check fit, try on sizes, and get personalized service.',
    },
    {
      icon: Headphones,
      title: 'DIRECT STORE HELPLINE',
      desc: `Speak directly with our showroom staff at ${phone} for size confirmation and availability inquiries.`,
    },
    {
      icon: ShoppingBag,
      title: 'IN-STORE SHOPPING & DELIVERY',
      desc: 'Enjoy convenient in-store shopping with immediate pickup or order online for direct delivery to your address.',
    },
  ];

  return (
    <section id="why-shop-with-us-section" className="py-16 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            Showroom Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mt-1">
            WHY SHOP WITH {settings.businessName || 'ITALIA SHOES'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#fafafa] border border-neutral-200/80 hover:border-black hover:shadow-lg transition-all duration-300 flex flex-col items-start text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-black uppercase tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
