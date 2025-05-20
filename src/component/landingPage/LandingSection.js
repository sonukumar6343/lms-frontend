// "use client";
// import Link from "next/link";
// import { Star } from "lucide-react";
// import Image from "next/image";
// import { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";
// import EnquiryForm from "../popup/EnquiryForm";


// const words = ["Musice", "Dance", "Yoga", "Jumba", "Chess"];
// export default function LandingSection() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   //for text
//   const [index, setIndex] = useState(0);
//   const [currentWord, setCurrentWord] = useState("");
//   const [isAnimating, setIsAnimating] = useState(true);

//   // Animation variants
//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const item = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         damping: 12,
//         stiffness: 100,
//       },
//     },
//   };

//   //for words

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     setIsAnimating(true);
//     const targetWord = words[index];
//     let current = "";
//     let i = 0;

//     const typingInterval = setInterval(() => {
//       if (i < targetWord.length) {
//         current += targetWord[i];
//         setCurrentWord(current);
//         i++;
//       } else {
//         clearInterval(typingInterval);
//         setIsAnimating(false);
//       }
//     }, 100); // Adjust typing speed here (milliseconds per letter)

//     return () => clearInterval(typingInterval);
//   }, [index]);
//   //for image

//   const [tilt, setTilt] = useState({ x: 0, y: 0 });
//   const imageRef = useRef(null);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     // Reduced tilt amount (5 degrees instead of 10) to prevent clipping
//     const tiltX = ((y - centerY) / centerY) * 5;
//     const tiltY = ((centerX - x) / centerX) * 5;

//     setTilt({ x: tiltX, y: tiltY });
//   };

//   const handleMouseLeave = () => {
//     setTilt({ x: 0, y: 0 });
//   };



//   return (
//     <section data-component="LandingSection"
//     className="flex items-center justify-center xl:w-full lg:w-[104%] h-[100vh] bg-gradient-to-r from-blue-100 to-blue-50 mt-20">
//       <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
//         <div className="flex flex-row justify-between items-center gap-12">
//           <motion.div
//             className="max-w-2xl space-y-6"
//             initial="hidden"
//             animate="visible"
//             variants={container}
//           >
//             <motion.div variants={item}>
//               <div className="flex items-center space-x-2 rounded-full bg-white px-4 py-3 w-fit">
//                 <Star className="text-yellow-500" size={16} />
//                 <p className="text-md font-semibold text-gray-700">
//                   <span className="text-[#008ce4]">Listed</span> As The Best
//                   Learning Platform 2025
//                 </p>
//                 <Star className="text-yellow-500" size={16} />
//               </div>
//             </motion.div>

//             <motion.h1
//               className="text-5xl sm:text-5xl md:text-5xl font-bold leading-tight md:leading-15 lg:w-[8em] xl:w-full"
//               variants={item}
//             >
//             Online & Offline{" "}
//               <motion.span
//                 className="text-[#008ce4]"
//                 key={words[index]}
//                 initial={{ opacity: 0, y: 1 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {currentWord.split("").map((letter, i) => (
//                   <motion.span
//                     key={i}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{
//                       duration: 0.3,
//                       delay: i * 0.1, // Stagger the letters
//                     }}
//                   >
//                     {letter}
//                   </motion.span>
//                 ))}
//               </motion.span>
//               <br />{" "}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008ce4] to-[#00af9e]">
//                Classes.
//               </span>
//             </motion.h1>

//             <motion.p
//               className="text-lg text-[#808490] lg:w-[15em] xl:w-[28em] md:w-[28em]"
//               variants={item}
//             >
//             Create your music class once and share it with{" "}
//               <strong> the world—online or offline.</strong> From guitar to vocals, turn your passion into profit 
//               and reach students everywhere, anytime.


//             </motion.p>

//             <motion.div className="flex gap-4" variants={item}>

