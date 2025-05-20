"use client";
import { useState } from "react";

export default function ContactFaqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "I have Sign-up related issues.",
      answer: `Some of you may have faced issues completing your signup for our online training courses. Kindly drop a mail to name@company.com with details of your Name/Skills/Phone and if possible, a screenshot of the error noticed. Our tech team will respond to you to assist you further. In most instances, this could be internet-related issues, however, we will make sure that you have a smooth sign-up process next time you log in.`,
    },
    {
      question: "I have payment-related issues",
      answer: `Most payment-related issues are due to broken communications or transactions between the payment gateway and your banking service provider. To help us serve you better and faster, kindly mail the description of your issue to accounts@webseeder.com and our accounts team will revert to you as quickly as possible.`,
    },
    {
      question: "How can I get a demo of your product?",
      answer: `If you are comfortable signing up for a free demo please head to the page below to activate one. If you wish an in-person demo, feel free to sign up using our REQUEST FOR DEMO form and our experts will arrange one after talking to you to finalize a convenient time.`,
    },
    {
      question: "I have trouble accessing my portal",
      answer: `Check your internet connection and in most cases, you will be able to log in automatically. In some cases, it could be the wrong credentials you are using to access your portal. If you are not sure about the reasons, try resetting your password by visiting our CHANGE PASSWORD page.`,
    },
    {
      question: "What are the other Communication Channels you have?",
      answer: `Webseeder is all about making technology affordable. Feel free to connect with us through any of the channels you are comfortable with: Discord, WhatsApp, Telegram, Facebook Messenger, Instagram, Twitter, LinkedIn Chat, Website Chatbot, and Phone (numbers) are some of our communication channels.`,
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F9FAFB]">
    <div className="max-w-6xl mb-20  mx-auto p-6">
      <div className="mb-12 ">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Frequently Asked Questions{" "}
          <span className="text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-[#008ce4] to-[#00af9e]">
            (FAQ’s)
          </span>
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className="border-none border-l border-blue-300 rounded-md shadow-sm">
            <button
              className={`w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 focus:outline-none transition-colors ${
                openIndex === index ? "bg-blue-100" : "bg-white"
              }`}
              onClick={() => handleToggle(index)}
            >
              {item.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="p-4 text-gray-600 border-t bg-gray-50">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
