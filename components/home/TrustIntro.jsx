export default function TrustIntro() {
  return (
    <section className="py-24 bg-[#113122] relative overflow-hidden">
      {/* Decorative subtle texture/glow if needed, but a solid rich green is great */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-brand-red font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
          The Holiday Dream Promise
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-medium text-brand-light mb-8">
          We Only Use <span className="italic text-brand-red">Real</span> Bearded Santas
        </h2>
        <div className="w-16 h-[2px] bg-brand-red mx-auto mb-10 rounded-full"></div>
        <p className="text-brand-light/90 leading-relaxed text-lg md:text-xl font-light max-w-3xl mx-auto">
          At Holiday Dream Photos, we believe the magic of Christmas lies in the authentic details. That&apos;s why every single one of our Santas—whether you choose our Traditional or Black Santa experience—is a true professional with a real, glorious beard. Skip the fake suits and crowded lines, and step into a premium, magical holiday experience designed to create memories that will last a lifetime.
        </p>
      </div>
    </section>
  );
}
