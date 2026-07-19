import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function QuickLinks() {
  const links = [
    {
      title: "Locations",
      description: "Find a premium Santa photo experience near you.",
      href: "/locations"
    },
    {
      title: "Private Events",
      description: "Book Santa for corporate events, parties, or home visits.",
      href: "/private-events"
    },
    {
      title: "Join the Team",
      description: "We are hiring real-bearded Santas and elves.",
      href: "/hiring"
    },
    {
      title: "Contact Us",
      description: "Have questions? Our magical support team is here.",
      href: "/contact"
    }
  ];

  return (
    <section className="py-32 bg-[#F9F7F4] border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20">
          <div className="max-w-2xl">
            <p className="text-brand-red font-semibold uppercase tracking-[0.3em] text-xs md:text-sm mb-6">
              Directory
            </p>
            <h2 className="font-bodoni text-5xl md:text-6xl lg:text-[5rem] font-medium text-[#113122] leading-none tracking-tight">
              Explore More
            </h2>
          </div>
          <p className="text-gray-500 text-lg font-light mt-8 lg:mt-0 max-w-sm lg:text-right">
            Everything you need to plan your magical, unhurried holiday experience.
          </p>
        </div>

        <div className="flex flex-col border-t border-[#113122]/20">
          {links.map((item, idx) => (
            <Link 
              href={item.href} 
              key={idx}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 lg:py-14 border-b border-[#113122]/20 hover:bg-white transition-all duration-500 px-6 lg:px-12 -mx-6 lg:-mx-12"
            >
              <div className="flex items-center gap-8 md:gap-16">
                <span className="text-[#113122]/30 font-bodoni text-3xl italic group-hover:text-brand-red transition-colors duration-500">
                  0{idx + 1}
                </span>
                <h3 className="font-bodoni text-3xl lg:text-5xl font-bold text-[#113122] group-hover:-translate-y-1 transition-transform duration-500">
                  {item.title}
                </h3>
              </div>
              
              <div className="mt-6 md:mt-0 flex items-center justify-between md:justify-end md:gap-12 pl-14 md:pl-0">
                <p className="text-gray-500 text-base lg:text-lg font-light max-w-sm">
                  {item.description}
                </p>
                <div className="w-12 h-12 rounded-full border border-[#113122]/20 flex items-center justify-center group-hover:bg-[#113122] group-hover:text-white transition-all duration-500 group-hover:-rotate-45">
                  <ArrowRight size={20} strokeWidth={1.5} />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
