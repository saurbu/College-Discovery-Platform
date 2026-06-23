import React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import collegeIllustration from "../../assets/featured-college.png.png"

const FeaturedSection = () => {
  const navigate = useNavigate()

  const items = [
    {
      title: "Top Colleges in India",
      desc: "Ranked and verified institutions",
      route: "/colleges?sort=top",
      icon: "🏆",
      color: "from-blue-100 to-blue-50",
    },
    {
      title: "Top Engineering Colleges",
      desc: "IITs, NITs and private colleges",
      route: "/colleges?category=engineering",
      icon: "⚙️",
      color: "from-purple-100 to-purple-50",
    },
    {
      title: "Trending Courses",
      desc: "Most popular career paths",
      route: "/courses?sort=trending",
      icon: "📚",
      color: "from-green-100 to-green-50",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold mb-4"
            >
              Featured Discoveries
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-8 text-lg"
            >
              Handpicked insights to guide your college journey and
              help you make informed career decisions.
            </motion.p>

            <div className="space-y-5">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  onClick={() => navigate(item.route)}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className={`
                    group
                    cursor-pointer
                    rounded-3xl
                    p-6
                    bg-gradient-to-br ${item.color}
                    shadow-lg
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    border
                    border-slate-100
                  `}
                >
                  <div className="flex items-center gap-4">

                    <div className="text-4xl">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600 mt-1">
                        {item.desc}
                      </p>

                      <span className="inline-block mt-3 text-blue-600 font-medium">
                        Explore →
                      </span>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={collegeIllustration}
              alt="College Discovery"
              className="w-full max-w-xl object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default FeaturedSection