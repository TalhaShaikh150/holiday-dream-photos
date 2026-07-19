"use client";

import { useState } from "react";
import Image from "next/image";

export default function PrivateEventsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted. Future: connect to email backend.");
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F9F7F4] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Info Column */}
        <div className="flex-1 lg:sticky lg:top-32">
          <p className="text-brand-red font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            Exclusive Experiences
          </p>
          <h1 className="font-bodoni text-5xl md:text-6xl font-bold text-[#113122] mb-6 leading-tight">
            Private Events & <br/> Corporate Bookings
          </h1>
          <div className="w-12 h-[1px] bg-brand-red mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
            Bring the magic of Holiday Dream Photos to your next private party, corporate event, or community gathering. Our authentic, real-bearded Santas provide a premium, unforgettable experience tailored perfectly for your guests.
          </p>
          
          <div className="relative w-full max-w-md aspect-[4/3] rounded-sm overflow-hidden shadow-xl border-4 border-white mt-12 hidden md:block">
            <Image
              src="/images/family_gift.png"
              alt="Holiday Experience"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Form Column */}
        <div className="flex-1 w-full bg-white p-10 sm:p-14 rounded-sm shadow-xl border border-gray-100">
          <h3 className="font-bodoni text-3xl font-bold text-[#113122] mb-8">Enquire Now</h3>
          
          {submitted ? (
            <div className="p-8 border border-[#113122]/10 bg-[#F9F7F4] text-center">
              <p className="font-bodoni text-2xl text-[#113122] mb-4">Thank You</p>
              <p className="text-gray-600 text-sm">Your enquiry has been received. Our magic makers will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative group">
                  <input required type="text" id="name" className="peer w-full bg-transparent border-b border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-brand-red transition-colors placeholder-transparent" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-gray-500 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-red">Name</label>
                </div>
                <div className="relative group">
                  <input required type="email" id="email" className="peer w-full bg-transparent border-b border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-brand-red transition-colors placeholder-transparent" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-gray-500 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-red">Email</label>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative group">
                  <input type="tel" id="phone" className="peer w-full bg-transparent border-b border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-brand-red transition-colors placeholder-transparent" placeholder="Phone" />
                  <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-gray-500 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-red">Phone</label>
                </div>
                <div className="relative">
                  <label className="block text-[0.65rem] text-gray-500 uppercase tracking-wider mb-1">Event Type</label>
                  <select required className="w-full bg-transparent border-b border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-brand-red transition-colors">
                    <option value="" disabled selected>Select an option</option>
                    <option>Corporate Party</option>
                    <option>Private Party</option>
                    <option>Community Event</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <label className="block text-[0.65rem] text-gray-500 uppercase tracking-wider mb-1">Preferred Date</label>
                <input required type="date" className="w-full bg-transparent border-b border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-brand-red transition-colors" />
              </div>

              <div className="relative group pt-4">
                <textarea required id="message" rows="4" className="peer w-full bg-transparent border-b border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-brand-red transition-colors placeholder-transparent resize-none" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-0 top-0 text-xs text-gray-500 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-xs peer-focus:text-brand-red">Tell us about your event</label>
              </div>

              <button type="submit" className="w-full px-8 py-4 bg-brand-red text-white uppercase tracking-[0.2em] text-xs font-bold rounded-sm shadow-md hover:bg-brand-red-dark hover:shadow-lg transition-all mt-4">
                Submit Enquiry
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
