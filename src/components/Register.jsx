import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
  })

  const [generatedOtp, setGeneratedOtp] = useState("")
  const [enteredOtp, setEnteredOtp] = useState("")

  const generateOtp = () => {
    if (!form.mobile) {
      alert("Enter mobile number first")
      return
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString()

    setGeneratedOtp(otp)

    alert(`Demo OTP: ${otp}`)
  }

  const registerUser = () => {
    if (
      !form.name ||
      !form.email ||
      !form.mobile ||
      !form.city
    ) {
      alert("Please fill all fields")
      return
    }

    if (!generatedOtp) {
      alert("Generate OTP first")
      return
    }

    if (enteredOtp !== generatedOtp) {
      alert("Invalid OTP")
      return
    }

    localStorage.setItem("isLoggedIn", "true")

    localStorage.setItem(
      "user",
      JSON.stringify(form)
    )

    alert("Registration Successful")

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
          Discover the best colleges, entrance exams,
          courses and career opportunities across India.
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

          <p>✓ Compare colleges side by side</p>
          <p>✓ Save your favourite colleges</p>
          <p>✓ Check rankings & placements</p>
          <p>✓ Explore exams & admissions</p>

        </div>

      </div>

      <div className="flex items-center justify-center px-6 py-10 lg:px-20 bg-gray-50">

        <div className="w-full max-w-md">

          <div className="flex bg-gray-200 p-1 rounded-xl mb-8">

            <button
              onClick={() => navigate("/login")}
              className="flex-1 py-3 rounded-lg font-medium"
            >
              Login
            </button>

            <button
              className="flex-1 py-3 rounded-lg bg-blue-600 text-white font-medium"
            >
              Register
            </button>

          </div>

          <h2 className="text-3xl font-bold mb-2">
            Create Account
          </h2>

          <p className="text-gray-500 mb-8">
            Start your college journey today
          </p>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={(e) =>
                setForm({
                  ...form,
                  mobile: e.target.value,
                })
              }
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="City"
              value={form.city}
              onChange={(e) =>
                setForm({
                  ...form,
                  city: e.target.value,
                })
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
                        className="w-full border rounded-xl px-4 py-3 mb-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
            <button
              onClick={registerUser}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
            >
              Create Account
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

export default Register