import React, { useState, useMemo } from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { Product, Gender } from '../types';
import {
  SlidersHorizontal,
  Search,
  X,
  RotateCcw,
  Check,
  ChevronDown,
  ArrowUpDown,
} from 'lucide-react';

interface ShopPageProps {
  initialCategory?: string;
  navigateTo: (view: string, param?: any) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ initialCategory, navigateTo }) => {
  const { products, categories, activeSearchQuery, setActiveSearchQuery, settings } = useStore();

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'All');
  const [selectedGender, setSelectedGender] = useState<string>('All');
  const [selectedSize, setSelectedSize] = useState<string>('All');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [onSaleOnly, setOnSaleOnly] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Available unique options derived from products
  const availableSizes = useMemo(() => {
    const relevantProducts =
      selectedCategory === 'All'
        ? products
        : selectedCategory === 'New Arrivals'
        ? products.filter((p) => p.newArrival)
        : selectedCategory === 'Special Offers'
        ? products.filter((p) => p.offer || (p.discountPercentage && p.discountPercentage > 0))
        : products.filter((p) => p.category === selectedCategory);

    const sizesSet = new Set<string>();
    relevantProducts.forEach((p) => p.sizes.forEach((s) => sizesSet.add(s)));
    return Array.from(sizesSet);
  }, [products, selectedCategory]);

  const brands = ['All', ...Array.from(new Set(products.map((p) => p.brand)))];

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedGender('All');
    setSelectedSize('All');
    setSelectedBrand('All');
    setInStockOnly(false);
    setOnSaleOnly(false);
    setPriceRange('All');
    setActiveSearchQuery('');
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Must be active or out_of_stock
      if (p.status !== 'active' && p.status !== 'out_of_stock') return false;

      // Search Query
      if (activeSearchQuery.trim()) {
        const query = activeSearchQuery.toLowerCase();
        const matches =
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.sku.toLowerCase().includes(query);
        if (!matches) return false;
      }

      // Category
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'New Arrivals') {
          if (!p.newArrival) return false;
        } else if (selectedCategory === 'Special Offers') {
          if (!p.offer && (!p.discountPercentage || p.discountPercentage <= 0)) return false;
        } else if (p.category !== selectedCategory) {
          return false;
        }
      }

      // Gender
      if (selectedGender !== 'All' && p.gender !== selectedGender) {
        return false;
      }

      // Size
      if (selectedSize !== 'All') {
        if (!p.sizes.includes(selectedSize)) return false;
        if (inStockOnly && (p.sizeStock[selectedSize] ?? 0) <= 0) return false;
      }

      // Brand
      if (selectedBrand !== 'All' && p.brand !== selectedBrand) {
        return false;
      }

      // Stock
      if (inStockOnly && (p.stock <= 0 || p.status === 'out_of_stock')) {
        return false;
      }

      // Sale Only
      if (onSaleOnly && (!p.salePrice || p.salePrice >= p.price)) {
        return false;
      }

      // Price Range
      const effectivePrice = p.salePrice || p.price;
      if (priceRange === 'under-1000' && effectivePrice >= 1000) return false;
      if (priceRange === '1000-3000' && (effectivePrice < 1000 || effectivePrice > 3000)) return false;
      if (priceRange === '3000-10000' && (effectivePrice < 3000 || effectivePrice > 10000)) return false;
      if (priceRange === 'above-10000' && effectivePrice <= 10000) return false;

      return true;
    });
  }, [
    products,
    selectedCategory,
    selectedGender,
    selectedSize,
    selectedBrand,
    inStockOnly,
    onSaleOnly,
    priceRange,
    activeSearchQuery,
  ]);

  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === 'price-asc') {
      list.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
    } else if (sortBy === 'discount') {
      list.sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0));
    } else if (sortBy === 'newest') {
      list.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }
    return list;
  }, [filteredProducts, sortBy]);

  const sizeFilterLabel = 'Size (UK/IND)';

  return (
    <div id="shop-page-root" className="min-h-screen bg-[#fafafa] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title & Breadcrumbs */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-neutral-200 gap-4">
          <div>
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
              {settings.businessName || 'ITALIA SHOES'} Showroom Catalog
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-tight mt-0.5">
              {selectedCategory === 'All' ? 'SHOP ALL PRODUCTS' : selectedCategory.toUpperCase()}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Showing {sortedProducts.length} product(s) with verified showroom availability.
            </p>
          </div>

          {/* Top Search & Filter Bar */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search styles..."
                value={activeSearchQuery}
                onChange={(e) => setActiveSearchQuery(e.target.value)}
                className="pl-9 pr-8 py-2 bg-white border border-neutral-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              {activeSearchQuery && (
                <button
                  type="button"
                  onClick={() => setActiveSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-neutral-400 hover:text-black"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="relative">
              <select
                id="shop-sort-dropdown"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort Footwear"
                className="pl-3 pr-8 py-2 bg-white border border-neutral-300 rounded-xl text-xs sm:text-sm font-semibold text-black focus:outline-none focus:ring-2 focus:ring-black appearance-none cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="discount">Highest Discount</option>
                <option value="newest">Newest Arrivals</option>
              </select>
              <ChevronDown className="w-4 h-4 text-neutral-500 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>

            {/* Mobile Filter Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3 py-2 bg-black text-white rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-sm space-y-6 sticky top-24">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-black" />
                <span className="text-xs font-black uppercase tracking-wider text-black">
                  Filters
                </span>
              </div>
              <button
                type="button"
                onClick={resetFilters}
                className="text-[11px] font-bold text-neutral-400 hover:text-black flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-black mb-2.5">
                Categories
              </h4>
              <div className="space-y-1 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('All')}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between ${
                    selectedCategory === 'All'
                      ? 'bg-black text-white font-bold'
                      : 'text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  <span>All Catalog</span>
                  <span>{products.length}</span>
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedCategory(c.name)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between ${
                      selectedCategory === c.name
                        ? 'bg-black text-white font-bold'
                        : 'text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Gender */}
            <div className="pt-4 border-t border-neutral-100">
              <h4 className="text-xs font-black uppercase tracking-wider text-black mb-2">
                Gender
              </h4>
              <div className="flex items-center gap-1.5 flex-wrap">
                {['All', 'Men', 'Women', 'Unisex', 'Kids'].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setSelectedGender(g)}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg border transition-all ${
                      selectedGender === g
                        ? 'bg-black text-white border-black'
                        : 'border-neutral-200 text-neutral-600 hover:border-black'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes (Indian/UK sizes) */}
            <div className="pt-4 border-t border-neutral-100">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-black">
                  {sizeFilterLabel}
                </h4>
                <button
                  type="button"
                  onClick={() => setSelectedSize('All')}
                  className="text-[10px] text-neutral-400 hover:text-black"
                >
                  Clear
                </button>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(selectedSize === size ? 'All' : size)}
                    className={`py-1.5 text-xs font-bold rounded-lg border text-center transition-all ${
                      selectedSize === size
                        ? 'bg-black text-white border-black shadow'
                        : 'border-neutral-200 text-neutral-700 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Ranges */}
            <div className="pt-4 border-t border-neutral-100">
              <h4 className="text-xs font-black uppercase tracking-wider text-black mb-2">
                Price (INR)
              </h4>
              <div className="space-y-1.5 text-xs text-neutral-700">
                {[
                  { label: 'All Prices', val: 'All' },
                  { label: 'Under ₹1,000', val: 'under-1000' },
                  { label: '₹1,000 - ₹3,000', val: '1000-3000' },
                  { label: '₹3,000 - ₹10,000', val: '3000-10000' },
                  { label: 'Above ₹10,000', val: 'above-10000' },
                ].map((item) => (
                  <label key={item.val} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price-filter"
                      checked={priceRange === item.val}
                      onChange={() => setPriceRange(item.val)}
                      className="accent-black"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability Checks */}
            <div className="pt-4 border-t border-neutral-100 space-y-2">
              <label className="flex items-center gap-2 text-xs font-semibold text-neutral-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="accent-black rounded"
                />
                <span>Show In-Stock Only</span>
              </label>

              <label className="flex items-center gap-2 text-xs font-semibold text-neutral-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={onSaleOnly}
                  onChange={(e) => setOnSaleOnly(e.target.checked)}
                  className="accent-black rounded"
                />
                <span>Special Offers & Discounts</span>
              </label>
            </div>
          </aside>

          {/* Right Product Grid */}
          <main className="lg:col-span-9">
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} navigateTo={navigateTo} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-neutral-200 p-12 text-center max-w-md mx-auto my-12">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4 text-neutral-400">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black uppercase text-black">No products found</h3>
                <p className="text-xs text-neutral-500 mt-1 mb-6">
                  No items match your selected combination of category, sizes, and price filters.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-black text-white text-xs font-bold uppercase rounded-xl hover:bg-neutral-800 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            onClick={() => setIsMobileFilterOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />
          <div className="relative w-4/5 max-w-sm ml-auto bg-white h-full shadow-2xl flex flex-col z-10 p-5 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <span className="text-sm font-black uppercase text-black">Filter Catalog</span>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1.5 text-neutral-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-6">
              {/* Category */}
              <div>
                <h4 className="text-xs font-bold uppercase text-neutral-700 mb-2">Category</h4>
                <div className="space-y-1 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('All')}
                    className={`w-full text-left p-2 rounded-lg ${
                      selectedCategory === 'All' ? 'bg-black text-white font-bold' : 'text-neutral-700'
                    }`}
                  >
                    All Catalog
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedCategory(c.name)}
                      className={`w-full text-left p-2 rounded-lg ${
                        selectedCategory === c.name ? 'bg-black text-white font-bold' : 'text-neutral-700'
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <h4 className="text-xs font-bold uppercase text-neutral-700 mb-2">{sizeFilterLabel}</h4>
                <div className="grid grid-cols-4 gap-1.5">
                  {availableSizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(selectedSize === sz ? 'All' : sz)}
                      className={`py-1.5 text-xs font-bold rounded-lg border ${
                        selectedSize === sz ? 'bg-black text-white' : 'border-neutral-200'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* In stock */}
              <div className="space-y-2 pt-2 border-t border-neutral-100">
                <label className="flex items-center gap-2 text-xs font-semibold">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="accent-black"
                  />
                  <span>Show In-Stock Only</span>
                </label>
                <label className="flex items-center gap-2 text-xs font-semibold">
                  <input
                    type="checkbox"
                    checked={onSaleOnly}
                    onChange={(e) => setOnSaleOnly(e.target.checked)}
                    className="accent-black"
                  />
                  <span>On Sale Only</span>
                </label>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-neutral-200 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  resetFilters();
                  setIsMobileFilterOpen(false);
                }}
                className="w-1/2 py-2.5 border border-neutral-300 text-xs font-bold uppercase rounded-xl"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-1/2 py-2.5 bg-black text-white text-xs font-bold uppercase rounded-xl"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
