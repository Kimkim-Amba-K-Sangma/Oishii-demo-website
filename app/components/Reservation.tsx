"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Reservation() {
  const RESTAURANT_NUMBER = "919101547611"

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    notes: "",
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (!form.name || !form.phone || !form.date || !form.time || !form.guests) {
      alert("Please fill all required fields")
      return
    }

    const message = `Hello Oishii 👋,

I would like to reserve a table.

Name: ${form.name}
Phone: ${form.phone}
Date: ${form.date}
Time: ${form.time}
Guests: ${form.guests}
Special Requests: ${form.notes || "None"}

Thank you.`

    const url = `https://wa.me/${RESTAURANT_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const inputStyle =
    "w-full p-3 sm:p-4 rounded-lg border border-[#E5DCCB] bg-white text-sm sm:text-base text-[#1F1F1F] placeholder:text-[#7A6F63] focus:ring-2 focus:ring-[#C9B28B] outline-none"

  return (
    <section
      id="reservation"
      className="scroll-mt-24 bg-[#F6F2EC] py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px] sm:h-[520px] md:h-[700px]"
        >
          <img
            src="/Reservation.jpeg"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          onSubmit={handleSubmit}
          className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-6 sm:p-10 md:p-12 border border-[#E6D9C3]"
        >
          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1F1F1F]">
              Book Your Experience
            </h3>

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className={inputStyle}
            />

            <input
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              required
              className={inputStyle}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="date"
                name="date"
                onChange={handleChange}
                required
                className={inputStyle}
              />
              <input
                type="time"
                name="time"
                onChange={handleChange}
                required
                className={inputStyle}
              />
            </div>

            <input
              name="guests"
              placeholder="Number of Guests"
              onChange={handleChange}
              required
              className={inputStyle}
            />

            <textarea
              name="notes"
              placeholder="Special requests"
              onChange={handleChange}
              className={`${inputStyle} h-24`}
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-[#D8C2A1] text-white py-3 sm:py-4 rounded-full tracking-widest text-xs sm:text-sm uppercase hover:shadow-[0_0_30px_rgba(216,194,161,0.8)] transition"
          >
            Confirm Reservation
          </button>
        </motion.form>

      </div>
    </section>
  )
}
