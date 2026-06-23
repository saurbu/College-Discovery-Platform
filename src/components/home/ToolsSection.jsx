import React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import toolsImage from "../../assets/img2.png"

const ToolsSection = () => {
  const navigate = useNavigate()

  const tools = [
    {
      title: "College Predictor",
      desc: "Predict your best college based on rank",
      route: "/predictor",
      icon: "🎯",
      color: "from-blue-100 to-blue-50",
    },
    {
      title: "Compare Colleges",
      desc: "Compare fees, ranking & placements",
      route: "/compare",
      icon: "⚖️",
      color: "from-purple-100 to-purple-50",
    },
    {
      title: "Exam Finder",
      desc: "Find exams after 12th or graduation",
      route: "/exams",
      icon: "📚",
      color: "from-green-100 to-green-50",
    },
    {
      title: "Top Colleges",
      desc: "Discover top ranked colleges in India",
      route: "/colleges",
      icon: "🏆",
      color: "from-yellow-100 to-yellow-50",
    },
    {
      title: "Admission Guide",
      desc: "Step-by-step admission process",
      route: "/guide",
      icon: "🧭",
      color: "from-pink-100 to-pink-50",
    },
    {
      title: "Check Result",
      desc: "All Result Link Available",
      route: "/results",
      icon: "📋",
      color: "from-cyan-100 to-cyan-50",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-slate-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-3"
            >
              Explore Career Tools
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-8"
            >
              Everything you need to plan your future and make
              informed education decisions.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-5">

              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  onClick={() => navigate(tool.route)}
                  className={`
                    bg-gradient-to-br ${tool.color}
                    p-6 rounded-3xl
                    cursor-pointer
                    shadow-md
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all duration-300
                  `}
                >
                  <div className="text-4xl mb-3">
                    {tool.icon}
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {tool.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {tool.desc}
                  </p>
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
              src={toolsImage}
              alt="Career Tools"
              className="w-full max-w-xl object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ToolsSection