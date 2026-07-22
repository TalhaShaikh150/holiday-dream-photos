import Image from "next/image";

export const metadata = {
  title: 'Our Story | Holiday Dream Photos',
  description: 'Learn about the magic behind Holiday Dream Photos and our commitment to authentic, real-bearded Santa experiences.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#F9F7F4] min-h-screen pt-32 lg:pt-40 pb-20">
      
      {/* Brand Story Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-brand-red font-semibold uppercase tracking-[0.3em] text-xs md:text-sm mb-6">
            Our Story
          </p>
          <h1 className="font-bodoni text-5xl md:text-6xl lg:text-7xl font-bold text-[#113122] mb-8 leading-tight">
            The Magic of an Authentic, <br/>
            <span className="italic text-brand-red">Real-Bearded</span> Experience
          </h1>
          <div className="w-16 h-[2px] bg-brand-red mx-auto mb-8 rounded-sm"></div>
          <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-8">
            Holiday Dream Photos was founded on a simple premise: the magic of Christmas should feel real. 
            We grew tired of rushed mall lines, synthetic suits, and inauthentic interactions. 
            That is why we guarantee every single one of our Santas—both Traditional and Black—features a real beard, a real belly, and a genuine love for bringing joy to children.
          </p>
          <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed">
            From our meticulously designed sets to our unhurried booking system, every detail of Holiday Dream Photos is crafted to give your family a premium, unforgettable holiday memory.
          </p>
        </div>
      </section>

      {/* Hero Image Break */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="w-full relative h-[400px] md:h-[600px] rounded-sm overflow-hidden shadow-2xl border border-gray-100 group">
          <img
            src="https://images.pexels.com/photos/6211090/pexels-photo-6211090.jpeg"
            alt="The Holiday Dream Photos Magic"
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
          />
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="bg-white py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bodoni text-4xl md:text-5xl font-bold text-[#113122] mb-6">
              Meet the Magic Makers
            </h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto">
              Our team of dedicated professionals ensures your experience is flawless from start to finish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center group">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 shadow-md border-4 border-[#F9F7F4]">
                  {/* Client will provide photos */}
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-brand-red/10 transition-colors">
                    Team Photo
                  </div>
                </div>
                <h3 className="font-bodoni text-2xl font-bold text-[#113122] mb-2">Name Placeholder</h3>
                <p className="text-brand-red uppercase tracking-widest text-xs font-bold mb-4">Title Placeholder</p>
                <p className="text-gray-500 font-light text-sm">
                  Short bio placeholder describing their role in making the holiday magic happen.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
