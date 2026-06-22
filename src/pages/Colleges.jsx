import React from "react"
import { useSearchParams } from "react-router-dom"
import { collegeDetails } from "../data/collegeDetails"
import CollegeCard from "../components/CollegeCard"

const Colleges = () => {
  const [params] = useSearchParams()

  const category = params.get("category")
  const search = params.get("search")

  let data = [...collegeDetails]

  // CATEGORY FILTER
  if (category) {
    data = data.filter((c) => c.category === category)
  }

  // SEARCH FILTER
  if (search) {
    const q = search.toLowerCase()

    data = data.filter(
      (c) =>
        c.name?.toLowerCase().includes(q) ||
        c.exam?.toLowerCase().includes(q) ||
        c.location?.toLowerCase().includes(q) ||
        c.category?.toLowerCase().includes(q)
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-2">

      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Colleges
          </h1>

          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Discover top colleges, rankings, exams & admission details in one place
          </p>

          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
          </div>

        </div>

        {/* CONTENT */}
        {data.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 pb-12">

            {data.map((c, i) => (
              <div
                key={c.id}
                className="transform transition duration-300 hover:-translate-y-1"
              >
                <CollegeCard college={c} index={i} />
              </div>
            ))}

          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-3">🔍</div>
            <h2 className="text-xl font-semibold text-gray-700">
              No colleges found
            </h2>
            <p className="text-gray-500 mt-2">
              Try searching with different keywords or filters
            </p>
          </div>
        )}

      </div>
    </div>
  )
}

export default Colleges