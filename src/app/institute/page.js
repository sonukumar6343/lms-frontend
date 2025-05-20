"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaUser, FaEye } from "react-icons/fa";

const institutes = [
  {
    id: 1,
    name: "Chanakya IAS Academy (Chandigarh)",
    logo: "/chanakya.png",
    teachers: 1,
    courses: 0,
    description:
      "A.K Mishra who transformed thousands of aspirants into administrators is the founder and the chairman of Chanakya IAS Academy.",
    link: "#",
  },
  {
    id: 2,
    name: "Techglide | Skill Development",
    logo: "/teaching.png",
    teachers: 2,
    courses: 1,
    description:
      "Welcome to Techglide, your gateway to professional growth and mastery in the digital realm.",
    link: "#",
  },
  {
    id: 3,
    name: "SAFARI EDUCATION TECHNOLOGY",
    logo: "/safari.png",
    teachers: 1,
    courses: 2,
    description:
      "Thousands of students are misled every year due to changing admission processes and lack of information.",
    link: "#",
  },
  {
    id: 4,
    name: "Cybercurso",
    logo: "/cyber.jpg",
    teachers: 0,
    courses: 0,
    description:
      "Cybercurso is an online education platform providing courses in C, C++, Java, HTML, CSS, and Javascript.",
    link: "#",
  },
];

export default function Institutes() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = [
    "K - 12",
    "Graduation",
    "Entrance Exams",
    "Civil Services",
    "Chartered Accountancy",
    "Language",
    "Skill Development",
    "Co-Curricular",
    "Foreign Exams",
    "Counseling Classes",
    "Reiki Healing",
    "Post Graduation",
  ];

  const filteredInstitutes = institutes.filter((inst) =>
    inst.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredInstitutes.length / itemsPerPage);
  const paginatedInstitutes = filteredInstitutes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-[#F6F8FF]">
    <div className="max-w-7xl mx-auto px-6 py-8 pt-30">
      {/* Breadcrumbs */}
      <nav className="text-[#7A7A7A] mb-4">
        <Link href='/'><span>Home</span></Link> &gt; <span className="text-[#7A7A7A] font-medium">Institute List</span>
      </nav>

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
        Explore{" "}
        <span className="text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-[#008ce4] to-[#00af9e]">
          Featured Institutes
        </span>
      </h2>

      {/* Search Filters */}
      <div className="mt-6 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Institute Name"
          className="w-full md:w-1/3 border p-3 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-1/3 border p-3 rounded-lg"
        >
          <option value="" disabled>
            Select Category
          </option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button className="bg-gradient-to-r from-[#008ce4] to-[#00af9e] text-white px-6 py-3 rounded-lg">
          Search
        </button>
        <button className="bg-gradient-to-r from-[#008ce4] to-[#00af9e] text-white px-6 py-3 rounded-lg">
          Find Nearest Institutes
        </button>
      </div>

      {/* Institutes List */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {paginatedInstitutes.map((inst) => (
          <div key={inst.id} className="bg-white shadow-md p-6 rounded-lg">
            <div className="flex items-center gap-4">
              <Image src={inst.logo} alt={inst.name} className="h-20 w-20 object-contain" width={60} height={60}/>
              <div>
                <h3 className="text-lg font-semibold">{inst.name}</h3>
                <div className="flex items-center gap-4 text-gray-500">
                  <span className="flex items-center gap-1">
                    <FaUser /> {inst.teachers} Teachers
                  </span>
                  <span className="flex items-center gap-1">
                    <FaEye /> {inst.courses} Courses
                  </span>
                </div>
              </div>
            </div>
           
            <p className="mt-3 text-sm text-gray-600">{inst.description.slice(0, 120)}...</p>
            <Link href={inst.link} className="text-blue-600 text-sm mt-2 flex justify-end">
              View Profile →
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-8 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
}