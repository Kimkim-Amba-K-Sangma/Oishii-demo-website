"use client"

import { motion } from "framer-motion"

export default function Hero() {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen bg-[url('/Hero.jpeg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif leading-snug md:leading-tight max-w-xl md:max-w-4xl"
        >
          Where Japanese Precision <br />
          Meets Chinese Flavor
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-300"
        >
          Modern Asian dining in an elegant space
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <button
            onClick={() => scrollTo("menu")}
            className="px-8 sm:px-10 py-3 sm:py-4 bg-[#E6D1B3] text-black uppercase tracking-widest text-xs sm:text-sm hover:bg-[#d6c0a0] transition"
          >
            View Menu
          </button>

          <button
            onClick={() => scrollTo("reservation")}
            className="px-8 sm:px-10 py-3 sm:py-4 border border-white uppercase tracking-widest text-xs sm:text-sm hover:bg-white hover:text-black transition"
          >
            Reserve Table
          </button>
        </motion.div>
      </div>
    </section>
  )
}
