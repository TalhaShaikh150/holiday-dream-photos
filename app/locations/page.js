export const metadata = {
  title: 'Locations | Holiday Dream Photos',
  description: 'Find a Holiday Dream Photos location near you.',
};

import Image from "next/image";
import Link from "next/link";

export default function LocationsPage() {
  const locations = [
    {
      name: "The Galleria Placeholder",
      address: "123 Premium Shopping Way, City, ST 12345",
      image: "/images/mall1.jpg"
    },
    {
      name: "Westfield Placeholder",
      address: "456 Luxury Mall Drive, City, ST 12345",
      image: "/images/mall2.jpg"
    },
    {
      name: "Town Center Placeholder",
      address: "789 Holiday Plaza, City, ST 12345",
      image: "/images/shopping_mall.png"
    }
  ];

  return (
    <div className="bg-[#F9F7F4] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <p className="text-brand-red font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            Find Us
          </p>
          <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl font-bold text-[#113122] mb-6">
            Our Locations
          </h1>
          <div className="w-12 h-[1px] bg-brand-red mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We operate across multiple premium mall locations in the USA. Find the magical set closest to you and reserve your time today.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {locations.map((loc, i) => (
            <div key={i} className="bg-white rounded-sm overflow-hidden shadow-lg border border-gray-100 flex flex-col group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="p-8 text-center flex flex-col flex-1">
                <h3 className="font-bodoni text-2xl font-bold text-[#113122] mb-3">
                  {loc.name}
                </h3>
                <p className="text-gray-500 text-sm mb-8 flex-1 leading-relaxed">
                  {loc.address}
                </p>
                <Link 
                  href="/book-now" 
                  className="w-full px-6 py-3.5 bg-brand-red text-white uppercase tracking-[0.2em] text-[0.65rem] font-bold rounded-sm hover:bg-brand-red-dark transition-colors shadow-sm"
                >
                  Book Here
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
