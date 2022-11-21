import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './roomPage.css'

const RoomPage = () => {
    return (
        <div className="roomPage">
            <Navbar />
            <div className="roomContainers">
                <div className="roomLists">
                    <div className="roomInfo">
                        <div className="infoTitle">
                            <h1>Room information</h1>
                            <p>
                                For comfortable accommodation, tourists can choose one of the 9 rooms in the hotel. You can choose between different types of rooms: suite, triple, twin, double, family. A wide range of facilities is offered here: air conditioning, flat-screen tv.<br /><br />Here is a lot of rooms with view.
                            </p>
                            <h3>Online Britannia Hotel booking</h3>
                            <br />
                            <p>
                                If you decide to stay at Britannia Hotel, don't put off booking a room. In order to see the rooms available and the up-to-date prices, choose your check-in/out dates. After booking, you will receive a confirmation letter on your e-mail.
                            </p>
                        </div>
                        <div className="roomDescription">
                            <div className="listDesc listTop">
                                <div className="roomType">
                                    <h5>Room type</h5>
                                </div>
                                <div className="roomDetails2">
                                    <span></span>
                                </div>
                                <div className="roomGuests">
                                    <h5>Guests</h5>
                                </div>
                                <div className="priceButton">
                                    <span></span>
                                </div>
                            </div>
                            <div className="listDesc listHover">
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
                                <div className="priceButton">
                                    <button>View Details</button>
                                </div>
                            </div>
                            <div className="listDesc listHover">
                                <div className="roomType">
                                    <img src={require("../../Gallery/11.jpg")} alt="" />
                                    <h6>Room description</h6>
                                </div>
                                <div className="roomDetails2">
                                    <h6><u>Deluxe Double Room (2 Adults + 1 Child)</u></h6>
                                </div>
                                <div className="roomGuests">
                                    <img src={require("../../images/person-3.png")} alt="" className="guestIcon" />
                                </div>
                                <div className="priceButton">
                                    <button>View Details</button>
                                </div>
                            </div>
                            <div className="listDesc listHover">
                                <div className="roomType">
                                    <img src={require("../../Gallery/16.jpg")} alt="" />
                                    <h6>Room description</h6>
                                </div>
                                <div className="roomDetails2">
                                    <h6><u>Deluxe Twin Room</u></h6>
                                </div>
                                <div className="roomGuests">
                                    <img src={require("../../images/person-2.png")} alt="" className="guestIcon" />
                                </div>
                                <div className="priceButton">
                                    <button>View Details</button>
                                </div>
                            </div>
                            <div className="listDesc listHover">
                                <div className="roomType">
                                    <img src={require("../../Gallery/17.jpg")} alt="" />
                                    <h6>Room description</h6>
                                </div>
                                <div className="roomDetails2">
                                    <h6><u>Large Twin Room</u></h6>
                                </div>
                                <div className="roomGuests">
                                    <img src={require("../../images/person-2.png")} alt="" className="guestIcon" />
                                </div>
                                <div className="priceButton">
                                    <button>View Details</button>
                                </div>
                            </div>
                            <div className="listDesc listHover">
                                <div className="roomType">
                                    <img src={require("../../Gallery/21.jpg")} alt="" />
                                    <h6>Room description</h6>
                                </div>
                                <div className="roomDetails2">
                                    <h6><u>Deluxe Triple Room</u></h6>
                                </div>
                                <div className="roomGuests">
                                    <div className="guestSingle">
                                        <img src={require("../../images/person-1.png")} alt="" className="guestIcon" />
                                        <p>x 4</p>
                                    </div>
                                </div>
                                <div className="priceButton">
                                    <button>View Details</button>
                                </div>
                            </div>
                            <div className="listDesc listHover">
                                <div className="roomType">
                                    <img src={require("../../Gallery/23.jpg")} alt="" />
                                    <h6>Room description</h6>
                                </div>
                                <div className="roomDetails2">
                                    <h6><u>Deluxe Family Room</u></h6>
                                </div>
                                <div className="roomGuests">
                                    <div className="guestSingle">
                                        <img src={require("../../images/person-1.png")} alt="" className="guestIcon" />
                                        <p>x 7</p>
                                    </div>
                                </div>
                                <div className="priceButton">
                                    <button>View Details</button>
                                </div>
                            </div>
                            <div className="listDesc listHover">
                                <div className="roomType">
                                    <img src={require("../../Gallery/19.jpg")} alt="" />
                                    <h6>Room description</h6>
                                </div>
                                <div className="roomDetails2">
                                    <h6><u>Family Double Room</u></h6>
                                </div>
                                <div className="roomGuests">
                                    <div className="guestSingle">
                                        <img src={require("../../images/person-1.png")} alt="" className="guestIcon" />
                                        <p>x 6</p>
                                    </div>
                                </div>
                                <div className="priceButton">
                                    <button>View Details</button>
                                </div>
                            </div>
                            <div className="listDesc listHover">
                                <div className="roomType">
                                    <img src={require("../../Gallery/10.jpg")} alt="" />
                                    <h6>Room description</h6>
                                </div>
                                <div className="roomDetails2">
                                    <h6><u>Deluxe Family Suite</u></h6>
                                </div>
                                <div className="roomGuests">
                                    <img src={require("../../images/person-3.png")} alt="" className="guestIcon" />
                                </div>
                                <div className="priceButton">
                                    <button>View Details</button>
                                </div>
                            </div>
                            <div className="listDesc listHover">
                                <div className="roomType">
                                    <img src={require("../../Gallery/17.jpg")} alt="" />
                                    <h6>Room description</h6>
                                </div>
                                <div className="roomDetails2">
                                    <h6><u>Deluxe Suite</u></h6>
                                </div>
                                <div className="roomGuests">
                                    <img src={require("../../images/person-3.png")} alt="" className="guestIcon" />
                                </div>
                                <div className="priceButton">
                                    <button>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RoomPage
