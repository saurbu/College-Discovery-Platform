import React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import collegeImg from "../../assets/image.png"

const CategorySection = () => {
  const navigate = useNavigate()

  const sections = [
    {
      title: "🔥 Trending Colleges",
      desc: "Most searched colleges this week",
      action: () => navigate("/colleges?sort=trending"),
      tag: "LIVE",
    },
    {
      title: "🏆 Top Ranked Colleges",
      desc: "India’s highest ranked institutions",
      action: () => navigate("/colleges?sort=ranking"),
      tag: "TOP",
    },
    {
      title: "📢 Latest Admission Updates",
      desc: "Deadlines, forms & notifications",
      action: () => navigate("/admissions"),
      tag: "NEW",
    },
    {
      title: "📊 Cutoff Trends",
      desc: "Previous year cutoff analysis",
      action: () => navigate("/cutoffs"),
      tag: "DATA",
    },
    {
      title: "🎓 College Reviews",
      desc: "Real student experiences",
      action: () => navigate("/reviews"),
      tag: "HOT",
    },
    {
      title: "📅 Daily Updates",
      desc: "Latest Details",
      action: () => navigate("/reviews"),
      tag: "NEW",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-pink-200 to-purple-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Discover What’s Happening
          </motion.h2>
        
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-8 text-lg"
          >
            Latest trends, rankings & updates in education
          </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={collegeImg}
              alt="College"
              className=" w-full max-w-lg object-cover"
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {sections.map((item, index) => (
              <motion.div
                key={index}
                onClick={item.action}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default CategorySection