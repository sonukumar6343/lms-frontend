"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useAuth } from "../Contextlogin/AuthContext";
import Link from "next/link";
const DeliverMonetize = () => {
  const [activeCard, setActiveCard] = useState(0);
  const { isLoggedIn } = useAuth();
  const cards = [
    {
      title: "Customised Learning",
      description: "Learn to play your favourite songs, be it classical or film, the choice is yours.",
      image: "/Customize.webp",
      width: 100,
      height: 100
    },
    {
      title: "100% Verified Tutors",
      description: "Learn from tutors who love teaching.",
      image: "/comfort.webp",
      width: 400,
      height: 200
    },
    {
      title: "Market your Content",
      description: "No travel, go at your own pace. All at the comfort of your home.",
      image: "/verified.webp",
      width: 200,
      height: 200
    }
  ];

  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/gradient-bg.png')"
      }}>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#2c3485] to-transparent opacity-40 blur-3xl" />
      <div className="absolute inset-0 bg-[url('/dots.png')] opacity-20 mix-blend-overlay" />
      <div className="container mx-auto px-4 relative z-10 mb-20 mt-20">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Deliver Music Lessons & Monetize Your Talent
            with<br />
            <span className="text-[rgba(246,248,255,0.6)]">
              WebSeeder Music Suite
            </span>
          </h2>
          <p className="text-[#F6F8FF] max-w-2xl mx-auto">
            Step away from the 9-to-5 — Live by Your Melody, Earn on Your Terms.
          </p>
          <Link href='/courses'>
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Explore Now
            </button>
          </Link>
        </div>

        {/* Desktop View (3 columns) */}
        {/* <div className="hidden lg:grid lg:grid-cols-3 gap-8 w-[80%] mx-auto">
          {cards.map((card, index) => (
            <div
              key={`desktop-${index}`}
              className="group bg-[#0e162e] p-8 rounded-xl border border-[#0B61A4] transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex justify-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className={`${index === 1 ? 'w-[150%]' : 'w-[114%]'} group-hover:scale-105 transition-transform duration-300`}
                    height={card.height}
                    width={card.width}
                  />
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-300 text-sm">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}


        <div className="hidden lg:grid lg:grid-cols-3 gap-8 w-[80%] mx-auto">
  <div className="group bg-[#0e162e] p-8 rounded-xl border border-[#0B61A4] transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <div className="flex justify-center">
        <Image
          src="/Customize.webp"
          alt="Customised Learning"
          className="w-[114%] group-hover:scale-105 transition-transform duration-300"
          height={200}
          width={400}
        />
      </div>
      <h3 className="mt-3 text-2xl font-semibold text-white">Customised Learning</h3>
      <p className="mt-2 text-gray-300 text-sm">Learn to play your favourite songs, be it classical or film, the choice is yours.</p>
    </div>
  </div>

  <div className="group bg-[#0e162e] p-8 rounded-xl border border-[#0B61A4] transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <div className="flex justify-center">
        <Image
          src="/comfort.webp"
          alt="100% Verified Tutors"
          className="w-[150%] group-hover:scale-105 transition-transform duration-300"
          height={200}
          width={400}
        />
      </div>
      <h3 className="mt-3 text-2xl font-semibold text-white">100% Verified Tutors</h3>
      <p className="mt-2 text-gray-300 text-sm">Learn from tutors who love teaching.</p>
    </div>
  </div>

  <div className="group bg-[#0e162e] p-8 rounded-xl border border-[#0B61A4] transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <div className="flex justify-center">
        <Image
          src="/verified.webp"
          alt="Market your Content"
          className="w-[114%] group-hover:scale-105 transition-transform duration-300"
          height={200}
          width={200}
        />
      </div>
      <h3 className="mt-3 text-2xl font-semibold text-white">Market your Content</h3>
      <p className="mt-2 text-gray-300 text-sm">No travel, go at your own pace. All at the comfort of your home.</p>
    </div>
  </div>
</div>


        {/* Mobile View (Carousel) */}
        <div className="lg:hidden w-full max-w-md mx-auto">
          {cards.map((card, index) => (
            <div
              key={`mobile-${index}`}
              className={`group bg-[#0e162e] p-8 rounded-xl border border-[#0B61A4] transition-all duration-500 relative overflow-hidden ${activeCard === index ? 'block opacity-100' : 'hidden opacity-0'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex justify-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className={`${index === 1 ? 'w-[150%]' : 'w-[114%]'} group-hover:scale-105 transition-transform duration-300`}
                    height={card.height}
                    width={card.width}
                  />
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-300 text-sm">
                  {card.description}
                </p>
              </div>
            </div>
          ))}

          {/* Dots indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {cards.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setActiveCard(index)}
                className={`w-3 h-3 rounded-full ${activeCard === index ? 'bg-blue-500' : 'bg-gray-500'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverMonetize;