import { faComment, faEnvelope, faLocation, faMobileAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import './footer.css'

const Footer = () => {

    const navigate = useNavigate();
    const handleAbout = () => {
        navigate("/about")
    }

    return (
        <div className="footer">
            <div className="mail">
                <h1 className="mailTitle">
                    Save time, save money!
                </h1>
                <span className="mailDesc">
                    Sign up and we'll send the best deals to you.
                </span>
                <div className="mailInputContainer">
                    <input type="text" placeholder="Your Mail" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="contactInfo">
                <div className="info">
                    <h4 className="contactTitle">For Customers</h4>
                    <div className="condition" onClick={handleAbout}>About Britannia</div>
                    <div className="condition" onClick={handleAbout}>Customer Care/Help</div>
                    <div className="condition" onClick={handleAbout}>Corporate Accounts</div>
                    <div className="condition" onClick={handleAbout}>Financial Information</div>
                    <div className="condition" onClick={handleAbout}>Terms & Conditions</div>
                </div>
                <div className="conWrapper">
                    <h4 className="contactTitle">Contact Us</h4>
                    <div className="conItem">
                        <FontAwesomeIcon icon={faLocation} />
                        <span>B-95 Waves, Shahjalal Road, Ambarkhana Point, Sylhet</span>
                    </div>
                    <div className="conItem">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>britannia.hotel.syl@gmail.com</span>
                    </div>
                    <div className="conItem">
                        <FontAwesomeIcon icon={faMobileAlt} />
                        <span>+880 1784 646565</span>
                    </div>
                    <div className="conItem">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>+880 821 711013</span>
                    </div>
                    <div className="conItem">
                        <FontAwesomeIcon icon={faComment} />
                        <span>24/7 Customer Service</span>
                    </div>
                </div>
            </div>
            <div className="fText">
                Copyright © 2022 Britannia
            </div>
        </div>
    )
}

export default Footer