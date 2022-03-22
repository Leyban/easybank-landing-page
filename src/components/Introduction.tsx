import { image } from "../images/image"
import { RequestInvite } from "./RequestInvite"

export const Introduction:React.FC = () => {
    return (
        <div className="introduction">
            <div className="message-container">
                <div className="intro-message">
                    <h1>Next generation digital banking</h1>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop for 
                        spending, saving, budgeting, investing, and much more.</p>
                    <RequestInvite />
                </div>
            </div>
            
            <div className="mockups">
                <img src={image.bgIntroDesktop} alt='background waves' className="background-waves"/>
                <img src={image.bgIntroMobile} alt='background waves' className="background-waves-mobile"/>
            </div>
        </div>
    )
}