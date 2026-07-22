import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export const metadata = {
  title: 'The Home of the Black Santa | Holiday Dream Photos',
  description: 'A joyful, premium holiday photo experience built on the belief that every child deserves to see the magic of Christmas reflected in themselves.',
};

// ----------------------------------------------------------------------
// DATA FETCH LAYER (Simulating Sanity CMS)
// ----------------------------------------------------------------------
const getBlackSantaData = async () => {
  return {
    hero: {
      tagline: "Representation Matters",
      headline: "The Home of the Black Santa",
      description: "A joyful, premium holiday photo experience built on the belief that every child deserves to see the magic of Christmas reflected in themselves. Create lasting memories with our authentic, real-bearded Black Santa in a breathtaking winter wonderland setting.",
      imageUrl: "https://images.pexels.com/photos/6211090/pexels-photo-6211090.jpeg"
    },
    philosophy: {
      headline: "A Tradition of Joy",
      description: "We take pride in offering a dedicated space where the Black Santa experience is celebrated with the highest quality and care. From our meticulously crafted sets to our incredibly authentic Santas, every detail is designed to bring you the premium holiday portraits your family deserves."
    },
    packages: [
      {
        name: "Heritage Package",
        priceHint: "Client provided pricing",
        features: [
          "15 Minute Private Session",
          "All High-Res Digital Images",
          "Premium Print Credit Included",
          "Digital Christmas Card Template"
        ]
      }
    ],
    gallery: [
      "https://images.pexels.com/photos/3303615/pexels-photo-3303615.jpeg", // Placeholder
      "https://images.pexels.com/photos/3224095/pexels-photo-3224095.jpeg"  // Placeholder
    ]
  };
};

export default async function BlackSantaPage() {
  const data = await getBlackSantaData();

  return (
    <div className="bg-[#fdfbf7] min-h-screen">
      
      {/* Distinct Visual Identity: Rich warm tones, deep browns, soft creams */}
      <section className="relative pt-32 lg:pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left z-10">
            <p className="text-[#8c5a35] font-semibold uppercase tracking-[0.3em] text-xs md:text-sm mb-6">
              {data.hero.tagline}
            </p>
            <h1 className="font-bodoni text-5xl md:text-6xl lg:text-7xl font-bold text-[#3a2012] mb-6 leading-tight">
              {data.hero.headline.split('Black Santa')[0]}
              <span className="italic text-[#8c5a35]">Black Santa</span>
            </h1>
            <div className="w-16 h-[2px] bg-[#8c5a35] mx-auto lg:mx-0 mb-8 rounded-sm"></div>
            <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              {data.hero.description}
            </p>
            <Link 
              href="/book-now" 
              className="group inline-flex items-center gap-4 px-10 py-4 bg-[#3a2012] text-white uppercase tracking-[0.2em] text-xs font-bold rounded-sm shadow-xl hover:bg-[#25140b] hover:shadow-2xl transition-all"
            >
              Book Your Session
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="flex-1 w-full relative">
            <div className="absolute -inset-4 bg-[#8c5a35]/5 transform rotate-2 rounded-3xl"></div>
            <div className="relative aspect-[4/5] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={data.hero.imageUrl}
                alt="Black Santa Experience"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section className="py-24 bg-[#3a2012] relative overflow-hidden mt-12">
         {/* Subtle texture overlay */}
         <div className="absolute inset-0 opacity-5 bg-[url('/images/hero_wreath.png')] bg-center bg-cover mix-blend-overlay pointer-events-none" />
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            <h2 className="font-bodoni text-4xl md:text-5xl lg:text-6xl font-medium text-[#F9F7F4] mb-8">
              {data.philosophy.headline}
            </h2>
            <div className="w-12 h-[1px] bg-[#8c5a35] mx-auto mb-10"></div>
            <p className="text-[#F9F7F4]/90 text-lg md:text-xl font-light leading-relaxed max-w-3xl mb-16">
              {data.philosophy.description}
            </p>

            {/* Packages */}
            <div className="grid grid-cols-1 max-w-md w-full mx-auto">
              {data.packages.map((pkg, i) => (
                <div key={i} className="bg-[#F9F7F4] p-10 rounded-sm shadow-2xl text-left relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#8c5a35]"></div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-bodoni text-2xl text-[#3a2012]">{pkg.name}</h3>
                      <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest">{pkg.priceHint}</p>
                    </div>
                    <Star className="text-[#8c5a35] fill-[#8c5a35]/20 w-8 h-8" />
                  </div>
                  <ul className="space-y-4 text-gray-600 font-light mb-10">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8c5a35]"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/book-now" 
                    className="block text-center w-full px-6 py-4 border border-[#3a2012] text-[#3a2012] uppercase tracking-[0.2em] text-xs font-bold rounded-sm hover:bg-[#3a2012] hover:text-white transition-all"
                  >
                    Reserve Now
                  </Link>
                </div>
              ))}
            </div>
         </div>
      </section>

    </div>
  );
}
