import React from "react"
import { useNavigate } from "react-router-dom"

const FeaturedSection = () => {
  const navigate = useNavigate()

  const items = [
    {
      title: "Top Colleges in India",
      desc: "Ranked and verified institutions",
      route: "/colleges?sort=top",
      icon: "🏆",
      color: "from-blue-100 to-blue-50",
    },
    {
      title: "Top Engineering Colleges",
      desc: "IITs, NITs and private colleges",
      route: "/colleges?category=engineering",
      icon: "⚙️",
      color: "from-purple-100 to-purple-50",
    },
    {
      title: "Trending Courses",
      desc: "Most popular career paths",
      route: "/courses?sort=trending",
      icon: "📚",
      color: "from-green-100 to-green-50",
    },
  ]

  return (
    <section className="px-4 py-14 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Featured Discoveries
          </h2>
          <p className="text-gray-500 mt-2">
            Handpicked insights to guide your career
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(item.route)}
              className={`
                cursor-pointer rounded-2xl p-6
                bg-gradient-to-br ${item.color}
                shadow-sm
                transform transition-all duration-500 ease-out
                hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl
                opacity-0 animate-fadeUp
              `}
              style={{
                animationDelay: `${i * 150}ms`,
                animationFillMode: "forwards",
              }}
            >

              {/* ICON */}
              <div className="text-4xl mb-4 animate-bounce">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-600 mt-2">
                {item.desc}
              </p>

              {/* CTA */}
              <div className="mt-4 text-sm font-medium text-blue-600">
                Explore →
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* ANIMATION STYLE */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0px);
            }
          }

          .animate-fadeUp {
            animation: fadeUp 0.6s ease-out forwards;
          }
        `}
      </style>

    </section>
  )
}

export default FeaturedSection