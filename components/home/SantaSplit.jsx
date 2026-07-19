import Image from "next/image";
import Link from "next/link";

export default function SantaSplit() {
  return (
    <section className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-brand-red font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            Our Experiences
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-medium text-[#113122] mb-6">
            Choose Your Santa Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We are proud to offer two distinct, premium Santa experiences. Select the one that makes your family&apos;s holiday dreams come true.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Traditional Santa Card */}
          <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
            <div className="relative h-80 sm:h-96 w-full overflow-hidden">
              <Image
                src="/images/split_traditional.png"
                alt="Traditional Santa Experience"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="p-10 md:p-14 flex flex-col items-center text-center flex-1">
              <h3 className="font-cormorant text-3xl md:text-4xl font-bold text-[#113122] mb-4">
                Traditional Santa
              </h3>
              <p className="text-gray-600 mb-10 flex-1 text-base md:text-lg leading-relaxed">
                The classic, heartwarming Christmas experience featuring our authentic, real-bearded Traditional Santa Claus in a beautifully decorated premium setting.
              </p>
              <Link 
                href="/our-santas" 
                className="px-10 py-4 bg-brand-red text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-brand-red-dark hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto shadow-md hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Black Santa Card */}
          <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
            <div className="relative h-80 sm:h-96 w-full overflow-hidden">
              <Image
                src="/images/split_black.png"
                alt="Black Santa Experience"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="p-10 md:p-14 flex flex-col items-center text-center flex-1">
              <h3 className="font-cormorant text-3xl md:text-4xl font-bold text-[#113122] mb-4">
                Black Santa
              </h3>
              <p className="text-gray-600 mb-10 flex-1 text-base md:text-lg leading-relaxed">
                Celebrate the magic of representation. The Home of the Black Santa offers a joyful, premium holiday photo experience with our authentic, real-bearded Black Santa.
              </p>
              <Link 
                href="/black-santa" 
                className="px-10 py-4 border-2 border-brand-red bg-transparent text-brand-red text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-brand-red hover:text-white hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
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
