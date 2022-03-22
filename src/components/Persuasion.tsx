import { image } from "../images/image"

export const Persuasion:React.FC = () => {
    return(
        <div className="persuasion">
            <div className="why">
                <h2>Why choose Easybank?</h2>
                <p>We leverage Open Banking to turn your bank account into your financial hub. 
                    Control your finances like never before.</p>
            </div>
            <div className="features">
                <div className="feature">
                    <div className="logo">
                        <img src={image.iconOnline} alt="hand holding money $$$" />
                    </div>
                    <h3>Online Banking</h3>
                    <p>Our modern web and mobile applications allow you to keep track of your 
                        finances wherever you are in the world.</p>   
                </div>
                <div className="feature">
                    <div className="logo">
                        <img src={image.iconBudgeting} alt="phone with money $$$" />
                    </div>
                    <h3>Simple Budgeting</h3>
                    <p>See exactly where your money goes each month. Receive notifications 
                        when you’re close to hitting your limits.</p>   
                </div>
                <div className="feature">
                    <div className="logo">
                        <img src={image.iconOnboarding} alt="people in meeting" />
                    </div>
                    <h3>Fast Onboarding</h3>
                    <p>We don’t do branches. Open your account in minutes online and start 
                        taking control of your finances right away.</p>   
                </div>
                <div className="feature">
                    <div className="logo">
                        <img src={image.iconApi} alt="microchip" />
                    </div>
                    <h3>Open API</h3>
                    <p>Manage your savings, investments, pension, and much more from one account. 
                        Tracking your money has never been easier.</p>   
                </div>
            </div>
        </div>
    )
}