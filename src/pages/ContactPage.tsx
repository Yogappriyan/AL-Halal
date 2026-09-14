import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const { settings, showToast } = useStore();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      showToast('Please fill all contact fields.', 'error');
      return;
    }
    setSubmitted(true);
    showToast('Your message has been sent to our showroom staff.', 'success');
  };

  return (
    <div id="contact-page-root" className="min-h-screen bg-[#fafafa] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 pb-4 border-b border-neutral-200">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-black uppercase tracking-tight mt-1">
            CONTACT AL-HALAL A FOOT STATION
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1">
            Need sizing advice or looking for a specific model? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Info Card */}
          <div className="lg:col-span-5 bg-black text-white p-8 rounded-3xl shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xl font-black tracking-tight uppercase block">
                  AL-HALAL A FOOT STATION
                </span>
                <span className="text-xs text-neutral-400 uppercase tracking-widest">
                  Footwear Showroom & Store
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Address:</strong>
                    <span>{settings.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Call Lines:</strong>
                    <div className="flex flex-col gap-1 mt-1 text-white font-bold">
                      <a href={`tel:${settings.phone1}`} className="hover:underline">
                        {settings.phone1}
                      </a>
                      <a href={`tel:${settings.phone2}`} className="hover:underline">
                        {settings.phone2}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Showroom Timings:</strong>
                    <span>{settings.businessHours}</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                openWhatsApp(
                  'Hello AL-HALAL A FOOT STATION! I would like to enquire about your footwear collection.',
                  settings.whatsapp
                )
              }
              className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp Enquiry</span>
            </button>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="text-lg font-black uppercase text-black">Message Sent!</h3>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                  Thank you for reaching out to AL-HALAL A FOOT STATION. Our team will get back to
                  you promptly on your phone number.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-black text-white text-xs font-bold uppercase rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-sm font-black uppercase text-black tracking-wider pb-2 border-b border-neutral-100">
                  Send Us an Inquiry
                </h3>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                    Message / Shoe Model of Interest *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the size, style, or query you have..."
                    className="w-full px-4 py-2.5 bg-[#fafafa] border border-neutral-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-800 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
