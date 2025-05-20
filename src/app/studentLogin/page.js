
// "use client";

// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import Navigation from "../../component/landingPage/Navigation";
// import { User } from "lucide-react";
// import useStudentStore from "@/store/studentStore";


// const StudentLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState(1);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);

//   const { loginStudent, verifyOtp, isLoading, error, successMessage, resetOtp, email: storedEmail } =
//     useStudentStore();

//   useEffect(() => {
//     console.log("Stored Email:", storedEmail); // Debug log for state
//   }, [storedEmail, step]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       useStudentOtpStore.setState({ error: "Please enter both email and password" });
//       return;
//     }

//     try {
//       console.log("handleSendOtp - Sending:", { email, password }); // Debug log
//       await loginStudent({ email, password });
//       setStep(2);
//     } catch (error) {
//       console.error("OTP sending failed:", error);
//     }
//   };

//   // const handleResendOtp = async () => {
//   //   try {
//   //     console.log("handleResendOtp - Resending for:", storedEmail || email); // Debug log
//   //     await sendOtp({ email: storedEmail || email, password });
//   //     useStudentOtpStore.setState({
//   //       successMessage: "A new OTP has been sent to your email.",
//   //       error: null,
//   //     });
//   //     setOtp("");
//   //   } catch (error) {
//   //     console.error("Resend OTP failed:", error);
//   //     useStudentOtpStore.setState({
//   //       error: "Failed to resend OTP. Please try again.",
//   //     });
//   //   }
//   // };

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     if (!otp) {
//       useStudentOtpStore.setState({ error: "Please enter the OTP" });
//       return;
//     }

//     if (!/^\d{6}$/.test(otp)) {
//       useStudentOtpStore.setState({ error: "OTP must be 6 digits" });
//       return;
//     }
     
//     try {
//       console.log("handleVerifyOtp - Verifying:", { email: storedEmail || email, otp }); // Debug log
//       const data = await verifyOtp(otp, storedEmail || email);
//       console.log(data.user,"nammmmme");
      
//       if (data && data.user) {
//         setUser({
//           email: storedEmail || data.user.email,
//           role: "Student",
//           name: data.user?.name.firstName || data.user?.email || email,
//           ...data.user,
//         });
//         setIsLoggedIn(true);
//         login(userData, data.token);
//       }
//     } catch (error) {
//       console.error("OTP verification failed:", error);
//     }
//   };

//   const resetForm = () => {
//     setEmail("");
//     setPassword("");
//     setOtp("");
//     setStep(1);
//     resetOtp();
//   };

//   return (
//     <div>
//       <Navigation isLoggedIn={isLoggedIn} user={user} />
//       <div
//         className="flex justify-center items-center min-h-screen bg-gray-100 pt-16"
//         style={{
//           backgroundImage: "url('/Onboarding.webp')",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {!isLoggedIn ? (
//           <div className="max-w-[25em] w-full mx-4">
//             <div className="bg-white shadow-lg rounded-2xl p-8 w-full">
//               <h2 className="text-2xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-r from-[#008ce4] to-[#00af9e]">
//                 Login
//               </h2>
//               <p className="text-[#7F8487] text-center mt-2">
//                 Welcome to{" "}
//                 <span className="font-bold text-[#7F8487]">
//                   Webseeder Learning
//                 </span>
//               </p>
//               <p className="text-[#7F8487] text-sm text-center mb-6 mt-2">
//                 Step Into The World Of Endless Possibilities
//               </p>

//               {error && (
//                 <div className="mb-4 p-2 bg-red-100 text-red-700 text-sm rounded">
//                   {error.includes("non-JSON")
//                     ? "API server is not responding correctly. Please try again later."
//                     : error}
//                   {error.includes("No account found") && (
//                     <p>
//                       <Link href="/studentRegistration" className="text-blue-500 hover:underline">
//                         Click here to register
//                       </Link>
//                     </p>
//                   )}
//                 </div>
//               )}
//               {successMessage && step === 1 && (
//                 <div className="mb-4 p-2 bg-green-100 text-green-700 text-sm rounded">
//                   {successMessage}
//                 </div>
//               )}

//               {step === 1 ? (
//                 <>
//                   <div className="mb-4">
//                     <label className="block text-[#A7ABB9] text-sm font-medium">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       placeholder="Enter Email (e.g. test@example.com)"
//                       className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-[#A7ABB9] text-sm font-medium">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       placeholder="Enter Your Password"
//                       className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>

//                   <button
//                     className="w-full bg-[#56B3ED] text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
//                     onClick={handleLogin}
//                     disabled={!email || !password || isLoading}
//                   >
//                     {isLoading ? "Login...." : "Login"}
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <div className="mb-4">
//                     <label className="block text-[#A7ABB9] text-sm font-medium">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       value={storedEmail || email}
//                       className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-200 text-gray-700"
//                       disabled
//                     />
//                   </div>

//                   <div className="mt-7 mb-6">
//                     <label className="block text-[#A7ABB9] text-sm font-medium">
//                       Enter Your OTP
//                     </label>
//                     <input
//                       type="text"
//                       inputMode="numeric"
//                       pattern="[0-9]*"
//                       maxLength={6}
//                       placeholder="Enter 6-digit OTP"
//                       className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                       value={otp}
//                       onChange={(e) => {
//                         const value = e.target.value.replace(/\D/g, '').slice(0, 6);
//                         setOtp(value);
//                       }}
//                     />
//                     {/* <p
//                       className="text-blue-500 text-sm mt-2 cursor-pointer hover:underline"
//                       onClick={handleResendOtp}
//                     >
//                       Resend OTP
//                     </p> */}
//                   </div>

//                   <button
//                     className="w-full bg-[#56B3ED] text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
//                     onClick={handleVerifyOtp}
//                     disabled={!otp || otp.length !== 6 || isLoading}
//                   >
//                     {isLoading ? "Verifying..." : "Verify OTP"}
//                   </button>

//                   <p
//                     className="text-blue-500 text-center text-sm mt-4 cursor-pointer hover:underline"
//                     onClick={resetForm}
//                   >
//                     ← Back to login
//                   </p>
//                 </>
//               )}
//             </div>

//             <Link href="/">
//               <p className="text-center text-sm text-white mt-4">
//                 <span className="text-white font-bold">
//                   ← Webseeder Learning
//                 </span>
//               </p>
//             </Link>
//           </div>
//         ) : (
//           <div className="max-w-[25em] w-full mx-4">
//             <div className="bg-white shadow-lg rounded-2xl p-8 w-full text-center">
//               <h2 className="text-2xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-r from-[#008ce4] to-[#00af9e]">
//                 Welcome back!
//               </h2>
//               <div className="flex justify-center my-6">
//                 <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-200">
//                   <User className="text-gray-600" size={32} />
//                 </div>
//               </div>
//               <p className="text-lg font-medium">Hi, {user?.firstName || user?.email}</p>
//               <p className="text-gray-500 mb-6">{user?.role}</p>
//               <Link href="http://localhost:5173">
//                 <button className="w-full bg-[#56B3ED] text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition">
//                   Go to Dashboard
//                 </button>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StudentLogin;



"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Navigation from "../../component/landingPage/Navigation";
import { User } from "lucide-react";
import useStudentStore from "@/store/studentStore";
import { useAuth } from '../../component/Contextlogin/AuthContext';

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  
  // Use the authentication context instead of local state
  const { isLoggedIn, user, login } = useAuth();

  const { 
    loginStudent, 
    verifyOtp, 
    isLoading, 
    error, 
    successMessage, 
    resetOtp, 
    email: storedEmail 
  } = useStudentStore();

  useEffect(() => {
    console.log("Stored Email:", storedEmail); // Debug log for state
  }, [storedEmail, step]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      useStudentStore.setState({ error: "Please enter both email and password" });
      return;
    }

    try {
      console.log("handleSendOtp - Sending:", { email, password }); // Debug log
      await loginStudent({ email, password });
      setStep(2);
    } catch (error) {
      console.error("OTP sending failed:", error);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) {
      useStudentStore.setState({ error: "Please enter the OTP" });
      return;
    }

    if (!/^\d{6}$/.test(otp)) {
      useStudentStore.setState({ error: "OTP must be 6 digits" });
      return;
    }
     
    try {
      console.log("handleVerifyOtp - Verifying:", { email: storedEmail || email, otp }); // Debug log
      const data = await verifyOtp(otp, storedEmail || email);
      console.log(data.user, "user data");
      
      if (data && data.user) {
        // Use the login function from AuthContext instead of local state
        const userData = {
          ...data.user,
          name: data.user?.firstName || data.user?.email || email, // Ensure name is properly set
          email: storedEmail || data.user.email,
          role: data.user.role
        };
        
        // Login with auth context - pass both user data and token
        login(userData, data.token);
      }
    } catch (error) {
      console.error("OTP verification failed:", error);
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setOtp("");
    setStep(1);
    resetOtp();
  };

  return (
    <div>
      <Navigation />
      <div
        className="flex justify-center items-center min-h-screen bg-gray-100 pt-16"
        style={{
          backgroundImage: "url('/Onboarding.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {!isLoggedIn ? (
          <div className="max-w-[25em] w-full mx-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full">
              <h2 className="text-2xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-r from-[#008ce4] to-[#00af9e]">
                Login
              </h2>
              <p className="text-[#7F8487] text-center mt-2">
                Welcome to{" "}
                <span className="font-bold text-[#7F8487]">
                  Webseeder Learning
                </span>
              </p>
              <p className="text-[#7F8487] text-sm text-center mb-6 mt-2">
                Step Into The World Of Endless Possibilities
              </p>

              {error && (
                <div className="mb-4 p-2 bg-red-100 text-red-700 text-sm rounded">
                  {error.includes("non-JSON")
                    ? "API server is not responding correctly. Please try again later."
                    : error}
                  {error.includes("No account found") && (
                    <p>
                      <Link href="/studentRegistration" className="text-blue-500 hover:underline">
                        Click here to register
                      </Link>
                    </p>
                  )}
                </div>
              )}
              {successMessage && step === 1 && (
                <div className="mb-4 p-2 bg-green-100 text-green-700 text-sm rounded">
                  {successMessage}
                </div>
              )}

              {step === 1 ? (
                <>
                  <div className="mb-4">
                    <label className="block text-[#A7ABB9] text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email (e.g. test@example.com)"
                      className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-[#A7ABB9] text-sm font-medium">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter Your Password"
                      className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    className="w-full bg-[#56B3ED] text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                    onClick={handleLogin}
                    disabled={!email || !password || isLoading}
                  >
                    {isLoading ? "Login...." : "Login"}
                  </button>
                </>
              ) : (
                <>
                  <div className="mb-4">
                    <label className="block text-[#A7ABB9] text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      value={storedEmail || email}
                      className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-200 text-gray-700"
                      disabled
                    />
                  </div>

                  <div className="mt-7 mb-6">
                    <label className="block text-[#A7ABB9] text-sm font-medium">
                      Enter Your OTP
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={6}
                      placeholder="Enter 6-digit OTP"
                      className="w-full px-4 py-2 mt-1 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={otp}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                        setOtp(value);
                      }}
                    />
                  </div>

                  <button
                    className="w-full bg-[#56B3ED] text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                    onClick={handleVerifyOtp}
                    disabled={!otp || otp.length !== 6 || isLoading}
                  >
                    {isLoading ? "Verifying..." : "Verify OTP"}
                  </button>

                  <p
                    className="text-blue-500 text-center text-sm mt-4 cursor-pointer hover:underline"
                    onClick={resetForm}
                  >
                    ← Back to login
                  </p>
                </>
              )}
            </div>

            <Link href="/">
              <p className="text-center text-sm text-white mt-4">
                <span className="text-white font-bold">
                  ← Webseeder Learning
                </span>
              </p>
            </Link>
          </div>
        ) : (
          <div className="max-w-[25em] w-full mx-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full text-center">
              <h2 className="text-2xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-r from-[#008ce4] to-[#00af9e]">
                Welcome back!
              </h2>
              <div className="flex justify-center my-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-200">
                  <User className="text-gray-600" size={32} />
                </div>
              </div>
              <p className="text-lg font-medium">Hi, {user?.name || user?.firstName || user?.email}</p>
              <p className="text-gray-500 mb-6">{user?.role}</p>
              <Link href="http://localhost:5173">
                <button className="w-full bg-[#56B3ED] text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition">
                  Go to Dashboard
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentLogin;
