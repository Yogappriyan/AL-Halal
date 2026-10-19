import React from 'react';
import { useStore } from '../context/StoreContext';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface CategoryShowcaseProps {
  navigateTo: (view: string, param?: any) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ navigateTo }) => {
  const { categories } = useStore();

  const activeCategories = categories.filter((c) => c.active);

  return (
    <section id="shop-by-category-section" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-neutral-200 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
              Curated Collections
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight uppercase mt-1">
              SHOP BY CATEGORY
            </h2>
          </div>
          <button
            type="button"
            onClick={() => navigateTo('shop')}
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black uppercase tracking-wider hover:opacity-70 transition-opacity"
          >
            <span>View All Styles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {activeCategories.map((category) => (
            <div
              key={category.id}
              id={`category-card-${category.slug}`}
              onClick={() => navigateTo('category', category.name)}
              className="group relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden bg-neutral-900 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Category Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out brightness-90 group-hover:brightness-75"
                referrerPolicy="no-referrer"
              />

              {/* Subtle Black Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/95" />

              {/* Category Details at Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex flex-col justify-end text-white z-10">
                <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-1">
                  Footwear Collection
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-black tracking-tight uppercase group-hover:translate-x-1 transition-transform duration-300">
                    {category.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
                <p className="text-[11px] text-neutral-300 line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
