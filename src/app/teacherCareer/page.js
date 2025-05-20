"use client";

import useTeacherStore from "../../store/teacherApplication";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { convertToBase64 } from "@/store/convertToBase64";
const TeacherCareer = () => {
  const { newTeacherApplication, loading, error } = useTeacherStore();
  const [formData, setFormData] = useState({
    name: {
      firstName: "",
      lastName: "",
    },
    mobileNumber: "",
    email: "",
    address: {
      addressLine: "",
      city: "",
      state: "",
      country: "",
    },
    description: "",
    experience: 0,
    teachingMode: "online",
    skill: "",
    languages: ["English"], // Default to array with "English"
    photo: null, // Base64 string
  });
  const [resumeFile, setResumeFile] = useState(null); // File object
  const [videoFile, setVideoFile] = useState(null); // File object
  const [errors, setErrors] = useState({});

  // Refs for file inputs to reset them after submission
  const photoRef = useRef(null);
  const resumeRef = useRef(null);
  const videoRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle nested name fields
    if (name === "firstName" || name === "lastName") {
      setFormData((prev) => ({
        ...prev,
        name: {
          ...prev.name,
          [name]: value,
        },
      }));
    }
    // Handle nested address fields
    else if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value,
        },
      }));
    }
    // Handle direct fields
    else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await convertToBase64(file);
        setFormData((prev) => ({
          ...prev,
          photo: base64,
        }));
      } catch (error) {
        toast.error("Failed to process photo");
      }
    }
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
    }
  };

  const handleLanguagesChange = (e) => {
    const selectedLanguage = e.target.value;
    setFormData((prev) => ({
      ...prev,
      languages: [selectedLanguage], // Wrap single value in array
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await newTeacherApplication(formData, resumeFile, videoFile);

      // Reset form after successful submission
      setFormData({
        name: {
          firstName: "",
          lastName: "",
        },
        mobileNumber: "",
        email: "",
        address: {
          addressLine: "",
          city: "",
          state: "",
          country: "",
        },
        description: "",
        experience: 0,
        teachingMode: "online",
        skill: "",
        languages: ["English"],
        photo: null,
      });
      setResumeFile(null);
      setVideoFile(null);

      // Reset file inputs
      if (photoRef.current) photoRef.current.value = "";
      if (resumeRef.current) resumeRef.current.value = "";
      if (videoRef.current) videoRef.current.value = "";

      toast.success("Application submitted successfully!");
    } catch (err) {
      toast.error(error || "Failed to submit application");
    }
  };

  return (
    <div className="mt-20 min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center space-x-2">
          <div className="text-blue-400 text-2xl">✴️</div>
          <p className="text-orange-500 text-xl font-semibold">Join Our Team</p>
        </div>
        <h2 className="mt-2 text-4xl font-bold text-gray-900">
          Explore Exciting Opportunities with WebSeeder
        </h2>
      </div>
      <div className="mt-4 text-gray-600 max-w-2xl mx-auto text-center">
        Discover a dynamic work environment where innovation thrives. Join us in
        shaping the future of Dancing and Singing.
      </div>

      <div className="mt-10 bg-blue-50 p-8 rounded-xl max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Apply Now
        </h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name*
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.name.firstName}
                onChange={handleInputChange}
                required
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name*
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.name.lastName}
                onChange={handleInputChange}
                required
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number*
              </label>
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Contact Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.mobileNumber}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email*
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address Line*
              </label>
              <input
                type="text"
                name="address.addressLine"
                placeholder="Street Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.address.addressLine}
                onChange={handleInputChange}
                required
              />
              {errors.addressLine && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.addressLine}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City*
              </label>
              <input
                type="text"
                name="address.city"
                placeholder="City"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.address.city}
                onChange={handleInputChange}
                required
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">{errors.city}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State*
              </label>
              <input
                type="text"
                name="address.state"
                placeholder="State"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.address.state}
                onChange={handleInputChange}
                required
              />
              {errors.state && (
                <p className="text-red-500 text-xs mt-1">{errors.state}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country*
              </label>
              <input
                type="text"
                name="address.country"
                placeholder="Country"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.address.country}
                onChange={handleInputChange}
                required
              />
              {errors.country && (
                <p className="text-red-500 text-xs mt-1">{errors.country}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description*
              </label>
              <textarea
                name="description"
                placeholder="Tell us about yourself and your teaching experience"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                required
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.description}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Years of Experience*
              </label>
              <input
                type="number"
                name="experience"
                placeholder="Years of experience"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.experience}
                onChange={handleInputChange}
                min="0"
                required
              />
              {errors.experience && (
                <p className="text-red-500 text-xs mt-1">{errors.experience}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teaching Mode
              </label>
              <select
                name="teachingMode"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.teachingMode}
                onChange={handleInputChange}
              >
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primary Skill*
              </label>
              <input
                type="text"
                name="skill"
                placeholder="Primary teaching skill"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.skill}
                onChange={handleInputChange}
                required
              />
              {errors.skill && (
                <p className="text-red-500 text-xs mt-1">{errors.skill}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Language*
              </label>
              <select
                name="languages"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={formData.languages[0] || "English"}
                onChange={handleLanguagesChange}
                required
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Hindi">Hindi</option>
                <option value="Mandarin">Mandarin</option>
              </select>
              {errors.languages && (
                <p className="text-red-500 text-xs mt-1">{errors.languages}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Resume* (PDF/DOC)
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                className="w-full px-2 py-2 border border-gray-300 rounded-md"
                onChange={handleResumeChange}
                ref={resumeRef}
                required
              />
              {errors.resume && (
                <p className="text-red-500 text-xs mt-1">{errors.resume}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Photo
              </label>
              <input
                type="file"
                name="photo"
                accept=".jpg,.jpeg,.png"
                className="w-full px-2 py-2 border border-gray-300 rounded-md"
                onChange={handlePhotoChange}
                ref={photoRef}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Video Consent*
            </label>
            <input
              type="file"
              name="videoConsent"
              accept="video/*"
              className="w-full px-2 py-2 border border-gray-300 rounded-md"
              onChange={handleVideoChange}
              ref={videoRef}
              required
            />
            {errors.videoConsent && (
              <p className="text-red-500 text-xs mt-1">{errors.videoConsent}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#008ce4] to-[#00af9e] text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherCareer;
