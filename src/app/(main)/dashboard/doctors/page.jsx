"use client";
import { ChevronLeft, ChevronRight, X, Edit, Trash2, Plus } from "lucide-react";
import React, { useState } from "react";
const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [addCoachModal, setAddCoachModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const doctorsData = [
    {
      id: "01",
      name: "Dr. Sarah Ahmed",
      email: "sarah.ahmed@gmail.com",
      designation: "Cardiologist",
      remarks: "Experienced in heart surgery",
      specialization: "Cardiology",
      patients: 1400,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18iJOVhEhF-asLzeMXR1vlpDnaH0GJpnTxyLIjXeBJ602732sZu0UC-qeF1-TYklQaXA&usqp=CAU",
    },
    {
      id: "02",
      name: "Dr. Amir Khan",
      email: "amir.khan@gmail.com",
      designation: "Neurologist",
      remarks: "Expert in brain disorders",
      specialization: "Neurology",
      patients: 1200,
      avatar:
        "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*",
    },
    {
      id: "03",
      name: "Dr. Hina Sheikh",
      email: "hina.sheikh@gmail.com",
      designation: "Dermatologist",
      remarks: "Specialist in skin care",
      specialization: "Dermatology",
      patients: 850,
      avatar:
        "https://oladoc.com/dist/images/banner-doc-2_highly-compressed.webp?v=1745234985",
    },
    {
      id: "04",
      name: "Dr. Faisal Raza",
      email: "faisal.raza@gmail.com",
      designation: "Orthopedic Surgeon",
      remarks: "Joint and bone specialist",
      specialization: "Orthopedics",
      patients: 670,
      avatar:
        "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
    },
    {
      id: "05",
      name: "Dr. Ayesha Malik",
      email: "ayesha.malik@gmail.com",
      designation: "Pediatrician",
      remarks: "Child health expert",
      specialization: "Pediatrics",
      patients: 1100,
      avatar:
        "https://images.apollo247.in/doctors/3cb99f7c-a331-4776-84d5-3693db0a1815-1704301128825.png?tr=q-80,f-auto,w-100,dpr-2.5,c-at_max%20250w",
    },
  ];
  const handleEditCoach = (coach) => {
    setSelectedCoach(coach);
    setIsModalOpen(true);
  };
  const filteredCoaches = doctorsData.filter(
    (coach) =>
      coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.ceil(filteredCoaches.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCoaches = filteredCoaches.slice(startIndex, endIndex);
  const getSportBadgeColor = (specialization) => {
    switch (specialization) {
      case "Cardiology":
        return "bg-amber-500 text-white";
      case "Neurology":
        return "bg-emerald-500 text-white";
      case "Dermatology":
        return "bg-blue-600 text-white";
      case "Orthopedics":
        return "bg-orange-500 text-white";
      case "Pediatrics":
        return "bg-cyan-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  const handleDelete = (id) => {
    console.log(`Delete doctor with ID: ${id}`);
  };
  return (
    <>
      {" "}
      <div className="h-22 mt-2 mb-7 -mx-6 text-[#0648A6] font-[500] text-[28px] p-8">
        {" "}
        Doctors{" "}
      </div>{" "}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {" "}
        <div className="overflow-x-auto py-6 bg-gray-50 border-b border-gray-200">
          {" "}
          <span className="text-[23px] mx-6 flex items-center justify-between py-3 text-[#0648A6] font-[500]">
            {" "}
            All Doctors{" "}
            <div className="mt-7">
              {" "}
              <button
                onClick={() => setAddCoachModal(true)}
                className="flex items-center -mt-9 gap-3 text-white bg-[#0648A6] py-3 px-4 rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
              >
                {" "}
                <Plus className="text-white animate-pulse" />{" "}
                <span className="font-semibold tracking-wide text-sm">
                  {" "}
                  Add Doctor{" "}
                </span>{" "}
              </button>{" "}
            </div>{" "}
          </span>{" "}
          <table className="mt-2 w-full">
            {" "}
            <thead>
              {" "}
              <tr className="bg-gray-50 text-left">
                {" "}
                <th className="px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  S.No
                </th>{" "}
                <th className="px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctor Name
                </th>{" "}
                <th className="px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Specialization
                </th>{" "}
                <th className="px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>{" "}
                <th className="px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Remarks
                </th>{" "}
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody className="divide-y divide-gray-200">
              {" "}
              {currentCoaches.map((coach) => (
                <tr
                  key={coach.id}
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  {" "}
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {coach.id}
                  </td>{" "}
                  <td className="px-6 py-4">
                    {" "}
                    <div className="flex items-center">
                      {" "}
                      <img
                        src={coach.avatar}
                        alt={coach.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />{" "}
                      <div className="ml-3">
                        {" "}
                        <p className="text-sm font-medium text-gray-900">
                          {coach.name}
                        </p>{" "}
                        <p className="text-xs text-gray-500">{coach.email}</p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </td>{" "}
                  <td className="px-6 py-4">
                    {" "}
                    <span
                      className={`px-2.5 py-1 text-xs font-medium rounded-full ${getSportBadgeColor(
                        coach.specialization
                      )}`}
                    >
                      {" "}
                      {coach.specialization}{" "}
                    </span>{" "}
                  </td>{" "}
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {coach.email}
                  </td>{" "}
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {coach.remarks}
                  </td>{" "}
                  <td className="px-6 py-4">
                    {" "}
                    <div className="flex space-x-3">
                      {" "}
                      <button
                        onClick={() => handleEditCoach(coach)}
                        className="text-[#0648A6] hover:text-blue-500 bg-gray-200 p-2 rounded-md"
                        aria-label="Edit"
                      >
                        {" "}
                        <Edit size={18} />{" "}
                      </button>{" "}
                      <button
                        onClick={() => handleDelete(coach.id)}
                        className="text-red-500 hover:text-red-500 bg-red-100 p-2 rounded-md"
                        aria-label="Delete"
                      >
                        {" "}
                        <Trash2 size={18} />{" "}
                      </button>{" "}
                    </div>{" "}
                  </td>{" "}
                </tr>
              ))}{" "}
            </tbody>{" "}
          </table>{" "}
        </div>{" "}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          {" "}
          <div className="text-sm text-gray-500">
            {" "}
            Showing{" "}
            <span className="font-medium">
              {Math.min(startIndex + 1, filteredCoaches.length)}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {Math.min(endIndex, filteredCoaches.length)}
            </span>{" "}
            of <span className="font-medium">{filteredCoaches.length}</span>{" "}
            entries{" "}
          </div>{" "}
          <div className="flex items-center space-x-2">
            {" "}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-1.5 rounded-md ${
                currentPage === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-500 hover:bg-gray-200"
              }`}
              aria-label="Previous page"
            >
              {" "}
              <ChevronLeft size={18} />{" "}
            </button>{" "}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-8 h-8 rounded-md flex items-center justify-center text-sm ${
                  currentPage === page
                    ? "bg-blue-600 text-white font-medium"
                    : "text-gray-500 hover:bg-gray-200"
                }`}
              >
                {" "}
                {page}{" "}
              </button>
            ))}{" "}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-1.5 rounded-md ${
                currentPage === totalPages
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-500 hover:bg-gray-200"
              }`}
              aria-label="Next page"
            >
              {" "}
              <ChevronRight size={18} />{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          {" "}
          <div className="bg-white w-full max-w-3xl rounded-xl p-8 relative shadow-lg">
            {" "}
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="absolute top-4 right-5 text-2xl font-bold text-gray-500 hover:text-black"
            >
              {" "}
              <X />{" "}
            </button>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {" "}
              <div>
                {" "}
                <label className="block font-medium mb-1">Name</label>{" "}
                <input
                  type="text"
                  placeholder="Name"
                  value={selectedCoach ? selectedCoach.name : ""}
                  className="w-full p-3 border placeholder:text-gray-400  rounded-lg bg-[#e2e2e2] focus:outline-none outline-none border-none focus:ring-2 focus:ring-blue-600"
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <label className="block font-medium mb-1">Email</label>{" "}
                <input
                  type="text"
                  placeholder="Email"
                  value={selectedCoach ? selectedCoach.email : ""}
                  className="w-full p-3 border placeholder:text-gray-400  rounded-lg bg-[#e2e2e2] focus:outline-none outline-none border-none focus:ring-2 focus:ring-blue-600"
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <label className="block font-medium mb-1">
                  Phone Number
                </label>{" "}
                <input
                  type="numver"
                  placeholder="Phone Number"
                  value={"+1 (123) 456-7890"}
                  className="w-full p-3 border placeholder:text-gray-400  rounded-lg bg-[#e2e2e2] focus:outline-none outline-none border-none focus:ring-2 focus:ring-blue-600"
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <label className="block font-medium mb-1">Remarks</label>{" "}
                <input
                  type="text"
                  placeholder="Remarks"
                  value={selectedCoach ? selectedCoach.remarks : ""}
                  className="w-full p-3 placeholder:text-gray-400 placeholder:text-gray-400  rounded-lg bg-[#e2e2e2] focus:outline-none outline-none -none focus:ring-2 focus:ring-blue-600"
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="mb-6">
              {" "}
              <label className="block font-medium mb-1">
                Select Specialization
              </label>{" "}
              <div className="flex items-center placeholder:text-gray-400  rounded-lg bg-[#e2e2e2] rounded-lg px-3 py-3">
                {" "}
                <select className="flex-1 text-gray-600 bg-transparent focus:outline-none">
                  {" "}
                  <option>
                    {" "}
                    {selectedCoach ? selectedCoach.sport : "Select Specialization "}{" "}
                  </option>{" "}
                  <option> Cardiologist</option> <option>Neurology</option>{" "}
                  <option>Dermatology</option> <option>Pediatrics</option>{" "}
                </select>{" "}
              </div>{" "}
            </div>{" "}
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-all"
            >
              {" "}
              Update{" "}
            </button>{" "}
          </div>{" "}
        </div>
      )}{" "}
      {addCoachModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          {" "}
          <div className="bg-white w-full max-w-3xl rounded-xl p-8 relative shadow-lg">
            {" "}
            <button
              onClick={() => setAddCoachModal(!addCoachModal)}
              className="absolute top-4 right-5 text-2xl font-bold text-gray-500 hover:text-black"
            >
              {" "}
              <X />{" "}
            </button>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {" "}
              <div>
                {" "}
                <label className="block font-medium mb-1">
                  Doctor Name
                </label>{" "}
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border placeholder:text-gray-600  rounded-lg bg-[#e2e2e2] focus:outline-none outline-none border-none focus:ring-2 focus:ring-blue-600"
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <label className="block font-medium mb-1">
                  Remarks
                </label>{" "}
                <input
                  type="text"
                  placeholder="Remarks"
                  className="w-full p-3 border placeholder:text-gray-600  rounded-lg bg-[#e2e2e2] focus:outline-none outline-none border-none focus:ring-2 focus:ring-blue-600"
                />{" "}
              </div>{" "}
              <div>
                {" "}
           
                {" "}
                {/* <label className="block font-medium mb-1">Student</label>{" "}
                <input
                  type="text"
                  placeholder="Student"
                  className="w-full p-3 placeholder:text-gray-400 placeholder:text-gray-600  rounded-lg bg-[#e2e2e2] focus:outline-none outline-none -none focus:ring-2 focus:ring-blue-600"
                />{" "} */}
              </div>{" "}
              
            </div>
            
            <div className="mb-6">
                 <div className="-mt-8">
                <label className="block font-medium mb-1">Email</label>{" "}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border placeholder:text-gray-600  rounded-lg bg-[#e2e2e2] focus:outline-none outline-none border-none focus:ring-2 focus:ring-blue-600"
                />{" "}
              </div>{" "}
              {" "}
              <label className="block font-medium mb-1 mt-3">Specialization</label>{" "}
              <div className="flex items-center placeholder:text-gray-600  rounded-lg bg-[#e2e2e2] rounded-lg px-3 py-3">
                {" "}
                <select className="flex-1 py-0.5 text-gray-600 bg-transparent focus:outline-none">
                  {" "}
                  <option value="">
                    {" "}
                    {selectedCoach ? selectedCoach.sport : "Select Specialization"}{" "}
                  </option>{" "}
                   <option> Cardiologist</option> <option>Neurology</option>{" "}
                  <option>Dermatology</option> <option>Pediatrics</option>{" "}
                </select>{" "}
              </div>{" "}
            </div>{" "}
            <button
              onClick={() => setAddCoachModal(!addCoachModal)}
              className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-all"
            >
              {" "}
              Add Doctor{" "}
            </button>{" "}
          </div>{" "}
        </div>
      )}
    </>
  );
};
export default Page;
