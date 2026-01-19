"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Menu", href: "#menu" },
    { name: "Reservation", href: "#reservation" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#EFE9E2]/80 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          : "bg-[#EFE9E2]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 md:py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#C9B28B] flex items-center justify-center overflow-hidden bg-white">
            <img src="/logo.png" alt="Oishii Logo" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
          </div>
          <span className="text-xl sm:text-2xl font-serif tracking-wide text-[#1F1F1F]">
            Oishii
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-[0.35em] text-[#4A4A4A]">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#C9B28B] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-[#4A4A4A]"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#EFE9E2] border-t border-[#E6D9C3]"
          >
            <div className="flex flex-col items-center gap-6 py-8 text-[11px] uppercase tracking-[0.35em] text-[#4A4A4A]">
              {links.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setOpen(false)}>
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
