import Link from "next/link";

export default function SantaSplit() {
  return (
    <section className="py-24 lg:py-40 bg-[#F9F7F4] relative border-t border-gray-200/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-32">
          <p className="text-brand-red font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            Our Experiences
          </p>
          <h2 className="font-bodoni text-4xl md:text-5xl lg:text-7xl font-medium text-[#113122] mb-6">
            Choose Your Magic
          </h2>
          <div className="w-16 h-[1px] bg-brand-red mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We are proud to offer two distinct, premium Santa experiences. Select the one that perfectly fits your family&apos;s holiday traditions.
          </p>
        </div>

        {/* Experience 01: Traditional */}
        <div className="relative flex flex-col lg:flex-row items-center mb-32 lg:mb-48 group">
          {/* Image */}
          <div className="w-full lg:w-[65%] relative h-[500px] lg:h-[700px] overflow-hidden shadow-2xl">
            <img 
              src="/images/real_traditional.jpg" 
              alt="Traditional Santa Experience" 
              className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#113122]/10 mix-blend-multiply transition-colors duration-1000 group-hover:bg-transparent" />
          </div>
          
          {/* Overlapping Text Box */}
          <div className="w-[95%] lg:w-[45%] bg-white p-10 lg:p-20 shadow-[0_30px_60px_rgb(0,0,0,0.08)] z-10 lg:-ml-[10%] relative mt-[-80px] lg:mt-0 transition-transform duration-700 ease-out lg:group-hover:-translate-y-4">
            <div className="absolute top-6 left-6 lg:top-10 lg:left-10 text-[6rem] lg:text-[10rem] font-bodoni text-[#F9F7F4] font-bold leading-none pointer-events-none select-none">
              01
            </div>
            <div className="relative z-10">
              <h3 className="font-bodoni text-3xl lg:text-5xl font-bold text-[#113122] mb-6">
                Traditional Santa
              </h3>
              <div className="w-12 h-[2px] bg-brand-red mb-8"></div>
              <p className="text-gray-600 mb-10 text-base lg:text-lg leading-relaxed">
                The classic, heartwarming Christmas experience featuring our authentic, real-bearded Traditional Santa Claus in a beautifully decorated premium setting. Relive the magic of your childhood.
              </p>
              <Link 
                href="/our-santas" 
                className="inline-flex px-10 py-4 bg-[#113122] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-[#1a4a33] transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Experience 02: Black Santa */}
        <div className="relative flex flex-col lg:flex-row-reverse items-center group">
          {/* Image */}
          <div className="w-full lg:w-[65%] relative h-[500px] lg:h-[700px] overflow-hidden shadow-2xl">
            <img 
              src="/images/real_black.jpg" 
              alt="Black Santa Experience" 
              className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#113122]/10 mix-blend-multiply transition-colors duration-1000 group-hover:bg-transparent" />
          </div>
          
          {/* Overlapping Text Box */}
          <div className="w-[95%] lg:w-[45%] bg-white p-10 lg:p-20 shadow-[0_30px_60px_rgb(0,0,0,0.08)] z-10 lg:-mr-[10%] relative mt-[-80px] lg:mt-0 transition-transform duration-700 ease-out lg:group-hover:-translate-y-4">
            <div className="absolute top-6 right-6 lg:top-10 lg:right-10 text-[6rem] lg:text-[10rem] font-bodoni text-[#F9F7F4] font-bold leading-none pointer-events-none select-none text-right">
              02
            </div>
            <div className="relative z-10">
              <h3 className="font-bodoni text-3xl lg:text-5xl font-bold text-[#113122] mb-6">
                Black Santa
              </h3>
              <div className="w-12 h-[2px] bg-brand-red mb-8"></div>
              <p className="text-gray-600 mb-10 text-base lg:text-lg leading-relaxed">
                Celebrate the magic of representation. The Home of the Black Santa offers a joyful, premium holiday photo experience with our authentic, real-bearded Black Santa.
              </p>
              <Link 
                href="/black-santa" 
                className="inline-flex px-10 py-4 bg-brand-red text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-brand-red-dark transition-all duration-300"
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
