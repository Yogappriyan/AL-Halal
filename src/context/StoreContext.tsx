import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  Product,
  Category,
  Banner,
  Offer,
  CartItem,
  Order,
  OrderStatus,
  BusinessSettings,
  UserProfile,
  Review,
} from '../types';
import {
  demoProducts,
  initialCategories,
  initialBanners,
  initialOffers,
  initialSettings,
} from '../data/initialData';
import { auth, googleProvider, isFirebaseConfigured, db } from '../firebase/config';
import { signInWithPopup, signOut as fbSignOut, onAuthStateChanged, User } from 'firebase/auth';
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';

interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface StoreContextType {
  // Catalog
  products: Product[];
  categories: Category[];
  banners: Banner[];
  offers: Offer[];
  reviews: Review[];
  settings: BusinessSettings;
  recentlyViewed: Product[];

  // Cart & Wishlist
  cart: CartItem[];
  wishlist: string[];
  cartCount: number;
  cartSubtotal: number;
  cartDiscount: number;
  cartShippingFee: number;
  cartTotal: number;
  appliedCoupon: Offer | null;

  // Actions
  addToCart: (item: CartItem) => boolean;
  updateCartQuantity: (productId: string, color: string, size: string, quantity: number) => void;
  removeFromCart: (productId: string, color: string, size: string) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  addRecentlyViewed: (product: Product) => void;

  // Orders
  orders: Order[];
  createOrder: (orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt' | 'orderStatus'>) => Promise<Order>;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;

  // Modals & UI
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  isSizeGuideOpen: boolean;
  setIsSizeGuideOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  activeSearchQuery: string;
  setActiveSearchQuery: (query: string) => void;
  toasts: ToastMessage[];
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;

  // Auth & Admin
  user: UserProfile | null;
  isAdmin: boolean;
  loginWithGoogle: () => Promise<void>;
  demoAdminLogin: (asAdmin?: boolean) => void;
  logout: () => Promise<void>;

  // Admin Catalog Management
  addProduct: (product: Product) => void;
  updateProduct: (productOrId: Product | string, updates?: Partial<Product>) => void;
  deleteProduct: (productId: string) => void;
  duplicateProduct: (product: Product) => void;
  updateCategories: (categories: Category[]) => void;
  updateBanners: (banners: Banner[]) => void;
  updateOffers: (offers: Offer[]) => void;
  updateSettings: (settings: BusinessSettings) => void;
  resetToDemoCatalog: () => void;
  approveReview: (reviewId: string) => void;
  deleteReview: (reviewId: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const CATALOG_SCHEMA_VERSION = 'v4_all_postimg_catalog';

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Persistent or default state
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const version = localStorage.getItem('alhalal_version');
      const saved = localStorage.getItem('alhalal_products');
      if (version === CATALOG_SCHEMA_VERSION && saved) {
        const parsed = JSON.parse(saved);
        // Check if watches exist in saved
        if (parsed.some((p: Product) => p.category === 'Branded Watches')) {
          return parsed;
        }
      }
      localStorage.setItem('alhalal_version', CATALOG_SCHEMA_VERSION);
      localStorage.setItem('alhalal_products', JSON.stringify(demoProducts));
      return demoProducts;
    } catch {
      return demoProducts;
    }
  });

  const [categories, setCategories] = useState<Category[]>(() => {
    try {
      const version = localStorage.getItem('alhalal_version');
      const saved = localStorage.getItem('alhalal_categories');
      if (version === CATALOG_SCHEMA_VERSION && saved) {
        const parsed = JSON.parse(saved);
        if (parsed.some((c: Category) => c.name === 'Branded Watches')) {
          return parsed;
        }
      }
      localStorage.setItem('alhalal_categories', JSON.stringify(initialCategories));
      return initialCategories;
    } catch {
      return initialCategories;
    }
  });

  const [banners, setBanners] = useState<Banner[]>(() => {
    try {
      const version = localStorage.getItem('alhalal_version');
      const saved = localStorage.getItem('alhalal_banners');
      if (version === CATALOG_SCHEMA_VERSION && saved) {
        return JSON.parse(saved);
      }
      localStorage.setItem('alhalal_banners', JSON.stringify(initialBanners));
      return initialBanners;
    } catch {
      return initialBanners;
    }
  });

  const [offers, setOffers] = useState<Offer[]>(() => {
    const saved = localStorage.getItem('alhalal_offers');
    return saved ? JSON.parse(saved) : initialOffers;
  });

  const [settings, setSettings] = useState<BusinessSettings>(() => {
    const saved = localStorage.getItem('alhalal_settings');
    return saved ? JSON.parse(saved) : initialSettings;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('alhalal_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('alhalal_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('alhalal_orders');
    return saved ? JSON.parse(saved) : [];
  });

  const [recentlyViewedIds, setRecentlyViewedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('alhalal_recent');
    return saved ? JSON.parse(saved) : [];
  });

  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('alhalal_reviews');
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 'rev-1',
            productId: 'prod-001',
            productName: "Al-Halal Men's Urban Flex Casual Shoe",
            customerId: 'user-01',
            customerName: 'Ahamed R.',
            rating: 5,
            comment: 'Super comfort sole! Fits true to size and looks very premium in person.',
            approved: true,
            createdAt: '2026-03-09T10:00:00.000Z',
          },
          {
            id: 'rev-2',
            productId: 'prod-002',
            productName: 'Air Sprint Pro Sports Running Shoe',
            customerId: 'user-02',
            customerName: 'Mohamed Farhan',
            rating: 5,
            comment: 'Best cushioning for morning jogging. The red color accents are bold.',
            approved: true,
            createdAt: '2026-03-10T12:00:00.000Z',
          },
        ];
  });

  // UI state
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSearchQuery, setActiveSearchQuery] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<Offer | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // User state
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('alhalal_user');
    return saved ? JSON.parse(saved) : null;
  });

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('alhalal_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('alhalal_categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('alhalal_banners', JSON.stringify(banners));
  }, [banners]);

  useEffect(() => {
    localStorage.setItem('alhalal_offers', JSON.stringify(offers));
  }, [offers]);

  useEffect(() => {
    localStorage.setItem('alhalal_settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('alhalal_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('alhalal_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('alhalal_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('alhalal_recent', JSON.stringify(recentlyViewedIds));
  }, [recentlyViewedIds]);

  useEffect(() => {
    localStorage.setItem('alhalal_reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('alhalal_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('alhalal_user');
    }
  }, [user]);

  // Firebase Auth sync if configured
  useEffect(() => {
    if (isFirebaseConfigured && auth) {
      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: User | null) => {
        if (firebaseUser) {
          // Check admin collection in Firestore if possible
          let role: 'customer' | 'admin' = 'customer';
          try {
            if (db) {
              const adminDoc = doc(db, 'admins', firebaseUser.uid);
              // Listen or check
            }
          } catch (e) {
            console.error(e);
          }
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL,
            role,
          });
        }
      });
      return () => unsubscribe();
    }
  }, []);

  // Cart Calculations
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  let cartDiscount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountType === 'percentage') {
      cartDiscount = Math.round((cartSubtotal * appliedCoupon.discountValue) / 100);
    } else {
      cartDiscount = appliedCoupon.discountValue;
    }
  }

  // Free shipping above 999
  const cartShippingFee = cartSubtotal > 999 || cartCount === 0 ? 0 : 80;
  const cartTotal = Math.max(0, cartSubtotal - cartDiscount + cartShippingFee);

  // Cart Actions
  const addToCart = (item: CartItem): boolean => {
    // Check product stock in inventory
    const product = products.find((p) => p.id === item.productId);
    if (!product) {
      showToast('Product not found in catalogue', 'error');
      return false;
    }

    const availableSizeStock = product.sizeStock[item.size] ?? 0;
    const existing = cart.find(
      (ci) => ci.productId === item.productId && ci.color === item.color && ci.size === item.size
    );

    const currentQtyInCart = existing ? existing.quantity : 0;
    if (currentQtyInCart + item.quantity > availableSizeStock) {
      showToast(
        `Size ${item.size} stock limit reached. Only ${availableSizeStock} available.`,
        'error'
      );
      return false;
    }

    setCart((prev) => {
      const idx = prev.findIndex(
        (ci) => ci.productId === item.productId && ci.color === item.color && ci.size === item.size
      );
      if (idx > -1) {
        const next = [...prev];
        next[idx].quantity += item.quantity;
        return next;
      }
      return [...prev, item];
    });

    showToast(`Added ${item.name} (${item.color}, Size ${item.size}) to cart!`, 'success');
    return true;
  };

  const updateCartQuantity = (
    productId: string,
    color: string,
    size: string,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeFromCart(productId, color, size);
      return;
    }

    const product = products.find((p) => p.id === productId);
    const availableStock = product?.sizeStock[size] ?? 10;

    if (quantity > availableStock) {
      showToast(`Only ${availableStock} pair(s) available in size ${size}`, 'error');
      return;
    }

    setCart((prev) =>
      prev.map((item) => {
        if (item.productId === productId && item.color === color && item.size === size) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const removeFromCart = (productId: string, color: string, size: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.productId === productId && item.color === color && item.size === size)
      )
    );
    showToast('Item removed from cart', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyCoupon = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    const found = offers.find(
      (o) => o.active && o.couponCode && o.couponCode.toUpperCase() === clean
    );
    if (!found) {
      showToast('Invalid or expired coupon code.', 'error');
      return false;
    }

    if (found.minSpend && cartSubtotal < found.minSpend) {
      showToast(`Coupon requires minimum cart subtotal of ₹${found.minSpend}`, 'error');
      return false;
    }

    setAppliedCoupon(found);
    showToast(`Coupon ${found.couponCode} applied successfully!`, 'success');
    return true;
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed', 'info');
  };

  // Wishlist
  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from Wishlist', 'info');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to Wishlist', 'success');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  // Recently Viewed
  const addRecentlyViewed = (product: Product) => {
    setRecentlyViewedIds((prev) => {
      const filtered = prev.filter((id) => id !== product.id);
      return [product.id, ...filtered].slice(0, 6);
    });
  };

  const recentlyViewed = recentlyViewedIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  // Orders
  const createOrder = async (
    orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt' | 'orderStatus'>
  ): Promise<Order> => {
    const orderId = 'AH-' + Date.now().toString().slice(-6) + '-' + Math.floor(100 + Math.random() * 900);
    const now = new Date().toISOString();

    const newOrder: Order = {
      ...orderData,
      id: orderId,
      orderStatus: 'Pending',
      createdAt: now,
      updatedAt: now,
    };

    // Deduct stock for ordered items
    setProducts((prevProducts) => {
      return prevProducts.map((p) => {
        const itemOrdered = orderData.items.find((it) => it.productId === p.id);
        if (!itemOrdered) return p;

        const updatedSizeStock = { ...p.sizeStock };
        const currentSizeStock = updatedSizeStock[itemOrdered.size] ?? 0;
        const newSizeStock = Math.max(0, currentSizeStock - itemOrdered.quantity);
        updatedSizeStock[itemOrdered.size] = newSizeStock;

        const totalStock = (Object.values(updatedSizeStock) as number[]).reduce(
          (sum: number, val: number) => sum + val,
          0
        );

        return {
          ...p,
          sizeStock: updatedSizeStock,
          stock: totalStock,
          status: totalStock === 0 ? 'out_of_stock' : p.status,
          updatedAt: now,
        };
      });
    });

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    setAppliedCoupon(null);

    // Save to Firestore if available
    if (isFirebaseConfigured && db) {
      try {
        await setDoc(doc(db, 'orders', orderId), newOrder);
      } catch (e) {
        console.warn('Firestore order sync fallback:', e);
      }
    }

    showToast(`Order #${orderId} confirmed successfully!`, 'success');
    return newOrder;
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    const now = new Date().toISOString();
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, orderStatus: status, updatedAt: now } : o))
    );

    if (isFirebaseConfigured && db) {
      try {
        updateDoc(doc(db, 'orders', orderId), {
          orderStatus: status,
          updatedAt: now,
        });
      } catch (e) {
        console.warn(e);
      }
    }

    showToast(`Order #${orderId} status updated to ${status}`, 'success');
  };

  // Auth Methods
  const loginWithGoogle = async () => {
    if (isFirebaseConfigured && auth) {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        const fbUser = result.user;
        setUser({
          uid: fbUser.uid,
          email: fbUser.email,
          displayName: fbUser.displayName,
          photoURL: fbUser.photoURL,
          role: 'customer',
        });
        showToast(`Welcome back, ${fbUser.displayName || 'Customer'}!`, 'success');
      } catch (err: any) {
        console.error('Google Sign-In Error:', err);
        showToast('Google Sign-In cancelled or unavailable.', 'error');
      }
    } else {
      // Fallback demo account login
      const demoUser: UserProfile = {
        uid: 'alhalal-cust-001',
        email: 'customer@alhalalfoot.com',
        displayName: 'Ahamed Showroom Guest',
        role: 'customer',
      };
      setUser(demoUser);
      showToast('Logged in as Showroom Customer (Local Mode)', 'success');
    }
  };

  const demoAdminLogin = (asAdmin: boolean = true) => {
    if (asAdmin) {
      const adminUser: UserProfile = {
        uid: 'alhalal-admin-master',
        email: 'storeadmin@alhalalfoot.com',
        displayName: 'AL-HALAL Store Manager',
        role: 'admin',
      };
      setUser(adminUser);
      showToast('Logged in as Store Administrator. Full inventory controls active.', 'success');
    } else {
      setUser(null);
      showToast('Signed out of admin session.', 'info');
    }
  };

  const logout = async () => {
    if (isFirebaseConfigured && auth) {
      try {
        await fbSignOut(auth);
      } catch (e) {
        console.error(e);
      }
    }
    setUser(null);
    showToast('Signed out successfully', 'info');
  };

  const isAdmin = Boolean(user && user.role === 'admin');

  // Admin Catalog Management
  const addProduct = (product: Product) => {
    setProducts((prev) => [product, ...prev]);
    showToast(`Product "${product.name}" created!`, 'success');
  };

  const updateProduct = (productOrId: Product | string, updates?: Partial<Product>) => {
    setProducts((prev) => {
      let nextProducts: Product[];
      if (typeof productOrId === 'string') {
        nextProducts = prev.map((p) => {
          if (p.id === productOrId) {
            const updated = { ...p, ...updates };
            if (updates?.thumbnail && (!updates.images || updates.images.length === 0)) {
              updated.images = [updates.thumbnail];
            }
            return updated;
          }
          return p;
        });
      } else {
        nextProducts = prev.map((p) => (p.id === productOrId.id ? { ...p, ...productOrId } : p));
      }
      try {
        localStorage.setItem('alhalal_products', JSON.stringify(nextProducts));
      } catch (err) {
        console.warn('LocalStorage error while saving products:', err);
      }
      return nextProducts;
    });
    const pName = typeof productOrId === 'string' ? updates?.name || 'Product' : productOrId.name;
    showToast(`Product "${pName}" updated successfully!`, 'success');
  };

  const deleteProduct = (productId: string) => {
    const p = products.find((item) => item.id === productId);
    setProducts((prev) => prev.filter((item) => item.id !== productId));
    showToast(`Product "${p?.name || productId}" deleted`, 'info');
  };

  const duplicateProduct = (product: Product) => {
    const copy: Product = {
      ...product,
      id: 'prod-' + Date.now().toString().slice(-6),
      name: `${product.name} (Copy)`,
      sku: `${product.sku}-CPY`,
      slug: `${product.slug}-copy-${Date.now().toString().slice(-4)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setProducts((prev) => [copy, ...prev]);
    showToast(`Duplicated ${product.name}`, 'success');
  };

  const updateCategories = (newCats: Category[]) => {
    setCategories(newCats);
    showToast('Categories updated', 'success');
  };

  const updateBanners = (newBanners: Banner[]) => {
    setBanners(newBanners);
    showToast('Banners updated', 'success');
  };

  const updateOffers = (newOffers: Offer[]) => {
    setOffers(newOffers);
    showToast('Offers updated', 'success');
  };

  const updateSettings = (newSettings: BusinessSettings) => {
    setSettings(newSettings);
    showToast('Store settings updated', 'success');
  };

  const resetToDemoCatalog = () => {
    setProducts(demoProducts);
    setCategories(initialCategories);
    setBanners(initialBanners);
    setOffers(initialOffers);
    setSettings(initialSettings);
    showToast('Catalogue restored to demo showroom inventory', 'info');
  };

  const approveReview = (reviewId: string) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === reviewId ? { ...r, approved: true } : r))
    );
    showToast('Review approved', 'success');
  };

  const deleteReview = (reviewId: string) => {
    setReviews((prev) => prev.filter((r) => r.id !== reviewId));
    showToast('Review deleted', 'info');
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        categories,
        banners,
        offers,
        reviews,
        settings,
        recentlyViewed,
        cart,
        wishlist,
        cartCount,
        cartSubtotal,
        cartDiscount,
        cartShippingFee,
        cartTotal,
        appliedCoupon,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        applyCoupon,
        removeCoupon,
        toggleWishlist,
        isInWishlist,
        addRecentlyViewed,
        orders,
        createOrder,
        updateOrderStatus,
        quickViewProduct,
        setQuickViewProduct,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        activeSearchQuery,
        setActiveSearchQuery,
        toasts,
        showToast,
        user,
        isAdmin,
        loginWithGoogle,
        demoAdminLogin,
        logout,
        addProduct,
        updateProduct,
        deleteProduct,
        duplicateProduct,
        updateCategories,
        updateBanners,
        updateOffers,
        updateSettings,
        resetToDemoCatalog,
        approveReview,
        deleteReview,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
