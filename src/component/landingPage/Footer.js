import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const socialPlatforms = [
  {
    name: 'Facebook',
    href: '#',
    bgColor: '#1877F2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor">
        <path d="M279.14 288l14.22-92.66h-88.91V127.08c0-25.35 12.42-50.06 52.24-50.06H295V6.26S259.5 0 225.36 0c-73.22 0-121.36 44.38-121.36 124.72v70.62H22.89V288h81.11v224h100.2V288z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    bgColor: '#c13584',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    bgColor: '#FF0000',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    bgColor: '#0A66C2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
        <path d="M100.28 448H7.4V148.9h92.88V448zm-46.44-340.7C24.09 107.3 0 83.24 0 53.3S24.09-0.69 53.84-0.69s53.84 24.78 53.84 53.99-24.09 53.68-53.84 53.68zm394.34 340.7h-92.7V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.7V448h-92.7V148.9h89.1v40.8h1.3c12.4-23.5 42.6-48.3 87.8-48.3 94 .1 111.4 61.9 111.4 142.3V448z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="text-white py-10 sm:py-15 relative overflow-hidden"
      style={{
        backgroundImage: "url('/gradient-bg.png')",
      }}
    >
      {/* Optional overlay if needed for better text contrast */}

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo & Navigation */}
        <div className="flex xl:flex-col md:flex-row items-center justify-center md:text-left mb-6">
          <h2 className="text-3xl font-bold tracking-wider uppercase">
            WEBSEEDER
          </h2>
          <p className="text-gray-300 text-lg tracking-wide ml-2">learning</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-400 pb-6 md:pb-8">
          {/* Navigation */}
          <nav className="flex space-x-4 sm:space-x-6 md:space-x-8 text-white text-sm sm:text-base md:text-lg font-semibold mb-4 md:mb-0">
            <Link
              href="/institute"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Institutes
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/teacherCareer"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              TeacherCareer
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-2 sm:space-x-3">
            {socialPlatforms.map(({ name, href, bgColor, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                style={{ backgroundColor: bgColor }}
              >
                <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Social Links & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 sm:pt-6 text-white text-sm sm:text-base md:text-lg">
          {/* Copyright */}
          <p className="mb-3 sm:mb-0 text-center sm:text-left text-gray-300">
            © 2025 Weseeder Learning Pvt Ltd. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex space-x-4 sm:space-x-6">
            <Link
              href="/policy"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              href="/policy"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
