export const metadata = {
  title: 'Book Now | Holiday Dream Photos',
  description: 'Book your premium Santa photography session.',
};

export default function BookNowPage() {
  return (
    <div className="bg-brand-light min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-12">
        <h1 className="font-cormorant text-4xl font-bold text-[#113122] mb-2 text-center">Book Your Session</h1>
        <p className="text-center text-gray-500 mb-8">Select your mall location and package below.</p>
        
        {/* Acuity Embed Placeholder */}
        <div className="w-full h-[600px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center text-gray-400 p-8 text-center">
          <p className="font-bold mb-2">Acuity Scheduling Widget</p>
          <p className="text-sm">Embed code will be placed here once provided.</p>
        </div>
      </div>
    </div>
  );
}
