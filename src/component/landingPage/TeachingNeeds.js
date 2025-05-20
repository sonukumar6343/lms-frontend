"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useAuth } from "../Contextlogin/AuthContext";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function TeachingNeeds() {
  const { isLoggedIn } = useAuth();
  const containerRef = useRef(null);

  // motion values for normalized mouse position
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // map mouse to rotation angles
  const rotateX = useTransform(mouseY, [0, 1], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 1], [-5, 5]);

  // map rotation to shadow offsets
  const shadowX = useTransform(rotateY, [-5, 5], [-20, 20]);
  const shadowY = useTransform(rotateX, [-5, 5], [-20, 20]);

  // combine shadow offsets into a CSS boxShadow string
  const boxShadow = useTransform(
    [shadowX, shadowY],
    ([x, y]) => `${x}px ${y}px 40px rgba(0, 0, 0, 0.1)`
  );

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mouseX.set(px);
    mouseY.set(py);
  };

  const handleMouseLeave = () => {
    // reset to center
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section className="flex items-center justify-center h-screen xl:mb-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Animated Image */}
          <motion.div
            ref={containerRef}
            className="hidden lg:block flex-1 max-w-3xl h-[30em] relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              boxShadow,
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <motion.div className="absolute inset-0 rounded-lg overflow-hidden"
              style={{ rotateX, rotateY }}
            >
              <Image
                src="/singing.webp"
                alt="Teaching Needs"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-[#E5F3FC] text-[#008CE8] px-3 py-2 rounded-full inline-block mb-4">
              Best Learning Management System
            </div>

            <h1 className="text-4xl font-bold md:w-[15em]">
              All-in-One Solution For Your Teaching Needs
            </h1>

            <p className="text-[#7F8490] mt-4 xl:w-[36em] text-lg lg:w-[29em] md:w-[30em]">
              We’re the go-to Webseedr for music educators and performers — trusted by maestros and rising stars alike to teach, share, and monetize their musical talent — all in one place.
            </p>

            <span className="flex items-center text-[#1D293F] mr-4 mt-5 bg-[#F7F8FA] px-2 py-3 xl:w-[30em] md:w-[30em] rounded-lg">
              <Image src="/right.png" alt="right icon" width={30} height={50} />
              <p className="font-semibold ml-2">
                Manage your Offline & Online coaching all at one place.
              </p>
            </span>

            {isLoggedIn ? (
              <Link href="/courses">
                <button className="px-6 py-3 mt-10 text-[#008ce4] border border-[#008ce4] rounded-full hover:bg-[#008ce4] hover:text-white transition-colors">
                  Explore Courses
                </button>
              </Link>
            ) : (
              <Link href="/studentRegistration">
                <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                  Sign Up Now
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}