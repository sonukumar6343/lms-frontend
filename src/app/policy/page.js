// "use client";
// import { useState } from "react";
// import Policy from "./privacy";
// import TermOfCondition from "./termofcondition";
// import AppAgreement from "./appAgreement";
// import Refund from "./refundPolicy";

// export default function PolicyPage() {
//   const [activeTab, setActiveTab] = useState("privacy");

//   const tabButtonStyle = (tab) =>
//     `px-3 py-1 rounded-full text-sm  transition-colors duration-200 ${
//       activeTab === tab
//         ? "bg-[#008CE4] text-white"
//         : "bg-[#EFEFEF] text-[#98828A] hover:bg-gray-300"
//     }`;

//   return (
//     <div className="bg-[#F8F9FA] ">
//       <main className="  pt-30 ">
//         <div className="flex ml-10  justify-start gap-3 mb-6">
//           <button
//             onClick={() => setActiveTab("privacy")}
//             className={tabButtonStyle("privacy")}
//           >
//             Privacy & Policy
//           </button>
//           <button
//             onClick={() => setActiveTab("terms")}
//             className={tabButtonStyle("terms")}
//           >
//             T & C
//           </button>
//           <button
//             onClick={() => setActiveTab("app")}
//             className={tabButtonStyle("app")}
//           >
//             App Agreement
//           </button>
//           <button
//             onClick={() => setActiveTab("refund")}
//             className={tabButtonStyle("refund")}
//           >
//             Refund Policy
//           </button>
//         </div>

//         <div className="">
//           {activeTab === "privacy" && (
//             <>
//               <Policy />
//             </>
//           )}
//           {activeTab === "terms" && (
//             <>
//               <TermOfCondition />
//             </>
//           )}
//           {activeTab === "app" && (
//             <>
              
//               <AppAgreement />
//             </>
//           )}
//           {activeTab === "refund" && (
//             <>
              
//               <Refund />
//             </>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import Policy from "./privacy";
import TermOfCondition from "./termofcondition";
import AppAgreement from "./appAgreement";
import Refund from "./refundPolicy";

export default function PolicyPage() {
  const [activeTab, setActiveTab] = useState("privacy");

  const tabButtonStyle = (tab) =>
    `px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
      activeTab === tab
        ? "bg-[#008CE4] text-white"
        : "bg-[#EFEFEF] text-[#98828A] hover:bg-gray-300"
    }`;

  return (
    <div className="bg-[#F8F9FA]">
      <main className="pt-8 pt-30">
        <div className="flex flex-wrap ml-4 sm:ml-10 justify-start gap-2 sm:gap-3 mb-4 sm:mb-6">
          <button
            onClick={() => setActiveTab("privacy")}
            className={tabButtonStyle("privacy")}
          >
            Privacy & Policy
          </button>
          <button
            onClick={() => setActiveTab("terms")}
            className={tabButtonStyle("terms")}
          >
            T & C
          </button>
          <button
            onClick={() => setActiveTab("app")}
            className={tabButtonStyle("app")}
          >
            App Agreement
          </button>
          <button
            onClick={() => setActiveTab("refund")}
            className={tabButtonStyle("refund")}
          >
            Refund Policy
          </button>
        </div>

        <div className="px-4 sm:px-0">
          {activeTab === "privacy" && <Policy />}
          {activeTab === "terms" && <TermOfCondition />}
          {activeTab === "app" && <AppAgreement />}
          {activeTab === "refund" && <Refund />}
        </div>
      </main>
    </div>
  );
}