import Navbar from '../../components/navbar/Navbar'
import './searchPage.css'
import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const SearchPage = () => {

    const location = useLocation();

    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)

    const [dateDrawer1, setDateDrawer1] = useState(false)
    const [dateDrawer2, setDateDrawer2] = useState(false)

    return (
        <div className="search">
            <Navbar />
            <div className="searchContainer">
                <div className="roomWrappers">
                    <h1 className="roomTitles">Search</h1>
                    <div className="roomItems">
                        <label>Check-in-Date</label>
                        <span onClick={() => setDateDrawer1(!dateDrawer1)}>
                            {`${format(date[0].startDate, "MM/dd/yyyy")}`}
                            <FontAwesomeIcon icon={faCalendarDays} className="roomItemIcon" />
                        </span>
                        {dateDrawer1 &&
                            <DateRange onChange={item => setDate([item.selection])}
                                ranges={date}
                                minDate={new Date()} />
                        }
                    </div>
                    <div className="roomItems">
                        <label>Check-out-Date</label>
                        <span onClick={() => setDateDrawer2(!dateDrawer2)}>
                            {`${format(date[0].endDate, "MM/dd/yyyy")}`}
                            <FontAwesomeIcon icon={faCalendarDays} className="roomItemIcon" />
                        </span>
                        {dateDrawer2 &&
                            <DateRange onChange={item => setDate([item.selection])}
                                ranges={date}
                                minDate={new Date()} />
                        }
                    </div>
                    <div className="roomItems">
                        <label>Options</label>
                        <div className="roomOptions">
                            <div className="roItem">
                                <span className="roomOptionText">
                                    Adult
                                </span>
                                <input type="number" min={1} className="roomOptionInput" placeholder={options.adult} />
                            </div>
                            <div className="roItem">
                                <span className="roomOptionText">
                                    Children
                                </span>
                                <input type="number" min={0} className="roomOptionInput" placeholder={options.children} />
                            </div>
                            <div className="roItem">
                                <span className="roomOptionText">
                                    Room
                                </span>
                                <input type="number" min={1} className="roomOptionInput" placeholder={options.room} />
                            </div>
                        </div>
                    </div>
                    <button>Check Availability</button>
                </div>
                <div className="searchLists">
                    <div className="searchListContainer">
                        <div className="searchListDesc listHover">
                            <div className="roomType">
                                <img src={require("../../Gallery/9.jpg")} alt="" />
                                <h6>Room description</h6>
                            </div>
                            <div className="roomDetails2">
                                <h6><u>Deluxe Room (2 Adults + 1 Child)</u></h6>
                            </div>
                            <div className="roomGuests">
                                <img src={require("../../images/person-3.png")} alt="" className="guestIcon" />
                            </div>
                            <div className="searchPriceButton">
                                <h3><b>BDT</b> 1,290</h3>
                                <button>Book Now</button>
                            </div>
                        </div>
                        <div className="searchListDesc listHover">
                            <div className="roomType">
                                <img src={require("../../Gallery/9.jpg")} alt="" />
                                <h6>Room description</h6>
                            </div>
                            <div className="roomDetails2">
                                <h6><u>Deluxe Room (2 Adults + 1 Child)</u></h6>
                            </div>
                            <div className="roomGuests">
                                <img src={require("../../images/person-3.png")} alt="" className="guestIcon" />
                            </div>
                            <div className="searchPriceButton">
                                <h3><b>BDT</b> 1,790</h3>
                                <button>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage