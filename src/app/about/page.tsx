"use client";

import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import Saddam from '../../../public/images/home/saddam.jpg'

const About= () => {
  const temaMembersData = [
    {
      id: 1,
      name: 'Md. Saddam Hossain Saykat',
      position: 'CEO',
      image: Saddam,
      linkedin: '#',
      facebook: '#',
      email: '#',
    },{
      id: 1,
      name: 'Md. Saddam Hossain Saykat',
      position: 'CEO',
      image: Saddam,
      linkedin: '#',
      facebook: '#',
      email: '#',
    },{
      id: 1,
      name: 'Md. Saddam Hossain Saykat',
      position: 'CEO',
      image: Saddam,
      linkedin: '#',
      facebook: '#',
      email: '#',
    },{
      id: 1,
      name: 'Md. Saddam Hossain Saykat',
      position: 'CEO',
      image: Saddam,
      linkedin: '#',
      facebook: '#',
      email: '#',
    },{
      id: 1,
      name: 'Md. Saddam Hossain Saykat',
      position: 'CEO',
      image: Saddam,
      linkedin: '#',
      facebook: '#',
      email: '#',
    },{
      id: 1,
      name: 'Md. Saddam Hossain Saykat',
      position: 'CEO',
      image: Saddam,
      linkedin: '#',
      facebook: '#',
      email: '#',
    },{
      id: 1,
      name: 'Md. Saddam Hossain Saykat',
      position: 'CEO',
      image: Saddam,
      linkedin: '#',
      facebook: '#',
      email: '#',
    },{
      id: 1,
      name: 'Md. Saddam Hossain Saykat',
      position: 'CEO',
      image: Saddam,
      linkedin: '#',
      facebook: '#',
      email: '#',
    }
  ]
  return (
    <>
       <section className={`bg-[url('/images/about/about_background.jpg')] bg-no-repeat bottom bg-cover py-12`}>
        <div className="container">
          <h2 className="text-3xl text-center">About NexGen Lab</h2>
          <div className="bg-blue-500 py-10 px-20 rounded-2xl my-8 text-gray-200 text-lg">
            <p>Nexgen Lab is at the forefront of technological innovation, specializing in cutting-edge software development and advanced testing services. Our team of experienced engineers excels in designing and developing sophisticated web, desktop, and mobile applications that meet the highest standards of quality and performance.</p>
            <p className="mt-6">Since our establishment, Nexgen Lab has partnered with a variety of organizations, from emerging startups to established industry leaders. We are dedicated to delivering transformative solutions that drive operational excellence and business growth across diverse sectors.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h5 className="w-full md:w-3/5 mx-auto text-center text-3xl">
            Our dedicated and skilled team collaborates with enthusiasm to turn your ideas into reality.
          </h5>

           <div className="grid md:grid-cols-4 gap-8 mt-12">
              {temaMembersData.map((person, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl py-8 px-2 shadow-md hover:shadow-lg transition"
                >
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={100}
                    height={100}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-2 border-primary"
                  />
                  <h2 className="text-lg font-semibold text-center">{person.name}</h2>
                  <p className="text-xl text-center text-gray-400 mt-1">{person.position}</p>

                    <div className="flex justify-center gap-4 mt-6">
                      <a className="border border-primary text-lg p-2 rounded-sm" target="_blank" href={person.linkedin}><FaLinkedinIn/></a>
                      <a className="border border-primary text-lg p-2 rounded-sm" target="_blank" href={person.facebook}><FaFacebookF/></a>
                      <a className="border border-primary text-lg p-2 rounded-sm" target="_blank" href={person.email}><HiOutlineMail/></a>
                    </div>
                </div>
              ))}
           </div>
        </div>
      </section>



      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg">
            {/* Mission */}
            <div className="bg-black text-white p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Our Mission</h2>
              <p className="mb-4">
                At Nexgen Lab, our mission is to deliver comprehensive digital management solutions for every enterprise,
                while guiding potential clients toward embracing advanced technological innovations.
              </p>
              <p className="mb-4">
                We aim to dispel common misconceptions associated with digital management systems by leveraging
                cutting-edge technology and building automation systems that accelerate business growth.
              </p>
              <p>
                We specialize in creating both custom and off-the-shelf software solutions, along with mobile apps,
                website development, and theme design services to meet your unique needs.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-blue-500 text-white p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Our Vision</h2>
              <p className="mb-4">
                Nexgen Lab is a premier software development firm renowned for its expertise in both custom and
                ready-made software solutions. Since our inception, we have built a reputation for excellence, providing
                innovative mobile apps, website development, and theme design services.
              </p>
              <p className="mb-4">
                Founded with a commitment to perfection and uncompromising quality, Nexgen Lab has quickly established
                itself as a global leader in the software development industry.
              </p>
              <p>
                Our focus is on delivering exceptional digital solutions that meet the highest standards and drive success
                for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="pb-20 pt-10">
        <div className="container">
          <div className="relative h-32 md:h-48">
          <div className="absolute inset-0 bg-cover bg-center rounded-3xl overflow-hidden" style={{ backgroundImage: "url('/images/about/code-bg-image.png')"}} >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 bg-opacity-60"></div>
          </div>
          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold text-center">
              Are you ready to share your knowledge with us?
            </h2>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default About;
