export const metadata = {
  title: 'Santa on Wheels | Holiday Dream Photos',
  description: 'Santa on Wheels experience.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SantaOnWheelsPage() {
  return (
    <div className="bg-[#F9F7F4] min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 text-center mt-20">
        <p className="text-brand-red font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
          Coming Soon
        </p>
        <h1 className="font-bodoni text-5xl md:text-6xl font-bold text-[#113122] mb-6">
          Santa on Wheels
        </h1>
        <div className="w-12 h-[1px] bg-brand-red mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
          Bringing the magic directly to you. Our premium Santa on Wheels experience is currently being finalized. Please check back soon for booking details and availability.
        </p>
      </div>
    </div>
  );
}
