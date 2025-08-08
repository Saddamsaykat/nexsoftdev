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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEX SOFT LAB | Mobile App Development",
  description:
    "Next Software Development is your trusted partner for modern web solutions using Next.js, React, TypeScript, and scalable technologies. We build high-performance, SEO-optimized, and user-friendly applications tailored to your business needs.",
};

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
    <div className=" font-sas">
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
      </header>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
          Mobile Application Development
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Standard mobile application development involves creating apps
          tailored to specific platforms, such as iOS or Android, using their
          respective development tools and languages. This process typically
          includes defining app objectives, designing intuitive and engaging
          user interfaces, and coding the app using platform-specific
          technologies like Swift for iOS or Kotlin for Android. Rigorous
          testing is performed to ensure reliability and performance across
          different devices and operating systems. Once the app is refined and
          optimized, it is deployed to app stores, followed by ongoing
          maintenance and updates to address bugs, introduce new features, and
          adapt to evolving technologies.
        </p>
      </section>

      {/* Steps Section */}
      <section className="py-12 sm:py-16">
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
    </div>
  );
};

export default Page;
