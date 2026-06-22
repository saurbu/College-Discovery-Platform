import React from "react"
import { useNavigate } from "react-router-dom"

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
      title: "🎓 Daily Updates",
      desc: "Latest Details",
      action: () => navigate("/reviews"),
      tag: "HOT",
    },
  ]

  return (
    <section className="px-4 py-12 bg-white">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-2xl font-bold text-center mb-2">
          Discover What’s Happening
        </h2>

        <p className="text-gray-500 text-center mb-8">
          Latest trends, rankings & updates in education
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {sections.map((item, index) => (
            <div
              key={index}
              onClick={item.action}
              className="border rounded-2xl p-6 hover:shadow-xl cursor-pointer transition bg-gradient-to-b from-white to-gray-50"
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

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default CategorySection