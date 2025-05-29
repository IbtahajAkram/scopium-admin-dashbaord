"use client"
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight,  Plus,X, Edit, Trash2 } from "lucide-react";
import Link from 'next/link';

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
const Hospitals = [
  {
    id: "01",
    College: "Aga Khan University Hospital (Karachi, Pakistan)",
    email: "info@aku.edu",
    Address: "Stadium Road, Karachi 74800, Pakistan",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKSdeImqEy5awsi7FTkQOk9UvxydwDAGyVA&s"
  },
  {
    id: "02",
    College: "Shaukat Khanum Memorial Cancer Hospital (Lahore, Pakistan)",
    email: "info@shaukatkhanum.org.pk",
    Address: "7A Block R-3, Johar Town, Lahore, Pakistan",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvW7TEscuAPzw6XFY9bJdJ6osO2wL6aOg-Ew&s"
  },
  {
    id: "03",
    College: "Liaquat National Hospital (Karachi, Pakistan)",
    email: "info@lnh.edu.pk",
    Address: "Stadium Road, Karachi 74800, Pakistan",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKe66xKtSPq1WF9mVhxsfTVEwvIWrz63Adg&s"
  },
  {
    id: "04",
    College: "Indus Hospital & Health Network (Karachi, Pakistan)",
    email: "info@tih.org.pk",
    Address: "Korangi Crossing, Karachi, Pakistan",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1kVuYG6CMeAIykef66L0tYcM4UW0YD5ro_A&s"
  },
  {
    id: "05",
    College: "Pakistan Institute of Medical Sciences (Islamabad, Pakistan)",
    email: "info@pims.gov.pk",
    Address: "G-8/3, Islamabad, Pakistan",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOXm_WXUUQsf1WbiXoYB3PSnfzkwQsh_1PSw&s"
  },
  {
    id: "06",
    College: "Jinnah Postgraduate Medical Centre (Karachi, Pakistan)",
    email: "info@jpmc.edu.pk",
    Address: "Rafiqui Shaheed Road, Karachi, Pakistan",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg3keQ35CgYPWnVt2b2yUxioXnZo4etLtTJQ&s"
  },
  {
    id: "07",
    College: "Combined Military Hospital (CMH) Lahore, Pakistan",
    email: "contact@cmhlahore.edu.pk",
    Address: "Abdur Rehman Road, Lahore Cantt, Pakistan",
    avatar: "https://media.licdn.com/dms/image/v2/D4D0BAQGikmLbWaQpCA/company-logo_200_200/company-logo_200_200/0/1698777366848?e=2147483647&v=beta&t=gJ_ReFnToF-fomWy8T-2yC71XoPDkDzqPUOKtIAX8Yk"
  },
  {
    id: "08",
    College: "Dow University Hospital (Karachi, Pakistan)",
    email: "info@duhs.edu.pk",
    Address: "Suparco Road, Gulzar-e-Hijri, Karachi, Pakistan",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpO-wijGHyN5XG8rzfQTkCaPFoDCFprFGYg&s"
  },
  {
    id: "09",
    College: "Ziauddin Hospital (Karachi, Pakistan)",
    email: "info@ziauddinhospital.com",
    Address: "Clifton, North Nazimabad, Kemari - Karachi, Pakistan",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhkZDB_DM0K6jDLACR6Q-dtU_pmnpcbGehQg&s"
  },
  {
    id: "10",
    College: "Bahria International Hospital (Lahore, Pakistan)",
    email: "info@bahriahospital.com",
    Address: "Bahria Town, Lahore, Pakistan",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHMdXBA277cypdajVIOOugv2WGDLRVTaAMBg&s"
  }
];


      
      
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
  return (
   <>
      <div className=" h-22 flex justify-between items-center mt-2 mb-4 -mx-6 text-[#0648A6] font-[500] text-[28px] p-8 ">
          Hospitals
          <div>

          <button onClick={()=>setAddCoachModal(true)} className="flex items-center gap-3 text-white bg-[#0648A6] py-3 px-8 mt-4 rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#0648A6] text-base">
  <Plus className="text-white animate-pulse" />
  <span className="font-semibold tracking-wide">Add Hospital</span>
</button>
{/* cc */}
          </div>
         </div>
       
         <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
           <div className="px-5 py-8  max-w-[962px] border-b border-gray-200 overflow-x-auto">
            <span className='text-[26px] mx-6 py-4 text-[#0648A6] font-[500]' >Hospitals</span>
             <table className="mt-6">
               <thead>
                 <tr className="bg-gray-50 text-left">
                   <th className="px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                     S.No
                   </th>
                   <th className="px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                   College
                   </th>
   
                   <th className="px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                   Address
                   </th>
                   <th className="px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                     Email
                   </th>
                   <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                     Action
                   </th>
                 </tr>
               </thead>
               <tbody className="divide-y overflow-x-auto divide-gray-200">
                 {Hospitals?.map((coach) => (
                   <tr
                     key={coach.id}
                     className="hover:bg-gray-50 cursor-pointer transition-colors"
                   >
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                       {coach.id}
                     </td>
                     <Link href="/super-admin/coaches">
                     <td className="px-6 py-4 whitespace-nowrap">
                       <div className="flex items-center">
                         <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                           <img
                             src={coach.avatar}
                             alt={coach.name}
                             className="h-full w-full object-cover"
                           />
                         </div>
                         <div className="ml-3">
                           <p className="text-sm font-[400] text-[14.7px]  text-[#2B2B2B]">
                             {coach.College}
                           </p>
                           
                         </div>
                       </div>
                     </td>
   </Link>
                     <td className="px-6 py-4  whitespace-nowrap">
                       <span className='text-[14.7px] font-[400]  text-[#2B2B2B]'>
                         {coach.Address}
                       </span>
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap font-[400] text-[14.7px]  text-[#2B2B2B]">
                       {coach.email}
                     </td>
                  
                     <td className="px-6 py-4 whitespace-nowrap text-sm">
                       <div className="flex space-x-3">
                         <button
                           onClick={() => handleEditCoach(coach)}
                           className="text-[#0648A6] hover:text-blue-500 rounded-md bg-gray-200 p-2 transition-colors"
                           aria-label="Edit"
                         >
                           <Edit size={18} />
                         </button>
                         <button
                           onClick={() => handleDelete(coach.id)}
                           className="text-red-500 hover:text-red-500 bg-red-100 p-2 rounded-md transition-colors"
                           aria-label="Delete"
                         >
                           <Trash2 size={18} />
                         </button>
                       </div>
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

              <div className=''>
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
  

   </>
  )
}

export default page
