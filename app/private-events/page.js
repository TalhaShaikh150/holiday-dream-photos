import Image from "next/image";
import EnquireForm from "@/components/forms/EnquireForm";

export const metadata = {
  title: 'Private Events | Holiday Dream Photos',
  description: 'Book Santa for corporate events, private parties, or community gatherings.',
};

// ----------------------------------------------------------------------
// DATA FETCH LAYER (Simulating Sanity CMS)
// ----------------------------------------------------------------------
const getPrivateEventsData = async () => {
  return {
    title: "Private Events & Corporate Bookings",
    description: "Bring the magic of Holiday Dream Photos to your next private party, corporate event, or community gathering. Our authentic, real-bearded Santas provide a premium, unforgettable experience tailored perfectly for your guests.",
    imageUrl: "https://images.pexels.com/photos/3303615/pexels-photo-3303615.jpeg"
  };
};

export default async function PrivateEventsPage() {
  const data = await getPrivateEventsData();

  return (
    <div className="bg-[#F9F7F4] min-h-screen">
      {/* Header spacing to account for fixed global Nav */}
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Info Column */}
        <div className="flex-1 lg:sticky lg:top-32">
          <p className="text-brand-red font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            Exclusive Experiences
          </p>
          <h1 className="font-bodoni text-5xl md:text-6xl lg:text-7xl font-bold text-[#113122] mb-6 leading-tight">
            {data.title.split('&').map((text, i, arr) => (
              <span key={i}>
                {text.trim()} {i < arr.length - 1 && <><br /><span className="italic text-brand-red">&amp;</span></>}
              </span>
            ))}
          </h1>
          <div className="w-12 h-[1px] bg-brand-red mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
            {data.description}
          </p>
          
          <div className="relative w-full max-w-md aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border border-gray-200 mt-12 hidden lg:block group">
            <img
              src={data.imageUrl}
              alt="Holiday Experience"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Form Column */}
        <div className="flex-1 w-full bg-white p-10 sm:p-14 rounded-sm shadow-xl border border-gray-100 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-red"></div>
          <h3 className="font-bodoni text-3xl font-bold text-[#113122] mb-8">Enquire Now</h3>
          
          {/* Client Component for the form to handle state */}
          <EnquireForm />
        </div>

      </div>
    </div>
  );
}
