import './galleryFull.css'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const GalleryFull = () => {

    const [slideNum, setSlideNum] = useState(0);
    const [open, setOpen] = useState(false);

    const galleryPhotos = [
        {
            src: require('../../Gallery/1.jpg')
        },
        {
            src: require('../../Gallery/2.jpg')
        },
        {
            src: require('../../Gallery/3.jpg')
        },
        {
            src: require('../../Gallery/4.jpg')
        },
        {
            src: require('../../Gallery/5.jpg')
        },
        {
            src: require('../../Gallery/6.jpg')
        },
        {
            src: require('../../Gallery/7.jpg')
        },
        {
            src: require('../../Gallery/8.jpg')
        },
        {
            src: require('../../Gallery/9.jpg')
        },
        {
            src: require('../../Gallery/10.jpg')
        },
        {
            src: require('../../Gallery/11.jpg')
        },
        {
            src: require('../../Gallery/12.jpg')
        },
        {
            src: require('../../Gallery/13.jpg')
        },
        {
            src: require('../../Gallery/14.jpg')
        },
        {
            src: require('../../Gallery/15.jpg')
        },
        {
            src: require('../../Gallery/16.jpg')
        },
        {
            src: require('../../Gallery/17.jpg')
        },
        {
            src: require('../../Gallery/18.jpg')
        },
        {
            src: require('../../Gallery/19.jpg')
        },
        {
            src: require('../../Gallery/20.jpg')
        },
        {
            src: require('../../Gallery/21.jpg')
        },
        {
            src: require('../../Gallery/22.jpg')
        },
    ];

    const handleOpen = (i) => {
        setSlideNum(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNum;

        if (direction === "l") {
            newSlideNum = slideNum === 0 ? 21 : slideNum - 1;
        }
        else {
            newSlideNum = slideNum === 21 ? 0 : slideNum + 1;
        }

        setSlideNum(newSlideNum);
    };

    return (
        <div className="galleryFull">
            {open && <div className="slider">
                <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
                <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
                <div className="sliderWrapper">
                    <img src={galleryPhotos[slideNum].src} alt="" className="sliderImg" />
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
            </div>}
            <div className="gWrapper">
                <div className="heading">
                    <h5>WELCOME TO OUR PHOTO GALLERY</h5>
                    <h2>Photo Gallery of Our Hotel</h2>
                </div>
                <div className="hotelImages">
                    {galleryPhotos.map((photo, i) => (
                        <div className="hotelImageWrapper">
                            <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GalleryFull