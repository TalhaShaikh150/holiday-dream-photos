export const metadata = {
  title: 'Book Now | Holiday Dream Photos',
  description: 'Book your premium Santa photography session.',
};

export default function BookNowPage() {
  return (
    <div className="bg-[#F9F7F4] min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="font-bodoni text-4xl md:text-5xl font-bold text-[#113122] mb-4">
            Reserve Your Magic
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto">
            Select your preferred mall location and choose between our Traditional or Black Santa experiences.
          </p>
        </div>

        {/* Acuity Embed Container */}
        <div className="bg-white rounded-sm shadow-xl border border-gray-100 p-4 sm:p-8 min-h-[600px] flex flex-col items-center justify-center relative overflow-hidden">
          
          {/* Subtle background decoration inside the box */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 bg-[url('/images/hero_wreath.png')] bg-contain bg-no-repeat bg-right-top pointer-events-none" />

          {/* Placeholder for Acuity */}
          <div className="text-center relative z-10 w-full max-w-sm mx-auto">
            <div className="w-16 h-16 border-4 border-[#113122]/10 border-t-[#113122] rounded-full animate-spin mx-auto mb-6"></div>
            <p className="font-bodoni text-xl text-[#113122] font-semibold mb-2">Loading Booking System...</p>
            <p className="text-sm text-gray-500 uppercase tracking-widest">
              Acuity Embed Code
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
