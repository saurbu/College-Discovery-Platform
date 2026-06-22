import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  const [mobile, setMobile] = useState("")
  const [generatedOtp, setGeneratedOtp] = useState("")
  const [enteredOtp, setEnteredOtp] = useState("")

  const generateOtp = () => {
    if (!mobile) {
      alert("Please enter mobile number")
      return
    }

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString()

    setGeneratedOtp(otp)

    alert(`Demo OTP: ${otp}`)
  }

  const verifyOtp = () => {
    if (!generatedOtp) {
      alert("Generate OTP first")
      return
    }

    if (enteredOtp !== generatedOtp) {
      alert("Invalid OTP")
      return
    }

    localStorage.setItem("isLoggedIn", "true")

    alert("Login Successful")

    navigate("/")
    window.location.reload()
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      <div className="hidden lg:flex bg-blue-900 text-white p-16 flex-col justify-center">

        <h1 className="text-5xl font-bold">
          CollegeFind⚲
        </h1>

        <p className="mt-5 text-lg text-blue-100">
          Find the best colleges, exams, courses and
          career opportunities across India.
        </p>

        <div className="grid grid-cols-3 gap-8 mt-14">

          <div>
            <h2 className="text-3xl font-bold">
              40K+
            </h2>
            <p className="text-blue-200">
              Colleges
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              600+
            </h2>
            <p className="text-blue-200">
              Exams
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              3L+
            </h2>
            <p className="text-blue-200">
              Courses
            </p>
          </div>

        </div>

        <div className="mt-12 space-y-3 text-blue-100">
          <p>✓ Compare Colleges</p>
          <p>✓ Save Favourite Colleges</p>
          <p>✓ Explore Exams & Courses</p>
          <p>✓ Placement & Ranking Insights</p>
        </div>

      </div>

      <div className="flex items-center justify-center px-6 py-10 lg:px-20 bg-gray-50">

        <div className="w-full max-w-md">

          <div className="flex bg-gray-200 p-1 rounded-xl mb-8">

            <button
              className="flex-1 py-3 rounded-lg bg-blue-600 text-white font-medium"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="flex-1 py-3 rounded-lg font-medium"
            >
              Register
            </button>

          </div>

          <h2 className="text-3xl font-bold mb-2">
            Welcome Back
          </h2>

          <p className="text-gray-500 mb-8">
            Login using your mobile number
          </p>

          <div className="space-y-4">

            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) =>
                setMobile(e.target.value)
              }
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={generateOtp}
              className="w-full bg-orange-500 text-white py-3 rounded-xl font-medium hover:bg-orange-600"
            >
              Generate OTP
            </button>

            {generatedOtp && (
            <>
                <div className="animate-fadeIn">

                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={enteredOtp}
                    onChange={(e) =>
                    setEnteredOtp(e.target.value)
                    }
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    onClick={verifyOtp}
                    className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
                >
                    Verify & Login
                </button>

                </div>
            </>
            )}

          </div>

        </div>

      </div>

    </div>
  )
}

export default Login