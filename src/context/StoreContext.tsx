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
  cleanOldFirestoreDataAndSyncSettings: () => Promise<{ success: boolean; message: string; details: string[] }>;
  approveReview: (reviewId: string) => void;
  deleteReview: (reviewId: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const CATALOG_SCHEMA_VERSION = 'v2_italia_shoes_catalog_postimg_64';

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Immediate migration: purge all old AL-HALAL localStorage keys
  useEffect(() => {
    try {
      const oldKeys = [
        'alhalal_version',
        'alhalal_products',
        'alhalal_categories',
        'alhalal_banners',
        'alhalal_offers',
        'alhalal_settings',
        'alhalal_cart',
        'alhalal_wishlist',
        'alhalal_orders',
        'alhalal_recent',
        'alhalal_reviews',
        'alhalal_user',
      ];
      oldKeys.forEach((k) => localStorage.removeItem(k));
    } catch {
      // Ignore
    }
  }, []);

  // Persistent or default state
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const version = localStorage.getItem('italia_shoes_version');
      const saved = localStorage.getItem('italia_shoes_products');
      if (version === CATALOG_SCHEMA_VERSION && saved) {
        const parsed = JSON.parse(saved);
        if (
          Array.isArray(parsed) &&
          parsed.length >= 64 &&
          !parsed.some((p: any) => p.brand === 'AL-HALAL' || p.brand === 'AL-HALAL SPORT') &&
          !parsed.some((p: any) => p.thumbnail?.includes('unsplash'))
        ) {
          return parsed;
        }
      }
      localStorage.setItem('italia_shoes_version', CATALOG_SCHEMA_VERSION);
      localStorage.setItem('italia_shoes_products', JSON.stringify(demoProducts));
      return demoProducts;
    } catch {
      return demoProducts;
    }
  });

  // Auto-upgrade product storage if old unsplash links are detected
  useEffect(() => {
    try {
      const saved = localStorage.getItem('italia_shoes_products');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (
          !Array.isArray(parsed) ||
          parsed.length < 64 ||
          parsed.some(
            (p: any) =>
              p.thumbnail?.includes('unsplash') ||
              p.images?.some((img: string) => img.includes('unsplash'))
          )
        ) {
          setProducts(demoProducts);
          localStorage.setItem('italia_shoes_products', JSON.stringify(demoProducts));
          localStorage.setItem('italia_shoes_version', CATALOG_SCHEMA_VERSION);
        }
      }
    } catch {
      // Ignore
    }
  }, []);

  const [categories, setCategories] = useState<Category[]>(() => {
    try {
      const version = localStorage.getItem('italia_shoes_version');
      const saved = localStorage.getItem('italia_shoes_categories');
      if (version === CATALOG_SCHEMA_VERSION && saved) {
        const parsed = JSON.parse(saved);
        if (
          Array.isArray(parsed) &&
          parsed.length > 0 &&
          !parsed.some((c: any) => c.slug === 'branded-watches')
        ) {
          return parsed;
        }
      }
      localStorage.setItem('italia_shoes_categories', JSON.stringify(initialCategories));
      return initialCategories;
    } catch {
      return initialCategories;
    }
  });

  const [banners, setBanners] = useState<Banner[]>(() => {
    try {
      const version = localStorage.getItem('italia_shoes_version');
      const saved = localStorage.getItem('italia_shoes_banners');
      if (version === CATALOG_SCHEMA_VERSION && saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0]?.title?.includes('ITALIA')) {
          return parsed;
        }
      }
      localStorage.setItem('italia_shoes_banners', JSON.stringify(initialBanners));
      return initialBanners;
    } catch {
      return initialBanners;
    }
  });

  const [offers, setOffers] = useState<Offer[]>(() => {
    try {
      const saved = localStorage.getItem('italia_shoes_offers');
      return saved ? JSON.parse(saved) : initialOffers;
    } catch {
      return initialOffers;
    }
  });

  const [settings, setSettings] = useState<BusinessSettings>(() => {
    try {
      const saved = localStorage.getItem('italia_shoes_settings');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.businessName === 'ITALIA SHOES') {
          return {
            ...parsed,
            tamilName: '',
            announcementText: (parsed.announcementText || '')
              .replace(/[\u0B80-\u0BFF]+/g, '')
              .replace(/•\s*•/g, '•')
              .replace(/\s+/g, ' ')
              .trim(),
          };
        }
      }
      return initialSettings;
    } catch {
      return initialSettings;
    }
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('italia_shoes_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('italia_shoes_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('italia_shoes_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [recentlyViewedIds, setRecentlyViewedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('italia_shoes_recent');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem('italia_shoes_reviews');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
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
    try {
      const saved = localStorage.getItem('italia_shoes_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
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
    localStorage.setItem('italia_shoes_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('italia_shoes_categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('italia_shoes_banners', JSON.stringify(banners));
  }, [banners]);

  useEffect(() => {
    localStorage.setItem('italia_shoes_offers', JSON.stringify(offers));
  }, [offers]);

  useEffect(() => {
    localStorage.setItem('italia_shoes_settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('italia_shoes_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('italia_shoes_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('italia_shoes_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('italia_shoes_recent', JSON.stringify(recentlyViewedIds));
  }, [recentlyViewedIds]);

  useEffect(() => {
    localStorage.setItem('italia_shoes_reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('italia_shoes_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('italia_shoes_user');
    }
  }, [user]);

  // Firebase Auth sync if configured
  useEffect(() => {
    if (isFirebaseConfigured && auth) {
      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: User | null) => {
        if (firebaseUser) {
          let role: 'customer' | 'admin' = 'customer';
          try {
            if (db) {
              const adminDocRef = doc(db, 'admins', firebaseUser.uid);
              // Firestore check if admin document exists
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

  // Firebase Firestore real-time sync for settings/business if configured
  useEffect(() => {
    if (isFirebaseConfigured && db) {
      try {
        const businessDocRef = doc(db, 'settings', 'business');
        const unsub = onSnapshot(businessDocRef, (snap) => {
          if (snap.exists()) {
            const data = snap.data();
            if (data.businessName === 'ITALIA SHOES') {
              setSettings((prev) => ({
                ...prev,
                ...data,
                tamilName: '',
                announcementText: (data.announcementText || '')
                  .replace(/[\u0B80-\u0BFF]+/g, '')
                  .replace(/•\s*•/g, '•')
                  .replace(/\s+/g, ' ')
                  .trim(),
              }));
            }
          }
        });
        return () => unsub();
      } catch (err) {
        console.warn('Firestore settings listener error:', err);
      }
    }
  }, []);

  // Cart calculations
  const cartCount = cart.reduce((acc, it) => acc + it.quantity, 0);
  const cartSubtotal = cart.reduce((acc, it) => acc + it.price * it.quantity, 0);

  const cartDiscount = appliedCoupon
    ? appliedCoupon.discountType === 'percentage'
      ? Math.round((cartSubtotal * appliedCoupon.discountValue) / 100)
      : Math.min(appliedCoupon.discountValue, cartSubtotal)
    : 0;

  const cartShippingFee = cartSubtotal > 1499 || cartCount === 0 ? 0 : 99;
  const cartTotal = Math.max(0, cartSubtotal - cartDiscount + cartShippingFee);

  // Cart Actions
  const addToCart = (item: CartItem): boolean => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) return false;

    const sizeStock = product.sizeStock?.[item.size] ?? product.stock ?? 10;
    const existingIndex = cart.findIndex(
      (c) => c.productId === item.productId && c.color === item.color && c.size === item.size
    );

    const currentInCart = existingIndex > -1 ? cart[existingIndex].quantity : 0;
    if (currentInCart + item.quantity > sizeStock) {
      showToast(`Cannot add more. Only ${sizeStock} pairs available in size ${item.size}.`, 'error');
      return false;
    }

    if (existingIndex > -1) {
      setCart((prev) => {
        const copy = [...prev];
        copy[existingIndex].quantity += item.quantity;
        return copy;
      });
    } else {
      setCart((prev) => [...prev, item]);
    }

    showToast(`Added ${item.name} (${item.size}) to cart`, 'success');
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
    const maxStock = product?.sizeStock?.[size] ?? product?.stock ?? 99;

    if (quantity > maxStock) {
      showToast(`Only ${maxStock} units currently available in showroom stock.`, 'error');
      return;
    }

    setCart((prev) =>
      prev.map((c) =>
        c.productId === productId && c.color === color && c.size === size
          ? { ...c, quantity }
          : c
      )
    );
  };

  const removeFromCart = (productId: string, color: string, size: string) => {
    setCart((prev) =>
      prev.filter(
        (c) => !(c.productId === productId && c.color === color && c.size === size)
      )
    );
    showToast('Removed item from shopping cart', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyCoupon = (code: string): boolean => {
    const cleanCode = code.trim().toUpperCase();
    const found = offers.find((o) => o.couponCode === cleanCode && o.active);
    if (!found) {
      showToast('Invalid or expired coupon code.', 'error');
      return false;
    }

    if (found.minSpend && cartSubtotal < found.minSpend) {
      showToast(`Coupon requires minimum order of ₹${found.minSpend.toLocaleString('en-IN')}`, 'error');
      return false;
    }

    setAppliedCoupon(found);
    showToast(`Coupon "${cleanCode}" applied successfully!`, 'success');
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
      const next = exists ? prev.filter((id) => id !== productId) : [...prev, productId];
      showToast(
        exists ? 'Removed from saved wishlist' : 'Saved to footwear wishlist',
        'info'
      );
      return next;
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  // Recently Viewed
  const addRecentlyViewed = (product: Product) => {
    setRecentlyViewedIds((prev) => {
      const filtered = prev.filter((id) => id !== product.id);
      return [product.id, ...filtered].slice(0, 8);
    });
  };

  const recentlyViewed = recentlyViewedIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  // Orders
  const createOrder = async (
    orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt' | 'orderStatus'>
  ): Promise<Order> => {
    const orderNumber = 'IS-' + Math.floor(100000 + Math.random() * 900000);
    const newOrder: Order = {
      ...orderData,
      id: 'ord-' + Date.now().toString(),
      orderNumber,
      orderStatus: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Deduct stock locally
    setProducts((prev) =>
      prev.map((prod) => {
        const orderedItem = orderData.items.find((it) => it.productId === prod.id);
        if (!orderedItem) return prod;

        const currentStock = prod.sizeStock?.[orderedItem.size] || 0;
        const newSizeStock = {
          ...prod.sizeStock,
          [orderedItem.size]: Math.max(0, currentStock - orderedItem.quantity),
        };
        const updatedTotal = Object.values(newSizeStock).reduce(
          (acc: number, q: unknown) => acc + (typeof q === 'number' ? q : Number(q) || 0),
          0
        );
        return {
          ...prod,
          sizeStock: newSizeStock,
          stock: updatedTotal,
        };
      })
    );

    // Save to orders state
    setOrders((prev) => [newOrder, ...prev]);

    // Save to Firestore if available
    if (isFirebaseConfigured && db) {
      try {
        await setDoc(doc(db, 'orders', newOrder.id), newOrder);
      } catch (err) {
        console.error('Firestore save order error:', err);
      }
    }

    clearCart();
    setAppliedCoupon(null);
    return newOrder;
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status, updatedAt: new Date().toISOString() } : o))
    );
    if (isFirebaseConfigured && db) {
      try {
        setDoc(doc(db, 'orders', orderId), { status, updatedAt: new Date().toISOString() }, { merge: true });
      } catch (e) {
        console.error(e);
      }
    }
    showToast(`Order status updated to ${status.toUpperCase()}`, 'success');
  };

  // Auth Handlers
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
        showToast(`Welcome, ${fbUser.displayName || 'Customer'}!`, 'success');
      } catch (err: any) {
        console.error('Google Sign-In Error:', err);
        showToast('Google Sign-In cancelled or unavailable.', 'error');
      }
    } else {
      const demoUser: UserProfile = {
        uid: 'is-cust-001',
        email: 'customer@italiashoes.com',
        displayName: 'Customer',
        role: 'customer',
      };
      setUser(demoUser);
      showToast('Signed in as Customer (Showroom Demo)', 'success');
    }
  };

  const demoAdminLogin = (asAdmin: boolean = true) => {
    if (asAdmin) {
      const adminUser: UserProfile = {
        uid: 'is-admin-master',
        email: 'admin@italiashoes.com',
        displayName: 'ITALIA SHOES Administrator',
        role: 'admin',
      };
      setUser(adminUser);
      showToast('Signed in as Store Administrator. Full inventory controls active.', 'success');
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
    if (isFirebaseConfigured && db) {
      try {
        setDoc(doc(db, 'products', product.id), product);
      } catch (e) {
        console.error(e);
      }
    }
    showToast(`Product "${product.name}" created!`, 'success');
  };

  const updateProduct = (productOrId: Product | string, updates?: Partial<Product>) => {
    setProducts((prev) => {
      let nextProducts: Product[];
      if (typeof productOrId === 'string') {
        nextProducts = prev.map((p) => {
          if (p.id === productOrId) {
            const updated = { ...p, ...updates };
            // Ensure thumbnail and images are cleanly synchronized
            if (updates?.images && updates.images.length > 0) {
              updated.images = updates.images;
              updated.thumbnail = updates.thumbnail || updates.images[0];
            } else if (updates?.thumbnail) {
              const prevImgs = p.images || [];
              const replaced = prevImgs.map((img) => (img === p.thumbnail ? updates.thumbnail! : img));
              if (!replaced.includes(updates.thumbnail)) {
                replaced.unshift(updates.thumbnail);
              }
              updated.images = replaced;
              updated.thumbnail = updates.thumbnail;
            }

            if (updated.variants && updated.variants.length > 0) {
              updated.variants = updated.variants.map((v) => ({
                ...v,
                images: updated.images,
              }));
            }

            if (isFirebaseConfigured && db) {
              try {
                setDoc(doc(db, 'products', p.id), updated, { merge: true });
              } catch (e) {
                console.error(e);
              }
            }
            return updated;
          }
          return p;
        });
      } else {
        nextProducts = prev.map((p) => {
          if (p.id === productOrId.id) {
            const updated = { ...p, ...productOrId };
            if (productOrId.images && productOrId.images.length > 0) {
              updated.images = productOrId.images;
              updated.thumbnail = productOrId.thumbnail || productOrId.images[0];
            } else if (productOrId.thumbnail) {
              const prevImgs = p.images || [];
              const replaced = prevImgs.map((img) => (img === p.thumbnail ? productOrId.thumbnail! : img));
              if (!replaced.includes(productOrId.thumbnail)) {
                replaced.unshift(productOrId.thumbnail);
              }
              updated.images = replaced;
              updated.thumbnail = productOrId.thumbnail;
            }

            if (updated.variants && updated.variants.length > 0) {
              updated.variants = updated.variants.map((v) => ({
                ...v,
                images: updated.images,
              }));
            }

            if (isFirebaseConfigured && db) {
              try {
                setDoc(doc(db, 'products', productOrId.id), updated, { merge: true });
              } catch (e) {
                console.error(e);
              }
            }
            return updated;
          }
          return p;
        });
      }
      try {
        localStorage.setItem('italia_shoes_products', JSON.stringify(nextProducts));
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
    if (isFirebaseConfigured && db) {
      try {
        deleteDoc(doc(db, 'products', productId));
      } catch (e) {
        console.error(e);
      }
    }
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
    if (isFirebaseConfigured && db) {
      try {
        setDoc(doc(db, 'settings', 'business'), newSettings, { merge: true });
      } catch (e) {
        console.error(e);
      }
    }
    showToast('Store settings updated', 'success');
  };

  const resetToDemoCatalog = () => {
    setProducts(demoProducts);
    setCategories(initialCategories);
    setBanners(initialBanners);
    setOffers(initialOffers);
    setSettings(initialSettings);
    setReviews([]);
    showToast('Catalog restored to Italia Shoes footwear inventory', 'info');
  };

  const cleanOldFirestoreDataAndSyncSettings = async (): Promise<{
    success: boolean;
    message: string;
    details: string[];
  }> => {
    const details: string[] = [];

    // Always update local settings
    localStorage.setItem('italia_shoes_settings', JSON.stringify(initialSettings));
    setSettings(initialSettings);
    setProducts(demoProducts);
    setCategories(initialCategories);
    setBanners(initialBanners);
    setOffers(initialOffers);
    setReviews([]);

    if (!isFirebaseConfigured || !db) {
      details.push('Local storage purged of old data and refreshed with ITALIA SHOES information.');
      return {
        success: true,
        message: 'Settings and catalog synchronized to ITALIA SHOES (Local Showroom Mode).',
        details,
      };
    }

    try {
      // 1. Create or update settings/business with the exact required schema:
      const businessSettingsDoc = {
        businessName: 'ITALIA SHOES',
        tamilName: '',
        businessType: 'Shoe Store',
        phone: '0431 402 0105',
        address:
          'M5 - Kings Square Complex, 11th Cross, Thillai Nagar Main Road, Tennur, Tiruchirappalli, Tamil Nadu 620018, India',
        rating: 3.7,
        reviewCount: 259,
        services: ['In-store shopping', 'Delivery'],
        closingTime: '9:30 PM',
        active: true,
        phone1: '0431 402 0105',
        phone2: '+91 431 402 0105',
        businessHours: 'Open • Closes at 9:30 PM',
        announcementText:
          'ITALIA SHOES • SHOE STORE • IN-STORE SHOPPING & DELIVERY • CALL 0431 402 0105',
        heroTitle: 'ITALIA SHOES',
        heroSubtitle:
          'Step into quality footwear for every occasion. Visit our showroom at Kings Square Complex, Tiruchirappalli or shop online for direct delivery.',
        tagline: 'Quality Footwear for Everyday Comfort & Style',
      };

      await setDoc(doc(db, 'settings', 'business'), businessSettingsDoc, { merge: true });
      details.push('Updated doc "settings/business" with official Italia Shoes information.');

      // 2. Audit and clean old AL-HALAL documents across Firestore collections
      const collectionsToAudit = [
        'products',
        'categories',
        'banners',
        'offers',
        'reviews',
        'storeInfo',
        'brands',
        'projects',
      ];

      for (const collName of collectionsToAudit) {
        try {
          const snap = await getDocs(collection(db, collName));
          let deleted = 0;
          for (const d of snap.docs) {
            const data = d.data();
            const id = d.id.toLowerCase();
            const text = JSON.stringify(data).toLowerCase();

            const isOldALHalal =
              id.includes('alhalal') ||
              id.includes('al-halal') ||
              text.includes('al-halal') ||
              text.includes('alhalal') ||
              text.includes('foot station') ||
              text.includes('9655187000') ||
              text.includes('9787536452') ||
              text.includes('branded watches') ||
              text.includes('branded sunglasses');

            if (isOldALHalal) {
              await deleteDoc(doc(db, collName, d.id));
              deleted++;
            }
          }
          if (deleted > 0) {
            details.push(`Cleaned ${deleted} old AL-HALAL document(s) from "${collName}".`);
          }
        } catch (auditErr) {
          console.warn(`Audit check for collection ${collName}:`, auditErr);
        }
      }

      // 3. Seed new Italia Shoes footwear products if collection is empty or has old images
      try {
        const prodSnap = await getDocs(collection(db, 'products'));
        let shouldSeed = prodSnap.empty;
        if (!shouldSeed) {
          const hasUnsplash = prodSnap.docs.some((d) => {
            const data = d.data();
            return (
              data.thumbnail?.includes('unsplash') ||
              data.images?.some((im: string) => im.includes('unsplash'))
            );
          });
          if (hasUnsplash || prodSnap.docs.length < 64) {
            shouldSeed = true;
          }
        }
        if (shouldSeed) {
          for (const p of demoProducts) {
            await setDoc(doc(db, 'products', p.id), p);
          }
          details.push(`Synchronized ${demoProducts.length} Italia Shoes footwear items with verified photos into Firestore.`);
        }
      } catch (e) {
        console.warn('Product seeding in Firestore:', e);
      }

      // 4. Seed new Italia Shoes categories if collection is empty
      try {
        const catSnap = await getDocs(collection(db, 'categories'));
        if (catSnap.empty) {
          for (const c of initialCategories) {
            await setDoc(doc(db, 'categories', c.id), c);
          }
          details.push(`Seeded ${initialCategories.length} footwear categories into Firestore.`);
        }
      } catch (e) {
        console.warn('Category seeding in Firestore:', e);
      }

      showToast('Firestore data cleanup & Italia Shoes sync complete!', 'success');
      return {
        success: true,
        message: 'Firestore business settings and collections successfully updated for ITALIA SHOES.',
        details,
      };
    } catch (err: any) {
      console.error('Firestore cleanup error:', err);
      return {
        success: false,
        message: `Error syncing Firestore: ${err?.message || 'Unknown error'}`,
        details,
      };
    }
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
        cleanOldFirestoreDataAndSyncSettings,
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
