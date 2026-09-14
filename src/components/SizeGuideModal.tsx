import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { X, Ruler, Watch, Glasses, Footprints } from 'lucide-react';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useStore();
  const [activeTab, setActiveTab] = useState<'shoes' | 'watches' | 'sunglasses'>('shoes');

  if (!isSizeGuideOpen) return null;

  const footwearTable = [
    { indiaUk: '6', eu: '39 - 40', us: '7', cm: '24.5 - 25.0 cm' },
    { indiaUk: '7', eu: '40 - 41', us: '8', cm: '25.1 - 25.7 cm' },
    { indiaUk: '8', eu: '42', us: '9', cm: '25.8 - 26.5 cm' },
    { indiaUk: '9', eu: '43', us: '10', cm: '26.6 - 27.2 cm' },
    { indiaUk: '10', eu: '44', us: '11', cm: '27.3 - 28.0 cm' },
    { indiaUk: '11', eu: '45', us: '12', cm: '28.1 - 28.8 cm' },
    { indiaUk: '12', eu: '46', us: '13', cm: '28.9 - 29.5 cm' },
  ];

  const watchTable = [
    { dial: '38 mm', wrist: '14.0 - 15.5 cm', fit: 'Compact / Slim wrists', style: 'Dress / Minimalist' },
    { dial: '40 mm', wrist: '15.5 - 17.0 cm', fit: 'Classic / Universal', style: 'Everyday / Business' },
    { dial: '42 mm', wrist: '17.0 - 18.5 cm', fit: 'Modern standard', style: 'Chronograph / Casual' },
    { dial: '44 mm', wrist: '18.0 - 19.5 cm', fit: 'Prominent & bold', style: 'Diver / Pilot' },
    { dial: '45+ mm', wrist: '19.0+ cm', fit: 'Oversized statement', style: 'G-Shock / Tactical' },
  ];

  const sunglassesTable = [
    { size: 'Small', lens: '47 - 50 mm', bridge: '18 - 20 mm', face: 'Narrow / Petite faces' },
    { size: 'Medium (Standard)', lens: '51 - 54 mm', bridge: '19 - 21 mm', face: 'Average / Fits 85% of people' },
    { size: 'Large', lens: '55 - 58 mm', bridge: '20 - 22 mm', face: 'Broad / Wide cheekbones' },
    { size: 'Extra Large', lens: '59+ mm', bridge: '21 - 23 mm', face: 'Oversized coverage / Sport' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        id="sizeguide-backdrop"
        onClick={() => setIsSizeGuideOpen(false)}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div
        id="sizeguide-modal-content"
        className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl z-10 animate-in zoom-in-95 duration-200"
      >
        <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-neutral-100 rounded-xl text-black">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-black uppercase tracking-tight">
                Size & Measurement Guide
              </h3>
              <p className="text-xs text-neutral-500">Official fit guidelines for all catalog items</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsSizeGuideOpen(false)}
            className="p-2 text-neutral-400 hover:text-black hover:bg-neutral-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-100 rounded-xl mt-4">
          <button
            type="button"
            onClick={() => setActiveTab('shoes')}
            className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'shoes'
                ? 'bg-white text-black shadow-sm'
                : 'text-neutral-500 hover:text-black'
            }`}
          >
            <Footprints className="w-3.5 h-3.5" />
            <span>Footwear</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('watches')}
            className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'watches'
                ? 'bg-white text-black shadow-sm'
                : 'text-neutral-500 hover:text-black'
            }`}
          >
            <Watch className="w-3.5 h-3.5" />
            <span>Watches</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('sunglasses')}
            className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'sunglasses'
                ? 'bg-white text-black shadow-sm'
                : 'text-neutral-500 hover:text-black'
            }`}
          >
            <Glasses className="w-3.5 h-3.5" />
            <span>Sunglasses</span>
          </button>
        </div>

        {/* Tab 1: Footwear */}
        {activeTab === 'shoes' && (
          <>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-neutral-100 text-neutral-900 uppercase font-black tracking-wider">
                    <th className="py-2.5 px-3 rounded-l-lg">India / UK</th>
                    <th className="py-2.5 px-3">EU Size</th>
                    <th className="py-2.5 px-3">US Size</th>
                    <th className="py-2.5 px-3 rounded-r-lg">Foot Length (Approx)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {footwearTable.map((row) => (
                    <tr key={row.indiaUk} className="hover:bg-neutral-50 transition-colors">
                      <td className="py-2 px-3 font-black text-black">Size {row.indiaUk}</td>
                      <td className="py-2 px-3 text-neutral-700 font-semibold">{row.eu}</td>
                      <td className="py-2 px-3 text-neutral-700 font-semibold">{row.us}</td>
                      <td className="py-2 px-3 text-neutral-500">{row.cm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-neutral-50 rounded-xl border border-neutral-200/60 text-xs text-neutral-600 space-y-1">
              <p className="font-bold text-neutral-900">How to measure your foot:</p>
              <p>
                Stand against a wall on a sheet of paper. Mark your longest toe. Measure the length in cm. If you are between sizes, we suggest taking the next size up for comfort.
              </p>
            </div>
          </>
        )}

        {/* Tab 2: Watches */}
        {activeTab === 'watches' && (
          <>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-neutral-100 text-neutral-900 uppercase font-black tracking-wider">
                    <th className="py-2.5 px-3 rounded-l-lg">Dial Diameter</th>
                    <th className="py-2.5 px-3">Recommended Wrist</th>
                    <th className="py-2.5 px-3">Fit Profile</th>
                    <th className="py-2.5 px-3 rounded-r-lg">Typical Archetype</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {watchTable.map((row) => (
                    <tr key={row.dial} className="hover:bg-neutral-50 transition-colors">
                      <td className="py-2 px-3 font-black text-black">{row.dial}</td>
                      <td className="py-2 px-3 text-neutral-700 font-semibold">{row.wrist}</td>
                      <td className="py-2 px-3 text-neutral-700">{row.fit}</td>
                      <td className="py-2 px-3 text-neutral-500">{row.style}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-neutral-50 rounded-xl border border-neutral-200/60 text-xs text-neutral-600 space-y-1">
              <p className="font-bold text-neutral-900">Wrist measurement advice:</p>
              <p>
                Wrap a flexible measuring tape or strip of paper snugly around your wrist bone. If your wrist is under 17cm, 38-42mm dials offer the most balanced proportion.
              </p>
            </div>
          </>
        )}

        {/* Tab 3: Sunglasses */}
        {activeTab === 'sunglasses' && (
          <>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-neutral-100 text-neutral-900 uppercase font-black tracking-wider">
                    <th className="py-2.5 px-3 rounded-l-lg">Frame Size</th>
                    <th className="py-2.5 px-3">Lens Width</th>
                    <th className="py-2.5 px-3">Bridge Width</th>
                    <th className="py-2.5 px-3 rounded-r-lg">Recommended Face Shape</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {sunglassesTable.map((row) => (
                    <tr key={row.size} className="hover:bg-neutral-50 transition-colors">
                      <td className="py-2 px-3 font-black text-black">{row.size}</td>
                      <td className="py-2 px-3 text-neutral-700 font-semibold">{row.lens}</td>
                      <td className="py-2 px-3 text-neutral-700">{row.bridge}</td>
                      <td className="py-2 px-3 text-neutral-500">{row.face}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-neutral-50 rounded-xl border border-neutral-200/60 text-xs text-neutral-600 space-y-1">
              <p className="font-bold text-neutral-900">Finding your frame dimensions:</p>
              <p>
                Check the inside temple arm of any existing well-fitting eyewear (e.g. 54[]18 140). The first number represents lens width in mm. Medium (51-54mm) fits almost all facial structures.
              </p>
            </div>
          </>
        )}

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={() => setIsSizeGuideOpen(false)}
            className="px-6 py-2.5 bg-black text-white text-xs font-bold uppercase rounded-xl hover:bg-neutral-800 transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
