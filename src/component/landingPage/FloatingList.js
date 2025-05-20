"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  { icon: "🏋️‍♂️", label: "Fitness Trainer" },  // weightlifter
  { icon: "♟️", label: "Chess" },               // chess piece
  { icon: "💃", label: "Dance" },               // dancer
  { icon: "🧘‍♀️", label: "Yoga" },             // lotus position
  { icon: "🏫", label: "School Activity" },     // school building
  { icon: "🧠", label: "Life Coach" },          // brain
  { icon: "🎵", label: "Musician" },            // musical note
];


export default function FloatingList() {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="relative h-[350px]  w-full overflow-hidden bg-[#1a2a44] flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Floating Items */}
      <motion.div
        className="absolute w-full flex flex-col items-center gap-4 text-xl font-semibold text-blue-400"
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        style={{ opacity: hovered ? 0 : 1 }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span>{item.icon}</span> <span>{item.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Default "Can Do It" text on the right */}
      {!hovered && (
        <motion.div
          className="absolute right-[35%] text-white font-bold text-center text-xl"
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
        >
          Can Do It
        </motion.div>
      )}

      {/* Centered "You Can Do It!" on hover */}
      {hovered && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-white font-bold text-center text-2xl"
          initial={{ scale: 1 }}
          animate={{ scale: 1.5 }}
          transition={{ duration: 0.3 }}
        >
          You Can Do It!
        </motion.div>
      )}
    </div>
  );
}