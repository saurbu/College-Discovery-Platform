import React, { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import SearchBar from "./SearchBar"
import { Scale, Bookmark, Menu, X, ChevronDown } from "lucide-react"

const Navbar = () => {
  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false)
  const [catOpen, setCatOpen] = useState(false)
  const [showCategories, setShowCategories] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const lastScrollY = useRef(0)

  const categories = [
    { label: "⚒ Engineering", value: "engineering" },
    { label: "🩺 Medical", value: "medical" },
    { label: "⚖ Law", value: "law" },
    { label: "📐 Design", value: "design" },
    { label: "💼 Management", value: "management" },
    { label: "🏛️ University", value: "university" },
    { label: "📖 Schools", value: "school" },
  ]

  useEffect(() => {
    const auth = localStorage.getItem("isLoggedIn")
    setIsLoggedIn(auth === "true")
  }, [])

  const closeAllMenus = () => {
    setMenuOpen(false)
    setCatOpen(false)
  }

  const goToCategory = (cat) => {
    navigate(`/colleges?category=${cat.value}`)
    closeAllMenus()
    window.scrollTo(0, 0)
  }

  const openCompare = () => {
    navigate("/compare")
    closeAllMenus()
    window.scrollTo(0, 0)
  }

  const logout = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false)
    navigate("/")
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY

      if (currentY < lastScrollY.current) {
        setShowCategories(true)
      } else if (currentY > 100) {
        setShowCategories(false)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false)
      setCatOpen(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="h-16 md:h-20 fixed top-0 left-0 w-full z-50 bg-white shadow-md">

      <div className="h-16 flex items-center justify-between px-3 md:px-5 gap-3">

        {/* LOGO */}
        <div
          onClick={() => {
            navigate("/")
            closeAllMenus()
          }}
          className="flex items-center gap-2 cursor-pointer flex-shrink-0"
        >
          <img src="/collegelogo.png" className="w-10 h-10 md:w-12 md:h-12" />
          <h2 className="hidden sm:block font-semibold text-lg">
            CollegeFind⚲
          </h2>
        </div>

        {/* SEARCH */}
        <div className="flex-1 min-w-0 max-w-[600px] mx-2">
          <SearchBar />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-5 flex-shrink-0">

          <li
            onClick={openCompare}
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
          >
            <Scale size={18} />
            Compare
          </li>

          <li
            onClick={() => {
              navigate("/saved")
              closeAllMenus()
            }}
            className="flex items-center gap-1 cursor-pointer hover:text-green-600"
          >
            <Bookmark size={18} />
            Saved
          </li>

          {!isLoggedIn ? (
            <li>
              <button
                onClick={() => {
                  navigate("/login")
                  closeAllMenus()
                }}
                className="bg-blue-800 text-white px-4 py-1.5 rounded-full hover:bg-orange-400 hover:text-black"
              >
                Login
              </button>
            </li>
          ) : (
            <li>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-1.5 rounded-full"
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col p-4 gap-4">

            <button onClick={openCompare}>🔄 Compare</button>

            <button
              onClick={() => {
                navigate("/saved")
                closeAllMenus()
              }}
            >
              🔖 Saved
            </button>

            {!isLoggedIn ? (
              <button
                onClick={() => {
                  navigate("/login")
                  closeAllMenus()
                }}
                className="bg-blue-800 text-white px-4 py-2 rounded-full"
              >
                Login
              </button>
            ) : (
              <button
                onClick={() => {
                  logout()
                  closeAllMenus()
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-full"
              >
                Logout
              </button>
            )}

            <button
              className="flex items-center justify-between w-full"
              onClick={() => setCatOpen(!catOpen)}
            >
              Categories
              <ChevronDown
                size={18}
                className={`${catOpen ? "rotate-180" : ""} transition`}
              />
            </button>

            {catOpen && (
              <div className="pl-4 flex flex-col gap-2 text-gray-700">
                {categories.map((c) => (
                  <div
                    key={c.value}
                    onClick={() => goToCategory(c)}
                    className="cursor-pointer hover:text-red-500"
                  >
                    {c.label}
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      )}

      {/* CATEGORY BAR */}
      {showCategories && (
        <div className="hidden lg:block border-t h-[60px] bg-white pt-2">
          <div className="flex justify-center items-center gap-6 py-2 text-sm">
            {categories.map((c) => (
              <div
                key={c.value}
                onClick={() => goToCategory(c)}
                className="cursor-pointer hover:text-red-500"
              >
                {c.label}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

export default Navbar