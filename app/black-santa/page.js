export const metadata = {
  title: 'Black Santa | Holiday Dream Photos',
  description: 'The Home of the Black Santa - Premium holiday photo experience.',
};

import Link from "next/link";

export default function BlackSantaPage() {
  return (
    <div className="bg-[#fcf8f2] min-h-screen">
      <section className="pt-24 pb-16 text-center px-4">
        <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-[#3a2012] mb-6">The Home of the Black Santa</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg mb-8">
          A joyful, premium holiday photo experience where representation matters. Create lasting memories with our authentic, real-bearded Black Santa.
        </p>
        <Link href="/book-now" className="inline-block px-10 py-4 bg-brand-red text-white uppercase tracking-widest text-sm font-bold rounded-full hover:bg-brand-red-dark">
          Book Your Session
        </Link>
      </section>
      
      {/* Photography Placeholder */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
          High Quality Black Santa Photography Placeholder
        </div>
      </section>
    </div>
  );
}
