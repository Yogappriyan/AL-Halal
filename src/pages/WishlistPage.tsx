import React from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { Heart, ArrowRight } from 'lucide-react';

interface WishlistPageProps {
  navigateTo: (view: string, param?: any) => void;
}

export const WishlistPage: React.FC<WishlistPageProps> = ({ navigateTo }) => {
  const { wishlist, products } = useStore();

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  if (wishlistProducts.length === 0) {
    return (
      <div id="wishlist-empty-view" className="min-h-[70vh] flex items-center justify-center bg-[#fafafa] px-4 py-16">
        <div className="max-w-md w-full text-center bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200 shadow-sm">
          <div className="w-20 h-20 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 stroke-[1.5]" />
          </div>
          <h2 className="text-2xl font-black uppercase text-black tracking-tight">
            Your Wishlist is Empty
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-2 mb-8 leading-relaxed">
            Tap the heart icon on any pair of shoes to save them to your personal favorites.
          </p>
          <button
            type="button"
            onClick={() => navigateTo('shop')}
            className="w-full py-4 px-6 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <span>Explore Footwear</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="wishlist-page-root" className="min-h-screen bg-[#fafafa] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 pb-4 border-b border-neutral-200">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
            Saved Styles
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
            MY WISHLIST ({wishlistProducts.length})
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} product={product} navigateTo={navigateTo} />
          ))}
        </div>
      </div>
    </div>
  );
};
