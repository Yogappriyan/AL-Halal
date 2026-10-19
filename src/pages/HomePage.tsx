import React from 'react';
import { useStore } from '../context/StoreContext';
import { Hero } from '../components/Hero';
import { CategoryShowcase } from '../components/CategoryShowcase';
import { ProductCard } from '../components/ProductCard';
import { StoreShowroomSection } from '../components/StoreShowroomSection';
import { WhyShopSection } from '../components/WhyShopSection';
import { SocialInstagramSection } from '../components/SocialInstagramSection';
import { ArrowRight, Sparkles, Flame, Tag, Footprints, Zap } from 'lucide-react';

interface HomePageProps {
  navigateTo: (view: string, param?: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  const { products, settings } = useStore();

  const activeProducts = products.filter((p) => p.status === 'active');
  const featuredProducts = activeProducts.filter((p) => p.featured);
  const newArrivals = activeProducts.filter((p) => p.newArrival);
  const bestSellers = activeProducts.filter((p) => p.bestSeller);
  const sportsProducts = activeProducts.filter((p) => p.category === 'Sports');
  const casualProducts = activeProducts.filter((p) => p.category === 'Casual');
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
              <span>Explore All Styles</span>
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

      {/* Sports & Running Showcase */}
      {sportsProducts.length > 0 && (
        <section id="sports-footwear-section" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-neutral-200 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">
                  <Zap className="w-4 h-4 text-black" />
                  <span>Performance & Energy</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase">
                  SPORTS & RUNNING SHOES
                </h2>
              </div>
              <button
                type="button"
                onClick={() => navigateTo('category', 'Sports')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black uppercase tracking-wider hover:opacity-75"
              >
                <span>Explore Sports Footwear</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {sportsProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} navigateTo={navigateTo} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* New Arrivals */}
      <section id="new-arrivals-section" className="py-16 bg-[#fafafa] border-y border-neutral-200">
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

      {/* Casual Footwear */}
      {casualProducts.length > 0 && (
        <section id="casual-footwear-section" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-neutral-200 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">
                  <Footprints className="w-4 h-4 text-black" />
                  <span>Everyday Comfort & Loafers</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase">
                  CASUAL SHOES & SNEAKERS
                </h2>
              </div>
              <button
                type="button"
                onClick={() => navigateTo('category', 'Casual')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black uppercase tracking-wider hover:opacity-75"
              >
                <span>View All Casuals</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {casualProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} navigateTo={navigateTo} />
              ))}
            </div>
          </div>
        </section>
      )}

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

      {/* Special Offers Section */}
      {offerProducts.length > 0 && (
        <section id="offers-section" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-neutral-200 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 mb-1">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Markdowns & Special Offers</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase">
                  STEP INTO A BETTER DEAL
                </h2>
              </div>
              <button
                type="button"
                onClick={() => navigateTo('category', 'Offers')}
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
      )}

      {/* Showroom Experience */}
      <StoreShowroomSection navigateTo={navigateTo} />

      {/* Why Shop with us */}
      <WhyShopSection />

      {/* Showroom Gallery & Updates */}
      <SocialInstagramSection />
    </div>
  );
};
