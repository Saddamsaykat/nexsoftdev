"use client";
import React from "react";
import Image from "next/image";
import services from "../../../public/images/servises/our_servises.jpg";

const servicesData = [
  {
    title: "DevOps & Git",
    description:
      "We development and operations teams, automate processes to increase efficiency and reliability, and deliver software faster and more reliably to meet business goals.",
    items: [],
  },
  {
    title: "Website Development",
    description: "",
    items: [
      "Web Design",
      "Frontend Development",
      "Backend Development",
      "CMS",
      "Web Hosting",
      "Responsive Design",
      "Project Management",
    ],
  },
  {
    title: "App Development",
    description: "",
    items: ["UI/UX Design", "IOS", "Android", "Backend Services", "Maintenance"],
  },
  {
    title: "SSL Commerce",
    description:
      "SSL is essential for ensuring confidentiality, integrity, and authenticity of data transmitted over the internet, thereby enhancing security and trustworthiness in online ...see more",
    items: [],
  },
  {
    title: "Customer Service",
    description:
      "We support and assistance provided by a business to its customers before, during, and after a purchase or service. It's a crucial aspect of the overall customer experience and can significantly ...see more",
    items: [],
  },
  {
    title: "Learning Platform",
    description: "",
    items: [
      "Designing",
      "Development",
      "SEO",
      "Content Delivery",
      "Support",
      "Resources",
      "Tools",
    ],
  },
];

const projectIdeas = [
  "Hotel & Restaurant Management App",
  "Hospital Management App",
  "Inventory Management App",
  "School Management App",
  "E-commerce",
  "Library management",
];

const ServicesPage = () => {
  return (
    <div className="bg-white text-black px-4 sm:px-6 md:px-10 lg:px-20 py-12 space-y-16 min-h-screen">
      {/* Banner Image */}
      <div className="w-full max-w-7xl mx-auto">
        <Image
          src={services}
          alt="Our Services"
          className="w-full rounded-xl shadow-md object-cover max-h-96"
          priority
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 80vw,
                 70vw"
          style={{ width: "100%", height: "auto", borderRadius: "1rem" }}
        />
      </div>

      {/* Header */}
      <section className="text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 mt-6">
          Our Services
        </h1>
        <p className="text-sm text-gray-700">Siam Vusa</p>
      </section>

      {/* Services Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {servicesData.map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md text-black flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            {service.description && (
              <p className="text-sm text-gray-700 mb-4">{service.description}</p>
            )}
            {service.items.length > 0 && (
              <ul className="text-sm list-disc list-inside space-y-1 flex-grow">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* Project Ideas Section */}
      <section className="text-center px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
          Your Ideas Transforming Into Technology
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {projectIdeas.map((idea, idx) => (
            <div
              key={idx}
              className="bg-white text-black p-6 rounded-xl shadow-lg text-center font-medium min-w-[150px] max-w-[250px] w-full sm:w-[45%] md:w-[30%] lg:w-[18%] mx-auto"
            >
              {idea}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-black mt-10">
        Let us Help You With Your Project
      </footer>
    </div>
  );
};

export default ServicesPage;