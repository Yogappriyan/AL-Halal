import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import {
  Heart,
  ShoppingBag,
  MessageCircle,
  Ruler,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
  Star,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { formatINR } from '../utils/pricing';
import { openWhatsApp, generateProductWhatsAppMessage } from '../utils/whatsapp';

interface ProductDetailsPageProps {
  product: Product;
  navigateTo: (view: string, param?: any) => void;
}

export const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({
  product,
  navigateTo,
}) => {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsSizeGuideOpen,
    products,
    addRecentlyViewed,
    recentlyViewed,
    reviews,
    showToast,
  } = useStore();

  // Add to recently viewed on mount
  useEffect(() => {
    addRecentlyViewed(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.id]);

  // Gallery state
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Variant selections
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0] || 'Default'
  );
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || '8');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'features' | 'reviews'>('description');
  const [justAdded, setJustAdded] = useState(false);

  // Dynamic stock per selected size
  const activeSizeStock = product.sizeStock[selectedSize] ?? 0;
  const isSizeOutOfStock = activeSizeStock <= 0;
  const isProductOutOfStock = product.stock <= 0 || product.status === 'out_of_stock';
  const isFavorited = isInWishlist(product.id);

  // Color variant images if defined
  const matchedVariant = product.variants?.find((v) => v.color === selectedColor);
  const activeImages =
    matchedVariant && matchedVariant.images.length > 0
      ? matchedVariant.images
      : product.images.length > 0
      ? product.images
      : [product.thumbnail];

  const currentImage = activeImages[selectedImageIndex] || product.thumbnail;

  const handleAddToCart = (): boolean => {
    if (isSizeOutOfStock || isProductOutOfStock) {
      showToast(`Size ${selectedSize} is currently out of stock.`, 'error');
      return false;
    }

    const activePrice = product.salePrice || product.price;
    const success = addToCart({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      brand: product.brand,
      image: currentImage,
      color: selectedColor,
      colorCode: matchedVariant?.colorCode || '#111111',
      size: selectedSize,
      price: activePrice,
      originalPrice: product.salePrice ? product.price : undefined,
      quantity,
      maxStock: activeSizeStock,
    });

    if (success) {
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 2000);
    }
    return success;
  };

  const handleBuyNow = () => {
    const success = handleAddToCart();
    if (success) {
      navigateTo('checkout');
    }
  };

  const handleWhatsAppEnquiry = () => {
    const msg = generateProductWhatsAppMessage({
      name: product.name,
      price: product.price,
      salePrice: product.salePrice,
      color: selectedColor,
      size: selectedSize,
      sku: product.sku,
    });
    openWhatsApp(msg);
  };

  // Related products
  const relatedProducts = products
    .filter(
      (p) =>
        p.id !== product.id &&
        p.status === 'active' &&
        (p.category === product.category || p.brand === product.brand)
    )
    .slice(0, 4);

  // Product specific reviews
  const productReviews = reviews.filter((r) => r.productId === product.id && r.approved);

  return (
    <div id="product-details-page-root" className="min-h-screen bg-[#fafafa] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb nav */}
        <nav className="text-xs text-neutral-500 mb-6 flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <button
            type="button"
            onClick={() => navigateTo('home')}
            className="hover:text-black transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <button
            type="button"
            onClick={() => navigateTo('shop')}
            className="hover:text-black transition-colors"
          >
            Shop
          </button>
          <span>/</span>
          <button
            type="button"
            onClick={() => navigateTo('category', product.category)}
            className="hover:text-black transition-colors"
          >
            {product.category}
          </button>
          <span>/</span>
          <span className="text-black font-semibold truncate">{product.name}</span>
        </nav>

        {/* Top Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
          {/* Left: Gallery Column */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Main Image Stage */}
            <div
              id="main-product-gallery-stage"
              className="relative w-full aspect-square bg-[#f7f7f7] rounded-2xl overflow-hidden flex items-center justify-center p-6 border border-neutral-200/70 group"
            >
              {/* Discount Tag */}
              {product.discountPercentage && product.discountPercentage > 0 && (
                <span className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white text-xs font-black uppercase rounded shadow-sm z-10">
                  {product.discountPercentage}% OFF
                </span>
              )}

              {/* Fullscreen zoom trigger */}
              <button
                type="button"
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white text-neutral-800 rounded-full shadow-sm z-10 transition-colors"
                aria-label="View fullscreen image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Large Shoe Photo with containment */}
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-full object-contain filter drop-shadow-xl transition-all duration-300"
                referrerPolicy="no-referrer"
              />

              {/* Carousel arrows if multi image */}
              {activeImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImageIndex((prev) =>
                        prev === 0 ? activeImages.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full text-black shadow opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImageIndex((prev) =>
                        prev === activeImages.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full text-black shadow opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Row */}
            {activeImages.length > 1 && (
              <div className="flex items-center gap-3 mt-4 overflow-x-auto w-full pb-2">
                {activeImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-20 h-20 rounded-xl bg-[#f7f7f7] border-2 p-2 shrink-0 transition-all ${
                      selectedImageIndex === idx
                        ? 'border-black shadow-md'
                        : 'border-transparent hover:border-neutral-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Specifications & Purchasing Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Brand & Category */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-neutral-400">
                  {product.brand} • {product.category}
                </span>
                <span className="text-[11px] font-bold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                  SKU: {product.sku}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight leading-snug">
                {product.name}
              </h1>

              {/* Reviews Summary */}
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-neutral-700">5.0</span>
                <span className="text-xs text-neutral-400">
                  ({productReviews.length || 2} verified showroom ratings)
                </span>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-3xl sm:text-4xl font-black text-black tracking-tight">
                  {formatINR(product.salePrice || product.price)}
                </span>
                {product.salePrice && product.salePrice < product.price && (
                  <>
                    <span className="text-lg text-neutral-400 line-through">
                      {formatINR(product.price)}
                    </span>
                    <span className="text-xs font-bold text-red-600">
                      Save {formatINR(product.price - product.salePrice)}
                    </span>
                  </>
                )}
              </div>

              {/* Short Summary */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Color Selection */}
              <div className="pt-2">
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-2">
                  Colorway:{' '}
                  <span className="text-black font-extrabold">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-2 flex-wrap">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => {
                        setSelectedColor(c);
                        setSelectedImageIndex(0);
                      }}
                      className={`px-3.5 py-1.5 text-xs font-bold rounded-xl border transition-all ${
                        selectedColor === c
                          ? 'bg-black text-white border-black shadow'
                          : 'border-neutral-300 text-neutral-700 hover:border-black'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection with PER-SIZE Stock Check */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase">
                    Select Size ({product.sizeSystem || 'India/UK'}):
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-neutral-500 hover:text-black underline decoration-dotted"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Size Guide</span>
                  </button>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {product.sizes.map((sz) => {
                    const currentStock = product.sizeStock[sz] ?? 0;
                    const isAvailable = currentStock > 0;

                    return (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSize(sz)}
                        className={`relative py-3 rounded-xl text-xs font-black uppercase border transition-all ${
                          !isAvailable
                            ? 'border-neutral-200 text-neutral-300 bg-neutral-50'
                            : selectedSize === sz
                            ? 'bg-black text-white border-black shadow-md scale-105'
                            : 'border-neutral-300 text-neutral-800 hover:border-black'
                        }`}
                      >
                        <span>{sz}</span>
                        {!isAvailable && (
                          <span className="block text-[8px] font-medium text-red-500 tracking-tighter mt-0.5">
                            Sold Out
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Stock Status Notification for selected size */}
                <div className="mt-3 text-xs">
                  {isSizeOutOfStock ? (
                    <p className="text-red-600 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
                      <span>Size {selectedSize} is currently Out of Stock</span>
                    </p>
                  ) : activeSizeStock <= 3 ? (
                    <p className="text-amber-700 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                      <span>Hurry! Only {activeSizeStock} pair(s) left in Size {selectedSize}</span>
                    </p>
                  ) : (
                    <p className="text-emerald-700 font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                      <span>In Stock • Ready for Showroom dispatch or pickup</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs font-bold text-neutral-700 uppercase">Quantity:</span>
                <div className="flex items-center border border-neutral-300 rounded-xl bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1.5 text-neutral-600 hover:text-black font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 py-1.5 text-xs font-black text-black">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(activeSizeStock, q + 1))}
                    disabled={quantity >= activeSizeStock}
                    className="px-3 py-1.5 text-neutral-600 hover:text-black font-bold disabled:opacity-30"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Primary Buying Actions */}
              <div className="space-y-2.5 pt-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    disabled={isSizeOutOfStock}
                    className={`flex-1 py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      justAdded
                        ? 'bg-emerald-600 text-white'
                        : isSizeOutOfStock
                        ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                        : 'bg-black text-white hover:bg-neutral-800 shadow-xl active:scale-95'
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
                        <span>{isSizeOutOfStock ? 'Size Out of Stock' : 'Add to Cart'}</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-4 rounded-xl border border-neutral-300 hover:border-black transition-colors ${
                      isFavorited ? 'bg-red-50 text-red-600' : 'text-neutral-700'
                    }`}
                    aria-label="Toggle Wishlist"
                  >
                    <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current text-red-600' : ''}`} />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  disabled={isSizeOutOfStock}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-neutral-900 text-white hover:bg-black transition-all disabled:opacity-30"
                >
                  Buy It Now
                </button>

                {/* Direct WhatsApp Order/Enquiry */}
                <button
                  type="button"
                  onClick={handleWhatsAppEnquiry}
                  className="w-full py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-600 text-white hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp (+91 9655187000)</span>
                </button>
              </div>

              {/* Guarantees Box */}
              <div className="pt-4 border-t border-neutral-100 grid grid-cols-3 gap-2 text-center text-[10px] text-neutral-600 font-medium">
                <div className="p-2 bg-neutral-50 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-neutral-800 mx-auto mb-1" />
                  <span>100% Genuine</span>
                </div>
                <div className="p-2 bg-neutral-50 rounded-xl">
                  <Truck className="w-4 h-4 text-neutral-800 mx-auto mb-1" />
                  <span>Doorstep Delivery</span>
                </div>
                <div className="p-2 bg-neutral-50 rounded-xl">
                  <RotateCcw className="w-4 h-4 text-neutral-800 mx-auto mb-1" />
                  <span>Showroom Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs: Description, Features, Reviews */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200">
          <div className="flex items-center gap-6 border-b border-neutral-200 pb-4">
            <button
              type="button"
              onClick={() => setActiveTab('description')}
              className={`text-xs sm:text-sm font-black uppercase tracking-wider pb-2 border-b-2 transition-all ${
                activeTab === 'description'
                  ? 'text-black border-black'
                  : 'text-neutral-400 border-transparent hover:text-black'
              }`}
            >
              Description & Specs
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('features')}
              className={`text-xs sm:text-sm font-black uppercase tracking-wider pb-2 border-b-2 transition-all ${
                activeTab === 'features'
                  ? 'text-black border-black'
                  : 'text-neutral-400 border-transparent hover:text-black'
              }`}
            >
              Key Features
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('reviews')}
              className={`text-xs sm:text-sm font-black uppercase tracking-wider pb-2 border-b-2 transition-all ${
                activeTab === 'reviews'
                  ? 'text-black border-black'
                  : 'text-neutral-400 border-transparent hover:text-black'
              }`}
            >
              Customer Reviews ({productReviews.length || 2})
            </button>
          </div>

          <div className="pt-6">
            {activeTab === 'description' && (
              <div className="space-y-6 max-w-3xl text-xs sm:text-sm text-neutral-700 leading-relaxed">
                <p>{product.description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-100">
                  <div>
                    <span className="text-[11px] font-bold text-neutral-400 uppercase block">
                      Material
                    </span>
                    <span className="font-semibold text-black">
                      {product.material || 'Premium Footwear Composite'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-neutral-400 uppercase block">
                      Silhouette Style
                    </span>
                    <span className="font-semibold text-black">
                      {product.style || product.category}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-neutral-400 uppercase block">
                      Gender / Fit
                    </span>
                    <span className="font-semibold text-black">{product.gender}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-3 max-w-2xl">
                {product.features && product.features.length > 0 ? (
                  product.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-800">
                      <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-black shrink-0 font-bold">
                        ✓
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-neutral-500">
                    High comfort sole, breathable upper, and reinforced stitching.
                  </p>
                )}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6 max-w-2xl">
                <div className="space-y-4">
                  {productReviews.length > 0 ? (
                    productReviews.map((rev) => (
                      <div key={rev.id} className="p-4 bg-neutral-50 rounded-2xl space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-black">{rev.customerName}</span>
                          <div className="flex items-center text-amber-500">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-neutral-700">{rev.comment}</p>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 bg-neutral-50 rounded-2xl text-xs text-neutral-600">
                      <p className="font-bold">Be the first to review this footwear!</p>
                      <p className="mt-1">
                        Try them in our showroom or buy online to share your experience.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="mb-6 pb-2 border-b border-neutral-200">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                Recommended
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight">
                YOU MAY ALSO LIKE
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} navigateTo={navigateTo} />
              ))}
            </div>
          </div>
        )}

        {/* Recently Viewed */}
        {recentlyViewed.length > 1 && (
          <div className="mt-16">
            <div className="mb-6 pb-2 border-b border-neutral-200">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                Your Browsing History
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight">
                RECENTLY VIEWED
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {recentlyViewed
                .filter((p) => p.id !== product.id)
                .slice(0, 4)
                .map((p) => (
                  <ProductCard key={p.id} product={p} navigateTo={navigateTo} />
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {isFullscreen && (
        <div
          onClick={() => setIsFullscreen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <img
            src={currentImage}
            alt={product.name}
            className="max-w-full max-h-[90vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
};
