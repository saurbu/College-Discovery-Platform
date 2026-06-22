import React, { useState, useEffect } from "react"
import { Bookmark } from "lucide-react"
import { useNavigate } from "react-router-dom"

const CollegeCard = ({ college, index }) => {
  const navigate = useNavigate()
  const [saved, setSaved] = useState(false)

  const STORAGE_KEY = "savedColleges"

  // check saved state
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    const exists = savedList.some((c) => c.id === college.id)
    setSaved(exists)
  }, [college.id])

  const toggleSave = (e) => {
    e.stopPropagation() // IMPORTANT (prevents navigation click bugs)

    let savedList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []

    const exists = savedList.some((c) => c.id === college.id)

    if (exists) {
      savedList = savedList.filter((c) => c.id !== college.id)
      setSaved(false)
    } else {
      savedList.push(college)
      setSaved(true)
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedList))
  }

  return (
    <div
      onClick={() => navigate(`/college/${college.id}`)}
      className="
        relative bg-white rounded-2xl p-5
        shadow-sm border border-gray-100
        cursor-pointer
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl
      "
    >
      {/* SAVE BUTTON */}
      <button
        onClick={toggleSave}
        className={`absolute top-3 right-3 transition ${
          saved ? "text-red-500" : "text-gray-400"
        }`}
      >
        <Bookmark fill={saved ? "currentColor" : "none"} />
      </button>

      {/* CATEGORY */}
      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
        {college.category}
      </span>

      {/* NAME */}
      <h2 className="font-semibold text-lg mt-2">{college.name}</h2>

      {/* DETAILS */}
      <div className="text-sm text-gray-600 mt-3 space-y-1">
        <p>📍 {college.location}</p>
        <p>🎓 {college.exam}</p>
      </div>

      {/* BUTTON */}
      <button
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700"
        onClick={(e) => {
          e.stopPropagation()
          navigate(`/college/${college.id}`)
        }}
      >
        View Details
      </button>
    </div>
  )
}

export default CollegeCard