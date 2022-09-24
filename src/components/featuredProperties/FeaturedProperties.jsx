import './featuredProperties.css'

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/96018281.jpg?k=7c1a7adcd277563a42aef7d4d6582a69bb46725959a2e3e6b50de44d1e8b2afc&o=&hp=1" alt="" className="fpImg" />
                <span className="fpName">Noorjahan Grand Hotel</span>
                <span className="fpCity">Sylhet</span>
                <span className="fpPrice">Starting from BDT 5,793</span>
                <div className="fpRating">
                    <button>8.1</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/270909246.jpg?k=5e236207a2fe4691feb0b6fb28a0a40a8bb70974ba6ee2b3ae6643d0f1d534f3&o=&hp=1" alt="" className="fpImg" />
                <span className="fpName">Britannia Hotel</span>
                <span className="fpCity">Sylhet</span>
                <span className="fpPrice">Starting from BDT 1,669</span>
                <div className="fpRating">
                    <button>7.3</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/175327436.jpg?k=f795021900a3241aa117cb22a88c5db32accc262dc4de8671b2400961f72d311&o=&hp=1" alt="" className="fpImg" />
                <span className="fpName">Hotel Mira Garden</span>
                <span className="fpCity">Sylhet</span>
                <span className="fpPrice">Starting from BDT 2,972</span>
                <div className="fpRating">
                    <button>8.1</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>

    )
}

export default FeaturedProperties