"use client";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const handleSignup = () => {
  //   setLoading(true);
  //   axiosInstance
  //     .post("/api/auth/register", formData )
  //     .then((res) => {
  //       setLoading(false);
  //       toast.success(res?.data?.message);
  //     })
  //     .catch((err) => {
  //       setError(err?.response?.data?.message || err?.message);
  //       toast.error(err?.response?.data?.message || err?.message);
  //       setLoading(false);
  //     });
  // };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <form
        noValidate
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
      >
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Create Account
        </h1>

        <div className="space-y-6">
        
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white px-4 py-3 focus-within:border-[#357AFF] focus-within:ring-1 focus-within:ring-[#357AFF]">
              <input
                required
                name="name"
                type="text"
                value={formData.name}
                onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
                placeholder="Enter your email"
                className="w-full bg-transparent text-lg outline-none"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white px-4 py-3 focus-within:border-[#357AFF] focus-within:ring-1 focus-within:ring-[#357AFF]">
              <input
                required
                name="email"
                type="email"
                value={formData.email}
                onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
                placeholder="Enter your email"
                className="w-full bg-transparent text-lg outline-none"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white px-4 py-3 focus-within:border-[#357AFF] focus-within:ring-1 focus-within:ring-[#357AFF]">
              <input
                required
                name="password"
                type="password"
                value={formData.password}
                onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
                className="w-full rounded-lg bg-transparent text-lg outline-none"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-500">
              {error}
            </div>
          )}
<Link href="/login">
          <button
            type="button"
            // onClick={studentSignup}
            disabled={loading}
            className="w-full cursor-pointer rounded-lg bg-[#0156ce] px-4 py-3 text-base font-medium text-white transition-colors hover:bg-[#2E69DE] focus:outline-none focus:ring-2 focus:ring-[#357AFF] focus:ring-offset-2 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
          </Link>
          <p className="text-center mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-[#357AFF] hover:text-[#2E69DE]">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default page;