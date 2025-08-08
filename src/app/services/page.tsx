import React from "react";
import Image from "next/image";
import services from "../../../public/images/servises/our_servises.jpg";
import ServicesCard from "@/components/main/ServicesCard";

export const metadata = {
  title: "NEX SOFT LAB | Services",
  description:
    "Next Software Development is your trusted partner for modern web solutions using Next.js, React, TypeScript, and scalable technologies. We build high-performance, SEO-optimized, and user-friendly applications tailored to your business needs.",
};


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
    <div className=" px-4 sm:px-6 md:px-10 lg:px-20 py-12 space-y-16 min-h-screen">
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

      <ServicesCard/>

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