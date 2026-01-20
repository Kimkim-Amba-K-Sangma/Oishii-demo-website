"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-[#2C2A27] text-[#EDE7DC] pt-16 sm:pt-20 md:pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16 md:gap-20 pb-12 sm:pb-14 md:pb-16"
        >

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <img
                src="/logo.png"
                alt="Oishii Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <span className="font-serif text-xl sm:text-2xl">
                Oishii
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#BFB8AC] leading-relaxed max-w-sm">
              Modern Japanese & Chinese dining experience that celebrates the art of great food.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-serif text-lg sm:text-xl mb-4 sm:mb-6">Quick Links</p>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-[#BFB8AC]">
              <li>
                <a href="#hero" className="hover:text-[#D8C2A1] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D8C2A1] transition">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D8C2A1] transition">
                  About
                </a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-[#D8C2A1] transition">
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-serif text-lg sm:text-xl mb-4 sm:mb-6">Connect With Us</p>

            <div className="flex gap-4 sm:gap-6 mb-4 sm:mb-6">
              {/* Instagram */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/the_oishii_tura"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#3A3733] flex items-center justify-center hover:bg-[#D8C2A1] transition"
              >
                <img
                  src="/instagram.svg"
                  alt="Instagram"
                  className="w-4 sm:w-5"
                />
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://wa.me/919101547611"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#3A3733] flex items-center justify-center hover:bg-[#D8C2A1] transition"
              >
                <img
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  className="w-4 sm:w-5"
                />
              </motion.a>
            </div>

            <p className="text-sm sm:text-base text-[#BFB8AC] max-w-xs">
              Chat with us on WhatsApp for reservations and inquiries.
            </p>
          </div>

        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="border-t border-[#3A3733] py-6 sm:py-8 text-center text-xs sm:text-sm text-[#A8A095]"
        >
          © 2026 Oishii Restaurant. All rights reserved.
        </motion.div>

      </div>
    </footer>
  )
}
