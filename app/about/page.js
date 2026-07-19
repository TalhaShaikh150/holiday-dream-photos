export const metadata = {
  title: 'About Us | Holiday Dream Photos',
  description: 'Learn about our brand story and our commitment to authentic Santa experiences.',
};

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-[#F9F7F4] min-h-screen pt-24 pb-20">
      
      {/* Brand Story Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <p className="text-brand-red font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            Our Story
          </p>
          <h1 className="font-bodoni text-5xl md:text-6xl font-bold text-[#113122] mb-6 leading-tight">
            Crafting the <br/> Holiday Dream
          </h1>
          <div className="w-12 h-[1px] bg-brand-red mb-8"></div>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            <p>
              [Brand story content will be placed here once provided by the client. This section will detail the origins of Holiday Dream Photos and the passion behind the brand.]
            </p>
            <p>
              [Additional brand story paragraph focusing on the commitment to quality and the joy of the holiday season.]
            </p>
          </div>
        </div>
        
        <div className="flex-1 w-full relative h-[600px] rounded-sm overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src="/images/hero_cinematic.png"
            alt="Holiday Magic"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Differentiator Section */}
      <section className="py-24 bg-[#113122] text-center px-4 sm:px-6 lg:px-8 mt-16 relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-20">
          <Image
            src="/images/background.jpg"
            alt="Magical Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#113122]/80 mix-blend-multiply" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-brand-red font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            The Holiday Dream Difference
          </p>
          <h2 className="font-bodoni text-4xl md:text-5xl lg:text-6xl font-medium text-[#F9F7F4] mb-8">
            The <span className="italic text-brand-red">Real Bearded</span> Santa
          </h2>
          <div className="w-16 h-[2px] bg-brand-red mx-auto mb-10 rounded-full"></div>
          <p className="text-[#F9F7F4]/90 leading-relaxed text-lg md:text-xl font-light">
            We believe in true holiday magic. That&apos;s why every single one of our Santas is an authentic, real-bearded professional. No fake suits, no cutting corners—just a pure, premium experience dedicated to creating the most believable and enchanting memories for your family.
          </p>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="font-bodoni text-4xl font-bold text-[#113122] mb-16">Meet the Magic Makers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {[1, 2, 3].map(i => (
             <div key={i} className="flex flex-col items-center group">
               <div className="w-56 h-56 rounded-full bg-white shadow-xl border-4 border-gray-100 mb-6 flex items-center justify-center relative overflow-hidden transition-transform duration-500 group-hover:scale-105">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bodoni italic">Photo</div>
               </div>
               <h4 className="font-bodoni font-bold text-[#113122] text-xl mb-1">Team Member Name</h4>
               <p className="text-brand-red text-xs uppercase tracking-[0.1em] font-semibold">Title Placeholder</p>
             </div>
          ))}
        </div>
      </section>

    </div>
  );
}
