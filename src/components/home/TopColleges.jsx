import React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import collegeImg from "../../assets/img1.png"

const PopularStreams = () => {
  const navigate = useNavigate()

  const engineering = [
    "IIT Delhi",
    "IIT Bombay",
    "NIT Trichy",
    "BITS Pilani",
    "VIT Vellore",
  ]

  const medical = [
    "AIIMS Delhi",
    "CMC Vellore",
    "JIPMER",
    "KGMU",
    "AFMC Pune",
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Top Colleges
          </motion.h2>
        
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-8 text-lg"
          >
            Check the Top colleges
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
              alt="College Illustration"
              className="w-full max-w-lg"
            />
          </motion.div>

          <div className="space-y-8">

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h3 className="text-3xl font-bold mb-3">
                🏗️ Engineering Colleges
              </h3>

              <p className="text-gray-600 mb-6">
                Top engineering institutions in India.
              </p>

              <div className="flex flex-wrap gap-3">
                {engineering.map((college, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      navigate("/colleges?category=engineering")
                    }
                    className="px-4 py-2 rounded-full border hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    {college}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h3 className="text-3xl font-bold mb-3">
                🏥 Medical Colleges
              </h3>

              <p className="text-gray-600 mb-6">
                Leading medical institutions in India.
              </p>

              <div className="flex flex-wrap gap-3">
                {medical.map((college, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      navigate("/colleges?category=medical")
                    }
                    className="px-4 py-2 rounded-full border hover:bg-green-50 hover:text-green-600 transition"
                  >
                    {college}
                  </button>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default PopularStreams