import React from 'react';
import { useStore } from '../context/StoreContext';
import { Instagram, Youtube, ExternalLink } from 'lucide-react';

export const SocialInstagramSection: React.FC = () => {
  const { settings } = useStore();

  const socialGallery = [
    {
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
      caption: 'Air Sprint Pro Series on display in showroom #alhalalfootwear',
    },
    {
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80',
      caption: 'Urban Flex Casuals ready for weekend strolls #alhalalfoot_truck',
    },
    {
      image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=600&q=80',
      caption: 'All-terrain comfort sandals for summer days #footwearshowroom',
    },
    {
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80',
      caption: 'Featherlight lifestyle foam clogs now in store #alhalal',
    },
  ];

  return (
    <section id="social-instagram-section" className="py-16 bg-[#fafafa] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-neutral-200 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>Official Social Handles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase">
              FOLLOW @{settings.instagram || 'alhalalfoot_truck'}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://instagram.com/${settings.instagram || 'alhalalfoot_truck'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Follow on Instagram</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </a>

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
          {socialGallery.map((item, index) => (
            <a
              key={index}
              href={`https://instagram.com/${settings.instagram || 'alhalalfoot_truck'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-neutral-200 shadow-sm block"
            >
              <img
                src={item.image}
                alt="AL-HALAL Social Showcase"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <Instagram className="w-5 h-5 text-white mb-2" />
                <p className="text-xs font-medium line-clamp-2">{item.caption}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
