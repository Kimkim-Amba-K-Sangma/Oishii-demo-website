"use client"

import { motion } from "framer-motion"

export default function Gallery() {
  const images = [
    "/G1.jpg",
    "/G2.jpg",
    "/Menu2.jpg",
    "/Menu4.jpg",
    "/G5.jpeg",
    "/Reservation.jpeg",
  ]

  return (
    <section
      id="gallery"
      className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 bg-[#F6F2EC] py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#B89B6A] text-center mb-3 sm:mb-4"
        >
          Gallery
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-10 sm:mb-12 md:mb-16 text-[#1F1F1F]"
        >
          Moments & Flavors
        </motion.h2>

        {/* Images */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.8 }}
              className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
            >
              <div className="relative aspect-square w-full">
                <img
                  src={src}
                  alt="Gallery"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
