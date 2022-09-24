import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import './hotel.css'

const Hotel = () => {

    const hotelPhotos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231300083.jpg?k=471f6a0d6d08b075b2a43f2bff5b7767335500e942309a797b1ed5bf58633fc5&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231301021.jpg?k=6d7558402501942607ed933f1b3da2042b748f5218c30f88c4992a6c73f56698&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231301018.jpg?k=52dcefec52b01203ac089000d805372df1f29ec5bf510f1eca912585f570ce9d&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231301014.jpg?k=363e3c27ac8b72fb4a6ab9c921b9b8d8fbd995b541356d76ef8aefb15d61524f&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231301044.jpg?k=8df684851ec1bc86f96c9473cdf00b769649d3588c3c64352b2a612e8bde51ba&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/231301130.jpg?k=cc980201d84bad0e0eec9ab984d162fa33f86d4aa6dd15e63357a66e6f7d65f1&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/232340176.jpg?k=fef27d88176a423df0a7a1b128f54df7ccfa539c0e547ca6df24550cf3059cb6&o=&hp=1"
        },
    ];

    return (
        <div>
            <Navbar />
            <Header type="list" />

            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotleTitle">The Grand Hotel</h1>
                    <div className="hotelAdress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Zindabazar, Sylhet, Bangladesh</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 0.5 Km from Center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over BDT 1,584 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {hotelPhotos.map(photo => (
                            <div className="hotelImageWrapper">
                                <img src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>

                    <div className="hotelDetails">
                        <div className="hoteldetailsTexts">
                            <h1 className="hotelTitle">Stay in the Heart of Sylhet</h1>
                            <p className="hotelDesc">
                                At the hotel, every room has a desk, a flat-screen TV, a private bathroom, bed linen and towels. All guest rooms at The Grand Hotel BD are equipped with a seating area. Guests at the accommodation can enjoy an Asian breakfast. You can play pool at The Grand Hotel BD, and car rental is available. Cherrapunji is 48.3 km from the hotel, while Mawlynnong is 33.8 km away. Couples in particular like the location – they rated it 8.8 for a two-person trip. The Grand Hotel BD has been welcoming Booking.com guests since Jan 15, 2020. Distance in property description is calculated using © OpenStreetMap
                            </p>
                        </div>
                        <div className="hoteldetailsPrice">
                            <h1>Perfect for a 7-night Stay!</h1>
                            <span>
                                Located in the real heart of Sylhet, has an excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>BDT 7,500</b> (7 nights)
                            </h2>
                            <button>Reserve or Book now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel