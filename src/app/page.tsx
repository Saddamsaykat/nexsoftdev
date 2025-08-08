import ProfileCard from "@/components/main/ProfileCard";
import ServicesCard from "@/components/main/ServicesCard";
import Link from "next/link";
import Saddam from '../../public/images/home/saddam.jpg'
import SectionTitle from "@/components/main/SectionTitle";

const profileData = [
    {
    name: "Md. Saddam Hossain Saykat",
    title: "Founder & Operational CEO",
    organization: "NexGen Lab",
    links: {
      linkedin: "#", 
      github: "#", 
      email: "#"
    },
    image: Saddam
  },{
    name: "Md. Saddam Hossain Saykat",
    title: "Founder & Operational CEO",
    organization: "NexGen Lab",
    links: {
      linkedin: "#", 
      github: "#", 
      email: "#"
    },
    image: Saddam
  },{
    name: "Md. Saddam Hossain Saykat",
    title: "Founder & Operational CEO",
    organization: "NexGen Lab",
    links: {
      linkedin: "#", 
      github: "#", 
      email: "#"
    },
    image: Saddam
  }
]

const Home = () => {
  return (
    <>
      {/* Banner ================= */}
      <section className={`bg-[url('/images/home/banner_image.jpg')] bg-no-repeat bg-top bg-cover text-gray-200 py-28 md:py-40`}>
        <div className="container">
          <h2 className="text-2xl md:text-4xl">The Softwere Company</h2>
          <p className="my-4 w-full md:w-1/2 ">“We are the best digital solution for your business.” Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, atque adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, sunt?</p>
          <Link href="/services">
            <button className="py-3 cursor-pointer px-5 mt-6 bg-blue-950 border-gray-600 border-[1px] rounded">Explore Our Softwere</button>
          </Link>
        </div>
      </section>

      {/* Our Global Family ================= */}
      <section className="py-20">
        <SectionTitle text={"Our Global Familly"}/>

        <div className={`bg-[url('/images/home/global_family.jpg')] bg-no-repeat bg-bottom bg-cover text-gray-200 mt-12`}>
          <div className="bg-black/60 pt-10 md:pt-20 pb-40 md:pb-72">
            <div className="bg-primary text-gray-700 py-8">
                <div className="container grid md:grid-cols-6 items-center">
                    <div className="col-span-4">
                      <h3 className="text-lg md:text-xl">Share your demand to get</h3>
                      <h2 className="text-xl md:text-3xl text-black font-semibold">the best services for your business.</h2>
                    </div>
                    <div className="col-span-2 flex md:justify-end mt-6 md:mt-0">
                      <Link href={'/contact'}>
                        <button className="bg-orange-500 font-semibold rounded text-black py-2 px-5 text-lg cursor-pointer">Talk To Us!</button>
                      </Link>
                    </div>
                </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Services Page Design  */}
      <section className="py-12">
        <div className="container">
          <SectionTitle text={"Our Services"}/>
          <ServicesCard/>
        </div>
      </section>


      {/* Services Page Design  */}
      <section className="py-20">
        <div className="container">
          <div className="flex justify-center">
           <h2 className="text-2xl md:text-4xl text-center pb-20">GROW YOUR BUSINESS WITH US</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 md:gap-6">
            {
              profileData.map((ele, i)=>
                <div key={i} className="col-span-1">
                    <ProfileCard ele={ele}/>
                </div>
              )
            }
          </div>
        </div>
      </section>
    </>
  )
};

export default Home