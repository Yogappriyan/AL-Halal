import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ArrowRight, ShoppingBag, Sparkles, ShieldCheck, Flame } from 'lucide-react';
import { formatINR } from '../utils/pricing';

interface HeroProps {
  navigateTo: (view: string, param?: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  const { products, banners, setQuickViewProduct } = useStore();

  const heroShowcase = [
    {
      id: 'prod-001',
      title: 'Urban Flex Low-Top',
      tag: 'Best Seller',
      color: 'Triple Black',
      price: 1299,
      originalPrice: 1899,
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'prod-002',
      title: 'Air Sprint Pro Runner',
      tag: 'High Energy',
      color: 'Crimson Red',
      price: 1699,
      originalPrice: 2499,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'prod-005',
      title: 'Cloud-Stride Foam Clog',
      tag: 'Trending Now',
      color: 'Bone White',
      price: 699,
      originalPrice: 999,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const currentShoe = heroShowcase[activeIndex];

  const currentProduct = products.find((p) => p.id === currentShoe.id) || products[0];

  return (
    <section
      id="homepage-hero-section"
      className="relative bg-gradient-to-b from-white via-[#f7f7f7] to-[#eeeeee] overflow-hidden pt-8 pb-16 lg:py-20 border-b border-neutral-200"
    >
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Large watermark text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-900/[0.03] font-black text-[12vw] tracking-tighter uppercase select-none pointer-events-none whitespace-nowrap">
        AL-HALAL FOOTWEAR
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Top pill badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-xs font-bold tracking-wider uppercase shadow-sm"
            >
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Showroom Showcase • 2026 Collection</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-main-title"
              className="text-4xl sm:text-6xl xl:text-7xl font-black text-black tracking-tight uppercase leading-[1.05]"
            >
              STEP INTO <br />
              <span className="text-neutral-500 underline decoration-black decoration-4 underline-offset-8">
                YOUR STYLE
              </span>
            </h1>

            {/* Supporting description */}
            <p
              id="hero-description"
              className="text-base sm:text-lg text-neutral-600 max-w-xl font-normal leading-relaxed"
            >
              Discover footwear for everyday comfort, street style and active lifestyles.
              Handcrafted comfort, durable materials, and premium finishes straight from our
              physical showroom shelves.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-primary-shop-cta"
                type="button"
                onClick={() => navigateTo('shop')}
                className="group px-7 py-4 bg-black text-white font-bold text-sm tracking-wider uppercase rounded-xl hover:bg-neutral-800 transition-all transform active:scale-95 shadow-xl flex items-center gap-3"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>SHOP FOOTWEAR</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-secondary-arrivals-cta"
                type="button"
                onClick={() => navigateTo('category', 'New Arrivals')}
                className="px-7 py-4 bg-white text-black border border-neutral-300 font-bold text-sm tracking-wider uppercase rounded-xl hover:bg-neutral-50 hover:border-black transition-all active:scale-95 shadow-sm"
              >
                EXPLORE NEW ARRIVALS
              </button>
            </div>

            {/* Value Props Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-200 w-full max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-black text-black">100%</p>
                <p className="text-xs text-neutral-500 font-medium">Authentic Store Stock</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-black">UK & IND</p>
                <p className="text-xs text-neutral-500 font-medium">Standard Fit Sizes</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-black">FAST</p>
                <p className="text-xs text-neutral-500 font-medium">Direct Store Pickup</p>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Interactive Footwear Showcase */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* Dynamic Card Container */}
            <div
              id="hero-floating-shoe-stage"
              className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-neutral-200/80 via-white to-neutral-100 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center border border-neutral-300 shadow-2xl transition-all duration-500 group"
            >
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 z-20">
                <span className="px-3 py-1 bg-black text-white text-[11px] font-bold tracking-widest uppercase rounded-md shadow">
                  {currentShoe.tag}
                </span>
              </div>

              {/* Discount Tag */}
              <div className="absolute top-6 right-6 z-20 text-right">
                <span className="text-sm font-black text-black block">
                  {formatINR(currentShoe.price)}
                </span>
                <span className="text-xs text-neutral-400 line-through">
                  {formatINR(currentShoe.originalPrice)}
                </span>
              </div>

              {/* Floating Shoe Image with hover elevation */}
              <div className="relative w-full h-full flex items-center justify-center py-4 cursor-pointer">
                <img
                  src={currentShoe.image}
                  alt={currentShoe.title}
                  onClick={() => currentProduct && navigateTo('product-details', currentProduct)}
                  className="w-full h-64 sm:h-72 object-contain filter drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)] transform group-hover:scale-105 group-hover:-translate-y-2 -rotate-12 group-hover:-rotate-6 transition-all duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Simulated shadow */}
                <div className="absolute bottom-6 w-3/4 h-6 bg-black/20 rounded-full filter blur-md transform scale-y-50 group-hover:scale-90 transition-transform duration-500 pointer-events-none" />
              </div>

              {/* Bottom Details & Quick View Trigger */}
              <div className="w-full flex items-center justify-between pt-2 border-t border-neutral-200 z-10">
                <div>
                  <h4 className="text-sm font-bold text-black">{currentShoe.title}</h4>
                  <p className="text-xs text-neutral-500">{currentShoe.color}</p>
                </div>
                {currentProduct && (
                  <button
                    type="button"
                    onClick={() => setQuickViewProduct(currentProduct)}
                    className="px-3 py-1.5 bg-black text-white text-xs font-semibold rounded-lg hover:bg-neutral-800 transition-colors"
                  >
                    Quick View
                  </button>
                )}
              </div>
            </div>

            {/* Model switcher thumbnails */}
            <div className="flex items-center gap-3 mt-4">
              {heroShowcase.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center gap-2 p-1.5 pr-3 rounded-xl border transition-all ${
                    activeIndex === idx
                      ? 'bg-black text-white border-black shadow-md scale-105'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-8 h-8 object-contain rounded-lg bg-neutral-100 p-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xs font-bold tracking-tight">{item.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
