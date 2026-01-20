"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 bg-[#F6F2EC] py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16 md:mb-24"
        >
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#B89B6A] mb-3 sm:mb-4">
            Contact
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F1F1F]">
            Visit Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-24 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="space-y-10 sm:space-y-14 md:space-y-16 text-[#3A3A3A]"
          >
            {[
              {
                icon: MapPin,
                title: "Address",
                content: "OISHII Restaurant\nTura, Meghalaya\nIndia",
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+91 9101547611",
              },
              {
                icon: Clock,
                title: "Opening Hours",
                content: "Monday – Sunday\n12:00 PM – 11:00 PM",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-4 sm:gap-6 md:gap-8"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow flex items-center justify-center">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#B89B6A]" />
                  </div>

                  <div>
                    <p className="font-serif text-lg sm:text-xl mb-1 sm:mb-2">
                      {item.title}
                    </p>
                    <p className="leading-relaxed whitespace-pre-line text-sm sm:text-base">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-[#E6D9C3]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3600.7813227449196!2d90.18675549999999!3d25.5123386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757f18e5d404b5b%3A0xf69d6f8691232439!2sOISHII!5e0!3m2!1sen!2sin!4v1768142762383!5m2!1sen!2sin"
              className="w-full h-[260px] sm:h-[320px] md:h-[420px] border-0"
              loading="lazy"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
