export const metadata = {
  title: 'Locations | Holiday Dream Photos',
  description: 'Find a Holiday Dream Photos location near you.',
};

import Link from "next/link";

export default function LocationsPage() {
  return (
    <div className="bg-brand-light min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-cormorant text-5xl font-bold text-[#113122] mb-4 text-center">Our Locations</h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          We operate across multiple premium mall locations in the USA. Find the one closest to you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Location Card Placeholder */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-cormorant text-2xl font-bold text-[#113122] mb-2">Location Name Placeholder</h3>
              <p className="text-gray-500 text-sm mb-6">123 Shopping Mall Way<br/>City, State 12345</p>
              <Link href="/book-now" className="block text-center w-full px-4 py-2 bg-brand-red text-white uppercase tracking-widest text-xs font-bold rounded-full hover:bg-brand-red-dark">
                Book Here
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
