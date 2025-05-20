// "use client";

// import { LogIn, User } from "lucide-react";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { ChevronDown } from "lucide-react";
// import { useAuth } from "../Contextlogin/AuthContext";

// const menuItems = {
//   Instruments: [
//     { name: "Guitar", icon: "🎸" },
//     { name: "Piano", icon: "🎹" },
//     { name: "Violin", icon: "🎻" },
//     { name: "Flute", icon: "📯" },
//     { name: "Drums", icon: "🥁" },
//     { name: "Ukulele", icon: "🎶" },
//     { name: "Classes for Adults", icon: "🎧" },
//   ],
//   Singing: [
//     { name: "Classical", icon: "🎼" },
//     { name: "Western", icon: "🎤" },
//     { name: "Contemporary", icon: "🎙️" },
//   ],
//   // Grades: [
//   //   { name: "Beginner", icon: "🟢" },
//   //   { name: "Intermediate", icon: "🟡" },
//   //   { name: "Advanced", icon: "🔴" },
//   // ],
// };

// const Navigation = () => {
//   const { isLoggedIn, user, logout } = useAuth();
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isClient, setIsClient] = useState(false);

//   // Ensure client-side rendering to avoid SSR issues
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) return null;

//   return (
//     <div>
//       <div className="fixed top-0 left-0 right-0 z-50 bg-white">
//         <div className="flex items-center justify-between px-8 py-4 border-b">
//           <div className="text-2xl font-bold cursor-pointer">
//             <Link href="/">
//               <span className="text-[#008ce4]">WEB</span>
//               <span className="text-[#00af9e]">SEEDER</span>
//               <p className="text-md font-light tracking-widest">learning</p>
//             </Link>
//           </div>

//           <div className="flex items-center space-x-6">
//           <Link href="/" className="font-medium text-xl hover:text-blue-600">
//           Home
//             </Link>
//             {Object.keys(menuItems).map((menu) => (
//               <div key={menu} className="relative group">
//                 <button
//                   onClick={() => setOpenDropdown(openDropdown === menu ? null : menu)}
//                   className="flex items-center space-x-1 text-xl font-medium hover:text-blue-600"
//                 >
//                   <span>{menu}</span>
//                   <ChevronDown className="w-4 h-4" />
//                 </button>

//                 {openDropdown === menu && (
//                   <div className="absolute z-10 -left-10 mt-6 w-[35em] bg-white shadow-lg rounded-md p-4 grid grid-cols-3 gap-y-6">
//                     {menuItems[menu].map((item) => (
//                       <Link
//                         key={item.name}
//                         href={`/${menu.toLowerCase()}/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
//                         className="flex items-center space-x-2 text-md hover:text-blue-500 cursor-pointer"
//                       >
//                         <span className="text-3xl">{item.icon}</span>
//                         <span className="text-lg">{item.name}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}

//             <Link href="/courses" className="font-medium text-xl hover:text-blue-600">
//               Courses
//             </Link>
           
//             {/* <Link href="/pricing" className="font-medium text-xl hover:text-blue-600">
//               Pricing
//             </Link> */}
//             </div>

//           {isLoggedIn ? (
//             <div className="flex items-center gap-4">
//               <div className="relative group">
//                 <div className="flex items-center gap-2 cursor-pointer">
//                   <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
//                     <User className="text-gray-600" size={20} />
//                   </div>
//                   <div className="text-right">
//                     <p className="font-medium text-sm">Hi, {user?.name?.split(" ")[0]}</p>
//                     <p className="text-xs text-gray-500">{user?.role}</p>
//                   </div>
//                 </div>

//                 <div className="absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-200 z-50">
//                   <div className="p-4 text-sm font-semibold text-gray-900">
//                     Hi, {user?.name?.toLowerCase()} 👋
//                   </div>
//                   <div className="border-t">
//                     <Link href="http://localhost:5173">
//                       <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                         <LogIn size={16} />
//                         <span>Dashboard</span>
//                       </div>
//                     </Link>
//                     <Link href="http://localhost:5173/profile">
//                       <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                         <User size={16} />
//                         <span>My Profile</span>
//                       </div>
//                     </Link>
//                     <button
//                       onClick={logout}
//                       className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100 text-left"
//                     >
//                       <LogIn size={16} />
//                       <span>Log Out</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
              
