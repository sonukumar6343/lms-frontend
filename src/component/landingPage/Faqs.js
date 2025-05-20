"use client"
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Importing arrow icons

const faqs = [
  { 
    question: "How do I get started with online teaching on Weseeder?", 
    answer: "Simply sign up for free and follow our guided setup process. Create your profile, design your course, and begin teaching—all with our step-by-step assistance." 
  },
  { 
    question: "What kinds of content can I offer on Weseeder Learning?", 
    answer: "Weseeder supports a wide range of content types including courses, digital materials, live webinars, and one-on-one consultations. This versatility lets you monetize your expertise in the way that best suits your teaching style." 
  },
  { 
    question: "How can I monetize my content with Weseeder?", 
    answer: "Monetization is easy on Weseeder! Price your courses, webinars, or consultations as you wish and keep 100% of your earnings (minus Razorpay’s standard transaction fees). There are no hidden commissions." 
  },
  { 
    question: "How does Weseeder Learning manage my course content?", 
    answer: "Our platform offers intuitive course management tools. You can organize lessons, update materials, and track student progress all in one centralized dashboard designed for efficiency and ease-of-use." 
  },
  { 
    question: "Can I update my course content after it's published?", 
    answer: "Absolutely. Our platform allows you to make updates to your courses, materials, or schedules at any time, ensuring that your content remains current and relevant for your students." 
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="mx-auto py-10 bg-[#F6F8FF]">
    <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mb-12">
      <h2 className="text-5xl text-3xl  font-bold text-gray-900 ">
        Frequently Asked Questions <span className="text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-[#008ce4] to-[#00af9e]">(FAQ’s)</span>
      </h2></div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg shadow-md ">
            <button
              className="w-full text-lg text-left px-4 py-4 font-medium text-gray-900 bg-white rounded-lg flex justify-between items-center"
              onClick={() => handleClick(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-600 bg-[#FDFAF6]">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
