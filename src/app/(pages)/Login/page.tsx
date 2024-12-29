import React from "react";
import logo from "@/src/app/assets/logo.svg";
import Image from "next/image";
import Chart from "@/src/components/blocks/chart/chart";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md bg-white   p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <Image src={logo} alt="Logo" width={130} height={30} />
          <p className="text-base text-[#333333] mt-4">Admin Login</p>
        </div>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <p className="mx-4 text-sm text-gray-500">or</p>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Form */}
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="mail@example.com"
              className="w-full border border-[#D9D9D9] rounded-lg px-4 py-2 text-[#D9D9D9] text-sm "
            />
            <p className="text-sm text-blue-500 mt-1 cursor-pointer text-right hover:underline">
              Forgot email?
            </p>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Min. 8 characters"
              className="w-full border border-[#D9D9D9]  rounded-lg px-4 py-2 text-[#D9D9D9] text-sm "
            />
            <p className="text-sm text-blue-500 text-right mt-1 cursor-pointer hover:underline">
              Forgot password?
            </p>
          </div>

          {/* Login Button */}
          <div className="flex justify-center mt-[88px]">
            <button
              type="submit"
              className=" w-[218px] px-2 py-3 bg-[#2A4C9E] text-white rounded-lg "
            >
              Login
            </button>
          </div>

         
          
        </form>
        
      </div>
    </div>
  );
};

export default LoginPage;
