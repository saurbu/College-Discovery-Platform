import { Routes, Route, useLocation } from "react-router-dom"

import Home from "./pages/Home"
import Colleges from "./pages/Colleges"
import CollegeDetails from "./pages/CollegeDetails"
import Compare from "./pages/Compare"
import Saved from "./pages/Saved"

import SearchResults from "./components/SearchResults"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Login from "./components/Login"
import Register from "./components/Register"

function App() {
  const location = useLocation()

  const authPages =
    location.pathname === "/login" ||
    location.pathname === "/register"

  return (
    <>
      {/* Navbar only for non-auth pages */}
      {!authPages && <Navbar />}

      <div
        className={
          authPages
            ? "min-h-screen"
            : "pt-28 lg:pt-32 min-h-screen bg-gray-50"
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/college/:id" element={<CollegeDetails />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/search" element={<SearchResults />} />

          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      {/* Footer only for non-auth pages */}
      {!authPages && <Footer />}
    </>
  )
}

export default App