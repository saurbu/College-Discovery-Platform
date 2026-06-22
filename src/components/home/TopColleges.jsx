import React from "react"
import { useNavigate } from "react-router-dom"
import { collegeDetails } from "../../data/collegeDetails"

const TopColleges = () => {
  const navigate = useNavigate()

  return (
    <section className="px-4 py-14 bg-gray-50">

      <div className="max-w-6xl mx-auto">

        <div className="flex items-end justify-between mb-8">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Top Colleges Preview
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Most trusted institutions across India
            </p>
          </div>

          <button
            onClick={() => navigate("/colleges")}
            className="text-blue-600 font-medium text-sm hover:underline"
          >
            View All →
          </button>

        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {collegeDetails.slice(0, 6).map((c, i) => (
            <div
              key={c.id}
              onClick={() => navigate(`/college/${c.id}`)}
              className="
                bg-white rounded-2xl p-5
                border border-gray-100 shadow-sm
                cursor-pointer
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
              "
            >

              <div className="flex items-center justify-between mb-3">

                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                  Top {i + 1}
                </span>

                <span className="text-xs text-gray-400 capitalize">
                  {c.category}
                </span>

              </div>

              <h3 className="font-semibold text-lg leading-snug text-gray-900">
                {c.name}
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                📍 {c.location}
              </p>

              <p className="text-gray-500 text-sm">
                🎓 {c.exam}
              </p>

              <div className="mt-4 text-sm font-medium text-blue-600">
                View Details →
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  )
}

export default TopColleges