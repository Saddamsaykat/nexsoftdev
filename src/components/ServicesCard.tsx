
const ServicesCard = () => {
    const servicesData = [
        {
            title: "DevOps & Git",
            description: "We development and operations teams, automate processes to increase efficiency and reliability, and deliver software faster and more reliably to meet business goals."
        },
        {
            title: "Website Development",
            lists: [
            "Web Design",
            "Frontend Development",
            "Backend Development",
            "CMS",
            "Web Hosting",
            "Responsive Design",
            "Project Management"
            ]
        },
        {
            title: "App Development",
            lists: [
            "UI/UX Design",
            "IOS",
            "Android",
            "Backend Services",
            "Maintenance"
            ]
        },
        {
            title: "SSL Commerce",
            description: "SSL is essential for ensuring confidentiality, integrity, and authenticity of data transmitted over the internet, thereby enhancing security and trustworthiness in online."
        },
        {
            title: "Customer Service",
            description: "We support and assistance provided by a business to its customers before, during, and after a purchase or service. It's a crucial aspect of the overall customer experience and can significantly ..."
        },
        {
            title: "Learning Platform",
            lists: [
            "Designing",
            "Development",
            "SEO",
            "Content Delivery",
            "Support",
            "Resources",
            "Tools"
            ]
        }
    ];

    return (
        <div className="grid md:grid-cols-3 gap-8">
            {
                servicesData.map(ele=>
                    <div key={ele.title} className="col-span-1  p-5 rounded-2xl  shadow-lg bg-gray-100">
                        <h4 className="text-xl text-center font-semibold">{ele.title}</h4>
                        <hr  className="my-4"/>
                        {
                            ele.lists?
                                ele.lists.map(item=>
                                    <p key={item}>{item}</p>
                                )
                            :
                            <div>{ele.description}</div>
                        }
                    </div>
                )
            }
        </div>
    );
};

export default ServicesCard;