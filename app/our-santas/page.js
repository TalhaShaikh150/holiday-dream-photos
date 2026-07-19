export const metadata = {
  title: 'Our Santas | Holiday Dream Photos',
  description: 'Explore our Traditional and Black Santa photo experiences.',
};

import Image from "next/image";
import Link from "next/link";

export default function OurSantasPage() {
  return (
    <div className="bg-[#F9F7F4] min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-16 text-center px-4 max-w-4xl mx-auto">
        <p className="text-brand-red font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
          The Magic Awaits
        </p>
        <h1 className="font-bodoni text-5xl md:text-6xl lg:text-7xl font-medium text-[#113122] mb-6">
          Our Premium Experiences
        </h1>
        <div className="w-12 h-[1px] bg-brand-red mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Choose the magical experience that best fits your family&apos;s holiday tradition. We proudly offer two distinct, breathtaking sets, each featuring an authentic, real-bearded Santa.
        </p>
      </section>

      {/* Package Showcase */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Traditional Santa */}
          <div className="flex flex-col bg-white rounded-sm overflow-hidden shadow-xl border border-gray-100">
            <div className="relative h-96 w-full">
              <Image
                src="/images/split_traditional.png"
                alt="Traditional Santa Photo"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-10 md:p-14 flex flex-col items-center text-center flex-1">
              <h2 className="font-bodoni text-3xl md:text-4xl font-bold text-[#113122] mb-4">
                Traditional Santa
              </h2>
              <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                The classic, heartwarming Christmas experience. Step into a beautifully decorated winter wonderland and create timeless memories with our authentic Traditional Santa.
              </p>
              {/* Package Placeholder */}
              <div className="w-full bg-[#F9F7F4] p-6 mb-8 border border-gray-200">
                <p className="font-bodoni text-xl text-[#113122] font-semibold mb-2">Signature Package</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Starting at $149</p>
                <ul className="text-sm text-gray-600 text-left list-disc list-inside space-y-2">
                  <li>15 Minute Private Session</li>
                  <li>All High-Res Digital Images</li>
                  <li>Premium Print Credit</li>
                </ul>
              </div>
              <Link 
                href="/book-now" 
                className="px-10 py-4 bg-brand-red text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-red-dark transition-colors w-full rounded-sm shadow-sm"
              >
                Book Traditional
              </Link>
            </div>
          </div>

          {/* Black Santa */}
          <div className="flex flex-col bg-white rounded-sm overflow-hidden shadow-xl border border-gray-100">
            <div className="relative h-96 w-full">
              <Image
                src="/images/split_black.png"
                alt="Black Santa Photo"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-10 md:p-14 flex flex-col items-center text-center flex-1">
              <h2 className="font-bodoni text-3xl md:text-4xl font-bold text-[#113122] mb-4">
                Black Santa
              </h2>
              <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                Celebrate the magic of representation. The Home of the Black Santa offers a joyful, premium holiday photo experience with our authentic Black Santa.
              </p>
              {/* Package Placeholder */}
              <div className="w-full bg-[#F9F7F4] p-6 mb-8 border border-gray-200">
                <p className="font-bodoni text-xl text-[#113122] font-semibold mb-2">Heritage Package</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Starting at $149</p>
                <ul className="text-sm text-gray-600 text-left list-disc list-inside space-y-2">
                  <li>15 Minute Private Session</li>
                  <li>All High-Res Digital Images</li>
                  <li>Premium Print Credit</li>
                </ul>
              </div>
              <Link 
                href="/book-now" 
                className="px-10 py-4 bg-[#113122] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#1a4a33] transition-colors w-full rounded-sm shadow-sm"
              >
                Book Black Santa
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
