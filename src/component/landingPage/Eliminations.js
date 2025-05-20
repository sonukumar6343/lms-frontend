"use client"
import Image from "next/image";


export default function Eliminations() {
  return (
    <section className=" bg-[#F6F8FF]">
      <div className="container mx-auto  px-4 py-12 max-w-7xl">
        <div className="text-center">
          <h4 className="text-4xl font-bold mt-3">
            No eliminations{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008ce4] to-[#00af9e]">
              • No middlemen •{" "}
            </span>{" "}
            No commissions
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-8 mt-5">
          {/* Branded App */}
          <div className="md:col-span-4 p-6 rounded-2xl shadow-lg text-black">
            <div className="mb-4">
              <Image
                src="/elimination1.png"
                width={1000}
                height={300}
                alt="Branded App"
              />
            </div>
            <h3 className="text-xl font-bold">Your Own Branded App</h3>
            <p className="text-lg text-[#896D6D]">
              Have your own branded app for students to access your classes and
              content, with an annual cost.
            </p>
          </div>

          {/* CRM */}
          <div className="md:col-span-3  p-6 rounded-2xl shadow-lg text-black">
            <h3 className="text-xl font-bold">Nrich CRM</h3>
            <p className="text-lg text-[#896D6D]">
              A Lead management Tool that Provides you an Efficient and Compact
              lead nurturing software with Multiple Automations Integrated.
            </p>
            <div className="my-4">
              <Image
                src="/elimination2.png"
                width={500}
                height={300}
                alt="CRM"
              />
            </div>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Buy Now
              </button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded">
                Book A Demo
              </button>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* YouTube Streaming */}
          <div className=" p-6 rounded-2xl shadow-lg text-black">
            <h3 className="text-xl font-bold">
              YouTube Streaming{" "}
              <span className="text-red-500">Live Streaming</span>
            </h3>
            <p className="text-lg text-[#896D6D]">
              Use YouTube to conduct live classes publicly or privately for your
              students.
            </p>
            <div className="my-4">
              <Image
                src="/elemination3.png"
                width={500}
                height={300}
                alt="YouTube Streaming"
              />
            </div>
          </div>

          {/* LMS with Own Domain */}
          <div className="p-6 rounded-2xl shadow-lg text-black">
            <div className="my-4">
              <Image
                src="/elimination4.png"
                width={500}
                height={300}
                alt="LMS with Domain"
              />
            </div>
            <h3 className="text-xl font-bold">LMS With Your Own Domain</h3>
            <p className="text-lg text-[#896D6D]">
              You can use your own domain to access the LMS. Simply connect it,
              and it&apos;s ready to go. Students can access the LMS through
              your domain.
            </p>
          </div>

          {/* Website Builder */}
          <div className=" p-6 rounded-2xl shadow-lg text-black">
            <h3 className="text-xl font-bold">Create Your Website</h3>
            <div className="my-4">
              <Image
                src="/elimination5.png"
                width={500}
                height={300}
                alt="Website Builder"
              />
            </div>
            <h3 className="text-xl font-bold">Website Builder</h3>
            <p className="text-lg text-[#896D6D]">
              Creating a marketing funnel-based Website to sell your Courses and
              Digital Products, Integrated with our Inbuilt CRM.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
