import Link from "next/link"
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
    const footerData = [
        {
            title: "About Pioneering IT Consultants",
            items: [
            { name: "Developing computer software maintain", link: "#" },
            { name: "Software applications, platforms, design,", link: "#" },
            { name: "Build, automate process and support", link: "#" },
            { name: "Business operations.", link: "#" },
            { name: "Custom software build.", link: "#" },
            ],
        },
        {
            title: "Products",
            items: [
            { name: "Web", link: "#" },
            { name: "App", link: "#" },
            { name: "Software", link: "#" },
            { name: "Ecommerce", link: "#" },
            ],
        },
        {
            title: "Company",
            items: [
            { name: "Terms & conditions", link: "termsAndConditions" },
            { name: "Privacy policy", link: "privacyPolicy" },
            ],
        },
    ];

  return (
    <>
        <footer className={`bg-[url('/images/footer/footer_backgoround.jpg')] bg-no-repeat bg-cover text-gray-200 pt-16 pb-12`}>
            <div className="container">
                <div className="grid md:grid-cols-10 gap-6">
                    {/* About Company  */}
                    <div className="col-span-3 space-y-3">
                        <FooterTitle text={footerData[0].title}/>
                        {
                            footerData[0].items.map(ele=>
                                <div key={ele.name}>
                                    <FooterLink ele={ele}/>
                                </div>
                            )
                        }
                    </div>

                    <div className="col-span-2 space-y-3">
                       <div className="space-y-1">
                            {/* Products  */}
                            <FooterTitle text={footerData[1].title}/>
                            {
                                footerData[1].items.map(ele=>
                                    <div key={ele.name}>
                                        <FooterLink ele={ele}/>
                                    </div>
                                )
                            }
                       </div>

                       <div>
                        {/* Comapany  */}
                        <FooterTitle text={footerData[2].title}/>
                            {
                                footerData[2].items.map(ele=>
                                    <div key={ele.name}>
                                        <FooterLink ele={ele}/>
                                    </div>
                                )
                            }
                       </div>
                    </div>

                     {/* Address  */}
                    <div className="col-span-2">
                        <FooterTitle text="Address"/>
                        <p className="text-sm">Rupayon Shelford (23th Floor),58/2, Mirpur Road, Shayamoli.Dhaka-1207, Bangladesh</p>
                    </div>

                    <div className="col-span-2 space-y-3">
                        {/* Contact  */}
                        <div>
                            <FooterTitle text="Contact"/>
                            <a href="tel:000000" className="text-sm">Phone: 01419499494</a>
                            <a href="mailto:test@gmail.com" className="text-sm">email: exam@gmail.com</a>
                        </div>
                        {/* Work with us  */}
                        <div>
                            <FooterTitle text="Work With Us"/>
                            <a href="mailto:test@gmail.com" className="text-sm">View Jobs</a>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <FooterTitle text="Follow Us"/>
                        <div className="flex gap-5 text-xl mt-4">
                            <Link href={'#'}><FaFacebook/></Link>
                            <Link href={'#'}><FaTwitter/></Link>
                            <Link href={'#'}><FaLinkedin/></Link>
                            <Link href={'#'}><IoLogoYoutube/></Link>
                        </div>
                    </div>
                </div>
                <hr  className="mt-12 boder-[1px] border-gray-500"/>
            </div>
        </footer>
    </>
  )
}

function FooterTitle({text}: {text: string}){
    return <h2 className="text-[1.2rem] text-primary">{text}</h2>
}

function FooterLink({ele}: {ele: {name: string; link: string}}){
    return <Link href={ele.link} className="text-sm">{ele.name}</Link>
}
