import Link from "next/link";

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
    <section className="py-24 bg-[#F9F7F4] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-red font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            Directory
          </p>
          <h2 className="font-bodoni text-4xl md:text-5xl font-medium text-[#113122] mb-4">
            Explore More
          </h2>
          <div className="w-12 h-[1px] bg-brand-red mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
            Everything you need to plan your magical holiday experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((item, idx) => (
            <Link 
              href={item.href} 
              key={idx}
              className="group flex flex-col items-center text-center p-12 bg-white border border-gray-200 hover:border-[#113122] transition-colors duration-300"
            >
              <span className="text-[#113122]/20 font-bodoni text-xl italic mb-4 group-hover:text-brand-red transition-colors">
                0{idx + 1}
              </span>
              <h3 className="font-bodoni text-2xl font-bold text-[#113122] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
