// "use client";



// import useQueryContactStore from "@/store/queryContactStore";
// import Link from "next/link";
// import { useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";
// import { toast } from "react-toastify";
// export default function RequestCallback() {
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     contactNumber: "",
//     query: "",
//   });
//   const { createQuery, isLoading, error } = useQueryContactStore();

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Basic validation
//     if (!formData.fullName || !formData.contactNumber || !formData.query) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     // Split fullName into firstName and lastName
//     const nameParts = formData.fullName.trim().split(" ");
//     const firstName = nameParts[0] || "";
//     const lastName = nameParts.slice(1).join(" ") || "";

//     try {
//       await createQuery({
//         firstName,
//         lastName,
//         contactNumber: formData.contactNumber,
//         query: formData.query,
//       });
//       // Reset form and close it on success
//       setFormData({ fullName: "", contactNumber: "", query: "" });
//       setShowForm(false);
//       toast.success("Query submitted successfully!");
//     } catch (err) {
//       // Error is already managed in the store, display it
//       toast.error(error || "Failed to submit query");
//     }
//   };

//   return (
//     <>
//       {/* Request a Callback Floating Button */}
//       <div className="fixed bottom-5 right-47 z-50 flex flex-col items-end space-y-2">
//         <Link
//           href="https://wa.me/15551234567"
//           className="bg-blue-500 text-white px-2 py-2 rounded-full text-sm font-medium flex items-center gap-2"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaWhatsapp size={26} />
//         </Link>
//       </div>
//       <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-2 z-50">
//         {showForm && (
//           <div className="bg-white p-6 rounded-xl shadow-xl w-80 relative z-50">
//             <button
//               onClick={() => setShowForm(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//             >
//               ✖
//             </button>
//             <h2 className="text-xl font-bold text-center mb-4 text-gray-900">
//               Request a Callback
//             </h2>
//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="tel"
//                 name="contactNumber"
//                 placeholder="Contact Number"
//                 value={formData.contactNumber}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <select
//                 name="query"
//                 value={formData.query}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Select your query</option>
//                 <option value="course content">Course Content</option>
//                 <option value="fee structure">Fee Structure</option>
//                 <option value="Other">Other</option>
//               </select>
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className={`w-full py-2 rounded-md transition ${
//                   isLoading
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-blue-700 text-white hover:bg-blue-800"
//                 }`}
//               >
//                 {isLoading ? "Submitting..." : "Submit"}
//               </button>
//               {error && <p className="text-red-500 text-sm">{error}</p>}
//             </form>
//           </div>
//         )}

//         <button
//           onClick={() => setShowForm(!showForm)}
//           className="bg-white shadow-lg px-4 py-2 rounded-full text-sm font-semibold text-gray-900 border hover:shadow-xl transition z-50"
//         >
//           Request a Callback
//         </button>
//       </div>
//     </>
//   );
// }














"use client"

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import useQueryContactStore from "@/store/queryContactStore";

// Dynamically load Draggable to avoid SSR issues
const Draggable = dynamic(() => import("react-draggable"), { ssr: false });

export default function RequestCallback() {
  const [showForm, setShowForm] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialized, setInitialized] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", contactNumber: "", query: "" });
  const { createQuery, isLoading, error } = useQueryContactStore();
  const nodeRef = useRef(null);
  const wrapperRef = useRef(null);

  // On mount, initialize position to bottom-right corner
  useEffect(() => {
    const updateDefaultPosition = () => {
      const x = window.innerWidth - 200;
      const y = window.innerHeight - 110;
      setPosition({ x, y });
      setInitialized(true);
    };
    updateDefaultPosition();
    window.addEventListener("resize", updateDefaultPosition);
    return () => window.removeEventListener("resize", updateDefaultPosition);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.contactNumber || !formData.query) {
      toast.error("Please fill in all fields");
      return;
    }
    const [firstName, ...rest] = formData.fullName.trim().split(" ");
    const lastName = rest.join(" ");
    try {
      await createQuery({ firstName, lastName, contactNumber: formData.contactNumber, query: formData.query });
      setFormData({ fullName: "", contactNumber: "", query: "" });
      setShowForm(false);
      toast.success("Query submitted successfully!");
    } catch {
      toast.error(error || "Failed to submit query");
    }
  };

  const onDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const openForm = () => {
    const formWidth = 320;
    const formHeight = 360;
    let { x, y } = position;

    // shift left if overflowing right
    if (window.innerWidth - x < formWidth + 20) {
      x = window.innerWidth - formWidth - 20;
    }

    // shift up if overflowing bottom
    if (window.innerHeight - y < formHeight + 20) {
      y = window.innerHeight - formHeight - 20;
    }

    setPosition({ x, y });
    setShowForm(true);
  };

  if (!initialized) return null;

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".drag-handle"
      bounds="body"
      position={position}
      onDrag={onDrag}
      className="cursor-move"
    >
      <div ref={nodeRef} className="fixed z-50 drag-handle cursor-move">
        <div ref={wrapperRef} className="flex flex-col items-end space-y-2">
          {showForm && (
            <div className="bg-white p-6 rounded-xl shadow-xl w-80 relative z-50">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 no-drag"
              >
                ✖
              </button>
              <h2 className="text-xl font-bold text-center mb-4 text-gray-900">Request a Callback</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 no-drag"
                />
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 no-drag"
                />
                <select
                  name="query"
                  value={formData.query}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 no-drag"
                >
                  <option value="">Select your query</option>
                  <option value="course content">Course Content</option>
                  <option value="fee structure">Fee Structure</option>
                  <option value="Other">Other</option>
                </select>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-2 rounded-md transition ${
                    isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-700 text-white hover:bg-blue-800"
                  } no-drag`}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
                {error && <p className="text-red-500 text-sm no-drag">{error}</p>}
              </form>
            </div>
          )}

          {!showForm && (
            <button
              onClick={openForm}
              className="bg-white shadow-lg px-4 py-2 cursor-move rounded-full text-sm font-semibold text-gray-900 border no-drag"
            >
              Request a Callback
            </button>
          )}
        </div>
      </div>
    </Draggable>
  );
}
