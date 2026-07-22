import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export const metadata = {
  title: 'Our Santas',
  description: 'Explore our Traditional and Black Santa photo experiences. Premium holiday photography for families.',
};

// ----------------------------------------------------------------------
// DATA FETCH LAYER (Simulating Sanity CMS)
// This structure is ready to be swapped with a real Sanity GROQ query.
// ----------------------------------------------------------------------
const getSantaExperiences = async () => {
  // In the future: return await sanityClient.fetch(`*[_type == "santaExperience"] | order(order asc)`)
  return [
    {
      _id: "traditional-santa",
      title: "Traditional Santa",
      description: "Step into a beautifully decorated winter wonderland and create timeless memories with our authentic Traditional Santa. The classic, heartwarming Christmas experience with rich reds, greens, and elegant gold accents.",
      imageUrl: "https://images.pexels.com/photos/3303615/pexels-photo-3303615.jpeg",
      themeColor: "brand-red",
      themeBg: "bg-brand-red",
      themeText: "text-brand-red",
      package: {
        name: "Signature Package",
        priceHint: "Client provided pricing",
        features: [
          "15 Minute Private Session",
          "All High-Res Digital Images",
          "Premium Print Credit Included"
        ]
      }
    },
    {
      _id: "black-santa",
      title: "Black Santa",
      description: "Celebrate the magic of representation. The Home of the Black Santa offers a joyful, premium holiday photo experience with our authentic Black Santa in a stunningly designed set.",
      imageUrl: "https://images.pexels.com/photos/6211090/pexels-photo-6211090.jpeg",
      themeColor: "[#113122]",
      themeBg: "bg-[#113122]",
      themeText: "text-[#113122]",
      package: {
        name: "Heritage Package",
        priceHint: "Client provided pricing",
        features: [
          "15 Minute Private Session",
          "All High-Res Digital Images",
          "Premium Print Credit Included"
        ]
      }
    }
  ];
};

export default async function OurSantasPage() {
  const experiences = await getSantaExperiences();

  return (
    <div className="bg-[#F9F7F4] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center text-center">
        <p className="text-brand-red font-semibold uppercase tracking-[0.3em] text-xs md:text-sm mb-6">
          The Magic of Choice
        </p>
        <h1 className="font-bodoni text-5xl md:text-7xl lg:text-[6rem] font-medium text-[#113122] leading-none mb-8">
          Two Extraordinary <br />
          <span className="italic text-brand-red">Experiences</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          Choose the magical experience that best fits your family&apos;s holiday tradition. 
          We proudly offer two breathtaking, premium sets, each featuring an authentic, real-bearded Santa.
        </p>
      </section>

      {/* Dynamic Santa Sections from "CMS" */}
      {experiences.map((exp, index) => {
        const isReversed = index % 2 !== 0;
        
        return (
          <section key={exp._id} className={`py-20 lg:py-32 relative ${isReversed ? 'bg-white' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex flex-col lg:flex-row gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className={`absolute -inset-4 transform ${isReversed ? 'rotate-2 bg-[#113122]/5 group-hover:rotate-1' : '-rotate-2 bg-brand-red/5 group-hover:-rotate-1'} rounded-2xl transition-transform duration-500`}></div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl rounded-sm">
                    <img
                      src={exp.imageUrl}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`w-full lg:w-1/2 ${isReversed ? 'lg:pr-10' : 'lg:pl-10'}`}>
                  <h2 className="font-bodoni text-5xl lg:text-6xl text-[#113122] mb-6">{exp.title}</h2>
                  <p className="text-gray-500 text-lg font-light leading-relaxed mb-10">
                    {exp.description}
                  </p>

                  {/* Package Details */}
                  <div className={`${isReversed ? 'bg-[#F9F7F4]' : 'bg-white'} p-8 lg:p-10 shadow-sm border border-gray-100 rounded-sm mb-10 relative overflow-hidden`}>
                    <div className={`absolute top-0 left-0 w-1 h-full ${exp.themeBg}`}></div>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-bodoni text-2xl text-[#113122]">{exp.package.name}</h3>
                        <p className="text-gray-400 text-sm mt-1 uppercase tracking-widest">{exp.package.priceHint}</p>
                      </div>
                      <Star className={`${exp.themeText} fill-current opacity-10 w-8 h-8`} />
                    </div>
                    
                    <ul className="space-y-4 text-gray-600 font-light mb-8">
                      {exp.package.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full ${exp.themeBg}`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link 
                      href="/book-now" 
                      className={`group inline-flex items-center gap-4 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${exp.themeBg} ${isReversed ? 'hover:bg-black' : 'hover:bg-brand-red-dark'}`}
                    >
                      Book {exp.title}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Call to Action Footer */}
      <section className="py-24 text-center px-4">
        <h2 className="font-bodoni text-4xl text-[#113122] mb-6">Not sure which to choose?</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto font-light">
          Both of our Santas offer an unhurried, magical experience. Contact our elf team if you need help deciding.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center border border-[#113122] text-[#113122] px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#113122] hover:text-white transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
