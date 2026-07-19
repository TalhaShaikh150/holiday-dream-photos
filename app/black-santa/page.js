export const metadata = {
  title: 'Black Santa | Holiday Dream Photos',
  description: 'The Home of the Black Santa - Premium holiday photo experience.',
};

import Image from "next/image";
import Link from "next/link";

export default function BlackSantaPage() {
  return (
    <div className="bg-[#fcfbf9] min-h-screen pt-24 pb-20">
      
      {/* Hero Section Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-brand-red font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            Representation Matters
          </p>
          <h1 className="font-bodoni text-5xl md:text-6xl lg:text-7xl font-bold text-[#3a2012] mb-6 leading-tight">
            The Home of the <br className="hidden lg:block"/>
            <span className="italic text-brand-red">Black Santa</span>
          </h1>
          <div className="w-16 h-[2px] bg-brand-red mx-auto lg:mx-0 mb-8 rounded-sm"></div>
          <p className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
            A joyful, premium holiday photo experience built on the belief that every child deserves to see the magic of Christmas reflected in themselves. Create lasting memories with our authentic, real-bearded Black Santa in a breathtaking winter wonderland setting.
          </p>
          <Link 
            href="/book-now" 
            className="inline-block px-10 py-4 bg-brand-red text-white uppercase tracking-[0.2em] text-xs font-bold rounded-sm shadow-md hover:bg-brand-red-dark hover:shadow-lg transition-all"
          >
            Book Your Session
          </Link>
        </div>

        {/* Hero Image */}
        <div className="flex-1 w-full relative h-[500px] lg:h-[700px] rounded-sm overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src="/images/split_black.png"
            alt="Black Santa Experience"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-[#3a2012] text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden mt-12">
         {/* Subtle pattern or texture overlay could go here */}
         <div className="absolute inset-0 opacity-5 bg-[url('/images/hero_wreath.png')] bg-center bg-cover mix-blend-overlay pointer-events-none" />
         
         <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-bodoni text-4xl md:text-5xl lg:text-6xl font-medium text-[#F9F7F4] mb-8">
              A Tradition of Joy
            </h2>
            <div className="w-12 h-[1px] bg-[#F9F7F4]/30 mx-auto mb-10"></div>
            <p className="text-[#F9F7F4]/90 text-lg md:text-xl font-light leading-relaxed">
              We take pride in offering a dedicated space where the Black Santa experience is celebrated with the highest quality and care. From our meticulously crafted sets to our incredibly authentic Santas, every detail is designed to bring you the premium holiday portraits your family deserves.
            </p>
         </div>
      </section>

    </div>
  );
}
