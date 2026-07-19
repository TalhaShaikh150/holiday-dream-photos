"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted. Future: connect to email backend.");
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F9F7F4] min-h-screen pt-24 pb-20">
      
      {/* Top Banner / Hero area could go here, but a clean split layout is very editorial */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Contact Info Column */}
        <div className="flex-1 lg:sticky lg:top-32 w-full">
          <p className="text-brand-red font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            Get in Touch
          </p>
          <h1 className="font-bodoni text-5xl md:text-6xl font-bold text-[#113122] mb-6 leading-tight">
            We&apos;re Here <br/> to Help
          </h1>
          <div className="w-12 h-[1px] bg-brand-red mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-xl">
            Have a question about our packages, locations, or the magic we bring to every experience? Reach out to our dedicated team of elves—we&apos;d love to hear from you.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                <span className="text-brand-red text-xs">✉</span>
              </div>
              <div>
                <h4 className="font-bodoni font-bold text-[#113122] text-xl mb-1">Email</h4>
                <a href="mailto:hello@holidaydreamphotos.com" className="text-gray-600 hover:text-brand-red transition-colors">hello@holidaydreamphotos.com</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                <span className="text-brand-red text-xs">☎</span>
              </div>
              <div>
                <h4 className="font-bodoni font-bold text-[#113122] text-xl mb-1">Phone</h4>
                <a href="tel:1800HOLIDAY" className="text-gray-600 hover:text-brand-red transition-colors">1-800-HOLIDAY</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                <span className="text-brand-red text-xs">⌂</span>
              </div>
              <div>
                <h4 className="font-bodoni font-bold text-[#113122] text-xl mb-1">Headquarters</h4>
                <p className="text-gray-600 leading-relaxed">North Pole Corporate Center<br/>Suite 1225<br/>Snowville, NP 00000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="flex-1 w-full bg-white p-10 sm:p-14 rounded-sm shadow-xl border border-gray-100">
          <h3 className="font-bodoni text-3xl font-bold text-[#113122] mb-8">Send a Message</h3>
          
          {submitted ? (
            <div className="p-8 border border-[#113122]/10 bg-[#F9F7F4] text-center">
              <p className="font-bodoni text-2xl text-[#113122] mb-4">Message Sent</p>
              <p className="text-gray-600 text-sm">Thank you for reaching out. We will respond as soon as possible.</p>
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
              
              <div className="relative group">
                <input type="tel" id="phone" className="peer w-full bg-transparent border-b border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-brand-red transition-colors placeholder-transparent" placeholder="Phone" />
                <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-gray-500 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-red">Phone (Optional)</label>
              </div>

              <div className="relative group pt-4">
                <textarea required id="message" rows="5" className="peer w-full bg-transparent border-b border-gray-300 py-2 text-gray-900 focus:outline-none focus:border-brand-red transition-colors placeholder-transparent resize-none" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-0 top-0 text-xs text-gray-500 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-xs peer-focus:text-brand-red">How can we help?</label>
              </div>

              <button type="submit" className="w-full px-8 py-4 bg-[#113122] text-white uppercase tracking-[0.2em] text-xs font-bold rounded-sm shadow-md hover:bg-[#1a4a33] hover:shadow-lg transition-all mt-4">
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
