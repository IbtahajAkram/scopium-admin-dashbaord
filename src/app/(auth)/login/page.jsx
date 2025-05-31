"use client";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import api from "../../utils/axiosInterceptor"; // 👈 import interceptor instance
import Lottie from "lottie-react";
import animation from "../../../app/(main)/animations.json";
const page = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAnimation, setAnimation] = useState(false);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post("/ekg/login/", { email, password });

      // Toast success message after login
      toast.success("Login successful!");

      // Token ya user data handle karein
      const { token, user } = response.data;

      setAnimation(true)
      localStorage.setItem("token", token);
      setTimeout(() => {
        setAnimation(false)
        router.push("/");
      }, 1000);
      // Navigate to home or relevant page
    } catch (err) {
      const message =
        err.response?.data?.message || "Login failed. Please try again.";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };
  const Loader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    background: '#fff',
    flexDirection: 'column',
  }}>
    <Lottie animationData={animation} loop={true} style={{ width: 390, height: 390 }} />
    {/* <p
    className="mx-auto md:text-[15px]"
    style={{
      marginTop: '1px',
      color: '#EC003F',
      fontSize: '1rem',
      
      fontWeight: 'bold',
    }}>
      Loading your awesome products...
    </p> */}
  </div>
);
  return (

    <>
    {/* {showAnimation ? (
       <Loader />
      ) : ( */}
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <form
        noValidate
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
      >
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Welcome Back
        </h1>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white px-4 py-3 focus-within:border-[#0556f8] focus-within:ring-1 focus-within:ring-[#0556f8]">
              <input
                required
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent text-lg outline-none"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white px-4 py-3 focus-within:border-[#0556f8] focus-within:ring-1 focus-within:ring-[#0556f8]">
              <input
                required
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          <button
            type="button"
            disabled={loading}
            onClick={handleLogin}
            className="w-full cursor-pointer rounded-lg bg-[#0156ce] px-4 py-3 text-base font-medium text-white transition-colors hover:bg-[#2E69DE] focus:outline-none focus:ring-2 focus:ring-[#0556f8] focus:ring-offset-2 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>

          <p className="text-center mt-4 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-[#0556f8] hover:text-[#2E69DE]"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
    {/* )} */}
    </>
  );
};

export default page;
