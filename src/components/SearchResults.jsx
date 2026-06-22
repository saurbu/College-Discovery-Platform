import React from "react"
import { useLocation } from "react-router-dom"
import { collegeDetails } from "../data/collegeDetails"

const getCategoryFromQuery = (query) => {
  const q = query.toLowerCase()

  if (q.includes("jee") || q.includes("neet")) return "exam"
  if (q.includes("engineering")) return "engineering"
  if (q.includes("medical")) return "medical"
  return "college"
}

const SearchResults = () => {
  const { search } = useLocation()
  const query = new URLSearchParams(search).get("query") || ""

  const q = query.toLowerCase()
  const type = getCategoryFromQuery(q)

  const results = collegeDetails.filter((c) =>
    c.name.toLowerCase().includes(q) ||
    c.exam.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q)
  )

  return (
    <div className="bg-gray-50 min-h-screen pt-2">
      <div className="max-w-6xl mx-auto px-4">

        <h1 className="text-3xl font-bold text-center">
          Search Results
        </h1>

        <p className="text-center text-gray-500 mt-2">
          "{query}"
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">

          {results.map((c) => (
            <div
              key={c.id}
              className="bg-white p-5 rounded-2xl border shadow-sm hover:shadow-xl transition"
            >
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                COLLEGE
              </span>

              <h2 className="font-semibold text-lg mt-2">
                {c.name}
              </h2>

              <p className="text-sm text-gray-500">
                📍 {c.location}
              </p>

              <p className="text-sm text-gray-500">
                🎓 {c.exam}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default SearchResults