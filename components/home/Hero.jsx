"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full min-h-[100vh] bg-brand-light overflow-hidden flex items-center">
      {/* Right Image (Large Santa) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.95, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-full lg:w-[55%] h-full hidden lg:block pointer-events-none z-0"
      >
        <Image
          src="/images/hero_santa.png"
          alt="Large Santa"
          fill
          className="object-cover object-left-top mix-blend-multiply"
          priority
        />
        {/* Soft gradient mask so the image blends into the center text area naturally */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-brand-light to-transparent" />
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-0">
        {/* Left-Aligned Text Content Container */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="font-cormorant text-5xl md:text-6xl lg:text-[4rem] font-medium text-[#113122] leading-tight mb-6"
          >
            Capture the{" "}
            <span className="text-brand-red italic font-semibold">Magic</span>
            <br />
            of the Holidays
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-600 max-w-lg mb-8 leading-relaxed font-sans"
          >
            Skip the crowded mall lines. Step into our beautifully crafted
            winter wonderland for a magical, unhurried photo session with our
            authentic, real-bearded Santas.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto flex items-center justify-center px-10 py-4 bg-brand-red border-2 border-brand-red text-white font-bold text-xs tracking-[0.15em] hover:bg-brand-red-dark hover:border-brand-red-dark hover:-translate-y-0.5 transition-all duration-300 uppercase rounded-full shadow-lg hover:shadow-xl cursor-pointer">
              Book Your Session
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center px-10 py-4 border-2 border-brand-red bg-transparent text-brand-red font-bold text-xs tracking-[0.15em] hover:bg-brand-red hover:text-white hover:-translate-y-0.5 transition-all duration-300 uppercase rounded-full cursor-pointer">
              Explore Sets
            </button>
          </motion.div>

          {/* Trust Elements under buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 font-medium tracking-wide"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-brand-red font-bold text-lg leading-none">
                ✓
              </span>{" "}
              Authentic Beards
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-1.5">
              <span className="text-brand-red font-bold text-lg leading-none">
                ✓
              </span>{" "}
              Private Sessions
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
