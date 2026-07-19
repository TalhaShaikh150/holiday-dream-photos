export default function Footer() {
  return (
    <footer className="w-full bg-brand-light py-24 relative overflow-hidden">
      {/* Decorative stars - left & right */}
      <div className="absolute left-10 bottom-10 opacity-50">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      </div>

      <div className="max-w-3xl mx-auto px-4 text-center z-10 relative">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-dark mb-8">
          Join Santa&apos;s Mailing List
        </h2>
        
        <form className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full sm:flex-1 px-6 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all text-sm"
            required
          />
          <button 
            type="submit" 
            className="w-full sm:w-auto px-8 py-3 bg-brand-red text-white rounded-full font-medium text-xs tracking-widest hover:bg-brand-red-dark transition-colors uppercase whitespace-nowrap"
          >
            Say Hi To Santa
          </button>
        </form>
      </div>
    </footer>
  );
}
