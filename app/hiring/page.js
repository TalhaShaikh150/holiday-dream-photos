export const metadata = {
  title: 'Hiring | Holiday Dream Photos',
  description: 'Join the Holiday Dream Photos Team.',
};

import Link from "next/link";

export default function HiringPage() {
  return (
    <div className="bg-[#F9F7F4] min-h-screen pt-24 pb-20 flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center mt-10">
        
        {/* Decorative Element */}
        <div className="w-24 h-24 mx-auto mb-8 opacity-20 bg-[url('/images/hero_wreath.png')] bg-contain bg-center bg-no-repeat"></div>

        <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl font-bold text-[#113122] mb-6 leading-tight">
          Join the <br />Holiday Dream Photos Team
        </h1>
        <div className="w-12 h-[1px] bg-brand-red mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          We are always looking for authentic, real-bearded Santas and enthusiastic elves to help us bring the magic of Christmas to life across the country.
        </p>
        
        <a 
          href="#" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-brand-red text-white uppercase tracking-[0.2em] text-xs font-bold rounded-sm shadow-md hover:bg-brand-red-dark hover:shadow-lg transition-all"
        >
          View Open Positions
        </a>
        <p className="text-xs text-gray-400 mt-4 uppercase tracking-widest">(External Application Portal)</p>
      </div>
    </div>
  );
}
