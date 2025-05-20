"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, PlayCircle, Clock } from "lucide-react";

export default function SectionAccordion({ title, lectures }) {
  const [open, setOpen] = useState(false);

  return (
    <div className=" rounded-md shadow">
      <button
        className="w-full px-4 py-3 flex items-center font-semibold text-base text-left"
        onClick={() => setOpen(!open)}
      >
        {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        {title}
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-2">
          {lectures.map((lec, idx) => (
            <div key={idx} className="flex justify-between items-center text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <PlayCircle className="w-4 h-4 text-blue-500" />
                <span>{lec.title}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{lec.time}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
