"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Hospital, Search, Settings, Tv2Icon, User2Icon } from "lucide-react";
import { usePathname } from "next/navigation";
import { GiDoctorFace } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { ToastContainer } from "react-toastify/unstyled";
// import logo and avatar if needed
// import logo from "../../../assets/rosterlogo3.png";
// import avatar from "../../../assets/avatar.png";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Sidebar with fixed width */}
          <aside className="">
            <div className="flex h-screen bg-gray-100">
              {/* Header */}
              <div className="fixed top-0 left-0 right-0 h-17 bg-[#0648A6] flex items-center justify-between px-3 z-20">
                <div className="flex items-center">
                  {/* <Image src={logo} alt="Logo" className="h-6 mt-3 w-auto px-4" /> */}
                  <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="text-white p-2 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
                  <div className="ml-4 w-[555px] relative flex items-center">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="bg-white/10 w-[555px] text-white placeholder-blue-200 px-4 py-3 pr-12 rounded-3xl focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" />
                  </div>
                <div className="flex items-center space-x-4">
                  <button className="text-white p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                  <button className="text-white pl-4 border-gray-400 flex items-center border-l gap-4 p-2">
                    {/* <Image src={avatar} alt="Logo" className="h-8 -mt-1 w-auto rounded-full" /> */}
                    Harry Jones
                  </button>
                  <button className="text-white pl-4 border-gray-400 flex items-center border-l gap-4 p-2">
                    <Settings className="h-6 w-6" />
                  </button>
                  <Link href="/login">
                  <button className="text-white cursor-pointer border-gray-400 flex items-center border-l gap-4 p-2">
                    <User2Icon className="h-6 w-6" />
                  </button>
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div
                className={`fixed top-14 left-0 h-[calc(100vh-3.5rem)] bg-[#0648A6] shadow-xl transition-all duration-300 ${
                  sidebarOpen ? "w-64" : "w-16"
                }`}
              >
                <nav className="p-2 space-y-4 mt-5">
                  <Link
                    href="/"
                    className={`flex items-center ${
                      sidebarOpen ? "px-4" : "justify-center"
                    } py-3 gap-2 p-2 rounded transition-all duration-300 group ${
                      pathname === "/"
                        ? "bg-white text-[#0648a6] rounded-tr-[50px]"
                        : "text-white hover:bg-white hover:text-[#0648a6] hover:rounded-tr-[50px]"
                    }`}
                  >
                    <div className="flex items-center">
                      <Tv2Icon className="h-6 w-auto" />
                      <span
                        className={`ml-3 ${sidebarOpen ? "block" : "hidden"}`}
                      >
                        Dashboard
                      </span>
                    </div>
                  </Link>
                    <Link
                    href="/dashboard/doctors"
                    className={`flex items-center ${
                      sidebarOpen ? "px-4" : "justify-center"
                    } py-3 gap-2 p-2 rounded transition-all duration-300 group ${
                      pathname === "/dashboard/doctors"
                        ? "bg-white text-[#0648a6] rounded-tr-[50px]"
                        : "text-white hover:bg-white hover:text-[#0648a6] hover:rounded-tr-[50px]"
                    }`}
                  >
                    <div className="flex items-center">
                      <FaUserDoctor className="h-6 w-auto" />
                      <span
                        className={`ml-3 ${sidebarOpen ? "block" : "hidden"}`}
                      >
                        Doctors
                      </span>
                    </div>
                  </Link>
                     <Link
                    href="/dashboard/hospitals"
                    className={`flex items-center ${
                      sidebarOpen ? "px-4" : "justify-center"
                    } py-3 gap-2 p-2 rounded transition-all duration-300 group ${
                      pathname === "/dashboard/hospitals"
                        ? "bg-white text-[#0648a6] rounded-tr-[50px]"
                        : "text-white hover:bg-white hover:text-[#0648a6] hover:rounded-tr-[50px]"
                    }`}
                  >
                    <div className="flex items-center">
                      <Hospital className="h-6 w-auto" />
                      <span
                        className={`ml-3 ${sidebarOpen ? "block" : "hidden"}`}
                      >
                        Hospitals
                      </span>
                    </div>
                  </Link>
                </nav>
              </div>
            </div>
          </aside>

          <main
            className={`transition-all duration-300 ${
              sidebarOpen ? "ml-64" : "ml-15"
            } flex-1 p-6 bg-[#edeef1] mt-14`}
          >
            <ToastContainer/>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
