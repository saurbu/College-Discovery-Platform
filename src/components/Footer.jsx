import React from "react"
import { useNavigate } from "react-router-dom"

const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-xl font-bold">CollegeFind⚲</h2>
          <p className="text-gray-400 text-sm mt-3">
            Find the best colleges, exams and courses in India with simple and reliable data.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li onClick={() => navigate("/")} className="cursor-pointer hover:text-white">Home</li>
            <li onClick={() => navigate("/colleges")} className="cursor-pointer hover:text-white">Colleges</li>
            <li onClick={() => navigate("/compare")} className="cursor-pointer hover:text-white">Compare</li>
            <li onClick={() => navigate("/saved")} className="cursor-pointer hover:text-white">Saved</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Top Categories</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Engineering</li>
            <li className="hover:text-white cursor-pointer">Medical</li>
            <li className="hover:text-white cursor-pointer">MBA</li>
            <li className="hover:text-white cursor-pointer">Law</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CollegeFind⚲. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer