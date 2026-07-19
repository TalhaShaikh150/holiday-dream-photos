export const metadata = {
  title: 'Our Santas | Holiday Dream Photos',
  description: 'Explore our Traditional and Black Santa photo experiences.',
};

import Image from "next/image";
import Link from "next/link";

export default function OurSantasPage() {
  return (
    <div className="bg-brand-light min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-12 bg-surface-muted text-center px-4">
        <h1 className="font-cormorant text-4xl md:text-5xl font-bold text-[#113122] mb-4">Our Premium Santa Experiences</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the magical experience that best fits your family&apos;s holiday tradition.
        </p>
      </section>

      {/* Packages / Overview */}
      <section className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
           <div className="w-full h-64 relative bg-gray-100 mb-6 rounded overflow-hidden">
              {/* Placeholder image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">Traditional Santa Photo</div>
           </div>
           <h2 className="font-cormorant text-3xl font-bold text-[#113122] mb-2">Traditional Santa</h2>
           <p className="text-gray-600 mb-8 flex-1">
             The classic holiday experience with our authentic, real-bearded Traditional Santa Claus.
           </p>
           <Link href="/book-now" className="px-8 py-3 bg-brand-red text-white uppercase tracking-widest text-sm font-bold rounded-full hover:bg-brand-red-dark w-full sm:w-auto">
             Book Traditional Santa
           </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
           <div className="w-full h-64 relative bg-gray-100 mb-6 rounded overflow-hidden">
              {/* Placeholder image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">Black Santa Photo</div>
           </div>
           <h2 className="font-cormorant text-3xl font-bold text-[#113122] mb-2">Black Santa</h2>
           <p className="text-gray-600 mb-8 flex-1">
             Celebrate the magic of representation with our authentic, real-bearded Black Santa.
           </p>
           <Link href="/black-santa" className="px-8 py-3 border-2 border-brand-red text-brand-red uppercase tracking-widest text-sm font-bold rounded-full hover:bg-brand-red hover:text-white w-full sm:w-auto">
             View Black Santa Experience
           </Link>
        </div>
      </section>
    </div>
  );
}
