import React from 'react';
import { useStore } from '../context/StoreContext';
import {
  User as UserIcon,
  ShoppingBag,
  Heart,
  ShieldCheck,
  LogOut,
  LogIn,
  MapPin,
  Phone,
  Clock,
} from 'lucide-react';

interface AccountPageProps {
  navigateTo: (view: string, param?: any) => void;
}

export const AccountPage: React.FC<AccountPageProps> = ({ navigateTo }) => {
  const { currentUser, loginWithGoogle, logoutUser, isAdmin, settings, orders, wishlist } =
    useStore();

  return (
    <div id="account-page-root" className="min-h-screen bg-[#fafafa] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="pb-4 border-b border-neutral-200">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
            Member Center
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
            MY ACCOUNT & PREFERENCES
          </h1>
        </div>

        {currentUser ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Profile Card */}
            <div className="md:col-span-4 bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm space-y-6 text-center">
              <div className="w-20 h-20 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-black shadow-md">
                {currentUser.name.charAt(0)}
              </div>

              <div>
                <h3 className="text-base font-black text-black uppercase">{currentUser.name}</h3>
                <p className="text-xs text-neutral-500">{currentUser.email}</p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 rounded-full text-[10px] font-bold uppercase tracking-wider text-neutral-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{currentUser.role === 'admin' ? 'Store Administrator' : 'Verified Shopper'}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex flex-col gap-2">
                {isAdmin && (
                  <button
                    type="button"
                    onClick={() => navigateTo('admin')}
                    className="w-full py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Open Admin Panel</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={logoutUser}
                  className="w-full py-2.5 border border-neutral-200 text-neutral-600 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>

            {/* Quick Links & Stats */}
            <div className="md:col-span-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() => navigateTo('my-orders')}
                  className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm cursor-pointer hover:border-black transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <ShoppingBag className="w-5 h-5 text-black" />
                    <span className="text-lg font-black text-black">{orders.length}</span>
                  </div>
                  <h4 className="text-xs font-black uppercase text-black">My Orders</h4>
                  <p className="text-[11px] text-neutral-500">Track current status & history</p>
                </div>

                <div
                  onClick={() => navigateTo('wishlist')}
                  className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm cursor-pointer hover:border-black transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-lg font-black text-black">{wishlist.length}</span>
                  </div>
                  <h4 className="text-xs font-black uppercase text-black">Saved Wishlist</h4>
                  <p className="text-[11px] text-neutral-500">Pairs you have bookmarked</p>
                </div>
              </div>

              {/* Showroom Visit Info */}
              <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm space-y-4">
                <h4 className="text-xs font-black uppercase tracking-wider text-black pb-2 border-b border-neutral-100">
                  {settings.businessName || 'ITALIA SHOES'} Showroom
                </h4>
                <div className="text-xs text-neutral-600 space-y-2">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                    <span>{settings.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span>{settings.phone || '0431 402 0105'}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span>Open • Closes at {settings.closingTime || '9:30 PM'}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 text-center max-w-md mx-auto space-y-6 shadow-sm">
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-black">
              <UserIcon className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-xl font-black uppercase text-black">
                Sign in to {settings.businessName || 'ITALIA SHOES'}
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                Access your orders, saved footwear wishlist, and streamlined in-store or online shopping.
              </p>
            </div>

            <button
              type="button"
              onClick={loginWithGoogle}
              className="w-full py-3.5 px-6 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Continue with Google / Showroom Account</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
