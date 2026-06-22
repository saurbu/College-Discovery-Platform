import React from "react"
import { useParams } from "react-router-dom"
import { collegeDetails } from "../data/collegeDetails"

const CollegeDetails = () => {
  const { id } = useParams()

  const college = collegeDetails.find((c) => c.id === id)

  if (!college) {
    return <div className="pt-24 text-center">Not Found</div>
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-24 px-4">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="bg-white p-6 rounded-2xl shadow border">
          <h1 className="text-3xl font-bold">{college.name}</h1>
          <p className="text-gray-500 mt-2">
            {college.category} • {college.location}
          </p>
        </div>
        <div className="mt-4 flex justify-center">
            <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
          </div>
        {/* DETAILS */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="bg-white p-5 rounded-2xl shadow border">
            <h2 className="font-semibold mb-2">About</h2>
            <p className="text-gray-600">{college.about}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow border space-y-2">

            <p><b>Exam:</b> {college.exam}</p>
            <p><b>Ranking:</b> {college.ranking}</p>
            <p><b>Fees:</b> {college.fees}</p>
            <p><b>Placements:</b> {college.placements}</p>
            <p><b>Established:</b> {college.established}</p>

          </div>

        </div>

      </div>
    </div>
  )
}

export default CollegeDetails