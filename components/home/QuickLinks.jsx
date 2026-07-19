import Link from "next/link";
import { MapPin, CalendarHeart, Users, HelpCircle, Mail } from "lucide-react";

export default function QuickLinks() {
  const cards = [
    {
      title: "Locations",
      description: "Find a premium Santa photo experience near you.",
      icon: <MapPin className="w-8 h-8 text-brand-red mb-4" />,
      href: "/locations"
    },
    {
      title: "Private Events",
      description: "Book Santa for corporate events, parties, or home visits.",
      icon: <CalendarHeart className="w-8 h-8 text-brand-red mb-4" />,
      href: "/private-events"
    },
    {
      title: "Join the Team",
      description: "We are hiring real-bearded Santas and elves.",
      icon: <Users className="w-8 h-8 text-brand-red mb-4" />,
      href: "/hiring"
    },
    {
      title: "Contact Us",
      description: "Have questions? Our magical support team is here.",
      icon: <Mail className="w-8 h-8 text-brand-red mb-4" />,
      href: "/contact"
    }
  ];

  return (
    <section className="py-24 bg-surface-muted relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-[#113122] mb-4">
            Explore More
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need to plan your magical holiday experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <Link 
              href={card.href} 
              key={idx}
              className="flex flex-col items-center text-center p-10 bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-[#113122] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
