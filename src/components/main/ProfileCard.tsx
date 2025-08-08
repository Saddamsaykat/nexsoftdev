import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

type ProfileData = {
  name: string;
  title: string;
  organization: string;
  links: {
    linkedin: string;
    github: string;
    email: string;
  };
  image: string | StaticImageData;
};

type ProfileCardProps = {
  ele: ProfileData;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ele}) => {
    return (
        <div className="bg-gray-100 p-4 rounded-xl w-full max-w-xs mx-auto text-center shadow-lg relative">
            {/* Profile Image */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-amber-600 shadow">
                <Image
                src={ele.image}
                alt="Md. Saddam Hossain Saykat"
                width={80}
                height={80}
                className="object-cover"
                />
            </div>
            </div>
    
            {/* Card Content */}
            <div className="mt-12">
            <h2 className="text-lg font-semibold text-gray-700">
                {ele.name}
            </h2>
            <p className="text-blue-600 font-semibold mt-1">
                {ele.title}
            </p>
            <p className="text-blue-600 font-semibold mb-4">{ele.organization}</p>
    
            <div className="text-left space-y-2 text-sm text-gray-700">

                <div className='flex items-center gap-2'>
                    <span className="font-semibold mt-0.5"><FaLinkedin/></span>
                    <a href={ele.links.linkedin} className="text-blue-600 hover:underline">
                        Linkedin 
                    </a>
                </div>
                <div className='flex items-center gap-2'>
                    <span className="font-semibold mt-0.5"><MdEmail/></span>
                    <a href={ele.links.email} className="text-blue-600 hover:underline">
                        Email
                    </a>
                </div>
                <div className='flex items-center gap-2'>
                    <span className="font-semibold mt-0.5"><FaGithub/></span>
                    <a href={ele.links.github} className="text-blue-600 hover:underline">
                        Github 
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
};

export default ProfileCard;