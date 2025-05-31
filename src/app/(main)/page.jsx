"use client";
import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  X,
  Edit,
  Trash2,
  Eye,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import api from "../utils/axiosInterceptor";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
const page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [addCoachModal, setAddCoachModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collegeImage, setCollegeImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCollegeImage(URL.createObjectURL(file));
    }
  };

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    api
      .get("/ekg/admin/all_doctors/")
      .then((response) => {
        if (response.data.status) {
          setDoctors(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      });
  }, []);
  const handleEditCoach = (coach) => {
    setSelectedCoach(coach);
    setIsModalOpen(true);
  };
  // Get sport specific badge color
  const getSportBadgeColor = (sport) => {
    switch (sport) {
      case "Basketball":
        return "bg-amber-500 text-white";
      case "Football":
        return "bg-emerald-500 text-white";
      case "Cricket":
        return "bg-blue-600 text-white";
      case "Tennis":
        return "bg-orange-500 text-white";
      case "Swimming":
        return "bg-cyan-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  const handleEdit = (id) => {
    console.log(`Edit coach with ID: ${id}`);
  };
  const handleDelete = (id) => {
    console.log(`Delete coach with ID: ${id}`);
  };
  // Optional: Top 10 only

  const colors = [
    "#6366F1",
    "#4F46E5",
    "#3B82F6",
    "#0EA5E9",
    "#06B6D4",
    "#10B981",
    "#84CC16",
    "#FACC15",
    "#FB923C",
    "#F472B6",
  ];
  const [selectedDoctorPatients, setSelectedDoctorPatients] = useState([]);
  const [viewPatientsModal, setViewPatientsModal] = useState(false);
  const handleViewPatients = async (doctorId) => {
    try {
      const response = await api.get(
        `/ekg/admin/specific_doctor_patient/?doctor_id=${doctorId}`
      );
      if (response.data.status) {
        setSelectedDoctorPatients(response.data.data); // Adjust based on response format
        setViewPatientsModal(true);
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isPatientModalOpen, setIsPatientModalOpen] = useState(false);
  const handleDoctorClick = (doctorId) => {
    api
      .get(`/ekg/admin/patients_by_doctor/${doctorId}/`)
      .then((response) => {
        setPatients(response.data); // array of patient objects
      })
      .catch((err) => console.error(err));
  };
  const diseaseData = selectedPatient?.casedetail?.testsuggestion.map((d) => ({
    name: d.diseases_name,
    probability: (d.probability * 100).toFixed(2),
  }));
  return (
    <>
      <div className=" h-22 flex justify-between items-center mt-2 mb-4 -mx-6 text-[#0648A6] font-[500] text-[28px] p-8 ">
        Dashboard
        <div>
          <button
            onClick={() => setAddCoachModal(true)}
            className="flex items-center gap-3 text-white bg-[#0648A6] py-3 px-8 mt-4 rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#0648A6] text-base"
          >
            <Plus className="text-white animate-pulse" />
            <span className="font-semibold tracking-wide">Add Doctor</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-5 py-8  max-w-[962px] border-b border-gray-200 overflow-x-auto">
          <span className="text-[26px] mx-6 py-4 text-[#0648A6] font-[500]">
            Hospitals
          </span>

          <table className="mt-6 w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  S.No
                </th>
                <th className="px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  First Name
                </th>
                <th className="px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Last Name
                </th>
                <th className="px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  View
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {doctors?.map((coach, index) => (
                <tr
                  key={coach.id || index}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {coach.fname}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {coach.lname}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {coach.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => handleViewPatients(coach.id)}
                      className="text-blue-600 cursor-pointer hover:text-blue-800 p-2 rounded-md transition"
                      aria-label="View"
                    >
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white w-full max-w-3xl rounded-xl p-8 relative shadow-lg">
              <button
                onClick={() => setIsModalOpen(!isModalOpen)}
                className="absolute top-4 right-5 text-2xl font-bold text-gray-500 hover:text-black"
              >
                <X />{" "}
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-medium mb-1">Hospital</label>
                  <input
                    type="text"
                    placeholder="Name"
                    value={selectedCoach ? selectedCoach.College : ""}
                    className="w-full p-3 border placeholder:text-gray-400  rounded-lg bg-[#e2e2e2] focus:outline-none outline-none border-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Address</label>
                  <input
                    type="text"
                    placeholder="Email"
                    value={selectedCoach ? selectedCoach.Address : ""}
                    className="w-full p-3 border placeholder:text-gray-400  rounded-lg bg-[#e2e2e2] focus:outline-none outline-none border-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    value={selectedCoach ? selectedCoach.email : ""}
                    className="w-full p-3 placeholder:text-gray-400 placeholder:text-gray-400  rounded-lg bg-[#e2e2e2] focus:outline-none outline-none -none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(!isModalOpen)}
                className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-all"
              >
                Update
              </button>
            </div>
          </div>
        )}
      </div>
      {addCoachModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white w-full max-w-3xl rounded-xl p-8 relative shadow-lg">
            <button
              onClick={() => setAddCoachModal(false)}
              className="absolute top-4 right-5 text-2xl font-bold text-gray-500 hover:text-black"
            >
              <X />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-medium mb-1">Hospital Name</label>
                <input
                  type="text"
                  placeholder="Hospital_Name"
                  className="w-full p-3 border  border-gray-200 placeholder:text-gray-600 rounded-lg bg-[#e2e2e2] focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Address</label>
                <input
                  type="text"
                  placeholder="Hospital Address"
                  className="w-full p-3 border  border-gray-200 placeholder:text-gray-600 rounded-lg bg-[#e2e2e2] focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Hospital Email</label>
                <input
                  type="email"
                  placeholder="Hospital Email"
                  className="w-full p-3 border  border-gray-200 placeholder:text-gray-600 rounded-lg bg-[#e2e2e2] focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="">
                <label className="block font-medium mb-1">Hospital Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full p-3 border placeholder:text-gray-300 cursor-pointer border-gray-200 rounded-lg bg-[#e2e2e2] focus:outline-none"
                />
                {collegeImage && (
                  <img
                    src={collegeImage}
                    alt="College Preview"
                    className="mt-3  rounded-lg shadow-md max-h-40 object-cover border"
                  />
                )}
              </div>
            </div>

            <button
              onClick={() => setAddCoachModal(false)}
              className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-all"
            >
              Add Hospital
            </button>
          </div>
        </div>
      )}
      {viewPatientsModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white w-full max-w-4xl rounded-xl p-8 relative shadow-lg max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setViewPatientsModal(false)}
              className="absolute top-4 right-5 text-2xl font-bold text-gray-500 hover:text-black"
            >
              <X />
            </button>

            <h2 className="text-xl font-semibold mb-4">Doctor's Patients</h2>

            {selectedDoctorPatients.length > 0 ? (
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="px-4 py-2 border-b">#</th>
                    <th className="px-4 py-2 border-b">Name</th>
                    <th className="px-4 py-2 border-b">Age</th>
                    <th className="px-4 py-2 border-b">Gender</th>
                    {/* Add more columns if needed */}
                  </tr>
                </thead>
                <tbody>
                  {selectedDoctorPatients.map((patient, index) => (
                    <tr
                      onClick={() => {
                        setSelectedPatient(patient);
                        setIsPatientModalOpen(true);
                      }}
                      key={index}
                      className="hover:bg-gray-50 cursor-pointer"
                    >
                      <td className="px-4 py-2 border-b">{index + 1}</td>
                      <td className="px-4 py-2 border-b">{patient.name}</td>
                      <td className="px-4 py-2 border-b">{patient.age}</td>
                      <td className="px-4 py-2 border-b">{patient.gender}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No patients found for this doctor.</p>
            )}
          </div>
        </div>
      )}

      {selectedPatient && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-lg p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition"
              onClick={() => setSelectedPatient(null)}
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-blue-800 border-b border-gray-300 pb-2">
              Patient Detail
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <p>
                <span className="font-semibold">Name:</span>{" "}
                {selectedPatient.name}
              </p>
              <p>
                <span className="font-semibold">Gender:</span>{" "}
                {selectedPatient.gender}
              </p>
              <p>
                <span className="font-semibold">Age:</span>{" "}
                {selectedPatient.age}
              </p>
              <p>
                <span className="font-semibold">MR No:</span>{" "}
                {selectedPatient.mrno}
              </p>
            </div>

            {/* Symptoms */}
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Symptoms:
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                ...new Set(
                  selectedPatient.casedetail?.symtoms.map((s) => s.symtoms)
                ),
              ].map((symptom, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {symptom}
                </span>
              ))}
            </div>

            {/* AI Recommendation */}
            <div className="flex items-center gap-2 text-blue-600 font-bold text-base mt-3 mb-2">
              <Sparkles size={16} /> AI Recommendation
            </div>
            <div className="relative bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-xl p-5 shadow-sm">
              <div className="absolute top-2 right-3 text-sm text-blue-500 font-semibold uppercase">
                AI Suggestion
              </div>

              <div
                className="  max-w-none text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: selectedPatient.casedetail?.ai_recommandation,
                }}
              />
            </div>

            {/* Test Suggestions */}
            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">
              Test Suggestions:
            </h3>
            <div className="space-y-2">
              {selectedPatient.casedetail?.testsuggestion.map((test, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm font-medium text-gray-600">
                    <span>{test.test_name}</span>
                    <span>{test.probability}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-500 h-3 rounded-full"
                      style={{ width: `${test.probability}%` }}
                    ></div>
                  </div>
                  {/* .. */}
                </div>
              ))}
            </div>

            {/* Diseases */}
            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">
              Possible Diseases:
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {selectedPatient.casedetail?.diseases.map((disease, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-100 rounded px-2 py-4 text-sm"
                >
                  <span className="font-medium">{disease.diseases_name}</span>
                  <span className="text-blue-600">
                    {(disease.probability * 100).toFixed(2)}%
                  </span>
                </div>
              ))}
            </div>

            <div className="relative w-full h-[400px] rounded-lg overflow-hidden mt-6">
              {/* Polygon background */}
              <svg
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <polygon points="0,100 0,20 100,40 100,100" fill="#c7d2fe" />
              </svg>

              {/* Bar Chart */}
              <div className="relative z-10 w-full h-full p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Disease Probability
                </h2>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={diseaseData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis
                      domain={[0, 100]}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar
                      dataKey="probability"
                      radius={[5, 5, 0, 0]}
                      fill="url(#colorUv)"
                      barSize={60} // ⬅️ Increased from 30 to 60
                    />

                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#9333ea"
                          stopOpacity={0.9}
                        />
                        <stop
                          offset="100%"
                          stopColor="#3b82f6"
                          stopOpacity={0.9}
                        />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Reference Links */}
            <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">
              Reference Links:
            </h3>
            <div className="space-y-2 gap-4">
              {selectedPatient.casedetail?.reference_link?.map((ref, index) => (
                <a
                  key={index}
                  href={ref.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block gap-4 text-sm bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-md transition"
                >
                  {ref.disease} Research →
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
