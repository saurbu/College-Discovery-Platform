import React from "react"
import { useNavigate } from "react-router-dom"

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
      route: "/guide",
      icon: "🏆",
      color: "from-pink-100 to-pink-50",
    },
  ]

  return (
    <section className="px-4 py-12 bg-gray-50">

      <h2 className="text-2xl font-bold mb-2 text-center">
        Explore Career Tools
      </h2>

      <p className="text-gray-500 text-center mb-8">
        Everything you need to plan your future
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">

        {tools.map((tool, index) => (
          <div
            key={index}
            onClick={() => navigate(tool.route)}
            className={`bg-gradient-to-br ${tool.color} p-6 rounded-2xl shadow hover:shadow-xl cursor-pointer transition transform hover:-translate-y-1`}
          >
            <div className="text-3xl mb-3">{tool.icon}</div>

            <h3 className="font-semibold text-lg mb-1">
              {tool.title}
            </h3>

            <p className="text-sm text-gray-600">
              {tool.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}



export default ToolsSection