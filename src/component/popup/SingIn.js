'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import Navigation from './components/Navigation';

const SignIn = () => {
  const [isMobileLogin, setIsMobileLogin] = useState(false);

  return (
    <div>
      <Navigation />
      <div 
        className="flex justify-center items-center min-h-screen bg-gray-100 pt-16"
        style={{
          backgroundImage: "url('/Onboarding.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[25em] w-full mx-4">
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full">
            <h2 className="text-2xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-r from-[#008ce4] to-[#00af9e]">
              Sign In
            </h2>
            <p className="text-[#7F8487] text-center mt-2">
              Welcome to <span className="font-bold text-[#7F8487]">Webseeder Learning</span>
            </p>
            <p className="text-[#7F8487] text-sm text-center mb-6 mt-2">
              Step Into The World Of Endless Possibilities
            </p>

            <div className="mb-4">
              <label className="block text-[#A7ABB9] text-sm font-medium">
                {isMobileLogin ? "Phone Number" : "Email"}
              </label>
              <input
                type={isMobileLogin ? "tel" : "email"}
                placeholder={isMobileLogin ? "Enter Phone Number" : "Enter Email"}
                className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mt-7 mb-6">
              <label className="block text-[#A7ABB9] text-sm font-medium">Enter Your OTP</label>
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button className="w-full bg-[#56B3ED] text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition">
              Send OTP
            </button>

            <p
              className="text-blue-500 text-center text-sm mt-4 cursor-pointer hover:underline"
              onClick={() => setIsMobileLogin(!isMobileLogin)}
            >
              {isMobileLogin ? "Login with Email →" : "Login with Mobile No. →"}
            </p>

            <div className="mt-4 flex items-center justify-start">
              <button className="flex items-center gap-2 border px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition">
                <FcGoogle className="text-xl" />
                <span className="text-gray-700">Sign in with Google</span>
              </button>
            </div>
          </div>
          
          <Link href="/">
            <p className="text-center text-sm text-white mt-4">
              <span className="text-white font-bold">← Webseeder Learning</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;