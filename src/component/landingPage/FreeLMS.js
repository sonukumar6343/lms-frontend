"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../Contextlogin/AuthContext";
export default function FreeLMS() {
  const [showContent, setShowContent] = useState(false);
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    setShowContent(true);
  }, []);

  const leftAnimation = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const rightAnimation = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 ">
        <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto py-8 gap-8">
          <motion.div
            className="w-full lg:w-1/2 space-y-4"
            initial="hidden"
            animate={showContent ? "visible" : "hidden"}
            variants={leftAnimation}
          >
            <div className="mb-15">
              <div className="mb-4 sm:mb-6">
                <span className="bg-[#FFEFEF] text-[#FF635F] px-3 py-1.5 text-sm sm:text-base">
                  How Does It Work ?
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black lg:w-[10em] xl:w-full">
                Enjoy Full Access to Our <br />
                {/* <span className='text-[#A5A5A5]'>It&apos;s Just </span> */}
                <span className="text-blue-500">Free Music</span> Demo No
                Strings Attached!
              </h1>

              <div className="mt-8 sm:mt-10">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="/start_teaching.png"
                      alt="Start Teaching"
                      width={48}
                      height={48}
                      className="w-12 h-12 sm:w-15 sm:h-15"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#060609] mb-2">
                      Start your Learning Journey
                    </h4>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                      Just sign up, start Learning, and watch the Progress flow.
                      And yes — we take zero commission. Thank us later!
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-gray-300 my-6 sm:my-8 md:my-10" />

              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/integration_addons.png"
                    alt="Integrations & Addons"
                    width={48}
                    height={48}
                    className="w-12 h-12 sm:w-15 sm:h-15 "
                  />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#060609] mb-2">
                    Explore Music & Dance Courses
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    Learn at your own pace with fun, interactive lessons in
                    music and dance. From beginner to advanced, grow your
                    passion and talent with expert guidance.
                  </p>
                </div>
              </div>

              <hr className="border-gray-300 my-6 sm:my-8 md:my-10" />

              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/integrated_razorpay.png"
                    alt="Integrated With Razorpay"
                    width={48}
                    height={48}
                    className="w-12 h-12 sm:w-15 sm:h-15"
                  />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#060609] mb-2">
                    Fun After-School Activities
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    Keep learning exciting even after school with creative
                    crafts, storytelling, games, and hands-on fun that spark
                    imagination and teamwork.
                  </p>
                </div>
              </div>
              {isLoggedIn ? (
                <Link href="/demo">
                  <button className="mt-6 sm:mt-8 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors text-sm sm:text-base">
                    Explore Free Demo
                  </button>
                </Link>
              ) : (
                <Link href="/studentRegistration">
                  <button className="mt-6 sm:mt-8 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors text-sm sm:text-base">
                    Sign Up Now
                  </button>
                </Link>
              )}
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 hidden lg:flex items-center justify-center"
            initial="hidden"
            animate={showContent ? "visible" : "hidden"}
            variants={rightAnimation}
          >
            <div className="h-[20em] flex items-center justify-center">
              <img
                src="/man-playing-guitar.webp"
                className="w-full h-auto object-cover pointer-events-none"
              />


            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
