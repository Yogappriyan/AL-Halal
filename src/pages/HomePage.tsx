import React from 'react';
import { useStore } from '../context/StoreContext';
import { Hero } from '../components/Hero';
import { CategoryShowcase } from '../components/CategoryShowcase';
import { ProductCard } from '../components/ProductCard';
import { StoreShowroomSection } from '../components/StoreShowroomSection';
import { WhyShopSection } from '../components/WhyShopSection';
import { SocialInstagramSection } from '../components/SocialInstagramSection';
import { ArrowRight, Sparkles, Flame, Tag, Watch, Glasses } from 'lucide-react';

interface HomePageProps {
  navigateTo: (view: string, param?: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  const { products } = useStore();

  const activeProducts = products.filter((p) => p.status === 'active');
  const featuredProducts = activeProducts.filter((p) => p.featured);
  const newArrivals = activeProducts.filter((p) => p.newArrival);
  const bestSellers = activeProducts.filter((p) => p.bestSeller);
  const watchProducts = activeProducts.filter((p) => p.category === 'Branded Watches');
  const sunglassProducts = activeProducts.filter((p) => p.category === 'Branded Sunglasses');
  const offerProducts = activeProducts.filter(
    (p) => p.offer || (p.discountPercentage && p.discountPercentage > 0)
  );

  return (
    <div id="homepage-root" className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero navigateTo={navigateTo} />

      {/* Categories Showcase */}
      <CategoryShowcase navigateTo={navigateTo} />

      {/* Featured Footwear Section */}
      <section id="featured-footwear-section" className="py-16 bg-[#fafafa] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-neutral-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Showroom Highlights</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase">
                FEATURED FOOTWEAR
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('shop')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black uppercase tracking-wider hover:opacity-75"
            >
              <span>Explore All</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} navigateTo={navigateTo} />
            ))}
          </div>
        </div>
      </section>

      {/* Branded Watches Showcase */}
      <section id="branded-watches-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-neutral-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">
                <Watch className="w-4 h-4 text-black" />
                <span>Authentic Timepieces</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase">
                BRANDED WATCHES
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('category', 'Branded Watches')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black uppercase tracking-wider hover:opacity-75"
            >
              <span>Explore All Watches</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {watchProducts.map((product) => (
              <ProductCard key={product.id} product={product} navigateTo={navigateTo} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section id="new-arrivals-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-neutral-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>Just In</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase">
                NEW ARRIVALS
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('category', 'New Arrivals')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black uppercase tracking-wider hover:opacity-75"
            >
              <span>See Fresh Arrivals</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {newArrivals.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} navigateTo={navigateTo} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Picks */}
      <section id="popular-picks-section" className="py-16 bg-[#fafafa] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-neutral-200 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                Customer Favorites
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase">
                POPULAR PICKS
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('shop')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black uppercase tracking-wider hover:opacity-75"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {bestSellers.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} navigateTo={navigateTo} />
            ))}
          </div>
        </div>
      </section>

      {/* Branded Sunglasses Showcase */}
      <section id="branded-sunglasses-section" className="py-16 bg-[#fafafa] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-neutral-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">
                <Glasses className="w-4 h-4 text-black" />
                <span>Polarized & UV400 Protection</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase">
                BRANDED SUNGLASSES
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('category', 'Branded Sunglasses')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black uppercase tracking-wider hover:opacity-75"
            >
              <span>Explore Sunglasses</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {sunglassProducts.map((product) => (
              <ProductCard key={product.id} product={product} navigateTo={navigateTo} />
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section: STEP INTO A BETTER DEAL */}
      <section id="offers-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-neutral-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 mb-1">
                <Tag className="w-3.5 h-3.5" />
                <span>Markdowns & Discounts</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase">
                STEP INTO A BETTER DEAL
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('category', 'Special Offers')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black uppercase tracking-wider hover:opacity-75"
            >
              <span>View All Deals</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {offerProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} navigateTo={navigateTo} />
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Experience */}
      <StoreShowroomSection navigateTo={navigateTo} />

      {/* Why Shop with us */}
      <WhyShopSection />

      {/* Instagram Community */}
      <SocialInstagramSection />
    </div>
  );
};
