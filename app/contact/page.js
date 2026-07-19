"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Future: trigger auto-reply email
  };

  return (
    <div className="bg-brand-light min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <div>
          <h1 className="font-cormorant text-5xl font-bold text-[#113122] mb-6">Contact Us</h1>
          <p className="text-gray-600 mb-10">
            Have a question about our packages, locations, or experiences? We&apos;re here to help make your holiday magical.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-[#113122] uppercase tracking-wider text-sm mb-1">Email</h4>
              <p className="text-gray-600">hello@holidaydreamphotos.com</p>
            </div>
            <div>
              <h4 className="font-bold text-[#113122] uppercase tracking-wider text-sm mb-1">Phone</h4>
              <p className="text-gray-600">1-800-HOLIDAY</p>
            </div>
            <div>
              <h4 className="font-bold text-[#113122] uppercase tracking-wider text-sm mb-1">Headquarters</h4>
              <p className="text-gray-600">North Pole Corporate Center<br/>Suite 1225<br/>Snowville, NP 00000</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-cormorant text-2xl font-bold text-[#113122] mb-6">Send us a Message</h3>
          
          {submitted ? (
            <div className="p-4 bg-green-50 text-green-800 rounded-md">
              Thank you for contacting us! We&apos;ve received your message and will reply soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input required type="text" className="w-full border border-gray-300 rounded-md p-2 focus:ring-brand-red focus:border-brand-red outline-none" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input required type="email" className="w-full border border-gray-300 rounded-md p-2 focus:ring-brand-red focus:border-brand-red outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full border border-gray-300 rounded-md p-2 focus:ring-brand-red focus:border-brand-red outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea required rows="5" className="w-full border border-gray-300 rounded-md p-2 focus:ring-brand-red focus:border-brand-red outline-none"></textarea>
              </div>

              <button type="submit" className="w-full px-8 py-3 bg-brand-red text-white uppercase tracking-widest text-sm font-bold rounded-full hover:bg-brand-red-dark transition-colors">
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
