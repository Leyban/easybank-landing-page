import { image } from "../images/image"
import { RequestInvite } from "./RequestInvite"

export const Footer:React.FC = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="logo-galore">
                    <img src={image.logoWhite}  alt="easybank logo" />
                    <div className="social">
                        <img src={image.iconFacebook} alt="facebook" />
                        <img src={image.iconYoutube} alt="youtube" />
                        <img src={image.iconTwitter} alt="twitter" />
                        <img src={image.iconPinterest} alt="pinterest" />
                        <img src={image.iconInstagram} alt="instagram" />
                    </div>
                </div>
                <div className="links">
                    <p className="one">About Us</p>
                    <p className="two">Contact</p>
                    <p className="three">Blog</p>
                </div>
                <div className="links">
                    <p className="one">Careers</p>
                    <p className="two">Support</p>
                    <p className="three">Privacy Policy</p>
                </div>
                <div className="request-and-copyright">
                    <RequestInvite />
                    <p> © Easybank. All Rights Reserved</p>
                </div>
            </div>
           
        </div>    
    )
}