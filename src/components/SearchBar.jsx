import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    if (!query.trim()) return

    navigate(`/search?query=${query.toLowerCase().trim()}`)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch()
  }

  return (
    <div className="flex-1 flex justify-center px-2 md:px-4">
      <div className="flex items-center w-full max-w-2xl bg-gray-200 rounded-full shadow-md px-4 py-2">

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search Colleges, Exams, Courses..."
          className="flex-1 bg-transparent outline-none"
        />

        <button onClick={handleSearch}>🔍︎</button>
      </div>
    </div>
  )
}

export default SearchBar