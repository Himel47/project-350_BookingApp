import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'
import './header.css'
import { DateRange } from 'react-date-range'
import { format } from "date-fns";
import { useState } from 'react';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Header = ({ type }) => {

    const [dateDrawer, setDateDrawer] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);


    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        });
    };

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login")
    }

    const handleList = () => {
        navigate("/list", { state: { date, options } })
    }

    return (
        <div class="header">
            <div className={type === "loggedIn" ? "loginContainer loginMode" : "loginContainer"}>
                <div className="loginWrapper">
                    <div className="loginItems">
                        <h1 className="loginTitle">
                            A Lifetime of Discount? It's Awesome
                        </h1>
                        <p className="loginText">
                            Get rewarded for your booking, save upto 15% or more savings with a free <b>Britannia</b> account.
                        </p>
                        {type !== "loggedIn" &&
                            <button className="loginBtn" onClick={handleLogin}>
                                Register / Login
                            </button>
                        }
                    </div>
                </div>
            </div>
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
                        <label htmlFor="">Check-Range:</label>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className="headerSearchIcon" />
                            <span onClick={() => setDateDrawer(!dateDrawer)} className="headerSearchText">
                                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                            </span>
                            {dateDrawer && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                                minDate={new Date()}
                            />}
                        </div>
                    </div>
                    <div className="box">
                        <label htmlFor="">Adult:</label>
                        <div className="optionCounter">
                            <button disabled={options.adult <= 1} className="optionCounterBtn" onClick={() => handleOption("adult", "d")}>-</button>
                            <span className="optionCounterNumber">{options.adult}</span>
                            <button className="optionCounterBtn" onClick={() => handleOption("adult", "i")}>+</button>
                        </div>
                    </div>
                    <div className="box">
                        <label htmlFor="">Children:</label>
                        <div className="optionCounter">
                            <button disabled={options.children <= 0} className="optionCounterBtn" onClick={() => handleOption("children", "d")}>-</button>
                            <span className="optionCounterNumber">{options.children}</span>
                            <button className="optionCounterBtn" onClick={() => handleOption("children", "i")}>+</button>
                        </div>
                    </div>
                    <div className="box">
                        <label htmlFor="">Rooms:</label>
                        <div className="optionCounter">
                            <button disabled={options.room <= 1} className="optionCounterBtn" onClick={() => handleOption("room", "d")}>-</button>
                            <span className="optionCounterNumber">{options.room}</span>
                            <button className="optionCounterBtn" onClick={() => handleOption("room", "i")}>+</button>
                        </div>
                    </div>
                </div>
                <button className="searchBtn" onClick={handleList}>Search</button>
            </div>
        </div >
    )
}

export default Header