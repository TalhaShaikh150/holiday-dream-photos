export const metadata = {
  title: 'Hiring | Holiday Dream Photos',
  description: 'Join the Holiday Dream Photos team.',
};

export default function HiringPage() {
  return (
    <div className="bg-brand-light min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto text-center bg-white p-12 rounded-xl shadow-sm border border-gray-100">
        <h1 className="font-cormorant text-5xl font-bold text-[#113122] mb-6">Join the Holiday Dream Photos Team</h1>
        <p className="text-gray-600 mb-10 text-lg">
          We are looking for enthusiastic, magical individuals to join our team for the upcoming holiday season. Help us create unforgettable memories for families across the country.
        </p>
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block px-10 py-4 bg-brand-red text-white uppercase tracking-widest text-sm font-bold rounded-full hover:bg-brand-red-dark transition-colors"
        >
          View Open Positions
        </a>
        <p className="text-xs text-gray-400 mt-4">(Link to hiring platform placeholder)</p>
      </div>
    </div>
  );
}
