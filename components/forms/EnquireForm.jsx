"use client";

import { useState } from "react";

export default function EnquireForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted. Future: connect to email backend.");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 border border-[#113122]/10 bg-[#F9F7F4] text-center">
        <p className="font-bodoni text-2xl text-[#113122] mb-4">Thank You</p>
        <p className="text-gray-600 text-sm">Your enquiry has been received. Our magic makers will be in touch shortly.</p>
      </div>
    );
  }

  return (
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
          <select required defaultValue="" className="w-full bg-transparent border-b border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-brand-red transition-colors">
            <option value="" disabled>Select an option</option>
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
  );
}
