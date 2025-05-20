"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const initialFeatures = [
  {
    title: "Webinars",
    description: "Create Free or Paid Webinars for your Community or New Audience in just one Click, using our In-built Tools.",
    icon: "📹",
  },
  {
    title: "Social Connect",
    description: "Manage Paid and Free Communities under One Roof. It's like your own Social Media Platform.",
    icon: "👥",
  },
  {
    title: "Live Classes",
    description: "Take classes with Zoom or try Free conferencing.",
    icon: "🎥",
  },
  {
    title: "Music Material",
    description: "Earn Profits easily with your own Music Material.",
    icon: "📜",
  },
  {
    title: "1:1 Consultation",
    description: "Monetize your Time with One-on-One Consultation.",
    icon: "💬",
  },
  {
    title: "Social Connect",
    description: "Manage Paid and Free Communities under One Roof. It's like your own Social Media Platform.",
    icon: "👥",
  },
];

function FeaturesSection() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [features, setFeatures] = useState([...initialFeatures, ...initialFeatures]);
  const cardWidth = 380; // Fixed card width as in original
  const gap = 24;
  const scrollDuration = 0.5;
  const pauseDuration = 3000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setCurrentIndex(prev => {
        const newIndex = prev + 1;
        // When we reach the end of the duplicated array, reset to 0 without animation
        if (newIndex >= initialFeatures.length) {
          setTimeout(() => {
            setCurrentIndex(0);
            setIsAnimating(false);
          }, scrollDuration * 1000);
          return newIndex;
        }
        return newIndex;
      });
      
      setTimeout(() => {
        setIsAnimating(false);
      }, scrollDuration * 1000);
    }, pauseDuration);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const transformValue = `-${currentIndex * (cardWidth + gap)}px`;

  return (
    <div className="py-12 mt-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-around items-center max-w-7xl mx-auto">
        <div className="text-center md:text-left  mb-8 md:mb-0 md:mr-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Just Plug and Play</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#008ce4] to-[#00af9e]">
            Our Features
          </h3>
        </div>
        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">
          <p className="mb-6 text-[#828284] text-lg sm:text-xl md:text-2xl">
            Even when you&apos;re not going live, your content keeps Recording.
          </p>
          <div className="mb-6">
            <span className="bg-[#008CE4] text-white text-sm sm:text-lg md:text-xl  rounded-full px-4 py-2 inline-block">
              • You keep everything as Recording content.
            </span>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-8 mt-10 mx-auto">
        <motion.div
          className="flex"
          ref={containerRef}
          animate={{
            x: transformValue,
          }}
          transition={{
            duration: isAnimating ? scrollDuration : 0,
            ease: "easeInOut",
          }}
          style={{
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
          }}
        >
          {features.map((feature, index) => (
            <div
              key={`${feature.title}-${index}`}
              className="flex-shrink-0"
              style={{
                width: `${typeof window !== 'undefined' && window.innerWidth < 768 ? window.innerWidth - 48 : cardWidth}px`,
                marginRight: `${gap}px`,
              }}
            >
              <div className="p-6 w-full rounded-xl shadow-lg flex items-start space-x-4 bg-[#F7F8FA] h-full hover:shadow-xl transition-all duration-300">
                <span className="text-3xl">{feature.icon}</span>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold">{feature.title}</h4>
                  <p className="text-[#65687E] text-xs sm:text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </div>
  );
}

// Export with dynamic to disable SSR
export default dynamic(() => Promise.resolve(FeaturesSection), {
  ssr: false
});