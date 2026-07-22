import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";

export const metadata = {
  title: 'Join Our Team | Holiday Dream Photos',
  description: 'Join the Holiday Dream Photos team as a real-bearded Santa, elf, or set manager.',
};

export default function HiringPage() {
  return (
    <div className="bg-[#F9F7F4] min-h-screen flex items-center justify-center">
      
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full py-32 lg:py-40">
        
        {/* Subtle background decoration */}
        <div className="absolute top-10 left-10 text-[#113122]/5">
          <Star size={120} />
        </div>
        <div className="absolute bottom-10 right-10 text-brand-red/5">
          <Star size={80} />
        </div>

        <div className="bg-white p-10 md:p-16 lg:p-20 rounded-sm shadow-2xl border border-gray-100 text-center relative z-10">
          <div className="w-16 h-16 bg-[#113122]/5 rounded-full flex items-center justify-center mx-auto mb-8">
            <Star className="text-[#113122]" size={32} />
          </div>
          
          <p className="text-brand-red font-semibold uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
            Careers
          </p>
          <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl font-bold text-[#113122] mb-8 leading-tight">
            Join the Holiday Dream Photos Team
          </h1>
          <div className="w-16 h-[2px] bg-[#113122] mx-auto mb-8 rounded-sm"></div>
          
          <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
            We are always looking for magical individuals to join our growing family. Whether you are an authentic, real-bearded Santa, a joyful elf, or a meticulous set manager, we would love to hear from you.
          </p>
          
          {/* External Link to Hiring Platform */}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-[#113122] text-white uppercase tracking-[0.2em] text-sm font-bold rounded-sm shadow-xl hover:bg-brand-red transition-all"
          >
            View Open Positions
            <ExternalLink size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <p className="text-xs text-gray-400 mt-4 uppercase tracking-widest">
            Link to external hiring platform
          </p>
        </div>

      </section>

    </div>
  );
}
