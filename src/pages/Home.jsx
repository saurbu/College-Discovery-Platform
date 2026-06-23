import React from "react"
import Navbar from "../components/Navbar"
import HeroSection from "../components/home/HeroSection"
import CategorySection from "../components/home/CategorySection"
import FeaturedSection from "../components/home/FeaturedSection"
import ToolsSection from "../components/home/ToolsSection"
import TopColleges from "../components/home/TopColleges"
import Impact from "../components/home/Impact"

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />

      <HeroSection />
      <CategorySection />
      <FeaturedSection />
      <TopColleges />
      <ToolsSection />
      <Impact />
    </div>
  )
}

export default Home