//             </div>
//           ) : (
//             <Link href="/studentLogin">
//               <button className="flex items-center px-4 py-2 space-x-2 text-white rounded-md bg-gradient-to-r from-[#008ce4] to-[#00af9e]">
//                 <span>Student Login</span>
//               </button>
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navigation;


"use client";

import { LogIn, User } from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
// import { useAuth } from "@/app/Contextlogin/AuthContext";
import { useAuth } from "../../component/Contextlogin/AuthContext";


const menuItems = {
  Instruments: [
    { name: "Guitar", icon: "🎸" },
    { name: "Piano", icon: "🎹" },
    { name: "Violin", icon: "🎻" },
    { name: "Flute", icon: "📯" },
    { name: "Drums", icon: "🥁" },
    { name: "Ukulele", icon: "🎶" },
    { name: "Classes for Adults", icon: "🎧" },
  ],
  Singing: [
    { name: "Classical", icon: "🎼" },
    { name: "Western", icon: "🎤" },
    { name: "Contemporary", icon: "🎙️" },
  ],
};

const Navigation = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering to avoid SSR issues
  useEffect(() => {
    setIsClient(true);
    // Debug log to check the user profile data
    if (isLoggedIn && user) {
      console.log("Navigation - User data:", user);
    }
  }, [isLoggedIn, user]);

  if (!isClient) return null;

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex items-center justify-between px-8 py-4 border-b">
          <div className="text-2xl font-bold cursor-pointer">
            <Link href="/">
              <span className="text-[#008ce4]">WEB</span>
              <span className="text-[#00af9e]">SEEDER</span>
              <p className="text-md font-light tracking-widest">learning</p>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/" className="font-medium text-xl hover:text-blue-600">
              Home
            </Link>
            {Object.keys(menuItems).map((menu) => (
              <div key={menu} className="relative group">
                <button
                  onClick={() => setOpenDropdown(openDropdown === menu ? null : menu)}
                  className="flex items-center space-x-1 text-xl font-medium hover:text-blue-600"
                >
                  <span>{menu}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {openDropdown === menu && (
                  <div className="absolute z-10 -left-10 mt-6 w-[35em] bg-white shadow-lg rounded-md p-4 grid grid-cols-3 gap-y-6">
                    {menuItems[menu].map((item) => (
                      <Link
                        key={item.name}
                        href={`/${menu.toLowerCase()}/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center space-x-2 text-md hover:text-blue-500 cursor-pointer"
                      >
                        <span className="text-3xl">{item.icon}</span>
                        <span className="text-lg">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link href="/courses" className="font-medium text-xl hover:text-blue-600">
              Courses
            </Link>
          </div>

          {isLoggedIn && user ? (
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                    <User className="text-gray-600" size={20} />
                  </div>
                  <div className="text-right">
                    {/* Fix to display user name properly, with multiple fallbacks */}
                    <p className="font-medium text-sm">
                      Hi, {user?.name || user?.firstName || (user?.name?.firstName) || user?.email?.split("@")[0] || "User"}
                    </p>
                    <p className="text-xs text-gray-500">{user?.role || "Student"}</p>
                  </div>
                </div>

                <div className="absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-200 z-50">
                  <div className="p-4 text-sm font-semibold text-gray-900">
                    {/* Same name display logic as above for consistency */}
                    Hi, {user?.name || user?.firstName || (user?.name?.firstName) || user?.email?.split("@")[0] || "User"} 👋
                  </div>
                  <div className="border-t">
                    <Link href="http://localhost:5173">
                      <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <LogIn size={16} />
                        <span>Dashboard</span>
                      </div>
                    </Link>
                    <Link href="http://localhost:5173/profile">
                      <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <User size={16} />
                        <span>My Profile</span>
                      </div>
                    </Link>
                    <button
                      onClick={logout}
                      className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100 text-left"
                    >
                      <LogIn size={16} />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link href="/studentLogin">
              <button className="flex items-center px-4 py-2 space-x-2 text-white rounded-md bg-gradient-to-r from-[#008ce4] to-[#00af9e]">
                <span>Student Login</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;