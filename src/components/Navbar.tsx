import { useState } from "react"
import { image } from "../images/image"
import { RequestInvite } from "./RequestInvite"

export const Navbar:React.FC = () => {
    const [navlinksClass, setNavlinksClass] = useState('nav-buttons-mobile hidden');
    const [mobileMenu, setMobileMenu] = useState(false);

    const handleMobileMenu = (open:boolean) => {
        if(open){
            setNavlinksClass('nav-buttons-mobile');
            setMobileMenu(true);
        } else {
            setNavlinksClass('nav-buttons-mobile hidden');
            setMobileMenu(false);
        }
    }

    return(
        <div className="navbarbg">
            <div className="navbar">
                <div className="logo">
                    <img src={image.logo} alt="easybank logo" />
                </div>
                <div className='nav-buttons'>
                    <div className="container">
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact</p>
                        <p>Blog</p>
                        <p>Careers</p>
                    </div>
                </div>
                <div className={navlinksClass}>
                    <div className="container">
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact</p>
                        <p>Blog</p>
                        <p>Careers</p>
                    </div>
                </div>
                <div className="mobile-buttons">
                    {!mobileMenu && <img src={image.iconHamburger} alt="hamburger not the food" className="hamburger" onClick={() => handleMobileMenu(true) }/>}
                    {mobileMenu && <img src={image.iconClose} alt="an x" className="close" onClick={() => handleMobileMenu(false) }/>}
                </div>
                <RequestInvite />
            </div>
        </div>
        
    )
}