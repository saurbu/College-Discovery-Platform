import React from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

const alumni = [
  {
    name: "Saurav Sharma",
    college: "IIT Delhi",
    company: "Google",
    package: "₹92 LPA",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    college: "AIIMS Delhi",
    company: "Apollo Hospitals",
    package: "₹32 LPA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Aman Gupta",
    college: "NIT Trichy",
    company: "Microsoft",
    package: "₹45 LPA",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Sneha Kapoor",
    college: "BITS Pilani",
    company: "Amazon",
    package: "₹41 LPA",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Karan Singh",
    college: "VIT Vellore",
    company: "Adobe",
    package: "₹28 LPA",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
]

const Impact = () => {
  return (
    <section className=" bg-gradient-to-r py-10 from-blue-50 via-white to-purple-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">
            Alumni Success Stories
          </h2>

          <p className="text-gray-600 mt-3">
            Students who transformed their careers through top colleges.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={25}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {alumni.map((person, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl m-5 p-6 shadow-lg hover:shadow-2xl transition-all duration-300">

                <div className="flex items-center gap-4">

                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-bold text-lg">
                      {person.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {person.college}
                    </p>
                  </div>

                </div>

                <div className="mt-5">

                  <p className="text-gray-600">
                    Placed at
                  </p>

                  <h4 className="text-xl font-bold text-blue-600">
                    {person.company}
                  </h4>

                  <p className="mt-3 text-green-600 font-semibold">
                    Package: {person.package}
                  </p>

                </div>

                <div className="mt-5 border-t pt-4 text-sm text-gray-500">
                  "The right college helped me build skills,
                  confidence and a successful career."
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  )
}

export default Impact