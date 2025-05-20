

'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const logos = [
  { src: '/image.png', alt: 'Google News' },
  { src: '/image-1.png', alt: 'Economic Times' },
  { src: '/image-2.png', alt: 'Logo' },
  { src: '/image-3.png', alt: 'Logo' },
  { src: '/image-4.png', alt: 'Logo' },
  { src: '/image-5.png', alt: 'Logo' },
  { src: '/image-6.png', alt: 'Logo' },
  { src: '/image-7.png', alt: 'Logo' },
  { src: '/image-8.png', alt: 'Logo' },
];

const Logos = () => {
  const containerRef = useRef(null);
  const requestRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollSpeed = 1.5; // Adjust speed as needed
  const duplicatedLogos = [...logos, ...logos]; // Double the logos for seamless loop

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    let lastTimestamp = 0;
    const duration = 16; // ~60fps

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;

      if (deltaTime >= duration && !isHovered && container) {
        container.scrollLeft += scrollSpeed;

        // Reset to start when reaching halfway (seamless loop)
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }

        lastTimestamp = timestamp;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isHovered]);

  return (
    <div className="bg-[#F8F9FA] py-16 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <h4 className="text-center text-[#7B7B7B] text-3xl md:text-5xl font-semibold mb-12">
          As Featured In
        </h4>
        
        <div 
          ref={containerRef}
          className="overflow-x-hidden w-full no-scrollbar"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex w-max">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={`${logo.alt}-${index}`}
                className="flex-shrink-0 px-4 md:px-8 transition-transform duration-300 hover:scale-105"
              >
                <div className="w-32 md:w-40 h-12 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={80}
                    className="object-contain h-full w-full grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient fade effects */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none" />

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Logos;