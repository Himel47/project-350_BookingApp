import { useNavigate } from 'react-router-dom'
import './header.css'

const Header = () => {

    const navigate = useNavigate();

    const handleList = () => {
        navigate("/list")
    }

    return (
        <div class="header">
            <div class="image">
                <img src={require('../../images/h1.jpg')} alt="" class="slide" />
            </div>
            <div class="headContainer">

                <div class="text">
                    <h1>Welcome to Britannia Hotel</h1>
                    <p>Britannia Hotel Sylhet is located in Sylhet and features a terrace. Among the facilities of this property
                        are a restaurant, a 24-hour front desk and room service, along with free WiFi throughout the property.<br /> Free
                        private parking is available and the hotel also has car rental for guests who want to explore the
                        surrounding area.</p>
                    <button>MORE INFO</button>
                </div>


                <div class="imageItem">
                    <img src={require('../../images/h1.jpg')} alt="" class="slide active" onclick="img('../../images/h1.jpg')" />
                    <img src={require('../../images/h5.jpg')} alt="" class="slide" onclick="img('../../images/h5.jpg')" />
                    <img src={require('../../images/home11.jpg')} alt="" class="slide" onclick="img('../../images/home11.jpg')" />
                    <img src={require('../../images/home14.jpg')} alt=""
                        class="slide" onclick="img('../../images/home14.jpg')" />
                </div>
            </div>

            <div className="headerSearch">
                <div className="headerContainer">
                    <div className="box">
                        <label htmlFor="">Check-in:</label>
                        <input type="date" placeholder='Check-in-Date' />
                    </div>
                    <div className="box">
                        <label htmlFor="">Check-out:</label>
                        <input type="date" placeholder='Check-out-Date' />
                    </div>
                    <div className="box">
                        <label htmlFor="">Adult:</label>
                        <input type="number" placeholder="0" />
                    </div>
                    <div className="box">
                        <label htmlFor="">Children:</label>
                        <input type="number" placeholder="0" />
                    </div>

                </div>
                <button className="search" onClick={handleList}>Search</button>
            </div>
        </div>
    )
}

export default Header