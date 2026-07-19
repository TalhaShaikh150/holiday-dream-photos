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
            <h2 className="font-bodoni text-4xl md:text-5xl lg:text-6xl font-medium text-[#113122] mb-6 leading-tight">
              Creating <span className="italic text-brand-red">Lifelong</span> Holiday Memories
            </h2>
            <div className="w-16 h-[2px] bg-brand-red mx-auto lg:mx-0 mb-8 rounded-sm"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Holiday Dream Photos is a premium Santa photography company operating across the USA. We believe that meeting Santa shouldn&apos;t mean standing in endless mall lines or feeling rushed.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              We provide an unhurried, highly curated experience in beautifully designed winter wonderlands. Our goal is to bring the true warmth, magic, and joy of Christmas directly to your family.
            </p>
            <Link 
              href="/about"
              className="inline-flex items-center justify-center px-10 py-4 border border-[#113122] text-[#113122] font-semibold text-xs tracking-[0.2em] hover:bg-[#113122] hover:text-white transition-colors uppercase rounded-sm"
            >
              Our Story
            </Link>
          </div>

          {/* Luxury Editorial Image Collage */}
          <div className="flex-1 relative w-full h-[600px] hidden lg:block">
            {/* Background Wreath Accent */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] opacity-15 pointer-events-none z-0">
              <Image
                src="/images/hero_wreath.png"
                alt="Decorative Wreath"
                fill
                className="object-contain"
              />
            </div>

            {/* Main Image 1 (Mall 1) */}
            <div className="absolute top-[10%] left-0 w-[60%] h-[60%] rounded-sm overflow-hidden shadow-2xl z-10 border-4 border-white">
              <Image
                src="/images/mall1.jpg"
                alt="Premium Mall Setup"
                fill
                className="object-cover"
              />
            </div>

            {/* Main Image 2 (Mall 2) */}
            <div className="absolute bottom-[5%] right-[5%] w-[55%] h-[65%] rounded-sm overflow-hidden shadow-2xl z-20 border-4 border-white">
              <Image
                src="/images/mall2.jpg"
                alt="Holiday Experience Setup"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Small Wreath overlapping as a seal */}
            <div className="absolute top-[60%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-30 pointer-events-none drop-shadow-xl">
              <Image
                src="/images/hero_wreath.png"
                alt="Holiday Seal"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
