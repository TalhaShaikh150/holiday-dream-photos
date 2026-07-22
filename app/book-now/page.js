import { MapPin, CalendarDays, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: 'Book Now | Holiday Dream Photos',
  description: 'Book your premium Santa photography session. Select your preferred mall location and choose between our Traditional or Black Santa experiences.',
};

export default function BookNowPage() {
  return (
    <div className="bg-[#F9F7F4] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 pt-32 lg:pt-40">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-red font-semibold uppercase tracking-[0.2em] text-[0.65rem] mb-4">
            Reservation System
          </p>
          <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl font-bold text-[#113122] mb-6">
            Reserve Your Magic
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto font-light leading-relaxed">
            Follow the steps below to secure your unhurried, premium holiday experience.
          </p>
        </div>

        {/* Steps Guide for Mobile Clarity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="bg-[#113122]/5 p-3 rounded-full text-[#113122] shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <p className="font-bodoni font-bold text-[#113122] text-lg">1. Location</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Select your preferred mall from the dropdown below.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="bg-brand-red/5 p-3 rounded-full text-brand-red shrink-0">
              <CalendarDays size={20} />
            </div>
            <div>
              <p className="font-bodoni font-bold text-[#113122] text-lg">2. Experience</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Choose Traditional or Black Santa, then pick a package.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="bg-[#113122]/5 p-3 rounded-full text-[#113122] shrink-0">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <p className="font-bodoni font-bold text-[#113122] text-lg">3. Confirm</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Pick a time slot and complete your booking seamlessly.</p>
            </div>
          </div>
        </div>

        {/* Acuity Embed Container (Mobile First) */}
        <div className="bg-white rounded-md shadow-2xl border border-gray-100 p-0 sm:p-8 min-h-[700px] flex flex-col relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-[#113122]"></div>

          {/* Acuity Widget Goes Here */}
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center relative z-10 w-full">
            <div className="w-16 h-16 border-4 border-gray-200 border-t-brand-red rounded-full animate-spin mx-auto mb-6"></div>
            <p className="font-bodoni text-xl md:text-2xl text-[#113122] font-semibold mb-2">Acuity Scheduling Loader</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-2 max-w-xs mx-auto">
              Client will provide Acuity embed code here
            </p>
          </div>
          
        </div>

      </div>
    </div>
  );
}
