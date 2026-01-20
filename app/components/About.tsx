"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 bg-[#F6F2EC] py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2 }}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          <img
            src="/About.jpeg"
            alt="Oishii interior"
            className="w-full h-[320px] sm:h-[420px] md:h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#B89B6A] mb-3 sm:mb-4">
            Our Story
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 text-[#1F1F1F]">
            About Oishii
          </h2>

          {[
            "Oishii, meaning “delicious” in Japanese, is built on a simple belief: great food brings people together.",
            "Blending the refined artistry of Japanese cuisine with the bold, comforting flavors of Chinese cooking, Oishii offers a dining experience that celebrates the best of both worlds.",
            "Every dish is crafted with care, using the finest ingredients and time-honored techniques to create moments of pure joy around the table."
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed mb-4 sm:mb-6"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
