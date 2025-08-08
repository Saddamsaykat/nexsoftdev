const ServicesCard = () => {
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
      items: [
        "UI/UX Design",
        "IOS",
        "Android",
        "Backend Services",
        "Maintenance",
      ],
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

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {servicesData.map((service, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-2xl shadow-md text-black flex flex-col border"
          data-aos="fade-up"
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
  );
};

export default ServicesCard;