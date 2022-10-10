import './gallery.css'

const Gallery = () => {
    return (
        <div className='gallery'>
            <div className="gContainer">
                <div className="left">
                    <div className="heading">
                        <h5>WELCOME TO OUR PHOTO GALLERY</h5>
                        <h2>Photo Gallery of Our Hotel</h2>
                        <p>
                            Structural pictures of our Hotel are present here. You can overview our rooms, Hall-room, Convention Hall etc here. Click 'View Gallery' to visit our gallery section.
                        </p>
                        <button className="gBtn">
                            View GALLERY
                        </button>
                    </div>
                </div>
                <div className="right">
                    <div className="img">
                        <img src={require('../../images/a11.jpg')} alt="" className='image1' />
                        <img src={require('../../images/h2.jpg')} alt="" className="image2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery