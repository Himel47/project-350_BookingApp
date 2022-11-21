import Footer from '../../components/footer/Footer'
import GalleryFull from '../../components/galleryFull/GalleryFull'
import Navbar from '../../components/navbar/Navbar'
import './galleryPage.css'

const GalleryPage = () => {

    return (
        <div className="galleryPage">
            <Navbar />
            <GalleryFull />
            <Footer />
        </div>
    )
}

export default GalleryPage