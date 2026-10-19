import React from 'react';
import { useStore } from '../context/StoreContext';
import { Phone, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const { settings } = useStore();

  return (
    <div
      id="top-announcement-bar"
      className="bg-[#000000] text-[#f5f5f5] text-xs font-medium py-2 px-4 border-b border-neutral-800 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap mx-auto sm:mx-0">
          <Sparkles className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span className="tracking-wider uppercase text-[11px] sm:text-xs font-medium">
            {(settings.announcementText || 'ITALIA SHOES • SHOE STORE • IN-STORE SHOPPING & DELIVERY')
              .replace(/•\s*[\u0B80-\u0BFF\s]+•/g, '•')
              .replace(/[\u0B80-\u0BFF]+/g, '')
              .replace(/\s+/g, ' ')
              .trim()}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-neutral-300 text-[11px] tracking-wide">
          <a
            href={`tel:${settings.phone || settings.phone1 || '0431 402 0105'}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-neutral-400" />
            <span>Store: {settings.phone || settings.phone1 || '0431 402 0105'}</span>
          </a>
          <span className="text-neutral-600">|</span>
          <span className="text-neutral-400">Open • Closes {settings.closingTime || '9:30 PM'}</span>
        </div>
      </div>
    </div>
  );
};
