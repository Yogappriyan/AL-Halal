export type Gender = 'Men' | 'Women' | 'Unisex' | 'Kids';

export type ProductStatus = 'active' | 'draft' | 'inactive' | 'out_of_stock';

export type SizeSystem = 'UK' | 'India' | 'EU' | 'US' | 'Standard' | 'Dial' | 'Frame';

export interface ProductVariant {
  color: string;
  colorCode: string;
  images: string[];
  sizes: { [size: string]: number };
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  subcategory?: string;
  gender: Gender;
  description: string;
  shortDescription: string;
  price: number;
  salePrice?: number;
  discountPercentage?: number;
  currency: string;
  images: string[];
  thumbnail: string;
  variants: ProductVariant[];
  sizes: string[];
  colors: string[];
  stock: number;
  sizeStock: { [size: string]: number };
  sizeSystem: SizeSystem;
  material?: string;
  style?: string;
  features?: string[];
  sku: string;
  featured: boolean;
  newArrival: boolean;
  bestSeller: boolean;
  offer: boolean;
  status: ProductStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  productId: string;
  name: string;
  slug: string;
  brand: string;
  image: string;
  color: string;
  colorCode: string;
  size: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  maxStock: number;
}

export interface WishlistItem {
  productId: string;
  product: Product;
  addedAt: string;
}

export type OrderStatus =
  | 'Pending'
  | 'Confirmed'
  | 'Packed'
  | 'Shipped'
  | 'Out for Delivery'
  | 'Delivered'
  | 'Cancelled'
  | 'pending'
  | 'confirmed'
  | 'packed'
  | 'shipped'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled';

export type PaymentMethod = 'cod' | 'online';

export type PaymentStatus = 'pending' | 'paid' | 'completed' | 'failed';

export interface ShippingAddress {
  fullName: string;
  phone: string;
  email?: string;
  street?: string;
  houseStreet?: string;
  area?: string;
  city: string;
  district?: string;
  state: string;
  pincode: string;
  country?: string;
}

export type OrderAddress = ShippingAddress;

export interface OrderItem {
  productId: string;
  name: string;
  brand: string;
  image: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  subtotal: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId?: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  phone?: string;
  email?: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
  totalAmount?: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  status: OrderStatus;
  orderStatus?: OrderStatus;
  shippingAddress: ShippingAddress;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  active: boolean;
  order: number;
  itemCount?: number;
}

export interface Banner {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  active: boolean;
  order: number;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discountType: 'percentage' | 'flat';
  discountValue: number;
  couponCode?: string;
  minSpend?: number;
  startDate: string;
  endDate: string;
  active: boolean;
}

export interface Review {
  id: string;
  productId: string;
  productName: string;
  customerId: string;
  customerName: string;
  rating: number;
  comment: string;
  approved: boolean;
  createdAt: string;
}

export interface BusinessSettings {
  businessName: string;
  tamilName?: string;
  businessType?: string;
  phone?: string;
  phone1: string;
  phone2: string;
  address: string;
  rating?: number;
  reviewCount?: number;
  services?: string[];
  closingTime?: string;
  active?: boolean;
  tagline?: string;
  whatsapp: string;
  businessHours: string;
  instagram: string;
  youtube: string;
  facebook?: string;
  googleMapsUrl?: string;
  email?: string;
  website?: string;
  announcementText: string;
  heroTitle: string;
  heroSubtitle: string;
}

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL?: string | null;
  phoneNumber?: string | null;
  role: 'customer' | 'admin';
  createdAt?: string;
}
