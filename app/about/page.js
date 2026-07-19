export const metadata = {
  title: 'About Us | Holiday Dream Photos',
  description: 'Learn about our brand story and our commitment to authentic Santa experiences.',
};

export default function AboutPage() {
  return (
    <div className="bg-brand-light min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="font-cormorant text-5xl font-bold text-[#113122] mb-6">Our Brand Story</h1>
        <p className="text-gray-600 leading-relaxed text-lg mb-8">
          [Brand story content will be placed here once provided by the client.]
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-surface-muted rounded-2xl p-10 md:p-16 text-center border border-gray-100 mb-20">
        <h2 className="font-cormorant text-4xl font-bold text-[#113122] mb-4">The Real Bearded Santa Differentiator</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We believe in true holiday magic. That&apos;s why every single one of our Santas is an authentic, real-bearded professional dedicated to creating a premium experience.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="font-cormorant text-4xl font-bold text-[#113122] mb-10 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
             <div key={i} className="flex flex-col items-center">
               <div className="w-48 h-48 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-gray-400">Photo</div>
               <h4 className="font-bold text-[#113122] text-lg">Team Member Name</h4>
               <p className="text-brand-red text-sm uppercase tracking-wider font-semibold">Title Placeholder</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