//             <Link href="/demo">
//                 <button 
//                   // onClick={() => setIsModalOpen(true)}
//                 className="px-6 cursor-pointer py-3 text-white rounded-md bg-gradient-to-r from-[#008ce4] to-[#00af9e] hover:from-[#0077c2] hover:to-[#009a8a] transition-colors">
//                   Book A Demo
//                 </button>
//              </Link>
//                 {/* <EnquiryForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
//               <Link href="/studentRegistration">
//                 <button className="px-6 py-3 text-[#008ce4] border border-[#008ce4] cursor-pointer rounded-md hover:bg-[#008ce4] hover:text-white transition-colors">
//                   Free Sign Up
//                 </button>
//               </Link>
//             </motion.div>
//           </motion.div>
//           <div
//             className="hidden lg:block flex-1 max-w-3xl h-[30em] relative overflow-visible"
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             ref={imageRef}
//           >
//             <div
//               className="xl:w-[95%] h-[105%]  mx-auto my-auto transition-transform duration-300 ease-out"
//               style={{
//                 transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
//                 transformOrigin: "center center",
//                 transformStyle: "preserve-3d",
//               }}
//             >
//               <Image
//                 src="/Playing_guitar_boy.webp"
//                 alt="Workshops Preview"
//                 fill
//                 className="object-cover cursor-pointer"
//                 priority
//                 style={{
//                   transform: "scale(1.03)",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";
import Link from "next/link";
import { Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import EnquiryForm from "../popup/EnquiryForm";
import { useAuth } from "../Contextlogin/AuthContext";

const words = ["Musice", "Dance", "Yoga", "Jumba", "Chess"];
export default function LandingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn, user, logout } = useAuth();
  //for text
  const [index, setIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isAnimating, setIsAnimating] = useState(true);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Check if user is signed up on component mount
  useEffect(() => {
    const signedUp = localStorage.getItem('isSignedUp');
    if (signedUp) {
      setIsSignedUp(true);
    }
  }, []);

  //for words
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsAnimating(true);
    const targetWord = words[index];
    let current = "";
    let i = 0;

    const typingInterval = setInterval(() => {
      if (i < targetWord.length) {
        current += targetWord[i];
        setCurrentWord(current);
        i++;
      } else {
        clearInterval(typingInterval);
        setIsAnimating(false);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [index]);

  //for image
  const imageRef = useRef(null);


  return (
    <section
      data-component="LandingSection"
      className="flex items-center justify-center xl:w-full lg:w-[104%] h-[80vh] bg-gradient-to-r from-blue-100 to-blue-50 mt-20"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="flex flex-row justify-between items-center gap-12">
          <motion.div
            className="max-w-2xl space-y-6"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <motion.div variants={item}>
              <div className="flex items-center space-x-2 rounded-full bg-white px-4 py-3 w-fit">
                <Star className="text-yellow-500" size={16} />
                <p className="text-md font-semibold text-gray-700">
                  <span className="text-[#008ce4]">Listed</span> As The Best
                  Learning Platform 2025
                </p>
                <Star className="text-yellow-500" size={16} />
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-5xl md:text-5xl font-bold leading-tight md:leading-15 lg:w-[8em] xl:w-full"
              variants={item}
            >
              Online & Offline{" "}
              <motion.span
                className="text-[#008ce4] inline-block min-w-[6ch]"
                key={words[index]}
                initial={{ opacity: 0, y: 1 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {currentWord.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.1,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
              <br />{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008ce4] to-[#00af9e]">
                Classes.
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-[#808490] lg:w-[15em] xl:w-[28em] md:w-[28em]"
              variants={item}
            >
              Create your music class once and share it with{" "}
              <strong> the world—online or offline.</strong> From guitar to vocals, turn your passion into profit
              and reach students everywhere, anytime.
            </motion.p>

            <motion.div className="flex gap-4" variants={item}>
              <Link href="/demo">
                <button className="px-6 cursor-pointer py-3 text-white rounded-md bg-gradient-to-r from-[#008ce4] to-[#00af9e] hover:from-[#0077c2] hover:to-[#009a8a] transition-colors">
                  Book A Demo
                </button>
              </Link>

              {isLoggedIn ? (
                <Link href="/courses">
                  <button className="px-6 py-3 text-[#008ce4] border border-[#008ce4] cursor-pointer rounded-md hover:bg-[#008ce4] hover:text-white transition-colors">
                    Explore Courses
                  </button>
                </Link>
              ) : (
                <Link href="/studentRegistration">
                  <button className="px-6 py-3 text-[#008ce4] border border-[#008ce4] cursor-pointer rounded-md hover:bg-[#008ce4] hover:text-white transition-colors">
                    Free Sign Up
                  </button>
                </Link>
              )}
            </motion.div>
          </motion.div>
          <div
            className="hidden lg:block flex-1 max-w-3xl h-[30em] relative overflow-visible"
            ref={imageRef}
          >

            <div
              className="xl:w-[90%] h-[100%]  mx-auto my-auto"
              style={{
              }}
            >
              <Image
                src="/dance.webp"
                alt="Workshops Preview"
                fill
                className="object-cover cursor-pointer"
                priority
                style={{
                  transform: "scale(1.03)",
                }}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}