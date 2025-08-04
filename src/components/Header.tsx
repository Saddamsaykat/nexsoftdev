import Image from "next/image";
import Logo from '../../public/images/header/logo.png'
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavMenuLinks from "./NavMenuLinks";

const Header = () => {
    
  return (
    <>
      <nav className="shadow py-1 sticky top-0 bg-white/95 z-95">
        <div className="container flex justify-between items-center">
            {/* Logo  */}
            <Link href={'/'}>
                <Image src={Logo} width={350} height={50} alt="logo"/>
            </Link>
            
            {/* Desktop menu  */}
            <div className="hidden md:block">
                <NavMenuLinks/>
            </div>

            {/* Mobile men */}
            <MobileMenu/>
        </div>
      </nav>
    </>
  )
}

export default Header;
