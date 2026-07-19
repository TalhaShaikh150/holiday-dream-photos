import Link from "next/link";
import Image from "next/image";

export default function BrandIntro() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-brand-red font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
              Welcome to the Magic
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-medium text-[#113122] mb-6 leading-tight">
              Creating <span className="italic text-brand-red">Lifelong</span> Holiday Memories
            </h2>
            <div className="w-16 h-[2px] bg-brand-red mx-auto lg:mx-0 mb-8 rounded-full"></div>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
              Holiday Dream Photos is a premium Santa photography company operating across the USA. We believe that meeting Santa shouldn&apos;t mean standing in endless mall lines or feeling rushed.
            </p>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
              We provide an unhurried, highly curated experience in beautifully designed winter wonderlands. Our goal is to bring the true warmth, magic, and joy of Christmas directly to your family.
            </p>
            <Link 
              href="/about"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#113122] text-white font-bold text-xs tracking-[0.2em] hover:bg-[#0a1f15] hover:-translate-y-0.5 transition-all duration-300 uppercase rounded-full shadow-md"
            >
              Our Story
            </Link>
          </div>

          {/* Decorative Image/Element */}
          <div className="flex-1 relative w-full max-w-md lg:max-w-none mx-auto lg:mx-0 hidden md:block">
            <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Note: In production this would be an actual photo of the set, using a placeholder color for now if image is missing */}
              <div className="absolute inset-0 bg-[#113122]/5 mix-blend-multiply" />
              <div className="w-full h-full bg-brand-light flex items-center justify-center text-brand-red/20">
                 <span className="font-cormorant text-9xl italic font-bold">HDP</span>
              </div>
            </div>
            
            {/* Floating decorative element */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red text-2xl font-bold">
                *
              </div>
              <div>
                <p className="font-bold text-[#113122]">Premium Quality</p>
                <p className="text-sm text-gray-500">Unforgettable experiences</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
