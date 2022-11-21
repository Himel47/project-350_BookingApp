import { useNavigate } from 'react-router-dom'
import './about.css'

const About = () => {

    const navigate = useNavigate();
    const handleAbout = () => {
        navigate("/about");
    }
    return (
        <div className="about" id='about'>
            <div className="abContainer">
                <div className="left">
                    <div className="img">
                        <img src={require('../../images/a11.jpg')} alt="" className="image1" />
                        <img src={require('../../images/a12.jpg')} alt="" className="image2" />
                    </div>
                </div>
                <div className="right">
                    <div className="heading">
                        <h5>RAISING COMFOMRT TO THE HIGHEST LEVEL</h5>
                        <h2>Welcome to Britannia Hotel</h2>
                        <p>Rooms include air conditioning, a closet and a flat-screen TV, and certain accommodations at the hotel have
                            a balcony.<br />
                            Britannia Hotel Sylhet offers a continental or buffet breakfast.<br />
                            Cherrapunji is 46.7 km from the accommodation, while Mawlynnong is 33.8 km from the property. Britannia
                            Hotel Sylhet has been welcoming Booking.com guests since Mar 6, 2020.<br />
                            Distance in property description is calculated using © OpenStreetMap
                        </p>
                        <button class="btn1" onClick={handleAbout}>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About