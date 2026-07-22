"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call for auto-reply email (e.g. Resend)
    setTimeout(() => {
      console.log("Form submitted. Future: connect to /api/contact");
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="p-8 border border-[#113122]/10 bg-[#F9F7F4] text-center h-full flex flex-col justify-center">
        <p className="font-bodoni text-2xl text-[#113122] mb-4">Message Received</p>
        <p className="text-gray-600 text-sm">Thank you for reaching out. We have sent a confirmation email to you, and our magic makers will reply shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      
      <div className="relative group">
        <input required type="text" id="name" className="peer w-full bg-transparent border-b border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-brand-red transition-colors placeholder-transparent" placeholder="Name" />
        <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-gray-500 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-red">Name</label>
      </div>

      <div className="relative group">
        <input required type="email" id="email" className="peer w-full bg-transparent border-b border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-brand-red transition-colors placeholder-transparent" placeholder="Email" />
        <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-gray-500 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-red">Email</label>
      </div>
      
      <div className="relative group">
        <input type="tel" id="phone" className="peer w-full bg-transparent border-b border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-brand-red transition-colors placeholder-transparent" placeholder="Phone" />
        <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-gray-500 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-red">Phone (Optional)</label>
      </div>

      <div className="relative group pt-4">
        <textarea required id="message" rows="5" className="peer w-full bg-transparent border-b border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-brand-red transition-colors placeholder-transparent resize-none" placeholder="Message"></textarea>
        <label htmlFor="message" className="absolute left-0 top-0 text-xs text-gray-500 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-xs peer-focus:text-brand-red">How can we help?</label>
      </div>

      <button disabled={loading} type="submit" className="w-full px-8 py-4 bg-[#113122] text-white uppercase tracking-[0.2em] text-xs font-bold rounded-sm shadow-md hover:bg-black hover:shadow-lg transition-all mt-4 disabled:opacity-70">
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
