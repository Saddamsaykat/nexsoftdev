 "use client";
import React from "react";
import Image from "next/image";
import app_banner from "../../../public/images/mobileapp/image.png";
import ideation from "../../../public/images/mobileapp/ideation.png";
import Wireframe from "../../../public/images/mobileapp/wirefearm.png";
import Prototype from "../../../public/images/mobileapp/prototype.png";
import Development from "../../../public/images/mobileapp/devlopment.png";
import Data from "../../../public/images/mobileapp/data.png";
import Content from "../../../public/images/mobileapp/content.png";
import Quality_Assurance from "../../../public/images/mobileapp/quality assurence.jpg";
import Delivery from "../../../public/images/mobileapp/delevery.png";  
 
const steps = [
  {
    title: "Ideation",
    description:
      "This phase gathers technical and business requirements, defines the target audience, and sets project goals.",
    icon: ideation,
  },
  {
    title: "Wireframe",
    description:
      "Create wireframes to structure the app layout and define how users will interact with each screen.",
    icon: Wireframe,
  },
  {
    title: "Prototype",
    description:
      "Build interactive mockups to visualize functionality and gather early feedback before development begins.",
    icon: Prototype,
  },
  {
    title: "Development",
    description:
      "Code the app using platform-specific tools like Android Studio, implementing backend and frontend features.",
    icon: Development,
  },
  {
    title: "Data",
    description:
      "Handle storage solutions, APIs, and backend infrastructure to support app features and user interactions.",
    icon: Data,
  },
  {
    title: "Content",
    description:
      "Design engaging content and visuals, ensuring an intuitive experience and brand consistency.",
    icon: Content,
  },
  {
    title: "Quality Assurance",
    description:
      "Perform rigorous testing to fix bugs, ensure compatibility, and verify smooth operation across devices.",
    icon: Quality_Assurance,
  },
  {
    title: "Delivery",
    description:
      "Deploy the finished app to app stores, set up updates and provide post-launch support.",
    icon: Delivery,
  },
];

const Page = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sas">
      {/* Header Section */}
     
 <header className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] overflow-hidden">
  {/* Background Image */}
  <Image
    src={app_banner}
    alt="Android App Development Banner"
    fill
    className="object-cover object-center"
    priority
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4 z-10">
       <p className="text-sm sm:text-base md:text-lg max-w-xl mt-50   ">
  Your idea is the best. It deserves to be developed by the experts.
</p>


  </div>
</header>


      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
          Mobile Application Development
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Standard mobile application development involves creating apps tailored to specific platforms,
          such as iOS or Android, using their respective development tools and languages. This process typically
          includes defining app objectives, designing intuitive and engaging user interfaces, and coding the app
          using platform-specific technologies like Swift for iOS or Kotlin for Android. Rigorous testing is performed
          to ensure reliability and performance across different devices and operating systems. Once the app is refined
          and optimized, it is deployed to app stores, followed by ongoing maintenance and updates to address bugs,
          introduce new features, and adapt to evolving technologies.
        </p>
      </section>

      {/* Steps Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="text-center mb-12 px-4">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-700">
            App Development Project Life Cycle
          </h3>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-100 p-6 rounded-2xl text-center shadow hover:shadow-md transition"
            >
              <Image
                src={step.icon}
                alt={step.title}
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h4 className="text-lg sm:text-xl font-semibold mb-2 text-blue-800">
                {step.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-semibold text-center text-blue-700 mb-8">
            Contact Us
          </h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address*
              </label>
              <input
                type="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Message*
              </label>
              <textarea
                rows={5}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Page;
