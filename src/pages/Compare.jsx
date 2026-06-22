import React, { useState } from "react"
import { collegeDetails } from "../data/collegeDetails"

const Compare = () => {
  const [selected1, setSelected1] = useState(null)
  const [selected2, setSelected2] = useState(null)
  const [openPicker, setOpenPicker] = useState(null)

  const Row = ({ label, v1, v2 }) => (
    <div className="grid grid-cols-3 items-center py-5 border-b border-gray-100">

      <div className="text-center text-sm md:text-base font-medium text-gray-800">
        {v1}
      </div>

      <div className="text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full">
          {label}
        </span>
      </div>

      <div className="text-center text-sm md:text-base font-medium text-gray-800">
        {v2}
      </div>

    </div>
  )

  const CollegePicker = ({ onSelect }) => (
    <div className="fixed inset-0 bg-black/40 flex items-end md:items-center justify-center z-50">
      <div className="bg-white w-full md:w-[600px] max-h-[70vh] overflow-y-auto rounded-t-2xl md:rounded-2xl p-4">

        <h2 className="text-lg font-bold mb-4">Select College</h2>

        <div className="grid gap-3">
          {collegeDetails.map((c, i) => (
            <div
              key={i}
              onClick={() => {
                onSelect(c)
                setOpenPicker(null)
              }}
              className="p-3 border rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <p className="font-semibold">{c.name}</p>
              <p className="text-sm text-gray-500">{c.location}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )

  const showComparison = selected1 && selected2

  const SelectableName = ({ college, onClick, placeholder }) => (
    <button
      onClick={onClick}
      className="w-full text-center bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
    >
      {college ? (
        <>
          <p className="font-bold text-lg">{college.name}</p>
          <p className="text-sm text-gray-500">{college.location}</p>
        </>
      ) : (
        <p className="text-gray-400">{placeholder}</p>
      )}
    </button>
  )

  return (
    <div className="min-h-screen bg-gray-50 pt-2 px-4">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-10">
          Compare Colleges
        </h1>
        <div className="mt-4 flex justify-center">
          <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
        </div>
        {!showComparison && (
          <div className="grid md:grid-cols-2 pt-5 gap-6">

            <SelectableName
              college={selected1}
              placeholder="Click to select 1st college"
              onClick={() => setOpenPicker("c1")}
            />

            <SelectableName
              college={selected2}
              placeholder="Click to select 2nd college"
              onClick={() => setOpenPicker("c2")}
            />

          </div>
        )}

        {showComparison && (
          <div className="bg-white rounded-2xl shadow border p-6">

            <div className="grid grid-cols-3 items-center mb-10">

              <div className="text-center">
                <button
                  onClick={() => setOpenPicker("c1")}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-md w-full"
                >
                  <p className="font-bold">{selected1.name}</p>
                  <p className="text-sm text-gray-500">{selected1.location}</p>
                </button>
              </div>

              <div className="text-center text-2xl font-bold text-gray-400">
                VS
              </div>

              <div className="text-center">
                <button
                  onClick={() => setOpenPicker("c2")}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-md w-full"
                >
                  <p className="font-bold">{selected2.name}</p>
                  <p className="text-sm text-gray-500">{selected2.location}</p>
                </button>
              </div>

            </div>

            <Row label="Category" v1={selected1.category} v2={selected2.category} />
            <Row label="Exam" v1={selected1.exam} v2={selected2.exam} />
            <Row label="Ranking" v1={selected1.ranking} v2={selected2.ranking} />
            <Row label="Fees" v1={selected1.fees} v2={selected2.fees} />
            <Row label="Placements" v1={selected1.placements} v2={selected2.placements} />
            <Row label="About" v1={selected1.about} v2={selected2.about} />

          </div>
        )}

      </div>

      {/* PICKER */}
      {openPicker && (
        <div className="fixed inset-0 bg-black/40 flex items-end md:items-center justify-center z-50">
          <div className="bg-white w-full md:w-[600px] max-h-[70vh] overflow-y-auto rounded-t-2xl md:rounded-2xl p-4">

            <h2 className="text-lg font-bold mb-4">
              Select College
            </h2>

            <div className="grid gap-3">
              {collegeDetails.map((c, i) => (
                <div
                  key={i}
                  onClick={() => {
                    if (openPicker === "c1") setSelected1(c)
                    else setSelected2(c)
                    setOpenPicker(null)
                  }}
                  className="p-3 border rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-sm text-gray-500">{c.location}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Compare