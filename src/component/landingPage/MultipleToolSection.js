"use client";

import React from "react";

import Image from 'next/image';
import Link from 'next/link';
const MultipleToolsSection = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center text-white bg-opacity-80"
        style={{ backgroundImage: "url('/gradient-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="w-full  px-4 md:px-16 py-12 rounded-lg">
          <section className="flex flex-col md:flex-row items-center justify-center">
            {/* Left Image - will stack above on mobile */}
            <div className="mb-8 md:mb-0 md:mr-12">
              <Image
                src="/hindustanis.webp"
                alt="Singer illustration"
                width={300}
                height={400}
                className="object-contain"
                priority
              />
            </div>

            {/* Right Text Content - centered */}
            <div className="max-w-xl space-y-4 text-center">
              <p className="text-green-400 text-lg font-medium">Book a FREE Trial class</p>
              <h2 className="text-2xl md:text-3xl font-bold">
                Live Online & Offline <span className="text-green-400">CLASS</span>
              </h2>
              <p className="text-gray-400">
                Begin your WebSeeder journey and get trained by a qualified WebSeeder
              </p>

              {/* Buttons */}
              <div className="flex gap-4 pt-4 justify-center">
                <Link href='/demo' className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold">
                  Book Now
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

  );
}


export default MultipleToolsSection;
