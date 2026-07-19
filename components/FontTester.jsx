"use client";

import { useState, useEffect } from "react";

const FONTS = [
  { name: "Fraunces (Warm & Vintage)", family: "'Fraunces', serif", url: "Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900" },
  { name: "Marcellus (Classic Magic)", family: "'Marcellus', serif", url: "Marcellus" },
  { name: "Alice (Whimsical Holiday)", family: "'Alice', serif", url: "Alice" },
  { name: "Yeseva One (Nostalgic Elegance)", family: "'Yeseva One', serif", url: "Yeseva+One" },
  { name: "EB Garamond (Storybook Classic)", family: "'EB Garamond', serif", url: "EB+Garamond:ital,wght@0,400..800;1,400..800" },
  { name: "Bodoni Moda (High Fashion)", family: "'Bodoni Moda', serif", url: "Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900" },
];

export default function FontTester() {
  const [activeFont, setActiveFont] = useState(FONTS[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Inject font stylesheet
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${activeFont.url}&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Override Tailwind variables
    document.documentElement.style.setProperty('--font-bodoni', activeFont.family);
    document.documentElement.style.setProperty('--font-sans', activeFont.family);

    // Bruteforce override for every element (Buttons, links, etc.)
    const style = document.createElement('style');
    style.id = 'font-tester-global-override';
    style.innerHTML = `
      * {
        font-family: ${activeFont.family} !important;
      }
    `;
    
    // Remove old style if exists
    const oldStyle = document.getElementById('font-tester-global-override');
    if (oldStyle) oldStyle.remove();
    
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      const styleToRemove = document.getElementById('font-tester-global-override');
      if (styleToRemove) styleToRemove.remove();
    };
  }, [activeFont]);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#113122] text-white px-4 py-3 rounded-full shadow-2xl font-bold tracking-widest text-xs uppercase flex items-center gap-2 hover:bg-[#1a4a33] transition-colors"
      >
        <span>Aa</span>
        <span className="hidden md:inline">Try Fonts</span>
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white shadow-2xl rounded-xl p-4 w-64 border border-gray-100 flex flex-col gap-2">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-2">Select Heading Font</p>
          {FONTS.map(font => (
            <button
              key={font.name}
              onClick={() => setActiveFont(font)}
              className={`text-left px-4 py-3 rounded-lg text-sm transition-colors ${activeFont.name === font.name ? 'bg-[#113122] text-white font-bold' : 'text-gray-700 hover:bg-gray-100'}`}
              style={{ fontFamily: font.family }}
            >
              {font.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
