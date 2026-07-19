import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#113122] pt-24 lg:pt-32 pb-8 relative overflow-hidden">
      
      {/* Decorative Wreath - Positioned elegantly off-center */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] opacity-50 pointer-events-none mix-blend-screen">
        <img
          src="/images/hero_wreath.png"
          alt="Decorative Holiday Wreath"
          className="object-contain w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="font-bodoni text-4xl lg:text-5xl font-bold text-[#F9F7F4] mb-6">
              Holiday Dream <span className="italic font-light">Photos</span>
            </h2>
            <p className="text-[#F9F7F4]/70 font-light leading-relaxed max-w-sm mb-8">
              Creating unhurried, magical memories through premium Traditional and Black Santa photo experiences.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#113122] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#113122] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold mb-8">Experiences</h4>
            <div className="flex flex-col gap-4">
              <Link href="/our-santas" className="text-[#F9F7F4]/80 hover:text-brand-red transition-colors font-light">Traditional Santa</Link>
              <Link href="/black-santa" className="text-[#F9F7F4]/80 hover:text-brand-red transition-colors font-light">Black Santa</Link>
              <Link href="/private-events" className="text-[#F9F7F4]/80 hover:text-brand-red transition-colors font-light">Private Events</Link>
              <Link href="/locations" className="text-[#F9F7F4]/80 hover:text-brand-red transition-colors font-light">Locations & Booking</Link>
            </div>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold mb-8">Stay in the Magic</h4>
            <p className="text-[#F9F7F4]/70 font-light text-sm mb-6 max-w-xs">
              Join Santa&apos;s mailing list for early booking access and holiday updates.
            </p>
            <form className="flex w-full max-w-xs border-b border-white/30 pb-2 focus-within:border-brand-red transition-colors">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent w-full outline-none text-[#F9F7F4] placeholder-white/30 text-sm font-light"
              />
              <button type="submit" className="text-brand-red uppercase tracking-widest text-xs font-bold ml-4 hover:text-white transition-colors">
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-white/40 text-xs font-light">
            &copy; {new Date().getFullYear()} Holiday Dream Photos. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white transition-colors text-xs font-light">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 hover:text-white transition-colors text-xs font-light">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
