import React from 'react';
import { Layers, Store, Headphones, ShoppingBag } from 'lucide-react';

export const WhyShopSection: React.FC = () => {
  const cards = [
    {
      icon: Layers,
      title: 'WIDE FOOTWEAR COLLECTION',
      desc: 'Explore multiple styles for everyday use including casuals, runners, clogs, and sandals.',
    },
    {
      icon: Store,
      title: 'SHOWROOM EXPERIENCE',
      desc: 'Visit our physical showroom to inspect footwear build quality and try on sizes in person.',
    },
    {
      icon: Headphones,
      title: 'EASY CUSTOMER SUPPORT',
      desc: 'Quick direct assistance on phone and WhatsApp at +91 9655187000 for size fitting or questions.',
    },
    {
      icon: ShoppingBag,
      title: 'CONVENIENT ONLINE SHOPPING',
      desc: 'Browse catalog, reserve your size with live stock tracking, and enjoy seamless doorstep delivery.',
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
            WHY SHOP WITH AL-HALAL
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
