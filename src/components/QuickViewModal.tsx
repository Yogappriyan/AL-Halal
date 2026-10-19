import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { X, Heart, ShoppingBag, ArrowRight, Check } from 'lucide-react';
import { formatINR } from '../utils/pricing';

interface QuickViewModalProps {
  navigateTo: (view: string, param?: any) => void;
}

interface QuickViewModalContentProps {
  product: any;
  onClose: () => void;
  navigateTo: (view: string, param?: any) => void;
}

const QuickViewModalContent: React.FC<QuickViewModalContentProps> = ({
  product,
  onClose,
  navigateTo,
}) => {
  const { addToCart, toggleWishlist, isInWishlist } = useStore();

  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors?.[0] || 'Standard'
  );
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes?.[0] || '8');
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const activeSizeStock = product.sizeStock?.[selectedSize] ?? 0;
  const isOutOfStock = activeSizeStock <= 0;
  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    const activePrice = product.salePrice || product.price;

    const success = addToCart({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      brand: product.brand,
      image: product.thumbnail,
      color: selectedColor,
      colorCode: '#111111',
      size: selectedSize,
      price: activePrice,
      originalPrice: product.salePrice ? product.price : undefined,
      quantity,
      maxStock: activeSizeStock,
    });

    if (success) {
      setJustAdded(true);
      setTimeout(() => {
        setJustAdded(false);
        onClose();
      }, 1200);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        id="quickview-backdrop"
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div
        id="quickview-modal-content"
        className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl z-10 overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-black hover:bg-neutral-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Product Image Box */}
          <div className="bg-[#f7f7f7] rounded-2xl p-6 flex items-center justify-center aspect-square relative">
            <img
              src={product.thumbnail || 'https://i.postimg.cc/RVjgntmt/Screenshot-2026-09-21-231639.png'}
              alt={product.name}
              onError={(e) => {
                e.currentTarget.src = 'https://i.postimg.cc/RVjgntmt/Screenshot-2026-09-21-231639.png';
              }}
              className="w-full h-full object-contain filter drop-shadow-lg"
              referrerPolicy="no-referrer"
            />
            {product.discountPercentage && (
              <span className="absolute top-3 left-3 px-2 py-0.5 bg-red-600 text-white text-[10px] font-black uppercase rounded">
                {product.discountPercentage}% OFF
              </span>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                {product.brand} • {product.category}
              </span>
              <h3 className="text-lg sm:text-xl font-black text-black uppercase mt-1">
                {product.name}
              </h3>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-black">
                {formatINR(product.salePrice || product.price)}
              </span>
              {product.salePrice && (
                <span className="text-sm text-neutral-400 line-through">
                  {formatINR(product.price)}
                </span>
              )}
            </div>

            {/* Color selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-2">
                  Color: <span className="text-black font-semibold">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-2 flex-wrap">
                  {product.colors.map((color: string) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1 text-xs font-semibold rounded-lg border transition-all ${
                        selectedColor === color
                          ? 'bg-black text-white border-black'
                          : 'border-neutral-200 text-neutral-700 hover:border-black'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase">
                    Select Size ({product.sizeSystem || 'IND'}):
                  </label>
                  <span className="text-[11px] font-medium text-neutral-500">
                    {isOutOfStock ? (
                      <span className="text-red-600 font-bold">Size {selectedSize} Out of Stock</span>
                    ) : (
                      <span className="text-emerald-700 font-bold">{activeSizeStock} in stock</span>
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {product.sizes.map((size: string) => {
                    const hasStock = (product.sizeStock?.[size] ?? 0) > 0;
                    return (
                      <button
                        key={size}
                        type="button"
                        disabled={!hasStock}
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 rounded-xl text-xs font-bold border transition-all ${
                          !hasStock
                            ? 'border-neutral-200 text-neutral-300 line-through cursor-not-allowed bg-neutral-50'
                            : selectedSize === size
                            ? 'bg-black text-white border-black shadow'
                            : 'border-neutral-300 text-neutral-800 hover:border-black'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className={`flex-1 py-3 px-4 font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all ${
                  justAdded
                    ? 'bg-emerald-600 text-white'
                    : isOutOfStock
                    ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-neutral-800 shadow-lg active:scale-95'
                }`}
              >
                {justAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>{isOutOfStock ? 'Unavailable' : 'Add to Cart'}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => toggleWishlist(product.id)}
                className={`p-3 rounded-xl border border-neutral-300 hover:border-black transition-colors ${
                  isFavorited ? 'text-red-600 bg-red-50' : 'text-neutral-700'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current text-red-600' : ''}`} />
              </button>
            </div>

            {/* Full Details link */}
            <button
              type="button"
              onClick={() => {
                onClose();
                navigateTo('product-details', product);
              }}
              className="w-full text-center text-xs font-bold text-neutral-600 hover:text-black py-1 flex items-center justify-center gap-1 transition-colors"
            >
              <span>View Full Details & Specifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ navigateTo }) => {
  const { quickViewProduct, setQuickViewProduct } = useStore();

  if (!quickViewProduct) return null;

  return (
    <QuickViewModalContent
      product={quickViewProduct}
      onClose={() => setQuickViewProduct(null)}
      navigateTo={navigateTo}
    />
  );
};
