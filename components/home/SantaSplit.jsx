import Link from "next/link";

export default function SantaSplit() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#F9F7F4] relative border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
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

        <div className="flex flex-col gap-12 lg:gap-24">
          
          {/* Experience 01: Traditional Santa */}
          <div className="flex flex-col lg:flex-row group bg-white border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-700">
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[650px] overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/29379654/pexels-photo-29379654.jpeg"
                alt="Traditional Santa Experience" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#113122]/10 mix-blend-multiply transition-colors duration-700 group-hover:bg-transparent" />
            </div>
            
            {/* Text Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-10 lg:p-24 relative overflow-hidden">
              {/* Massive background number */}
              <div className="absolute top-10 right-10 text-[12rem] font-bodoni text-gray-50 font-bold leading-none select-none pointer-events-none group-hover:text-gray-100 transition-colors duration-700">
                01
              </div>
              
              <div className="relative z-10">
                <h3 className="font-bodoni text-4xl lg:text-5xl font-bold text-[#113122] mb-6 tracking-tight">
                  Traditional Santa
                </h3>
                <div className="w-12 h-[2px] bg-brand-red mb-8 transition-all duration-500 group-hover:w-24"></div>
                <p className="text-gray-600 mb-12 text-lg lg:text-xl font-light leading-relaxed">
                  The classic, heartwarming Christmas experience featuring our authentic, real-bearded Traditional Santa Claus in a beautifully decorated premium setting. Relive the magic of your childhood in an unhurried, peaceful environment.
                </p>
                <Link 
                  href="/our-santas" 
                  className="inline-flex px-10 py-4 border border-[#113122] text-[#113122] text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-[#113122] hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Experience 02: Black Santa */}
          <div className="flex flex-col lg:flex-row-reverse group bg-white border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-700">
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[650px] overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/6212138/pexels-photo-6212138.jpeg" 
                alt="Black Santa Experience" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#113122]/10 mix-blend-multiply transition-colors duration-700 group-hover:bg-transparent" />
            </div>
            
            {/* Text Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-10 lg:p-24 relative overflow-hidden text-left lg:text-right">
              {/* Massive background number */}
              <div className="absolute top-10 left-10 text-[12rem] font-bodoni text-gray-50 font-bold leading-none select-none pointer-events-none group-hover:text-gray-100 transition-colors duration-700">
                02
              </div>
              
              <div className="relative z-10 flex flex-col items-start lg:items-end">
                <h3 className="font-bodoni text-4xl lg:text-5xl font-bold text-[#113122] mb-6 tracking-tight">
                  Black Santa
                </h3>
                <div className="w-12 h-[2px] bg-brand-red mb-8 transition-all duration-500 group-hover:w-24"></div>
                <p className="text-gray-600 mb-12 text-lg lg:text-xl font-light leading-relaxed">
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
      </div>
    </section>
  );
}
