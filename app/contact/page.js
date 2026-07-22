import ContactForm from "@/components/forms/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: 'Contact Us | Holiday Dream Photos',
  description: 'Get in touch with the Holiday Dream Photos team for general enquiries, support, or location details.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#F9F7F4] min-h-screen">
      
      {/* Header spacing to account for fixed global Nav */}
      <div className="pt-32 lg:pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Info Column */}
        <div className="flex-1 lg:sticky lg:top-32">
          <p className="text-brand-red font-semibold uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
            Get in Touch
          </p>
          <h1 className="font-bodoni text-5xl md:text-6xl lg:text-7xl font-bold text-[#113122] mb-6 leading-tight">
            Contact Our <br/>
            <span className="italic text-brand-red">Elf Team</span>
          </h1>
          <div className="w-12 h-[2px] bg-brand-red mb-8 rounded-sm"></div>
          <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-xl">
            Have a question about your booking, our locations, or looking to join our magical team? Send us a message and we will respond as soon as possible.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#113122]/5 p-3 rounded-full text-[#113122]">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bodoni font-bold text-[#113122] text-xl mb-1">Headquarters</p>
                <p className="text-gray-500 font-light text-sm">
                  123 North Pole Way<br/>
                  Suite 400<br/>
                  Winterville, ST 12345
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-brand-red/5 p-3 rounded-full text-brand-red">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bodoni font-bold text-[#113122] text-xl mb-1">Email</p>
                <p className="text-gray-500 font-light text-sm">
                  support@holidaydreamphotos.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#113122]/5 p-3 rounded-full text-[#113122]">
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bodoni font-bold text-[#113122] text-xl mb-1">Phone</p>
                <p className="text-gray-500 font-light text-sm">
                  1-800-555-0199
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="flex-1 w-full bg-white p-10 sm:p-14 rounded-sm shadow-2xl border border-gray-100 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#113122]"></div>
          <h3 className="font-bodoni text-3xl font-bold text-[#113122] mb-8">Send a Message</h3>
          
          {/* Client Component for the form to handle state */}
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
