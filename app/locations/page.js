import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

export const metadata = {
  title: 'Locations',
  description: 'Find a Holiday Dream Photos location near you. We operate across multiple premium mall locations in the USA.',
};

// ----------------------------------------------------------------------
// DATA FETCH LAYER (Simulating Sanity CMS)
// ----------------------------------------------------------------------
const getLocations = async () => {
  return [
    {
      _id: "loc-1",
      name: "The Galleria Placeholder",
      address: "123 Premium Shopping Way, City, ST 12345",
      imageUrl: "https://images.pexels.com/photos/1018610/pexels-photo-1018610.jpeg"
    },
    {
      _id: "loc-2",
      name: "Westfield Placeholder",
      address: "456 Luxury Mall Drive, City, ST 12345",
      imageUrl: "https://images.pexels.com/photos/34577/pexels-photo.jpg"
    },
    {
      _id: "loc-3",
      name: "Town Center Placeholder",
      address: "789 Holiday Plaza, City, ST 12345",
      imageUrl: "https://images.pexels.com/photos/2079435/pexels-photo-2079435.jpeg"
    }
  ];
};

export default async function LocationsPage() {
  const locations = await getLocations();

  return (
    <div className="bg-[#F9F7F4] min-h-screen">
      {/* Header */}
      <section className="relative pt-40 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center text-center">
        <p className="text-brand-red font-semibold uppercase tracking-[0.3em] text-xs md:text-sm mb-6">
          Find Us
        </p>
        <h1 className="font-bodoni text-5xl md:text-7xl lg:text-[6rem] font-medium text-[#113122] leading-none mb-8">
          Our <span className="italic text-brand-red">Locations</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          We operate across multiple premium mall locations in the USA. Find the magical set closest to you and reserve your time today.
        </p>
      </section>

      {/* Location Grid */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {locations.map((loc) => (
            <div key={loc._id} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-gray-100 flex flex-col group relative">
              <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur p-2 rounded-full shadow-sm text-brand-red">
                <MapPin size={20} strokeWidth={1.5} />
              </div>
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={loc.imageUrl}
                  alt={loc.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#113122]/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
              </div>
              <div className="p-10 text-center flex flex-col flex-1">
                <h3 className="font-bodoni text-2xl font-bold text-[#113122] mb-4">
                  {loc.name}
                </h3>
                <p className="text-gray-500 text-sm mb-10 flex-1 leading-relaxed">
                  {loc.address}
                </p>
                <Link 
                  href="/book-now" 
                  className="w-full px-6 py-4 bg-[#113122] text-white uppercase tracking-[0.2em] text-[0.65rem] font-bold rounded-sm hover:bg-black transition-all shadow-sm group-hover:bg-brand-red group-hover:shadow-md"
                >
                  Book Here
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
