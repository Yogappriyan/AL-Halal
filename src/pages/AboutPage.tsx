import React from 'react';
import { useStore } from '../context/StoreContext';
import { StoreShowroomSection } from '../components/StoreShowroomSection';
import { WhyShopSection } from '../components/WhyShopSection';
import { Store, Truck, Phone, Star, MapPin, Clock } from 'lucide-react';

interface AboutPageProps {
  navigateTo: (view: string, param?: any) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigateTo }) => {
  const { settings } = useStore();
  const businessName = settings.businessName || 'ITALIA SHOES';
  const phone = settings.phone || '0431 402 0105';

  return (
    <div id="about-page-root" className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="bg-[#111111] text-white py-16 sm:py-24 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
            {settings.businessType || 'Shoe Store'} • Tiruchirappalli
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            ABOUT {businessName}
          </h1>
          <p className="text-xs sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Quality footwear showroom serving customers with comprehensive selections of men's, women's, sports, and casual footwear.
          </p>
        </div>
      </div>

      {/* Overview section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-sm text-neutral-700 leading-relaxed">
        <div className="border-l-4 border-black pl-4">
          <h2 className="text-2xl font-black uppercase text-black tracking-tight">
            {businessName}
          </h2>
          <p className="text-xs text-neutral-500 font-semibold uppercase mt-1">
            Shoe Store in Tiruchirappalli, Tamil Nadu
          </p>
        </div>

        <p>
          <strong>{businessName}</strong> is a dedicated shoe store located at Kings Square Complex, Thillai Nagar Main Road, Tennur, Tiruchirappalli. We provide footwear for daily wear, active training, formal requirements, and relaxed lifestyle comfort.
        </p>

        <p>
          Customers can visit our physical showroom to browse the latest models, confirm size fits, and experience our friendly customer service. We also offer direct delivery services for customers ordering online or via phone helpline.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
          <div className="p-6 bg-[#fafafa] rounded-2xl border border-neutral-200 text-center space-y-2">
            <Store className="w-8 h-8 text-black mx-auto" />
            <h3 className="font-black text-black uppercase text-xs">In-Store Shopping</h3>
            <p className="text-xs text-neutral-500">Visit our Kings Square Complex showroom to try sizes in person.</p>
          </div>
          <div className="p-6 bg-[#fafafa] rounded-2xl border border-neutral-200 text-center space-y-2">
            <Truck className="w-8 h-8 text-black mx-auto" />
            <h3 className="font-black text-black uppercase text-xs">Direct Delivery</h3>
            <p className="text-xs text-neutral-500">Prompt delivery available across Tiruchirappalli and beyond.</p>
          </div>
          <div className="p-6 bg-[#fafafa] rounded-2xl border border-neutral-200 text-center space-y-2">
            <Star className="w-8 h-8 text-amber-500 mx-auto" />
            <h3 className="font-black text-black uppercase text-xs">3.7 / 5 Star Rating</h3>
            <p className="text-xs text-neutral-500">Based on 259 verified customer ratings and reviews.</p>
          </div>
        </div>

        {/* Store Quick Facts */}
        <div className="mt-8 p-6 bg-neutral-100 rounded-2xl border border-neutral-200">
          <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">
            Store Information at a Glance
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-700">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-black">Address: </span>
                <span>{settings.address}</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-black">Helpline: </span>
                <a href={`tel:${phone}`} className="font-semibold text-black hover:underline">{phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-black">Hours: </span>
                <span>Open • Closes at {settings.closingTime || '9:30 PM'}</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Store className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-black">Services: </span>
                <span>In-store shopping, Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Showroom & Why Shop */}
      <StoreShowroomSection navigateTo={navigateTo} />
      <WhyShopSection />
    </div>
  );
};
