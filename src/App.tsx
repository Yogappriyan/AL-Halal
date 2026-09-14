import React, { useState, useEffect } from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { QuickViewModal } from './components/QuickViewModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { ToastContainer } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderSuccessPage } from './pages/OrderSuccessPage';
import { WishlistPage } from './pages/WishlistPage';
import { MyOrdersPage } from './pages/MyOrdersPage';
import { AccountPage } from './pages/AccountPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { Product, Order } from './types';

function AppContent() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [viewParam, setViewParam] = useState<any>(null);

  const navigateTo = (view: string, param?: any) => {
    setCurrentView(view);
    setViewParam(param ?? null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render view
  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'shop':
        return <ShopPage navigateTo={navigateTo} />;
      case 'category':
        return <ShopPage initialCategory={viewParam as string} navigateTo={navigateTo} />;
      case 'product-details':
        return viewParam ? (
          <ProductDetailsPage product={viewParam as Product} navigateTo={navigateTo} />
        ) : (
          <ShopPage navigateTo={navigateTo} />
        );
      case 'cart':
        return <CartPage navigateTo={navigateTo} />;
      case 'checkout':
        return <CheckoutPage navigateTo={navigateTo} />;
      case 'order-success':
        return viewParam ? (
          <OrderSuccessPage order={viewParam as Order} navigateTo={navigateTo} />
        ) : (
          <HomePage navigateTo={navigateTo} />
        );
      case 'wishlist':
        return <WishlistPage navigateTo={navigateTo} />;
      case 'my-orders':
        return <MyOrdersPage navigateTo={navigateTo} />;
      case 'account':
        return <AccountPage navigateTo={navigateTo} />;
      case 'about':
        return <AboutPage navigateTo={navigateTo} />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-[#111111] antialiased selection:bg-black selection:text-white">
      {/* Top Announcements */}
      <AnnouncementBar />

      {/* Sticky Header with Sliding Drawer & Search */}
      <Header currentView={currentView} navigateTo={navigateTo} />

      {/* Main Dynamic View with Smooth Transitions */}
      <main className="flex-1 w-full">{renderCurrentView()}</main>

      {/* Footer */}
      <Footer navigateTo={navigateTo} />

      {/* Mobile Sticky Bottom Navigation */}
      <MobileBottomNav currentView={currentView} navigateTo={navigateTo} />

      {/* Modals & Overlays */}
      <QuickViewModal navigateTo={navigateTo} />
      <SizeGuideModal />
      <ToastContainer />
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}
