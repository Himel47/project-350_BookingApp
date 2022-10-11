import { useNavigate } from 'react-router-dom'
import './gallery.css'

const Gallery = () => {

    const navigate = useNavigate();
    const handleGlr = () => {
        navigate("/gallery");
    }

    return (
        <div className='gallery' id='gallery'>
            <div className="gContainer">
                <div className="left">
                    <div className="heading">
                        <h5>WELCOME TO OUR PHOTO GALLERY</h5>
                        <h2>Photo Gallery of Our Hotel</h2>
                        <p>
                            Structural pictures of our Hotel are present here. You can overview our rooms, Hall-room, Convention Hall etc here. Click 'View Gallery' to visit our gallery section.
                        </p>
                        <button className="gBtn" onClick={handleGlr}>
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