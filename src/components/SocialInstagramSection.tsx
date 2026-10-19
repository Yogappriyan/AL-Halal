import React from 'react';
import { useStore } from '../context/StoreContext';
import { Instagram, Youtube, ExternalLink, Camera } from 'lucide-react';

export const SocialInstagramSection: React.FC = () => {
  const { settings } = useStore();
  const businessName = settings.businessName || 'ITALIA SHOES';

  const showcaseGallery = [
    {
      image: 'https://i.postimg.cc/HkXB0LWj/Screenshot-2026-09-21-231651.png',
      caption: 'Sports running series in vibrant showroom display',
    },
    {
      image: 'https://i.postimg.cc/jSPZ6jqw/Screenshot-2026-09-21-231656.png',
      caption: 'Classic casual canvas sneakers for everyday comfort',
    },
    {
      image: 'https://i.postimg.cc/L8LNks4P/Screenshot-2026-09-21-231700.png',
      caption: 'Ergonomic sandals and slides for all-day support',
    },
    {
      image: 'https://i.postimg.cc/52Ln5t9C/Screenshot-2026-09-21-231703.png',
      caption: 'Ultra-lightweight lifestyle footwear and comfort slip-ons',
    },
  ];

  return (
    <section id="social-showcase-section" className="py-16 bg-[#fafafa] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-neutral-200 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">
              <Camera className="w-4 h-4 text-neutral-700" />
              <span>Showroom Gallery & Updates</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase">
              {settings.instagram ? `FOLLOW @${settings.instagram}` : `${businessName} GALLERY`}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {settings.instagram ? (
              <a
                href={`https://instagram.com/${settings.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Follow on Instagram</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
            ) : null}

            {settings.youtube && (
              <a
                href={settings.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-red-700 transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" />
                <span>YouTube</span>
              </a>
            )}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {showcaseGallery.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-neutral-200 shadow-sm block"
            >
              <img
                src={item.image}
                alt={`${businessName} Gallery`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <p className="text-xs font-medium line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
