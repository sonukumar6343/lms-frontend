"use client";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import ContactFaqs from "./ContactFaqs";
import useContactStore from "../../store/contactMessageStore";

const Contact = () => {
  const { formData, updateFormData, submitForm, isLoading, error, success } =
    useContactStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm(formData); // Pass formData to submitForm
  };

  return (
    <div>
      <section className="py-16 bg-gray-50 flex justify-center items-center">
        <div className="container max-w-6xl mx-auto px-6 lg:px-10 pt-20">
          <div className="w-full max-w-[35rem] px-4 mx-auto mb-6 md:mb-8 lg:mb-10">
            <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              Contact us
            </h2>
            <p className="text-center text-gray-600 mt-2 sm:mt-3 text-base sm:text-lg md:text-xl">
              We&apos;re always here to help with any questions, doubts, or
              suggestions you may have about your learning journey or course
              experience.
            </p>
          </div>

          <div className="mt-10 flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden gap-8">
            {/* Left Section - Contact Info */}
            <div className="bg-gradient-to-br from-[#008ce4] to-[#00af9e] text-white p-8 lg:p-10 w-full lg:w-2/5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold">Head Office</h3>
                <p className="flex items-start mt-4">
                  <FaMapMarkerAlt className="mr-3 mt-1 flex-shrink-0" />
                  <span>
                    SCO 128-129, Sector - 8C, Madhya Marg, Chandigarh - 160009
                  </span>
                </p>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold">Support enquiries</h4>
                <p className="flex items-center mt-3">
                  <FaEnvelope className="mr-3 flex-shrink-0" />
                  support@nrichlearning.com
                </p>
                <p className="flex items-center mt-3">
                  <FaPhoneAlt className="mr-3 flex-shrink-0" />
                  +91 70090 76561
                </p>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold">Follow Us</h4>
                <div className="flex mt-3 space-x-4">
                  <a href="#" className="hover:text-gray-200 transition">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="hover:text-gray-200 transition">
                    <FaInstagram />
                  </a>
                  <a href="#" className="hover:text-gray-200 transition">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="hover:text-gray-200 transition">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="p-8 lg:p-10 w-full lg:w-3/5">
              {success && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                  {success}
                </div>
              )}
              {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                  {error}
                </div>
              )}
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-300 outline-none transition"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Email address*
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-300 outline-none transition"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-300 outline-none transition"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Message*
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-300 outline-none transition resize-none"
                    rows="4"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={(e) => updateFormData("message", e.target.value)}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-50 py-3 bg-blue-600 text-white rounded-lg bg-gradient-to-r from-[#008ce4] to-[#00af9e] hover:from-[#0077c2] hover:to-[#009a8a] transition-colors font-medium disabled:opacity-50"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Request Callback"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ContactFaqs />
    </div>
  );
};

export default Contact;
