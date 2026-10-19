import React from 'react';
import { useStore } from '../context/StoreContext';
import { Phone, MessageCircle, MapPin, ArrowRight, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface StoreShowroomSectionProps {
  navigateTo: (view: string, param?: any) => void;
}

export const StoreShowroomSection: React.FC<StoreShowroomSectionProps> = ({ navigateTo }) => {
  const { settings } = useStore();
  const businessName = settings.businessName || 'ITALIA SHOES';
  const phone = settings.phone || '0431 402 0105';

  const handleWhatsAppEnquiry = () => {
    if (settings.whatsapp) {
      openWhatsApp(
        `Hello ${businessName}, I would like to enquire about your showroom location, store timings, and latest footwear inventory.`,
        settings.whatsapp
      );
    }
  };

  return (
    <section id="showroom-experience-section" className="py-16 sm:py-24 bg-[#111111] text-white relative overflow-hidden">
      {/* Background glow & subtle overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-800/40 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-[11px] font-bold tracking-widest text-neutral-300 uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Shoe Store & Retail Showroom</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.1]">
              VISIT OUR STORE <br />
              <span className="text-neutral-400">{businessName}</span>
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Step into our physical footwear showroom in Tiruchirappalli to explore our curated shoe displays of
              running shoes, casual loafers, sandals, and formal styles. Try on your preferred sizes with
              knowledgeable in-store assistance.
            </p>

            <div className="space-y-3 pt-2 text-sm text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Store Address:</p>
                  <p className="text-neutral-400 text-xs sm:text-sm">{settings.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Store Hours:</p>
                  <p className="text-neutral-400 text-xs sm:text-sm">Open • Closes at {settings.closingTime || '9:30 PM'}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Services Offered:</p>
                  <p className="text-neutral-400 text-xs sm:text-sm">In-store shopping • Direct delivery</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Store Phone:</p>
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-white font-semibold mt-0.5">
                    <a href={`tel:${phone}`} className="hover:underline">
                      {phone}
                    </a>
                    {settings.phone2 && (
                      <>
                        <span>•</span>
                        <a href={`tel:${settings.phone2}`} className="hover:underline">
                          {settings.phone2}
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={`tel:${phone}`}
                className="px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store ({phone})</span>
              </a>

              {settings.whatsapp && (
                <button
                  type="button"
                  onClick={handleWhatsAppEnquiry}
                  className="px-6 py-3 bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-500 transition-colors flex items-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </button>
              )}

              {settings.googleMapsUrl && (
                <a
                  href={settings.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-neutral-800 border border-neutral-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-700 transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Visual Column: Showroom Wall Display Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&q=80"
                alt={`${businessName} Showroom Wall Displays`}
                className="w-full h-80 sm:h-[450px] object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    EXPLORE FOOTWEAR SELECTION
                  </p>
                  <p className="text-[11px] text-neutral-300">Browse models in-store or order for delivery.</p>
                </div>
                <button
                  type="button"
                  onClick={() => navigateTo('shop')}
                  className="px-4 py-2 bg-white text-black text-xs font-bold uppercase rounded-lg hover:bg-neutral-200 transition-colors flex items-center gap-1.5 shrink-0 ml-3"
                >
                  <span>Shop Online</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
