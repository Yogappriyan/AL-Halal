import React from 'react';
import { useStore } from '../context/StoreContext';
import { StoreShowroomSection } from '../components/StoreShowroomSection';
import { WhyShopSection } from '../components/WhyShopSection';
import { ShieldCheck, Award, HeartHandshake } from 'lucide-react';

interface AboutPageProps {
  navigateTo: (view: string, param?: any) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigateTo }) => {
  return (
    <div id="about-page-root" className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="bg-[#111111] text-white py-16 sm:py-24 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
            Our Footwear Heritage
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            ABOUT AL-HALAL A FOOT STATION
          </h1>
          <p className="text-xs sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Crafting a seamless blend between our brick-and-mortar showroom and a modern online
            footwear marketplace.
          </p>
        </div>
      </div>

      {/* Story section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-sm text-neutral-700 leading-relaxed">
        <h2 className="text-2xl font-black uppercase text-black tracking-tight">
          Everyday Footwear for Every Walk of Life
        </h2>
        <p>
          Founded as a physical footwear station, <strong>AL-HALAL A FOOT STATION</strong> has
          grown into a premier showroom renowned for its extensive wall displays of sports shoes,
          casual loafers, lifestyle sneakers, clogs, and comfortable sandals.
        </p>
        <p>
          We believe that genuine comfort and durable materials shouldn’t come with excessive
          markups. Every pair on our shelves is hand-inspected for arch support, sole cushioning,
          stitching strength, and true-to-size fit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
          <div className="p-6 bg-[#fafafa] rounded-2xl border border-neutral-200 text-center space-y-2">
            <ShieldCheck className="w-8 h-8 text-black mx-auto" />
            <h3 className="font-black text-black uppercase text-xs">Authenticity Assured</h3>
            <p className="text-xs text-neutral-500">Only verified brand quality footwear.</p>
          </div>
          <div className="p-6 bg-[#fafafa] rounded-2xl border border-neutral-200 text-center space-y-2">
            <Award className="w-8 h-8 text-black mx-auto" />
            <h3 className="font-black text-black uppercase text-xs">Showroom Fitting</h3>
            <p className="text-xs text-neutral-500">Try before you buy in our retail space.</p>
          </div>
          <div className="p-6 bg-[#fafafa] rounded-2xl border border-neutral-200 text-center space-y-2">
            <HeartHandshake className="w-8 h-8 text-black mx-auto" />
            <h3 className="font-black text-black uppercase text-xs">Friendly Support</h3>
            <p className="text-xs text-neutral-500">Direct phone & WhatsApp guidance.</p>
          </div>
        </div>
      </div>

      {/* Showroom & Why Shop */}
      <StoreShowroomSection navigateTo={navigateTo} />
      <WhyShopSection />
    </div>
  );
};
