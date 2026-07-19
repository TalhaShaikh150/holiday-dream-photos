"use client";

import { useState } from "react";

export default function PrivateEventsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Future: trigger auto-reply email and send to client email
  };

  return (
    <div className="bg-brand-light min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Info */}
        <div>
          <h1 className="font-cormorant text-5xl font-bold text-[#113122] mb-6">Private Events & Corporate Bookings</h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Bring the magic of Holiday Dream Photos to your next private party, corporate event, or community gathering. Our authentic, real-bearded Santas provide a premium, unforgettable experience for guests of all ages.
          </p>
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mt-8">
            Event Photography Placeholder
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-cormorant text-3xl font-bold text-[#113122] mb-6">Enquire Now</h3>
          
          {submitted ? (
            <div className="p-4 bg-green-50 text-green-800 rounded-md">
              Thank you! Your enquiry has been received. We will be in touch shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input required type="text" className="w-full border border-gray-300 rounded-md p-2 focus:ring-brand-red focus:border-brand-red outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input required type="email" className="w-full border border-gray-300 rounded-md p-2 focus:ring-brand-red focus:border-brand-red outline-none" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-md p-2 focus:ring-brand-red focus:border-brand-red outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                  <select required className="w-full border border-gray-300 rounded-md p-2 focus:ring-brand-red focus:border-brand-red outline-none bg-white">
                    <option>Corporate Party</option>
                    <option>Private Party</option>
                    <option>Community Event</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input required type="date" className="w-full border border-gray-300 rounded-md p-2 focus:ring-brand-red focus:border-brand-red outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea required rows="4" className="w-full border border-gray-300 rounded-md p-2 focus:ring-brand-red focus:border-brand-red outline-none"></textarea>
              </div>

              <button type="submit" className="w-full px-8 py-3 bg-brand-red text-white uppercase tracking-widest text-sm font-bold rounded-full hover:bg-brand-red-dark transition-colors">
                Submit Enquiry
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
