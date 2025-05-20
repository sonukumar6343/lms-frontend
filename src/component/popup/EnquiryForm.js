'use client';

import { useEffect, useState } from 'react';
const EnquiryForm = ({ isOpen, onClose }) => {
  const [role, setRole] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const isFormValid = role && fullName && email && phone;

  if (!isOpen) return null;  // Hide modal when isOpen is false

  return (
  
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 cursor-pointer text-gray-600 hover:text-gray-900 text-xl">
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">Enquiry Form</h2>

        {/* Role Selection */}
        <div className="mb-4">
          <label className="block text-[#62647B] font-medium">Your Role<span className="text-red-500">*</span></label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="role" value="Institute Owner" onChange={(e) => setRole(e.target.value)} />
            Singing
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="role" value="Content Creator" onChange={(e) => setRole(e.target.value)} />
            Dance
            </label>
          </div>
        </div>

        {/* Full Name Input */}
        <div className="mb-4">
          <label className="block text-[#62647B] font-medium">Full Name<span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-[#62647B] font-medium">Email ID<span className="text-red-500">*</span></label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-4">
          <label className="block text-[#62647B] font-medium">Phone Number<span className="text-red-500">*</span></label>
          <input
            type="tel"
            placeholder="Enter Your Phone number"
            className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          className={`w-50 py-2 rounded-lg text-white font-semibold transition ${
            isFormValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'
          }`}
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EnquiryForm;
