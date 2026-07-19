import Image from "next/image";
import Link from "next/link";

export default function SantaSplit() {
  return (
    <section className="py-24 bg-[#F9F7F4] relative border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-brand-red font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            Our Experiences
          </p>
          <h2 className="font-bodoni text-4xl md:text-5xl lg:text-6xl font-medium text-[#113122] mb-6">
            Choose Your Magic
          </h2>
          <div className="w-12 h-[1px] bg-brand-red mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We are proud to offer two distinct, premium Santa experiences. Select the one that perfectly fits your family&apos;s holiday traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Traditional Santa Card */}
          <div className="flex flex-col group">
            <div className="relative h-[450px] w-full overflow-hidden rounded-sm shadow-xl border-4 border-white mb-8">
              <Image
                src="/images/split_traditional.png"
                alt="Traditional Santa Experience"
                fill
                className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
              />
            </div>
            
            <div className="flex flex-col items-start flex-1 px-2">
              <h3 className="font-bodoni text-3xl font-bold text-[#113122] mb-4">
                Traditional Santa
              </h3>
              <p className="text-gray-600 mb-8 flex-1 text-base md:text-lg leading-relaxed">
                The classic, heartwarming Christmas experience featuring our authentic, real-bearded Traditional Santa Claus in a beautifully decorated premium setting.
              </p>
              <Link 
                href="/our-santas" 
                className="inline-flex px-10 py-4 bg-[#113122] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-[#1a4a33] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Black Santa Card */}
          <div className="flex flex-col group md:mt-16">
            <div className="relative h-[450px] w-full overflow-hidden rounded-sm shadow-xl border-4 border-white mb-8">
              <Image
                src="/images/split_black.png"
                alt="Black Santa Experience"
                fill
                className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
              />
            </div>
            
            <div className="flex flex-col items-start flex-1 px-2">
              <h3 className="font-bodoni text-3xl font-bold text-[#113122] mb-4">
                Black Santa
              </h3>
              <p className="text-gray-600 mb-8 flex-1 text-base md:text-lg leading-relaxed">
                Celebrate the magic of representation. The Home of the Black Santa offers a joyful, premium holiday photo experience with our authentic, real-bearded Black Santa.
              </p>
              <Link 
                href="/black-santa" 
                className="inline-flex px-10 py-4 bg-brand-red text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-brand-red-dark transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
