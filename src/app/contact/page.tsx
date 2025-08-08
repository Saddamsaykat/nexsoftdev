import Image from "next/image";
import GoogleMap from '../../../public/images/contact/map.png'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEX SOFT LAB | Contact Us",
  description:
    "Next Software Development is your trusted partner for modern web solutions using Next.js, React, TypeScript, and scalable technologies. We build high-performance, SEO-optimized, and user-friendly applications tailored to your business needs.",
};

const Contact = () => {
  return (
    <>
      <section className="bg-[url('/images/contact/contact_background.jpg')] bg-no-repeat bg-cover">
        {/* Contact Card */}
        <div className="bg-black/10 py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
                />
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message*"
                  className="w-full border-b border-gray-400 bg-transparent outline-none py-2 resize-none"
                />
                <button
                  type="submit"
                  className="bg-teal-400 hover:bg-teal-500 text-white font-medium py-2 px-6 rounded transition"
                >
                  Send
                </button>
              </form>

              {/* Contact Info */}
              <div className="flex flex-col justify-center text-gray-800 mb-10">
                <h2 className="text-3xl font-semibold">
                  Any kind of information contact us.
                </h2>
                <p className="text-sm leading-relaxed w-80 mt-2">
                  Rupayon Shelford (23th Floor),
                  58/2, Mirpur Road, Shaymoli,
                  Dhaka-1207, Bangladesh
                </p>

                {/* Social Icons */}
                <div className="flex space-x-4 pt-4">
                  <a href="#" aria-label="Instagram">
                    <i className="fab fa-instagram text-xl hover:text-teal-500"></i>
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin text-xl hover:text-teal-500"></i>
                  </a>
                  <a href="#" aria-label="Email">
                    <i className="fas fa-envelope text-xl hover:text-teal-500"></i>
                  </a>
                  <a href="#" aria-label="Facebook">
                    <i className="fab fa-facebook text-xl hover:text-teal-500"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <div className="my-12 flex justify-center">
        <Image
          height={200}
          width={200}
          src={GoogleMap}
          alt="Map"
          className="w-full max-w-xl rounded-lg shadow-md"
        />
      </div>





       <section className="pb-20 pt-10">
        <div className="container">
          <div className="relative h-32 md:h-48">
          <div className="absolute inset-0 bg-cover bg-center rounded-3xl overflow-hidden" style={{ backgroundImage: "url('/images/about/code-bg-image.png')"}} >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 bg-opacity-60"></div>
          </div>
          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <div>
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold text-center">
                We will ready to serve you
              </h2>
              <p className="text-white text-center mt-3">Be with Us to Wheel Up Your Revenue.</p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Contact;