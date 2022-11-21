import { faSnowflake } from '@fortawesome/free-regular-svg-icons'
import { faBellConcierge, faCarAlt, faCheck, faChevronDown, faChevronUp, faMugSaucer, faPeopleGroup, faSuitcase, faTicket, faTrainSubway, faUtensils, faWheelchairMove, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import { useState } from 'react'
import './aboutPage.css'

const AboutPage = () => {
    const [openIcon1, setOpenIcon1] = useState(false);
    const [openIcon2, setOpenIcon2] = useState(false);
    const [openIcon3, setOpenIcon3] = useState(false);
    const [openIcon4, setOpenIcon4] = useState(false);
    const [openIcon5, setOpenIcon5] = useState(false);
    const [openIcon6, setOpenIcon6] = useState(false);
    const [openIcon7, setOpenIcon7] = useState(false);
    const [openIcon8, setOpenIcon8] = useState(false);

    return (
        <div className='aboutPage'>
            <Navbar />
            <div className="gContainer">
                <div className="left">
                    <div class="heading">
                        <h5>QUALITY IS OUT FIRST PRIORITY</h5>
                        <h2>Welcome to Britannia Hotel</h2>
                        <p>
                            <b># 3 star property</b><br /><br />
                            Riverfront hotel with 3 restaurants, connected to a shopping center, near Hazrat Shah Jalal Tomb.<br /><br />
                            Britannia Hotel is located 7.7 km from the airport and offers a pick-up service. Free benefits include Wi-fi, self parking, and cooked-to-order breakfast daily from 07:00 to 10:30.
                        </p>
                        <div className="highLight">
                            <div className="heading">
                                <h5><b>REAL ESTATE HIGHLIGHTS:</b></h5>
                            </div>
                            <div className="highlightItem">
                                <div className="highlightTitle">
                                    <FontAwesomeIcon icon={faWifi} className="highlightIcon" />
                                    <div className="highlightText">
                                        <ul>Free Wifi</ul>
                                    </div>
                                </div>
                                <div className="highlightTitle">
                                    <FontAwesomeIcon icon={faUtensils} className="highlightIcon" />
                                    <div className="highlightText">
                                        <ul>Restaurant</ul>
                                    </div>
                                </div>
                                <div className="highlightTitle">
                                    <FontAwesomeIcon icon={faSnowflake} className="highlightIcon" />
                                    <div className="highlightText">
                                        <ul>Air conditioner</ul>
                                    </div>
                                </div>
                                <div className="highlightTitle">
                                    <FontAwesomeIcon icon={faMugSaucer} className="highlightIcon" />
                                    <div className="highlightText">
                                        <ul>Free breakfast</ul>
                                    </div>
                                </div>
                                <div className="highlightTitle">
                                    <FontAwesomeIcon icon={faCarAlt} className="highlightIcon" />
                                    <div className="highlightText">
                                        <ul>Free parking</ul>
                                    </div>
                                </div>
                                <div className="highlightTitle">
                                    <FontAwesomeIcon icon={faTrainSubway} className="highlightIcon" />
                                    <div className="highlightText">
                                        <ul>Airport transportation service</ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="facilities">
                            <div className="mainFac">
                                <h5><b>Main Facilities</b></h5>
                                <ul className="facilityItem">
                                    <li>Daily housekeeping</li>
                                    <li>3 restaurants</li>
                                    <li>Room service</li>
                                    <li>Coffee shop/cafe</li>
                                    <li>24 Hour Business Center</li>
                                    <li>Pick up service from the airport</li>
                                    <li>Terrace</li>
                                    <li>24 hour front desk/ counter</li>
                                    <li>Air conditioner</li>
                                    <li>Laundry service</li>
                                    <li>Self-service laundry</li>
                                    <li>Concierge service</li>
                                </ul>
                            </div>
                            <div className="familyFac">
                                <h5><b>For Family</b></h5>
                                <ul className="facilityItem">
                                    <li>Children stay for free</li>
                                    <li>Playground on property</li>
                                    <li>Roll away/extra bed</li>
                                    <li>Private bathroom</li>
                                    <li>Television</li>
                                    <li>Terrace</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="right">
                    <div className="img">
                        <img src={require('../../images/a11.jpg')} alt="" className="image1" />
                        <img src={require('../../images/a12.jpg')} alt="" className="image2" />
                    </div>
                </div>
            </div>
            <div className="commonGrid">
                <div className="commonTitle">
                    <div className="heading"></div>
                    <div className="hTitle">
                        <h2>OverView</h2>
                    </div>
                </div>
                <div className="commonItems">
                    <div className="details">
                        <div className="dTitle">
                            <FontAwesomeIcon icon={faCheck} />
                            <h3>Hotel Size</h3>
                        </div>
                        <ul className="dDetails">
                            <li className="dItem">60 Rooms</li>
                        </ul>
                    </div>
                    <div className="details">
                        <div className="dTitle">
                            <FontAwesomeIcon icon={faCheck} />
                            <h3>Arrival / Return</h3>
                        </div>
                        <ul className="dDetails">
                            <li className="dItem">Check-in from 12:00 noon - 14:00</li>
                            <li className="dItem">Minimum check-in age - 18 years</li>
                            <li className="dItem">Check out time is 11:00</li>
                        </ul>
                    </div>
                    <div className="details">
                        <div className="dTitle">
                            <FontAwesomeIcon icon={faCheck} />
                            <h3>Restrictions related to your travel</h3>
                        </div>
                        <ul className="dDetails">
                            <li className="dItem">Check the COVID-19 restrictions.</li>
                        </ul>
                    </div>
                    <div className="details">
                        <div className="dTitle">
                            <FontAwesomeIcon icon={faCheck} />
                            <h3>Special check-in instructions</h3>
                        </div>
                        <ul className="dDetails">
                            <li className="dItem">Front desk staff will greet guests upon arrival</li>
                        </ul>
                    </div>
                    <div className="details">
                        <div className="dTitle">
                            <FontAwesomeIcon icon={faCheck} />
                            <h3>Required at check-in</h3>
                        </div>
                        <ul className="dDetails">
                            <li className="dItem">Credit card, debit card or cash deposit required for incidental charges</li>
                            <li className="dItem">Government issued photo ID is required</li>
                            <li className="dItem">Minimum check-in age is 18</li>
                        </ul>
                    </div>
                    <div className="details">
                        <div className="dTitle">
                            <FontAwesomeIcon icon={faCheck} />
                            <h3>Children</h3>
                        </div>
                        <ul className="dDetails">
                            <li className="dItem">One child (age 5 and under) stays free when sharing a room with a parent or guardian, using existing bedding</li>
                            <li className="dItem">No cots (kids' beds)</li>
                        </ul>
                    </div>
                    <div className="details">
                        <div className="dTitle">
                            <FontAwesomeIcon icon={faCheck} />
                            <h3>Pets</h3>
                        </div>
                        <ul className="dDetails">
                            <li className="dItem">Pets are not ALLOWED</li>
                        </ul>
                    </div>
                    <div className="details">
                        <div className="dTitle">
                            <FontAwesomeIcon icon={faWifi} />
                            <h3>Internet</h3>
                        </div>
                        <ul className="dDetails">
                            <li className="dItem">Free Wi-Fi in public areas</li>
                            <li className="dItem">Free Wi-Fi in the room</li>
                        </ul>
                    </div>
                    <div className="details">
                        <div className="dTitle">
                            <FontAwesomeIcon icon={faCarAlt} />
                            <h3>Parking Lot</h3>
                        </div>
                        <ul className="dDetails">
                            <li className="dItem">Free self parking on site</li>
                        </ul>
                    </div>
                    <div className="details">
                        <div className="dTitle">
                            <FontAwesomeIcon icon={faCheck} />
                            <h3>Transit</h3>
                        </div>
                        <ul className="dDetails">
                            <li className="dItem">Pick up from the airport*</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="commonGrid">
                <div className="commonTitle">
                    <div className="heading"></div>
                    <div className="hTitle">
                        <h2>Property Amenities</h2>
                    </div>
                </div>
                <div className="commonItems">
                    <div className="details">
                        <div className="dTitle">
                            <FontAwesomeIcon icon={faUtensils} />
                            <h3>Food and Drinks</h3>
                        </div>
                        <ul className="dDetails">
                            <li className="dItem">Free cooked-to-order breakfast every morning 07:00–10:30</li>
                            <li className="dItem">3 restaurants</li>
                            <li className="dItem">Coffee shop</li>
                            <li className="dItem">Barbecue grill</li>
                            <li className="dItem">Room service (limited hours)</li>
                        </ul>
                    </div>
                    <div className="details">
                        <div className="dTitle">
                            <FontAwesomeIcon icon={faBellConcierge} />
                            <h3>Services</h3>
                        </div>
                        <ul className="dDetails">
                            <li className="dItem">24 hour front desk/counter</li>
                            <li className="dItem">Concierge service</li>
                            <li className="dItem">Travel/ticket assistance</li>
                            <li className="dItem">Dry cleaning/laundry service</li>
                            <li className="dItem">Free newspapers in the lobby</li>
                            <li className="dItem">Luggage storage</li>
                        </ul>
                    </div>
                    <div className="details">
                        <div className="dTitle">
                            <FontAwesomeIcon icon={faPeopleGroup} />
                            <h3>Travelling with Children</h3>
                        </div>
                        <ul className="dDetails">
                            <li className="dItem">Children stay for free</li>
                            <li className="dItem">Playground</li>
                        </ul>
                    </div>
                    <div className="details">
                        <div className="dTitle">
                            <FontAwesomeIcon icon={faCheck} />
                            <h3>Convenience</h3>
                        </div>
                        <ul className="dDetails">
                            <li className="dItem">Picnic area</li>
                            <li className="dItem">Terrace</li>
                        </ul>
                    </div>
                    <div className="details">
                        <div className="dTitle">
                            <FontAwesomeIcon icon={faTicket} />
                            <h3>Interesting activities</h3>
                        </div>
                        <ul className="dDetails">
                            <li className="dItem">Near the skiing area</li>
                            <li className="dItem">Whale watching nearby</li>
                        </ul>
                    </div>
                    <div className="details">
                        <div className="dTitle">
                            <FontAwesomeIcon icon={faWheelchairMove} />
                            <h3>Accessibility</h3>
                        </div>
                        <ul className="dDetails">
                            <li className="dItem">The bathroom is easily accessible</li>
                            <li className="dItem">Accessibility in the room</li>
                        </ul>
                    </div>
                    <div className="details">
                        <div className="dTitle">
                            <FontAwesomeIcon icon={faSuitcase} />
                            <h3>Work away from home</h3>
                        </div>
                        <ul className="dDetails">
                            <li className="dItem">24 hour business center</li>
                            <li className="dItem">Meeting room</li>
                        </ul>
                    </div>
                    <div className="details">
                        <div className="dTitle">
                            <FontAwesomeIcon icon={faCheck} />
                            <h3>Language</h3>
                        </div>
                        <ul className="dDetails">
                            <li className="dItem">English</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="policy">
                <div className="commonTitle">
                    <div className="heading"></div>
                    <div className="hTitle">
                        <h2>Fees & Policies</h2>
                    </div>
                </div>
                <div className="policyList">
                    <div className="pItem">
                        <div className="dTitle">
                            <h3>Additional amenities</h3>
                        </div>
                        <div className="dDetails">
                            <li>Airport <u>shuttle service</u> is offered for an additional charge of <i>BDT 1,600</i> per vehicle</li>
                        </div>
                    </div>
                    <div className="pItem">
                        <div className="dTitle">
                            <h3>Children & extra beds</h3>
                        </div>
                        <div className="dDetails">
                            <li>Rollaway beds are available for <i>BDT 600</i> per night</li>
                        </div>
                    </div>
                    <div className="pItem">
                        <div className="dTitle">
                            <h3>Policy</h3>
                        </div>
                        <div className="dDetails">
                            <ul>
                                <li>This property accepts credit cards.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pItem">
                        <div className="dTitle">
                            <h3>Also known as</h3>
                        </div>
                        <div className="dDetails">
                            <ul>
                                <li>Britannia Hotel Sylhet</li>
                                <li>Britannia Sylhet</li>
                                <li>Britannia Hotel Hotel</li>
                                <li>Britannia Hotel Hotel Sylhet</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pItem">
                        <div className="dTitle">
                            <h3>Accepted Payment methods</h3>
                        </div>
                        <div className="dDetails">
                            <div className="dIcon">
                                <div className="bank">
                                    <img src={require("../../images/amex.png")} alt="" />
                                    <h6>American<br />Express</h6>
                                </div>
                                <div className="bank">
                                    <img src={require("../../images/master.png")} alt="" />
                                    <h6>MasterCard</h6>
                                </div>
                                <div className="bank">
                                    <img src={require("../../images/visa.png")} alt="" />
                                    <h6>Visa Card</h6>
                                </div>
                                <div className="bank">
                                    <img src={require("../../images/bKash.jpg")} alt="" />
                                    <h6>bKash</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="question">
                <div className="questionLeft">
                    <div className="heading"></div>
                    <div className="hTitle">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                </div>
                <div className="questionRight">
                    <div className="questionTitle">
                        <div className="questionText" id='1' onClick={() => setOpenIcon1(!openIcon1)}>
                            {!openIcon1 && <FontAwesomeIcon icon={faChevronDown} />}
                            {openIcon1 && <FontAwesomeIcon icon={faChevronUp} />}
                            <ul>Does Britannia Hotel offer free cancellation for a full refund?</ul>
                        </div>
                        {openIcon1 && <div className="answerText">
                            <p>
                                Yes, Britannia Hotel has fully refundable rooms available to book on our site. If you book a refundable room rate, this can be canceled up to a few days before check-in depending on the property's policy. Be sure to check this property's cancellation policy for exact terms and conditions.
                            </p>
                        </div>}
                    </div>
                    <div className="questionTitle">
                        <div className="questionText" id='2' onClick={() => setOpenIcon2(!openIcon2)}>
                            {!openIcon2 && <FontAwesomeIcon icon={faChevronDown} />}
                            {openIcon2 && <FontAwesomeIcon icon={faChevronUp} />}
                            <ul>Are pets allowed at Britannia Hotel?</ul>
                        </div>
                        {openIcon2 && <div className="answerText">
                            <p>
                                Sorry, pets are not allowed.
                            </p>
                        </div>}
                    </div>
                    <div className="questionTitle">
                        <div className="questionText" id='3' onClick={() => setOpenIcon3(!openIcon3)}>
                            {!openIcon3 && <FontAwesomeIcon icon={faChevronDown} />}
                            {openIcon3 && <FontAwesomeIcon icon={faChevronUp} />}
                            <ul>Is on-site parking offered at Britannia Hotel?</ul>
                        </div>
                        {openIcon3 && <div className="answerText">
                            <p>
                                Yes, there is free self parking.
                            </p>
                        </div>}
                    </div>
                    <div className="questionTitle">
                        <div className="questionText" id='4' onClick={() => setOpenIcon4(!openIcon4)}>
                            {!openIcon4 && <FontAwesomeIcon icon={faChevronDown} />}
                            {openIcon4 && <FontAwesomeIcon icon={faChevronUp} />}
                            <ul>Is airport shuttle service offered by Britannia Hotel?</ul>
                        </div>
                        {openIcon4 && <div className="answerText">
                            <p>
                                Yes, a shuttle from the airport to the hotel is available. The charge is BDT 1,600 per vehicle.
                            </p>
                        </div>}
                    </div>
                    <div className="questionTitle">
                        <div className="questionText" id='5' onClick={() => setOpenIcon5(!openIcon5)}>
                            {!openIcon5 && <FontAwesomeIcon icon={faChevronDown} />}
                            {openIcon5 && <FontAwesomeIcon icon={faChevronUp} />}
                            <ul>What are the check-in and check-out times at Britannia Hotel?</ul>
                        </div>
                        {openIcon5 && <div className="answerText">
                            <p>
                                You can check in from 12:00 noon - 14:00. Check out time is 11:00.
                            </p>
                        </div>}
                    </div>
                    <div className="questionTitle">
                        <div className="questionText" id='6' onClick={() => setOpenIcon6(!openIcon6)}>
                            {!openIcon6 && <FontAwesomeIcon icon={faChevronDown} />}
                            {openIcon6 && <FontAwesomeIcon icon={faChevronUp} />}
                            <ul>What activities are available at Britannia Hotel and nearby areas?</ul>
                        </div>
                        {openIcon6 && <div className="answerText">
                            <p>
                                Enjoy nearby winter activities like skiing. Britannia Hotel also has a picnic area.
                            </p>
                        </div>}
                    </div>
                    <div className="questionTitle">
                        <div className="questionText" id='7' onClick={() => setOpenIcon7(!openIcon7)}>
                            {!openIcon7 && <FontAwesomeIcon icon={faChevronDown} />}
                            {openIcon7 && <FontAwesomeIcon icon={faChevronUp} />}
                            <ul>Is there a restaurant at Britannia Hotel or nearby?</ul>
                        </div>
                        {openIcon7 && <div className="answerText">
                            <p>
                                Yes, there are 3 on-site restaurants, featuring international cuisine. Nearby restaurants include Blue Mango (5-minute walk), Spicy Restaurant (12-minute walk) and Woondal Restaurant (12-minute walk).
                            </p>
                        </div>}
                    </div>
                    <div className="questionTitle">
                        <div className="questionText" id='8' onClick={() => setOpenIcon8(!openIcon8)}>
                            {!openIcon8 && <FontAwesomeIcon icon={faChevronDown} />}
                            {openIcon8 && <FontAwesomeIcon icon={faChevronUp} />}
                            <ul>What is the atmosphere around Britannia Hotel?</ul>
                        </div>
                        {openIcon8 && <div className="answerText">
                            <p>
                                Britannia Hotel is located by the river, a 6-minute walk from Hazrat Shah Jalal's Tomb and a 16-minute walk from Shahi Eidgah.
                            </p>
                        </div>}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage