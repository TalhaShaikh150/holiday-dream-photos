import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Truck } from "lucide-react";

export const metadata = {
  title: 'Santa on Wheels | Holiday Dream Photos',
  description: 'Experience the magic of Santa delivered directly to your neighborhood or event.',
  // Prevent indexing since this is a draft/hidden page
  robots: {
    index: false,
    follow: false,
  }
};

export default function SantaOnWheelsPage() {
  return (
    <div className="bg-[#F9F7F4] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        <div className="flex-1 text-center lg:text-left z-10">
          <div className="inline-flex items-center justify-center p-3 bg-brand-red/10 text-brand-red rounded-full mb-6 lg:mx-0 mx-auto">
            <Truck size={24} />
          </div>
          <p className="text-brand-red font-semibold uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
            Magic Delivered
          </p>
          <h1 className="font-bodoni text-5xl md:text-6xl lg:text-7xl font-bold text-[#113122] mb-6 leading-tight">
            Santa <span className="italic text-brand-red">on Wheels</span>
          </h1>
          <div className="w-16 h-[2px] bg-[#113122] mx-auto lg:mx-0 mb-8 rounded-sm"></div>
          <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
            We are bringing the premium Holiday Dream Photos experience directly to your neighborhood, school, or community center. Our fully customized, magical mobile set ensures an unforgettable visit from Santa without the mall crowds.
          </p>
          <Link 
            href="/contact" 
            className="group inline-flex items-center gap-4 px-10 py-4 bg-[#113122] text-white uppercase tracking-[0.2em] text-xs font-bold rounded-sm shadow-xl hover:bg-black hover:shadow-2xl transition-all"
          >
            Enquire Now
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="flex-1 w-full relative">
          <div className="absolute -inset-4 bg-[#113122]/5 transform -rotate-2 rounded-3xl"></div>
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.pexels.com/photos/6211090/pexels-photo-6211090.jpeg"
              alt="Santa on Wheels Experience"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </section>

      {/* Info Banner */}
      <section className="py-16 bg-white border-y border-gray-100 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-bodoni text-3xl text-[#113122] mb-4">Currently in Development</h2>
          <p className="text-gray-500 font-light">
            Our elves are working hard in the workshop building this experience. Please contact us if you would like to be notified when Santa on Wheels is ready to roll!
          </p>
        </div>
      </section>

    </div>
  );
}
