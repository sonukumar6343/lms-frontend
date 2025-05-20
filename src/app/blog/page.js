"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const blog = [
  {
    id: 1,
    featured: true,
    title: "Passive and Active Income: How to Earn Money Online",
    description:
      "Earning money online has become a practical choice for many people seeking financial freedom. With advancements in technology, passive income opportunities will be more accessible than ever in 2025. Tools like AI automation, online marketplaces, and financial platforms have made building passive income so much easier. As the digital economy expands, passive income strategies are evolving, making financial freedom an achievable goal for more people.Whether youre looking for ways to supplement your income or create a full-time online business, understanding active and passive income can help you design a more effective strategy for earning money. ",
    author: "Jagdeep Sharma",
    date: "Feb 28, 2025",
    image: "/blog-1.jpg",
  },
];
const blogs = [
  {
    id: 1,
    featured: true,
    title: "Passive and Active Income: How to Earn Money Online",
    description:
      "Earning money online has become a practical choice for many people seeking financial freedom. With advancements in technology, passive income opportunities will be more accessible than ever in 2025. Tools like AI automation, online marketplaces, and financial platforms have made building passive income so much easier. As the digital economy expands, passive income strategies are evolving, making financial freedom an achievable goal for more people.Whether youre looking for ways to supplement your income or create a full-time online business, understanding active and passive income can help you design a more effective strategy for earning money. ",
    author: "Jagdeep Sharma",
    date: "Feb 28, 2025",
    image: "/blog-1.jpg",
  },
  {
    id: 2,
    featured: false,
    title: "How to Start Teaching Online and Earn Money as an Educator",
    description:
      "Connecting remotely with learners is not always easy and it takes creativity to...",
    author: "Jagdeep Sharma",
    image: "/blog-2.jpg",
  },
  {
    id: 3,
    featured: false,
    title: "Types & Features of LMS: Explained for Educators & Institutions",
    description:
      "We know you’re brimming with ideas and eager to make an impact but as you...",
    author: "Jagdeep Sharma",
    image: "/blog-3.jpg",
  },
];

export default function FeaturedBlogs() {
  const [currentPage] = useState(1);

  return (
    <div className="bg-[#F8F9FA]">
      <div className="px-6 py-10 max-w-6xl mx-auto pt-30">
        <nav className="text-[#7A7A7A] mb-4">
          <Link href="/">
            <span>Home</span>
          </Link>{" "}
          &gt; <span className="text-[#7A7A7A] font-medium">Blogs List</span>
        </nav>
        <h1 className="text-3xl font-bold mb-6">Featured Blogs</h1>

        {/* Featured Blog */}
        <div className="grid grid-cols-1 gap-6 p-4 bg-white rounded-lg shadow">
          {blog.map((blog) => (
            <div
              key={blog.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="col-span-1">
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    FEATURED
                  </span>
                  <Image
                    src={blog.image}
                    alt="featured"
                    width={500}
                    height={300}
                    className="rounded-md w-full h-[20em] object-cover"
                  />
                </div>
              </div>
              <div className="col-span-2 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 text-sm">
                    {blog.description.slice(0, 400)}...
                  </p>
                </div>
                <hr className="mt-3 text-gray-300" />
                <div className="flex justify-between mb-6 items-center mt-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Image
                      src={blog.authorImage}
                      alt="Profile Picture"
                      width={32}
                      height={32}
                      className="rounded-full object-cover w-8 h-8"
                    />
                    <span className="text-black font-medium">
                      {blog.author}
                    </span>
                  </div>
                  <div>
                    <span>{blog.date || "Feb 28, 2025"}</span>
                  </div>
                </div>
                <hr className="mt-3 text-gray-300" />
                <div>
                  <button className="bg-[#E5F3FC] text-[#008CE4] px-3 py-2 rounded hover:bg-blue-700 text-md">
                    VIEW →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {blogs.slice(1).map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow">
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="rounded-t-md w-full h-auto"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold mb-1">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{blog.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="font-medium text-blue-600">
                    {blog.author}
                  </span>
                  <span className="cursor-pointer hover:underline">
                    Know More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-10 text-sm text-gray-500">
          <p>1 of 1 pages</p>
          <div className="flex gap-2">
            <button disabled className="px-3 py-1 border rounded opacity-50">
              Previous
            </button>
            <button className="px-3 py-1 border rounded bg-blue-600 text-white">
              1
            </button>
            <button disabled className="px-3 py-1 border rounded opacity-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
