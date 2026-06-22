import React from "react"
import SearchBar from "../SearchBar"

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden h-screen bg-gradient-to-b from-blue-50 via-white to-white px-4 py-16 md:py-24">

      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        <span className="inline-block px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full mb-4">
          India’s Smart College Finder
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Find the <span className="text-blue-600">Best College</span> for Your Future
        </h1>

        <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto">
          Search colleges, exams, courses, rankings and compare options to make the right career choice.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-3xl transition">
            <SearchBar />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-gray-500">
          <span className="px-3 py-1 bg-gray-100 rounded-full">Engineering</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full">Medical</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full">MBA</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full">Law</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full">Design</span>
        </div>

      </div>
    </section>
  )
}

export default HeroSection