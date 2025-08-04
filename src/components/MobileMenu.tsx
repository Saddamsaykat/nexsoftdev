"use client";

import Logo from '../../public/images/header/logo.png'
import { useEffect, useState } from "react";
import NavMenuLinks from "./NavMenuLinks";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";


const MobileMenu = () => {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    },[open])


    return (
        <div className="md:hidden">
            {/* Menu Toggle */}
            <button onClick={() => setOpen(true)} className="p-5 text-3xl text-gray-800" aria-label="Open menu">
                <IoMenuSharp/>
            </button>

            {/* Overlay */}
            <div className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
                open ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}  onClick={() => setOpen(false)} />


            {/* Side Menu */}
            <aside
                className={`fixed top-0 left-0 h-full w-[80vw] bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
                open ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex items-center justify-between  p-3 border-b-[1px] border-gray-200">
                <h2 className="text-lg font-semibold">
                    <Link href={'/'}>
                        <Image src={Logo} width={350} height={50} alt="logo"/>
                    </Link>
                </h2>
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                    <IoMdClose className='text-3xl ml-2'/>
                </button>
                </div>

                <div className="p-8">
                    <NavMenuLinks/>
                </div>
            </aside>
        </div>
    );
};

export default MobileMenu;