import React, { useState } from 'react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';
import { Heart, Eye, ShoppingBag, Check } from 'lucide-react';
import { formatINR } from '../utils/pricing';

interface ProductCardProps {
  product: Product;
  navigateTo: (view: string, param?: any) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, navigateTo }) => {
  const { toggleWishlist, isInWishlist, setQuickViewProduct, addToCart } = useStore();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || '8');
  const [justAdded, setJustAdded] = useState(false);

  const isFavorited = isInWishlist(product.id);
  const isOutOfStock = product.status === 'out_of_stock' || product.stock <= 0;

  // Secondary image preview on hover if available
  const displayImage =
    isHovered && product.images.length > 1 ? product.images[1] : product.thumbnail;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isOutOfStock) return;

    const defaultColor = product.colors[0] || 'Standard';
    const activePrice = product.salePrice || product.price;

    const success = addToCart({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      brand: product.brand,
      image: product.thumbnail,
      color: defaultColor,
      colorCode: '#111111',
      size: selectedSize,
      price: activePrice,
      originalPrice: product.salePrice ? product.price : undefined,
      quantity: 1,
      maxStock: product.sizeStock[selectedSize] ?? product.stock,
    });

    if (success) {
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 1800);
    }
  };

  return (
    <div
      id={`product-card-${product.id}`}
      onClick={() => navigateTo('product-details', product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-white rounded-2xl border border-neutral-200/80 p-3 sm:p-4 hover:border-black hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    >
      {/* Top Badges & Wishlist */}
      <div className="relative w-full aspect-square bg-[#f8f8f8] rounded-xl overflow-hidden flex items-center justify-center p-3 mb-3">
        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {product.discountPercentage && product.discountPercentage > 0 && (
            <span className="px-2 py-0.5 bg-red-600 text-white text-[10px] font-black uppercase rounded tracking-wider shadow-sm">
              {product.discountPercentage}% OFF
            </span>
          )}
          {product.newArrival && (
            <span className="px-2 py-0.5 bg-black text-white text-[10px] font-bold uppercase rounded tracking-wider">
              NEW
            </span>
          )}
          {isOutOfStock && (
            <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 text-[10px] font-bold uppercase rounded">
              OUT OF STOCK
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-2.5 right-2.5 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isFavorited
              ? 'bg-red-50 text-red-600'
              : 'bg-white/80 text-neutral-600 hover:text-black hover:bg-white'
          } shadow-sm`}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current text-red-600' : ''}`} />
        </button>

        {/* Footwear Image */}
        <img
          src={displayImage || 'https://i.postimg.cc/RVjgntmt/Screenshot-2026-09-21-231639.png'}
          alt={product.name}
          onError={(e) => {
            e.currentTarget.src = 'https://i.postimg.cc/RVjgntmt/Screenshot-2026-09-21-231639.png';
          }}
          className="w-full h-full object-contain filter drop-shadow-md transform group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Quick View Button on Desktop Hover */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setQuickViewProduct(product);
          }}
          className="hidden sm:flex absolute bottom-3 left-1/2 -translate-x-1/2 items-center gap-1.5 px-3 py-1.5 bg-white/95 text-black text-xs font-bold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black hover:text-white"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Quick View</span>
        </button>
      </div>

      {/* Product Information */}
      <div className="flex-1 flex flex-col justify-between space-y-2">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            {product.brand}
          </span>
          <h3 className="text-xs sm:text-sm font-bold text-black line-clamp-1 group-hover:underline">
            {product.name}
          </h3>
        </div>

        {/* Available Sizes Pills */}
        <div className="flex items-center gap-1 flex-wrap overflow-hidden h-6">
          {product.sizes.slice(0, 5).map((size) => {
            const stockInThisSize = product.sizeStock[size] ?? 0;
            const isSizeAvailable = stockInThisSize > 0;

            return (
              <button
                key={size}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (isSizeAvailable) setSelectedSize(size);
                }}
                disabled={!isSizeAvailable}
                className={`px-1.5 py-0.5 text-[10px] font-semibold rounded border transition-colors ${
                  !isSizeAvailable
                    ? 'border-neutral-200 text-neutral-300 line-through cursor-not-allowed'
                    : selectedSize === size
                    ? 'bg-black text-white border-black'
                    : 'border-neutral-200 text-neutral-600 hover:border-black'
                }`}
              >
                {size}
              </button>
            );
          })}
          {product.sizes.length > 5 && (
            <span className="text-[10px] text-neutral-400 font-medium">
              +{product.sizes.length - 5}
            </span>
          )}
        </div>

        {/* Pricing & Add Button */}
        <div className="pt-2 border-t border-neutral-100 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm sm:text-base font-black text-black">
              {formatINR(product.salePrice || product.price)}
            </span>
            {product.salePrice && product.salePrice < product.price && (
              <span className="text-xs text-neutral-400 line-through">
                {formatINR(product.price)}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleQuickAdd}
            disabled={isOutOfStock}
            className={`p-2 rounded-xl flex items-center justify-center transition-all ${
              justAdded
                ? 'bg-emerald-600 text-white'
                : isOutOfStock
                ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                : 'bg-neutral-100 text-black hover:bg-black hover:text-white active:scale-95'
            }`}
            aria-label="Add footwear to cart"
          >
            {justAdded ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
