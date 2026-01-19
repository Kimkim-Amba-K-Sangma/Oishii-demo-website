"use client"

import { motion } from "framer-motion"

export default function MenuPreview() {
  const dishes = [
    {
      name: "Kappamaki",
      desc: "Cucumber sushi",
      price: "₹270",
      image: "/Menu1.jpg",
    },
    {
      name: "Nabeyaki Ramen",
      desc: "Hot-pot soy broth with chicken, firm noodles, and softly cooked egg",
      price: "₹450",
      image: "/Menu2.jpg",
    },
    {
      name: "Teriyaki Don",
      desc: "Japanese rice bowl dish topped with teriyaki-glazed ingredients",
      price: "₹380",
      image: "/Menu3.jpg",
    },
    {
      name: "Sushi Boat",
      desc: "Sushi platter assortment of mixed sushi",
      price: "₹1,200",
      image: "/Menu4.jpg",
    },
  ]

  return (
    <section id="menu" className="bg-[#F6F2EC] py-20 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#B89B6A] text-center mb-3 sm:mb-4"
        >
          Menu Preview
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mb-4 text-[#1F1F1F]"
        >
          Signature Dishes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-sm sm:text-base text-[#4A4A4A] mb-10 sm:mb-12 md:mb-16"
        >
          A curated selection of our most beloved creations
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {dishes.map((dish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.15, duration: 0.9 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="font-serif text-lg sm:text-xl mb-2 text-[#1F1F1F]">
                  {dish.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#6A6A6A] mb-4">
                  {dish.desc}
                </p>

                <div className="mt-auto">
                  <p className="text-[#B89B6A] font-semibold text-base sm:text-lg">
                    {dish.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
