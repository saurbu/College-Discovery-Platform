import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BookmarkX } from "lucide-react"

const Saved = () => {
  const [savedColleges, setSavedColleges] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("savedColleges")) || []
    setSavedColleges(data)
  }, [])

  const removeSaved = (name) => {
    const updated = savedColleges.filter((c) => c.name !== name)
    setSavedColleges(updated)
    localStorage.setItem("savedColleges", JSON.stringify(updated))
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-2">

      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-10">

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Saved Colleges
          </h1>

          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Your shortlisted colleges for quick access
          </p>

          <div className="mt-4 flex justify-center">
            <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
          </div>

        </div>

        {savedColleges.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 pb-12">

            {savedColleges.map((c, i) => (
              <div
                key={i}
                className="
                  relative bg-white rounded-2xl p-5
                  border border-gray-100 shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                "
              >

                <button
                  onClick={() => removeSaved(c.name)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
                >
                  <BookmarkX size={20} />
                </button>

                <span className="inline-block text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full mb-3">
                  Saved
                </span>

                <h2 className="font-semibold text-lg">
                  {c.name}
                </h2>

                <div className="mt-3 text-sm text-gray-600 space-y-1">
                  <p>📍 {c.location}</p>
                  <p>🎓 {c.exam}</p>
                  <p>🏷 {c.category}</p>
                </div>

                {/* ACTION */}
                <button
                  onClick={() => navigate("/colleges")}
                  className="
                    mt-5 w-full bg-blue-600 text-white
                    py-2 rounded-lg text-sm
                    hover:bg-blue-700 transition
                  "
                >
                  Explore More
                </button>

              </div>
            ))}

          </div>
        ) : (
          <div className="text-center py-20">

            <div className="text-6xl mb-3">🔖</div>

            <h2 className="text-xl font-semibold text-gray-700">
              No saved colleges yet
            </h2>

            <p className="text-gray-500 mt-2">
              Click the bookmark icon on colleges to save them here
            </p>

            <button
              onClick={() => navigate("/colleges")}
              className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Browse Colleges
            </button>

          </div>
        )}

      </div>
    </div>
  )
}

export default Saved